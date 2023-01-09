import { mapTree, clone, isPlainObject } from './utils'
import stepper from './stepper'

const zero = () => 0
const FRAME_RATE = 1 / 60

export default {
  props: {
    endValue: {
      type: [Function, Object, Array],
      required: true
    }
  },
  data() {
    let endValue = this.endValue
    if (typeof endValue === 'function') {
      endValue = endValue()
    } else {
      endValue = clone(endValue)
    }

    return {
      currVals: endValue,
      currV: mapTree(zero, endValue),
      now: null
    }
  },
  watch: {
    endValue: {
      deep: true,
      handler() {
        this.raf(true, false)
      }
    }
  },
  mounted() {
    this._rafId = null
    this.raf(true, false)
  },
  destroyed() {
    cancelAnimationFrame(this._rafId)
  },
  methods: {
    raf(justStated, isLastRaf) {
      if (justStated && this._rafId !== null) {
        return
      }

      this._rafId = requestAnimationFrame(() => {
        const { currVals, currV, now } = this
        let endValue = this.endValue

        if (typeof endValue === 'function') {
          endValue = endValue(currVals)
        }

        const frameRate =
          now && !justStated ? (Date.now() - now) / 1000 : FRAME_RATE
        const newCurrVals = updateCurrVals(frameRate, currVals, currV, endValue)
        const newCurrV = updateCurrV(frameRate, currVals, currV, endValue)

        this.currVals = newCurrVals
        this.currV = newCurrV
        this.now = Date.now()

        const stop = noSpeed(newCurrV)
        if (stop && !justStated) {
          if (isLastRaf) {
            this._rafId = null
          } else {
            this.raf(false, true)
          }
        } else {
          this.raf(false, false)
        }
      })
    }
  },
  render() {
    console.log(this.currVals)

    return this.currVals
  }
}

function updateCurrVals(frameRate, currVals, currV, endValue, k, b) {
  if (endValue === null) {
    return null
  }
  if (typeof endValue === 'number') {
    if (k == null || b == null) {
      return endValue
    }
    // TODO: do something to stepper to make this not allocate (2 steppers?)
    return stepper(frameRate, currVals, currV, endValue, k, b)[0]
  }
  if (endValue.val != null && endValue.config && endValue.config.length === 0) {
    return endValue
  }
  if (endValue.val != null) {
    const [_k, _b] = endValue.config || [170, 26]
    let ret = {
      val: updateCurrVals(
        frameRate,
        currVals.val,
        currV.val,
        endValue.val,
        _k,
        _b
      )
    }
    if (endValue.config) {
      ret.config = endValue.config
    }
    return ret
  }
  if (Array.isArray(endValue)) {
    return endValue.map((_, i) =>
      updateCurrVals(frameRate, currVals[i], currV[i], endValue[i], k, b)
    )
  }
  if (isPlainObject(endValue)) {
    const ret = {}
    Object.keys(endValue).forEach((key) => {
      ret[key] = updateCurrVals(
        frameRate,
        currVals[key],
        currV[key],
        endValue[key],
        k,
        b
      )
    })
    return ret
  }
  return endValue
}

function updateCurrV(frameRate, currVals, currV, endValue, k, b) {
  if (endValue === null) {
    return null
  }
  if (typeof endValue === 'number') {
    if (k == null || b == null) {
      return mapTree(zero, currV)
    }
    // TODO: do something to stepper to make this not allocate (2 steppers?)
    return stepper(frameRate, currVals, currV, endValue, k, b)[1]
  }
  if (endValue.val != null && endValue.config && endValue.config.length === 0) {
    return mapTree(zero, currV)
  }
  if (endValue.val != null) {
    const [_k, _b] = endValue.config || [170, 26]
    let ret = {
      val: updateCurrV(frameRate, currVals.val, currV.val, endValue.val, _k, _b)
    }
    if (endValue.config) {
      ret.config = endValue.config
    }
    return ret
  }
  if (Array.isArray(endValue)) {
    return endValue.map((_, i) =>
      updateCurrV(frameRate, currVals[i], currV[i], endValue[i], k, b)
    )
  }
  if (isPlainObject(endValue)) {
    const ret = {}
    Object.keys(endValue).forEach((key) => {
      ret[key] = updateCurrV(
        frameRate,
        currVals[key],
        currV[key],
        endValue[key],
        k,
        b
      )
    })
    return ret
  }
  return mapTree(zero, currV)
}

function noSpeed(coll) {
  if (Array.isArray(coll)) {
    return coll.every(noSpeed)
  }

  if (isPlainObject(coll)) {
    return Object.keys(coll).every((key) =>
      key === 'config' ? true : noSpeed(coll[key])
    )
  }

  return typeof coll === 'number' ? coll === 0 : true
}

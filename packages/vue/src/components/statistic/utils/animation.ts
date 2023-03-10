import * as easing from './easing'

export type easingType =
  | 'easeOutCubic'
  | 'linear'
  | 'easeOutExpo'
  | 'easeInOutExpo'
export interface startFunc {
  (key: number): number
}
export interface updateFunc {
  (key: any): any
}
export interface finishFunc {
  (key: any): any
}
export interface fromType {
  value: number
}
export interface toType {
  value: number
}
export interface AnimationOptions {
  from: fromType
  to: toType
  duration?: number
  delay?: number
  easingType?: easingType
  onStart?: startFunc
  onUpdate?: updateFunc
  onFinish?: finishFunc
}

export class Tween {
  from: fromType

  to: toType

  duration?: number

  delay?: number

  easing?: easingType

  onStart?: startFunc

  onUpdate?: updateFunc

  onFinish?: finishFunc

  startTime?: number

  started?: boolean

  finished?: boolean

  timer?: null | number

  time?: number

  elapsed?: number

  keys?: any

  constructor(options: AnimationOptions) {
    const {
      from,
      to,
      duration,
      delay,
      easingType,
      onStart,
      onUpdate,
      onFinish
    } = options
    for (const key in from) {
      if (to[key] === undefined) {
        to[key] = from[key]
      }
    }

    for (const key in to) {
      if (from[key] === undefined) {
        from[key] = to[key]
      }
    }

    this.from = from
    this.to = to
    this.duration = duration
    this.delay = delay
    this.easing = easingType
    this.onStart = onStart
    this.onUpdate = onUpdate
    this.onFinish = onFinish
    this.startTime = Date.now() + this.delay
    this.started = false
    this.finished = false
    this.timer = null
    this.keys = {}
  }

  update(): void {
    this.time = Date.now()
    // delay some time
    if (this.time < this.startTime) {
      return
    }
    if (this.finished) {
      return
    }
    // finish animation
    if (this.elapsed === this.duration) {
      if (!this.finished) {
        this.finished = true
        // eslint-disable-next-line no-unused-expressions
        this.onFinish && this.onFinish(this.keys)
      }
      return
    }
    // elapsed ?????? ???  duration ???????????? ????????????
    this.elapsed = this.time - this.startTime
    // ?????? ?????? ?????? ?????? ~
    this.elapsed = this.elapsed > this.duration ? this.duration : this.elapsed
    // ???0 ??? 1 elapsed time
    // eslint-disable-next-line guard-for-in
    for (const key in this.to) {
      this.keys[key] =
        this.from[key] +
        (this.to[key] - this.from[key]) *
          // eslint-disable-next-line import/namespace
          easing[this.easing](this.elapsed / this.duration)
    }
    if (!this.started) {
      // eslint-disable-next-line no-unused-expressions
      this.onStart && this.onStart(this.keys)
      this.started = true
    }
    this.onUpdate(this.keys)
  }

  // ?????? ??????
  start(): void {
    this.startTime = Date.now() + this.delay
    const tick = () => {
      this.update()
      this.timer = requestAnimationFrame(tick)
      if (this.finished) {
        // ????????? update??? ????????? ?????? ??????
        cancelAnimationFrame(this.timer)
        this.timer = null
      }
    }
    tick()
  }

  stop(): void {
    cancelAnimationFrame(this.timer)
    this.timer = null
  }
}

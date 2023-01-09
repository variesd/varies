import * as easing from '@variesd/animated'

export interface FromType {
  value: number
}
export interface ToType {
  value: number
}

export type EasingType =
  | 'easeOutCubic'
  | 'linear'
  | 'easeOutExpo'
  | 'easeInOutExpo'
export type FormAndToAttributesType = 'value' | unknown
export type StartFunc = () => void
export type UpdateFunc = (key: ToType) => void
export type FinishFunc = () => void

export interface AnimationOptions {
  from: FromType
  to: ToType
  duration?: number
  delay?: number
  easing?: EasingType
  onStart: StartFunc
  onUpdate: UpdateFunc
  onFinish: FinishFunc
}

export const DATE_NOW = Date.now()

export class Tween {
  private startTime: number | null = null

  private started?: boolean = false

  private finished?: boolean = false

  private frameRequest?: number

  private time?: number

  private elapsed?: number

  private keys: ToType = { value: 0 }

  constructor(public options: AnimationOptions) {
    const { from, to, delay } = options
    ;[from, to].forEach((item) => {
      if (item === undefined) {
        console.warn('[@varies/vue]: counter components need from and to props')
      }
    })
    this.initStartTime(delay)
  }

  private initStartTime(delay = 0) {
    this.startTime = DATE_NOW + delay
  }

  update(): void {
    this.time = Date.now()
    // delay some time
    if (this.startTime && this.time < this.startTime) {
      return
    }
    if (this.finished) {
      return
    }
    // finish animation
    if (this.elapsed === this.options.duration) {
      if (!this.finished) {
        this.finished = true
        if (this.options.onFinish) {
          this.options.onFinish()
        }
      }
      return
    }
    // elapsed 时间 和  duration 时间比较 逝去光阴
    this.elapsed = this.time - (this.startTime ?? 0)

    // 防止 时间 一直 流逝 ~
    this.elapsed =
      this.elapsed > (this.options.duration ?? 0)
        ? this.options.duration
        : this.elapsed
    // 从0 到 1 elapsed time
    // eslint-disable-next-line guard-for-in
    for (const key in this.options.to) {
      this.keys[key] =
        this.options.from[key] +
        (this.options.to[key] - this.options.from[key]) *
          easing[this.options.easing!](this.elapsed! / this.options.duration!)
    }
    if (!this.started) {
      if (this.options.onStart) {
        this.options.onStart()
      }
      this.started = true
    }
    if (this.options.onUpdate) {
      this.options.onUpdate(this.keys)
    }
  }

  // 递归 重绘
  start(): void {
    this.startTime = Date.now() + (this.options.delay ?? 0)
    const tick = () => {
      this.update()
      this.frameRequest = requestAnimationFrame(tick)
      if (this.finished) {
        // 在判断 update中 结束后 停止 重绘
        cancelAnimationFrame(this.frameRequest)
      }
    }
    tick()
  }

  stop(): void {
    cancelAnimationFrame(this.frameRequest)
  }
}

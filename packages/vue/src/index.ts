import type { App } from 'vue-demi'
import Statistic from './statistic/statistic.vue'

Statistic.install = (app: App): void => {
  app.component(Statistic.name, Statistic)
  console.log(Statistic)
}

export { Statistic }

export default {
  install(app: App): void {
    app.use(Statistic as any)
  }
}

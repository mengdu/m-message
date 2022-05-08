export * from './message'
import { App, Plugin } from 'vue'
import message, { MessageTypeOptions } from './message'
import './style.less'

type WithInstall<T> = T & Plugin
type PluginInstallFunction = (app: App, ...options: any[]) => any;

const withInstall = <T>(t: T, fn: PluginInstallFunction) => {
  ;(t as WithInstall<T>).install = fn
  return t as WithInstall<T>
}

declare module 'vue' {
  interface ComponentCustomProperties {
    $mmessage: typeof message
  }
}

export default withInstall(message, function (app: App, options: { name?: string, defaultOptions?: MessageTypeOptions } = {}) {
  message._context = app._context
  app.config.globalProperties['$' + (options.name || 'mmessage')] = message
  if (options.defaultOptions) {
    message.setDefault(options.defaultOptions)
  }
})

import type { PluginObject } from 'vue'

type SFCWithInstall<T> = T & PluginObject<T>
interface extendsName {
  name: string;
}

export const withInstall = <T extends extendsName>(component: T) => {
  (component as SFCWithInstall<T>).install = function (app) {
    app.component(component.name, component)
  }
  return component as SFCWithInstall<T>
}

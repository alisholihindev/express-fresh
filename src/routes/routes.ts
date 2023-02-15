import { Application, Router } from 'express'
import { RoleRouter } from './RoleRoutes'

const _routes: Array<[string, Router]> = [['/role', RoleRouter]]

export const routes = (app: Application) => {
  _routes.forEach((route) => {
    const [url, router] = route
    app.use(url, router)
  })
}

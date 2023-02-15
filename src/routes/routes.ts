import { Application, Router } from 'express'

const _routes: Array<[string, Router]> = []

export const routes = (app: Application) => {
  _routes.forEach((route) => {
    const [url, router] = route
    app.use(url, router)
  })
}

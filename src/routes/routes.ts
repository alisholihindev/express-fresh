import { Application, Router } from 'express'
import { UserRouter } from '../app/user/userRouter'

const _routes: Array<[string, Router]> = [['/user', UserRouter]]

export const routes = (app: Application) => {
  _routes.forEach((route) => {
    const [url, router] = route
    app.use(url, router)
  })
}

/* eslint-disable @typescript-eslint/no-misused-promises */
import { Router } from 'express'
import { CreateRole, DeleteRole, GetRole, UpdateRole } from '../controllers/RoleController'

export const RoleRouter: Router = Router()

RoleRouter.get('/', GetRole)
RoleRouter.post('/', CreateRole)
RoleRouter.put('/:id', UpdateRole)
RoleRouter.delete('/:id', DeleteRole)

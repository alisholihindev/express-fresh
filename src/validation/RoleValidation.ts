import Joi from 'joi'
import { RoleAttributes } from '../interfaces/RoleInterface'

export const createRoleValidation = (payload: RoleAttributes) => {
  const schema = Joi.object({
    roleName: Joi.string().required(),
    active: Joi.boolean().required()
  })

  return schema.validate(payload)
}

export const updateRoleValidation = (payload: RoleAttributes) => {
  const schema = Joi.object({
    roleName: Joi.string().allow('', null),
    active: Joi.boolean().allow('', null)
  })

  return schema.validate(payload)
}

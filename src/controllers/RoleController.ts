import { Request, Response } from 'express'
import { logger } from '../utils/logger'
import Role from '../models/role'
import { createRoleValidation, updateRoleValidation } from '../validation/RoleValidation'

export const GetRole = async (req: Request, res: Response) => {
  try {
    const roles = await Role.findAll({
      where: {
        active: 1
      }
    })
    return res.status(200).send({
      status: 200,
      message: 'OK',
      data: roles
    })
  } catch (error: any) {
    if (error != null && error instanceof Error) {
      return res.status(500).send({
        status: 500,
        message: error.message,
        errors: error
      })
    }

    return res.status(500).send({
      status: 500,
      message: 'internal server error',
      error: error
    })
  }
}

export const CreateRole = async (req: Request, res: Response) => {
  const { error, value } = createRoleValidation(req.body)
  if (error != null) {
    logger.error('ERR: product - create = ', error.details[0].message)
    return res.status(422).send({ status: false, statusCode: 422, message: error.details[0].message })
  }

  try {
    const roles = await Role.create(value)
    return res.status(201).send({
      status: 201,
      message: 'Created',
      data: roles
    })
  } catch (error: any) {
    if (error != null && error instanceof Error) {
      return res.status(500).send({
        status: 500,
        message: error.message,
        errors: error
      })
    }

    return res.status(500).send({
      status: 500,
      message: 'internal server error',
      error: error
    })
  }
}

export const UpdateRole = async (req: Request, res: Response) => {
  const {
    params: { id }
  } = req

  const { error, value } = updateRoleValidation(req.body)

  if (error != null) {
    logger.error('ERR: product - create = ', error.details[0].message)
    return res.status(422).send({ status: false, statusCode: 422, message: error.details[0].message })
  }

  try {
    const role = await Role.findByPk(id)

    if (role == null) {
      return res.status(404).send({
        status: 404,
        message: 'Data not found',
        data: null
      })
    }

    role.roleName = value.roleName
    role.active = value.active

    await role.save()

    return res.status(200).send({
      status: 200,
      message: 'Updated',
      data: role
    })
  } catch (error: any) {
    if (error != null && error instanceof Error) {
      return res.status(500).send({
        status: 500,
        message: error.message,
        errors: error
      })
    }

    return res.status(500).send({
      status: 500,
      message: 'internal server error',
      error: error
    })
  }
}

export const DeleteRole = async (req: Request, res: Response) => {
  const {
    params: { id }
  } = req

  try {
    const role = await Role.findByPk(id)

    if (role == null) {
      return res.status(404).send({
        status: 404,
        message: 'Data not found',
        data: null
      })
    }

    await role.destroy()

    return res.status(200).send({
      status: 200,
      message: 'Deleted',
      data: null
    })
  } catch (error: any) {
    if (error != null && error instanceof Error) {
      return res.status(500).send({
        status: 500,
        message: error.message,
        errors: error
      })
    }

    return res.status(500).send({
      status: 500,
      message: 'internal server error',
      error: error
    })
  }
}

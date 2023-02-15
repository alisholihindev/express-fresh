import { Optional } from 'sequelize'

export interface RoleAttributes {
  id?: number
  roleName?: string | null
  active?: boolean | null

  createdAt?: Date
  updatedAt?: Date
}

export interface RoleInput extends Optional<RoleAttributes, 'id'> {}
export interface RoleOutput extends Required<RoleAttributes> {}

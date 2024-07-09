import { DataTypes, Model } from 'sequelize'
import connection from '../config/dbConnect'
import { RoleAttributes, RoleInput } from '../interfaces/RoleInterface'

/**
 * @swagger
 * components:
 *   schemas:
 *     Role:
 *       type: object
 *       required:
 *         - name
 *         - email
 *       properties:
 *         id:
 *           type: Integer
 *           description: The auto-generated id of the Role
 *         roleName:
 *           type: string
 *           description: The name of the Role
 *         active:
 *           type: boolean
 *           description: Role Status
 *       example:
 *         id: 3
 *         roleName: admin
 *         active: 1
 */
class Role extends Model<RoleAttributes, RoleInput> implements RoleAttributes {
  public id!: string
  public roleName!: string
  public active!: boolean

  public readonly createdAt!: Date
  public readonly updatedAt!: Date
}

Role.init(
  {
    id: {
      allowNull: false,
      primaryKey: true,
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4
    },
    roleName: {
      allowNull: true,
      type: DataTypes.STRING
    },
    active: {
      allowNull: true,
      type: DataTypes.BOOLEAN
    }
  },
  {
    timestamps: true,
    sequelize: connection,
    underscored: false
  }
)

export default Role

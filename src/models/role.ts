import { DataTypes, Model } from 'sequelize'
import connection from '../config/dbConnect'
import { RoleAttributes, RoleInput } from '../interfaces/RoleInterface'

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

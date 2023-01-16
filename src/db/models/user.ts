'use strict';
import { DataTypes, Model} from 'sequelize'
import sequelizeConnection from '../config/connection';

interface UserAttributes {
  id: number;
  balance: number;
  createdAt?: Date;
  updatedAt?: Date;
  deletedAt?: Date;
}

class User extends Model<UserAttributes> implements UserAttributes {
  public id!: number
  public balance!: number
  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
  public readonly deletedAt!: Date;
}

User.init({
  id: {
    type: DataTypes.INTEGER.UNSIGNED,
    autoIncrement: true,
    primaryKey: true,
  },
  balance: {
    type: DataTypes.INTEGER,
    defaultValue: 10000
  }
}, {
  timestamps: true,
  sequelize: sequelizeConnection,
  paranoid: true
})

export default User;
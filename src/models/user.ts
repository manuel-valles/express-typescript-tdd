import { DataTypes, Model } from 'sequelize';
import sequelize from '../config/sequelize';

export interface UserAttributes {
  firstName: string;
  lastName: string;
  admin: boolean;
}

export default class UserInstance extends Model<UserAttributes> {}

UserInstance.init(
  {
    firstName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    lastName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    admin: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false,
    },
  },
  {
    sequelize,
    tableName: 'users',
  }
);

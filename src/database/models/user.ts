import { Sequelize, Model, DataTypes, BuildOptions } from 'sequelize';

const sequelize = new Sequelize('mysql://root:@localhost:3306/ts-rest');

interface User extends Model {
  readonly id: number;
  firstName: string;
  lastName: string;
  email: string;
  password: string;
}

// Need to declare the static model so `findOne` etc. use correct types.
type UserStatic = typeof Model & {
  new(values?: object, options?: BuildOptions): User;
}

// TS can't derive a proper class definition from a `.define` call, therefor we need to cast here.
const User = <UserStatic>sequelize.define('users', {
  id: {
    type: DataTypes.INTEGER.UNSIGNED,
    autoIncrement: true,
    primaryKey: true,
  },
  firstName: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  lastName: {
    type: DataTypes.STRING,
    allowNull: false
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false
  },
  password: {
    type: DataTypes.STRING
  }
});
User.prototype.toJSON = function () {
  let values = Object.assign({}, this.get());

  delete values.password;
  return values;
};
export default User

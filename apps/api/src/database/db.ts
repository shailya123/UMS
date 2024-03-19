
import { DataTypes, Sequelize } from 'sequelize';

DataTypes.DATE.prototype._stringify = function _stringify(date: any, options: any) {

  return this._applyTimezone(date, options).format('YYYY-MM-DD HH:mm:ss');

};

export const sequelize = new Sequelize({
  username: 'root',
  password: 'root',
  database: 'shopmart',
  host: 'localhost',
  dialect: 'mysql',
  dialectOptions: {
    encrypt: true,
  },
  timezone: Intl.DateTimeFormat().resolvedOptions().timeZone,
});
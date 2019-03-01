import { Application } from 'egg';

// uid answer_id 存在就说明用户点了感谢
export default (app: Application) => {
  const { INTEGER } = app.Sequelize;

  const UserThankful = app.model.define('user_thankful', {
    uid: {
      type: INTEGER.UNSIGNED,
      primaryKey: true,
    },
    answer_id: {
      type: INTEGER.UNSIGNED,
      primaryKey: true,
    },
  });

  return UserThankful;
};

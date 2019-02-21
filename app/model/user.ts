import { Application } from 'egg';

export default (app: Application) => {
  const { INTEGER, STRING } = app.Sequelize;

  const User = app.model.define('user', {
    id: {
      type: INTEGER.UNSIGNED,
      primaryKey: true,
      autoIncrement: true,
      comment: '主键',
    },
    email: {
      type: STRING,
      unique: true,
    },
    nickname: {
      type: STRING,
      unique: true,
      comment: '用户昵称',
    },
    password: {
      type: STRING,
      comment: '密码',
    },
    avatar: {
      type: STRING,
      comment: '头像地址',
    },
    cover: {
      type: STRING,
      comment: '用户封面',
    },
    follower_number: {
      type: INTEGER.UNSIGNED,
      comment: '关注了多少人',
    },
    fans_number: {
      type: INTEGER.UNSIGNED,
      comment: '有多少人关注',
    },
    sex: {
      type: INTEGER.UNSIGNED,
      defaultValue: 0,
      comment: '性别: 0 未知, 1 男, 2 女',
    },
  });

  return User;
};

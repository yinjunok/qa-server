import { Application } from 'egg';

export default (app: Application) => {
  const { INTEGER, STRING, TEXT } = app.Sequelize;

  const Question = app.model.define('user', {
    id: {
      type: INTEGER.UNSIGNED,
      primaryKey: true,
      autoIncrement: true,
      comment: '主键',
    },
    title: {
      type: STRING,
      unique: true,
      comment: '问题标题',
    },
    desc: {
      type: TEXT,
      comment: '问题描述',
    },
    followers_number: {
      type: INTEGER.UNSIGNED,
      comment: '关注者',
    },
    viewed: {
      type: INTEGER.UNSIGNED,
      comment: '被浏览数量',
    },
  });

  return Question;
};

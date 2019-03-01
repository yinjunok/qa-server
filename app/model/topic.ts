import { Application } from 'egg';

export default (app: Application) => {
  const { INTEGER, STRING, TEXT } = app.Sequelize;

  const Topic = app.model.define('topic', {
    id: {
      type: INTEGER.UNSIGNED,
      primaryKey: true,
      autoIncrement: true,
      comment: '主键',
    },
    avatar: {
      type: STRING,
    },
    name: {
      type: STRING,
      unique: true,
    },
    desc: {
      type: TEXT,
      comment: '话题描述',
    },
    followers_number: {
      type: INTEGER.UNSIGNED,
      comment: '关注者',
    },
    questions_number: {
      type: INTEGER.UNSIGNED,
      comment: '问题数量',
    },
  });

  return Topic;
};

import { Application } from 'egg';

export default (app: Application) => {
  const { INTEGER, TEXT } = app.Sequelize;

  const Answer = app.model.define('answer', {
    id: {
      type: INTEGER.UNSIGNED,
      primaryKey: true,
      autoIncrement: true,
      comment: '主键',
    },
    content: {
      type: TEXT,
      comment: '回答内容',
    },
    author_id: {
      type: INTEGER.UNSIGNED,
      comment: '作者 id',
    },
    vote_up_number: {
      type: INTEGER.UNSIGNED,
      comment: '赞同数量',
    },
    comment_number: {
      type: INTEGER.UNSIGNED,
      comment: '评论数量',
    },
  });

  return Answer;
};

import { Application } from 'egg';

export default (app: Application) => {
  const { INTEGER } = app.Sequelize;

  const Answer = app.model.define('user', {
    id: {
      type: INTEGER.UNSIGNED,
      primaryKey: true,
      autoIncrement: true,
      comment: '主键',
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

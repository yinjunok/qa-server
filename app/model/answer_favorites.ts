import { Application } from 'egg';

// 收藏的回答
export default (app: Application) => {
  const { INTEGER } = app.Sequelize;

  const AnswerFavorites = app.model.define('user', {
    favorites_id: {
      type: INTEGER.UNSIGNED,
      primaryKey: true,
      comment: '所属收藏夹 id',
    },
    answer_id: {
      type: INTEGER.UNSIGNED,
      primaryKey: true,
      comment: '回答 id',
    },
  });

  return AnswerFavorites;
};

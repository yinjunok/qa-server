import { Application } from 'egg';

export default (app: Application) => {
  const { INTEGER, TINYINT } = app.Sequelize;

  const UserVote = app.model.define('user', {
    uid: {
      type: INTEGER.UNSIGNED,
      primaryKey: true,
    },
    answer_id: {
      type: INTEGER.UNSIGNED,
      primaryKey: true,
    },
    vote: {
      type: TINYINT.UNSIGNED,
      comment: '0 赞同, 1 反对',
    },
  });

  return UserVote;
};

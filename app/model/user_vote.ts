import { Application } from 'egg';

// 对答案的投票
export default (app: Application) => {
  const { INTEGER, TINYINT } = app.Sequelize;

  const UserVote = app.model.define('user_vote', {
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

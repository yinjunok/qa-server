import { Application } from 'egg';

export default (app: Application) => {
  const { INTEGER, TINYINT } = app.Sequelize;

  const UserRelation = app.model.define('user', {
    uid: {
      type: INTEGER.UNSIGNED,
      primaryKey: true,
    },
    relation_uid: {
      type: INTEGER.UNSIGNED,
      primaryKey: true,
      comment: '另一个人的 id',
    },
    relationship: {
      type: TINYINT.UNSIGNED,
      comment: '没有记录的双方是路人, 0 关注, 1 黑名单',
    },
  });

  return UserRelation;
};

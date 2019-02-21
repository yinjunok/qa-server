import { Application } from 'egg';

// 收藏夹
export default (app: Application) => {
  const { INTEGER, STRING, TINYINT } = app.Sequelize;

  const Favorites = app.model.define('user', {
    id: {
      type: INTEGER.UNSIGNED,
      primaryKey: true,
      autoIncrement: true,
      comment: '主键',
    },
    uid: {
      type: INTEGER.UNSIGNED,
      comment: '所属用户id',
    },
    name: {
      type: STRING,
      comment: '收藏夹名字',
    },
    answer_number: {
      type: INTEGER.UNSIGNED,
      comment: '收藏夹回答的数量',
    },
    follow_number: {
      type: INTEGER.UNSIGNED,
      comment: '关注人数',
    },
    private: {
      type: TINYINT.UNSIGNED,
      comment: '0 公开, 1 私人. 关注人数大于 0 的时候不能设置为私人收藏夹',
    },
  }, {
    indexes: [
      {
        fields: [ 'uid' ],
      },
    ],
  });

  return Favorites;
};

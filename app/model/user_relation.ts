import { Application } from 'egg';

export default (app: Application) => {
  const { INTEGER } = app.Sequelize;
  
  const UserRelation = app.model.define('user', {
    user_id: {
      type: INTEGER.UNSIGNED,
      primaryKey: true,
    },
    follow_uid: {
      type: INTEGER.UNSIGNED,
      primaryKey: true,
      comment: '关注用户的 id'
    }
  });

  return UserRelation;
}

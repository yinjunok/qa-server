import { Application } from 'egg';

export default (app: Application) => {
  const { INTEGER } = app.Sequelize;

  const ${1} = app.model.define('user', {
    id: {
      type: INTEGER.UNSIGNED,
      primaryKey: true,
      autoIncrement: true,
      comment: '主键',
    },

  });

  return ${1};
};

import { Application } from 'egg';

export default (app: Application) => {
  const { controller, router } = app;

  router.get('/', controller.home.index);

  // 登录相关
  router.post('/login/login', controller.login.login);
  router.post('/login/sign-up', controller.login.signUp);
  router.post('/login/logout', controller.login.logout);
};

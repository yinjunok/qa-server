import { Controller } from 'egg';
import { isEmail, isLength, isEmpty } from 'validator';

interface ISignUp {
  email: string;
  nickname: string;
  password: string;
}

export default class LoginController extends Controller {
  // 登录
  public async login() {

  }

  // 注册
  public async signUp() {
    const { ctx } = this;
    const params: ISignUp = ctx.request.body;
    if (!isEmail(params.email)) {
      ctx.body = {
        error_code: '1001',
        message: '邮箱格式不正确',
      };
    }

    if (isEmpty(params.nickname)) {
      ctx.body = {
        error_code: '1002',
        message: '昵称不能为空',
      };
    }

    if (isLength(params.password, { min: 6, max: 20 })) {
      ctx.body = {
        error_code: '1003',
        message: '密码长度应该在 6~20 位',
      };
    }

    ctx.body = ctx.request.body;
  }

  // 登出
  public async logout() {

  }
}

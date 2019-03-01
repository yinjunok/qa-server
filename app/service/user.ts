import { Service } from "egg";

/**
 * Test Service
 */
export default class User extends Service {
  /**
   * sayHi to you
   * @param email - 用户邮箱
   * @param nickname - 用户昵称
   * @returns 0 用户不存在, 1 邮箱已被注册, 2 昵称存在
   */
  public async isExists(email: string, nickname: string) {
    const {
      ctx: { logger },
      app: { model },
    } = this;

    try {
      const [ emailExists, nicknameExists ] = await Promise.all([
        model.User.findOne({ where: { email } }),
        model.User.findOne({ where: { nickname } }),
      ]);

      if (emailExists !== null) {
        return 1;
      }

      if (nicknameExists !== null) {
        return 2;
      }

      return 0;
    } catch (err) {
      logger.error(err);
    }
  }
}

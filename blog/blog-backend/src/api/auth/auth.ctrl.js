import Joi from 'joi';
import User from '../../models/user';

/* 
    POST /api/auth/register
    {
        username: 'LEE',
        password: 'mypass123'
    }
*/

export const register = async (ctx) => {
  //Requset Body 검증
  const schema = Joi.object().keys({
    username: Joi.string().alphanum().min(3).max(20).required(),
    password: Joi.string().required(),
  });
  const result = schema.validate(ctx.request.body);
  if (result.error) {
    ctx.status = 400;
    ctx.body = result.error;
    return;
  }
  const { username, password } = ctx.request.body;
  try {
    const exists = await User.findbyUsername(username);
    if (exists) {
      ctx.status = 409; // Conflict
    }
    const user = new User({
      username,
    });
    await user.setPassword(password); // 비밀번호 설정
    await user.save(); // DB저장

    const data = user.toJSON();
    delete data.hashedPassword;
    ctx.body = user.serialize();
    const token = user.generateToken();
    ctx.cookies.set('access_token', token, {
      maxAge: 1000 * 60 * 60 * 24 * 7,
      httpOnly: true,
    });
  } catch (e) {
    ctx.throw(500, e);
  }
};

export const login = async (ctx) => {
  const { username, password } = ctx.request.body;

  if (!username || password) {
    ctx.status = 401;
    return;
  }

  try {
    const user = await User.findbyUsername(username);
    if (!user) {
      ctx.status = 401;
      return;
    }
    const valid = await user.checkPassword(password);
    // 잘못된 비밀번호
    if (!valid) {
      ctx.status = 401;
      return;
    }
    ctx.body = user.serialize();
    const token = user.generateToken();
    ctx.cookies.set('access_token', token, {
      maxAge: 1000 * 60 * 60 * 24 * 7,
      httpOnly: true,
    });
  } catch (e) {
    ctx.throw(500, e);
  }
};

export const check = async (ctx) => {};

export const logout = async (ctx) => {};

import {
  findBySpecialRules,
  findRequiredField,
  findMaxQuantitySymbols,
  findForbiddenSymbols,
} from './helper';

const regEpx = {
  baseField: /^[a-zA-Z ]{2,30}$/,
  forbidSymbols: /[~<>]/,
  password: /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@_#\$%\^&\*])/,
  email: /(\w+@[a-zA-Z_]+?\.(com|ru|ua))/,
};

export const verifyBaseData = (type, name, emailLength = 50) => {
  if (!name) {
    return findRequiredField(type);
  } else if (regEpx.forbidSymbols.test(name)) {
    return findForbiddenSymbols(type);
  } else if (name.length > emailLength) {
    return findMaxQuantitySymbols(type, emailLength);
  }
};

export const verifyEmail = (type, email, emailLength = 50) => {
  verifyBaseData(type, email, emailLength);

  if (!regEpx.email.test(email)) {
    return findBySpecialRules(type, `Should be '@' sign and domain name '.com/.ru/.ua'`);
  }
};

export const verifyPassword = (type, password, passwordLength = 20) => {
  verifyBaseData(type, password, passwordLength);

  if (!regEpx.password.test(password)) {
    return findBySpecialRules(type, 'Lower/upper case letter, number and symbol');
  }
};

export const compareFields = (type, confirmPassword, options) => {
  if (confirmPassword !== options) {
    return findBySpecialRules(type, 'This password does not match the one you entered');
  }
};

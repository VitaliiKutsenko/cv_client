import { CHANGE_LANGUAGE } from './languageActionTypes';

const initialState = {
  initial: {},
  ru: {
    auth: {
      login: {
        loginFields: [
          {
            inputType: 'text',
            labelText: 'Адрес эл. почты',
            point: 'email',
          },
          {
            inputType: 'password',
            labelText: 'Пароль',
            point: 'password',
          },
        ],
        titleText: 'Войти',
        buttonText: 'Подтвердить',
        forgotPassLink: 'Забыли пароль?',

        navBarText: {
          title: ', чтобы войти',
          link: 'Зарегестрируйтесь',
        },
      },
      signUp: {
        signUpFields: [
          {
            inputType: 'text',
            labelText: 'Логин',
            point: 'username',
          },

          {
            inputType: 'date',
            labelText: 'Дата рождения',
            point: 'age',
          },
          {
            inputType: 'text',
            labelText: 'Адрес эл. почты',
            point: 'email',
          },
          {
            inputType: 'password',
            labelText: 'Пароль',
            point: 'password',
          },
          {
            inputType: 'password',
            labelText: 'Подтвердить пароль',
            point: 'confirm_password',
          },
        ],
        titleText: 'Зарегестрироваться',
        buttonText: 'Регистрация',
        navBarText: {
          title: 'Уже есть аккаунт? ',
          link: 'Войти',
        },
      },
      resetPassword: {
        comments: 'Введите адрес эл. почты! И мы пришлем вам письмо с инструкцией на почту',
        titleText: 'Забыли пароль?',
        buttonText: 'Подтвердить',
        resetPasswordFields: [
          {
            inputType: 'email',
            labelText: 'Адресс эл. почты',
            point: 'resetPassword',
          },
        ],
        navBarText: {
          title: 'Already have an account? ',
          link: 'Sign in',
        },
      },
    },
    userPage: [
      {
        path: 'profile',
        title: 'Профиль',
      },
      {
        path: 'collections',
        title: 'Коллекции',
      },
      {
        path: 'comments',
        title: 'Комментарии',
      },
      {
        path: 'auth',
        title: 'Сменить аккаунт',
      },
      {
        path: 'logout',
        title: 'Выход',
      },
    ],
  },
  eng: {
    auth: {
      login: {
        loginFields: [
          {
            inputType: 'text',
            labelText: 'Email',
            point: 'email',
          },
          {
            inputType: 'password',
            labelText: 'Password',
            point: 'password',
          },
        ],
        titleText: 'Sign in',
        buttonText: 'Log in',
        forgotPassLink: 'Forgot Password?',
        navBarText: {
          title: 'Join us!',
          link: 'Sign up',
        },
      },
      signUp: {
        signUpFields: [
          {
            inputType: 'text',
            labelText: 'Username',
            point: 'username',
          },

          {
            inputType: 'date',
            labelText: 'Age',
            point: 'age',
          },
          {
            inputType: 'text',
            labelText: 'Email',
            point: 'email',
          },
          {
            inputType: 'password',
            labelText: 'Password',
            point: 'password',
          },
          {
            inputType: 'password',
            labelText: 'Confirm password',
            point: 'confirm_password',
          },
        ],
        titleText: 'Sign up',
        buttonText: 'Registration',
        navBarText: {
          title: 'Already have an account? ',
          link: 'Sign in',
        },
      },
      resetPassword: {
        comments: 'Enter your username and we’ll send a link to reset your password.',
        titleText: '"Forgot your password?"',
        buttonText: 'Confirm',
        navBarText: {
          title: 'Already have an account? ',
          link: 'Sign in',
        },
      },
    },
    userPage: [
      {
        path: 'profile',
        title: 'Profile',
      },
      {
        path: 'collections',
        title: 'Collections',
      },
      {
        path: 'comments',
        title: 'Comments',
      },
      {
        path: 'auth',
        title: 'Switch account',
      },
      {
        path: 'logout',
        title: 'Logout',
      },
    ],
  },
};

export const languages = (state = initialState, { type, payload }) => {
  switch (type) {
    case CHANGE_LANGUAGE:
      return {
        ...state,
        initial: { ...state[payload] },
      };

    default:
      return {
        ...state,
        initial: { ...state['ru'] },
      };
  }
};

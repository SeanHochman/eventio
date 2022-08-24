export type FormValues = Record<string, any>;

export const emailValidation = {
  required: true,
  minLength: 6,
  pattern: {
    value: /\S+@\S+\.\S+/,
    message: `common.account.invalidEmail`,
  },
};

export const passwordValidation = {
  required: true,
  minLength: 6,
};

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

export const textValidation = { required: true, minLength: 2 };

export const numberValidation = {
  required: true,
  pattern: { value: /^[0-9]/, message: 'Please enter a valid number' },
};

export const dateValidation = {
  required: true,
  pattern: {
    message: 'please enter a valid date',
    value: '',
  },
};

export const timeValidation = {
  required: true,
  pattern: {
    message: 'please enter a valid time',
    value: '',
  },
};

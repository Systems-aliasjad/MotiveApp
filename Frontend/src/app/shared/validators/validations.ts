export class Validations {}

export const regExps: { [key: string]: RegExp } = {
  alphabets: /^[a-zA-Z \-\']+/,
  phoneNumber: /^(\+971)[0-9]{10}$/,
  password: /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
};

export const errorMessages: { [key: string]: string } = {
  phoneNumber: 'Phone number must start with +971',
  passwordandConfirm: 'Password & Confirm Password Must Be Matched',
};

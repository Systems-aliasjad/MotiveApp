export class Validations {}

export const regExps: { [key: string]: RegExp } = {
  alphabets: /^[a-zA-Z \-\']+/,
  phoneNumber: /^[0-9]{12}$/,

  //Minimum eight characters, at least one letter, one number and one special character:
  password: /^(?=.*[A-Za-z\d])(?=.*\d)(?=.*[ !"#$%&'()*+,-./:;<=>?@[\]^_`{|}~])[A-Za-z\d !"#$%&'()*+,-./:;<=>?@[\]^_`{|}~]{8,}$/,

  ccbPin: /^\d{4}$/,
};

export const errorMessages: { [key: string]: string } = {
  phoneNumber: 'Phone number must start with +971',
  passwordandConfirm: 'Password & Confirm Password Must Be Matched',
};

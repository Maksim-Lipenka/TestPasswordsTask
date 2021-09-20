export const required = value => (value ? undefined : 'Required');
export const atLeastSixCharacters = value => value && value.length >= 6 ? undefined : 'Password should contain atleast 6 characters'
export const atLeastOneRegularLetter = value => value && !/[a-z]+/.test(value) ? 'Password should contain atleast one regular letter' : undefined
export const atLeastOneCapitalLetter = value => value && !/[A-Z]+/.test(value) ? 'Password should contain atleast one capital letter' : undefined
export const atLeastOneNumber = value => value && !/[0-9]+/.test(value) ? 'Password should contain atleast one number' : undefined
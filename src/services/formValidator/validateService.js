import { verifyBaseData, verifyEmail, verifyPassword, compareFields } from './validationRules';

const consistFields = {
  username: [verifyBaseData],
  age: [verifyBaseData],
  email: [verifyBaseData, verifyEmail],
  password: [verifyBaseData, verifyPassword],
};

// parameter - object with form fields
export const validateForm = (inputField, compare = null) => {
  let item = null;

  for (let [keys, values] of Object.entries(inputField)) {
    if (keys in consistFields) {
      consistFields[keys].forEach(validateFn => {
        const validate = validateFn(keys, values);

        if (validate?.error) {
          item = validate;
        }
      });

      if (item) {
        return item;
      }
    }
  }

  if (compare) {
    for (let [keys, values] of Object.entries(compare)) {
      // item = compareFields(values, inputField[values], inputField[keys]);
    }
  }

  return item ? item : inputField;
};

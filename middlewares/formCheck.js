const requiredFieldCheck = (key, value) => {
  if (!value) {
    const code = 'REQUIRED_FIELD';
    const field = key;
    const message = `${field} is a mandatory field`;
    return { isValid: false, data: { code, field, message } };
  }

  return { isValid: true };
};
const emailValidation = (email) => {
  const isValid = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(email);
  if (!isValid) {
    const code = 'INVALID_FIELD_FORMAT';
    const field = 'email';
    const message = `${field} must be in the correct format`;
    return { isValid, data: { code, field, message } };
  }
  return { isValid };
};

const phoneNumberValidation = (phoneNumber) => {
  const isValid = /^\+?([0-9]{3})\)?[-. ]?([0-9]{2})[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/.test(phoneNumber);
  if (!isValid) {
    const code = 'INVALID_FIELD_FORMAT';
    const field = 'phone';
    const message = `${field} must be in the correct format`;
    return { isValid, data: { code, field, message } };
  }
  return { isValid };
};

const formCheck = () => {
  return async (req, res, next) => {
    const { form } = req.body;

    const errors = [];
    const keys = Object.keys(form);
    keys.forEach((key) => {
      const value = form[key];

      const requiredResult = requiredFieldCheck(key, value);
      if (!requiredResult.isValid) {
        errors.push(requiredResult.data);
      }

      if (key === 'email' && !!requiredResult.isValid) {
        const emailResult = emailValidation(value);
        if (!emailResult.isValid) {
          errors.push(emailResult.data);
        }
      }

      if (key === 'phone' && !!requiredResult.isValid) {
        const phoneResult = phoneNumberValidation(value);
        if (!phoneResult.isValid) {
          errors.push(phoneResult.data);
        }
      }
    });

    if (!!errors.length) {
      console.log(errors);
      return res.status(400).send({ errors });
    }
    return next();
  };
};

export default formCheck;

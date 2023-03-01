import { requiredFieldCheck, emailValidation, phoneNumberValidation } from '../middlewares/formCheck.js';
import { generateDivided } from '../templates/divided.js';
import { generatePlain } from '../templates/plain.js';

test('when name is present received valid', () => {
  expect(requiredFieldCheck('fullName', 'Oleh Zaruma')).toMatchObject({ isValid: true });
});
test('when name is missed received not valid and error data', () => {
  expect(requiredFieldCheck('fullName', '')).toMatchObject({
    isValid: false,
    data: { code: 'REQUIRED_FIELD', field: 'fullName', message: 'fullName is a mandatory field' }
  });
});

test('when email is correct received valid', () => {
  expect(emailValidation('olehleolvivua@gmail.com')).toMatchObject({ isValid: true });
});
test('when email is incorrect received not valid and error data', () => {
  expect(emailValidation('abc')).toMatchObject({
    isValid: false,
    data: { code: 'INVALID_FIELD_FORMAT', field: 'email', message: 'email must be in the correct format' }
  });
});

test('when phone number is correct received valid', () => {
  expect(phoneNumberValidation('+380931234567')).toMatchObject({ isValid: true });
});
test('when phone number is incorrect received not valid and error data', () => {
  expect(phoneNumberValidation('abc')).toMatchObject({
    isValid: false,
    data: { code: 'INVALID_FIELD_FORMAT', field: 'phone', message: 'phone must be in the correct format' }
  });
});

const defaultForm = {
  fullName: 'Full name',
  jobTitle: 'Job title',
  company: 'company',
  email: 'adress@email.com',
  phone: '+972435323043',
  address: 'My office address'
};
test('when all data from form is provided you receive plain html from divided template with data you sent', () => {
  expect(generateDivided(defaultForm)).toContain('<html>');
  expect(generateDivided(defaultForm)).toContain('<body>');
  expect(generateDivided(defaultForm)).toContain('Full name');
  expect(generateDivided(defaultForm)).toContain('Job title');
  expect(generateDivided(defaultForm)).toContain('company');
  expect(generateDivided(defaultForm)).toContain('adress@email.com');
  expect(generateDivided(defaultForm)).toContain('+972435323043');
  expect(generateDivided(defaultForm)).toContain('My office address');
});
test('when all data from form is provided you receive plain html from plain template with data you sent', () => {
  expect(generatePlain(defaultForm)).toContain('<html>');
  expect(generatePlain(defaultForm)).toContain('<body>');
  expect(generatePlain(defaultForm)).toContain('Full name');
  expect(generatePlain(defaultForm)).toContain('Job title');
  expect(generatePlain(defaultForm)).toContain('company');
  expect(generatePlain(defaultForm)).toContain('adress@email.com');
  expect(generatePlain(defaultForm)).toContain('+972435323043');
  expect(generatePlain(defaultForm)).toContain('My office address');
});

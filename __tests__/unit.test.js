// unit.test.js

import {
  isPhoneNumber,
  isEmail,
  isStrongPassword,
  isDate,
  isHexColor,
} from '../code-to-unit-test/unit-test-me';

// TODO - Part 2

// isPhoneNumber() Tests
test('Phone number is valid even with dashes, returns true', () => {
  expect(isPhoneNumber('858-643-3987')).toBe(true);
});

test('Phone number is valid even with parenthesis, returns true', () => {
  expect(isPhoneNumber('(858) 643-3987')).toBe(true);
});

test('Phone number is invalid with letters, returns false', () => {
  expect(isPhoneNumber('hello-beautiful-world')).toBe(false);
});

test('Short phone number are invalid, returns false', () => {
  expect(isPhoneNumber('123456')).toBe(false);
});


// isEmail() Tests
test('Valid standard emails, returns true', () => {
  expect(isEmail('student@ucsd.edu')).toBe(true);
})

test('Short valid standard emails, returns true', () => {
  expect(isEmail('a@b.com')).toBe(true);
})

test('Standard emails without @, returns false', () => {
  expect(isEmail('studentucsd.edu')).toBe(false);
})

test('Standard emails with numbers as domain, returns false', () => {
  expect(isEmail('student@email.123')).toBe(false);
})

// isStrongPassword() Tests
test('A strong and valid password, returns true', () => {
  expect(isStrongPassword('Strong_Pass123')).toBe(true);
})

test('The password must be minimum length, returns true', () => {
  expect(isStrongPassword('Abc1')).toBe(true);
})

test('A password that starts with a number, returns false', () => {
  expect(isStrongPassword('1StrongPass')).toBe(false);
})

test('The password is too short, returns false', () => {
  expect(isStrongPassword('abc')).toBe(false);
})

// isData() Tests
test('2 digit month/day is a valid date, returns true', () => {
  expect(isDate('07/13/2005')).toBe(true);
})

test('1 digit month/day is also a valid date, returns true', () => {
  expect(isDate('7/7/2005')).toBe(true);
})

test('2 digit year is an invalid date, returns false', () => {
  expect(isDate('07/13/26')).toBe(false);
})

test('(YYYY,MM,DD) is an invalid date format, returns false', () => {
  expect(isDate('2007/07/13')).toBe(false);
})

// isHexColor() Tests
test('6-character hex color with hashtag is valid, returns true', () => {
  expect(isHexColor('#FF0000')).toBe(true);
})

test('3-character hex color without hashtag is valid, returns true', () => {
  expect(isHexColor('abc')).toBe(true);
})

test('6-character non-hex letters is invalid, returns false', () => {
  expect(isHexColor('#GGGGGG')).toBe(false);
})


test('Short non-hex letters is invalid, returns false', () => {
  expect(isHexColor('#11')).toBe(false);
})




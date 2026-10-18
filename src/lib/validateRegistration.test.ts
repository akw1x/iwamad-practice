import { describe, it, expect } from 'vitest';
import { validateRegistration, RegistrationValues } from './validateRegistration';

const valid: RegistrationValues = {
  fullName: 'Aliya Nurlanovna',
  email: 'aliya@example.com',
  password: 'almaty2026',
  confirmPassword: 'almaty2026',
  acceptTerms: true,
};

describe('validateRegistration', () => {
  it('1 returns no errors for valid values', () => {
    const errors = validateRegistration(valid);
    expect(Object.keys(errors).length).toBe(0);
  });

  it('2 rejects a name that is only spaces', () => {
    const errors = validateRegistration({ ...valid, fullName: '   ' });
    expect(errors.fullName).toBe('Enter your full name');
  });

  it('3 rejects an invalid email', () => {
    const errors = validateRegistration({ ...valid, email: 'aliya@example' });
    expect(errors.email).toBe('Enter a valid email, like name@example.com');
  });

  it('4 accepts 8 chars with number password', () => {
    const errors = validateRegistration({
      ...valid,
      password: 'almaty26',
      confirmPassword: 'almaty26',
    });
    expect(errors.password).toBeUndefined();
  });

  it('5 rejects short password', () => {
    const errors = validateRegistration({
      ...valid,
      password: 'almaty2',
      confirmPassword: 'almaty2',
    });
    expect(errors.password).toBe('Use at least 8 characters');
  });

  it('6 rejects password without number', () => {
    const errors = validateRegistration({
      ...valid,
      password: 'almatycity',
      confirmPassword: 'almatycity',
    });
    expect(errors.password).toBe('Include at least one number');
  });

  it('7 rejects mismatched confirmPassword', () => {
    const errors = validateRegistration({ ...valid, confirmPassword: 'almaty2027' });
    expect(errors.confirmPassword).toBe('Passwords do not match');
  });

  it('8 rejects unaccepted terms', () => {
    const errors = validateRegistration({ ...valid, acceptTerms: false });
    expect(errors.acceptTerms).toBe('Accept the terms to continue');
  });
});
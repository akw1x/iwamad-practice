import { describe, it, expect } from 'vitest';
import { validateSignup, SignupValues } from './validateSignup';

const valid: SignupValues = {
  fullName: 'Aliya Nurlanovna',
  email: 'aliya@example.com',
  tickets: '2',
};

describe('validateSignup', () => {
  it('1 returns no errors for valid values', () => {
    const errors = validateSignup(valid, 10);
    expect(Object.keys(errors).length).toBe(0);
  });

  it('2 rejects 0 tickets', () => {
    const errors = validateSignup({ ...valid, tickets: '0' }, 10);
    expect(errors.tickets).toBe('Choose 1 to 4 tickets');
  });

  it('3 rejects 5 tickets', () => {
    const errors = validateSignup({ ...valid, tickets: '5' }, 10);
    expect(errors.tickets).toBe('Choose 1 to 4 tickets');
  });

  it('4 rejects non-integer tickets like 1.5', () => {
    const errors = validateSignup({ ...valid, tickets: '1.5' }, 10);
    expect(errors.tickets).toBe('Choose 1 to 4 tickets');
  });

  it('5 accepts 4 tickets', () => {
    const errors = validateSignup({ ...valid, tickets: '4' }, 10);
    expect(Object.keys(errors).length).toBe(0);
  });

  it('6 rejects tickets exceeding seatsLeft', () => {
    const errors = validateSignup({ ...valid, tickets: '3' }, 2);
    expect(errors.tickets).toBe('Only 2 seats left');
  });
});
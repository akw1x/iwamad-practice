export type SignupValues = {
    fullName: string;
    email: string;
    tickets: string;
  };
  
  export type SignupErrors = Partial<Record<keyof SignupValues, string>>;
  
  export function validateSignup(values: SignupValues, seatsLeft: number): SignupErrors {
    const errors: SignupErrors = {};
  
    // fullName: at least 2 characters, ignoring spaces at both ends
    if (values.fullName.trim().length < 2) {
      errors.fullName = 'Enter your full name';
    }
  
    // email: standard email pattern
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(values.email)) {
      errors.email = 'Enter a valid email, like name@example.com';
    }
  
    // tickets: integer check from 1 to 4 and seatsLeft availability
    const ticketsNum = Number(values.tickets);
    const isInteger = Number.isInteger(ticketsNum) && values.tickets.trim() !== '' && !values.tickets.includes('.');
  
    if (!isInteger || ticketsNum < 1 || ticketsNum > 4) {
      errors.tickets = 'Choose 1 to 4 tickets';
    } else if (ticketsNum > seatsLeft) {
      errors.tickets = `Only ${seatsLeft} seats left`;
    }
  
    return errors;
  }
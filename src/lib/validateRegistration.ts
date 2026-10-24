export type RegistrationValues = {
    fullName: string;
    email: string;
    password: string;
    confirmPassword: string;
    acceptTerms: boolean;
  };
  
  export type RegistrationErrors = Partial<Record<keyof RegistrationValues, string>>;
  
  export function validateRegistration(values: RegistrationValues): RegistrationErrors {
    const errors: RegistrationErrors = {};
  
    // fullName: at least 2 characters, ignoring spaces at both ends
    if (values.fullName.trim().length < 2) {
      errors.fullName = 'Enter your full name';
    }
  
    // email: simple regex check name@example.com
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(values.email)) {
      errors.email = 'Enter a valid email, like name@example.com';
    }
  
    // password rules
    if (values.password.length < 8) {
      errors.password = 'Use at least 8 characters';
    } else if (!/\d/.test(values.password)) {
      errors.password = 'Include at least one number';
    }
  
    // confirmPassword: must match password
    if (values.confirmPassword !== values.password) {
      errors.confirmPassword = 'Passwords do not match';
    }
  
    // acceptTerms: must be true
    if (!values.acceptTerms) {
      errors.acceptTerms = 'Accept the terms to continue';
    }
  
    return errors;
  }
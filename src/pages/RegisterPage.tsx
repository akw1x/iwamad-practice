import { useState, ChangeEvent, FormEvent, FocusEvent } from 'react';
import { RegistrationValues, validateRegistration } from '../lib/validateRegistration';
import { TextField } from '../components/ui/TextField';
import { Button } from '../components/ui/Button';

export function RegisterPage() {
  const [values, setValues] = useState<RegistrationValues>({
    fullName: '',
    email: '',
    password: '',
    confirmPassword: '',
    acceptTerms: false,
  });

  const [touched, setTouched] = useState<Partial<Record<keyof RegistrationValues, boolean>>>({});
  const [submitAttempted, setSubmitAttempted] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const errors = validateRegistration(values);

  function handleChange(event: ChangeEvent<HTMLInputElement>) {
    const { name, type, value, checked } = event.target;
    setValues((current) => ({
      ...current,
      [name]: type === 'checkbox' ? checked : value,
    }));
  }

  function handleBlur(event: FocusEvent<HTMLInputElement>) {
    const { name } = event.target;
    setTouched((current) => ({
      ...current,
      [name]: true,
    }));
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitAttempted(true);

    if (Object.keys(errors).length === 0) {
      setIsSubmitted(true);
    }
  }

  function getFieldError(fieldName: keyof RegistrationValues): string | undefined {
    const isVisible = touched[fieldName] || submitAttempted;
    return isVisible ? errors[fieldName] : undefined;
  }

  if (isSubmitted) {
    return <p role="status">Thanks, {values.fullName}. You are registered.</p>;
  }

  return (
    <div>
      <h2>Register</h2>
      <form onSubmit={handleSubmit} noValidate>
        <TextField
          label="Full Name"
          name="fullName"
          value={values.fullName}
          onChange={handleChange}
          onBlur={handleBlur}
          error={getFieldError('fullName')}
        />

        <TextField
          label="Email"
          type="email"
          name="email"
          value={values.email}
          onChange={handleChange}
          onBlur={handleBlur}
          error={getFieldError('email')}
        />

        <TextField
          label="Password"
          type="password"
          name="password"
          value={values.password}
          onChange={handleChange}
          onBlur={handleBlur}
          error={getFieldError('password')}
        />

        <TextField
          label="Confirm Password"
          type="password"
          name="confirmPassword"
          value={values.confirmPassword}
          onChange={handleChange}
          onBlur={handleBlur}
          error={getFieldError('confirmPassword')}
        />

        <div className="check">
          <input
            type="checkbox"
            id="acceptTerms"
            name="acceptTerms"
            checked={values.acceptTerms}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          <label htmlFor="acceptTerms">Accept terms and conditions</label>
        </div>
        {(touched.acceptTerms || submitAttempted) && errors.acceptTerms && (
          <p className="field-error">{errors.acceptTerms}</p>
        )}

        <Button type="submit" variant="primary">
          Create account
        </Button>
      </form>
    </div>
  );
}
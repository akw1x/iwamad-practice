import { useState, ChangeEvent, FormEvent, FocusEvent } from 'react';
import { CampusEvent } from '../data/events';
import { SignupValues, validateSignup } from '../lib/validateSignup';
import { TextField } from './ui/TextField';
import { Button } from './ui/Button';

type EventSignupFormProps = {
  event: CampusEvent;
};

export function EventSignupForm({ event }: EventSignupFormProps) {
  const [seatsLeft, setSeatsLeft] = useState(event.seats);
  const [values, setValues] = useState<SignupValues>({
    fullName: '',
    email: '',
    tickets: '1',
  });

  const [touched, setTouched] = useState<Partial<Record<keyof SignupValues, boolean>>>({});
  const [submitAttempted, setSubmitAttempted] = useState(false);
  const [bookedInfo, setBookedInfo] = useState<{ tickets: number; name: string } | null>(null);

  const errors = validateSignup(values, seatsLeft);

  function handleChange(event: ChangeEvent<HTMLInputElement>) {
    const { name, value } = event.target;
    setValues((current) => ({
      ...current,
      [name]: value,
    }));
  }

  function handleBlur(event: FocusEvent<HTMLInputElement>) {
    const { name } = event.target;
    setTouched((current) => ({
      ...current,
      [name]: true,
    }));
  }

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitAttempted(true);

    if (Object.keys(errors).length === 0) {
      const ticketsCount = Number(values.tickets);
      setSeatsLeft((prev) => prev - ticketsCount);
      setBookedInfo({ tickets: ticketsCount, name: values.fullName });

      // Очищаем форму для следующего бронирования
      setValues({ fullName: '', email: '', tickets: '1' });
      setTouched({});
      setSubmitAttempted(false);
    }
  }

  function getFieldError(fieldName: keyof SignupValues): string | undefined {
    const isVisible = touched[fieldName] || submitAttempted;
    return isVisible ? errors[fieldName] : undefined;
  }

  return (
    <div style={{ marginTop: '24px' }}>
      <h3>Book a seat</h3>
      <p>Seats left: {seatsLeft}</p>

      {bookedInfo && (
        <p role="status" style={{ color: 'green', fontWeight: 'bold' }}>
          Booked: {bookedInfo.tickets} for {bookedInfo.name}.
        </p>
      )}

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
          label="Tickets"
          type="number"
          name="tickets"
          min={1}
          max={4}
          value={values.tickets}
          onChange={handleChange}
          onBlur={handleBlur}
          error={getFieldError('tickets')}
        />

        <Button type="submit" variant="primary">
          Book
        </Button>
      </form>
    </div>
  );
}
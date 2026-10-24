export type CampusEvent = {
    id: number;
    title: string;
    date: string;
    place: string;
    seats: number;
  };
  
  export const events: CampusEvent[] = [
    { id: 1, title: 'React study night', date: '2026-10-22', place: 'Room 302', seats: 20 },
    { id: 2, title: 'UI/UX Design Workshop', date: '2026-10-25', place: 'Al-Farabi Hall', seats: 15 },
    { id: 3, title: 'Career in Tech Q&A', date: '2026-10-28', place: 'Main Auditorium', seats: 30 },
    { id: 4, title: 'IT Management Meetup', date: '2026-11-02', place: 'Room 105', seats: 2 },
  ];
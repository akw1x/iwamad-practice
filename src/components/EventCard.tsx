import { Link } from 'react-router';
import { CampusEvent } from '../data/events';
import { Card } from './ui/Card';
import { Tag } from './ui/Tag';

type EventCardProps = {
  event: CampusEvent;
};

export function EventCard({ event }: EventCardProps) {
  return (
    <Card>
      <h2>{event.title}</h2>
      <p>{event.date}</p>
      <p>{event.place}</p>
      <div style={{ margin: '12px 0' }}>
        <Tag label={`${event.seats} seats`} />
      </div>
      <Link to={`/events/${event.id}`}>Details</Link>
    </Card>
  );
}
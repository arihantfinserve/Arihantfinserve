import React from 'react';
import styles from './TaxCalendar.module.css';

interface TaxEvent {
  id: string;
  day: string;
  month: string;
  name: string;
  description: string;
}

const upcomingEvents: TaxEvent[] = [
  {
    id: '1',
    day: '11',
    month: 'JUL',
    name: 'GSTR-1',
    description: 'Outward supplies statement',
  },
  {
    id: '2',
    day: '15',
    month: 'JUL',
    name: 'PF & ESI',
    description: 'Monthly contribution payment',
  },
  {
    id: '3',
    day: '31',
    month: 'JUL',
    name: 'TDS Payment',
    description: 'Quarterly statement filing',
  },
  {
    id: '4',
    day: '31',
    month: 'JUL',
    name: 'Income Tax Return',
    description: 'Filing for individuals',
  },
  {
    id: '5',
    day: '15',
    month: 'SEP',
    name: 'Advance Tax',
    description: 'Second installment payment',
  }
];

export const TaxCalendar: React.FC = () => {
  const col1 = upcomingEvents.slice(0, 3);
  const col2 = upcomingEvents.slice(3, 6);

  const renderCard = (events: TaxEvent[]) => (
    <div className={styles.container}>
      <div className={styles.header}>
        <h3 className={styles.title}>Tax Calendar</h3>
        <span className={styles.icon}>📅</span>
      </div>
      <ul className={styles.list}>
        {events.map((event) => (
          <li key={event.id} className={styles.item}>
            <div className={styles.dateBlock}>
              <span className={styles.day}>{event.day}</span>
              <span className={styles.month}>{event.month}</span>
            </div>
            <div className={styles.details}>
              <span className={styles.eventName}>{event.name}</span>
              <span className={styles.eventDesc}>{event.description}</span>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );

  return (
    <div className={styles.wrapper}>
      {renderCard(col1)}
      {renderCard(col2)}
    </div>
  );
};

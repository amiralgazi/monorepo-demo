
import styles from './card.module.css';

export interface CardProps {
  title: string;
  children?: React.ReactNode;
}

export function Card({ title, children }: CardProps) {
  return (
    <div className={styles['container']}>
      <h3 className={styles['title']}>{title}</h3>
      {children}
    </div>
  );
}

export default Card;

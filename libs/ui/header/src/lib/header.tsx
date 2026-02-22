
import styles from './header.module.css';

export interface HeaderProps {
  title: string;
}

export function Header({ title }: HeaderProps) {
  return (
    <header className={styles['container']}>
      <h1 className={styles['title']}>{title}</h1>
    </header>
  );
}

export default Header;

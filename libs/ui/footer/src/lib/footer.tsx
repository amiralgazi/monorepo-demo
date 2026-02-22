
import styles from './footer.module.css';

export interface FooterProps {
  copyright: string;
}

export function Footer({ copyright }: FooterProps) {
  return (
    <footer className={styles['container']}>
      <p className={styles['text']}>{copyright}</p>
    </footer>
  );
}

export default Footer;

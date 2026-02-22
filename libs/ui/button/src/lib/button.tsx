
import styles from './button.module.css';

export interface ButtonProps {
  label: string;
  variant?: 'primary' | 'secondary';
  onClick?: () => void;
}

export function Button({ label, variant = 'primary', onClick }: ButtonProps) {
  return (
    <button
      className={`${styles['btn']} ${styles[`btn-${variant}`]}`}
      onClick={onClick}
    >
      {label}
    </button>
  );
}

export default Button;




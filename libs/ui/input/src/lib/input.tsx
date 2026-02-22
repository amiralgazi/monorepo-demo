
import styles from './input.module.css';

export interface InputProps {
  placeholder?: string;
  value?: string;
  onChange?: (value: string) => void;
  type?: 'text' | 'email' | 'password';
}

export function Input({
  placeholder = '',
  value = '',
  onChange,
  type = 'text',
}: InputProps) {
  return (
    <input
      className={styles['input']}
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={(e) => onChange?.(e.target.value)}
    />
  );
}

export default Input;

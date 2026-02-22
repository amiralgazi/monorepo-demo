import { vi } from 'vitest';
import { render } from '@testing-library/react';

import Button from './button';

describe('Button', () => {
  it('should render successfully', () => {
    const { baseElement, getByText } = render(<Button label="Click me" />);
    expect(baseElement).toBeTruthy();
    expect(getByText('Click me')).toBeTruthy();
  });

  it('should call onClick when clicked', () => {
    const onClick = vi.fn();
    const { getByText } = render(
      <Button label="Click me" onClick={onClick} />
    );
    getByText('Click me').click();
    expect(onClick).toHaveBeenCalled();
  });
});

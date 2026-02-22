import { render } from '@testing-library/react';

import Header from './header';

describe('Header', () => {
  it('should render successfully', () => {
    const { baseElement, getByText } = render(<Header title="My App" />);
    expect(baseElement).toBeTruthy();
    expect(getByText('My App')).toBeTruthy();
  });
});

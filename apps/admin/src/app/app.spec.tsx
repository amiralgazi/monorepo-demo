import { render } from '@testing-library/react';

import App from './app';

describe('App', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App />);
    expect(baseElement).toBeTruthy();
  });

  it('should render Admin Dashboard', () => {
    const { getByText } = render(<App />);
    expect(getByText('Admin Dashboard')).toBeTruthy();
    expect(getByText('Dashboard')).toBeTruthy();
  });
});

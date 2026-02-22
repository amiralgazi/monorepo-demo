import { render } from '@testing-library/react';

import App from './app';

describe('App', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App />);
    expect(baseElement).toBeTruthy();
  });

  it('should render Documentation', () => {
    const { getByText } = render(<App />);
    expect(getByText('Documentation')).toBeTruthy();
    expect(getByText('Getting Started')).toBeTruthy();
  });
});

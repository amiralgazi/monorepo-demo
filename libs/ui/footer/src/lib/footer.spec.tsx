import { render } from '@testing-library/react';

import Footer from './footer';

describe('Footer', () => {
  it('should render successfully', () => {
    const { baseElement, getByText } = render(
      <Footer copyright="© 2026 Demo" />
    );
    expect(baseElement).toBeTruthy();
    expect(getByText('© 2026 Demo')).toBeTruthy();
  });
});

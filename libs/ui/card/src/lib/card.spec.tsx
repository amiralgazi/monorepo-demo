import { render } from '@testing-library/react';

import Card from './card';

describe('Card', () => {
  it('should render successfully', () => {
    const { baseElement, getByText } = render(<Card title="Test Card">Content</Card>);
    expect(baseElement).toBeTruthy();
    expect(getByText('Test Card')).toBeTruthy();
    expect(getByText('Content')).toBeTruthy();
  });
});

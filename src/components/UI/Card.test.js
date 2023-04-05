import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import Card from './Card';

describe('Card component', () => {
  it('should render the title and children', () => {
    const title = 'Test Title';
    const children = 'Test Children';
    render(<Card title={title}>{children}</Card>);
    const titleElement = screen.getByText(title);
    const childrenElement = screen.getByText(children);
    expect(titleElement).toBeInTheDocument();
    expect(childrenElement).toBeInTheDocument();
  });

  it('should have a class name of cardContainer', () => {
    const title = 'Test Title';
    const children = 'Test Children';
    render(<Card title={title}>{children}</Card>);
    const cardContainer = screen.getByTestId('card-container');
    expect(cardContainer).toHaveClass('cardContainer');
  });
});

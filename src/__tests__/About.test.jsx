import { render, screen } from '@testing-library/react';
import About from '../pages/About.jsx';

test('renders about heading', () => {
  render(<About id="about" />);
  const heading = screen.getByText(/Crafting Digital Excellence Through Code/i);
  expect(heading).toBeInTheDocument();
});

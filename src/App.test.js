import { render, screen } from '@testing-library/react';
import App from './App';
import {AppRouter} from "./router/AppRouter"

test('renders learn react link', () => {
  render(<App />);
  const component = render(<AppRouter/>)
  expect(component).toBeInTheDocument();
});

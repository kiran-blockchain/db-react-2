import { fireEvent, render, screen } from '@testing-library/react';
import TestLabel from './index';

test('renders learn react link', () => {
  render(<TestLabel name="kiran"/>);
  const linkElement = screen.getByTestId("lbl");
  const content = linkElement.textContent;
  expect(linkElement).toBeInTheDocument();
  expect(linkElement.textContent).toBe('kiran');
});
test('Verify the props are rendering',()=>{
 render(<TestLabel name="kiran"/>);
  const linkElement = screen.getByTestId("lbl");
  expect(linkElement.textContent).toBe('kiran');
});
test('Verify click',()=>{
    render(<TestLabel name="kiran"/>);
     const linkElement = screen.getByTestId("btn");
     expect(linkElement.textContent).toBe('Click');
     //linkElement.onclick
     fireEvent.click(linkElement);
     fireEvent.click(linkElement);
     const counter = screen.getByTestId('counter');
     expect(counter.textContent).toBe("2");

   });

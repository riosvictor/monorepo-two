import React from 'react';
import renderer from 'react-test-renderer';
import 'jest-styled-components';
import {cleanup, render, screen} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Input from './Input';

afterEach(cleanup);

describe('Input', () => {
  test('renders correctly', () => {
    const tree = renderer
      .create(<Input placeholder="user@gmail.com" />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  test('renders with display value', () => {
    const {getByDisplayValue} = render(
      <Input defaultValue="Hello World!" />,
    );
  
    expect(getByDisplayValue(/Hello World!/i)).toBeTruthy();
  })

  test('pass a email to input field', () => {
    render(<Input />);

    const id = "custom-input";
    const newValue = "test@mail.com";
 
    const inputEl = screen.getByTestId(id);

    userEvent.type(inputEl, newValue);

    expect(screen.getByTestId(id)).toHaveProperty('value', newValue);
  });
});
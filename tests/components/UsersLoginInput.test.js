import 'react-native'
import React from 'react';
import {render, fireEvent} from '@testing-library/react-native';

import UsersLoginInput from '../../src/components/UsersLoginInput';

describe('<UsersLoginInput />', () => {
  it('contains the required fields', async () => {
    const login_screen = await render(<UsersLoginInput />);

    const login_button = login_screen.getByText('Login');
    const email_field = login_screen.queryByTestId('email');
    const password_field = login_screen.queryByTestId('senha');

    expect(login_button).toBeInDocument;
    expect(email_field).toBeInDocument;
    expect(password_field).toBeInDocument;
  })
});


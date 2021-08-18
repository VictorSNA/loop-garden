import 'react-native'
import React from 'react';
import renderer from 'react-test-renderer';
import {render, fireEvent} from '@testing-library/react-native';

import UsersLogin from '../../src/screens/UsersLogin';
import UsersLoginInput from '../../src/components/UsersLoginInput';

describe('<UsersLogin />', () => {
  it('renders users login input', async () => {
    const login_screen = await render(<UsersLogin />);
    const users_input = await render(<UsersLoginInput />);

    expect(login_screen.UNSAFE_queryByType(UsersLogin)).not.toBeUndefined;
  })
});


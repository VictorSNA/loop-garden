import { Platform } from 'react-native';
import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import UsersLogin from '../screens/UsersLogin';
import UsersSignup from '../screens/UsersSignup';
import UsersDetails from '../screens/UserDetails';

const Navigator = createStackNavigator({
  Login: UsersLogin,
  Signup: UsersSignup,
  Details: UsersDetails
});

export default createAppContainer(Navigator);

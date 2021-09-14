import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';

// Auth Screens
import UsersLogin from '../screens/UsersLogin';
import UsersSignup from '../screens/UsersSignup';

// Logged-in Screens
import UsersDetails from '../screens/UserDetails';
import Homepage from '../screens/Homepage';
import HortaSelection from '../screens/HortaSelection';

// Loading Screens
import AuthLoadingScreen from '../screens/AuthLoadingScreen';

const AppStack = createStackNavigator({
  Home: Homepage,
  Hortas: HortaSelection,
  Details: UsersDetails
});

const AuthStack = createStackNavigator({
  Login: UsersLogin,
  Signup: UsersSignup
});

export default createAppContainer(createSwitchNavigator(
  {
    AuthLoading: AuthLoadingScreen,
    App: AppStack,
    Auth: AuthStack,
  },
  {
    initialRouteName: 'AuthLoading',
  }
)
);
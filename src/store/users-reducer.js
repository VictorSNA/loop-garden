import * as usersActions from './users-actions';
import User from '../model/User';

const initialState = {
  users: []
}

export default(state = initialState, action) => {
  switch(action.type) {
    case usersActions.ADD_USER:
      const u = new User(
        action.dataUser.id.toString(),
        action.dataUser.name,
        action.dataUser.email,
        action.dataUser.password
      );
      console.log(u);
      console.log(state);

      return {
        users: state.users.concat(u)
      };
    case usersActions.FIND_USER:
      return {
        users: action.dataUser.map(u => new User(
          u.id.toString(),
          u.name,
          u.email,
          "")
        )
      }
    case usersActions.DEL_USER:
      return initialState;

    case usersActions.UPDATE_USER:
      return {
        users: action.users.map(u => new User(
          u.id.toString(),
          u.name,
          u.email,
          "")
        )
      }
    case usersActions.DESTROY_SESSION:
      return {
        users: action.users
      }
    case usersActions.LOGIN_USER:
      return {
        users: action.users.map(u => new User(
          u.id.toString(),
          u.name,
          u.email,
          "")
        )
      }

    default:
      return state;
  }
}

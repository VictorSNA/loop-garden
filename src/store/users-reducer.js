import * as usersActions from './users-actions';
import User from '../model/User';

const initialState = {
  user: null
}

export default(state = initialState, action) => {
  switch(action.type) {
    case usersActions.SUCCESS_ADD_USER:
      var user_payload = action.payload.user;
      var user = new User(
        user_payload.uid,
        user_payload.email,
        user_payload.emailVerified
      )

      return {
        user: user,
        successUserCreationMessage: "Usuário criado com sucesso"
      }

    case usersActions.FAILURE_ADD_USER:
      return {
        ...state,
        failureUserCreationMessage: action.payload.error_message
      }

    case usersActions.CLEAR_CREATE_USER_SUCCESS_MESSAGE:
      return {
        ...state,
        successUserCreationMessage: ""
      }

    case usersActions.SUCCESS_LOGIN_USER:
      var user_payload = action.payload.user;

      var user = new User(
        user_payload.uid,
        user_payload.email,
        user_payload.emailVerified
      )

      return {
        user: user,
        successUserLoginMessage: ""
      }


    case usersActions.SUCCESS_DEL_USER:
      return{
        user: null,
        successUserDeleteMessage: "Usuário excluído com sucesso"
      }

    case usersActions.DESTROY_SESSION:
      return {
        user: null
      }

    case usersActions.UPDATES_USER_STATE:
      var user_payload = action.payload.user;
      var user = new User(
        user_payload.uid,
        user_payload.email,
        user_payload.emailVerified
      )

      return {
        user: user
      }

    default:
      return state;
  }
}

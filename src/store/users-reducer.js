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
        ...state,
        user: user,
        successUserCreationMessage: "Usuário criado com sucesso"
      }

    case usersActions.FAILURE_ADD_USER:
      return {
        user: null,
        failureUserCreationMessage: action.payload.error_code
      }

    case usersActions.CLEAR_CREATE_USER_SUCCESS_MESSAGE:
      return {
        successUserCreationMessage: ""
      }

    case usersActions.CLEAR_CREATE_USER_FAIL_MESSAGE:
      return {
        failureUserCreationMessage: ""
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

    case usersActions.FAILURE_LOGIN_USER:
      return {
        user: null,
        failedLoginMessage: action.payload.error_code
      }

    case usersActions.CLEAR_FAILURE_LOGIN_ERROR_MESSAGE:
      return {
        ...state,
        failedLoginMessage: ""
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
        ...state,
        user: user
      }

    case usersActions.GET_GARDENS:
      var hortas_payload = action.payload.hortas;

      return {
        ...state,
        hortas: hortas_payload
      }

    default:
      return state;
  }
}

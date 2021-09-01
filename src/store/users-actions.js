import firebase from 'firebase';
import ENV from '../../env';
import { AsyncStorage } from 'react-native';

if (!firebase.apps.length)
  firebase.initializeApp(ENV);

import 'firebase/auth';


export const SUCCESS_ADD_USER = 'SUCCESS_ADD_USER';
export const FAILURE_ADD_USER = 'FAILURE_ADD_USER';
export const CLEAR_CREATE_USER_SUCCESS_MESSAGE = 'CLEAR_CREATE_USER_SUCCESS_MESSAGE';
export const CLEAR_CREATE_USER_FAIL_MESSAGE = 'CLEAR_CREATE_USER_FAIL_MESSAGE';

export const SUCCESS_LOGIN_USER = 'SUCCESS_LOGIN_USER';
export const FAILURE_LOGIN_USER = 'FAILURE_LOGIN_USER';
export const CLEAR_FAILURE_LOGIN_ERROR_MESSAGE = 'CLEAR_FAILURE_LOGIN_ERROR_MESSAGE'

export const SUCCESS_DEL_USER = 'SUCCESS_DEL_USER';

export const DESTROY_SESSION = 'DESTROY_SESSION';

export const UPDATES_USER_STATE = 'UPDATES_USER_STATE';

export const FAILURE_DELETE_USER = 'FAILURE_DELETE_USER';

export const createsUserState = (payload) => {
  return async dispatch => {
    var user_payload = JSON.parse(payload);

    dispatch({
      type: UPDATES_USER_STATE,
      payload: {
        user: user_payload
      }
    });
  }
};


export const addUser = (email, password) => {
  return async dispatch => {
    await firebase
    .auth()
    .createUserWithEmailAndPassword(email, password)
    .then((userCredential) => {
      var user = userCredential.user;

      AsyncStorage.setItem("userData", JSON.stringify(user));

      dispatch({
        type: SUCCESS_ADD_USER,
        payload: {
          user: user
        }
      });
    })
    .catch((error) => {
      dispatch({
        type: FAILURE_ADD_USER,
        payload: {
          error_code: error.code
        }
      });
    });
  }
}

export const clearCreateUserSuccessMessage = () =>{
  return async dispatch => {
    dispatch({
      type: CLEAR_CREATE_USER_SUCCESS_MESSAGE
    });
  }
};

export const clearCreateUserFailMessage = () =>{
  return async dispatch => {
    dispatch({
      type: CLEAR_CREATE_USER_SUCCESS_MESSAGE
    });
  }
};
export const login = (email, password) => {
  return async dispatch => {
    firebase.auth().signInWithEmailAndPassword(email, password)
    .then((userCredential) => {
      var user = userCredential.user;

      AsyncStorage.setItem("userData", JSON.stringify(user));

      dispatch({
        type: SUCCESS_LOGIN_USER,
        payload: {
          user: user
        }
      });
    })
    .catch((error) => {
      dispatch({
        type: FAILURE_LOGIN_USER,
        payload: {
          error_code: error.code
        }
      });
    });
  }
}

export const clearFailedLoginMesage = () => {
  return async dispatch => {
    dispatch({
      type: CLEAR_FAILURE_LOGIN_ERROR_MESSAGE
    })
  }
}

export const deleteUser = () => {
  return async dispatch => {

    const user = firebase.auth().currentUser;

    AsyncStorage.clear();

    user.delete().then(() => {
      dispatch({
        type: SUCCESS_DEL_USER
      });
    }).catch((error) => {
      dispatch({
        type: FAILURE_DELETE_USER,
        payload: {
          error_message: error.message
        }
      });
    });
  }
}

export const destroySession = () => {
  return async dispatch => {
    AsyncStorage.clear();

    dispatch({
      type: DESTROY_SESSION, users: []
    });
  }
}

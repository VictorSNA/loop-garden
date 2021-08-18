import { insertUser, searchUser, deleteUser, upUser, loginUser } from '../helpers/db';

export const ADD_USER = 'ADD_USER';
export const LOGIN_USER = 'LOGIN_USER';
export const DEL_USER = 'DEL_USER';
export const UPDATE_USER = 'UPDATE_USER';
export const DESTROY_SESSION = 'DESTROY_SESSION';

export const updateUser = (id, name, email) => {
  return async dispatch => {
    try {
      const resultDB = await upUser(id, name, email);
      const findUser = await searchUser(id);

      dispatch({
        type: UPDATE_USER, users: findUser.rows._array
      });
    }catch(error){
      console.log(error);
      throw(error);
    }

  }

}

export const delUser = (email) => {
  return async dispatch => {
    try {
      const resultDB = await deleteUser(email);

      dispatch({
        type: DEL_USER, user: []
      });
    }catch(error){
      console.log(error);
      throw(error);
    }

  }
}
export const addUser = (name, email, password) => {
  return async dispatch => {
    console.log(name);
    const resultDB = await insertUser(
      name,
      email,
      password
    )

    dispatch(
      {
        type: ADD_USER,
        dataUser: {
          id: resultDB.insertId,
          name: name,
          email: email,
          password: password
        }
      }
    );
  }
}

export const login = (email, password) => {
  return async dispatch => {
    try {
      console.log("-")
      console.log(email)
      console.log(password)
      const resultDB = await loginUser(email, password);

      console.log(resultDB)
      console.log("+")
      dispatch({
        type: LOGIN_USER, users: resultDB.rows._array
      });
    }catch(error){
      console.log(error);
      throw(error);
    }
  }
}

export const destroySession = (id) => {
  return async dispatch => {
    dispatch({
      type: DESTROY_SESSION, users: []
    });
  }
}

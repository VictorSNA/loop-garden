import * as SQLite from 'expo-sqlite';

const db = SQLite.openDatabase("loop-garden.db");

export const init = () => {
  const promise = new Promise((resolve, reject) => {
    db.transaction((tx) => {
      tx.executeSql(
        'CREATE TABLE IF NOT EXISTS user (id INTEGER PRIMARY KEY, name TEXT NOT NULL, email TEXT NOT NULL, password TEXT NOT NULL);',
        [],
        (_, result) => { resolve(result) },
        (_, err) => { reject(err) }
      );
    });
  });
  return promise;
}

export const insertUser = (name, email, password) => {
  const promise = new Promise((resolve, reject) => {
    db.transaction((tx) => {
      tx.executeSql(
        'INSERT INTO user (name, email, password) VALUES (?, ?, ?)',
        [name, email, password],
        (_, result) => { resolve(result) },
        (_, err) => { reject(err) }
      );
    });
  });
  return promise;
}

export const searchUser = (id) => {
  const promise = new Promise((resolve, reject) => {
    db.transaction((tx) => {
      tx.executeSql(
        'SELECT * FROM user WHERE id == ?',
        [id],
        (_, resultado) => { console.log(resultado);resolve(resultado) },
        (_, err) => { reject(err) }
      );
    });
  });
  return promise;
}

export const deleteUser = (email) => {
  const promise = new Promise((resolve, reject) => {
    db.transaction((tx) => {
      tx.executeSql(
        'DELETE FROM user WHERE email == ?',
        [email],
        (_, resultado) => { resolve(resultado) },
        (_, err) => { reject(err) }
      );
    });
  });
  return promise;
}

export const upUser = (id, name, email) => {
  const promise = new Promise((resolve, reject) => {
    db.transaction((tx) => {
      tx.executeSql(
        'UPDATE user SET name = ?, email = ? WHERE id == ?',
        [name, email, id],
        (_, resultado) => { resolve(resultado) },
        (_, err) => { reject(err) }
      );
    });
  });
  return promise;
}

export const loginUser = (email, password) => {
  const promise = new Promise((resolve, reject) => {
    db.transaction((tx) => {
      tx.executeSql(
        'SELECT * from user WHERE email == ? AND password == ?',
        [email, password],
        (_, resultado) => { resolve(resultado) },
        (_, err) => { reject(err) }
      );
    });
  });
  return promise;
}

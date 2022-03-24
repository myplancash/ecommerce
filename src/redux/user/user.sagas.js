import { takeLatest, put, all, call } from 'redux-saga/effects';
import UserActionTypes from './user.types';

import { googleSignInSuccess, googleSignInFailure } from './user.actions';

import {
  auth,
  googleProvider,
  createUserProfileDocument
} from '../../firebase/firebase.utils';

export function* signInWithGoogle() {
  try {
    const {user} =  yield auth.signInWithPopup(googleProvider);
    //Si sabemos que al console.log(userRef); lo que nos devuelve es un objecto con una propiedad user que necesitamos podemos {user}
    const userRef = yield  call(createUserProfileDocument, user)
    // this is pretty much the same as running:  const userRef = await createUserProfileDocument(userAuth); in our App.js nut not using our yield, and call from sagas
    const userSnapshot = yield userRef.get();
    yield put(googleSignInSuccess({
      id: userSnapshot.id,
      ...userSnapshot.data()
    }))
  } catch(error) {
    yield put(googleSignInFailure(error))
  }

}

export function* onGoogleSignInStart() {
  yield takeLatest(UserActionTypes.GOOGLE_SIGN_IN_START, signInWithGoogle );
}

export function* userSagas() {
  yield all([call(onGoogleSignInStart)])
}
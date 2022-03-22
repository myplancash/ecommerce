import { takeLatest, call, put } from 'redux-saga/effects';

import { firestore, convertCollectionsSnapshotToMap } from '../../firebase/firebase.utils';
import { fetchCollectionsSuccess, fetchCollectionsFailure } from './shop.actions';
import ShopActionTypes from './shop.types';

export function* fetchCollectionsAsync() {
  yield console.log("i got fired")

  try {
    const collectionRef = firestore.collection('collections');
    const snapshot = yield collectionRef.get();
    console.log(snapshot)
    const collectionsMap = yield call(convertCollectionsSnapshotToMap, snapshot)
    yield put(fetchCollectionsSuccess(collectionsMap))
  } catch(error) {
    yield put(fetchCollectionsFailure(error.message))
  }



}
//We use takeLatest because we wanna to issue this API call one time
export function* fetchCollectionsStart() {
  yield takeLatest(
    ShopActionTypes.FETCH_COLLECTIONS_START,
    fetchCollectionsAsync
  );
}
import { createSelector } from 'reselect';
import memoize from 'lodash.memoize';

const selectShop = state => state.shop;

export const selectCollections = createSelector(
  [selectShop],
  shop => shop.collections
);

//to memoize selectCollection we actually have to memoize the whole function using a memoize helper function
//We can leverage the lodash library
// By wrapping this function is memoize, we're saying that whenever this function gets called and receives collectionUrlParam, I want to memoize the return of this function (in this case we return a selector
export const selectCollection = memoize((collectionUrlParam) =>
  createSelector(
    [selectCollections],
    collections => collections[collectionUrlParam]
  )
);
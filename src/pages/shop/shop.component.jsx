import React from 'react';
// import SHOP_DATA from './shop.data';

import CollectionOverview from '../../components/collection-overview/collections-overview.component';
import CollectionPage from '../collection/collection.component';
import { Route } from 'react-router-dom';


//receive the match, location and history objects as a props from Route when we wrap out in App.js
const ShopPage = ({ match }) => {
  console.log(match)
  return (
    <div className="shop-page">
       <Route exact path={`${match.path}`} component={CollectionOverview} />
       {/* we want our collection to dinamycally pluck off the ones related to the right collection */}
      <Route exact path={`${match.path}/:collectionId`} component={CollectionPage} />
    </div>
  )
}

export default ShopPage;



// this.state = {
//   collections: SHOP_DATA
// }

//in the same root create a shop.data.js which as this: exported at the end
// const SHOP_DATA = [
//   {
//     id: 1,
//     title: 'Hats',
//     routeName: 'hats',
//     items: [
//       {
//         id: 1,
//         name: 'Brown Brim',
//         imageUrl: 'https://i.ibb.co/ZYW3VTp/brown-brim.png',
//         price: 25
//       },

//      __________
//      __________

// export default SHOP_DATA;
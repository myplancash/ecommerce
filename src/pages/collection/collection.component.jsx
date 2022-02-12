import React from 'react';

import CollectionItem from '../../components/collection-item/collection-item.component';

import './collection.styles.scss';
import { connect } from 'react-redux';

import { selectCollection } from '../../redux/shop/shop.selectors';

//aligns better with our component tree naming: ShopPage > CollectionPage > CollectionItem
const CollectionPage = ({collection}) => {
  const {title, items} = collection;

  console.log(collection)
  return (
    <div className="collection-page">
      <h2 className="title">{title}</h2>
      <div className="items">
        {
          items.map(item => (
            <CollectionItem key={item.id} item={item} />
          ))
        }
      </div>
    </div>
  )
}
//ownProps gives us all of the props that we're getting on the CollectionPage component
// selectCollection is not memoized due to collectionUrlParam being passed whenever our state changes and calling a new instance of our selectCollection function.
const mapStateToProps = (state, ownProps) => ({
  // this is necessary unlike other selectors, this selector needs a part of the state depending on the URL parameter!
  collection: selectCollection(ownProps.match.params.collectionId)(state)
})

export default connect(mapStateToProps)(CollectionPage);
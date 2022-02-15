import React from 'react';
import { connect } from 'react-redux';

import CollectionItem from '../../components/collection-item/collection-item.component';
// import './collection.styles.scss';
import { selectCollection } from '../../redux/shop/shop.selectors';

import {
  CollectionPageContainer,
  CollectionTitle,
  CollectionItemsContainer, }
from './collection.styles';


//aligns better with our component tree naming: ShopPage > CollectionPage > CollectionItem
const CollectionPage = ({collection}) => {
  const {title, items} = collection;

  console.log(collection)
  return (
    <CollectionPageContainer>
      <CollectionTitle>{title}</CollectionTitle>
      <CollectionItemsContainer>
        {
          items.map(item => (
            <CollectionItem key={item.id} item={item} />
          ))
        }
      </CollectionItemsContainer>
    </CollectionPageContainer>
  )
}
//ownProps gives us all of the props that we're getting on the CollectionPage component
// selectCollection is not memoized due to collectionUrlParam being passed whenever our state changes and calling a new instance of our selectCollection function.
const mapStateToProps = (state, ownProps) => ({
  // this is necessary unlike other selectors, this selector needs a part of the state depending on the URL parameter!
  collection: selectCollection(ownProps.match.params.collectionId)(state)
})

export default connect(mapStateToProps)(CollectionPage);
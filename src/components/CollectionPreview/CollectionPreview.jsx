import React from 'react';
import { Link } from 'react-router-dom';
import CollectionItem from '../CollectionItem/CollectionItem';
import './CollectionPreview.scss';

const CollectionPreview = ({ collectionItems, categoryName }) => (
  <section className="CollectionPreview">
    <h3 className="CollectionPreview__heading">Collection Preview</h3>
    <Link
      to={`/${categoryName.toLowerCase()}`}
      className="CollectionPreview__link"
    >
      View more
    </Link>
    <div className="CollectionPreview__items">
      {collectionItems.slice(0, 10).map((item, index) => (
        <CollectionItem key={`${item.name}_${index}`} item={item} />
      ))}
    </div>
  </section>
);

export default CollectionPreview;

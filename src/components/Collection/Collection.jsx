import React from 'react';
import * as easings from 'd3-ease';
import { useSpring, animated } from 'react-spring';
import { useSelector } from 'react-redux';
import { selectIsSingleColumnLayout } from '../../redux/filtersMenu/filtersMenuSelectors';
import { selectFilteredProducts } from '../../redux/products/productsSelectors';
import CollectionItem from '../CollectionItem/CollectionItem';
import ScrollToTop from '../ScrollToTop/ScrollToTop';
import useIntersectAPI from '../../hooks/useIntersectAPI';
import useDeepCompareEffect from 'use-deep-compare-effect';
import './Collection.scss';

const Collection = ({ category }) => {
  const isSingleColumnLayout = useSelector(selectIsSingleColumnLayout);
  const collectionItems = useSelector((state) =>
    selectFilteredProducts(state, category),
  );

  const { entry, setNode } = useIntersectAPI({
    threshold: 0.005,
  });

  const [CollectionItemsProps, setCollectionItems] = useSpring(() => ({
    config: {
      duration: 400,
      easing: easings.easeQuadOut,
    },
    from: {
      transform: `translateY(5.5rem)`,
    },
    reset: true,
  }));

  const [ScrollToTopProps, setScrollToTop] = useSpring(() => ({
    config: {
      duration: 550,
      easing: easings.easeCubic,
    },
    from: {
      opacity: 0,
    },
  }));

  useDeepCompareEffect(() => {
    setCollectionItems({
      transform: 'translateY(0rem)',
    });
  }, [collectionItems, [isSingleColumnLayout]]);

  useDeepCompareEffect(() => {
    const { currentEntry, previousEntry } = entry;
    const { isIntersecting } = currentEntry;
    const currentBoundingClientRectY = currentEntry.boundingClientRect
      ? currentEntry.boundingClientRect.y
      : 0;
    const previousBoundingClientRectY = previousEntry.boundingClientRect
      ? previousEntry.boundingClientRect.y
      : 0;

    // Run springCallback if window is intersecting 6th CollectionItem

    if (isSingleColumnLayout) {
      if (isIntersecting) {
        setScrollToTop({
          opacity: 1,
        });
      }

      // Run springCallback to revert animation
      else if (currentBoundingClientRectY > previousBoundingClientRectY) {
        setScrollToTop({
          opacity: 0,
        });
      }
    }
  }, [entry]);

  return (
    <section className="Collection">
      <animated.div
        style={CollectionItemsProps}
        className={`Collection__collection-items ${
          isSingleColumnLayout
            ? ''
            : 'Collection__collection-items--multiple-columns'
        }`}
      >
        {collectionItems &&
          collectionItems.map((item, index) => (
            <CollectionItem
              key={`${item.name}_${index}`}
              item={item}
              isSingleColumnLayout={isSingleColumnLayout}
              intersectAPIRef={index === 5 ? setNode : null}
            />
          ))}
      </animated.div>
      {isSingleColumnLayout && <ScrollToTop style={ScrollToTopProps} />}
    </section>
  );
};

export default Collection;

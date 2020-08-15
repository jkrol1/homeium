import React from 'react';
import * as easings from 'd3-ease';
import { useSelector } from 'react-redux';
import { useSpring, animated } from 'react-spring';
import useIntersectAPI from '../../hooks/useIntersectAPI';
import ProductCategory from '../ProductCategory/ProductCategory';
import { selectProductCategories } from '../../redux/products/productsSelectors';
import { selectWindowWidth } from '../../redux/window/windowSelectors';
import useDeepCompareEffect from 'use-deep-compare-effect';
import './ProductRange.scss';

const ProductRange = () => {
  const productCategories = useSelector(selectProductCategories);
  const width = useSelector(selectWindowWidth);

  // Define spring and springCallback

  const [props, set] = useSpring(() => ({
    config: {
      duration: 500,
      easing: easings.easeLinear,
    },
    from: {
      transform: `translateY(5rem)`,
      opacity: 0,
    },
  }));

  const springCallback = (translate, opacity) =>
    set({
      transform: `translateY(${translate}px)`,
      opacity,
    });

  // Get entry object from Itersect Observer API and setNode callback which will be passed to ref prop

  const { entry, setNode } = useIntersectAPI({
    threshold: 0.006,
  });

  useDeepCompareEffect(() => {
    const { currentEntry, previousEntry } = entry;

    // Run springCallback if window is intersecting ProductRange component at given threshold

    if (currentEntry.isIntersecting) springCallback(0, 1);
    // Run springCallback to revert animation if intersectionRatio for currentEntry is lower than previousEntry
    else if (currentEntry.intersectionRatio < previousEntry.intersectionRatio)
      springCallback(3, 0);
  }, [entry]);

  return (
    <animated.main style={props} className="ProductRange" ref={setNode}>
      {Object.keys(productCategories).map((productCategory, index) => (
        <ProductCategory
          key={`${productCategory}_${index}`}
          {...productCategories[productCategory]}
          width={width}
        />
      ))}
    </animated.main>
  );
};

export default ProductRange;

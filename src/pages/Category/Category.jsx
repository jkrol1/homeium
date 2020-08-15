import React from 'react';
import FiltersMenu from '../../components/FiltersMenu/FiltersMenu';
import Collection from '../../components/Collection/Collection';
import SeparationLine from '../../components/SeparationLine/SeparationLine';
import './Category.scss';

const CategoryPage = ({ match: { params } }) => {
  const { category } = params;
  const headingText = category[0].toUpperCase() + category.slice(1);

  const separationLineStyle = {
    bottom: '-3rem',
    left: '50%',
    transform: 'translateX(-50%)',
  };

  return (
    <main className="CategoryPage">
      <h2 className="CategoryPage__heading">
        {headingText}
        <SeparationLine style={separationLineStyle} />
      </h2>
      <FiltersMenu category={category} />
      <Collection category={category} />
    </main>
  );
};

export default CategoryPage;

import React from 'react';
import PropTypes from 'prop-types';
import defaultImage from '../../../assets/default-image.jpeg';

const Product = ({name, image, price}) => {
  return (
  <article className='product'>
    {/* <img src={image.url} alt={name} /> */}
    <h4>{name}</h4>
    <p>${price}</p>
  </article>
  );
};

Product.propTypes = {
  name: PropTypes.string.isRequired,
  image: PropTypes.object.isRequired,
  price: PropTypes.number.isRequired,
};

export default Product;

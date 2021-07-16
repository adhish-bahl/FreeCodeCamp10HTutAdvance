import React from 'react';
import PropTypes from 'prop-types';
import defaultImage from '../../../assets/default-image.jpeg';

const Product = ({name, image, price}) => {
  const imageUrl = image && image.url;
  return (
  <article className='product'>
    <img src={imageUrl || defaultImage} alt={name} />
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

Product.defaultProps = {
  name: "Name Undefined",
  price: 3.99,
  image: defaultImage,
};

export default Product;

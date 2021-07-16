import React from 'react';
import PropTypes from 'prop-types';
import defaultImage from '../../../assets/default-image.jpeg';

const Product = ({name, image, price}) => {
  const imageUrl = image && image.url;
  return (
  <article className='product'>
    <img src={imageUrl || defaultImage} alt={name || "Name Undefined"} />
    <h4>{name || "Name Undefined"}</h4>
    <p>${price || 3.99}</p>
  </article>
  );
};

Product.propTypes = {
  name: PropTypes.string.isRequired,
  image: PropTypes.object.isRequired,
  price: PropTypes.number.isRequired,
};

// Product.defaultProps = {
//   name: "Name Undefined",
//   price: 3.99,
//   image: defaultImage,
// };

export default Product;

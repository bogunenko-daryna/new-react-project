import React from 'react';
import PropTypes from 'prop-types';

function ProductBlock({ imageUrl, name, include, price, weight }) {
  const typeName = weight;
  const [activeType, setActiveType] = React.useState(0);
  const onSelectType = (index) => {
    setActiveType(index);
  };

  const [productCount, setProductCount] = React.useState(0);
  const onClickAddButton = () => {
    setProductCount(productCount + 1);
  };
  return (
    <div className="product-block">
      <div className="product-block__img">
        <img className="product-block__image" src={imageUrl} alt="" />
      </div>
      <h4 className="product-block__title">{name}</h4>
      <div className="product-block__body">
        <p>{include}</p>
        <div className="product-block__selector">
          <ul>
            {typeName.map((type, index) => (
              <li
                key={type}
                onClick={() => onSelectType(index)}
                className={activeType === index ? 'active' : ''}>
                {type}
              </li>
            ))}
          </ul>
        </div>

        <div className="product-block__bottom">
          <div className="product-block__price">{price}$</div>
          <button onClick={onClickAddButton} className="button button--outline button--add">
            <svg
              width="12"
              height="12"
              viewBox="0 0 12 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg">
              <path
                d="M10.8 4.8H7.2V1.2C7.2 0.5373 6.6627 0 6 0C5.3373 0 4.8 0.5373 4.8 1.2V4.8H1.2C0.5373 4.8 0 5.3373 0 6C0 6.6627 0.5373 7.2 1.2 7.2H4.8V10.8C4.8 11.4627 5.3373 12 6 12C6.6627 12 7.2 11.4627 7.2 10.8V7.2H10.8C11.4627 7.2 12 6.6627 12 6C12 5.3373 11.4627 4.8 10.8 4.8Z"
                fill="white"
              />
            </svg>
            <span>Add to cart</span>
            <i>{productCount}</i>
          </button>
        </div>
      </div>
    </div>
  );
}
ProductBlock.propTypes = {
  name: PropTypes.string.isRequired,
  imageUrl: PropTypes.string.isRequired,
  include: PropTypes.string.isRequired,
  types: PropTypes.arrayOf(PropTypes.number).isRequired,
  price: PropTypes.number.isRequired,
};

export default ProductBlock;

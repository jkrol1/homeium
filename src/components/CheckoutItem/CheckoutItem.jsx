import React from 'react';
import { useDispatch } from 'react-redux';
import { addItem, removeItem, clearItem } from '../../redux/cart/cartActions';
import { ReactComponent as ArrowLeftSVG } from '../../assets/arrow-left.svg';
import { ReactComponent as ArrowRightSVG } from '../../assets/arrow-right.svg';
import { ReactComponent as DeleteSVG } from '../../assets/delete.svg';
import './CheckoutItem.scss';

const CheckoutItem = ({
  id,
  name,
  imageUrl,
  quantity,
  price,
  selectedColor,
}) => {
  const dispatch = useDispatch();

  const handleClick = (actionCreator) => () =>
    dispatch(actionCreator({ id, selectedColor }));

  return (
    <div className="CheckoutItem">
      <img className="CheckoutItem__image" src={imageUrl} alt="product" />
      <div className="name-color-container">
        <p className="CheckoutItem__text-value">{name}</p>
        <span
          className="CheckoutItem__color-option"
          style={{ backgroundColor: selectedColor }}
        ></span>
      </div>
      <div className="quantity-container">
        <div className="icon-container" onClick={handleClick(removeItem)}>
          <ArrowLeftSVG />
        </div>
        <p className="CheckoutItem__text-value">{quantity}</p>
        <div className="icon-container" onClick={handleClick(addItem)}>
          <ArrowRightSVG />
        </div>
      </div>
      <p className="CheckoutItem__text-value">{price}</p>
      <div className="icon-container" onClick={handleClick(clearItem)}>
        <DeleteSVG />
      </div>
    </div>
  );
};

export default CheckoutItem;

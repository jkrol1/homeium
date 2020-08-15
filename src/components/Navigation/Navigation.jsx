import React, { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { signOutStart } from '../../redux/user/userActions';
import { selectNumberOfCartItems } from '../../redux/cart/cartSelectors';
import { selectCurrentUser } from '../../redux/user/userSelectors';
import CartPanel from '../CartPanel/CartPanel';
import ProductsPanel from '../ProductsPanel/ProductsPanel';
import CartIcon from '../CartIcon/CartIcon';
import PanelContainer from '../PanelContainer/PanelContainer';
import { Transition } from 'react-spring/renderprops';
import useTransitionSetup from '../../hooks/useTransitionSetup';
import './Navigation.scss';

const Navigation = () => {
  const dispatch = useDispatch();
  const [showProductsPanel, setShowProductsPanel] = useState(false);
  const [showCartPanel, setShowCartPanel] = useState(false);
  const productsPanelLinkRef = useRef();
  const cartPanelIconRef = useRef();
  const numberOfCartItems = useSelector(selectNumberOfCartItems);
  const currentUser = useSelector(selectCurrentUser);
  const panelPositionAdjustment = { top: '5.25rem' };
  const transitionSetup = useTransitionSetup('panelTransition');

  const toggleProductsPanel = () => setShowProductsPanel(!showProductsPanel);
  const toggleCartPanel = () => setShowCartPanel(!showCartPanel);
  const handleSignOut = () => dispatch(signOutStart());

  return (
    <nav className="Navigation">
      <h1 className="Navigation__site-name">
        <Link to="/" className="Navigation__site-name-link">
          Homeium
        </Link>
      </h1>
      <ul className="Navigation__list">
        <li className="Navigation__list-item">
          <span
            onClick={toggleProductsPanel}
            className={`Navigation__link ${
              showProductsPanel ? 'Navigation__link--selected' : ''
            }`}
            ref={productsPanelLinkRef}
          >
            Products
          </span>
          <Transition items={showProductsPanel} {...transitionSetup}>
            {(showProductsPanel) =>
              showProductsPanel
                ? (props) => (
                    <PanelContainer
                      onClickOutsideOfPanel={toggleProductsPanel}
                      toggleSourceRef={productsPanelLinkRef}
                      render={(childElementRef) => (
                        <ProductsPanel
                          style={props}
                          ref={childElementRef}
                          hideProductsPanel={toggleProductsPanel}
                        />
                      )}
                    ></PanelContainer>
                  )
                : null
            }
          </Transition>
        </li>
        <li className="Navigation__list-item">
          <Link to="/contact" className="Navigation__link">
            Contact
          </Link>
        </li>
        <li className="Navigation__list-item">
          {currentUser ? (
            <p className="Navigation__link" onClick={handleSignOut}>
              Sign Out
            </p>
          ) : (
            <Link to="/signin" className="Navigation__link">
              Sign In
            </Link>
          )}
        </li>
        <li className="Navigation__list-item">
          <CartIcon
            onClick={toggleCartPanel}
            content={numberOfCartItems}
            cartPanelIconRef={cartPanelIconRef}
            showCartPanel={showCartPanel}
          />
          <Transition items={showCartPanel} {...transitionSetup}>
            {(showProductsPanel) =>
              showProductsPanel
                ? (props) => (
                    <PanelContainer
                      panelPositionAdjustment={panelPositionAdjustment}
                      onClickOutsideOfPanel={toggleCartPanel}
                      toggleSourceRef={cartPanelIconRef}
                      render={(childElementRef) => (
                        <CartPanel
                          style={props}
                          ref={childElementRef}
                          hideCart={toggleCartPanel}
                        />
                      )}
                    ></PanelContainer>
                  )
                : null
            }
          </Transition>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;

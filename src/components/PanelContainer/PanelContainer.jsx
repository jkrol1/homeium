import React, { useEffect, useRef } from 'react';
import { useSelector } from 'react-redux';
import { selectWindowWidth } from '../../redux/window/windowSelectors';
import './PanelContainer.scss';

const PanelContainer = ({
  panelPositionAdjustment,
  onClickOutsideOfPanel,
  toggleSourceRef,
  render,
}) => {
  const width = useSelector(selectWindowWidth);

  const childElementRef = useRef();

  const handleClick = (e) => {
    if (
      childElementRef.current.contains(e.target) ||
      e.target.isEqualNode(toggleSourceRef.current)
    ) {
      // inside click

      return;
    }

    // outside click

    onClickOutsideOfPanel();
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClick);
    return () => {
      document.removeEventListener('mousedown', handleClick);
    };
  }, []);

  useEffect(() => {
    if (width < 1240) {
      document.body.style.overflow = 'hidden';

      return () => {
        document.body.style.overflow = 'initial';
      };
    }
  }, []);

  return (
    <div
      className="FullScreenPanelContainer"
      style={
        width >= 1240 && panelPositionAdjustment
          ? panelPositionAdjustment
          : null
      }
    >
      {render(childElementRef)}
    </div>
  );
};

export default PanelContainer;

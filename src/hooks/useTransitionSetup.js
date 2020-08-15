import * as easings from 'd3-ease';
import { useSelector } from 'react-redux';
import { selectWindowWidth } from '../redux/window/windowSelectors';

const useTransitionSetup = (usage) => {

  const width = useSelector(selectWindowWidth);

  if (usage === 'panelTransition') return {
    config: {
      duration: 150,
      easing: easings.easeLinear
    },
    from: {
      transform: width < 1240 ? 'translateX(-100vw)' : 'translateY(0vh)',
      opacity: width < 1240 ? 1 : 0,
    },
    enter: {
      transform: 'translateX(0)',
      opacity: 1,
    },
    leave: {
      transform: width < 1240 ? 'translateX(-100vw)' : 'translateY(0vh)',
      opacity: width < 1240 ? 1 : 0
    }
  };
  else return {
    config: {
      duration: 350,
      easing: easings.easeCubicInOut
    },
    from: {
      transform: 'translateY(3.5rem)',
      position: 'initial',
      opacity: 0
    },
    enter: {
      transform: 'translateY(0)',
      position: 'initial',
      opacity: 1
    },
    leave: {
      opacity: 0,
      position: 'absolute',
    },

  }
};

export default useTransitionSetup;
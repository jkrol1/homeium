import React from 'react';
import { useSelector } from 'react-redux';
import { animated } from 'react-spring';
import { changeSortRule } from '../../redux/filtersMenu/filtersMenuActions';
import { selectSortRule } from '../../redux/filtersMenu/filtersMenuSelectors';
import SortOptions from '../SortOptions/SortOptions';
import sortOptionsArray from '../../utils/sortOptionsArray';
import ClosePanelSymbol from '../ClosePanelSymbol/ClosePanelSymbol';
import './SortPanel.scss';

const SortPanel = React.forwardRef(
  ({ style, dispatch, hideSortPanel }, ref) => {
    const sortRule = useSelector(selectSortRule);
    const handleSortRuleChange = (rule) => dispatch(changeSortRule(rule));

    return (
      <div className={'SortPanel'} style={style} ref={ref}>
        <ClosePanelSymbol onClick={hideSortPanel} />
        <SortOptions
          sortRule={sortRule}
          sortOptionsArray={sortOptionsArray}
          handleSortRuleChange={handleSortRuleChange}
          hideSortPanel={hideSortPanel}
        />
      </div>
    );
  },
);

export default animated(SortPanel);

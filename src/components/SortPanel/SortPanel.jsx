import React, { useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { changeSortRule, toggleSortPanel } from '../../redux/filtersMenu/filtersMenuActions';
import { selectSortRule } from '../../redux/filtersMenu/filtersMenuSelectors';
import SortOptions from '../SortOptions/SortOptions';
import sortOptionsArray from '../../utils/sortOptionsArray';
import './SortPanel.scss';

const SortPanel = ({ sortPanelBtnRef }) => {

    const dispatch = useDispatch();
    const sortRule = useSelector(selectSortRule);
    const sortPanelRef = useRef();

    const handleClick = e => {

        if (sortPanelRef.current.contains(e.target) || sortPanelBtnRef.current.isEqualNode(e.target)) {

            // inside click

            return;
        }

        // outside click

        dispatch(toggleSortPanel());
    };

    useEffect(() => {
        document.addEventListener("mousedown", handleClick);

        return () => {
            document.removeEventListener("mousedown", handleClick);
        };
    }, []);

    return (
        <div className={'SortPanel'} ref={sortPanelRef}>
            <span onClick={() => dispatch(toggleSortPanel())} className='SortPanel__close-panel-symbol'>&#10005;</span>
            <SortOptions sortRule={sortRule}
                sortOptionsArray={sortOptionsArray}
                dispatch={dispatch}
                changeSortRule={changeSortRule}
                toggleSortPanel={toggleSortPanel} />
        </div >);
};

export default SortPanel;

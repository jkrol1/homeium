import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { animated } from 'react-spring';
import { selectMinMaxPrice } from '../../redux/products/productsSelectors';
import { selectPriceFilter } from '../../redux/filtersMenu/filtersMenuSelectors';
import {
  changeMinPriceThreshold,
  changeMaxPriceThreshold,
} from '../../redux/filtersMenu/filtersMenuActions';
import CustomButton from '../CustomButton/CustomButton';
import InputRange from 'react-input-range';
import InputField from '../InputField/InputField';
import ClosePanelSymbol from '../ClosePanelSymbol/ClosePanelSymbol';
import 'react-input-range/lib/css/index.css';
import './FilterPanel.scss';

const FilterPanel = React.forwardRef(
  (
    {
      style,
      showClearFiltersOption,
      category,
      hideFiltersPanel,
      toggleClearFiltersOption,
    },
    ref,
  ) => {
    const dispatch = useDispatch();
    const { minPriceThreshold, maxPriceThreshold } = useSelector(
      selectPriceFilter,
    );
    const { minProductPrice, maxProductPrice } = useSelector((state) =>
      selectMinMaxPrice(state, category),
    );
    const [numericMinInput, setNumericMinInput] = useState(minPriceThreshold);
    const [numericMaxInput, setNumericMaxInput] = useState(maxPriceThreshold);
    const [sliderInput, setSliderInput] = useState({
      min: minPriceThreshold,
      max: maxPriceThreshold,
    });

    const handleSubmit = (e) => {
      e.preventDefault();

      dispatch(changeMinPriceThreshold(parseInt(numericMinInput)));
      dispatch(changeMaxPriceThreshold(parseInt(numericMaxInput)));
      hideFiltersPanel();

      // Show clear filters option if new min/max thresholds are different from min/max price of available products
      // and if clear filters option is not shown

      if (
        (numericMinInput !== minProductPrice ||
          numericMaxInput !== maxProductPrice) &&
        !showClearFiltersOption
      ) {
        toggleClearFiltersOption();

        // Remove clear filters option if new min/max thresholds are equal to min/max price of available products
        // and if clear filters option is shown
      } else if (
        numericMinInput === minProductPrice &&
        numericMaxInput === maxProductPrice &&
        showClearFiltersOption
      ) {
        toggleClearFiltersOption();
      }
    };

    return (
      <div className="FilterPanel" ref={ref} style={style}>
        <ClosePanelSymbol onClick={hideFiltersPanel} />
        <div className="FilterPanel__filter">
          <h3 className="FilterPanel__filter-type">Filter by price</h3>
          <form
            className="FilterPanel__price-filter-form"
            onSubmit={(e) => handleSubmit(e)}
          >
            <InputRange
              maxValue={maxProductPrice}
              minValue={minProductPrice}
              value={{ min: sliderInput.min, max: sliderInput.max }}
              onChange={({ min, max }) => {
                setSliderInput({ min, max });
                setNumericMinInput(min);
                setNumericMaxInput(max);
              }}
            />
            <div className="FilterPanel__range-number-inputs">
              <InputField
                type="number"
                placeholder={minPriceThreshold}
                onChange={(e) => setNumericMinInput(e.target.value)}
                onBlur={() => {
                  if (
                    numericMaxInput < numericMinInput ||
                    numericMinInput < minProductPrice
                  ) {
                    setNumericMinInput(sliderInput.min);
                  } else {
                    setSliderInput({
                      ...sliderInput,
                      min: parseInt(numericMinInput),
                    });
                  }
                }}
                onKeyDown={(e) => {
                  if (e.key === 'Enter') {
                    e.preventDefault();
                    if (
                      numericMaxInput < numericMinInput ||
                      numericMinInput < minProductPrice
                    ) {
                      setNumericMinInput(sliderInput.min);
                    } else {
                      setSliderInput({
                        ...sliderInput,
                        min: parseInt(numericMinInput),
                      });
                    }
                  }
                }}
                modifier="tight"
                value={numericMinInput}
              />

              <span className="FilterPanel__dash"> - </span>

              <InputField
                type="number"
                placeholder={maxPriceThreshold}
                onChange={(e) => setNumericMaxInput(e.target.value)}
                onBlur={() => {
                  if (
                    numericMaxInput < numericMinInput ||
                    numericMaxInput > maxProductPrice
                  ) {
                    setNumericMaxInput(sliderInput.max);
                  } else {
                    setSliderInput({
                      ...sliderInput,
                      max: parseInt(numericMaxInput),
                    });
                  }
                }}
                onKeyDown={(e) => {
                  if (e.key === 'Enter') {
                    e.preventDefault();
                    if (
                      numericMaxInput < numericMinInput ||
                      numericMaxInput > maxProductPrice
                    ) {
                      setNumericMaxInput(sliderInput.max);
                    } else {
                      setSliderInput({
                        ...sliderInput,
                        max: parseInt(numericMaxInput),
                      });
                    }
                  }
                }}
                modifier="tight"
                value={numericMaxInput}
              />
            </div>
            <CustomButton
              content={'Filter'}
              modifier="large-with-border"
              type="submit"
            />
          </form>
        </div>
      </div>
    );
  },
);

export default animated(FilterPanel);

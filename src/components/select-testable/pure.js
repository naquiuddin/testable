import React from 'react';
import ShortId from 'shortid';

const SelectTestablePure = ({
  options,
  valueObj,
  valueAttr,
  textAttr,
  handleChange,
}) => {
  return (
    <div>
      <select onChange={e => handleChange(e)} value={valueObj[valueAttr]}>
        {options.map(option => (
          <option key={ShortId.generate()} value={option[valueAttr]}>
            {option[textAttr]}
          </option>
        ))}
      </select>
    </div>
  );
};

export default SelectTestablePure;

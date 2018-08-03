import { compose, withHandlers } from 'recompose';

const SelectTestableHandlers = compose(
  withHandlers({
    handleChange: ({ options, updateValueObj, valueAttr }) => e => {
      const value = e.target.value;
      const newValueObj = options.find(obj => obj[valueAttr] === value);
      updateValueObj(newValueObj);
    },
  })
);

export default SelectTestableHandlers;

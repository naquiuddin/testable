import { compose, withState, withProps } from 'recompose';

const Employees = [
  {
    name: 'Khaja Naquiuddin',
    empId: '275595',
    contact: '8978255396',
    email: 'naquiuddin@gmail.com',
  },
  {
    name: 'Henning Grimm',
    empId: '275596',
    contact: '1234567890',
    email: 'henninggrimm@gmail.com',
  },
  {
    name: 'Tahvo',
    empId: '275597',
    contact: '1234567890',
    email: 'tahvoatir@gmail.com',
  },
];

const ValueObj = {
  name: 'Khaja Naquiuddin',
  empId: '275595',
  contact: '8978255396',
  email: 'naquiuddin@gmail.com',
};

const ParentHocHandlers = compose(
  withState('valueObj', 'updateValueObj', ValueObj),
  withProps(() => {
    return {
      options: Employees,
      valueAttr: 'empId',
      textAttr: 'name',
    };
  })
);

export default ParentHocHandlers;

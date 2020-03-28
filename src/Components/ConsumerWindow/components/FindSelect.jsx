import React, { useState } from 'react';
import CreatableSelect from 'react-select/creatable';

const CreatableSingle = (props) =>{
props.customer.map(i=> i.label=i.name) //Реакт-селект  вывод только по метке добавляем метку
const [customers] = useState(props.customer);
let  handleChange = (newValue, actionMeta) => {
    console.group('Value Changed');
    console.log(newValue);
    console.log(`action: ${actionMeta.action}`);
    console.groupEnd();
    props.changeFunction(newValue, customers)
  };
let  handleInputChange = (inputValue, actionMeta) => {
    console.group('Input Changed');
    console.log(inputValue);
    console.log(`action: ${actionMeta.action}`);
    console.groupEnd();
  };
    return (
      <CreatableSelect
       width='100%'
        isClearable
        placeholder ={'Начинайте ввод'}
        onChange={handleChange}
        onInputChange={handleInputChange}
        options={props.customer}
        styles={customStyles}
      />
    )
}
const customStyles = {
  option: (provided, state) => ({
    ...provided,
    borderBottom: '1px dotted pink',
    color: state.isSelected ? 'red' : '#333',
    padding: 20,
  }),
  control: (provided) => ({
    ...provided,
    border: 'none'
  }),
  singleValue: (provided, state) => {
    const opacity = state.isDisabled ? 0.5 : 1;
    const transition = 'opacity 300ms';

    return { ...provided, opacity, transition };
  }
}
export default  CreatableSingle
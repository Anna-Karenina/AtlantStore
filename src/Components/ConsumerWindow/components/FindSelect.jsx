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
    props.addSortConsumer(newValue, customers)
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
      />
    )
}
export default  CreatableSingle

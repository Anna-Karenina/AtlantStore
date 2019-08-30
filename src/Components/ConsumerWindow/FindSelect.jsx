import React, { Component, useState } from 'react';
import CreatableSelect from 'react-select/creatable';




const CreatableSingle = (props) =>{
props.customer.map(i=> i.label=i.name) //Реакт-селект  вывод только по метке добавляем метку
const [customers, setCustomer] = useState(props.customer);
let  handleChange = (newValue: any, actionMeta: any) => {
    console.group('Value Changed');
    console.log(newValue);
    console.log(`action: ${actionMeta.action}`);
    console.groupEnd();
    props.addSortConsumer(newValue, customers)
  };
let  handleInputChange = (inputValue: any, actionMeta: any) => {
    console.group('Input Changed');
    console.log(inputValue);
    console.log(`action: ${actionMeta.action}`);
    console.groupEnd();
  };
    return (
      <CreatableSelect
        isClearable
        placeholder ={'Начинайте ввод'}
        onChange={handleChange}
        onInputChange={handleInputChange}
        options={props.customer}
      />
    )
}
export default  CreatableSingle

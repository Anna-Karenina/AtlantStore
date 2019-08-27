import React, { Component } from 'react';
import CreatableSelect from 'react-select/creatable';




export default class CreatableSingle extends Component{
constructor(props){
super(props)
console.log(props)
props.customer.map(i=> i.label=i.name) //Реакт-селект  вывод только по метке добавляем метку
}
  handleChange = (newValue: any, actionMeta: any) => {
    console.group('Value Changed');
    console.log(newValue);
    console.log(`action: ${actionMeta.action}`);
    console.groupEnd();
    this.props.addSortConsumer(newValue)
  };
  handleInputChange = (inputValue: any, actionMeta: any) => {
    console.group('Input Changed');
    console.log(inputValue);
    console.log(`action: ${actionMeta.action}`);
    console.groupEnd();
  };
  render() {
    return (
      <CreatableSelect
        isClearable
        placeholder ={'Начинайте ввод'}
        onChange={this.handleChange}
        onInputChange={this.handleInputChange}
        options={this.props.customer}
      />
    );
  }
}

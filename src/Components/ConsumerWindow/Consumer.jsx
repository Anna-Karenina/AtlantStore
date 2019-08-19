import React from 'react';
import cl from './Customer.module.css'
import { connect } from 'react-redux';
import { Link } from 'react-router-dom'
import RecyclingBin from './RecyclingBin'
import SourceBox from './SourceBox'
import {fromFileConsumerAc} from './../../Redux/FileReducer'
const fs = require('fs');
const path = "/Users/annakarenina/Documents/ui/new/el/src/Components/ConsumerWindow/Consumer.json"

class Consumer extends React.Component {
  render(){

console.log(this)
let file = JSON.parse(fs.readFileSync(path ,function(err, data){
        if(err){console.error(err)}
        else {
        console.log(data);
        }
    }))

if(this.props.customer.length === 0){
 this.props.addNewConsumertoStatedis(file);
}
  return(
    <div className = {cl.mainWrapper}>
      <div className = {cl.firscol}>
        <div className={cl.consedit}>
          <h4>Меню редактирования поставщика</h4>
        </div>
      </div>

      <div className = {cl.seccol}>
        <div className = {cl.listwrapper}>

     <SourceBox ITEMS={this.props.customer} />

        </div>
      </div>

      <div className = {cl.thirdcol}>
        <div className={cl.recyclingbinwrapper}>
        <RecyclingBin Items={this.props.customer}/>
          <br/>
          <br/>
          <br/>
          <br/>
          <Link to="/"><button>назад</button></Link>
        </div>
      </div>
    </div>
  )
}}

const mapStateToProps = (state) =>{
  return{
        customer: state.fileReducer.customer
        }
  }

  const mapDispatchToProps = (dispatch) =>{
    return{
      addNewConsumertoStatedis: (file)=>{
        dispatch(fromFileConsumerAc(file))
      }
    }
  }
Consumer = connect (mapStateToProps,mapDispatchToProps )(Consumer)

export default Consumer




// <div className = {cl.listwrapper}>
//
// {this.props.customer.map(c=> <SourceBox key={c.id} color={c.name} name={c.name} />)}
//
// </div>

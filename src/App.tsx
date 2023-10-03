import React,{ Fragment, useState } from 'react';
import Alert from './Components/Alert';
import Button from './Components/Button';
import List from './Components/ListGroup';
import ExpandText from './ExpandableText';
import produce from 'immer';
import Form from "./Components/Form";
import Filter from './Components/filter'

const App = () => {

const[selectedCategory,setSelectCategory]=useState("");

const [expenses,setExpenses]=useState([
{id:1, description:'aaa',amount:10,category:'Utilities'},
{id:2, description:'bbb',amount:10,category:'Utilities'},
{id:3, description:'ccc',amount:10,category:'Groceries'},
{id:4, description:'ddd',amount:10,category:'Utilities'},

])

const visibleExpenses=selectedCategory? expenses.filter((e)=>e.category===selectedCategory ):expenses;

  return (
    <Fragment>
   <Form  onSubmit={(data)=>setExpenses([...expenses,{...data,id:expenses.length+1 }])}  />
<Filter onSelectCategory={(category)=>setSelectCategory(category)}/>
<List expenses={visibleExpenses} onDelete={(id)=>setExpenses(expenses.filter(e => e.id !=id))} />

    </Fragment>
  )
}
export default App;

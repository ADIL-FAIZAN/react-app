import React from 'react';
import select from './Category';


interface props{

    onSelectCategory:(category:string)=>void;
}

const filter = ({onSelectCategory}:props) => {
  return (
    <div>
   
   <select className='form-select' onChange={(event) => console.log(event)}>
   <option>All Category</option>
{select.map(e=>
<option  key={e}>{e}</option>
)}
      </select>
    </div>
  )
}

export default filter;

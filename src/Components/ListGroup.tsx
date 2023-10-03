interface Expense{
    id:number;
    description:string;
    amount:number;
    category:string;

}

interface props{
  expenses:Expense[],
  onDelete:(id:number)=>void;
}

const ListGroup = ({expenses,onDelete}:props) => {


  if(expenses.length===0)return null
  
  
  
  return (
    <div>
    <table className="table"> 
  <thead>
    <tr>
     <th>Description</th>
      <th>Amount</th>
      <th>Category</th>
    </tr>
  </thead>
  <tbody> 

   {expenses.map(expense=> <tr key={expense.id}>
   
    <td>{expense.description}</td>
    <td>{expense.amount}</td>
    <td>{expense.category}</td>
    <td><button className="btn btn-outline-danger" onClick={()=>onDelete(expense.id)}>Delete</button></td>

    </tr>)}
    </tbody>
    <tfoot>
      <tr>
        <td>Total</td>
        {/*expense mean array ki currentvalue ya each*/}
        <td>${expenses.reduce((acc,expense)=>expense.amount+acc,0).toFixed(2)}</td>
        <td></td>
        <td></td>
      </tr>
    </tfoot>
</table>


    </div>
  )
}

export default ListGroup;

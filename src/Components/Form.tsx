import select from './Category';
import {z} from 'zod';
import { Field, FieldValue, useForm } from "react-hook-form";
import {zodResolver} from '@hookform/resolvers/zod';


interface props{

  onSubmit:(data:ExpenseFormData)=>void

}


const schema=z.object({
description:z.string().min(3,{message:"Description should be atleast 3 characters"}).max(50),
amount:z.number({invalid_type_error:"Amount is required"}).min(0.01).max(100_000),
category:z.enum(select,{
  errorMap:()=>({message:'Category is required'})
})
});

type ExpenseFormData=z.infer<typeof schema>;

const Form = ({onSubmit}:props) => {

const {register,handleSubmit,formState:{errors},reset}=useForm<ExpenseFormData>({resolver:zodResolver(schema)})

  return (
    <div>
      <form onSubmit={handleSubmit(data=>{
        
        
      onSubmit(data);
      reset();
      
      }
   ) }>
  <div className="mb-3">
    <label htmlFor="exampleInputEmail1" className="form-label">Description</label>
    <input  {...register('description')} type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
    {errors.description&&<p className="text-danger">{errors.description.message}</p>}
  </div>
  <div className="mb-3">
    <label htmlFor="exampleInputPassword1" className="form-label">Amount</label>
    <input  {...register("amount",{valueAsNumber:true})}    type="number" className="form-control" id="exampleInputPassword1"/>
    {errors.amount&&<p className="text-danger">{errors.amount.message}</p>}
  </div>
  <div className="mb-3">
    <label htmlFor="exampleInputEmail1" className="form-label">Category</label>
    <select  {...register('category')}  className='form-select'>
      <option>All Category</option>
{select.map(e=>
<option  key={e}>{e}</option>
)}
    </select>
    {errors.category&&<p className="text-danger">{errors.category.message}</p>}
  </div>
  
  <button type="submit" className="btn btn-primary mb-5">Submit</button>
</form>
    </div>
  )
}

export default Form;

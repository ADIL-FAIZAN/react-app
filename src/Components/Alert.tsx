import React,{Fragment, ReactNode } from 'react'



interface props{

  onClose:()=>void
}


const Alert = ({onClose}:props) => {
  return (
    <Fragment>



<div className="alert alert-warning alert-dismissible fade show" role="alert">
  <strong>Holy guacamole!</strong> You should check in on some of those fields below.
  <button  onClick={onClose}   type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
</div>

    </Fragment>
  )
}

export default Alert;
 








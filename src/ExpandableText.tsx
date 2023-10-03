import { useState } from "react";

interface props{
  children:string,
  maxChars?:number,
}






const ExpandableText = ({children,maxChars=100}:props) => {
  const [isExpanded,setExpanded]=useState(false);

  //if(children.length<= maxChars)return<p>{children}</p>
  console.log(isExpanded) 
  
  function handlesClick(){
    setExpanded(!isExpanded)
  }
  console.log(isExpanded)
  
  const text = isExpanded?children: children.substring(0,maxChars);

    return (
    <div>
      <p>{text}...<button onClick={handlesClick}>{isExpanded ?'less':'more'}</button></p>
    </div>
  )
}

export default ExpandableText;

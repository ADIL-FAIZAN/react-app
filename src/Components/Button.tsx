
import { useState } from 'react'
import produce from 'immer';
import styles from './Button.module.css'

interface props{

onClick:()=>void

}



const Button = ({onClick}:props) => {


  return (
    <div>
<button onClick={onClick} className={styles.btn}>More</button>

    </div>
  )
}

export default Button;

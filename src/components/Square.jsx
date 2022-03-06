import {useState} from 'react'
import '../App.scss'

const Square = ({value, onClick}) => {
  return (
    <button 
    type='button' 
    className='square'
    onClick={onClick}
    >
    {value}</button>
  )
  
}

export default Square
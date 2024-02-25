import React, {useState} from 'react'
import {useDispatch} from 'react-redux'
import {addTddo} from '../features/todo/todoSlice'

function AddTodo() {
    const [input, setInput] = useState('')
    const dispatch = useDispatch()

    const addHToandler = (e) => {
        e.preventDefault()
        dispatch(addTddo(input))
        setInput('')
    }
  return (
    <form>
        <input/>
        <button></button>
    </form>
  )
}

export default AddTodo
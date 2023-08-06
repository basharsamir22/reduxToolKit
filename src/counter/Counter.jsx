import React,{useState} from 'react'
import { useSelector,useDispatch } from 'react-redux'
import { addOne,munisOne,setName } from './counterSlice'
export default function Counter() {
    const[name,setValue]=useState('')
    const dispatch=useDispatch();
    const dataValue = useSelector(state=>state.counterData)
    const addNum =()=>{
        dispatch(addOne())
    }
    const munisNum =()=>{
        dispatch(munisOne())
    }
    const changeName =()=>{
        dispatch(setName(name))
    }
    return (
        <div>
            <button onClick={addNum}>+</button>
            <span>{dataValue?.count}</span>
            <button onClick={munisNum}>-</button>
            <input type="text" value={dataValue?.name}></input>
            <button onClick={changeName}>changeName</button>
            <input type="text" onChange={(e)=>setValue(e.target.value)} placeholder='enter name' ></input>

        </div>
    )
}

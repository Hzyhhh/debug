import { useState, useCallback } from 'react'

const useInputValue = () =>{
    const [value, setValue] = useState('')

    const onChange =useCallback<React.ChangeEventHandler<HTMLInputElement>>((evt)=>{
        setValue(evt.target.value)
        console.log(value);//存在的作用域不一样导致与target.value值不一致
        
    }, [value]) 
    return {
        value,
        onChange
    }
}

export default useInputValue;
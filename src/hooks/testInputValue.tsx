import React, { FC } from 'react'
import useInputValue from './useInputValue'
const Demo:FC<React.InputHTMLAttributes<HTMLInputElement>> = ()=>{
    const {...val} = useInputValue()
    return (
        <>
        <input {...val}/>
        </>
    )
}

export default Demo
import React from 'react'
import useHover from './useHover'

const Hover = ()=>{
    const { hover, bind } = useHover()
    return (
        <div {...bind}>
            hover:{String(hover)}
        </div>
    )
}

export default Hover
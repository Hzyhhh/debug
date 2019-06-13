import { useState } from 'react'

const useHover = () => {
  const [hover, setHover] = useState(false)
  return {
    hover,
    bind: {
      onMouseEnter: () => {
        setHover(true)
      },
      onMouseLeave: () => {
        setHover(false)
      },
    },
  }
}

export default useHover

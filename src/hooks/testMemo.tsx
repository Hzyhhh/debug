import React, { useState, useMemo } from 'react'

function Time() {
  return <p>{Date.now()}</p>
}

function Counter() {
  const [count, setCount] = useState(0)

  const refreshTime = useMemo(() => {
    return <Time />
  }, [count])

  return (
    <>
      <h1>{count}</h1>
      <button
        onClick={() => {
          setCount(count + 1)
        }}
      >
        +
      </button>
      {refreshTime}
    </>
  )
}

export default Counter

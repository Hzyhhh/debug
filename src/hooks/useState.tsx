import React, { useEffect, useReducer, useRef } from 'react'

const reducer = (state: any, action: any) => {
  switch (action.type) {
    case 'add':
      return { count: state.count + 1 }
    case 'reduce':
      return { count: state.count - 1 }
    default:
      return
  }
}

export function Counter() {
  const [state, dispatch] = useReducer(reducer, { count: 1 })
  let title = useRef(state!.count)
  useEffect(() => {
    console.log(title)

    document.title = `you click ${title.current} times`
    return function cleanup() {
      document.title = `app`
    }
  }, [state!.count])

  return (
    <>
      <div>{state!.count}</div>
      <button
        onClick={() => {
          dispatch({ type: 'add' })
        }}
      >
        +
      </button>
      <button
        onClick={() => {
          dispatch({ type: 'reduce' })
        }}
      >
        -
      </button>
    </>
  )
}

export default Counter

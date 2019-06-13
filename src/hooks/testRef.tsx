import React, { useRef, useState, useEffect } from 'react'

const Demo = () => {
  const t = useRef('')
  const [name, setState] = useState('abcdefg')

  useEffect(() => {
    t.current = name
  })

  const prevName = t.current

  return (
    <div>
      <input
        value={name}
        onChange={e => {
          setState(e.target.value)
        }}
      />
      <h2>{name}</h2>
      <p>{prevName}</p>
    </div>
  )
}

export default Demo

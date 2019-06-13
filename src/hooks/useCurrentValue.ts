import { useRef, useEffect } from 'react'

export const useCurrentValue = (value: number) => {
  const Ref = useRef(0)

  useEffect(() => {
    Ref.current = value
  }, [value])

  return Ref
}

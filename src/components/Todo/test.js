// let memoFn
// let memoKey
// function useCallback(fn, key) {
//   if (memoFn == null) {
//       memoFn = fn
//       memoKey = key
//       return fn
//   } else if (key !== undefined && key !== memoKey) {
//       memoFn = fn
//       memoKey = key
//       return fn
//   }
//   return memoFn
// }

// function render(props) {
//    const foo = useCallback(() => {
//        console.log(props)
//    }, props)

//    setTimeout(() => foo(), 1000)
// }

// render(1)
// render(2)

let nenFn
let nenkey
function usecallback(fn, key) {
  if (nenFn == null) {
    nenFn = fn
    nenkey = key
    return fn
  } else if (key !== undefined && key !== nenkey) {
    nenFn = fn
    nenkey = key
    return fn
  }
  return nenFn
}

function rendeer(idx) {
  const handleDelete = usecallback(() => {
    console.log(idx)
  }, idx)

  handleDelete()
}

rendeer(1)
rendeer(2)

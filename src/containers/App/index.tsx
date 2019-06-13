/**
 * App Root Component
 */
import React, { FC } from 'react'
import { hot } from 'react-hot-loader'
import '~/css/app.css'
import Todolist from '~/components/Todo/Todolist'
import Copybar from '../../components/Todo/CopyBar'

export const App: FC = props => {
  return (
    <div>
      <br />
      <Copybar corpID={location.search} />
      <br />
      <Todolist />
      <br />
    </div>
  )
}
// export class App extends React.Component<{}, {}> {
//   public render() {
//     return (
//       <div>
//         <br />
//         <Copybar corpID={location.search}/>
//         <br />
//         <Todolist />
//         <br />
//       </div>
//     )
//   }
// }

export default hot(module)(App)

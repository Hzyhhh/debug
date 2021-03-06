/**
 * Admin Root Component
 */
import React from 'react'
import { hot } from 'react-hot-loader'
import Stat from '~/hooks/useState'
import Demo from '~/hooks/testRef'
import UseMemoDemo from '~/hooks/testMemo'
import UseConTextDemo from '~/hooks/testContext'
import UseHoverDemo from '~/hooks/testHover'
import UseReducer from '~/hooks/testReducer'

export class App extends React.Component<{}, {}> {
  public render() {
    return (
      <>
        <Stat />
        <Demo />
        <UseMemoDemo />
        <UseConTextDemo />
        <UseHoverDemo />
        <UseReducer />
      </>
    )
  }
}

export default hot(module)(App)

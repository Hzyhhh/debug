import React, { FC, useState, useEffect } from 'react'
import Copy from 'copy-to-clipboard'
import { Button, Input, Row, Col } from 'antd'
import '~/css/app.css'

interface CopyBarProps {
  corpID: string
}
const CopyBar1: FC<CopyBarProps> = props => {
  const [State, setState] = useState('')
  const { corpID } = props

  const copyUrl = () => {
    Copy(corpID)
    console.log(State)

    alert('成功复制到剪切板')
  }
  useEffect(() => {
    setState(corpID)
  }, [State])
  return (
    <div>
      <Row>
        <Col span={3} />
        <Col span={12}>
          <Input disabled={true} defaultValue={corpID} />
        </Col>
        <Col span={9}>
          <Button onClick={copyUrl}>复制</Button>
        </Col>
      </Row>
    </div>
  )
}

// class CopyBar extends React.Component<CopyBarProps, CopyBarState> {
//   constructor(props: any) {
//     super(props)
//     this.state = {
//       url: [],
//       corpID: location.search,
//     }
//   }
//   render() {
//     return (
//       <div>
//         <Row>
//           <Col span={3} />
//           <Col span={12}>
//             <Input disabled={true} defaultValue={location.search} onChange={this.bindValueChange.bind(this)} />
//           </Col>
//           <Col span={9}>
//             <Button onClick={this.copyUrl.bind(this, location.search)}>复制</Button>
//           </Col>
//         </Row>
//       </div>
//     )
//   }

//   copyUrl(content: string) {
//     console.log(content)
//     Copy(content)
//     alert('成功复制到剪切板')
//   }

//   bindValueChange(e: any) {
//     console.log(e.target)
//     this.setState({
//       corpID: e.target.value,
//     })
//   }
// }

export default CopyBar1

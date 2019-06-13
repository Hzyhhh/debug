import React, { FC } from 'react'
import Api from '@gdjiami/gzb-jssdk'
import { Button, Row, Col } from 'antd'
const api = Api()
interface TodoitemProps {
  content: string
  index: number
  onDelete: (index: number) => void
}

const Todoitem1: FC<TodoitemProps> = props => {
  const bindDelete = () => {
    props.onDelete(props.index)
  }

  const findStringQuestionMark = (url: string) => {
    if (url.split('?').length !== 2) {
      url = `${props.content}${location.search.split('?')[1]}`
    }
    return url
  }

  const handleOpenInnerUrl = () => {
    const url = findStringQuestionMark(`${props.content}${location.search}`)
    api.locationTo({ url, showMode: 'inner' })
  }

  const handleOpenOuterUrl = () => {
    const url = findStringQuestionMark(`${props.content}${location.search}`)
    api.locationTo({ url, showMode: 'outer' })
  }
  return (
    <Row key={props.index}>
      <br />
      <Col span={2} />
      <Col span={13}>
        <li>{props.content}</li>
      </Col>
      <Col span={9}>
        <Button type="primary" onClick={handleOpenOuterUrl}>
          打开
        </Button>
        <Button type="default" onClick={handleOpenInnerUrl}>
          页内打开
        </Button>
        <Button type="danger" onClick={bindDelete}>
          删除
        </Button>
      </Col>
    </Row>
  )
}

// class Todoitem extends React.Component<TodoitemProps, TodoitemState> {
//   constructor(props: any) {
//     super(props)
//     this.state = {}
//   }
//   render() {
//     return (
//       <Row key={this.props.index}>
//         <br />
//         <Col span={2} />
//         <Col span={13}>
//           <li>{this.props.content}</li>
//         </Col>
//         <Col span={9}>
//           <Button type="primary" onClick={this.handleOpenOuterUrl}>
//             打开
//           </Button>
//           <Button type="default" onClick={this.handleOpenInnerUrl}>
//             页内打开
//           </Button>
//           <Button type="danger" onClick={this.bindDelete}>
//             删除
//           </Button>
//         </Col>
//       </Row>
//     )
//   }

//   bindDelete = () => {
//     this.props.onDelete(this.props.index)
//   }

//   findStringQuestionMark(url: string) {
//     if (url.split('?').length !== 2) {
//       url = `${this.props.content}${location.search.split('?')[1]}`
//     }
//     return url
//   }

//   handleOpenInnerUrl = () => {
//     const url = this.findStringQuestionMark(`${this.props.content}${location.search}`)
//     api.locationTo({ url, showMode: 'inner' })
//   }

//   handleOpenOuterUrl = () => {
//     const url = this.findStringQuestionMark(`${this.props.content}${location.search}`)
//     api.locationTo({ url, showMode: 'outer' })
//   }
// }

export default Todoitem1

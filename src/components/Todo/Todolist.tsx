import React, { FC, useState, useEffect, useCallback } from 'react'
import { Col, Row, Button, Input } from 'antd'
import Todoitem from './Todoitem'
import axios from 'axios'

interface todolistProps {}

const ipREG = (ip: string) => {
  const reg = new RegExp(
    '((http[s]{0,1}|ftp)://[a-zA-Z0-9\\.\\-]+\\.([a-zA-Z]{2,4})(:\\d+)?(/[a-zA-Z0-9\\.\\-~!@#$%^&*+?:_/=<>]*)?)|((www.)|[a-zA-Z0-9\\.\\-]+\\.([a-zA-Z]{2,4})(:\\d+)?(/[a-zA-Z0-9\\.\\-~!@#$%^&*+?:_/=<>]*)?)',
  )
  return reg.test(ip)
}

const autoAddHttpOrHttps = (value: string) => {
  if (value.split('//')[0] !== 'http:' && value.split('//')[0] !== 'https:') {
    value = 'https://' + value
  }
  if (value.split('?')[1]) {
    value = value + '&'
  }
  if (value.split('&').length > 1) {
    value = value.split('&')[0] + '&'
  }
  return value
}

const Todolist1: FC<todolistProps> = props => {
  const [list, setList] = useState<string[]>([])
  const [InputValue, setInputValue] = useState('')

  const handleDelete = useCallback(
    (index: number) => {
      let newList = [...list]
      newList.splice(index, 1)
      axios.post('/api/setItem', { data: newList }).then(() => {
        setList(newList)
      })
    },
    [list],
  )

  useEffect(() => {
    const fetchData = async () => {
      const newList = await axios.get('/api/getItem')
      if (newList != null) {
        setList(newList.data)
      }
    }
    fetchData()
  }, [])

  const bindAddList = useCallback<React.MouseEventHandler<HTMLButtonElement>>(() => {
    if (ipREG(InputValue)) {
      let inputValue = autoAddHttpOrHttps(InputValue)
      const newList = [...list, inputValue]
      localStorage.setItem('list', JSON.stringify(list))
      axios.post('/api/setItem', { data: newList }).then(res => {
        setList(newList)
        setInputValue('')
      })
    } else {
      setInputValue('')
      alert('请校验地址后重新输入！')
    }
  }, [InputValue])

  const bindValueChange = useCallback<React.ChangeEventHandler<HTMLInputElement>>(e => {
    setInputValue(e.target.value)
  }, [])

  return (
    <div>
      <Row>
        <Col span={3} />
        <Col span={12}>
          <Input placeholder="请输入开发路径" value={InputValue} onChange={bindValueChange} type="text" allowClear />
        </Col>
        <Col span={9}>
          <Button type="primary" onClick={bindAddList}>
            添加
          </Button>
        </Col>
      </Row>
      <Row>
        {list.map((item, index) => {
          return <Todoitem onDelete={handleDelete} key={index} content={item} index={index} />
        })}
      </Row>
    </div>
  )
}

// class Todolist extends React.Component<todolistProps, todolistState> {
//   constructor(props: any) {
//     super(props)
//     this.state = {
//       list: [],
//       InputValue: '',
//     }
//   }

//   render() {
//     return (
//       <div>
//         <Row>
//           <Col span={3} />
//           <Col span={12}>
//             <Input
//               placeholder="请输入开发路径"
//               value={this.state.InputValue}
//               onChange={this.bindValueChange.bind(this)}
//               type="text"
//               allowClear
//             />
//           </Col>
//           <Col span={9}>
//             <Button type="primary" onClick={this.bindAddList}>
//               添加
//             </Button>
//           </Col>
//         </Row>
//         <Row>
//           {this.state.list.map((item, index) => {
//             return <Todoitem onDelete={this.handleDelete} key={index} content={item} index={index} />
//           })}
//         </Row>
//       </div>
//     )
//   }

//   string2Array = (stringObj: any) => {
//     stringObj = stringObj.replace(/\[([\w, ]*)\]/, '$1')
//     if (stringObj.indexOf('[') == 0) {
//       // if has chinese
//       stringObj = stringObj.substring(1, stringObj.length - 1)
//     }
//     var arr = stringObj.split(',')
//     var newArray = [] //new Array();
//     for (var i = 0; i < arr.length; i++) {
//       var arrOne = arr[i]
//       newArray.push(arrOne)
//     }
//     return newArray
//   }

//   parseArray = (arrStr: string) => {
//     var tempKey = 'arr23' + new Date().getTime()
//     var arrayJsonStr = '{"' + tempKey + '":' + arrStr + '}'
//     var arrayJson
//     if (JSON && JSON.parse) {
//       arrayJson = JSON.parse(arrayJsonStr)
//     } else {
//       arrayJson = eval('(' + arrayJsonStr + ')')
//     }
//     return arrayJson[tempKey]
//   }

//   async componentDidMount() {
//     const list = (await axios.get('/api/getItem')).data
//     if (list != null) {
//       // let newList = this.parseArray(list)
//       // console.log(newList)
//       this.setState({
//         list: list,
//       })
//     }
//   }

//   handleDelete = (index: number) => {
//     let list = [...this.state.list]
//     list.splice(index, 1)
//     axios.post('/api/setItem', { data: list }).then(() => {
//       this.setState({
//         list,
//       })
//     })
//   }

//   ipREG = (ip: any) => {
//     const reg = new RegExp(
//       '((http[s]{0,1}|ftp)://[a-zA-Z0-9\\.\\-]+\\.([a-zA-Z]{2,4})(:\\d+)?(/[a-zA-Z0-9\\.\\-~!@#$%^&*+?:_/=<>]*)?)|((www.)|[a-zA-Z0-9\\.\\-]+\\.([a-zA-Z]{2,4})(:\\d+)?(/[a-zA-Z0-9\\.\\-~!@#$%^&*+?:_/=<>]*)?)',
//     )
//     return reg.test(ip)
//   }

//   autoAddHttpOrHttps(value: string) {
//     if (value.split('//')[0] !== 'http:' && value.split('//')[0] !== 'https:') {
//       value = 'https://' + value
//     }
//     if (value.split('?')[1]) {
//       value = value + '&'
//     }
//     if (value.split('&').length > 1) {
//       value = value.split('&')[0] + '&'
//     }
//     return value
//   }

//   bindAddList = () => {
//     if (this.ipREG(this.state.InputValue)) {
//       let InputValue = this.autoAddHttpOrHttps(this.state.InputValue)
//       const list = [...this.state.list, InputValue]
//       localStorage.setItem('list', JSON.stringify(list))
//       axios.post('/api/setItem', { data: list }).then(res => {
//         this.setState({
//           list,
//           InputValue: '',
//         })
//       })
//     } else {
//       this.setState({
//         InputValue: '',
//       })
//       alert('请校验地址后重新输入！')
//     }
//   }

//   bindValueChange(e: any) {
//     this.setState({
//       InputValue: e.target.value,
//     })
//   }

//   bindOpenUrl(index: number) {
//     console.log(this.state.list[index])
//   }
// }

export default Todolist1

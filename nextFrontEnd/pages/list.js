import Layout from '../components/Layout'
import { baseURL } from '../config'
import axios from 'axios'

export default class List extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      list: []
    }
  }

  componentDidMount () {
    axios.get(`${baseURL}/get`).then(list => {
      console.log(list.data)
      this.setState({ list: list.data })
    })
  }
  render () {
    const { list } = this.state
    const names = list.map(name => <NameItem name={name} key={name} />)
    return (
      <Layout>
        {list.length > 0 && <div className='list-group container'>{names}</div>}
      </Layout>
    )
  }
}

const NameItem = props => {
  return (
    <a href='#' className='list-group-item list-group-item-action'>
      {props.name}
    </a>
  )
}

import Layout from '../components/Layout'
import { baseURL } from '../config'
import axios from 'axios'

export default class Get extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      name: undefined
    }
  }

  handleFormSubmit = e => {
    e.preventDefault()
    const id = e.target.id.value.trim()
    axios
      .get(`${baseURL}/get/${id}`)
      .then(res => {
        console.log(res.data)
        this.setState({ name: res.data })
      })
      .catch(err => {
        console.log(err)
      })
  }

  render () {
    const { name } = this.state
    return (
      <Layout>
        <form className='container' onSubmit={this.handleFormSubmit}>
          <fieldset>
            <div className='form-group'>
              <label htmlFor='exampleInputId'>Id Number</label>
              <input
                type='number'
                className='form-control'
                id='exampleInputId'
                placeholder='Enter Id'
                name='id'
              />
            </div>

            <button type='submit' className='btn btn-primary'>
              Submit
            </button>

            {name && <h4 className='mt-4'>{name}</h4>}
          </fieldset>
        </form>
      </Layout>
    )
  }
}

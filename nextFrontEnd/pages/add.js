import Layout from '../components/Layout'
import { baseURL } from '../config'
import axios from 'axios'

export default class Add extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      added: false
    }
  }

  handleFormSubmit = e => {
    e.preventDefault()
    const name = e.target.name.value.trim()
    const id = e.target.id.value.trim()
    axios
      .post(`${baseURL}/post`, { name, id })
      .then(res => {
        if (res.data) this.setState({ added: true })
      })
      .catch(err => {
        console.log(err)
      })
    console.log('handle')
  }

  render () {
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
            <div className='form-group'>
              <label htmlFor='exampleInputName'>Name</label>
              <input
                type='text'
                className='form-control'
                id='exampleInputName'
                placeholder='Enter name'
                name='name'
              />
              <small id='emailHelp' className='form-text text-muted'>
                Name will be added to the database
              </small>
            </div>

            <button type='submit' className='btn btn-primary'>
              Submit
            </button>

            {this.state.added && <h4>Data posted successfully</h4>}
          </fieldset>
        </form>
      </Layout>
    )
  }
}

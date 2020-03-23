import Layout from '../components/Layout'

export default () => {
  return (
    <Layout>
      <div className='jumbotron container'>
        <h1 className='display-3'>Hello, world!</h1>
        <p className='lead'>
          This is a the home page of the mock application for storing and
          fetching names, developed using nextjs and dropwizard
        </p>
        <hr className='my-4' />
        <p>Use navigation bar to add some names to the database</p>
        <p className='lead'>
          <a className='btn btn-primary btn-lg' href='/list' role='button'>
            Name List
          </a>
        </p>
      </div>
    </Layout>
  )
}

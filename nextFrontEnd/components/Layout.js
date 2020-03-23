import Navbar from './Navbar'
import Head from 'next/head'
import '../static/bootstrap.min.css'

const Layout = props => (
  <div>
    <Head>
      <title>DropNextMock</title>
    </Head>
    <Navbar />
    {props.children}
  </div>
)

export default Layout

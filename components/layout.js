import { Fragment } from 'react';
import Header from '../components/header';

const Layout = (props) => (
  <Fragment>
    <div>
      <Header />
      {props.children}
    </div>
    <style jsx>{`
      div {
      margin: 20px;
      padding: 20px;
      border: 1px solid #DDD;  
      }
    `}</style>
  </Fragment>
)

export default Layout;

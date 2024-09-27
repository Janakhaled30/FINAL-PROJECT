import React from 'react';
import {
  MDBFooter,
} from 'mdb-react-ui-kit';
import './footer.css';


export default function App() {
  return (
    <MDBFooter bgColor='primary' className='text-white text-center text-lg-left'>
      <div className='text-center p-3' style={{ backgroundColor: ' #183661' }}>
        &copy; {new Date().getFullYear()} Copyright:{' '}
        <a className='text-white' href='https://mdbootstrap.com/'>
          MDBootstrap.com
        </a>
      </div>
    </MDBFooter>
  );
}
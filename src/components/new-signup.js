import React from 'react';
import { MDBBtn, MDBContainer, MDBCard, MDBCardBody, MDBCol, MDBRow, MDBInput, MDBCheckbox, MDBIcon } from 'mdb-react-ui-kit';

function App() {
  return React.createElement(
    MDBContainer,
    { fluid: true },
    React.createElement('div', { className: 'p-5 bg-image', style: { backgroundImage: 'url(https://mdbootstrap.com/img/new/textures/full/171.jpg)', height: '300px' } }),
    React.createElement(
      MDBCard,
      { className: 'mx-5 mb-5 p-5 shadow-5', style: { marginTop: '-100px', background: 'hsla(0, 0%, 100%, 0.8)', backdropFilter: 'blur(30px)' } },
      React.createElement(
        MDBCardBody,
        { className: 'p-5 text-center' },
        React.createElement(
          'h2',
          { className: 'fw-bold mb-5' },
          'Sign up now'
        ),
        React.createElement(
          MDBRow,
          null,
          React.createElement(
            MDBCol,
            { col: '6' },
            React.createElement(MDBInput, { wrapperClass: 'mb-4', label: 'First name', id: 'form1', type: 'text' })
          ),
          React.createElement(
            MDBCol,
            { col: '6' },
            React.createElement(MDBInput, { wrapperClass: 'mb-4', label: 'Last name', id: 'form1', type: 'text' })
          )
        ),
        React.createElement(MDBInput, { wrapperClass: 'mb-4', label: 'Email', id: 'form1', type: 'email' }),
        React.createElement(
          MDBRow,
          null,
          React.createElement(
            MDBCol,
            { col: '6' },
            React.createElement(MDBInput, { wrapperClass: 'mb-4', label: 'Password', id: 'form1', type: 'password' })
          ),
          React.createElement(
            MDBCol,
            { col: '6' },
            React.createElement(MDBInput, { wrapperClass: 'mb-4', label: 'Retype Password', id: 'form1', type: 'password' })
          )
        ),
        React.createElement(
          'div',
          { className: 'd-flex justify-content-center mb-4' },
          React.createElement(MDBCheckbox, { name: 'flexCheck', value: '', id: 'flexCheckDefault', label: 'Subscribe to our newsletter' })
        ),
        React.createElement(
          MDBBtn,
          { className: 'w-100 mb-4', size: 'md' },
          'sign up'
        ),
        React.createElement(
          'div',
          { className: 'text-center' },
          React.createElement(
            'p',
            null,
            'or sign up with:'
          ),
          React.createElement(
            MDBBtn,
            { tag: 'a', color: 'none', className: 'mx-3', style: { color: '#1266f1' } },
            React.createElement(MDBIcon, { fab: true, icon: 'facebook-f', size: 'sm' })
          ),
          React.createElement(
            MDBBtn,
            { tag: 'a', color: 'none', className: 'mx-3', style: { color: '#1266f1' } },
            React.createElement(MDBIcon, { fab: true, icon: 'twitter', size: 'sm' })
          ),
          React.createElement(
            MDBBtn,
            { tag: 'a', color: 'none', className: 'mx-3', style: { color: '#1266f1' } },
            React.createElement(MDBIcon, { fab: true, icon: 'google', size: 'sm' })
          ),
          React.createElement(
            MDBBtn,
            { tag: 'a', color: 'none', className: 'mx-3', style: { color: '#1266f1' } },
            React.createElement(MDBIcon, { fab: true, icon: 'github', size: 'sm' })
          )
        )
      )
    )
  );
}

export default App;


import React from 'react';

class Logo extends React.PureComponent {
  render() {
    return (
      <img
        src='/images/logo.png'
        alt='Logo'
        className='logo-img'
        style={{
          height: '100px',
          width: 'auto',
          objectFit: 'contain'
        }}
      />
    );
  }
}

export default Logo;

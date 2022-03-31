import React from 'react';

const Map = () => {
  return (
    <div
      className='mapouter'
      style={{
        position: 'relative',
        textAlign: 'right',
        height: '300px',
        width: '500px',
      }}
    >
      <div
        className='gmap_canvas'
        style={{
          overflow: 'hidden',
          background: 'none !important',
          height: '300px',
          width: '500px',
        }}
      >
        <iframe
          width='500'
          height='300'
          id='gmap_canvas'
          src='https://maps.google.com/maps?q=Main%20foods%20-%20Casa%20Shopping,%20Bloco%20P%20-%20Pav%200&t=&z=15&ie=UTF8&iwloc=&output=embed'
          frameBorder='0'
          scrolling='no'
          marginHeight={0}
          marginWidth={0}
        ></iframe>
      </div>
    </div>
  );
};

export default Map;

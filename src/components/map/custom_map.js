import React from 'react';

import { Map, YMaps, FullscreenControl, GeolocationControl, ZoomControl } from 'react-yandex-maps';

import './map.css';

const CustomMap = () => {
  return (
    <YMaps>
      <Map width={'100%'} height={'420px'} defaultState={{ center: [53.926373, 27.517196], zoom: 14 }}>
        <FullscreenControl />
        <GeolocationControl options={{ float: 'left' }} />
        <ZoomControl options={{ float: 'right' }} />
      </Map>
    </YMaps>
  )
};

export default CustomMap;
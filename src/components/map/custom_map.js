import React from 'react';

import { Map, YMaps, FullscreenControl, GeolocationControl, ZoomControl } from 'react-yandex-maps';

import './map.css';

const DEFAULT_CLASSNAME = 'custom-map';

const CustomMap = () => {
  return (
    <div className={DEFAULT_CLASSNAME}>
      <div className={`${DEFAULT_CLASSNAME}_title`}>
        <span>{'Приезжайте к нам!'}</span> <br />
        <span>{'Мы находимся в минске: ТЦ "Замок", проспект Победителей 65 - 1 этаж'}</span>
      </div>
      <YMaps>
        <Map width={'100%'} height={'480px'} defaultState={{ center: [53.926373, 27.517196], zoom: 15 }}>
          <FullscreenControl />
          <GeolocationControl options={{ float: 'left' }} />
          <ZoomControl options={{ float: 'right' }} />
        </Map>
      </YMaps>
    </div>
  )
};

export default CustomMap;
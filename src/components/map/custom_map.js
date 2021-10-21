import React from 'react';

import { Map, YMaps, FullscreenControl, GeolocationControl, ZoomControl } from 'react-yandex-maps';

import './map.css';

const DEFAULT_CLASSNAME = 'custom-map';

const CustomMap = () => {
  return (
    <div className={DEFAULT_CLASSNAME}>
      <span id={DEFAULT_CLASSNAME} />
      <div className={`${DEFAULT_CLASSNAME}_title`}>
        <span>{'Приезжайте к нам!'}</span> <br />
        <span>{'Мы находимся в минске: ТЦ "Импульс", ул. Веры Хоружей 2, этаж 1, пав 25'}</span>
      </div>
      <YMaps>
        <Map width={'100%'} height={'480px'} defaultState={{ center: [53.908678, 27.433499], zoom: 16 }}>
          <FullscreenControl />
          <GeolocationControl options={{ float: 'left' }} />
          <ZoomControl options={{ float: 'right' }} />
        </Map>
      </YMaps>
    </div>
  )
};

export default CustomMap;
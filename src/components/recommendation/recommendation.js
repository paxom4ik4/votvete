import React from 'react';

import './recommendation.css';

import case_28 from "../../assets/cases/case28.png";
import case_63 from "../../assets/cases/case63.png";

const DEFAULT_CLASSNAME = 'recommendation';

const Recommendation = () => {
  return (
    <div className={DEFAULT_CLASSNAME}>
      <span id={DEFAULT_CLASSNAME} />
      <div className={`${DEFAULT_CLASSNAME}_wrapper`}>
        <span className={`${DEFAULT_CLASSNAME}_title`}>{"Мы рекоммендуем к покупке"}</span>
        <div className={`${DEFAULT_CLASSNAME}_items`}>
          <div className={`${DEFAULT_CLASSNAME}_item`}>
            <div className={`${DEFAULT_CLASSNAME}_item-content`}>
              <img className={`${DEFAULT_CLASSNAME}_item-img`} src={case_28} alt={'O-like Case'} />
              <div className={`${DEFAULT_CLASSNAME}_item-description`}>
                <span className={`${DEFAULT_CLASSNAME}_item-title`}>{'Противоударные чехлы O-Like'}</span>
                <ul>
                  <li>{'Из ударопрочного пластика'}</li>
                  <li>{'Soft touch покрытие'}</li>
                  <li>{'Силиконовые бортики'}</li>
                  <li>{'Выступает над дисплеем и хорошо защищает при падении'}</li>
                  <li>{'Практичный и приятный ощупь'}</li>
                </ul>
              </div>
            </div>
          </div>
          <div className={`${DEFAULT_CLASSNAME}_item`}>
            <div className={`${DEFAULT_CLASSNAME}_item-content`}>
              <img className={`${DEFAULT_CLASSNAME}_item-img`} src={case_63} alt={'Silicon Case'}/>
              <div className={`${DEFAULT_CLASSNAME}_item-description`}>
                <span className={`${DEFAULT_CLASSNAME}_item-title`}>{'Silicone Case'}</span>
                <ul>
                  <li>{'Логотип напечатан и не стирается'}</li>
                  <li>{'Кнопки и ободок камеры в цвет логотипа'}</li>
                  <li>{'Пластиковый контур для защиты камеры выступает наружу'}</li>
                  <li>{'Незаметны швы по боковой части'}</li>
                  <li>{'Полноценно рабочее кольцо MagSafe'}</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Recommendation;
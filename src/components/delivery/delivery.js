import React from 'react';

import './delivery.css';

const DEFAULT_CLASSNAME = 'delivery';

const Delivery = () => {
  return (
    <div className={DEFAULT_CLASSNAME}>
      <span id={DEFAULT_CLASSNAME} />
      <div className={`${DEFAULT_CLASSNAME}_wrapper`}>
        <div className={`${DEFAULT_CLASSNAME}_title`}>
          {'Доставка и Возврат товара'}
        </div>
        <div className={`${DEFAULT_CLASSNAME}_content`}>
          <div>
            <span>{'Политика доставки'}</span>
            <span>{'С учетом пожеланий многочисленных клиентов, теперь в нашем магазине можно купить аксессуары для мобильных телефонов и планшетов с доставкой в любое удобное для Вас место. Теперь экипировать Ваше устройство самым необходимым и новейшим из мира аксессуаров стало намного доступней, чем прежде. Просто следите за нашим каталогом товаров и выбирайте, то, что Вам необходимо, а при возникновении вопросов можете консультироваться по указанным на сайте телефонам.'}</span>
            <span>{'Наши курьеры доставят любой товар (минимальная сумма заказа 10 рублей), по Минску. В случае если клиенту по каким-либо причинам не подойдет заказанный товар, от него всегда можно отказаться, оплатив лишь вызов курьера (на сегодняшний день это 5,00 руб.).'}</span>
            <span>{'Доставка осуществляется ежедневно по времени с 15 до 23.'}</span>
            <span>{'БЕСПЛАТНО - при единовременном заказе на сумму 20,00 руб. и выше! Спасибо за понимание)\n' +
            '\n' +
            '*Обращаем Ваше внимание расчет у курьера производится Наличными. \n' +
            '\n' +
            '*Важно! Если Вы заказали товар курьером и он по каким-либо причинам не подошел, или не устраивает, то вернуть и обменять его можно только в пункте самовывоза по адресу ул. Притыцкого, 156 в ТЦ "Green City" сохранив все свойства упаковки и чеки!'}</span>
          </div>
          <div className={`${DEFAULT_CLASSNAME}_return`}>
            <span>{'Политика возврата и обмена'}</span>
            <span>{'Иногда после покупки качественного товара у вас может возникнуть желание вернуть его либо обменять на другой. Сделать это можно лишь при соблюдении определенных условий <*>. Рассмотрим их.'}</span>
            <span>{'Какой товар можно вернуть или обменять.'
            +
            'Если товар надлежащего качества, то вернуть или обменять его вы можете,только если он:'}
              {<ul>
                <li>{'относится к непродовольственным. Не подлежат обмену и возврату пищевые продукты надлежащего качества <*>'}</li>
                <li>{'не был в употреблении'}</li>
                <li>{'сохранил свои потребительские свойства'}</li>
                <li>{'не включен в перечень непродовольственных товаров надлежащего качества, не подлежащих обмену и возврату.'}</li>
              </ul>}
              {'Ряд товаров можно вернуть, если они упакованы в герметичную (вакуумную) потребительскую упаковку, а также в потребительскую упаковку, обеспечивающую возможность установить, что товар не был в употреблении.'}</span>
            <span>{'При самовывозе скидка 5 %'}</span>
            <span>{'VOTVETE.CASE – дарим сервис который раньше Вы не знали. Приятных покупок!'}</span>
          </div>
        </div>
      </div>
    </div>
  )
};

export default Delivery;
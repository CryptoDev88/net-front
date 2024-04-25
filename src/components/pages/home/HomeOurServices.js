import { useNavigate } from 'react-router-dom'

import {
  ImageDivSpanStyle1,
  ImageDivSpanSpanStyle1,
  ImageDivSpanSpanImgStyle2,
  ImageDivSpanImgStyle3
} from '../../BaseCss'

function OurServices () {
  const navigate = useNavigate()

  return (
    <div id='ourServices' className='ourServices_container__TwbCB'>
      <div className='ourServices_ourServices__GkytU'>
        <div className='title_titleContainer__SvQXY'>
          <div className='title_title__mdTgq'>
            <span className='title_title__mdTgq'>Our Services</span>
          </div>
        </div>
        <div className='ourServices_cards___k6BU'>
          <div
            className='ourServices_cardBoxContainer__3tq50'
            onClick={() => navigate('/blockchain')}
          >
            <div className='ourServices_cardBoxBackground__rJMYW'></div>
            <div className='ourServices_cardBoxBackgroundSecond__YKyvj'></div>
            <div className='ourServices_cardBox___rV3M'>
              <div className='card_cardParts__qx2u_'>
                <span style={ImageDivSpanStyle1}>
                  <span style={ImageDivSpanSpanStyle1}>
                    <img
                      alt=''
                      aria-hidden='true'
                      src='data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%27135%27%20height=%27135%27/%3e'
                      style={ImageDivSpanSpanImgStyle2}
                      data-xblocker='passed'
                    />
                  </span>
                  <img
                    alt='/icons/ourServiceBlockchain.svg'
                    draggable='false'
                    src='https://ik.imagekit.io/2zlgs27bjo/public/icons/ourServiceBlockchain.svg?tr=w-135,q-100'
                    decoding='async'
                    data-nimg='intrinsic'
                    style={ImageDivSpanImgStyle3}
                    data-xblocker='passed'
                    srcSet='https://ik.imagekit.io/2zlgs27bjo/public/icons/ourServiceBlockchain.svg?tr=w-135,q-100 1x, https://ik.imagekit.io/2zlgs27bjo/public/icons/ourServiceBlockchain.svg?tr=w-135,q-100 2x'
                  />
                  <noscript></noscript>
                </span>
              </div>
              <div className='card_cardParts__qx2u_'>
                <div className='card_title__Xc4qd'>Blockchain Development</div>
              </div>
              <div className='card_cardParts__qx2u_'>
                <div className='card_description__GDj3k'></div>
              </div>
            </div>
          </div>
          <div
            className='ourServices_cardBoxContainer__3tq50'
            onClick={() => navigate('/software')}
          >
            <div className='ourServices_cardBoxBackground__rJMYW'></div>
            <div className='ourServices_cardBoxBackgroundSecond__YKyvj'></div>
            <div className='ourServices_cardBox___rV3M'>
              <div className='card_cardParts__qx2u_'>
                <span style={ImageDivSpanStyle1}>
                  <span style={ImageDivSpanSpanStyle1}>
                    <img
                      alt=''
                      aria-hidden='true'
                      src='data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%27135%27%20height=%27135%27/%3e'
                      style={ImageDivSpanSpanImgStyle2}
                      data-xblocker='passed'
                    />
                  </span>
                  <img
                    alt='/icons/ourServiceSoftware.svg'
                    draggable='false'
                    src='https://ik.imagekit.io/2zlgs27bjo/public/icons/ourServiceSoftware.svg?tr=w-135,q-100'
                    decoding='async'
                    data-nimg='intrinsic'
                    style={ImageDivSpanImgStyle3}
                    data-xblocker='passed'
                    srcSet='https://ik.imagekit.io/2zlgs27bjo/public/icons/ourServiceSoftware.svg?tr=w-135,q-100 1x, https://ik.imagekit.io/2zlgs27bjo/public/icons/ourServiceSoftware.svg?tr=w-135,q-100 2x'
                  />
                  <noscript></noscript>
                </span>
              </div>
              <div className='card_cardParts__qx2u_'>
                <div className='card_title__Xc4qd'>Software Development</div>
              </div>
              <div className='card_cardParts__qx2u_'>
                <div className='card_description__GDj3k'></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default OurServices

import { useTheme } from '@mui/system'

import {
  ImageDivSpanStyle1,
  ImageDivSpanSpanStyle1,
  ImageDivSpanSpanImgStyle2,
  ImageDivSpanImgStyle3
} from '../../BaseCss'

function SoftwareIntro () {
  const theme = useTheme()

  return (
    <section className='softwareIntro_container__SURGq'>
      <meta charSet='utf-8' />
      <section
        className={
          theme.palette.mode === 'dark'
            ? 'intro_homeContainer__qS2AB intro_homeContainerDark__TJhud'
            : 'intro_homeContainer__qS2AB'
        }
      >
        <div className='intro_inner__R0SPf'>
          <div className='intro_homeInner__jCkNC'>
            <div className='intro_innerContent__C7WO7'>
              <div className='subTitleText_subTitle__2anJB intro_title__EkY6Y'>
                <h1
                  className={
                    theme.palette.mode === 'dark'
                      ? 'subTitleText_subTitleText__bQxEn subTitleText_subTitleTextFont50px__VYyHa subTitleText_subTitleTextColor--font-color__AYsIE'
                      : 'subTitleText_subTitleText__bQxEn subTitleText_subTitleTextFont50px__VYyHa undefined'
                  }
                >
                  Software Development
                </h1>
              </div>
              <div
                className='subTitleText_description__WoiQ_ title-text-color'
                style={{ maxWidth: '688px' }}
              >
                Solicy offers reliable and scalable software solutions for any
                operating system, browser, and device. Solicy works with you to
                discover exactly which features and specifications your custom
                software requires. We design our products to meet the unique
                needs and wants of each user and each stakeholder. We create
                comprehensive, unique software solutions that develop and change
                your business.
              </div>
            </div>
            <div className='intro_introImage__7PEEi'>
              <span style={ImageDivSpanStyle1}>
                <span style={ImageDivSpanSpanStyle1}>
                  <img
                    alt=''
                    aria-hidden='true'
                    src='data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%27570%27%20height=%27390%27/%3e'
                    style={ImageDivSpanSpanImgStyle2}
                    data-xblocker='passed'
                  />
                </span>
                <img
                  alt='/icons/softwareDark.svg'
                  draggable='false'
                  srcSet='https://ik.imagekit.io/2zlgs27bjo/public/icons/softwareDark.svg?tr=w-570,q-100 1x, https://ik.imagekit.io/2zlgs27bjo/public/icons/softwareDark.svg?tr=w-570,q-100 2x'
                  src='https://ik.imagekit.io/2zlgs27bjo/public/icons/softwareDark.svg?tr=w-570,q-100'
                  decoding='async'
                  data-nimg='intrinsic'
                  style={ImageDivSpanImgStyle3}
                  data-xblocker='passed'
                />
              </span>
            </div>
          </div>
        </div>
      </section>
    </section>
  )
}

export default SoftwareIntro

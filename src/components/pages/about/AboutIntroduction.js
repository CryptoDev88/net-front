import { useTheme } from '@mui/system'
import {
  ImageDivSpanStyle1,
  ImageDivSpanSpanStyle1,
  ImageDivSpanSpanImgStyle2,
  ImageDivSpanImgStyle3
} from '../../BaseCss'

function AboutIntroduction () {
  const theme = useTheme()

  return (
    <div
      className={
        theme.palette.mode === 'light'
          ? 'intro_about__yb88l false'
          : 'intro_about__yb88l intro_aboutDark__874kx'
      }
    >
      <meta charSet='utf-8' />
      <section
        className={
          theme.palette.mode === 'light'
            ? 'intro_homeContainer__qS2AB'
            : 'intro_homeContainer__qS2AB intro_homeContainerDark__TJhud'
        }
      >
        <div className='intro_inner__R0SPf'>
          <div className='intro_homeInner__jCkNC'>
            <div className='intro_innerContent__C7WO7'>
              <div className='subTitleText_subTitle__2anJB intro_title__EkY6Y subTitleText_about__Gga7C'>
                <h1
                  className={
                    theme.palette.mode === 'light'
                      ? 'subTitleText_subTitleText__bQxEn subTitleText_subTitleTextFont50px__VYyHa undefined'
                      : 'subTitleText_subTitleText__bQxEn subTitleText_subTitleTextFont50px__VYyHa subTitleText_subTitleTextColor--font-color__AYsIE'
                  }
                >
                  About Us
                </h1>
              </div>
              <div
                className='subTitleText_description__WoiQ_ title-text-color'
                style={{ maxWidth: '746px' }}
              >
                Solicy is a fast-growing company providing Blockchain and
                Software solutions to customers all over the world. We have
                built over 100+ trustworthy projects, each magnifying the
                innovation environment. We work collaboratively and offer
                solutions of the highest standards: unmatched customer service
                and expert technical support. We care deeply about the people we
                serve. Nothing gives us greater pride than seeing our clients
                delighted with the work we’ve done.
              </div>
            </div>
            <div className='intro_introImage__7PEEi'>
              <span style={ImageDivSpanStyle1}>
                <span style={ImageDivSpanSpanStyle1}>
                  <img
                    alt=''
                    aria-hidden='true'
                    src='data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%27738%27%20height=%27657%27/%3e'
                    style={ImageDivSpanSpanImgStyle2}
                    data-xblocker='passed'
                  />
                </span>
                <img
                  alt='/icons/aboutIcons/aboutIcon.svg'
                  draggable='false'
                  src='https://ik.imagekit.io/2zlgs27bjo/public/icons/aboutIcons/aboutIcon.svg?tr=w-738,q-100'
                  decoding='async'
                  data-nimg='intrinsic'
                  style={ImageDivSpanImgStyle3}
                  data-xblocker='passed'
                  srcSet='https://ik.imagekit.io/2zlgs27bjo/public/icons/aboutIcons/aboutIcon.svg?tr=w-738,q-100 1x, https://ik.imagekit.io/2zlgs27bjo/public/icons/aboutIcons/aboutIcon.svg?tr=w-738,q-100 2x'
                />
              </span>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default AboutIntroduction

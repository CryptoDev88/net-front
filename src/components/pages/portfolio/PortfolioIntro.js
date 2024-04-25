import { useTheme } from '@mui/system'
import {
  ImageDivSpanStyle1,
  ImageDivSpanSpanStyle1,
  ImageDivSpanSpanImgStyle2,
  ImageDivSpanImgStyle3
} from '../../BaseCss'

function PortfolioIntro () {
  const theme = useTheme()
  return (
    <div
      className={theme.palette.mode === 'dark' ? 'intro_portfolio__m4yAE' : ''}
    >
      <meta charSet='utf-8' />
      <section
        className={
          theme.palette.mode === 'dark'
            ? 'intro_homeContainer__qS2AB intro_homeContainerDark__TJhud'
            : 'intro_homeContainer__qS2AB'
        }
        style={{ backgroundColor: 'var(--primary-color-white-mod)' }}
      >
        <div className='intro_inner__R0SPf'>
          <div className='intro_homeInner__jCkNC' style={{ columnGap: '45px' }}>
            <div className='intro_innerContent__C7WO7'>
              <div className='subTitleText_subTitle__2anJB intro_title__EkY6Y'>
                <h1
                  className={
                    theme.palette.mode === 'dark'
                      ? 'subTitleText_subTitleText__bQxEn subTitleText_subTitleTextFont50px__VYyHa subTitleText_subTitleTextColor--font-color__AYsIE'
                      : 'subTitleText_subTitleText__bQxEn subTitleText_subTitleTextFont50px__VYyHa subTitleText_subTitleTextColor--font-color__AYsIE'
                  }
                >
                  Portfolio
                </h1>
              </div>
              <div
                className='subTitleText_description__WoiQ_ title-text-color'
                style={{ maxWidth: '762px' }}
              >
                We prioritize the needs of our clients and offer sustainable,
                transparent, and highly effective collaboration prospects. Let’s
                explore our portfolio for a closer look.
              </div>
            </div>
            <div className='intro_introImage__7PEEi'>
              <span style={ImageDivSpanStyle1}>
                <span style={ImageDivSpanSpanStyle1}>
                  <img
                    alt=''
                    aria-hidden='true'
                    src='data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%27503%27%20height=%27421%27/%3e'
                    style={ImageDivSpanSpanImgStyle2}
                    data-xblocker='passed'
                  />
                </span>
                {theme.palette.mode === 'dark' ? (
                  <img
                    alt='/icons/portfolioDark.svg'
                    draggable='false'
                    srcSet='https://ik.imagekit.io/2zlgs27bjo/public/icons/portfolioDark.svg?tr=w-503,q-100 1x, https://ik.imagekit.io/2zlgs27bjo/public/icons/portfolioDark.svg?tr=w-503,q-100 2x'
                    src='https://ik.imagekit.io/2zlgs27bjo/public/icons/portfolioDark.svg?tr=w-503,q-100'
                    decoding='async'
                    data-nimg='intrinsic'
                    style={ImageDivSpanImgStyle3}
                    data-xblocker='passed'
                  />
                ) : (
                  <img
                    alt='/icons/portfolio.svg'
                    draggable='false'
                    src='https://ik.imagekit.io/2zlgs27bjo/public/icons/portfolio.svg?tr=w-503,q-100'
                    decoding='async'
                    data-nimg='intrinsic'
                    style={ImageDivSpanImgStyle3}
                    data-xblocker='passed'
                    srcSet='https://ik.imagekit.io/2zlgs27bjo/public/icons/portfolio.svg?tr=w-503,q-100 1x, https://ik.imagekit.io/2zlgs27bjo/public/icons/portfolio.svg?tr=w-503,q-100 2x'
                  />
                )}
              </span>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default PortfolioIntro

import { useTheme } from '@mui/system'
import {
  ImageDivSpanStyle1,
  ImageDivSpanSpanStyle1,
  ImageDivSpanSpanImgStyle2,
  ImageDivSpanImgStyle3
} from '../../BaseCss'

function CareersIntro () {
  const theme = useTheme()

  return (
    <div className={theme.palette.mode === 'dark' ? 'intro_career__4OF6o' : ''}>
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
              <div className='subTitleText_subTitle__2anJB intro_title__EkY6Y'>
                <h1 className='subTitleText_subTitleText__bQxEn subTitleText_subTitleTextFont50px__VYyHa subTitleText_subTitleTextColor--font-color__AYsIE'>
                  Careers
                </h1>
              </div>
              <div
                className='subTitleText_description__WoiQ_ title-text-color'
                style={{ maxWidth: '694px' }}
              >
                Solicy believes in hard work, enthusiasm, and passion. We
                constantly encourage individuals with little or even no
                experience to join our adventure. As a result of their
                dedication and ambition, many starting professionals have grown
                into full-scale experts at Solicy.
                <br />
                <br />
                It’s time for you to join the exciting roller-coaster of
                career-building. By joining our big family you’ll enter the
                Blockchain and Software world, and essentially become a part of
                Solicy family.
              </div>
            </div>
            <div className='intro_introImage__7PEEi'>
              <span style={ImageDivSpanStyle1}>
                <span style={ImageDivSpanSpanStyle1}>
                  <img
                    alt=''
                    aria-hidden='true'
                    src='data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%27308%27%20height=%27483%27/%3e'
                    style={ImageDivSpanSpanImgStyle2}
                    data-xblocker='passed'
                  />
                </span>
                {theme.palette.mode === 'dark' ? (
                  <img
                    alt='/dark/darkFrame.svg'
                    draggable='false'
                    srcSet='https://ik.imagekit.io/2zlgs27bjo/public/image/dark/darkFrame.svg?tr=w-308,q-100 1x, https://ik.imagekit.io/2zlgs27bjo/public/image/dark/darkFrame.svg?tr=w-308,q-100 2x'
                    src='https://ik.imagekit.io/2zlgs27bjo/public/image/dark/darkFrame.svg?tr=w-308,q-100'
                    decoding='async'
                    data-nimg='intrinsic'
                    style={ImageDivSpanImgStyle3}
                    data-xblocker='passed'
                  />
                ) : (
                  <img
                    alt='/Frame.svg'
                    draggable='false'
                    src='https://ik.imagekit.io/2zlgs27bjo/public/image/Frame.svg?tr=w-308,q-100'
                    decoding='async'
                    data-nimg='intrinsic'
                    style={ImageDivSpanImgStyle3}
                    data-xblocker='passed'
                    srcSet='https://ik.imagekit.io/2zlgs27bjo/public/image/Frame.svg?tr=w-308,q-100 1x, https://ik.imagekit.io/2zlgs27bjo/public/image/Frame.svg?tr=w-308,q-100 2x'
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

export default CareersIntro

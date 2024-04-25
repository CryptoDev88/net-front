import { useTheme } from '@mui/system'
import {
  ImageDivSpanStyle1,
  ImageDivSpanSpanStyle1,
  ImageDivSpanSpanImgStyle2,
  ImageDivSpanImgStyle3
} from '../../BaseCss'

function AboutUs () {
  const theme = useTheme()

  return (
    <section
      className={
        theme.palette.mode === 'light'
          ? 'aboutUs_aboutUsContainer__eySot aboutUs_lightBackground__twdoU'
          : 'aboutUs_aboutUsContainer__eySot aboutUs_darkBackground__cdZB9'
      }
    >
      <div className='aboutUs_aboutUsBox__uJEum'>
        <div className='aboutUs_textBox__VgisD aboutUs_textBoxMb__K2CSB'>
          <div className='subTitleText_subTitle__2anJB aboutUs_title__vXzbE'>
            <span className='subTitleText_subTitleText__bQxEn undefined'>
              Excellence Is What We Aim For
            </span>
          </div>
          <div
            className='subTitleText_description__WoiQ_ aboutUs_description__iCjOA'
            style={{ maxWidth: 'none' }}
          ></div>
        </div>
        <div className='aboutUs_imageBox__AOu0g'>
          <span style={ImageDivSpanStyle1}>
            <span style={ImageDivSpanSpanStyle1}>
              <img
                alt=''
                aria-hidden='true'
                src='data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%27570%27%20height=%27400%27/%3e'
                style={ImageDivSpanSpanImgStyle2}
                data-xblocker='passed'
              />
            </span>
            <img
              alt='about'
              draggable='false'
              src='https://ik.imagekit.io/2zlgs27bjo/public/icons/about.svg?tr=w-570,q-100'
              decoding='async'
              data-nimg='intrinsic'
              style={ImageDivSpanImgStyle3}
              data-xblocker='passed'
              srcSet='https://ik.imagekit.io/2zlgs27bjo/public/icons/about.svg?tr=w-570,q-100 1x, https://ik.imagekit.io/2zlgs27bjo/public/icons/about.svg?tr=w-570,q-100 2x'
            />
          </span>
        </div>
        <div className='aboutUs_textBox__VgisD aboutUs_textBoxDs__kWnZV'>
          <div className='subTitleText_subTitle__2anJB aboutUs_title__vXzbE'>
            <span className='subTitleText_subTitleText__bQxEn undefined'>
              Excellence Is What We Aim For
            </span>
          </div>
          <div
            className='subTitleText_description__WoiQ_ aboutUs_description__iCjOA'
            style={{ maxWidth: 'none' }}
          >
            We fiercely climb the growth ladder to generate more value for the
            world. Solicy emphasizes employing the most advanced technologies to
            surpass any expectations our clients might have. To provide the
            highest quality services, we continue to learn, aspire, and achieve
            new professional milestones.
          </div>
        </div>
        <span className='aboutUs_textBox__VgisD aboutUs_textMb__Nn88B'>
          We fiercely climb the growth ladder to generate more value for the
          world. Solicy emphasizes employing the most advanced technologies to
          surpass any expectations our clients might have. To provide the
          highest quality services, we continue to learn, aspire, and achieve
          new professional milestones.
        </span>
      </div>
    </section>
  )
}

export default AboutUs

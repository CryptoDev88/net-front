import { useTheme } from '@mui/system'
import {
  ImageDivSpanStyle1,
  ImageDivSpanSpanStyle1,
  ImageDivSpanSpanImgStyle2,
  ImageDivSpanImgStyle3
} from '../../BaseCss'

function CareersJoinSolicy () {
  const theme = useTheme()

  return (
    <section className='joinSolicy_joinSolicyContainer__IzoCu'>
      <div className='joinSolicy_joinSolicyBox__RtAgD'>
        <p className='joinSolicy_mobileTitle__wVpKw'>Join Solicy!</p>
        <div className='joinSolicy_imageBox__eL5ZX'>
          <span style={ImageDivSpanStyle1}>
            <span style={ImageDivSpanSpanStyle1}>
              <img
                alt=''
                aria-hidden='true'
                src='data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%27800%27%20height=%27500%27/%3e'
                style={ImageDivSpanSpanImgStyle2}
                data-xblocker='passed'
              />
            </span>
            <img
              alt='career'
              draggable='false'
              srcSet='https://ik.imagekit.io/2zlgs27bjo/public/image/illustration-career.svg?tr=w-800,q-100 1x, https://ik.imagekit.io/2zlgs27bjo/public/image/illustration-career.svg?tr=w-800,q-100 2x'
              src='https://ik.imagekit.io/2zlgs27bjo/public/image/illustration-career.svg?tr=w-800,q-100'
              decoding='async'
              data-nimg='intrinsic'
              style={ImageDivSpanImgStyle3}
              data-xblocker='passed'
            />
          </span>
        </div>
        <div className='joinSolicy_textBox__u6cIa'>
          <div className='subTitleText_subTitle__2anJB joinSolicy_title__mNJma subTitleText_font32px__8WslX'>
            <span
              className={
                theme.palette.mode === 'dark'
                  ? 'subTitleText_subTitleText__bQxEn subTitleText_subTitleTextFont32px__KXUEU subTitleText_subTitleTextColor--font-color__AYsIE'
                  : 'subTitleText_subTitleText__bQxEn subTitleText_subTitleTextFont32px__KXUEU undefined'
              }
            >
              Join Solicy!
            </span>
          </div>
          <div
            className='subTitleText_description__WoiQ_ joinSolicy_description__6WBZm joinSolicy_dark__Kp59Z'
            style={{ maxWidth: 'none' }}
          >
            If you want to be part of the future then Solicy is your answer. We
            appreciate the willingness to learn new technologies and are ready
            to help you advance your skills and grow with us. Your talent will
            be noticed and supported by our team, helping you achieve your
            fullest potential.By joining Solicy you’ll enter the Blockchain and
            Crypto world, becoming highly competitive and demanded in the
            market. Become part of our big family and get the opportunity to
            take part in cool blockchain projects, expand your talent and have
            fun.
          </div>
        </div>
      </div>
    </section>
  )
}

export default CareersJoinSolicy

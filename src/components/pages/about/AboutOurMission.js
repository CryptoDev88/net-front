import { useTheme } from '@mui/system'
import {
  ImageDivSpanStyle1,
  ImageDivSpanSpanStyle1,
  ImageDivSpanSpanImgStyle2,
  ImageDivSpanImgStyle3
} from '../../BaseCss'

function OurMission () {
  const theme = useTheme()

  return (
    <section className='ourMission_ourMission__QR0_3'>
      <span className='ourMission_ourMissionTitleMob__UwDuu'>
        <div className='subTitleText_subTitle__2anJB subTitleText_font32px__8WslX'>
          <span
            className={
              theme.palette.mode === 'light'
                ? 'subTitleText_subTitleText__bQxEn subTitleText_subTitleTextFont32px__KXUEU undefined'
                : 'subTitleText_subTitleText__bQxEn subTitleText_subTitleTextFont32px__KXUEU subTitleText_subTitleTextColor--font-color__AYsIE'
            }
          >
            Our Mission
          </span>
        </div>
        <div
          className='subTitleText_description__WoiQ_'
          style={{ maxWidth: 'none' }}
        ></div>
      </span>
      <div className='ourMission_content__tS5y_'>
        <div className='ourMission_rightPart__WH7Xe'>
          <span style={ImageDivSpanStyle1}>
            <span style={ImageDivSpanSpanStyle1}>
              <img
                alt=''
                aria-hidden='true'
                src='data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%27440%27%20height=%27340%27/%3e'
                style={ImageDivSpanSpanImgStyle2}
                data-xblocker='passed'
              />
            </span>
            <img
              alt='ourMission'
              draggable='false'
              src='https://ik.imagekit.io/2zlgs27bjo/public/image/mission.svg?tr=w-440,q-100'
              decoding='async'
              data-nimg='intrinsic'
              style={ImageDivSpanImgStyle3}
              data-xblocker='passed'
              srcSet='https://ik.imagekit.io/2zlgs27bjo/public/image/mission.svg?tr=w-440,q-100 1x, https://ik.imagekit.io/2zlgs27bjo/public/image/mission.svg?tr=w-440,q-100 2x'
            />
          </span>
        </div>
        <div className='ourMission_leftPart__LUTdR'>
          <div>
            <span className='ourMission_ourMissionTitle__H82yz'>
              <div className='subTitleText_subTitle__2anJB subTitleText_font32px__8WslX'>
                <span
                  className={
                    theme.palette.mode === 'light'
                      ? 'subTitleText_subTitleText__bQxEn subTitleText_subTitleTextFont32px__KXUEU undefined'
                      : 'subTitleText_subTitleText__bQxEn subTitleText_subTitleTextFont32px__KXUEU subTitleText_subTitleTextColor--font-color__AYsIE'
                  }
                >
                  Our Mission
                </span>
              </div>
              <div
                className='subTitleText_description__WoiQ_'
                style={{ maxWidth: 'none' }}
              ></div>
            </span>
            <p
              className={
                theme.palette.mode === 'light'
                  ? 'ourMission_paragraph__EhMEJ'
                  : 'ourMission_paragraphDark__USyNs'
              }
            >
              We keep up with innovations and provide a wide range of services
              since the high demand for blockchain development services in the
              market. We grow exponentially, yet preserve the values that have
              driven us from the first day. We aim to inhale the benefits of
              blockchain and software technologies into our client's business
              ambitions.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default OurMission

import { useTheme } from '@mui/system'
import { Link } from 'react-router-dom'

function SeeAbout () {
  const theme = useTheme()

  return (
    <div
      className={
        theme.palette.mode === 'light'
          ? 'about_aboutContainer__Vz4Xr false'
          : 'about_aboutContainer__Vz4Xr about_aboutContainerDark__AFwm1'
      }
    >
      <div className='about_gifBox__pC24z'>
        <span
          style={{
            boxSizing: 'border-box',
            display: 'inline-block',
            overflow: 'hidden',
            width: 'initial',
            height: 'initial',
            background: 'none',
            opacity: 1,
            border: 0,
            margin: 0,
            padding: 0,
            position: 'relative',
            maxWidth: '100%'
          }}
        >
          <span
            style={{
              boxSizing: 'border-box',
              display: 'block',
              width: 'initial',
              height: 'initial',
              background: 'none',
              opacity: 1,
              border: 0,
              margin: 0,
              padding: 0,
              maxWidth: '100%'
            }}
          >
            <img
              alt=''
              aria-hidden='true'
              src='data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%27340%27%20height=%27440%27/%3e'
              style={{
                display: 'block',
                maxWidth: '100%',
                width: 'initial',
                height: 'initial',
                background: 'none',
                opacity: 1,
                border: 0,
                margin: 0,
                padding: 0,
                visibility: 'visible'
              }}
              data-xblocker='passed'
            />
          </span>
          <img
            alt='aboutLogo.svg'
            draggable='false'
            srcSet='https://ik.imagekit.io/2zlgs27bjo/public/icons/aboutLogo.svg?tr=w-340,q-100 1x, https://ik.imagekit.io/2zlgs27bjo/public/icons/aboutLogo.svg?tr=w-340,q-100 2x'
            src='https://ik.imagekit.io/2zlgs27bjo/public/icons/aboutLogo.svg?tr=w-340,q-100'
            decoding='async'
            data-nimg='intrinsic'
            style={{
              position: 'absolute',
              inset: '0px',
              boxSizing: 'border-box',
              padding: 0,
              border: 'none',
              margin: 'auto',
              display: 'block',
              width: 0,
              height: 0,
              minWidth: '100%',
              maxWidth: '100%',
              minHeight: '100%',
              maxHeight: '100%',
              objectFit: 'contain',
              visibility: 'visible'
            }}
            data-xblocker='passed'
          />
        </span>
      </div>
      <div className='about_textBox__P2R7e'>
        <div className='subTitleText_subTitle__2anJB about_title__BVzgD subTitleText_about__Gga7C'>
          <span
            className={
              theme.palette.mode === 'light'
                ? 'subTitleText_subTitleText__bQxEn subTitleText_subTitleTextColor--primary-color-white-mod__H_tOL'
                : 'subTitleText_subTitleText__bQxEn subTitleText_subTitleTextColor--font-color__AYsIE'
            }
          >
            About Solicy
          </span>
        </div>
        <div
          className='subTitleText_description__WoiQ_ about_description__OOdkf'
          style={{ maxWidth: 'none' }}
        >
          Solicy is a fast-growing company providing Blockchain and Software
          solutions to customers from around the globe. Due to the high demand
          for Blockchain development services in the market, we keep up with
          innovations and provide a wide range of services.
        </div>
        <Link to='/about'>
          <button
            type='button'
            className='ant-btn ant-btn-default button_btn__XHL7T about_moreBtn__nJfbm button_light__M4f83 button_direction-row__QRu0d'
          >
            <p>See More</p>
          </button>
        </Link>
      </div>
    </div>
  )
}

export default SeeAbout

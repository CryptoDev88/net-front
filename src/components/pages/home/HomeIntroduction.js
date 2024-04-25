import { useTheme } from '@mui/system'

const animateButton = () => {
  const keyframes = [
    { opacity: 1, offset: 0.3 },
    { opacity: 1, offset: 0.55 },
    { opacity: 0, strokeDashoffset: 4, offset: 1 }
  ]

  const options = {
    duration: 1000,
    iterations: 1,
    easing: 'linear'
  }

  const svgs = document.querySelectorAll(
    '.scheduleCall_sketch-button__xvorv svg'
  )
  for (let i = 0; i < svgs.length; ++i) svgs[i].animate(keyframes, options)
}

const Introduction = ({ scrollToGetInTouch }) => {
  const theme = useTheme()

  return (
    <div
      className={
        theme.palette.mode === 'light'
          ? 'intro_home__Llzom'
          : 'intro_home__Llzom intro_homeDark__fPMo5'
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
              <div className='subTitleText_subTitle__2anJB intro_title__EkY6Y'>
                <h1
                  className={
                    theme.palette.mode === 'light'
                      ? 'subTitleText_subTitleText__bQxEn subTitleText_subTitleTextFont50px__VYyHa subTitleText_subTitleTextColor--primary-color-font___TB5T'
                      : 'subTitleText_subTitleText__bQxEn subTitleText_subTitleTextFont50px__VYyHa subTitleText_subTitleTextColor--font-color__AYsIE'
                  }
                >
                  Fluent in Development
                </h1>
              </div>
              <div
                style={{ maxWidth: '620px' }}
                className='subTitleText_description__WoiQ_ title-text-color'
              >
                We provide flexible and intuitive web3, software, and blockchain
                solutions
              </div>
              <div className='intro_allButtonHome__Vbala'>
                <div className='intro_btnContainer__uxr5D'>
                  <button
                    className={
                      theme.palette.mode === 'light'
                        ? 'scheduleCall_sketch-button__xvorv scheduleCall_sketch-button-light__feimf'
                        : 'scheduleCall_sketch-button__xvorv scheduleCall_sketch-button-dark__zPMlK'
                    }
                    type='button'
                    onClick={scrollToGetInTouch}
                    onMouseOver={() => animateButton()}
                  >
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
                          style={{
                            display: 'block',
                            maxWidth: '100%',
                            width: 'initial',
                            height: 'initial',
                            background: 'none',
                            opacity: 1,
                            border: 0,
                            margin: 0,
                            padding: 0
                          }}
                          alt=''
                          aria-hidden='true'
                          src='data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%2720%27%20height=%2720%27/%3e'
                        />
                      </span>
                      <img
                        alt='/telegram-get.svg'
                        draggable='false'
                        src='https://ik.imagekit.io/2zlgs27bjo/public/icons//telegram-get.svg?tr=w-20,q-100'
                        decoding='async'
                        data-nimg='intrinsic'
                        style={{
                          position: 'absolute',
                          top: 0,
                          left: 0,
                          bottom: 0,
                          right: 0,
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
                          objectFit: 'contain'
                        }}
                        srcSet='https://ik.imagekit.io/2zlgs27bjo/public/icons//telegram-get.svg?tr=w-20,q-100 1x, https://ik.imagekit.io/2zlgs27bjo/public/icons//telegram-get.svg?tr=w-20,q-100 2x'
                      />
                    </span>
                    Get in touch
                    <div
                      id='animationButton'
                      className='scheduleCall_lines__TQ66l'
                    >
                      <div id='groupTop'>
                        <svg viewBox='0 0 133 48'>
                          <rect
                            x='0'
                            y='0'
                            width='100%'
                            height='100%'
                            rx='11'
                            ry='11'
                            pathLength='11'
                          ></rect>
                        </svg>
                        <svg viewBox='0 0 133 48'>
                          <rect
                            x='0'
                            y='0'
                            width='100%'
                            height='100%'
                            rx='11'
                            ry='11'
                            pathLength='11'
                          ></rect>
                        </svg>
                        <svg viewBox='0 0 133 48'>
                          <rect
                            x='0'
                            y='0'
                            width='100%'
                            height='100%'
                            rx='11'
                            ry='11'
                            pathLength='11'
                          ></rect>
                        </svg>
                        <svg viewBox='0 0 133 48'>
                          <rect
                            x='0'
                            y='0'
                            width='100%'
                            height='100%'
                            rx='11'
                            ry='11'
                            pathLength='11'
                          ></rect>
                        </svg>
                      </div>
                      <div id='groupBottom'>
                        <svg viewBox='0 0 133 48'>
                          <rect
                            x='0'
                            y='0'
                            width='100%'
                            height='100%'
                            rx='11'
                            ry='11'
                            pathLength='11'
                          ></rect>
                        </svg>
                        <svg viewBox='0 0 133 48'>
                          <rect
                            x='0'
                            y='0'
                            width='100%'
                            height='100%'
                            rx='11'
                            ry='11'
                            pathLength='11'
                          ></rect>
                        </svg>
                        <svg viewBox='0 0 133 48'>
                          <rect
                            x='0'
                            y='0'
                            width='100%'
                            height='100%'
                            rx='11'
                            ry='11'
                            pathLength='11'
                          ></rect>
                        </svg>
                        <svg viewBox='0 0 133 48'>
                          <rect
                            x='0'
                            y='0'
                            width='100%'
                            height='100%'
                            rx='11'
                            ry='11'
                            pathLength='11'
                          ></rect>
                        </svg>
                      </div>
                    </div>
                  </button>
                  <button
                    type='button'
                    className={
                      theme.palette.mode === 'light'
                        ? 'ant-btn ant-btn-default button_btn__XHL7T intro_rightButton__OMkd5 button_light__M4f83 button_direction-row__QRu0d'
                        : 'ant-btn ant-btn-default button_btn__XHL7T intro_rightButton__OMkd5 button_dark__1020G button_direction-row__QRu0d'
                    }
                    onClick={() =>
                      window.open('https://calendly.com/solicy/30min', '_blank')
                    }
                  >
                    <p>Schedule a call</p>
                    <div className='button_img__BYR55'>
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
                            style={{
                              display: 'block',
                              maxWidth: '100%',
                              width: 'initial',
                              height: 'initial',
                              background: 'none',
                              opacity: 1,
                              border: 0,
                              margin: 0,
                              padding: 0
                            }}
                            alt=''
                            aria-hidden='true'
                            src='data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%2720%27%20height=%2715%27/%3e'
                          />
                        </span>
                        <img
                          alt='call.svg'
                          draggable='false'
                          src='https://ik.imagekit.io/2zlgs27bjo/public/icons/call.svg?tr=w-20,q-100'
                          decoding='async'
                          data-nimg='intrinsic'
                          style={{
                            position: 'absolute',
                            top: 0,
                            left: 0,
                            bottom: 0,
                            right: 0,
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
                            objectFit: 'contain'
                          }}
                          srcSet='https://ik.imagekit.io/2zlgs27bjo/public/icons/call.svg?tr=w-20,q-100 1x, https://ik.imagekit.io/2zlgs27bjo/public/icons/call.svg?tr=w-20,q-100 2x'
                        />
                      </span>
                    </div>
                  </button>
                </div>
              </div>
            </div>
            <div className='intro_introImage__7PEEi'>
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
                    style={{
                      display: 'block',
                      maxWidth: '100%',
                      width: 'initial',
                      height: 'initial',
                      background: 'none',
                      opacity: 1,
                      border: '0px',
                      margin: '0px',
                      padding: '0px',
                      visibility: 'visible'
                    }}
                    alt=''
                    aria-hidden='true'
                    src='data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%27738%27%20height=%27577%27/%3e'
                    data-xblocker='passed'
                  />
                </span>
                <img
                  alt='/icons/home-intro.svg'
                  draggable='false'
                  src='https://ik.imagekit.io/2zlgs27bjo/public/icons/home-intro.svg?tr=w-738,q-100'
                  decoding='async'
                  data-nimg='intrinsic'
                  style={{
                    position: 'absolute',
                    inset: '0px',
                    boxSizing: 'border-box',
                    padding: '0px',
                    border: 'none',
                    margin: 'auto',
                    display: 'block',
                    width: '0px',
                    height: '0px',
                    minWidth: '100%',
                    maxWidth: '100%',
                    minHeight: '100%',
                    maxHeight: '100%',
                    objectFit: 'contain',
                    visibility: 'visible'
                  }}
                  data-xblocker='passed'
                  srcSet='https://ik.imagekit.io/2zlgs27bjo/public/icons/home-intro.svg?tr=w-738,q-100 1x, https://ik.imagekit.io/2zlgs27bjo/public/icons/home-intro.svg?tr=w-738,q-100 2x'
                />
              </span>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Introduction

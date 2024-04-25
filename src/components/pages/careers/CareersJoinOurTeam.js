import { useTheme } from '@mui/system'
import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { ISSInfo, PHPInfo, ISDInfo, SDInfo } from './CareersJoinOurTeamInfo'

import {
  ImageDivSpanStyle1,
  ImageDivSpanSpanStyle1,
  ImageDivSpanSpanImgStyle1,
  ImageDivSpanImgStyle2
} from '../../BaseCss'

function CareersJoinOurTeam () {
  const theme = useTheme()
  const [ISSHover, setISSHover] = useState(false)
  const [PHPHover, setPHPHover] = useState(false)
  const [ISDHover, setISDHover] = useState(false)
  const [SDHover, setSDHover] = useState(false)

  const navigate = useNavigate()

  useEffect(() => {
    const iconPath = {
      ISS: {
        lightSrc:
          'https://ik.imagekit.io/2zlgs27bjo/public/image/sales-specialist.svg?tr=w-70,q-100',
        lightSrcSet:
          'https://ik.imagekit.io/2zlgs27bjo/public/image/sales-specialist.svg?tr=w-70,q-100 1x, https://ik.imagekit.io/2zlgs27bjo/public/image/sales-specialist.svg?tr=w-70,q-100 2x',
        darkSrc:
          'https://ik.imagekit.io/2zlgs27bjo/public/image/sales-specialist-dark.svg?tr=w-70,q-100',
        darkSrcSet:
          'https://ik.imagekit.io/2zlgs27bjo/public/image/sales-specialist-dark.svg?tr=w-70,q-100 1x, https://ik.imagekit.io/2zlgs27bjo/public/image/sales-specialist-dark.svg?tr=w-70,q-100 2x'
      },
      PHP: {
        lightSrc:
          'https://ik.imagekit.io/2zlgs27bjo/public/image/php-developer.svg?tr=w-70,q-100',
        lightSrcSet:
          'https://ik.imagekit.io/2zlgs27bjo/public/image/php-developer.svg?tr=w-70,q-100 1x, https://ik.imagekit.io/2zlgs27bjo/public/image/php-developer.svg?tr=w-70,q-100 2x',
        darkSrc:
          'https://ik.imagekit.io/2zlgs27bjo/public/image/php-developer-dark.svg?tr=w-70,q-100',
        darkSrcSet:
          'https://ik.imagekit.io/2zlgs27bjo/public/image/php-developer-dark.svg?tr=w-70,q-100 1x, https://ik.imagekit.io/2zlgs27bjo/public/image/php-developer-dark.svg?tr=w-70,q-100 2x'
      },
      ISD: {
        lightSrc:
          'https://ik.imagekit.io/2zlgs27bjo/public/image/intern-software-developer.svg?tr=w-70,q-100',
        lightSrcSet:
          'https://ik.imagekit.io/2zlgs27bjo/public/image/intern-software-developer.svg?tr=w-70,q-100 1x, https://ik.imagekit.io/2zlgs27bjo/public/image/intern-software-developer.svg?tr=w-70,q-100 2x',
        darkSrc:
          'https://ik.imagekit.io/2zlgs27bjo/public/image/intern-software-developer-dark.svg?tr=w-70,q-100',
        darkSrcSet:
          'https://ik.imagekit.io/2zlgs27bjo/public/image/intern-software-developer-dark.svg?tr=w-70,q-100 1x, https://ik.imagekit.io/2zlgs27bjo/public/image/intern-software-developer-dark.svg?tr=w-70,q-100 2x'
      },
      SD: {
        lightSrc:
          'https://ik.imagekit.io/2zlgs27bjo/public/image/solidity-developer.svg?tr=w-70,q-100',
        lightSrcSet:
          'https://ik.imagekit.io/2zlgs27bjo/public/image/solidity-developer.svg?tr=w-70,q-100 1x, https://ik.imagekit.io/2zlgs27bjo/public/image/solidity-developer.svg?tr=w-70,q-100 2x',
        darkSrc:
          'https://ik.imagekit.io/2zlgs27bjo/public/image/solidity-developer-dark.svg?tr=w-70,q-100',
        darkSrcSet:
          'https://ik.imagekit.io/2zlgs27bjo/public/image/solidity-developer-dark.svg?tr=w-70,q-100 1x, https://ik.imagekit.io/2zlgs27bjo/public/image/solidity-developer-dark.svg?tr=w-70,q-100 2x'
      }
    }

    let ISSImage = document.getElementById('ISSImage')
    let PHPImage = document.getElementById('PHPImage')
    let ISDImage = document.getElementById('ISDImage')
    let SDImage = document.getElementById('SDImage')
    let ISSImageMobile = document.getElementById('ISSImageMobile')
    let PHPImageMobile = document.getElementById('PHPImageMobile')
    let ISDImageMobile = document.getElementById('ISDImageMobile')
    let SDImageMobile = document.getElementById('SDImageMobile')
    if (ISSImage) {
      if (ISSHover === true) {
        ISSImage.setAttribute('srcset', iconPath.ISS.darkSrcSet)
        ISSImage.setAttribute('src', iconPath.ISS.darkSrc)
      } else {
        ISSImage.setAttribute('srcset', iconPath.ISS.lightSrcSet)
        ISSImage.setAttribute('src', iconPath.ISS.lightSrc)
      }
    }

    if (PHPImage) {
      if (PHPHover === true) {
        PHPImage.setAttribute('srcset', iconPath.PHP.darkSrcSet)
        PHPImage.setAttribute('src', iconPath.PHP.darkSrc)
      } else {
        PHPImage.setAttribute('srcset', iconPath.PHP.lightSrcSet)
        PHPImage.setAttribute('src', iconPath.PHP.lightSrc)
      }
    }

    if (ISDImage) {
      if (ISDHover === true) {
        ISDImage.setAttribute('srcset', iconPath.ISD.darkSrcSet)
        ISDImage.setAttribute('src', iconPath.ISD.darkSrc)
      } else {
        ISDImage.setAttribute('srcset', iconPath.ISD.lightSrcSet)
        ISDImage.setAttribute('src', iconPath.ISD.lightSrc)
      }
    }

    if (SDImage) {
      if (SDHover === true) {
        SDImage.setAttribute('srcset', iconPath.SD.darkSrcSet)
        SDImage.setAttribute('src', iconPath.SD.darkSrc)
      } else {
        SDImage.setAttribute('srcset', iconPath.SD.lightSrcSet)
        SDImage.setAttribute('src', iconPath.SD.lightSrc)
      }
    }

    if (ISSImageMobile) {
      if (ISSHover === true) {
        ISSImageMobile.setAttribute('srcset', iconPath.ISS.darkSrcSet)
        ISSImageMobile.setAttribute('src', iconPath.ISS.darkSrc)
      } else {
        ISSImageMobile.setAttribute('srcset', iconPath.ISS.lightSrcSet)
        ISSImageMobile.setAttribute('src', iconPath.ISS.lightSrc)
      }
    }

    if (PHPImageMobile) {
      if (PHPHover === true) {
        PHPImageMobile.setAttribute('srcset', iconPath.PHP.darkSrcSet)
        PHPImageMobile.setAttribute('src', iconPath.PHP.darkSrc)
      } else {
        PHPImageMobile.setAttribute('srcset', iconPath.PHP.lightSrcSet)
        PHPImageMobile.setAttribute('src', iconPath.PHP.lightSrc)
      }
    }

    if (ISDImageMobile) {
      if (ISDHover === true) {
        ISDImageMobile.setAttribute('srcset', iconPath.ISD.darkSrcSet)
        ISDImageMobile.setAttribute('src', iconPath.ISD.darkSrc)
      } else {
        ISDImageMobile.setAttribute('srcset', iconPath.ISD.lightSrcSet)
        ISDImageMobile.setAttribute('src', iconPath.ISD.lightSrc)
      }
    }

    if (SDImageMobile) {
      if (SDHover === true) {
        SDImageMobile.setAttribute('srcset', iconPath.SD.darkSrcSet)
        SDImageMobile.setAttribute('src', iconPath.SD.darkSrc)
      } else {
        SDImageMobile.setAttribute('srcset', iconPath.SD.lightSrcSet)
        SDImageMobile.setAttribute('src', iconPath.SD.lightSrc)
      }
    }
  }, [ISSHover, PHPHover, ISDHover, SDHover])

  return (
    <section className='joinOurTeam_ourTeamContainer__dn_rU'>
      <div className='joinOurTeam_inner__W5fcg'>
        <div className='joinOurTeam_ourTeamInner__Sih93'>
          <div className='title_titleContainer__SvQXY'>
            <div
              className={
                theme.palette.mode === 'dark'
                  ? 'title_title__mdTgq title_titleDark__uzlqO'
                  : 'title_title__mdTgq'
              }
            >
              <span className='title_title__mdTgq'>Join Our Team</span>
            </div>
          </div>
          <div className='joinOurTeam_innerBorder__OMU9L'></div>
        </div>
        <div className='joinOurTeam_ourteam__zcIkl'>
          <div className='ant-carousel'>
            <div className='slick-slider joinOurTeam_currentSlide0__8U_pt joinOurTeam_slide__l4Mrp slick-initialized'>
              <div className='slick-list'>
                <div
                  className='slick-track'
                  style={{
                    width: '100%',
                    opacity: 1,
                    transform: 'translate3d(0px, 0px, 0px)'
                  }}
                >
                  <div
                    data-index='0'
                    className='slick-slide slick-active slick-current'
                    tabIndex='-1'
                    aria-hidden='false'
                    style={{ outline: 'none', width: '100%' }}
                  >
                    <div>
                      <div
                        className='joinOurTeam_carousel__3h05Y'
                        tabIndex='-1'
                        style={{ width: '100%', display: 'inline-block' }}
                      >
                        <div
                          className={
                            theme.palette.mode === 'dark'
                              ? 'positionItems_positionItems__moVHI positionItems_dark__8jSSm'
                              : 'positionItems_positionItems__moVHI false'
                          }
                          onClick={() => {
                            navigate('/career/ITSalesSpecialist', {
                              state: { info: ISSInfo }
                            })
                          }}
                          onMouseOver={() => setISSHover(true)}
                          onMouseLeave={() => setISSHover(false)}
                        >
                          <div className='positionItems_card__yE_EF'>
                            <span style={ImageDivSpanStyle1}>
                              <span style={ImageDivSpanSpanStyle1}>
                                <img
                                  alt=''
                                  aria-hidden='true'
                                  src='data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%2770%27%20height=%2762%27/%3e'
                                  style={ImageDivSpanSpanImgStyle1}
                                />
                              </span>
                              {theme.palette.mode === 'dark' ? (
                                <img
                                  alt='sales-specialist.svg'
                                  draggable='false'
                                  srcSet='https://ik.imagekit.io/2zlgs27bjo/public/image/sales-specialist-dark.svg?tr=w-70,q-100 1x, https://ik.imagekit.io/2zlgs27bjo/public/image/sales-specialist-dark.svg?tr=w-70,q-100 2x'
                                  src='https://ik.imagekit.io/2zlgs27bjo/public/image/sales-specialist-dark.svg?tr=w-70,q-100'
                                  decoding='async'
                                  data-nimg='intrinsic'
                                  style={ImageDivSpanImgStyle2}
                                />
                              ) : (
                                <img
                                  id='ISSImage'
                                  alt='/sales-specialist.svg'
                                  draggable='false'
                                  src='https://ik.imagekit.io/2zlgs27bjo/public/image/sales-specialist.svg?tr=w-70,q-100'
                                  decoding='async'
                                  data-nimg='intrinsic'
                                  style={ImageDivSpanImgStyle2}
                                  srcSet='https://ik.imagekit.io/2zlgs27bjo/public/image/sales-specialist.svg?tr=w-70,q-100 1x, https://ik.imagekit.io/2zlgs27bjo/public/image/sales-specialist.svg?tr=w-70,q-100 2x'
                                />
                              )}
                            </span>
                          </div>
                          <div className='positionItems_text__ncZZe'>
                            <span>IT Sales Specialist</span>
                          </div>
                          <div className='positionItems_link__gy6RO'>
                            Learn more
                          </div>
                        </div>
                        <div
                          className={
                            theme.palette.mode === 'dark'
                              ? 'positionItems_positionItems__moVHI positionItems_dark__8jSSm'
                              : 'positionItems_positionItems__moVHI false'
                          }
                          onMouseOver={() => setPHPHover(true)}
                          onMouseLeave={() => setPHPHover(false)}
                          onClick={() => {
                            navigate('/career/PHPDeveloper', {
                              state: { info: PHPInfo }
                            })
                          }}
                        >
                          <div className='positionItems_card__yE_EF'>
                            <span style={ImageDivSpanStyle1}>
                              <span style={ImageDivSpanSpanStyle1}>
                                <img
                                  alt=''
                                  aria-hidden='true'
                                  src='data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%2770%27%20height=%2762%27/%3e'
                                  style={ImageDivSpanSpanImgStyle1}
                                />
                              </span>
                              {theme.palette.mode === 'dark' ? (
                                <img
                                  alt='php-developer.svg'
                                  draggable='false'
                                  decoding='async'
                                  data-nimg='intrinsic'
                                  style={ImageDivSpanImgStyle2}
                                  src='https://ik.imagekit.io/2zlgs27bjo/public/image/php-developer-dark.svg?tr=w-70,q-100'
                                  srcSet='https://ik.imagekit.io/2zlgs27bjo/public/image/php-developer-dark.svg?tr=w-70,q-100 1x, https://ik.imagekit.io/2zlgs27bjo/public/image/php-developer-dark.svg?tr=w-70,q-100 2x'
                                />
                              ) : (
                                <img
                                  id='PHPImage'
                                  alt='/php-developer.svg'
                                  draggable='false'
                                  decoding='async'
                                  data-nimg='intrinsic'
                                  style={ImageDivSpanImgStyle2}
                                  src='https://ik.imagekit.io/2zlgs27bjo/public/image/php-developer.svg?tr=w-70,q-100'
                                  srcSet='https://ik.imagekit.io/2zlgs27bjo/public/image/php-developer.svg?tr=w-70,q-100 1x, https://ik.imagekit.io/2zlgs27bjo/public/image/php-developer.svg?tr=w-70,q-100 2x'
                                />
                              )}
                            </span>
                          </div>
                          <div className='positionItems_text__ncZZe'>
                            <span>PHP Developer</span>
                          </div>
                          <div className='positionItems_link__gy6RO'>
                            Learn more
                          </div>
                        </div>
                        <div
                          className={
                            theme.palette.mode === 'dark'
                              ? 'positionItems_positionItems__moVHI positionItems_dark__8jSSm'
                              : 'positionItems_positionItems__moVHI false'
                          }
                          onMouseOver={() => setISDHover(true)}
                          onMouseLeave={() => setISDHover(false)}
                          onClick={() => {
                            navigate('/career/InternSoftwareDeveloper', {
                              state: { info: ISDInfo }
                            })
                          }}
                        >
                          <div className='positionItems_card__yE_EF'>
                            <span style={ImageDivSpanStyle1}>
                              <span style={ImageDivSpanSpanStyle1}>
                                <img
                                  alt=''
                                  aria-hidden='true'
                                  src='data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%2770%27%20height=%2762%27/%3e'
                                  style={ImageDivSpanSpanImgStyle1}
                                />
                              </span>
                              {theme.palette.mode === 'dark' ? (
                                <img
                                  alt='intern-software-developer.svg'
                                  draggable='false'
                                  decoding='async'
                                  data-nimg='intrinsic'
                                  style={ImageDivSpanImgStyle2}
                                  src='https://ik.imagekit.io/2zlgs27bjo/public/image/intern-software-developer-dark.svg?tr=w-70,q-100'
                                  srcSet='https://ik.imagekit.io/2zlgs27bjo/public/image/intern-software-developer-dark.svg?tr=w-70,q-100 1x, https://ik.imagekit.io/2zlgs27bjo/public/image/intern-software-developer-dark.svg?tr=w-70,q-100 2x'
                                />
                              ) : (
                                <img
                                  id='ISDImage'
                                  alt='/intern-software-developer.svg'
                                  draggable='false'
                                  decoding='async'
                                  data-nimg='intrinsic'
                                  style={ImageDivSpanImgStyle2}
                                  src='https://ik.imagekit.io/2zlgs27bjo/public/image/intern-software-developer.svg?tr=w-70,q-100'
                                  srcSet='https://ik.imagekit.io/2zlgs27bjo/public/image/intern-software-developer.svg?tr=w-70,q-100 1x, https://ik.imagekit.io/2zlgs27bjo/public/image/intern-software-developer.svg?tr=w-70,q-100 2x'
                                />
                              )}
                            </span>
                          </div>
                          <div className='positionItems_text__ncZZe'>
                            <span>Intern Software Developer</span>
                          </div>
                          <div className='positionItems_link__gy6RO'>
                            Learn more
                          </div>
                        </div>
                        <div
                          className={
                            theme.palette.mode === 'dark'
                              ? 'positionItems_positionItems__moVHI positionItems_dark__8jSSm'
                              : 'positionItems_positionItems__moVHI false'
                          }
                          onMouseOver={event => setSDHover(true)}
                          onMouseLeave={() => setSDHover(false)}
                          onClick={() => {
                            navigate('/career/SolidityDeveloper', {
                              state: { info: SDInfo }
                            })
                          }}
                        >
                          <div className='positionItems_card__yE_EF'>
                            <span style={ImageDivSpanStyle1}>
                              <span style={ImageDivSpanSpanStyle1}>
                                <img
                                  alt=''
                                  aria-hidden='true'
                                  src='data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%2770%27%20height=%2762%27/%3e'
                                  style={ImageDivSpanSpanImgStyle1}
                                />
                              </span>
                              {theme.palette.mode === 'dark' ? (
                                <img
                                  alt='solidity-developer.svg'
                                  draggable='false'
                                  decoding='async'
                                  data-nimg='intrinsic'
                                  style={ImageDivSpanImgStyle2}
                                  src='https://ik.imagekit.io/2zlgs27bjo/public/image/solidity-developer-dark.svg?tr=w-70,q-100'
                                  srcSet='https://ik.imagekit.io/2zlgs27bjo/public/image/solidity-developer-dark.svg?tr=w-70,q-100 1x, https://ik.imagekit.io/2zlgs27bjo/public/image/solidity-developer-dark.svg?tr=w-70,q-100 2x'
                                />
                              ) : (
                                <img
                                  id='SDImage'
                                  alt='/solidity-developer.svg'
                                  draggable='false'
                                  decoding='async'
                                  data-nimg='intrinsic'
                                  style={ImageDivSpanImgStyle2}
                                  src='https://ik.imagekit.io/2zlgs27bjo/public/image/solidity-developer.svg?tr=w-70,q-100'
                                  srcSet='https://ik.imagekit.io/2zlgs27bjo/public/image/solidity-developer.svg?tr=w-70,q-100 1x, https://ik.imagekit.io/2zlgs27bjo/public/image/solidity-developer.svg?tr=w-70,q-100 2x'
                                />
                              )}
                            </span>
                          </div>
                          <div className='positionItems_text__ncZZe'>
                            <span>Solidity Developer</span>
                          </div>
                          <div className='positionItems_link__gy6RO'>
                            Learn more
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            className={
              theme.palette.mode === 'dark'
                ? 'joinOurTeam_innerPositions__gI0RL joinOurTeam_innerPositionsDark__qOxjH'
                : 'joinOurTeam_innerPositions__gI0RL false'
            }
          >
            <div
              className={
                theme.palette.mode === 'light'
                  ? 'positionItems_positionItems__moVHI false'
                  : 'positionItems_positionItems__moVHI positionItems_dark__8jSSm'
              }
              onClick={() => {
                navigate('/career/ITSalesSpecialist', {
                  state: { info: ISSInfo }
                })
              }}
              onMouseOver={() => setISSHover(true)}
              onMouseLeave={() => setISSHover(false)}
            >
              <div className='positionItems_card__yE_EF'>
                <span style={ImageDivSpanStyle1}>
                  <span style={ImageDivSpanSpanStyle1}>
                    <img
                      alt=''
                      aria-hidden='true'
                      src='data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%2770%27%20height=%2762%27/%3e'
                      style={ImageDivSpanSpanImgStyle1}
                    />
                  </span>
                  <img
                    id='ISSImageMobile'
                    alt='sales-specialist.svg'
                    draggable='false'
                    srcSet='https://ik.imagekit.io/2zlgs27bjo/public/image/sales-specialist-dark.svg?tr=w-70,q-100 1x, https://ik.imagekit.io/2zlgs27bjo/public/image/sales-specialist-dark.svg?tr=w-70,q-100 2x'
                    src='https://ik.imagekit.io/2zlgs27bjo/public/image/sales-specialist-dark.svg?tr=w-70,q-100'
                    decoding='async'
                    data-nimg='intrinsic'
                    style={ImageDivSpanImgStyle2}
                  />
                </span>
              </div>
              <div className='positionItems_text__ncZZe'>
                <span>IT Sales Specialist</span>
              </div>
              <div className='positionItems_link__gy6RO'>Learn more</div>
            </div>
            <div
              className={
                theme.palette.mode === 'light'
                  ? 'positionItems_positionItems__moVHI false'
                  : 'positionItems_positionItems__moVHI positionItems_dark__8jSSm'
              }
              onClick={() => {
                navigate('/career/PHPDeveloper', {
                  state: { info: PHPInfo }
                })
              }}
              onMouseOver={() => setPHPHover(true)}
              onMouseLeave={() => setPHPHover(false)}
            >
              <div className='positionItems_card__yE_EF'>
                <span style={ImageDivSpanStyle1}>
                  <span style={ImageDivSpanSpanStyle1}>
                    <img
                      alt=''
                      aria-hidden='true'
                      src='data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%2770%27%20height=%2762%27/%3e'
                      style={ImageDivSpanSpanImgStyle1}
                    />
                  </span>
                  <img
                    id='PHPImageMobile'
                    alt='php-developer.svg'
                    draggable='false'
                    srcSet='https://ik.imagekit.io/2zlgs27bjo/public/image/php-developer-dark.svg?tr=w-70,q-100 1x, https://ik.imagekit.io/2zlgs27bjo/public/image/php-developer-dark.svg?tr=w-70,q-100 2x'
                    src='https://ik.imagekit.io/2zlgs27bjo/public/image/php-developer-dark.svg?tr=w-70,q-100'
                    decoding='async'
                    data-nimg='intrinsic'
                    style={ImageDivSpanImgStyle2}
                  />
                </span>
              </div>
              <div className='positionItems_text__ncZZe'>
                <span>PHP Developer</span>
              </div>
              <div className='positionItems_link__gy6RO'>Learn more</div>
            </div>
            <div
              className={
                theme.palette.mode === 'light'
                  ? 'positionItems_positionItems__moVHI false'
                  : 'positionItems_positionItems__moVHI positionItems_dark__8jSSm'
              }
              onClick={() => {
                navigate('/career/InternSoftwareDeveloper', {
                  state: { info: ISDInfo }
                })
              }}
              onMouseOver={() => setISDHover(true)}
              onMouseLeave={() => setISDHover(false)}
            >
              <div className='positionItems_card__yE_EF'>
                <span style={ImageDivSpanStyle1}>
                  <span style={ImageDivSpanSpanStyle1}>
                    <img
                      alt=''
                      aria-hidden='true'
                      src='data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%2770%27%20height=%2762%27/%3e'
                      style={ImageDivSpanSpanImgStyle1}
                    />
                  </span>
                  <img
                    id='ISDImageMobile'
                    alt='intern-software-developer.svg'
                    draggable='false'
                    srcSet='https://ik.imagekit.io/2zlgs27bjo/public/image/intern-software-developer-dark.svg?tr=w-70,q-100 1x, https://ik.imagekit.io/2zlgs27bjo/public/image/intern-software-developer-dark.svg?tr=w-70,q-100 2x'
                    src='https://ik.imagekit.io/2zlgs27bjo/public/image/intern-software-developer-dark.svg?tr=w-70,q-100'
                    decoding='async'
                    data-nimg='intrinsic'
                    style={ImageDivSpanImgStyle2}
                  />
                </span>
              </div>
              <div className='positionItems_text__ncZZe'>
                <span>Intern Software Developer</span>
              </div>
              <div className='positionItems_link__gy6RO'>Learn more</div>
            </div>
            <div
              className={
                theme.palette.mode === 'light'
                  ? 'positionItems_positionItems__moVHI false'
                  : 'positionItems_positionItems__moVHI positionItems_dark__8jSSm'
              }
              onClick={() => {
                navigate('/career/SolidityDeveloper', {
                  state: { info: SDInfo }
                })
              }}
              onMouseOver={() => setSDHover(true)}
              onMouseLeave={() => setSDHover(false)}
            >
              <div className='positionItems_card__yE_EF'>
                <span style={ImageDivSpanStyle1}>
                  <span style={ImageDivSpanSpanStyle1}>
                    <img
                      alt=''
                      aria-hidden='true'
                      src='data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%2770%27%20height=%2762%27/%3e'
                      style={ImageDivSpanSpanImgStyle1}
                    />
                  </span>
                  <img
                    id='SDImageMobile'
                    alt='solidity-developer.svg'
                    draggable='false'
                    srcSet='https://ik.imagekit.io/2zlgs27bjo/public/image/solidity-developer-dark.svg?tr=w-70,q-100 1x, https://ik.imagekit.io/2zlgs27bjo/public/image/solidity-developer-dark.svg?tr=w-70,q-100 2x'
                    src='https://ik.imagekit.io/2zlgs27bjo/public/image/solidity-developer-dark.svg?tr=w-70,q-100'
                    decoding='async'
                    data-nimg='intrinsic'
                    style={ImageDivSpanImgStyle2}
                  />
                </span>
              </div>
              <div className='positionItems_text__ncZZe'>
                <span>Solidity Developer</span>
              </div>
              <div className='positionItems_link__gy6RO'>Learn more</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CareersJoinOurTeam

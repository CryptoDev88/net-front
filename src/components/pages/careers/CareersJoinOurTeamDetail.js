import { useTheme } from '@mui/system'
import { useLocation, useNavigate } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { ISSInfo, PHPInfo, ISDInfo, SDInfo } from './CareersJoinOurTeamInfo'

import {
  ImageDivSpanStyle1,
  ImageDivSpanSpanStyle1,
  ImageDivSpanSpanImgStyle1,
  ImageDivSpanImgStyle2
} from '../../BaseCss'

function CareersJoinOurTeamDetail () {
  const { state } = useLocation()
  const info = state.info
  const theme = useTheme()

  const [formData, setFormData] = useState({
    name: '',
    lastName: '',
    email: '',
    phone: '',
    linkedin: '',
    portfolio: ''
  })

  const handleInputChange = e => {
    setFormData({ ...formData, [e.target.id]: e.target.value })
  }

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

    const hideElement = () => {
      const idList = [
        'ITSalesSpecialist',
        'PHPDeveloper',
        'SolidityDeveloper',
        'InternSoftwareDeveloper',
        'ITSalesSpecialistMobile',
        'PHPDeveloperMobile',
        'SolidityDeveloperMobile',
        'InternSoftwareDeveloperMobile'
      ]
      const elementID = info.name.replace(/\s/g, '')
      const elementMobileID = elementID + 'Mobile'
      idList.forEach(id => {
        const element = document.getElementById(id)
        if (id === elementID || id === elementMobileID) {
          element.style.display = 'none'
        } else {
          element.style.display = 'flex'
        }
      })
    }

    hideElement()

    window.addEventListener('resize', hideElement)

    return () => {
      window.removeEventListener('resize', hideElement)
    }
  }, [ISSHover, PHPHover, ISDHover, SDHover, info])

  return (
    <div
      className={
        theme.palette.mode === 'light'
          ? 'career_container___A_DC false'
          : 'career_container___A_DC career_containerDark__nQTZ0'
      }
    >
      <div className='career_paragraph__HIq4q'>
        <h1
          className={
            theme.palette.mode === 'light' ? '' : 'career_colorWhite___UFvE'
          }
        >
          {info.name}
        </h1>
        <p
          className={
            theme.palette.mode === 'light' ? '' : 'career_colorWhite___UFvE'
          }
        >
          {info.shortDesc}
        </p>
      </div>
      <div className='career_career__yFAlE'>
        <div className='career_careerSection__INZEG'>
          <section
            className={
              theme.palette.mode === 'light'
                ? 'jobDescription_careersItemSection__uvD0k'
                : 'jobDescription_careersItemSection__uvD0k jobDescription_careersItemSectionDark__lFyl5'
            }
          >
            <div className='jobDescription_careersItemContainer__KEYY4'>
              <div className='jobDescription_jobDescription__bD7TZ'>
                <div className='jobDescription_itemTitle__EvS1b'>
                  Job Description
                </div>
                <div className='jobDescription_descriptionText__jS9gX'>
                  {info.longDesc}
                </div>
                <h2 className='jobDescription_itemTitle__EvS1b'>
                  Job Responsibilities
                </h2>
                <div className='jobDescription_jobResponsibilities__UQXjT'>
                  {info.responsibilities.length > 0 &&
                    info.responsibilities.map(item => (
                      <div className='jobDescription_items__zVeq8' key={item}>
                        <li className='jobDescription_jobResponsibilities__UQXjT'>
                          {item}
                        </li>
                      </div>
                    ))}
                </div>
              </div>
              <div className='jobDescription_aboutQualifications__LK8qA'>
                <h2 className='jobDescription_itemTitle__EvS1b'>
                  Required Qualifications
                </h2>
                <div className='jobDescription_qualifications__DwcbS'>
                  {info.qualifications.length > 0 &&
                    info.qualifications.map((item, index) => (
                      <div className='jobDescription_items__zVeq8' key={index}>
                        <li className='jobDescription_itemDescription__BRH7j'>
                          {item}
                        </li>
                      </div>
                    ))}
                </div>
              </div>
            </div>
          </section>
          <div
            className={
              theme.palette.mode === 'light'
                ? 'careerForm_careerFormContainer__HwGOy false'
                : 'careerForm_careerFormContainer__HwGOy careerForm_careerFormContainerDark__paIR5'
            }
          >
            <div className='careerForm_careerForm__Ft2Ym'>
              <form
                className={
                  theme.palette.mode === 'light'
                    ? 'ant-form ant-form-horizontal careerForm_formContainer__PaFZg false'
                    : 'ant-form ant-form-horizontal careerForm_formContainer__PaFZg careerForm_formContainerDark__e1mia'
                }
              >
                <div
                  className={
                    theme.palette.mode === 'light'
                      ? 'careerForm_formTitle__s8hWN false'
                      : 'careerForm_formTitle__s8hWN careerForm_colorWhite__o9EJH'
                  }
                >
                  Apply For
                </div>
                <div
                  className={
                    theme.palette.mode === 'light'
                      ? 'careerForm_locationSection__cmvLC false'
                      : 'careerForm_locationSection__cmvLC careerForm_colorWhite__o9EJH'
                  }
                >
                  <p
                    className={
                      theme.palette.mode === 'light'
                        ? 'careerForm_jobTitleText__is8F9'
                        : 'careerForm_colorWhite__o9EJH careerForm_jobTitleText__is8F9'
                    }
                  >
                    {info.name} On-Site
                  </p>
                  <span
                    className={
                      theme.palette.mode === 'light'
                        ? ''
                        : 'careerForm_colorWhite__o9EJH'
                    }
                  >
                    Yerevan, Armenia
                  </span>
                </div>
                <div className='ant-form-item careerForm_formItem__zAbce'>
                  <div className='ant-row ant-form-item-row'>
                    <div className='ant-col ant-form-item-control'>
                      <div className='ant-form-item-control-input'>
                        <div className='ant-form-item-control-input-content'>
                          <div>
                            <label
                              htmlFor='name'
                              className='input_label__r45gH'
                            >
                              First Name*{' '}
                              <span className='input_labelMobile__BLHgM'></span>
                            </label>
                            <input
                              placeholder='Joe'
                              id='name'
                              aria-required='true'
                              className={
                                theme.palette.mode === 'light'
                                  ? 'ant-input careerForm_inputStyles__ZF6sI'
                                  : 'ant-input careerForm_inputStylesDark__U6VNt careerForm_inputStyles__ZF6sI'
                              }
                              type='text'
                              value={formData.name}
                              onChange={handleInputChange}
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className='ant-form-item careerForm_formItem__zAbce'>
                  <div className='ant-row ant-form-item-row'>
                    <div className='ant-col ant-form-item-control'>
                      <div className='ant-form-item-control-input'>
                        <div className='ant-form-item-control-input-content'>
                          <div>
                            <label
                              htmlFor='lastName'
                              className='input_label__r45gH'
                            >
                              Last name*{' '}
                              <span className='input_labelMobile__BLHgM'></span>
                            </label>
                            <input
                              placeholder='Miller'
                              id='lastName'
                              aria-required='true'
                              className={
                                theme.palette.mode === 'light'
                                  ? 'ant-input careerForm_inputStyles__ZF6sI'
                                  : 'ant-input careerForm_inputStylesDark__U6VNt careerForm_inputStyles__ZF6sI'
                              }
                              type='text'
                              value={formData.lastName}
                              onChange={handleInputChange}
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className='ant-form-item careerForm_formItem__zAbce'>
                  <div className='ant-row ant-form-item-row'>
                    <div className='ant-col ant-form-item-control'>
                      <div className='ant-form-item-control-input'>
                        <div className='ant-form-item-control-input-content'>
                          <div>
                            <label
                              htmlFor='email'
                              className='input_label__r45gH'
                            >
                              Email*{' '}
                              <span className='input_labelMobile__BLHgM'></span>
                            </label>
                            <input
                              placeholder='example@gmail.com'
                              type='text'
                              id='email'
                              aria-required='true'
                              className={
                                theme.palette.mode === 'light'
                                  ? 'ant-input careerForm_inputStyles__ZF6sI'
                                  : 'ant-input careerForm_inputStylesDark__U6VNt careerForm_inputStyles__ZF6sI'
                              }
                              value={formData.email}
                              onChange={handleInputChange}
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className='ant-form-item careerForm_formItem__zAbce'>
                  <div className='ant-row ant-form-item-row'>
                    <div className='ant-col ant-form-item-control'>
                      <div className='ant-form-item-control-input'>
                        <div className='ant-form-item-control-input-content'>
                          <div>
                            <label
                              htmlFor='phoneNumber'
                              className='input_label__r45gH'
                            >
                              Phone*{' '}
                              <span className='input_labelMobile__BLHgM'></span>
                            </label>
                            <input
                              placeholder='+37444556677'
                              id='phone'
                              aria-required='true'
                              className={
                                theme.palette.mode === 'light'
                                  ? 'ant-input careerForm_inputStyles__ZF6sI'
                                  : 'ant-input careerForm_inputStylesDark__U6VNt careerForm_inputStyles__ZF6sI'
                              }
                              type='text'
                              value={formData.phone}
                              onChange={handleInputChange}
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className='ant-form-item careerForm_formItem__zAbce'>
                  <div className='ant-row ant-form-item-row'>
                    <div className='ant-col ant-form-item-control'>
                      <div className='ant-form-item-control-input'>
                        <div className='ant-form-item-control-input-content'>
                          <div>
                            <label
                              htmlFor='LinkedinURL'
                              className='input_label__r45gH'
                            >
                              Linkedin URL{' '}
                              <span className='input_labelMobile__BLHgM'></span>
                            </label>
                            <input
                              placeholder='https://www.linkedin.com/in/...'
                              id='linkedin'
                              className={
                                theme.palette.mode === 'light'
                                  ? 'ant-input careerForm_inputStyles__ZF6sI'
                                  : 'ant-input careerForm_inputStylesDark__U6VNt careerForm_inputStyles__ZF6sI'
                              }
                              type='text'
                              value={formData.linkedin}
                              onChange={handleInputChange}
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className='ant-form-item careerForm_formItem__zAbce'>
                  <div className='ant-row ant-form-item-row'>
                    <div className='ant-col ant-form-item-control'>
                      <div className='ant-form-item-control-input'>
                        <div className='ant-form-item-control-input-content'>
                          <div>
                            <label
                              htmlFor='PortfolioURL'
                              className='input_label__r45gH'
                            >
                              Portfolio URL{' '}
                              <span className='input_labelMobile__BLHgM'></span>
                            </label>
                            <input
                              placeholder='https://www.behance.net/JoeMiller'
                              id='portfolio'
                              className={
                                theme.palette.mode === 'light'
                                  ? 'ant-input careerForm_inputStyles__ZF6sI'
                                  : 'ant-input careerForm_inputStylesDark__U6VNt careerForm_inputStyles__ZF6sI'
                              }
                              type='text'
                              value={formData.portfolio}
                              onChange={handleInputChange}
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className='careerForm_uploadCv__NQU3F'>
                  <div className='ant-form-item careerForm_formItem__zAbce'>
                    <div className='ant-row ant-form-item-row'>
                      <div className='ant-col ant-form-item-control'>
                        <div className='ant-form-item-control-input'>
                          <div className='ant-form-item-control-input-content'>
                            <span>
                              <div className='ant-upload ant-upload-select ant-upload-select-text'>
                                <span
                                  tabIndex='0'
                                  className='ant-upload'
                                  role='button'
                                >
                                  <input
                                    aria-required='true'
                                    id='CV'
                                    type='file'
                                    accept='.pdf'
                                    style={{ display: 'none' }}
                                  />
                                  <button
                                    type='button'
                                    className={
                                      theme.palette.mode === 'light'
                                        ? 'ant-btn ant-btn-default careerForm_cvButton__MNinj'
                                        : 'ant-btn ant-btn-default careerForm_cvButtonDark__AY2q7'
                                    }
                                  >
                                    <span style={ImageDivSpanStyle1}>
                                      <span style={ImageDivSpanSpanStyle1}>
                                        <img
                                          alt=''
                                          aria-hidden='true'
                                          src='data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%2712%27%20height=%2724%27/%3e'
                                          style={ImageDivSpanSpanImgStyle1}
                                        />
                                      </span>
                                      {theme.palette.mode === 'light' ? (
                                        <img
                                          alt='cv-icon.svg'
                                          draggable='false'
                                          srcSet='https://ik.imagekit.io/2zlgs27bjo/public/icons/cv-icon.svg?tr=w-12,q-100 1x, https://ik.imagekit.io/2zlgs27bjo/public/icons/cv-icon.svg?tr=w-12,q-100 2x'
                                          src='https://ik.imagekit.io/2zlgs27bjo/public/icons/cv-icon.svg?tr=w-12,q-100'
                                          decoding='async'
                                          data-nimg='intrinsic'
                                          style={ImageDivSpanImgStyle2}
                                        />
                                      ) : (
                                        <img
                                          alt='dark-cv-icon.svg'
                                          draggable='false'
                                          src='https://ik.imagekit.io/2zlgs27bjo/public/icons/dark-cv-icon.svg?tr=w-12,q-100'
                                          decoding='async'
                                          data-nimg='intrinsic'
                                          style={ImageDivSpanImgStyle2}
                                          srcSet='https://ik.imagekit.io/2zlgs27bjo/public/icons/dark-cv-icon.svg?tr=w-12,q-100 1x, https://ik.imagekit.io/2zlgs27bjo/public/icons/dark-cv-icon.svg?tr=w-12,q-100 2x'
                                        />
                                      )}
                                    </span>
                                    <span className='secondaryButton_text__kcYzg'>
                                      Upload your CV
                                    </span>
                                  </button>
                                </span>
                              </div>
                              <div className='ant-upload-list ant-upload-list-text'></div>
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className='checkbox_checkboxContainer__OT_a7'>
                  <label
                    className={
                      theme.palette.mode === 'light'
                        ? 'ant-checkbox-wrapper careerForm_checkbox__rcybX false'
                        : 'ant-checkbox-wrapper careerForm_checkbox__rcybX careerForm_checkboxDark__zzt_E'
                    }
                  >
                    <span className='ant-checkbox'>
                      <input className='ant-checkbox-input' type='checkbox' />
                      <span className='ant-checkbox-inner'></span>
                    </span>
                  </label>
                  <label className='checkbox_label__z6828'>
                    I agree to the{' '}
                    <a
                      href='/termsAndConditions'
                      target='_blank'
                      rel='noopener noreferrer nofollow'
                      previewlistener='true'
                    >
                      terms and conditions
                    </a>
                  </label>
                </div>
                <div>
                  <div>
                    <div style={{ width: '304px', height: '78px' }}>
                      <div>
                        <iframe
                          title='reCAPTCHA'
                          width='304'
                          height='78'
                          role='presentation'
                          name='a-k1c8u42e6brp'
                          frameBorder='0'
                          scrolling='no'
                          sandbox='allow-forms allow-popups allow-same-origin allow-scripts allow-top-navigation allow-modals allow-popups-to-escape-sandbox allow-storage-access-by-user-activation'
                          src='https://www.google.com/recaptcha/api2/anchor?ar=1&amp;k=6LeU0pseAAAAAHCfZdMR-wUNrzAkdpYiApCbbPxV&amp;co=aHR0cHM6Ly9zb2xpY3kubmV0OjQ0Mw..&amp;hl=en&amp;type=image&amp;v=Hq4JZivTyQ7GP8Kt571Tzodj&amp;theme=light&amp;size=normal&amp;badge=bottomright&amp;cb=hgj3lttvpt2l'
                        ></iframe>
                      </div>
                      <textarea
                        id='g-recaptcha-response-6'
                        name='g-recaptcha-response'
                        className='g-recaptcha-response'
                        style={{
                          width: '250px',
                          height: '40px',
                          border: '1px solid rgb(193, 193, 193)',
                          margin: '10px 25px',
                          padding: '0px',
                          resize: 'none',
                          display: 'none'
                        }}
                      ></textarea>
                    </div>
                    <iframe
                      style={{ display: 'none' }}
                      title='checkRobot'
                    ></iframe>
                  </div>
                </div>
                <div className='careerForm_buttonBox__Zc5oh'>
                  <button
                    type='submit'
                    className={
                      theme.palette.mode === 'light'
                        ? 'ant-btn ant-btn-default button_btn__XHL7T careerForm_applyButton__ChcDp careerForm_applyButtonLight__xM9Ek button_light__M4f83 button_direction-row__QRu0d'
                        : 'ant-btn ant-btn-default button_btn__XHL7T careerForm_applyButton__ChcDp careerForm_applyButtonDark__V9w2J button_dark__1020G button_direction-row__QRu0d'
                    }
                    disabled=''
                  >
                    <p>Submit</p>
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <div className='career_joinOurTeam__7AnEk'>
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
      </div>
      <div className='ant-carousel'>
        <div className='slick-slider career_currentSlide0__yWtuG career_slide__todOG slick-initialized'>
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
                    className='career_carousel__KuKnQ'
                    tabIndex='-1'
                    style={{ width: '100%', display: 'inline-block' }}
                  >
                    <div
                      id='ITSalesSpecialist'
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
                      id='PHPDeveloper'
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
                      id='InternSoftwareDeveloper'
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
                      id='SolidityDeveloper'
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
          theme.palette.mode === 'light'
            ? 'undefined false career_slideMb__M_bAY'
            : 'undefined undefined career_slideMb__M_bAY'
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
          id='ITSalesSpecialistMobile'
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
          id='PHPDeveloperMobile'
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
          id='InternSoftwareDeveloperMobile'
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
          id='SolidityDeveloperMobile'
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
  )
}

export default CareersJoinOurTeamDetail

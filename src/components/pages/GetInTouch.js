import { useTheme } from '@mui/system'
import { useState } from 'react'
import axios from 'axios'

import {
  ImageDivSpanStyle1,
  ImageDivSpanSpanStyle1,
  ImageDivSpanSpanImgStyle1,
  ImageDivSpanSpanImgStyle2,
  ImageDivSpanImgStyle2,
  ImageDivSpanImgStyle3
} from '../BaseCss'

function GetInTouch () {
  const theme = useTheme()
  const [formData, setFormData] = useState({
    name: '',
    lastName: '',
    email: '',
    message: ''
  })

  const handleInputChange = e => {
    setFormData({ ...formData, [e.target.id]: e.target.value })
  }

  const handleSubmit = e => {
    e.preventDefault()

    console.log(formData)

    axios
      .post('http://127.0.0.1:5000/api/send-email', formData)
      // .post('http://192.168.140.92:5000/api/send-email', formData)
      .then(response => {
        console.log('Email sent successfully')
      })
      .catch(error => {
        console.error('Error sending email:', error)
      })

    // Reset the form after submission
    setFormData({ name: '', lastName: '', email: '', message: '' })
  }

  return (
    <div className='contact-us_contactUs__XldCj'>
      <meta charSet='utf-8' />
      <div className='contactUsForm_contactUsContainer__hgB3X'>
        <div className='contactUsForm_contactTitle__fc0dW'>
          <div className='title_titleContainer__SvQXY'>
            <div className='title_title__mdTgq'>
              <h1 className='title_title__mdTgq'>Get In Touch</h1>
            </div>
          </div>
        </div>
        <div className='contactUsForm_formDetails__YPth_'>
          <div className='contactUsForm_formBox__V5lf2'>
            <form
              className='ant-form ant-form-horizontal contactUsForm_form__m1aYa'
              onSubmit={handleSubmit}
            >
              <div className='contactUsForm_topInputs__LP9Mv'>
                <div className='ant-form-item'>
                  <div className='ant-row ant-form-item-row'>
                    <div className='ant-col ant-form-item-control'>
                      <div className='ant-form-item-control-input'>
                        <div className='ant-form-item-control-input-content'>
                          <div>
                            <label
                              htmlFor='name'
                              className='input_label__r45gH'
                            >
                              First name{' '}
                              <span className='input_labelMobile__BLHgM'></span>
                            </label>
                            <input
                              placeholder='First name'
                              id='name'
                              aria-required='true'
                              className='ant-input input_input__vRtOp undefined'
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
                <div className='ant-form-item'>
                  <div className='ant-row ant-form-item-row'>
                    <div className='ant-col ant-form-item-control'>
                      <div className='ant-form-item-control-input'>
                        <div className='ant-form-item-control-input-content'>
                          <div>
                            <label
                              htmlFor='lastName'
                              className='input_label__r45gH'
                            >
                              Last name{' '}
                              <span className='input_labelMobile__BLHgM'></span>
                            </label>
                            <input
                              placeholder='Last name'
                              id='lastName'
                              aria-required='true'
                              className='ant-input input_input__vRtOp undefined'
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
              </div>
              <div className='contactUsForm_emailInputs__YTQs_'>
                <div className='ant-form-item'>
                  <div className='ant-row ant-form-item-row'>
                    <div className='ant-col ant-form-item-control'>
                      <div className='ant-form-item-control-input'>
                        <div className='ant-form-item-control-input-content'>
                          <div>
                            <label
                              htmlFor='email'
                              className='input_label__r45gH'
                            >
                              Email address{' '}
                              <span className='input_labelMobile__BLHgM'></span>
                            </label>
                            <input
                              placeholder='Email address'
                              type='text'
                              id='email'
                              className='ant-input input_input__vRtOp undefined'
                              value={formData.email}
                              onChange={handleInputChange}
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className='contactUsForm_textAreaInput__vQHxs'>
                <div className='ant-form-item'>
                  <div className='ant-row ant-form-item-row'>
                    <div className='ant-col ant-form-item-control'>
                      <div className='ant-form-item-control-input'>
                        <div className='ant-form-item-control-input-content'>
                          <div>
                            <label
                              htmlFor='Message'
                              className='textArea_label__gEHNw'
                            >
                              Message
                            </label>
                            <textarea
                              placeholder='Message'
                              id='message'
                              className='ant-input textArea_textArea__zibQ_ undefined'
                              value={formData.message}
                              onChange={handleInputChange}
                            ></textarea>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className='contactUsForm_service__ClWEO'>
                <div
                  className={
                    theme.palette.mode === 'light'
                      ? 'contactUsForm_title__Wz0Rk'
                      : 'contactUsForm_darkTitle__kjGCo'
                  }
                >
                  Please choose your interest
                </div>
                <div>
                  <div className='contactUsForm_checkboxes__qSHb4'>
                    <div className='ant-form-item'>
                      <div className='ant-row ant-form-item-row'>
                        <div className='ant-col ant-form-item-control'>
                          <div className='ant-form-item-control-input'>
                            <div className='ant-form-item-control-input-content'>
                              <label
                                htmlFor='Software Development'
                                className={
                                  theme.palette.mode === 'light'
                                    ? 'contactUsForm_light__TPk43'
                                    : 'contactUsForm_light__TPk43 contactUsForm_dark__73jND'
                                }
                                id='softwareDevelopment'
                              >
                                <div>
                                  <input
                                    type='checkbox'
                                    id='Software Development'
                                    className={
                                      theme.palette.mode === 'light'
                                        ? 'ant-input'
                                        : 'ant-input ant-input-status-success contactUsForm_darkInput___8llQ'
                                    }
                                    value=''
                                  />
                                </div>
                                Software Development
                              </label>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className='ant-form-item'>
                      <div className='ant-row ant-form-item-row'>
                        <div className='ant-col ant-form-item-control'>
                          <div className='ant-form-item-control-input'>
                            <div className='ant-form-item-control-input-content'>
                              <label
                                htmlFor='Job Opportunity'
                                className={
                                  theme.palette.mode === 'light'
                                    ? 'contactUsForm_light__TPk43'
                                    : 'contactUsForm_light__TPk43 contactUsForm_dark__73jND'
                                }
                                id='jobOpportunity'
                              >
                                <div>
                                  <input
                                    type='checkbox'
                                    id='Job Opportunity'
                                    className={
                                      theme.palette.mode === 'light'
                                        ? 'ant-input'
                                        : 'ant-input ant-input-status-success contactUsForm_darkInput___8llQ'
                                    }
                                    value=''
                                  />
                                </div>
                                Job Opportunity
                              </label>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className='ant-form-item'>
                      <div className='ant-row ant-form-item-row'>
                        <div className='ant-col ant-form-item-control'>
                          <div className='ant-form-item-control-input'>
                            <div className='ant-form-item-control-input-content'>
                              <label
                                htmlFor='Blockchain Development'
                                className={
                                  theme.palette.mode === 'light'
                                    ? 'contactUsForm_light__TPk43'
                                    : 'contactUsForm_light__TPk43 contactUsForm_dark__73jND'
                                }
                                id='blockchainDevelopment'
                              >
                                <div>
                                  <input
                                    type='checkbox'
                                    id='Blockchain Development'
                                    className={
                                      theme.palette.mode === 'light'
                                        ? 'ant-input'
                                        : 'ant-input ant-input-status-success contactUsForm_darkInput___8llQ'
                                    }
                                    value=''
                                  />
                                </div>
                                Blockchain Development
                              </label>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className='ant-form-item'>
                      <div className='ant-row ant-form-item-row'>
                        <div className='ant-col ant-form-item-control'>
                          <div className='ant-form-item-control-input'>
                            <div className='ant-form-item-control-input-content'>
                              <label
                                htmlFor='Marketing Collaboration'
                                className={
                                  theme.palette.mode === 'light'
                                    ? 'contactUsForm_light__TPk43'
                                    : 'contactUsForm_light__TPk43 contactUsForm_dark__73jND'
                                }
                                id='marketingCollaboration'
                              >
                                <div>
                                  <input
                                    type='checkbox'
                                    id='Marketing Collaboration'
                                    className={
                                      theme.palette.mode === 'light'
                                        ? 'ant-input'
                                        : 'ant-input ant-input-status-success contactUsForm_darkInput___8llQ'
                                    }
                                    value=''
                                  />
                                </div>
                                Marketing Collaboration
                              </label>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className='contactUsForm_checkboxes__qSHb4'>
                    <div className='ant-form-item'>
                      <div className='ant-row ant-form-item-row'>
                        <div className='ant-col ant-form-item-control'>
                          <div className='ant-form-item-control-input'>
                            <div className='ant-form-item-control-input-content'>
                              <label
                                htmlFor='Hire Remote Developers'
                                className={
                                  theme.palette.mode === 'light'
                                    ? 'contactUsForm_light__TPk43'
                                    : 'contactUsForm_light__TPk43 contactUsForm_dark__73jND'
                                }
                                id='hireRemoteDevelopers'
                              >
                                <div>
                                  <input
                                    type='checkbox'
                                    id='Hire Remote Developers'
                                    className={
                                      theme.palette.mode === 'light'
                                        ? 'ant-input'
                                        : 'ant-input ant-input-status-success contactUsForm_darkInput___8llQ'
                                    }
                                    value=''
                                  />
                                </div>
                                Hire Remote Developers
                              </label>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className='ant-form-item'>
                      <div className='ant-row ant-form-item-row'>
                        <div className='ant-col ant-form-item-control'>
                          <div className='ant-form-item-control-input'>
                            <div className='ant-form-item-control-input-content'>
                              <label
                                htmlFor='Other'
                                className={
                                  theme.palette.mode === 'light'
                                    ? 'contactUsForm_light__TPk43'
                                    : 'contactUsForm_light__TPk43 contactUsForm_dark__73jND'
                                }
                                id='other'
                              >
                                <div>
                                  <input
                                    type='checkbox'
                                    id='Other'
                                    className={
                                      theme.palette.mode === 'light'
                                        ? 'ant-input'
                                        : 'ant-input ant-input-status-success contactUsForm_darkInput___8llQ'
                                    }
                                    value=''
                                  />
                                </div>
                                Other
                              </label>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className='contactUsForm_recaptcha__xqO7a'>
                <div>
                  <div style={{ width: '304px', height: '78px' }}>
                    <div>
                      <iframe
                        title='reCAPTCHA'
                        width='304'
                        height='78'
                        role='presentation'
                        name='a-elribuiaodvv'
                        frameBorder='0'
                        scrolling='no'
                        sandbox='allow-forms allow-popups allow-same-origin allow-scripts allow-top-navigation allow-modals allow-popups-to-escape-sandbox allow-storage-access-by-user-activation'
                        src='https://www.google.com/recaptcha/api2/anchor?ar=1&amp;k=6LeU0pseAAAAAHCfZdMR-wUNrzAkdpYiApCbbPxV&amp;co=aHR0cHM6Ly9zb2xpY3kubmV0OjQ0Mw..&amp;hl=en&amp;type=image&amp;v=Hq4JZivTyQ7GP8Kt571Tzodj&amp;theme=light&amp;size=normal&amp;badge=bottomright&amp;cb=r26lzbo6yfz2'
                      ></iframe>
                    </div>
                    <textarea
                      id='g-recaptcha-response-7'
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
                  <iframe title='none' style={{ display: 'none' }}></iframe>
                </div>
              </div>
              <div className='contactUsForm_subBox__iRizC'>
                <div>
                  <button
                    type='submit'
                    className='ant-btn ant-btn-default button_btn__XHL7T contactUsForm_lightButtonDisable__DTFuU button_light__M4f83 button_direction-row__QRu0d'
                    disabled=''
                  >
                    <p>Submit</p>
                  </button>
                </div>
              </div>
            </form>
          </div>
          <div className='contactUsForm_detail__JV4Iq'>
            <span style={ImageDivSpanStyle1}>
              <span style={ImageDivSpanSpanStyle1}>
                <img
                  alt=''
                  aria-hidden='true'
                  src='data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%27300%27%20height=%27210%27/%3e'
                  style={ImageDivSpanSpanImgStyle2}
                  data-xblocker='passed'
                />
              </span>
              <img
                alt='/icons/contactIcons/illustration-dark.svg'
                draggable='false'
                srcSet='https://ik.imagekit.io/2zlgs27bjo/public/image/contact-us.svg?tr=w-300,q-100 1x, https://ik.imagekit.io/2zlgs27bjo/public/image/contact-us.svg?tr=w-300,q-100 2x'
                src='https://ik.imagekit.io/2zlgs27bjo/public/image/contact-us.svg?tr=w-300,q-100'
                decoding='async'
                data-nimg='intrinsic'
                style={ImageDivSpanImgStyle3}
                data-xblocker='passed'
              />
            </span>
            <div className='contactUsForm_detailInfoBox__DVWzP'>
              <div className='contactUsForm_contactSection__V3Gtk'></div>
              <div className='contactUsForm_contactSection__V3Gtk'>
                <div>
                  <div
                    className={
                      theme.palette.mode === 'light'
                        ? 'contactUsForm_detailInfo__v9Vaz'
                        : 'contactUsForm_detailInfo__v9Vaz contactUsForm_dark__73jND'
                    }
                  >
                    <div className='contactUsForm_imgBox__VB03W'>
                      <span style={ImageDivSpanStyle1}>
                        <span style={ImageDivSpanSpanStyle1}>
                          <img
                            alt=''
                            aria-hidden='true'
                            src='data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%2740%27%20height=%2740%27/%3e'
                            style={ImageDivSpanSpanImgStyle1}
                          />
                        </span>
                        <img
                          alt='/contactIcons/mail.svg'
                          draggable='false'
                          srcSet='https://ik.imagekit.io/2zlgs27bjo/public/icons//contactIcons/mail.svg?tr=w-40,q-100 1x, https://ik.imagekit.io/2zlgs27bjo/public/icons//contactIcons/mail.svg?tr=w-40,q-100 2x'
                          src='https://ik.imagekit.io/2zlgs27bjo/public/icons//contactIcons/mail.svg?tr=w-40,q-100'
                          decoding='async'
                          data-nimg='intrinsic'
                          style={ImageDivSpanImgStyle2}
                        />
                      </span>
                    </div>
                    <p>contact@solicy.net</p>
                  </div>
                </div>
                <div className='contactUsForm_copyIcon__vo9Hx'>
                  <span style={ImageDivSpanStyle1}>
                    <span style={ImageDivSpanSpanStyle1}>
                      <img
                        alt=''
                        aria-hidden='true'
                        src='data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%2715%27%20height=%2720%27/%3e'
                        style={ImageDivSpanSpanImgStyle1}
                      />
                    </span>
                    <img
                      alt='copy-new.svg'
                      draggable='false'
                      srcSet='https://ik.imagekit.io/2zlgs27bjo/public/icons/copy-new.svg?tr=w-15,q-100 1x, https://ik.imagekit.io/2zlgs27bjo/public/icons/copy-new.svg?tr=w-15,q-100 2x'
                      src='https://ik.imagekit.io/2zlgs27bjo/public/icons/copy-new.svg?tr=w-15,q-100'
                      decoding='async'
                      data-nimg='intrinsic'
                      style={ImageDivSpanImgStyle2}
                    />
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default GetInTouch

import { useTheme } from '@mui/system'
import {
  ImageDivSpanStyle1,
  ImageDivSpanSpanStyle1,
  ImageDivSpanSpanImgStyle1,
  ImageDivSpanSpanImgStyle2,
  ImageDivSpanImgStyle2,
  ImageDivSpanImgStyle3
} from '../../BaseCss'

function PortfolioOurWorks () {
  const theme = useTheme()

  return (
    <div className='ourWorks_container__AxlDU ourWorks_containerDark__v9BT5'>
      <div className='ourWorks_ourWorksContainer__we3i1'>
        <div className='ourWorks_title__Dv3dE'>
          <div className='title_titleContainer__SvQXY'>
            <div
              className={
                theme.palette.mode === 'dark'
                  ? 'title_title__mdTgq title_titleDark__uzlqO'
                  : 'title_title__mdTgq'
              }
            >
              <span className='title_title__mdTgq'>Our Works</span>
            </div>
          </div>
        </div>
        <div className='ourWorks_ourWorksMobile__iQU4A'>
          <span style={ImageDivSpanStyle1}>
            <span style={ImageDivSpanSpanStyle1}>
              <img
                alt=''
                aria-hidden='true'
                src='data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%27247%27%20height=%2755%27/%3e'
                style={ImageDivSpanSpanImgStyle1}
              />
            </span>
            {theme.palette.mode === 'dark' ? (
              <img
                alt='/portfolio/dao-logo.svg'
                draggable='false'
                srcSet='https://ik.imagekit.io/2zlgs27bjo/public/image/portfolio/dark/dao-logo-dark.svg?tr=w-247,q-100 1x, https://ik.imagekit.io/2zlgs27bjo/public/image/portfolio/dark/dao-logo-dark.svg?tr=w-247,q-100 2x'
                src='https://ik.imagekit.io/2zlgs27bjo/public/image/portfolio/dark/dao-logo-dark.svg?tr=w-247,q-100'
                decoding='async'
                data-nimg='intrinsic'
                className='ourWorks_logoImage__UQuzg'
                style={ImageDivSpanImgStyle2}
              />
            ) : (
              <img
                alt='/portfolio/dao-logo.svg'
                draggable='false'
                srcSet='https://ik.imagekit.io/2zlgs27bjo/public/image/portfolio/dao-logo.svg?tr=w-247,q-100 1x, https://ik.imagekit.io/2zlgs27bjo/public/image/portfolio/dao-logo.svg?tr=w-247,q-100 2x'
                src='https://ik.imagekit.io/2zlgs27bjo/public/image/portfolio/dao-logo.svg?tr=w-247,q-100'
                decoding='async'
                data-nimg='intrinsic'
                className='ourWorks_logoImage__UQuzg'
                style={ImageDivSpanImgStyle2}
              />
            )}
          </span>
        </div>
        <div className='undefined ourWorks_ourWorks__kX339 ourWorks_ourWorksCenter__nszn1'>
          <div className='ourWorks_imageContainer__Ny1IS'>
            <span style={ImageDivSpanStyle1}>
              <span style={ImageDivSpanSpanStyle1}>
                <img
                  alt=''
                  aria-hidden='true'
                  src='data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%27820%27%20height=%27425%27/%3e'
                  style={ImageDivSpanSpanImgStyle2}
                  data-xblocker='passed'
                />
              </span>
              <img
                alt='/portfolio/tr:q-100/dao.png'
                draggable='false'
                srcSet='https://ik.imagekit.io/2zlgs27bjo/public/image/portfolio/tr:q-100/dao.png?tr=w-820,q-100 1x, https://ik.imagekit.io/2zlgs27bjo/public/image/portfolio/tr:q-100/dao.png?tr=w-820,q-100 2x'
                src='https://ik.imagekit.io/2zlgs27bjo/public/image/portfolio/tr:q-100/dao.png?tr=w-820,q-100'
                decoding='async'
                data-nimg='intrinsic'
                style={ImageDivSpanImgStyle3}
                data-xblocker='passed'
              />
            </span>
          </div>
          <div className='ourWorks_description__Zxype'>
            <div className='ourWorks_ourWorksWeb__14L4F'>
              <span style={ImageDivSpanStyle1}>
                <span style={ImageDivSpanSpanStyle1}>
                  <img
                    alt=''
                    aria-hidden='true'
                    src='data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%27247%27%20height=%2755%27/%3e'
                    style={ImageDivSpanSpanImgStyle1}
                  />
                </span>
                {theme.palette.mode === 'dark' ? (
                  <img
                    alt='/portfolio/dao-logo.svg'
                    draggable='false'
                    srcSet='https://ik.imagekit.io/2zlgs27bjo/public/image/portfolio/dark/dao-logo-dark.svg?tr=w-247,q-100 1x, https://ik.imagekit.io/2zlgs27bjo/public/image/portfolio/dark/dao-logo-dark.svg?tr=w-247,q-100 2x'
                    src='https://ik.imagekit.io/2zlgs27bjo/public/image/portfolio/dark/dao-logo-dark.svg?tr=w-247,q-100'
                    decoding='async'
                    data-nimg='intrinsic'
                    className='ourWorks_logoImage__UQuzg'
                    style={ImageDivSpanImgStyle2}
                  />
                ) : (
                  <img
                    alt='/portfolio/dao-logo.svg'
                    draggable='false'
                    src='https://ik.imagekit.io/2zlgs27bjo/public/image/portfolio/dao-logo.svg?tr=w-247,q-100'
                    decoding='async'
                    data-nimg='intrinsic'
                    className='ourWorks_logoImage__UQuzg'
                    style={ImageDivSpanImgStyle2}
                    srcSet='https://ik.imagekit.io/2zlgs27bjo/public/image/portfolio/dao-logo.svg?tr=w-247,q-100 1x, https://ik.imagekit.io/2zlgs27bjo/public/image/portfolio/dao-logo.svg?tr=w-247,q-100 2x'
                  />
                )}
              </span>
            </div>
            <p
              className='ourWorks_descriptionText__16qVs'
              style={{ margin: '16px 0px' }}
            >
              <b>DAO Maker</b> is a growth technologies provider that creates
              SaaS solutions for nascent and growing crypto startups. Its
              flagship product is the DAO Pad, a multi-investment platform that
              allows DAO token holders to participate in early-stage token sales
              for stringently vetted upcoming projects. It stands behind this
              year’s most successful projects — including Orion Protocol, My
              Neighbor Alice, LaunchX and DAFI Protocol.
            </p>
            <div>
              <div className='ourWorks_techStackContainer__aunf8'>
                <p>Tech Stack:</p>
                <div className='ourWorks_techStack__SbVrG undefined'>
                  <span style={ImageDivSpanStyle1}>
                    <span style={ImageDivSpanSpanStyle1}>
                      <img
                        alt=''
                        aria-hidden='true'
                        src='data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%2733%27%20height=%2723%27/%3e'
                        style={ImageDivSpanSpanImgStyle1}
                      />
                    </span>
                    <img
                      alt='/portfolio/nodejs-logo-new.svg'
                      draggable='false'
                      srcSet='https://ik.imagekit.io/2zlgs27bjo/public/image/portfolio/nodejs-logo-new.svg?tr=w-33,q-100 1x, https://ik.imagekit.io/2zlgs27bjo/public/image/portfolio/nodejs-logo-new.svg?tr=w-33,q-100 2x'
                      src='https://ik.imagekit.io/2zlgs27bjo/public/image/portfolio/nodejs-logo-new.svg?tr=w-33,q-100'
                      decoding='async'
                      data-nimg='intrinsic'
                      className='ourWorks_iconImage__fxkt8'
                      style={ImageDivSpanImgStyle2}
                    />
                  </span>
                </div>
                <div className='ourWorks_techStack__SbVrG undefined'>
                  <span style={ImageDivSpanStyle1}>
                    <span style={ImageDivSpanSpanStyle1}>
                      <img
                        alt=''
                        aria-hidden='true'
                        src='data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%2733%27%20height=%2723%27/%3e'
                        style={ImageDivSpanSpanImgStyle1}
                      />
                    </span>
                    <img
                      alt='/portfolio/angular-logo-new.svg'
                      draggable='false'
                      srcSet='https://ik.imagekit.io/2zlgs27bjo/public/image/portfolio/angular-logo-new.svg?tr=w-33,q-100 1x, https://ik.imagekit.io/2zlgs27bjo/public/image/portfolio/angular-logo-new.svg?tr=w-33,q-100 2x'
                      src='https://ik.imagekit.io/2zlgs27bjo/public/image/portfolio/angular-logo-new.svg?tr=w-33,q-100'
                      decoding='async'
                      data-nimg='intrinsic'
                      className='ourWorks_iconImage__fxkt8'
                      style={ImageDivSpanImgStyle2}
                    />
                  </span>
                </div>
              </div>
              <div className='ourWorks_techStackContainer__aunf8'>
                <p>Blockchain:: </p>
                <div className='ourWorks_techStack__SbVrG undefined'>
                  <span style={ImageDivSpanStyle1}>
                    <span style={ImageDivSpanSpanStyle1}>
                      <img
                        alt=''
                        aria-hidden='true'
                        src='data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%2733%27%20height=%2723%27/%3e'
                        style={ImageDivSpanSpanImgStyle1}
                      />
                    </span>
                    <img
                      alt='/portfolio/ethereum-logo-new.svg'
                      draggable='false'
                      srcSet='https://ik.imagekit.io/2zlgs27bjo/public/image/portfolio/ethereum-logo-new.svg?tr=w-33,q-100 1x, https://ik.imagekit.io/2zlgs27bjo/public/image/portfolio/ethereum-logo-new.svg?tr=w-33,q-100 2x'
                      src='https://ik.imagekit.io/2zlgs27bjo/public/image/portfolio/ethereum-logo-new.svg?tr=w-33,q-100'
                      decoding='async'
                      data-nimg='intrinsic'
                      className='ourWorks_iconImage__fxkt8'
                      style={ImageDivSpanImgStyle2}
                    />
                  </span>
                </div>
                <div className='ourWorks_techStack__SbVrG undefined'>
                  <span style={ImageDivSpanStyle1}>
                    <span style={ImageDivSpanSpanStyle1}>
                      <img
                        alt=''
                        aria-hidden='true'
                        src='data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%2733%27%20height=%2723%27/%3e'
                        style={ImageDivSpanSpanImgStyle1}
                      />
                    </span>
                    <img
                      alt='/portfolio/binance-logo-new.svg'
                      draggable='false'
                      srcSet='https://ik.imagekit.io/2zlgs27bjo/public/image/portfolio/binance-logo-new.svg?tr=w-33,q-100 1x, https://ik.imagekit.io/2zlgs27bjo/public/image/portfolio/binance-logo-new.svg?tr=w-33,q-100 2x'
                      src='https://ik.imagekit.io/2zlgs27bjo/public/image/portfolio/binance-logo-new.svg?tr=w-33,q-100'
                      decoding='async'
                      data-nimg='intrinsic'
                      className='ourWorks_iconImage__fxkt8'
                      style={ImageDivSpanImgStyle2}
                    />
                  </span>
                </div>
              </div>
            </div>
            <a
              href='https://daomaker.com'
              target='_blank'
              rel='noreferrer noreferrer nofollow'
              className={
                theme.palette.mode === 'dark'
                  ? 'ant-btn ant-btn-default button_btn__XHL7T ourWorks_projectBtn__hj4Gx ourWorks_dark__c4aW6 button_dark__1020G button_direction-row__QRu0d'
                  : 'ant-btn ant-btn-default button_btn__XHL7T ourWorks_projectBtn__hj4Gx false button_light__M4f83 button_direction-row__QRu0d'
              }
            >
              <p>View Project</p>
            </a>
          </div>
        </div>
        <div className='ourWorks_ourWorksMobile__iQU4A'>
          <span style={ImageDivSpanStyle1}>
            <span style={ImageDivSpanSpanStyle1}>
              <img
                alt=''
                aria-hidden='true'
                src='data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%27355%27%20height=%2760%27/%3e'
                style={ImageDivSpanSpanImgStyle1}
              />
            </span>
            {theme.palette.mode === 'dark' ? (
              <img
                alt='/portfolio/ethermail_logo.svg'
                draggable='false'
                srcSet='https://ik.imagekit.io/2zlgs27bjo/public/image/portfolio/dark/ethermail_logo.svg?tr=w-355,q-100 1x, https://ik.imagekit.io/2zlgs27bjo/public/image/portfolio/dark/ethermail_logo.svg?tr=w-355,q-100 2x'
                src='https://ik.imagekit.io/2zlgs27bjo/public/image/portfolio/dark/ethermail_logo.svg?tr=w-355,q-100'
                decoding='async'
                data-nimg='intrinsic'
                className='ourWorks_logoImage__UQuzg'
                style={ImageDivSpanImgStyle2}
              />
            ) : (
              <img
                alt='/portfolio/ethermail_logo.svg'
                draggable='false'
                src='https://ik.imagekit.io/2zlgs27bjo/public/image/portfolio/ethermail_logo.svg?tr=w-355,q-100'
                decoding='async'
                data-nimg='intrinsic'
                className='ourWorks_logoImage__UQuzg'
                style={ImageDivSpanImgStyle2}
                srcSet='https://ik.imagekit.io/2zlgs27bjo/public/image/portfolio/ethermail_logo.svg?tr=w-355,q-100 1x, https://ik.imagekit.io/2zlgs27bjo/public/image/portfolio/ethermail_logo.svg?tr=w-355,q-100 2x'
              />
            )}
          </span>
        </div>
        <div className='undefined ourWorks_ourWorks__kX339 ourWorks_ourWorksRowReverse___UTmy'>
          <div className='ourWorks_imageContainer__Ny1IS'>
            <span style={ImageDivSpanStyle1}>
              <span style={ImageDivSpanSpanStyle1}>
                <img
                  alt=''
                  aria-hidden='true'
                  src='data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%27820%27%20height=%27425%27/%3e'
                  style={ImageDivSpanSpanImgStyle2}
                  data-xblocker='passed'
                />
              </span>
              <img
                alt='/portfolio/tr:q-100/ethermail.png'
                draggable='false'
                srcSet='https://ik.imagekit.io/2zlgs27bjo/public/image/portfolio/tr:q-100/ethermail.png?tr=w-820,q-100 1x, https://ik.imagekit.io/2zlgs27bjo/public/image/portfolio/tr:q-100/ethermail.png?tr=w-820,q-100 2x'
                src='https://ik.imagekit.io/2zlgs27bjo/public/image/portfolio/tr:q-100/ethermail.png?tr=w-820,q-100'
                decoding='async'
                data-nimg='intrinsic'
                style={ImageDivSpanImgStyle3}
                data-xblocker='passed'
              />
            </span>
          </div>
          <div className='ourWorks_description__Zxype'>
            <div className='ourWorks_ourWorksWeb__14L4F'>
              <span style={ImageDivSpanStyle1}>
                <span style={ImageDivSpanSpanStyle1}>
                  <img
                    alt=''
                    aria-hidden='true'
                    src='data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%27355%27%20height=%2760%27/%3e'
                    style={ImageDivSpanSpanImgStyle1}
                  />
                </span>
                {theme.palette.mode === 'dark' ? (
                  <img
                    alt='/portfolio/ethermail_logo.svg'
                    draggable='false'
                    srcSet='https://ik.imagekit.io/2zlgs27bjo/public/image/portfolio/dark/ethermail_logo.svg?tr=w-355,q-100 1x, https://ik.imagekit.io/2zlgs27bjo/public/image/portfolio/dark/ethermail_logo.svg?tr=w-355,q-100 2x'
                    src='https://ik.imagekit.io/2zlgs27bjo/public/image/portfolio/dark/ethermail_logo.svg?tr=w-355,q-100'
                    decoding='async'
                    data-nimg='intrinsic'
                    className='ourWorks_logoImage__UQuzg'
                    style={ImageDivSpanImgStyle2}
                  />
                ) : (
                  <img
                    alt='/portfolio/ethermail_logo.svg'
                    draggable='false'
                    src='https://ik.imagekit.io/2zlgs27bjo/public/image/portfolio/ethermail_logo.svg?tr=w-355,q-100'
                    decoding='async'
                    data-nimg='intrinsic'
                    className='ourWorks_logoImage__UQuzg'
                    style={ImageDivSpanImgStyle2}
                    srcSet='https://ik.imagekit.io/2zlgs27bjo/public/image/portfolio/ethermail_logo.svg?tr=w-355,q-100 1x, https://ik.imagekit.io/2zlgs27bjo/public/image/portfolio/ethermail_logo.svg?tr=w-355,q-100 2x'
                  />
                )}
              </span>
            </div>
            <p
              className='ourWorks_descriptionText__16qVs'
              style={{ margin: '16px 0px' }}
            >
              <b>EtherMail</b> is redefining email for Web3, setting the
              standard for anonymous and encrypted wallet-to-wallet
              communication. They are building the bridge between web 2.0 and
              web 3.0 email communication, bringing back to users full
              ownership, control and sovereignty of their inbox.
            </p>
            <div>
              <div className='ourWorks_techStackContainer__aunf8'>
                <p>Tech Stack:</p>
                <div className='ourWorks_techStack__SbVrG undefined'>
                  <span style={ImageDivSpanStyle1}>
                    <span style={ImageDivSpanSpanStyle1}>
                      <img
                        alt=''
                        aria-hidden='true'
                        src='data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%2733%27%20height=%2723%27/%3e'
                        style={ImageDivSpanSpanImgStyle1}
                      />
                    </span>
                    <img
                      alt='/portfolio/vuejs-logo-new.svg'
                      draggable='false'
                      srcSet='https://ik.imagekit.io/2zlgs27bjo/public/image/portfolio/vuejs-logo-new.svg?tr=w-33,q-100 1x, https://ik.imagekit.io/2zlgs27bjo/public/image/portfolio/vuejs-logo-new.svg?tr=w-33,q-100 2x'
                      src='https://ik.imagekit.io/2zlgs27bjo/public/image/portfolio/vuejs-logo-new.svg?tr=w-33,q-100'
                      decoding='async'
                      data-nimg='intrinsic'
                      className='ourWorks_iconImage__fxkt8'
                      style={ImageDivSpanImgStyle2}
                    />
                  </span>
                </div>
                <div className='ourWorks_techStack__SbVrG undefined'>
                  <span style={ImageDivSpanStyle1}>
                    <span style={ImageDivSpanSpanStyle1}>
                      <img
                        alt=''
                        aria-hidden='true'
                        src='data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%2733%27%20height=%2723%27/%3e'
                        style={ImageDivSpanSpanImgStyle1}
                      />
                    </span>
                    <img
                      alt='/portfolio/nodejs-logo-new.svg'
                      draggable='false'
                      srcSet='https://ik.imagekit.io/2zlgs27bjo/public/image/portfolio/nodejs-logo-new.svg?tr=w-33,q-100 1x, https://ik.imagekit.io/2zlgs27bjo/public/image/portfolio/nodejs-logo-new.svg?tr=w-33,q-100 2x'
                      src='https://ik.imagekit.io/2zlgs27bjo/public/image/portfolio/nodejs-logo-new.svg?tr=w-33,q-100'
                      decoding='async'
                      data-nimg='intrinsic'
                      className='ourWorks_iconImage__fxkt8'
                      style={ImageDivSpanImgStyle2}
                    />
                  </span>
                </div>
                <div className='ourWorks_techStack__SbVrG undefined'>
                  <span style={ImageDivSpanStyle1}>
                    <span style={ImageDivSpanSpanStyle1}>
                      <img
                        alt=''
                        aria-hidden='true'
                        src='data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%2733%27%20height=%2723%27/%3e'
                        style={ImageDivSpanSpanImgStyle1}
                      />
                    </span>
                    <img
                      alt='/portfolio/php-logo-new.svg'
                      draggable='false'
                      srcSet='https://ik.imagekit.io/2zlgs27bjo/public/image/portfolio/php-logo-new.svg?tr=w-33,q-100 1x, https://ik.imagekit.io/2zlgs27bjo/public/image/portfolio/php-logo-new.svg?tr=w-33,q-100 2x'
                      src='https://ik.imagekit.io/2zlgs27bjo/public/image/portfolio/php-logo-new.svg?tr=w-33,q-100'
                      decoding='async'
                      data-nimg='intrinsic'
                      className='ourWorks_iconImage__fxkt8'
                      style={ImageDivSpanImgStyle2}
                    />
                  </span>
                </div>
              </div>
              <div className='ourWorks_techStackContainer__aunf8'>
                <p>Blockchain:: </p>
                <div className='ourWorks_techStack__SbVrG undefined'>
                  <span style={ImageDivSpanStyle1}>
                    <span style={ImageDivSpanSpanStyle1}>
                      <img
                        alt=''
                        aria-hidden='true'
                        src='data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%2733%27%20height=%2723%27/%3e'
                        style={ImageDivSpanSpanImgStyle1}
                      />
                    </span>
                    <img
                      alt='/portfolio/ethereum-logo-new.svg'
                      draggable='false'
                      srcSet='https://ik.imagekit.io/2zlgs27bjo/public/image/portfolio/ethereum-logo-new.svg?tr=w-33,q-100 1x, https://ik.imagekit.io/2zlgs27bjo/public/image/portfolio/ethereum-logo-new.svg?tr=w-33,q-100 2x'
                      src='https://ik.imagekit.io/2zlgs27bjo/public/image/portfolio/ethereum-logo-new.svg?tr=w-33,q-100'
                      decoding='async'
                      data-nimg='intrinsic'
                      className='ourWorks_iconImage__fxkt8'
                      style={ImageDivSpanImgStyle2}
                    />
                  </span>
                </div>
                <div className='ourWorks_techStack__SbVrG undefined'>
                  <span style={ImageDivSpanStyle1}>
                    <span style={ImageDivSpanSpanStyle1}>
                      <img
                        alt=''
                        aria-hidden='true'
                        src='data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%2733%27%20height=%2723%27/%3e'
                        style={ImageDivSpanSpanImgStyle1}
                      />
                    </span>
                    <img
                      alt='/portfolio/trx-logo-new.svg'
                      draggable='false'
                      srcSet='https://ik.imagekit.io/2zlgs27bjo/public/image/portfolio/trx-logo-new.svg?tr=w-33,q-100 1x, https://ik.imagekit.io/2zlgs27bjo/public/image/portfolio/trx-logo-new.svg?tr=w-33,q-100 2x'
                      src='https://ik.imagekit.io/2zlgs27bjo/public/image/portfolio/trx-logo-new.svg?tr=w-33,q-100'
                      decoding='async'
                      data-nimg='intrinsic'
                      className='ourWorks_iconImage__fxkt8'
                      style={ImageDivSpanImgStyle2}
                    />
                  </span>
                </div>
              </div>
            </div>
            <a
              href='https://ethermail.io'
              target='_blank'
              rel='noreferrer noreferrer nofollow'
              className={
                theme.palette.mode === 'dark'
                  ? 'ant-btn ant-btn-default button_btn__XHL7T ourWorks_projectBtn__hj4Gx ourWorks_dark__c4aW6 button_dark__1020G button_direction-row__QRu0d'
                  : 'ant-btn ant-btn-default button_btn__XHL7T ourWorks_projectBtn__hj4Gx false button_light__M4f83 button_direction-row__QRu0d'
              }
            >
              <p>View Project</p>
            </a>
          </div>
        </div>
        <div className='ourWorks_ourWorksMobile__iQU4A'>
          <span style={ImageDivSpanStyle1}>
            <span style={ImageDivSpanSpanStyle1}>
              <img
                alt=''
                aria-hidden='true'
                src='data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%27292%27%20height=%2776%27/%3e'
                style={ImageDivSpanSpanImgStyle1}
              />
            </span>
            {theme.palette.mode === 'dark' ? (
              <img
                alt='/portfolio/cool-cats-logo-new.svg'
                draggable='false'
                srcSet='https://ik.imagekit.io/2zlgs27bjo/public/image/portfolio/dark/cool-cats-logo-new.svg?tr=w-292,q-100 1x, https://ik.imagekit.io/2zlgs27bjo/public/image/portfolio/dark/cool-cats-logo-new.svg?tr=w-292,q-100 2x'
                src='https://ik.imagekit.io/2zlgs27bjo/public/image/portfolio/dark/cool-cats-logo-new.svg?tr=w-292,q-100'
                decoding='async'
                data-nimg='intrinsic'
                className='ourWorks_logoImage__UQuzg'
                style={ImageDivSpanImgStyle2}
              />
            ) : (
              <img
                alt='/portfolio/cool-cats-logo-new.svg'
                draggable='false'
                src='https://ik.imagekit.io/2zlgs27bjo/public/image/portfolio/cool-cats-logo-new.svg?tr=w-292,q-100'
                decoding='async'
                data-nimg='intrinsic'
                className='ourWorks_logoImage__UQuzg'
                style={ImageDivSpanImgStyle2}
                srcSet='https://ik.imagekit.io/2zlgs27bjo/public/image/portfolio/cool-cats-logo-new.svg?tr=w-292,q-100 1x, https://ik.imagekit.io/2zlgs27bjo/public/image/portfolio/cool-cats-logo-new.svg?tr=w-292,q-100 2x'
              />
            )}
          </span>
        </div>
        <div className='undefined ourWorks_ourWorks__kX339 ourWorks_ourWorksCenter__nszn1'>
          <div className='ourWorks_imageContainer__Ny1IS'>
            <span style={ImageDivSpanStyle1}>
              <span style={ImageDivSpanSpanStyle1}>
                <img
                  alt=''
                  aria-hidden='true'
                  src='data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%27820%27%20height=%27425%27/%3e'
                  style={ImageDivSpanSpanImgStyle2}
                  data-xblocker='passed'
                />
              </span>
              <img
                alt='/portfolio/tr:q-100/coolcats.png'
                draggable='false'
                srcSet='https://ik.imagekit.io/2zlgs27bjo/public/image/portfolio/tr:q-100/coolcats.png?tr=w-820,q-100 1x, https://ik.imagekit.io/2zlgs27bjo/public/image/portfolio/tr:q-100/coolcats.png?tr=w-820,q-100 2x'
                src='https://ik.imagekit.io/2zlgs27bjo/public/image/portfolio/tr:q-100/coolcats.png?tr=w-820,q-100'
                decoding='async'
                data-nimg='intrinsic'
                style={ImageDivSpanImgStyle3}
                data-xblocker='passed'
              />
            </span>
          </div>
          <div className='ourWorks_description__Zxype'>
            <div className='ourWorks_ourWorksWeb__14L4F'>
              <span style={ImageDivSpanStyle1}>
                <span style={ImageDivSpanSpanStyle1}>
                  <img
                    alt=''
                    aria-hidden='true'
                    src='data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%27292%27%20height=%2776%27/%3e'
                    style={ImageDivSpanSpanImgStyle1}
                  />
                </span>
                {theme.palette.mode === 'dark' ? (
                  <img
                    alt='/portfolio/cool-cats-logo-new.svg'
                    draggable='false'
                    srcSet='https://ik.imagekit.io/2zlgs27bjo/public/image/portfolio/dark/cool-cats-logo-new.svg?tr=w-292,q-100 1x, https://ik.imagekit.io/2zlgs27bjo/public/image/portfolio/dark/cool-cats-logo-new.svg?tr=w-292,q-100 2x'
                    src='https://ik.imagekit.io/2zlgs27bjo/public/image/portfolio/dark/cool-cats-logo-new.svg?tr=w-292,q-100'
                    decoding='async'
                    data-nimg='intrinsic'
                    className='ourWorks_logoImage__UQuzg'
                    style={ImageDivSpanImgStyle2}
                  />
                ) : (
                  <img
                    alt='/portfolio/cool-cats-logo-new.svg'
                    draggable='false'
                    src='https://ik.imagekit.io/2zlgs27bjo/public/image/portfolio/cool-cats-logo-new.svg?tr=w-292,q-100'
                    decoding='async'
                    data-nimg='intrinsic'
                    className='ourWorks_logoImage__UQuzg'
                    style={ImageDivSpanImgStyle2}
                    srcSet='https://ik.imagekit.io/2zlgs27bjo/public/image/portfolio/cool-cats-logo-new.svg?tr=w-292,q-100 1x, https://ik.imagekit.io/2zlgs27bjo/public/image/portfolio/cool-cats-logo-new.svg?tr=w-292,q-100 2x'
                  />
                )}
              </span>
            </div>
            <p
              className='ourWorks_descriptionText__16qVs'
              style={{ margin: '26px 0px 20px' }}
            >
              <b>Cool Cats</b> are a collection of random-generated NFTs on the
              ETH blockchain.The idea in turning these Cool Cats into NFTs is to
              create an opportunity for the masses to become part of the Cool
              Cat community and help in deciding the development, growth and
              direction of the Cool Cat story and ecosystem.
            </p>
            <div>
              <div className='ourWorks_techStackContainer__aunf8'>
                <p>Tech Stack:</p>
                <div className='ourWorks_techStack__SbVrG undefined'>
                  <span style={ImageDivSpanStyle1}>
                    <span style={ImageDivSpanSpanStyle1}>
                      <img
                        alt=''
                        aria-hidden='true'
                        src='data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%2733%27%20height=%2723%27/%3e'
                        style={ImageDivSpanSpanImgStyle1}
                      />
                    </span>
                    <img
                      alt='/portfolio/nodejs-logo-new.svg'
                      draggable='false'
                      srcSet='https://ik.imagekit.io/2zlgs27bjo/public/image/portfolio/nodejs-logo-new.svg?tr=w-33,q-100 1x, https://ik.imagekit.io/2zlgs27bjo/public/image/portfolio/nodejs-logo-new.svg?tr=w-33,q-100 2x'
                      src='https://ik.imagekit.io/2zlgs27bjo/public/image/portfolio/nodejs-logo-new.svg?tr=w-33,q-100'
                      decoding='async'
                      data-nimg='intrinsic'
                      className='ourWorks_iconImage__fxkt8'
                      style={ImageDivSpanImgStyle2}
                    />
                  </span>
                </div>
                <div className='ourWorks_techStack__SbVrG undefined'>
                  <span style={ImageDivSpanStyle1}>
                    <span style={ImageDivSpanSpanStyle1}>
                      <img
                        alt=''
                        aria-hidden='true'
                        src='data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%2733%27%20height=%2723%27/%3e'
                        style={ImageDivSpanSpanImgStyle1}
                      />
                    </span>
                    <img
                      alt='/portfolio/react-logo-new.svg'
                      draggable='false'
                      srcSet='https://ik.imagekit.io/2zlgs27bjo/public/image/portfolio/react-logo-new.svg?tr=w-33,q-100 1x, https://ik.imagekit.io/2zlgs27bjo/public/image/portfolio/react-logo-new.svg?tr=w-33,q-100 2x'
                      src='https://ik.imagekit.io/2zlgs27bjo/public/image/portfolio/react-logo-new.svg?tr=w-33,q-100'
                      decoding='async'
                      data-nimg='intrinsic'
                      className='ourWorks_iconImage__fxkt8'
                      style={ImageDivSpanImgStyle2}
                    />
                  </span>
                </div>
              </div>
              <div className='ourWorks_techStackContainer__aunf8'>
                <p>Blockchain: : </p>
                <div className='ourWorks_techStack__SbVrG undefined'>
                  <span style={ImageDivSpanStyle1}>
                    <span style={ImageDivSpanSpanStyle1}>
                      <img
                        alt=''
                        aria-hidden='true'
                        src='data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%2733%27%20height=%2723%27/%3e'
                        style={ImageDivSpanSpanImgStyle1}
                      />
                    </span>
                    <img
                      alt='/portfolio/ethereum-logo-new.svg'
                      draggable='false'
                      srcSet='https://ik.imagekit.io/2zlgs27bjo/public/image/portfolio/ethereum-logo-new.svg?tr=w-33,q-100 1x, https://ik.imagekit.io/2zlgs27bjo/public/image/portfolio/ethereum-logo-new.svg?tr=w-33,q-100 2x'
                      src='https://ik.imagekit.io/2zlgs27bjo/public/image/portfolio/ethereum-logo-new.svg?tr=w-33,q-100'
                      decoding='async'
                      data-nimg='intrinsic'
                      className='ourWorks_iconImage__fxkt8'
                      style={ImageDivSpanImgStyle2}
                    />
                  </span>
                </div>
              </div>
            </div>
            <a
              href='https://www.coolcatsnft.com'
              target='_blank'
              rel='noreferrer noreferrer nofollow'
              className={
                theme.palette.mode === 'dark'
                  ? 'ant-btn ant-btn-default button_btn__XHL7T ourWorks_projectBtn__hj4Gx ourWorks_dark__c4aW6 button_dark__1020G button_direction-row__QRu0d'
                  : 'ant-btn ant-btn-default button_btn__XHL7T ourWorks_projectBtn__hj4Gx false button_light__M4f83 button_direction-row__QRu0d'
              }
            >
              <p>View Project</p>
            </a>
          </div>
        </div>
        <div className='ourWorks_ourWorksMobile__iQU4A'>
          <span style={ImageDivSpanStyle1}>
            <span style={ImageDivSpanSpanStyle1}>
              <img
                alt=''
                aria-hidden='true'
                src='data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%27243%27%20height=%2730%27/%3e'
                style={ImageDivSpanSpanImgStyle1}
              />
            </span>
            {theme.palette.mode === 'dark' ? (
              <img
                alt='/portfolio/pass-phrase-logo.svg'
                draggable='false'
                srcSet='https://ik.imagekit.io/2zlgs27bjo/public/image/portfolio/dark/pass-phrase-logo.svg?tr=w-243,q-100 1x, https://ik.imagekit.io/2zlgs27bjo/public/image/portfolio/dark/pass-phrase-logo.svg?tr=w-243,q-100 2x'
                src='https://ik.imagekit.io/2zlgs27bjo/public/image/portfolio/dark/pass-phrase-logo.svg?tr=w-243,q-100'
                decoding='async'
                data-nimg='intrinsic'
                className='ourWorks_logoImage__UQuzg'
                style={ImageDivSpanImgStyle2}
              />
            ) : (
              <img
                alt='/portfolio/pass-phrase-logo.svg'
                draggable='false'
                src='https://ik.imagekit.io/2zlgs27bjo/public/image/portfolio/pass-phrase-logo.svg?tr=w-243,q-100'
                decoding='async'
                data-nimg='intrinsic'
                className='ourWorks_logoImage__UQuzg'
                style={ImageDivSpanImgStyle2}
                srcSet='https://ik.imagekit.io/2zlgs27bjo/public/image/portfolio/pass-phrase-logo.svg?tr=w-243,q-100 1x, https://ik.imagekit.io/2zlgs27bjo/public/image/portfolio/pass-phrase-logo.svg?tr=w-243,q-100 2x'
              />
            )}
          </span>
        </div>
        <div className='undefined ourWorks_ourWorks__kX339 ourWorks_ourWorksRowReverse___UTmy'>
          <div className='ourWorks_imageContainer__Ny1IS'>
            <span style={ImageDivSpanStyle1}>
              <span style={ImageDivSpanSpanStyle1}>
                <img
                  alt=''
                  aria-hidden='true'
                  src='data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%27820%27%20height=%27425%27/%3e'
                  style={ImageDivSpanSpanImgStyle2}
                  data-xblocker='passed'
                />
              </span>
              <img
                alt='/portfolio/tr:q-100/passphrase.png'
                draggable='false'
                srcSet='https://ik.imagekit.io/2zlgs27bjo/public/image/portfolio/tr:q-100/passphrase.png?tr=w-820,q-100 1x, https://ik.imagekit.io/2zlgs27bjo/public/image/portfolio/tr:q-100/passphrase.png?tr=w-820,q-100 2x'
                src='https://ik.imagekit.io/2zlgs27bjo/public/image/portfolio/tr:q-100/passphrase.png?tr=w-820,q-100'
                decoding='async'
                data-nimg='intrinsic'
                style={ImageDivSpanImgStyle3}
                data-xblocker='passed'
              />
            </span>
          </div>
          <div className='ourWorks_description__Zxype'>
            <div className='ourWorks_ourWorksWeb__14L4F'>
              <span style={ImageDivSpanStyle1}>
                <span style={ImageDivSpanSpanStyle1}>
                  <img
                    alt=''
                    aria-hidden='true'
                    src='data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%27243%27%20height=%2730%27/%3e'
                    style={ImageDivSpanSpanImgStyle1}
                  />
                </span>
                {theme.palette.mode === 'dark' ? (
                  <img
                    alt='/portfolio/pass-phrase-logo.svg'
                    draggable='false'
                    srcSet='https://ik.imagekit.io/2zlgs27bjo/public/image/portfolio/dark/pass-phrase-logo.svg?tr=w-243,q-100 1x, https://ik.imagekit.io/2zlgs27bjo/public/image/portfolio/dark/pass-phrase-logo.svg?tr=w-243,q-100 2x'
                    src='https://ik.imagekit.io/2zlgs27bjo/public/image/portfolio/dark/pass-phrase-logo.svg?tr=w-243,q-100'
                    decoding='async'
                    data-nimg='intrinsic'
                    className='ourWorks_logoImage__UQuzg'
                    style={ImageDivSpanImgStyle2}
                  />
                ) : (
                  <img
                    alt='/portfolio/pass-phrase-logo.svg'
                    draggable='false'
                    src='https://ik.imagekit.io/2zlgs27bjo/public/image/portfolio/pass-phrase-logo.svg?tr=w-243,q-100'
                    decoding='async'
                    data-nimg='intrinsic'
                    className='ourWorks_logoImage__UQuzg'
                    style={ImageDivSpanImgStyle2}
                    srcSet='https://ik.imagekit.io/2zlgs27bjo/public/image/portfolio/pass-phrase-logo.svg?tr=w-243,q-100 1x, https://ik.imagekit.io/2zlgs27bjo/public/image/portfolio/pass-phrase-logo.svg?tr=w-243,q-100 2x'
                  />
                )}
              </span>
            </div>
            <p
              className='ourWorks_descriptionText__16qVs'
              style={{ margin: '26px 0px 20px' }}
            >
              <b>Passphrase NFT</b> is an innovative platform that combines the
              security of passphrase-based encryption with the uniqueness and
              tradability of Non-Fungible Tokens (NFTs). It provides a secure
              and decentralized solution for storing and trading NFTs, ensuring
              the privacy and ownership of digital assets through the use of
              passphrase encryption. Passphrase NFT empowers users to securely
              store their NFTs, manage their collections, and engage in NFT
              trading within a trusted and transparent ecosystem.
            </p>
            <div>
              <div className='ourWorks_techStackContainer__aunf8'>
                <p>Tech Stack:</p>
                <div className='ourWorks_techStack__SbVrG undefined'>
                  <span style={ImageDivSpanStyle1}>
                    <span style={ImageDivSpanSpanStyle1}>
                      <img
                        alt=''
                        aria-hidden='true'
                        src='data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%2733%27%20height=%2723%27/%3e'
                        style={ImageDivSpanSpanImgStyle1}
                      />
                    </span>
                    <img
                      alt='/portfolio/nodejs-logo-new.svg'
                      draggable='false'
                      srcSet='https://ik.imagekit.io/2zlgs27bjo/public/image/portfolio/nodejs-logo-new.svg?tr=w-33,q-100 1x, https://ik.imagekit.io/2zlgs27bjo/public/image/portfolio/nodejs-logo-new.svg?tr=w-33,q-100 2x'
                      src='https://ik.imagekit.io/2zlgs27bjo/public/image/portfolio/nodejs-logo-new.svg?tr=w-33,q-100'
                      decoding='async'
                      data-nimg='intrinsic'
                      className='ourWorks_iconImage__fxkt8'
                      style={ImageDivSpanImgStyle2}
                    />
                  </span>
                </div>
                <div className='ourWorks_techStack__SbVrG undefined'>
                  <span style={ImageDivSpanStyle1}>
                    <span style={ImageDivSpanSpanStyle1}>
                      <img
                        alt=''
                        aria-hidden='true'
                        src='data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%2733%27%20height=%2723%27/%3e'
                        style={ImageDivSpanSpanImgStyle1}
                      />
                    </span>
                    <img
                      alt='/portfolio/react-logo-new.svg'
                      draggable='false'
                      srcSet='https://ik.imagekit.io/2zlgs27bjo/public/image/portfolio/react-logo-new.svg?tr=w-33,q-100 1x, https://ik.imagekit.io/2zlgs27bjo/public/image/portfolio/react-logo-new.svg?tr=w-33,q-100 2x'
                      src='https://ik.imagekit.io/2zlgs27bjo/public/image/portfolio/react-logo-new.svg?tr=w-33,q-100'
                      decoding='async'
                      data-nimg='intrinsic'
                      className='ourWorks_iconImage__fxkt8'
                      style={ImageDivSpanImgStyle2}
                    />
                  </span>
                </div>
                <div
                  className='ourWorks_techStack__SbVrG ourWorks_stackLong___ayt4'
                  style={{ width: '145px', height: '34px' }}
                >
                  <span style={ImageDivSpanStyle1}>
                    <span style={ImageDivSpanSpanStyle1}>
                      <img
                        alt=''
                        aria-hidden='true'
                        src='data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%2733%27%20height=%2723%27/%3e'
                        style={ImageDivSpanSpanImgStyle1}
                      />
                    </span>
                    <img
                      alt='/portfolio/react-native-logo-new.svg'
                      draggable='false'
                      srcSet='https://ik.imagekit.io/2zlgs27bjo/public/image/portfolio/react-native-logo-new.svg?tr=w-33,q-100 1x, https://ik.imagekit.io/2zlgs27bjo/public/image/portfolio/react-native-logo-new.svg?tr=w-33,q-100 2x'
                      src='https://ik.imagekit.io/2zlgs27bjo/public/image/portfolio/react-native-logo-new.svg?tr=w-33,q-100'
                      decoding='async'
                      data-nimg='intrinsic'
                      className='ourWorks_iconImage__fxkt8'
                      style={ImageDivSpanImgStyle2}
                    />
                  </span>
                </div>
              </div>
              <div className='ourWorks_techStackContainer__aunf8'>
                <p>Blockchain: : </p>
                <div className='ourWorks_techStack__SbVrG undefined'>
                  <span style={ImageDivSpanStyle1}>
                    <span style={ImageDivSpanSpanStyle1}>
                      <img
                        alt=''
                        aria-hidden='true'
                        src='data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%2733%27%20height=%2723%27/%3e'
                        style={ImageDivSpanSpanImgStyle1}
                      />
                    </span>
                    <img
                      alt='/portfolio/ethereum-logo-new.svg'
                      draggable='false'
                      srcSet='https://ik.imagekit.io/2zlgs27bjo/public/image/portfolio/ethereum-logo-new.svg?tr=w-33,q-100 1x, https://ik.imagekit.io/2zlgs27bjo/public/image/portfolio/ethereum-logo-new.svg?tr=w-33,q-100 2x'
                      src='https://ik.imagekit.io/2zlgs27bjo/public/image/portfolio/ethereum-logo-new.svg?tr=w-33,q-100'
                      decoding='async'
                      data-nimg='intrinsic'
                      className='ourWorks_iconImage__fxkt8'
                      style={ImageDivSpanImgStyle2}
                    />
                  </span>
                </div>
              </div>
            </div>
            <a
              href='https://www.passphrase.live'
              target='_blank'
              rel='noreferrer noreferrer nofollow'
              className={
                theme.palette.mode === 'dark'
                  ? 'ant-btn ant-btn-default button_btn__XHL7T ourWorks_projectBtn__hj4Gx ourWorks_dark__c4aW6 button_dark__1020G button_direction-row__QRu0d'
                  : 'ant-btn ant-btn-default button_btn__XHL7T ourWorks_projectBtn__hj4Gx false button_light__M4f83 button_direction-row__QRu0d'
              }
            >
              <p>View Project</p>
            </a>
          </div>
        </div>
        <div className='ourWorks_ourWorksMobile__iQU4A'>
          <span style={ImageDivSpanStyle1}>
            <span style={ImageDivSpanSpanStyle1}>
              <img
                alt=''
                aria-hidden='true'
                src='data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%27350%27%20height=%2775%27/%3e'
                style={ImageDivSpanSpanImgStyle1}
              />
            </span>
            {theme.palette.mode === 'dark' ? (
              <img
                alt='/home-icons/passbase.svg'
                draggable='false'
                src='data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7'
                decoding='async'
                data-nimg='intrinsic'
                className='ourWorks_logoImage__UQuzg'
                style={ImageDivSpanImgStyle2}
              />
            ) : (
              <img
                alt='/home-icons/passbase.svg'
                draggable='false'
                src='https://ik.imagekit.io/2zlgs27bjo/public/image/home-icons/passbase.svg?tr=w-350,q-100'
                decoding='async'
                data-nimg='intrinsic'
                className='ourWorks_logoImage__UQuzg'
                style={ImageDivSpanImgStyle2}
                srcSet='https://ik.imagekit.io/2zlgs27bjo/public/image/home-icons/passbase.svg?tr=w-350,q-100 1x, https://ik.imagekit.io/2zlgs27bjo/public/image/home-icons/passbase.svg?tr=w-350,q-100 2x'
              />
            )}
            <noscript></noscript>
          </span>
        </div>
        <div className='undefined ourWorks_ourWorks__kX339 ourWorks_ourWorksCenter__nszn1'>
          <div className='ourWorks_imageContainer__Ny1IS'>
            <span style={ImageDivSpanStyle1}>
              <span style={ImageDivSpanSpanStyle1}>
                <img
                  alt=''
                  aria-hidden='true'
                  src='data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%27820%27%20height=%27425%27/%3e'
                  style={ImageDivSpanSpanImgStyle2}
                  data-xblocker='passed'
                />
              </span>
              <img
                alt='/portfolio/tr:q-100/passbase.png'
                draggable='false'
                srcSet='https://ik.imagekit.io/2zlgs27bjo/public/image/portfolio/tr:q-100/passbase.png?tr=w-820,q-100 1x, https://ik.imagekit.io/2zlgs27bjo/public/image/portfolio/tr:q-100/passbase.png?tr=w-820,q-100 2x'
                src='https://ik.imagekit.io/2zlgs27bjo/public/image/portfolio/tr:q-100/passbase.png?tr=w-820,q-100'
                decoding='async'
                data-nimg='intrinsic'
                style={ImageDivSpanImgStyle3}
                data-xblocker='passed'
              />
            </span>
          </div>
          <div className='ourWorks_description__Zxype'>
            <div className='ourWorks_ourWorksWeb__14L4F'>
              <span style={ImageDivSpanStyle1}>
                <span style={ImageDivSpanSpanStyle1}>
                  <img
                    alt=''
                    aria-hidden='true'
                    src='data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%27350%27%20height=%2775%27/%3e'
                    style={ImageDivSpanSpanImgStyle1}
                  />
                </span>
                {theme.palette.mode === 'dark' ? (
                  <img
                    alt='/home-icons/passbase.svg'
                    draggable='false'
                    src='https://ik.imagekit.io/2zlgs27bjo/public/image/home-icons/passbase-dark.svg?tr=w-350,q-100'
                    decoding='async'
                    data-nimg='intrinsic'
                    className='ourWorks_logoImage__UQuzg'
                    style={ImageDivSpanImgStyle2}
                    srcSet='https://ik.imagekit.io/2zlgs27bjo/public/image/home-icons/passbase-dark.svg?tr=w-350,q-100 1x, https://ik.imagekit.io/2zlgs27bjo/public/image/home-icons/passbase-dark.svg?tr=w-350,q-100 2x'
                  />
                ) : (
                  <img
                    alt='/home-icons/passbase.svg'
                    draggable='false'
                    src='https://ik.imagekit.io/2zlgs27bjo/public/image/home-icons/passbase.svg?tr=w-350,q-100'
                    decoding='async'
                    data-nimg='intrinsic'
                    className='ourWorks_logoImage__UQuzg'
                    style={ImageDivSpanImgStyle2}
                    srcSet='https://ik.imagekit.io/2zlgs27bjo/public/image/home-icons/passbase.svg?tr=w-350,q-100 1x, https://ik.imagekit.io/2zlgs27bjo/public/image/home-icons/passbase.svg?tr=w-350,q-100 2x'
                  />
                )}
                <noscript></noscript>
              </span>
            </div>
            <p
              className='ourWorks_descriptionText__16qVs'
              style={{ margin: '20px 0px' }}
            >
              <b>Passbase</b> is a suite of customizable identification tools
              including liveness detection, document verification, facial
              recognition, and more. These tools are combined to estimate the
              authenticity of a user's true identity. A User submits a video
              selfie and valid identifying Resources during a Verification
              guided by the Passbase client-side integration.
            </p>
            <div>
              <div className='ourWorks_techStackContainer__aunf8'>
                <p>Tech Stack:</p>
                <div className='ourWorks_techStack__SbVrG undefined'>
                  <span style={ImageDivSpanStyle1}>
                    <span style={ImageDivSpanSpanStyle1}>
                      <img
                        alt=''
                        aria-hidden='true'
                        src='data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%2733%27%20height=%2723%27/%3e'
                        style={ImageDivSpanSpanImgStyle1}
                      />
                    </span>
                    <img
                      alt='/portfolio/react-logo-new.svg'
                      draggable='false'
                      srcSet='https://ik.imagekit.io/2zlgs27bjo/public/image/portfolio/react-logo-new.svg?tr=w-33,q-100 1x, https://ik.imagekit.io/2zlgs27bjo/public/image/portfolio/react-logo-new.svg?tr=w-33,q-100 2x'
                      src='https://ik.imagekit.io/2zlgs27bjo/public/image/portfolio/react-logo-new.svg?tr=w-33,q-100'
                      decoding='async'
                      data-nimg='intrinsic'
                      className='ourWorks_iconImage__fxkt8'
                      style={ImageDivSpanImgStyle2}
                    />
                  </span>
                </div>
                <div className='ourWorks_techStack__SbVrG undefined'>
                  <span style={ImageDivSpanStyle1}>
                    <span style={ImageDivSpanSpanStyle1}>
                      <img
                        alt=''
                        aria-hidden='true'
                        src='data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%2733%27%20height=%2723%27/%3e'
                        style={ImageDivSpanSpanImgStyle1}
                      />
                    </span>
                    <img
                      alt='/portfolio/graphql-logo-new.svg'
                      draggable='false'
                      srcSet='https://ik.imagekit.io/2zlgs27bjo/public/image/portfolio/graphql-logo-new.svg?tr=w-33,q-100 1x, https://ik.imagekit.io/2zlgs27bjo/public/image/portfolio/graphql-logo-new.svg?tr=w-33,q-100 2x'
                      src='https://ik.imagekit.io/2zlgs27bjo/public/image/portfolio/graphql-logo-new.svg?tr=w-33,q-100'
                      decoding='async'
                      data-nimg='intrinsic'
                      className='ourWorks_iconImage__fxkt8'
                      style={ImageDivSpanImgStyle2}
                    />
                  </span>
                </div>
                <div className='ourWorks_techStack__SbVrG undefined'>
                  <span style={ImageDivSpanStyle1}>
                    <span style={ImageDivSpanSpanStyle1}>
                      <img
                        alt=''
                        aria-hidden='true'
                        src='data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%2733%27%20height=%2723%27/%3e'
                        style={ImageDivSpanSpanImgStyle1}
                      />
                    </span>
                    <img
                      alt='/portfolio/net-logo-new.svg'
                      draggable='false'
                      srcSet='https://ik.imagekit.io/2zlgs27bjo/public/image/portfolio/net-logo-new.svg?tr=w-33,q-100 1x, https://ik.imagekit.io/2zlgs27bjo/public/image/portfolio/net-logo-new.svg?tr=w-33,q-100 2x'
                      src='https://ik.imagekit.io/2zlgs27bjo/public/image/portfolio/net-logo-new.svg?tr=w-33,q-100'
                      decoding='async'
                      data-nimg='intrinsic'
                      className='ourWorks_iconImage__fxkt8'
                      style={ImageDivSpanImgStyle2}
                    />
                  </span>
                </div>
              </div>
            </div>
            <a
              href='https://passbase.com'
              target='_blank'
              rel='noreferrer noreferrer nofollow'
              className={
                theme.palette.mode === 'dark'
                  ? 'ant-btn ant-btn-default button_btn__XHL7T ourWorks_projectBtn__hj4Gx ourWorks_dark__c4aW6 button_dark__1020G button_direction-row__QRu0d'
                  : 'ant-btn ant-btn-default button_btn__XHL7T ourWorks_projectBtn__hj4Gx false button_light__M4f83 button_direction-row__QRu0d'
              }
            >
              <p>View Project</p>
            </a>
          </div>
        </div>
        <div className='ourWorks_ourWorksMobile__iQU4A'>
          <span style={ImageDivSpanStyle1}>
            <span style={ImageDivSpanSpanStyle1}>
              <img
                alt=''
                aria-hidden='true'
                src='data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%27247%27%20height=%2788%27/%3e'
                style={ImageDivSpanSpanImgStyle1}
              />
            </span>
            {theme.palette.mode === 'dark' ? (
              <img
                alt='/portfolio/rubilink-logo.svg'
                draggable='false'
                srcSet='https://ik.imagekit.io/2zlgs27bjo/public/image/portfolio/dark/rubilink-logo.svg?tr=w-247,q-100 1x, https://ik.imagekit.io/2zlgs27bjo/public/image/portfolio/dark/rubilink-logo.svg?tr=w-247,q-100 2x'
                src='https://ik.imagekit.io/2zlgs27bjo/public/image/portfolio/dark/rubilink-logo.svg?tr=w-247,q-100'
                decoding='async'
                data-nimg='intrinsic'
                className='ourWorks_logoImage__UQuzg'
                style={ImageDivSpanImgStyle2}
              />
            ) : (
              <img
                alt='/portfolio/rubilink-logo.svg'
                draggable='false'
                src='data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7'
                decoding='async'
                data-nimg='intrinsic'
                className='ourWorks_logoImage__UQuzg'
                style={ImageDivSpanImgStyle2}
              />
            )}
          </span>
        </div>
        <div className='undefined ourWorks_ourWorks__kX339 ourWorks_ourWorksRowReverse___UTmy'>
          <div className='ourWorks_imageContainer__Ny1IS'>
            <span style={ImageDivSpanStyle1}>
              <span style={ImageDivSpanSpanStyle1}>
                <img
                  alt=''
                  aria-hidden='true'
                  src='data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%27820%27%20height=%27425%27/%3e'
                  style={ImageDivSpanSpanImgStyle2}
                  data-xblocker='passed'
                />
              </span>
              <img
                alt='/portfolio/tr:q-100/rubilink.png'
                draggable='false'
                srcSet='https://ik.imagekit.io/2zlgs27bjo/public/image/portfolio/tr:q-100/rubilink.png?tr=w-820,q-100 1x, https://ik.imagekit.io/2zlgs27bjo/public/image/portfolio/tr:q-100/rubilink.png?tr=w-820,q-100 2x'
                src='https://ik.imagekit.io/2zlgs27bjo/public/image/portfolio/tr:q-100/rubilink.png?tr=w-820,q-100'
                decoding='async'
                data-nimg='intrinsic'
                style={ImageDivSpanImgStyle3}
                data-xblocker='passed'
              />
            </span>
          </div>
          <div className='ourWorks_description__Zxype'>
            <div className='ourWorks_ourWorksWeb__14L4F'>
              <span style={ImageDivSpanStyle1}>
                <span style={ImageDivSpanSpanStyle1}>
                  <img
                    alt=''
                    aria-hidden='true'
                    src='data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%27247%27%20height=%2788%27/%3e'
                    style={ImageDivSpanSpanImgStyle1}
                  />
                </span>
                {theme.palette.mode === 'dark' ? (
                  <img
                    alt='/portfolio/rubilink-logo.svg'
                    draggable='false'
                    srcSet='https://ik.imagekit.io/2zlgs27bjo/public/image/portfolio/dark/rubilink-logo.svg?tr=w-247,q-100 1x, https://ik.imagekit.io/2zlgs27bjo/public/image/portfolio/dark/rubilink-logo.svg?tr=w-247,q-100 2x'
                    src='https://ik.imagekit.io/2zlgs27bjo/public/image/portfolio/dark/rubilink-logo.svg?tr=w-247,q-100'
                    decoding='async'
                    data-nimg='intrinsic'
                    className='ourWorks_logoImage__UQuzg'
                    style={ImageDivSpanImgStyle2}
                  />
                ) : (
                  <img
                    alt='/portfolio/rubilink-logo.svg'
                    draggable='false'
                    src='https://ik.imagekit.io/2zlgs27bjo/public/image/portfolio/rubilink-logo.svg?tr=w-247,q-100'
                    decoding='async'
                    data-nimg='intrinsic'
                    className='ourWorks_logoImage__UQuzg'
                    style={ImageDivSpanImgStyle2}
                    srcSet='https://ik.imagekit.io/2zlgs27bjo/public/image/portfolio/rubilink-logo.svg?tr=w-247,q-100 1x, https://ik.imagekit.io/2zlgs27bjo/public/image/portfolio/rubilink-logo.svg?tr=w-247,q-100 2x'
                  />
                )}
              </span>
            </div>
            <p
              className='ourWorks_descriptionText__16qVs'
              style={{ margin: '20px 0px' }}
            >
              <b>Rubi Labs</b> is a dynamic and innovative company composed of
              science graduates who are dedicated to research and technological
              development. With a strong emphasis on scientific knowledge and
              expertise, Rubi Labs aims to push the boundaries of innovation and
              make significant contributions to various industries.
            </p>
            <div>
              <div className='ourWorks_techStackContainer__aunf8 ourWorks_techStackContainerSecond__MVHIm'>
                <p>Tech Stack:</p>
                <div className='ourWorks_techStack__SbVrG '>
                  <span style={ImageDivSpanStyle1}>
                    <span style={ImageDivSpanSpanStyle1}>
                      <img
                        alt=''
                        aria-hidden='true'
                        src='data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%2733%27%20height=%2723%27/%3e'
                        style={ImageDivSpanSpanImgStyle1}
                      />
                    </span>
                    <img
                      alt='/portfolio/react-logo-new.svg'
                      draggable='false'
                      srcSet='https://ik.imagekit.io/2zlgs27bjo/public/image/portfolio/react-logo-new.svg?tr=w-33,q-100 1x, https://ik.imagekit.io/2zlgs27bjo/public/image/portfolio/react-logo-new.svg?tr=w-33,q-100 2x'
                      src='https://ik.imagekit.io/2zlgs27bjo/public/image/portfolio/react-logo-new.svg?tr=w-33,q-100'
                      decoding='async'
                      data-nimg='intrinsic'
                      className='ourWorks_iconImage__fxkt8'
                      style={ImageDivSpanImgStyle2}
                    />
                  </span>
                </div>
                <div
                  className='ourWorks_techStack__SbVrG ourWorks_stackLong___ayt4'
                  style={{ width: '130px', height: '34px' }}
                >
                  <span style={ImageDivSpanStyle1}>
                    <span style={ImageDivSpanSpanStyle1}>
                      <img
                        alt=''
                        aria-hidden='true'
                        src='data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%2733%27%20height=%2723%27/%3e'
                        style={ImageDivSpanSpanImgStyle1}
                      />
                    </span>
                    <img
                      alt='/portfolio/react-native-logo-new.svg'
                      draggable='false'
                      srcSet='https://ik.imagekit.io/2zlgs27bjo/public/image/portfolio/react-native-logo-new.svg?tr=w-33,q-100 1x, https://ik.imagekit.io/2zlgs27bjo/public/image/portfolio/react-native-logo-new.svg?tr=w-33,q-100 2x'
                      src='https://ik.imagekit.io/2zlgs27bjo/public/image/portfolio/react-native-logo-new.svg?tr=w-33,q-100'
                      decoding='async'
                      data-nimg='intrinsic'
                      className='ourWorks_iconImage__fxkt8'
                      style={ImageDivSpanImgStyle2}
                    />
                  </span>
                </div>
              </div>
              <div className='ourWorks_techStackContainer__aunf8 ourWorks_techStackContainerSecond__MVHIm'>
                <div
                  className='ourWorks_techStack__SbVrG ourWorks_stackLong___ayt4'
                  style={{ width: '102px', height: '34px' }}
                >
                  <span style={ImageDivSpanStyle1}>
                    <span style={ImageDivSpanSpanStyle1}>
                      <img
                        alt=''
                        aria-hidden='true'
                        src='data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%2733%27%20height=%2723%27/%3e'
                        style={ImageDivSpanSpanImgStyle1}
                      />
                    </span>
                    <img
                      alt='/portfolio/python-logo-new.svg'
                      draggable='false'
                      srcSet='https://ik.imagekit.io/2zlgs27bjo/public/image/portfolio/python-logo-new.svg?tr=w-33,q-100 1x, https://ik.imagekit.io/2zlgs27bjo/public/image/portfolio/python-logo-new.svg?tr=w-33,q-100 2x'
                      src='https://ik.imagekit.io/2zlgs27bjo/public/image/portfolio/python-logo-new.svg?tr=w-33,q-100'
                      decoding='async'
                      data-nimg='intrinsic'
                      className='ourWorks_iconImage__fxkt8'
                      style={ImageDivSpanImgStyle2}
                    />
                  </span>
                </div>
                <div className='ourWorks_techStack__SbVrG '>
                  <span style={ImageDivSpanStyle1}>
                    <span style={ImageDivSpanSpanStyle1}>
                      <img
                        alt=''
                        aria-hidden='true'
                        src='data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%2733%27%20height=%2723%27/%3e'
                        style={ImageDivSpanSpanImgStyle1}
                      />
                    </span>
                    <img
                      alt='/portfolio/nodejs-logo-new.svg'
                      draggable='false'
                      srcSet='https://ik.imagekit.io/2zlgs27bjo/public/image/portfolio/nodejs-logo-new.svg?tr=w-33,q-100 1x, https://ik.imagekit.io/2zlgs27bjo/public/image/portfolio/nodejs-logo-new.svg?tr=w-33,q-100 2x'
                      src='https://ik.imagekit.io/2zlgs27bjo/public/image/portfolio/nodejs-logo-new.svg?tr=w-33,q-100'
                      decoding='async'
                      data-nimg='intrinsic'
                      className='ourWorks_iconImage__fxkt8'
                      style={ImageDivSpanImgStyle2}
                    />
                  </span>
                </div>
              </div>
            </div>
            <a
              href='https://rubilink.io'
              target='_blank'
              rel='noreferrer noreferrer nofollow'
              className={
                theme.palette.mode === 'dark'
                  ? 'ant-btn ant-btn-default button_btn__XHL7T ourWorks_projectBtn__hj4Gx ourWorks_dark__c4aW6 button_dark__1020G button_direction-row__QRu0d'
                  : 'ant-btn ant-btn-default button_btn__XHL7T ourWorks_projectBtn__hj4Gx false button_light__M4f83 button_direction-row__QRu0d'
              }
            >
              <p>View Project</p>
            </a>
          </div>
        </div>
        <div className='ourWorks_ourWorksMobile__iQU4A'>
          <span style={ImageDivSpanStyle1}>
            <span style={ImageDivSpanSpanStyle1}>
              <img
                alt=''
                aria-hidden='true'
                src='data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%27314%27%20height=%2789%27/%3e'
                style={ImageDivSpanSpanImgStyle1}
              />
            </span>
            {theme.palette.mode === 'dark' ? (
              <img
                alt='/portfolio/pumapay-logo.svg'
                draggable='false'
                srcSet='https://ik.imagekit.io/2zlgs27bjo/public/image/portfolio/dark/pumapay-logo.svg?tr=w-314,q-100 1x, https://ik.imagekit.io/2zlgs27bjo/public/image/portfolio/dark/pumapay-logo.svg?tr=w-314,q-100 2x'
                src='https://ik.imagekit.io/2zlgs27bjo/public/image/portfolio/dark/pumapay-logo.svg?tr=w-314,q-100'
                decoding='async'
                data-nimg='intrinsic'
                className='ourWorks_logoImage__UQuzg'
                style={ImageDivSpanImgStyle2}
              />
            ) : (
              <img
                alt='/portfolio/pumapay-logo.svg'
                draggable='false'
                srcSet='https://ik.imagekit.io/2zlgs27bjo/public/image/portfolio/dark/pumapay-logo.svg?tr=w-314,q-100 1x, https://ik.imagekit.io/2zlgs27bjo/public/image/portfolio/dark/pumapay-logo.svg?tr=w-314,q-100 2x'
                src='https://ik.imagekit.io/2zlgs27bjo/public/image/portfolio/dark/pumapay-logo.svg?tr=w-314,q-100'
                decoding='async'
                data-nimg='intrinsic'
                className='ourWorks_logoImage__UQuzg'
                style={ImageDivSpanImgStyle2}
              />
            )}
          </span>
        </div>
        <div className='undefined ourWorks_ourWorks__kX339 ourWorks_ourWorksCenter__nszn1'>
          <div className='ourWorks_imageContainer__Ny1IS'>
            <span style={ImageDivSpanStyle1}>
              <span style={ImageDivSpanSpanStyle1}>
                <img
                  alt=''
                  aria-hidden='true'
                  src='data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%27820%27%20height=%27425%27/%3e'
                  style={ImageDivSpanSpanImgStyle2}
                  data-xblocker='passed'
                />
              </span>
              <img
                alt='/portfolio/tr:q-100/pumaPay.png'
                draggable='false'
                srcSet='https://ik.imagekit.io/2zlgs27bjo/public/image/portfolio/tr:q-100/pumaPay.png?tr=w-820,q-100 1x, https://ik.imagekit.io/2zlgs27bjo/public/image/portfolio/tr:q-100/pumaPay.png?tr=w-820,q-100 2x'
                src='https://ik.imagekit.io/2zlgs27bjo/public/image/portfolio/tr:q-100/pumaPay.png?tr=w-820,q-100'
                decoding='async'
                data-nimg='intrinsic'
                style={ImageDivSpanImgStyle3}
                data-xblocker='passed'
              />
            </span>
          </div>
          <div className='ourWorks_description__Zxype'>
            <div className='ourWorks_ourWorksWeb__14L4F'>
              <span style={ImageDivSpanStyle1}>
                <span style={ImageDivSpanSpanStyle1}>
                  <img
                    alt=''
                    aria-hidden='true'
                    src='data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%27314%27%20height=%2789%27/%3e'
                    style={ImageDivSpanSpanImgStyle1}
                  />
                </span>
                {theme.palette.mode === 'dark' ? (
                  <img
                    alt='/portfolio/pumapay-logo.svg'
                    draggable='false'
                    srcSet='https://ik.imagekit.io/2zlgs27bjo/public/image/portfolio/dark/pumapay-logo.svg?tr=w-314,q-100 1x, https://ik.imagekit.io/2zlgs27bjo/public/image/portfolio/dark/pumapay-logo.svg?tr=w-314,q-100 2x'
                    src='https://ik.imagekit.io/2zlgs27bjo/public/image/portfolio/dark/pumapay-logo.svg?tr=w-314,q-100'
                    decoding='async'
                    data-nimg='intrinsic'
                    className='ourWorks_logoImage__UQuzg'
                    style={ImageDivSpanImgStyle2}
                  />
                ) : (
                  <img
                    alt='/portfolio/pumapay-logo.svg'
                    draggable='false'
                    src='https://ik.imagekit.io/2zlgs27bjo/public/image/portfolio/pumapay-logo.svg?tr=w-314,q-100'
                    decoding='async'
                    data-nimg='intrinsic'
                    className='ourWorks_logoImage__UQuzg'
                    style={ImageDivSpanImgStyle2}
                    srcSet='https://ik.imagekit.io/2zlgs27bjo/public/image/portfolio/pumapay-logo.svg?tr=w-314,q-100 1x, https://ik.imagekit.io/2zlgs27bjo/public/image/portfolio/pumapay-logo.svg?tr=w-314,q-100 2x'
                  />
                )}
              </span>
            </div>
            <p
              className='ourWorks_descriptionText__16qVs'
              style={{ margin: '20px 0px' }}
            >
              <b>PumaPay</b> is the first blockchain-based payment solution to
              be embraced by a large number of merchants. PumaPay provides real
              utility for your cryptocurrency. Use your crypto to pay for real
              products and services with network of crypto-friendly merchants.
              Easily manage everything via crypto wallet.
            </p>
            <div>
              <div className='ourWorks_techStackContainer__aunf8'>
                <p>Tech Stack:</p>
                <div className='ourWorks_techStack__SbVrG undefined'>
                  <span style={ImageDivSpanStyle1}>
                    <span style={ImageDivSpanSpanStyle1}>
                      <img
                        alt=''
                        aria-hidden='true'
                        src='data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%2733%27%20height=%2723%27/%3e'
                        style={ImageDivSpanSpanImgStyle1}
                      />
                    </span>
                    <img
                      alt='/portfolio/nodejs-logo-new.svg'
                      draggable='false'
                      srcSet='https://ik.imagekit.io/2zlgs27bjo/public/image/portfolio/nodejs-logo-new.svg?tr=w-33,q-100 1x, https://ik.imagekit.io/2zlgs27bjo/public/image/portfolio/nodejs-logo-new.svg?tr=w-33,q-100 2x'
                      src='https://ik.imagekit.io/2zlgs27bjo/public/image/portfolio/nodejs-logo-new.svg?tr=w-33,q-100'
                      decoding='async'
                      data-nimg='intrinsic'
                      className='ourWorks_iconImage__fxkt8'
                      style={ImageDivSpanImgStyle2}
                    />
                  </span>
                </div>
                <div className='ourWorks_techStack__SbVrG undefined'>
                  <span style={ImageDivSpanStyle1}>
                    <span style={ImageDivSpanSpanStyle1}>
                      <img
                        alt=''
                        aria-hidden='true'
                        src='data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%2733%27%20height=%2723%27/%3e'
                        style={ImageDivSpanSpanImgStyle1}
                      />
                    </span>
                    <img
                      alt='/portfolio/react-logo-new.svg'
                      draggable='false'
                      srcSet='https://ik.imagekit.io/2zlgs27bjo/public/image/portfolio/react-logo-new.svg?tr=w-33,q-100 1x, https://ik.imagekit.io/2zlgs27bjo/public/image/portfolio/react-logo-new.svg?tr=w-33,q-100 2x'
                      src='https://ik.imagekit.io/2zlgs27bjo/public/image/portfolio/react-logo-new.svg?tr=w-33,q-100'
                      decoding='async'
                      data-nimg='intrinsic'
                      className='ourWorks_iconImage__fxkt8'
                      style={ImageDivSpanImgStyle2}
                    />
                  </span>
                </div>
              </div>
              <div className='ourWorks_techStackContainer__aunf8'>
                <p>Blockchain: : </p>
                <div className='ourWorks_techStack__SbVrG undefined'>
                  <span style={ImageDivSpanStyle1}>
                    <span style={ImageDivSpanSpanStyle1}>
                      <img
                        alt=''
                        aria-hidden='true'
                        src='data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%2733%27%20height=%2723%27/%3e'
                        style={ImageDivSpanSpanImgStyle1}
                      />
                    </span>
                    <img
                      alt='/portfolio/ethereum-logo-new.svg'
                      draggable='false'
                      srcSet='https://ik.imagekit.io/2zlgs27bjo/public/image/portfolio/ethereum-logo-new.svg?tr=w-33,q-100 1x, https://ik.imagekit.io/2zlgs27bjo/public/image/portfolio/ethereum-logo-new.svg?tr=w-33,q-100 2x'
                      src='https://ik.imagekit.io/2zlgs27bjo/public/image/portfolio/ethereum-logo-new.svg?tr=w-33,q-100'
                      decoding='async'
                      data-nimg='intrinsic'
                      className='ourWorks_iconImage__fxkt8'
                      style={ImageDivSpanImgStyle2}
                    />
                  </span>
                </div>
              </div>
            </div>
            <a
              href='https://pumapay.com'
              target='_blank'
              rel='noreferrer noreferrer nofollow'
              className={
                theme.palette.mode === 'dark'
                  ? 'ant-btn ant-btn-default button_btn__XHL7T ourWorks_projectBtn__hj4Gx ourWorks_dark__c4aW6 button_dark__1020G button_direction-row__QRu0d'
                  : 'ant-btn ant-btn-default button_btn__XHL7T ourWorks_projectBtn__hj4Gx false button_light__M4f83 button_direction-row__QRu0d'
              }
            >
              <p>View Project</p>
            </a>
          </div>
        </div>
        <div className='ourWorks_ourWorksMobile__iQU4A'>
          <span style={ImageDivSpanStyle1}>
            <span style={ImageDivSpanSpanStyle1}>
              <img
                alt=''
                aria-hidden='true'
                src='data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%27243%27%20height=%2769%27/%3e'
                style={ImageDivSpanSpanImgStyle1}
              />
            </span>
            {theme.palette.mode === 'dark' ? (
              <img
                alt='/portfolio/exgoland-logo.svg'
                draggable='false'
                srcSet='https://ik.imagekit.io/2zlgs27bjo/public/image/portfolio/dark/exgoland-logo.svg?tr=w-243,q-100 1x, https://ik.imagekit.io/2zlgs27bjo/public/image/portfolio/dark/exgoland-logo.svg?tr=w-243,q-100 2x'
                src='https://ik.imagekit.io/2zlgs27bjo/public/image/portfolio/dark/exgoland-logo.svg?tr=w-243,q-100'
                decoding='async'
                data-nimg='intrinsic'
                className='ourWorks_logoImage__UQuzg'
                style={ImageDivSpanImgStyle2}
              />
            ) : (
              <img
                alt='/portfolio/exgoland-logo.svg'
                draggable='false'
                src='data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7'
                decoding='async'
                data-nimg='intrinsic'
                className='ourWorks_logoImage__UQuzg'
                tyle={ImageDivSpanImgStyle2}
              />
            )}
          </span>
        </div>
        <div className='undefined ourWorks_ourWorks__kX339 ourWorks_ourWorksRowReverse___UTmy'>
          <div className='ourWorks_imageContainer__Ny1IS'>
            <span style={ImageDivSpanStyle1}>
              <span style={ImageDivSpanSpanStyle1}>
                <img
                  alt=''
                  aria-hidden='true'
                  src='data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%27820%27%20height=%27425%27/%3e'
                  style={ImageDivSpanSpanImgStyle2}
                  data-xblocker='passed'
                />
              </span>
              <img
                alt='/portfolio/tr:q-100/exgoland.png'
                draggable='false'
                srcSet='https://ik.imagekit.io/2zlgs27bjo/public/image/portfolio/tr:q-100/exgoland.png?tr=w-820,q-100 1x, https://ik.imagekit.io/2zlgs27bjo/public/image/portfolio/tr:q-100/exgoland.png?tr=w-820,q-100 2x'
                src='https://ik.imagekit.io/2zlgs27bjo/public/image/portfolio/tr:q-100/exgoland.png?tr=w-820,q-100'
                decoding='async'
                data-nimg='intrinsic'
                style={ImageDivSpanImgStyle3}
                data-xblocker='passed'
              />
            </span>
          </div>
          <div className='ourWorks_description__Zxype'>
            <div className='ourWorks_ourWorksWeb__14L4F'>
              <span style={ImageDivSpanStyle1}>
                <span style={ImageDivSpanSpanStyle1}>
                  <img
                    alt=''
                    aria-hidden='true'
                    src='data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%27243%27%20height=%2769%27/%3e'
                    style={ImageDivSpanSpanImgStyle1}
                  />
                </span>
                {theme.palette.mode === 'dark' ? (
                  <img
                    alt='/portfolio/exgoland-logo.svg'
                    draggable='false'
                    srcSet='https://ik.imagekit.io/2zlgs27bjo/public/image/portfolio/dark/exgoland-logo.svg?tr=w-243,q-100 1x, https://ik.imagekit.io/2zlgs27bjo/public/image/portfolio/dark/exgoland-logo.svg?tr=w-243,q-100 2x'
                    src='https://ik.imagekit.io/2zlgs27bjo/public/image/portfolio/dark/exgoland-logo.svg?tr=w-243,q-100'
                    decoding='async'
                    data-nimg='intrinsic'
                    className='ourWorks_logoImage__UQuzg'
                    style={ImageDivSpanImgStyle2}
                  />
                ) : (
                  <img
                    alt='/portfolio/exgoland-logo.svg'
                    draggable='false'
                    src='https://ik.imagekit.io/2zlgs27bjo/public/image/portfolio/exgoland-logo.svg?tr=w-243,q-100'
                    decoding='async'
                    data-nimg='intrinsic'
                    className='ourWorks_logoImage__UQuzg'
                    style={ImageDivSpanImgStyle2}
                    srcSet='https://ik.imagekit.io/2zlgs27bjo/public/image/portfolio/exgoland-logo.svg?tr=w-243,q-100 1x, https://ik.imagekit.io/2zlgs27bjo/public/image/portfolio/exgoland-logo.svg?tr=w-243,q-100 2x'
                  />
                )}
              </span>
            </div>
            <p
              className='ourWorks_descriptionText__16qVs'
              style={{ margin: '20px 0px' }}
            >
              <b>Exgoland</b> is a groundbreaking metaverse powered by AI that
              offers a multitude of unique features, solving real-world problems
              through cutting-edge technology by leveraging the latest
              advancements in Virtual Reality (VR), Augmented Reality (AR), and
              Artificial Intelligence (AI).
            </p>
            <div>
              <div className='ourWorks_techStackContainer__aunf8'>
                <p>Tech Stack:</p>
                <div className='ourWorks_techStack__SbVrG undefined'>
                  <span style={ImageDivSpanStyle1}>
                    <span style={ImageDivSpanSpanStyle1}>
                      <img
                        alt=''
                        aria-hidden='true'
                        src='data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%2733%27%20height=%2723%27/%3e'
                        style={ImageDivSpanSpanImgStyle1}
                      />
                    </span>
                    <img
                      alt='/portfolio/nodejs-logo-new.svg'
                      draggable='false'
                      srcSet='https://ik.imagekit.io/2zlgs27bjo/public/image/portfolio/nodejs-logo-new.svg?tr=w-33,q-100 1x, https://ik.imagekit.io/2zlgs27bjo/public/image/portfolio/nodejs-logo-new.svg?tr=w-33,q-100 2x'
                      src='https://ik.imagekit.io/2zlgs27bjo/public/image/portfolio/nodejs-logo-new.svg?tr=w-33,q-100'
                      decoding='async'
                      data-nimg='intrinsic'
                      className='ourWorks_iconImage__fxkt8'
                      style={ImageDivSpanImgStyle2}
                    />
                  </span>
                </div>
                <div className='ourWorks_techStack__SbVrG undefined'>
                  <span style={ImageDivSpanStyle1}>
                    <span style={ImageDivSpanSpanStyle1}>
                      <img
                        alt=''
                        aria-hidden='true'
                        src='data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%2733%27%20height=%2723%27/%3e'
                        style={ImageDivSpanSpanImgStyle1}
                      />
                    </span>
                    <img
                      alt='/portfolio/react-logo-new.svg'
                      draggable='false'
                      srcSet='https://ik.imagekit.io/2zlgs27bjo/public/image/portfolio/react-logo-new.svg?tr=w-33,q-100 1x, https://ik.imagekit.io/2zlgs27bjo/public/image/portfolio/react-logo-new.svg?tr=w-33,q-100 2x'
                      src='https://ik.imagekit.io/2zlgs27bjo/public/image/portfolio/react-logo-new.svg?tr=w-33,q-100'
                      decoding='async'
                      data-nimg='intrinsic'
                      className='ourWorks_iconImage__fxkt8'
                      style={ImageDivSpanImgStyle2}
                    />
                  </span>
                </div>
              </div>
              <div className='ourWorks_techStackContainer__aunf8'>
                <p>Blockchain: : </p>
                <div className='ourWorks_techStack__SbVrG undefined'>
                  <span style={ImageDivSpanStyle1}>
                    <span style={ImageDivSpanSpanStyle1}>
                      <img
                        alt=''
                        aria-hidden='true'
                        src='data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%2733%27%20height=%2723%27/%3e'
                        style={ImageDivSpanSpanImgStyle1}
                      />
                    </span>
                    <img
                      alt='/portfolio/solana-logo-new.svg'
                      draggable='false'
                      srcSet='https://ik.imagekit.io/2zlgs27bjo/public/image/portfolio/solana-logo-new.svg?tr=w-33,q-100 1x, https://ik.imagekit.io/2zlgs27bjo/public/image/portfolio/solana-logo-new.svg?tr=w-33,q-100 2x'
                      src='https://ik.imagekit.io/2zlgs27bjo/public/image/portfolio/solana-logo-new.svg?tr=w-33,q-100'
                      decoding='async'
                      data-nimg='intrinsic'
                      className='ourWorks_iconImage__fxkt8'
                      style={ImageDivSpanImgStyle2}
                    />
                  </span>
                </div>
                <div className='ourWorks_techStack__SbVrG undefined'>
                  <span style={ImageDivSpanStyle1}>
                    <span style={ImageDivSpanSpanStyle1}>
                      <img
                        alt=''
                        aria-hidden='true'
                        src='data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%2733%27%20height=%2723%27/%3e'
                        style={ImageDivSpanSpanImgStyle1}
                      />
                    </span>
                    <img
                      alt='/portfolio/ethereum-logo-new.svg'
                      draggable='false'
                      srcSet='https://ik.imagekit.io/2zlgs27bjo/public/image/portfolio/ethereum-logo-new.svg?tr=w-33,q-100 1x, https://ik.imagekit.io/2zlgs27bjo/public/image/portfolio/ethereum-logo-new.svg?tr=w-33,q-100 2x'
                      src='https://ik.imagekit.io/2zlgs27bjo/public/image/portfolio/ethereum-logo-new.svg?tr=w-33,q-100'
                      decoding='async'
                      data-nimg='intrinsic'
                      className='ourWorks_iconImage__fxkt8'
                      style={ImageDivSpanImgStyle2}
                    />
                  </span>
                </div>
              </div>
            </div>
            <a
              href='https://exgoland.io'
              target='_blank'
              rel='noreferrer noreferrer nofollow'
              className={
                theme.palette.mode === 'dark'
                  ? 'ant-btn ant-btn-default button_btn__XHL7T ourWorks_projectBtn__hj4Gx ourWorks_dark__c4aW6 button_dark__1020G button_direction-row__QRu0d'
                  : 'ant-btn ant-btn-default button_btn__XHL7T ourWorks_projectBtn__hj4Gx false button_light__M4f83 button_direction-row__QRu0d'
              }
            >
              <p>View Project</p>
            </a>
          </div>
        </div>
        <div className='ourWorks_ourWorksMobile__iQU4A'>
          <span style={ImageDivSpanStyle1}>
            <span style={ImageDivSpanSpanStyle1}>
              <img
                alt=''
                aria-hidden='true'
                src='data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%27256%27%20height=%27104%27/%3e'
                data-xblocker='passed'
                style={ImageDivSpanSpanImgStyle2}
              />
            </span>
            {theme.palette.mode === 'dark' ? (
              <img
                alt='/portfolio/cryptopool-logo.svg'
                draggable='false'
                srcSet='https://ik.imagekit.io/2zlgs27bjo/public/image/portfolio/dark/cryptopool-logo.svg?tr=w-256,q-100 1x, https://ik.imagekit.io/2zlgs27bjo/public/image/portfolio/dark/cryptopool-logo.svg?tr=w-256,q-100 2x'
                src='https://ik.imagekit.io/2zlgs27bjo/public/image/portfolio/dark/cryptopool-logo.svg?tr=w-256,q-100'
                decoding='async'
                data-nimg='intrinsic'
                className='ourWorks_logoImage__UQuzg'
                style={ImageDivSpanImgStyle2}
              />
            ) : (
              <img
                alt='/portfolio/cryptopool-logo.svg'
                draggable='false'
                src='data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7'
                decoding='async'
                data-nimg='intrinsic'
                className='ourWorks_logoImage__UQuzg'
                style={ImageDivSpanImgStyle2}
              />
            )}
          </span>
        </div>
        <div className='undefined ourWorks_ourWorks__kX339 ourWorks_ourWorksCenter__nszn1'>
          <div className='ourWorks_imageContainer__Ny1IS'>
            <span style={ImageDivSpanStyle1}>
              <span style={ImageDivSpanSpanStyle1}>
                <img
                  alt=''
                  aria-hidden='true'
                  src='data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%27820%27%20height=%27425%27/%3e'
                  style={ImageDivSpanSpanImgStyle2}
                  data-xblocker='passed'
                />
              </span>
              <img
                alt='/portfolio/tr:q-100/crypto-pool.png'
                draggable='false'
                srcSet='https://ik.imagekit.io/2zlgs27bjo/public/image/portfolio/tr:q-100/crypto-pool.png?tr=w-820,q-100 1x, https://ik.imagekit.io/2zlgs27bjo/public/image/portfolio/tr:q-100/crypto-pool.png?tr=w-820,q-100 2x'
                src='https://ik.imagekit.io/2zlgs27bjo/public/image/portfolio/tr:q-100/crypto-pool.png?tr=w-820,q-100'
                decoding='async'
                data-nimg='intrinsic'
                style={ImageDivSpanImgStyle3}
                data-xblocker='passed'
              />
            </span>
          </div>
          <div className='ourWorks_description__Zxype'>
            <div className='ourWorks_ourWorksWeb__14L4F'>
              <span style={ImageDivSpanStyle1}>
                <span style={ImageDivSpanSpanStyle1}>
                  <img
                    alt=''
                    aria-hidden='true'
                    src='data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%27256%27%20height=%27104%27/%3e'
                    style={ImageDivSpanSpanImgStyle2}
                    data-xblocker='passed'
                  />
                </span>
                {theme.palette.mode === 'dark' ? (
                  <img
                    alt='/portfolio/cryptopool-logo.svg'
                    draggable='false'
                    srcSet='https://ik.imagekit.io/2zlgs27bjo/public/image/portfolio/dark/cryptopool-logo.svg?tr=w-256,q-100 1x, https://ik.imagekit.io/2zlgs27bjo/public/image/portfolio/dark/cryptopool-logo.svg?tr=w-256,q-100 2x'
                    src='https://ik.imagekit.io/2zlgs27bjo/public/image/portfolio/dark/cryptopool-logo.svg?tr=w-256,q-100'
                    decoding='async'
                    data-nimg='intrinsic'
                    className='ourWorks_logoImage__UQuzg'
                    style={ImageDivSpanImgStyle3}
                    data-xblocker='passed'
                  />
                ) : (
                  <img
                    alt='/portfolio/cryptopool-logo.svg'
                    draggable='false'
                    src='https://ik.imagekit.io/2zlgs27bjo/public/image/portfolio/cryptopool-logo.svg?tr=w-256,q-100'
                    decoding='async'
                    data-nimg='intrinsic'
                    className='ourWorks_logoImage__UQuzg'
                    style={ImageDivSpanImgStyle3}
                    data-xblocker='passed'
                    srcSet='https://ik.imagekit.io/2zlgs27bjo/public/image/portfolio/cryptopool-logo.svg?tr=w-256,q-100 1x, https://ik.imagekit.io/2zlgs27bjo/public/image/portfolio/cryptopool-logo.svg?tr=w-256,q-100 2x'
                  />
                )}
              </span>
            </div>
            <p
              className='ourWorks_descriptionText__16qVs'
              style={{ margin: '20px 0px' }}
            >
              <b>CryptoPool</b> is a tokenomics-based On-Off Ramp Solution that
              allows users to buy and sell cryptocurrencies directly while
              supporting several tokens for DEXs, NFTs &amp; marketplaces on
              major chains.
            </p>
            <div>
              <div className='ourWorks_techStackContainer__aunf8'>
                <p>Tech Stack:</p>
                <div className='ourWorks_techStack__SbVrG undefined'>
                  <span style={ImageDivSpanStyle1}>
                    <span style={ImageDivSpanSpanStyle1}>
                      <img
                        alt=''
                        aria-hidden='true'
                        src='data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%2733%27%20height=%2723%27/%3e'
                        style={ImageDivSpanSpanImgStyle1}
                      />
                    </span>
                    <img
                      alt='/portfolio/nodejs-logo-new.svg'
                      draggable='false'
                      srcSet='https://ik.imagekit.io/2zlgs27bjo/public/image/portfolio/nodejs-logo-new.svg?tr=w-33,q-100 1x, https://ik.imagekit.io/2zlgs27bjo/public/image/portfolio/nodejs-logo-new.svg?tr=w-33,q-100 2x'
                      src='https://ik.imagekit.io/2zlgs27bjo/public/image/portfolio/nodejs-logo-new.svg?tr=w-33,q-100'
                      decoding='async'
                      data-nimg='intrinsic'
                      className='ourWorks_iconImage__fxkt8'
                      style={ImageDivSpanImgStyle2}
                    />
                  </span>
                </div>
                <div className='ourWorks_techStack__SbVrG undefined'>
                  <span style={ImageDivSpanStyle1}>
                    <span style={ImageDivSpanSpanStyle1}>
                      <img
                        alt=''
                        aria-hidden='true'
                        src='data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%2733%27%20height=%2723%27/%3e'
                        style={ImageDivSpanSpanImgStyle1}
                      />
                    </span>
                    <img
                      alt='/portfolio/react-logo-new.svg'
                      draggable='false'
                      srcSet='https://ik.imagekit.io/2zlgs27bjo/public/image/portfolio/react-logo-new.svg?tr=w-33,q-100 1x, https://ik.imagekit.io/2zlgs27bjo/public/image/portfolio/react-logo-new.svg?tr=w-33,q-100 2x'
                      src='https://ik.imagekit.io/2zlgs27bjo/public/image/portfolio/react-logo-new.svg?tr=w-33,q-100'
                      decoding='async'
                      data-nimg='intrinsic'
                      className='ourWorks_iconImage__fxkt8'
                      style={ImageDivSpanImgStyle2}
                    />
                  </span>
                </div>
              </div>
              <div className='ourWorks_techStackContainer__aunf8'>
                <p>Blockchain: : </p>
                <div className='ourWorks_techStack__SbVrG undefined'>
                  <span style={ImageDivSpanStyle1}>
                    <span style={ImageDivSpanSpanStyle1}>
                      <img
                        alt=''
                        aria-hidden='true'
                        src='data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%2733%27%20height=%2723%27/%3e'
                        style={ImageDivSpanSpanImgStyle1}
                      />
                    </span>
                    <img
                      alt='/portfolio/ethereum-logo-new.svg'
                      draggable='false'
                      srcSet='https://ik.imagekit.io/2zlgs27bjo/public/image/portfolio/ethereum-logo-new.svg?tr=w-33,q-100 1x, https://ik.imagekit.io/2zlgs27bjo/public/image/portfolio/ethereum-logo-new.svg?tr=w-33,q-100 2x'
                      src='https://ik.imagekit.io/2zlgs27bjo/public/image/portfolio/ethereum-logo-new.svg?tr=w-33,q-100'
                      decoding='async'
                      data-nimg='intrinsic'
                      className='ourWorks_iconImage__fxkt8'
                      style={ImageDivSpanImgStyle2}
                    />
                  </span>
                </div>
                <div className='ourWorks_techStack__SbVrG undefined'>
                  <span style={ImageDivSpanStyle1}>
                    <span style={ImageDivSpanSpanStyle1}>
                      <img
                        alt=''
                        aria-hidden='true'
                        src='data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%2733%27%20height=%2723%27/%3e'
                        style={ImageDivSpanSpanImgStyle1}
                      />
                    </span>
                    <img
                      alt='/portfolio/trx-logo-new.svg'
                      draggable='false'
                      srcSet='https://ik.imagekit.io/2zlgs27bjo/public/image/portfolio/trx-logo-new.svg?tr=w-33,q-100 1x, https://ik.imagekit.io/2zlgs27bjo/public/image/portfolio/trx-logo-new.svg?tr=w-33,q-100 2x'
                      src='https://ik.imagekit.io/2zlgs27bjo/public/image/portfolio/trx-logo-new.svg?tr=w-33,q-100'
                      decoding='async'
                      data-nimg='intrinsic'
                      className='ourWorks_iconImage__fxkt8'
                      style={ImageDivSpanImgStyle2}
                    />
                  </span>
                </div>
              </div>
            </div>
            <a
              href='https://www.cryptopool.money'
              target='_blank'
              rel='noreferrer noreferrer nofollow'
              className={
                theme.palette.mode === 'dark'
                  ? 'ant-btn ant-btn-default button_btn__XHL7T ourWorks_projectBtn__hj4Gx ourWorks_dark__c4aW6 button_dark__1020G button_direction-row__QRu0d'
                  : 'ant-btn ant-btn-default button_btn__XHL7T ourWorks_projectBtn__hj4Gx false button_light__M4f83 button_direction-row__QRu0d'
              }
            >
              <p>View Project</p>
            </a>
          </div>
        </div>
        <div className='ourWorks_ourWorksMobile__iQU4A'>
          <span style={ImageDivSpanStyle1}>
            <span style={ImageDivSpanSpanStyle1}>
              <img
                alt=''
                aria-hidden='true'
                src='data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%27315%27%20height=%27103%27/%3e'
                data-xblocker='passed'
                style={ImageDivSpanSpanImgStyle2}
              />
            </span>
            {theme.palette.mode === 'dark' ? (
              <img
                alt='/portfolio/raizers-logo.svg'
                draggable='false'
                srcSet='https://ik.imagekit.io/2zlgs27bjo/public/image/portfolio/dark/raizers-logo.svg?tr=w-315,q-100 1x, https://ik.imagekit.io/2zlgs27bjo/public/image/portfolio/dark/raizers-logo.svg?tr=w-315,q-100 2x'
                src='https://ik.imagekit.io/2zlgs27bjo/public/image/portfolio/dark/raizers-logo.svg?tr=w-315,q-100'
                decoding='async'
                data-nimg='intrinsic'
                className='ourWorks_logoImage__UQuzg'
                style={ImageDivSpanImgStyle2}
              />
            ) : (
              <img
                alt='/portfolio/raizers-logo.svg'
                draggable='false'
                src='data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7'
                decoding='async'
                data-nimg='intrinsic'
                className='ourWorks_logoImage__UQuzg'
                style={ImageDivSpanImgStyle2}
              />
            )}
          </span>
        </div>
        <div className='undefined ourWorks_ourWorks__kX339 ourWorks_ourWorksRowReverse___UTmy'>
          <div className='ourWorks_imageContainer__Ny1IS'>
            <span style={ImageDivSpanStyle1}>
              <span style={ImageDivSpanSpanStyle1}>
                <img
                  alt=''
                  aria-hidden='true'
                  src='data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%27820%27%20height=%27425%27/%3e'
                  style={ImageDivSpanSpanImgStyle2}
                  data-xblocker='passed'
                />
              </span>
              <img
                alt='/portfolio/raizers.png'
                draggable='false'
                srcSet='https://ik.imagekit.io/2zlgs27bjo/public/image/portfolio/raizers.png?tr=w-820,q-100 1x, https://ik.imagekit.io/2zlgs27bjo/public/image/portfolio/raizers.png?tr=w-820,q-100 2x'
                src='https://ik.imagekit.io/2zlgs27bjo/public/image/portfolio/raizers.png?tr=w-820,q-100'
                decoding='async'
                data-nimg='intrinsic'
                style={ImageDivSpanImgStyle3}
                data-xblocker='passed'
              />
            </span>
          </div>
          <div className='ourWorks_description__Zxype'>
            <div className='ourWorks_ourWorksWeb__14L4F'>
              <span style={ImageDivSpanStyle1}>
                <span style={ImageDivSpanSpanStyle1}>
                  <img
                    alt=''
                    aria-hidden='true'
                    src='data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%27315%27%20height=%27103%27/%3e'
                    style={ImageDivSpanSpanImgStyle2}
                    data-xblocker='passed'
                  />
                </span>
                {theme.palette.mode === 'dark' ? (
                  <img
                    alt='/portfolio/raizers-logo.svg'
                    draggable='false'
                    srcSet='https://ik.imagekit.io/2zlgs27bjo/public/image/portfolio/dark/raizers-logo.svg?tr=w-315,q-100 1x, https://ik.imagekit.io/2zlgs27bjo/public/image/portfolio/dark/raizers-logo.svg?tr=w-315,q-100 2x'
                    src='https://ik.imagekit.io/2zlgs27bjo/public/image/portfolio/dark/raizers-logo.svg?tr=w-315,q-100'
                    decoding='async'
                    data-nimg='intrinsic'
                    className='ourWorks_logoImage__UQuzg'
                    style={ImageDivSpanImgStyle3}
                    data-xblocker='passed'
                  />
                ) : (
                  <img
                    alt='/portfolio/raizers-logo.svg'
                    draggable='false'
                    src='https://ik.imagekit.io/2zlgs27bjo/public/image/portfolio/raizers-logo.svg?tr=w-315,q-100'
                    decoding='async'
                    data-nimg='intrinsic'
                    className='ourWorks_logoImage__UQuzg'
                    style={ImageDivSpanImgStyle3}
                    data-xblocker='passed'
                    srcSet='https://ik.imagekit.io/2zlgs27bjo/public/image/portfolio/raizers-logo.svg?tr=w-315,q-100 1x, https://ik.imagekit.io/2zlgs27bjo/public/image/portfolio/raizers-logo.svg?tr=w-315,q-100 2x'
                  />
                )}
              </span>
            </div>
            <p
              className='ourWorks_descriptionText__16qVs'
              style={{ margin: '15px 0px 24px' }}
            >
              <b> Raizers </b> emerges as your guiding star In the intricate
              maze of cryptocurrency. Crafted as a comprehensive hub, Raize lets
              you champion budding blockchain projects, pool funds collectively,
              and immerse yourself in the latest high-profile crypto ventures At
              the heart of Raizers lies a singular vision: to carve out a
              sanctuary for investors. A space where finding the next big
              opportunity in the crypto and blockchain domain isn't like finding
              a needle in a haystack, but a thrilling treasure hunt.
            </p>
            <div>
              <div className='ourWorks_techStackContainer__aunf8'>
                <p>Tech Stack:</p>
                <div className='ourWorks_techStack__SbVrG undefined'>
                  <span style={ImageDivSpanStyle1}>
                    <span style={ImageDivSpanSpanStyle1}>
                      <img
                        alt=''
                        aria-hidden='true'
                        src='data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%2733%27%20height=%2723%27/%3e'
                        style={ImageDivSpanSpanImgStyle1}
                      />
                    </span>
                    <img
                      alt='/portfolio/nodejs-logo-new.svg'
                      draggable='false'
                      srcSet='https://ik.imagekit.io/2zlgs27bjo/public/image/portfolio/nodejs-logo-new.svg?tr=w-33,q-100 1x, https://ik.imagekit.io/2zlgs27bjo/public/image/portfolio/nodejs-logo-new.svg?tr=w-33,q-100 2x'
                      src='https://ik.imagekit.io/2zlgs27bjo/public/image/portfolio/nodejs-logo-new.svg?tr=w-33,q-100'
                      decoding='async'
                      data-nimg='intrinsic'
                      className='ourWorks_iconImage__fxkt8'
                      style={ImageDivSpanImgStyle2}
                    />
                  </span>
                </div>
                <div className='ourWorks_techStack__SbVrG undefined'>
                  <span style={ImageDivSpanStyle1}>
                    <span style={ImageDivSpanSpanStyle1}>
                      <img
                        alt=''
                        aria-hidden='true'
                        src='data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%2733%27%20height=%2723%27/%3e'
                        style={ImageDivSpanSpanImgStyle1}
                      />
                    </span>
                    <img
                      alt='/portfolio/react-logo-new.svg'
                      draggable='false'
                      srcSet='https://ik.imagekit.io/2zlgs27bjo/public/image/portfolio/react-logo-new.svg?tr=w-33,q-100 1x, https://ik.imagekit.io/2zlgs27bjo/public/image/portfolio/react-logo-new.svg?tr=w-33,q-100 2x'
                      src='https://ik.imagekit.io/2zlgs27bjo/public/image/portfolio/react-logo-new.svg?tr=w-33,q-100'
                      decoding='async'
                      data-nimg='intrinsic'
                      className='ourWorks_iconImage__fxkt8'
                      style={ImageDivSpanImgStyle2}
                    />
                  </span>
                </div>
              </div>
              <div className='ourWorks_techStackContainer__aunf8'>
                <p>Blockchain: : </p>
                <div className='ourWorks_techStack__SbVrG undefined'>
                  <span style={ImageDivSpanStyle1}>
                    <span style={ImageDivSpanSpanStyle1}>
                      <img
                        alt=''
                        aria-hidden='true'
                        src='data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%2733%27%20height=%2723%27/%3e'
                        style={ImageDivSpanSpanImgStyle1}
                      />
                    </span>
                    <img
                      alt='/portfolio/ethereum-logo-new.svg'
                      draggable='false'
                      srcSet='https://ik.imagekit.io/2zlgs27bjo/public/image/portfolio/ethereum-logo-new.svg?tr=w-33,q-100 1x, https://ik.imagekit.io/2zlgs27bjo/public/image/portfolio/ethereum-logo-new.svg?tr=w-33,q-100 2x'
                      src='https://ik.imagekit.io/2zlgs27bjo/public/image/portfolio/ethereum-logo-new.svg?tr=w-33,q-100'
                      decoding='async'
                      data-nimg='intrinsic'
                      className='ourWorks_iconImage__fxkt8'
                      style={ImageDivSpanImgStyle2}
                    />
                  </span>
                </div>
              </div>
            </div>
            <a
              href='https://raize-front.web.app/'
              target='_blank'
              rel='noreferrer noreferrer nofollow'
              className={
                theme.palette.mode === 'dark'
                  ? 'ant-btn ant-btn-default button_btn__XHL7T ourWorks_projectBtn__hj4Gx ourWorks_dark__c4aW6 button_dark__1020G button_direction-row__QRu0d'
                  : 'ant-btn ant-btn-default button_btn__XHL7T ourWorks_projectBtn__hj4Gx false button_light__M4f83 button_direction-row__QRu0d'
              }
            >
              <p>View Project</p>
            </a>
          </div>
        </div>
        <div className='ourWorks_ourWorksMobile__iQU4A'>
          <span style={ImageDivSpanStyle1}>
            <span style={ImageDivSpanSpanStyle1}>
              <img
                alt=''
                aria-hidden='true'
                src='data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%27288%27%20height=%2748%27/%3e'
                style={ImageDivSpanSpanImgStyle1}
              />
            </span>
            {theme.palette.mode === 'dark' ? (
              <img
                alt='/portfolio/youmeme-new.svg'
                draggable='false'
                srcSet='https://ik.imagekit.io/2zlgs27bjo/public/image/portfolio/youmeme-dark.svg?tr=w-288,q-100 1x, https://ik.imagekit.io/2zlgs27bjo/public/image/portfolio/youmeme-dark.svg?tr=w-288,q-100 2x'
                src='https://ik.imagekit.io/2zlgs27bjo/public/image/portfolio/youmeme-dark.svg?tr=w-288,q-100'
                decoding='async'
                data-nimg='intrinsic'
                className='ourWorks_logoImage__UQuzg'
                style={ImageDivSpanImgStyle2}
              />
            ) : (
              <img
                alt='/portfolio/youmeme-new.svg'
                draggable='false'
                src='data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7'
                decoding='async'
                data-nimg='intrinsic'
                className='ourWorks_logoImage__UQuzg'
                style={ImageDivSpanImgStyle2}
              />
            )}
          </span>
        </div>
        <div className='undefined ourWorks_ourWorks__kX339 ourWorks_ourWorksCenter__nszn1'>
          <div className='ourWorks_imageContainer__Ny1IS'>
            <span style={ImageDivSpanStyle1}>
              <span style={ImageDivSpanSpanStyle1}>
                <img
                  alt=''
                  aria-hidden='true'
                  src='data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%27820%27%20height=%27425%27/%3e'
                  style={ImageDivSpanSpanImgStyle2}
                  data-xblocker='passed'
                />
              </span>
              <img
                alt='/portfolio/tr:q-100/youmeme.png'
                draggable='false'
                srcSet='https://ik.imagekit.io/2zlgs27bjo/public/image/portfolio/tr:q-100/youmeme.png?tr=w-820,q-100 1x, https://ik.imagekit.io/2zlgs27bjo/public/image/portfolio/tr:q-100/youmeme.png?tr=w-820,q-100 2x'
                src='https://ik.imagekit.io/2zlgs27bjo/public/image/portfolio/tr:q-100/youmeme.png?tr=w-820,q-100'
                decoding='async'
                data-nimg='intrinsic'
                style={ImageDivSpanImgStyle3}
                data-xblocker='passed'
              />
            </span>
          </div>
          <div className='ourWorks_description__Zxype'>
            <div className='ourWorks_ourWorksWeb__14L4F'>
              <span style={ImageDivSpanStyle1}>
                <span style={ImageDivSpanSpanStyle1}>
                  <img
                    alt=''
                    aria-hidden='true'
                    src='data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%27288%27%20height=%2748%27/%3e'
                    style={ImageDivSpanSpanImgStyle1}
                  />
                </span>
                {theme.palette.mode === 'dark' ? (
                  <img
                    alt='/portfolio/youmeme-new.svg'
                    draggable='false'
                    srcSet='https://ik.imagekit.io/2zlgs27bjo/public/image/portfolio/youmeme-dark.svg?tr=w-288,q-100 1x, https://ik.imagekit.io/2zlgs27bjo/public/image/portfolio/youmeme-dark.svg?tr=w-288,q-100 2x'
                    src='https://ik.imagekit.io/2zlgs27bjo/public/image/portfolio/youmeme-dark.svg?tr=w-288,q-100'
                    decoding='async'
                    data-nimg='intrinsic'
                    className='ourWorks_logoImage__UQuzg'
                    style={ImageDivSpanImgStyle2}
                  />
                ) : (
                  <img
                    alt='/portfolio/youmeme-new.svg'
                    draggable='false'
                    src='https://ik.imagekit.io/2zlgs27bjo/public/image/portfolio/youmeme-new.svg?tr=w-288,q-100'
                    decoding='async'
                    data-nimg='intrinsic'
                    className='ourWorks_logoImage__UQuzg'
                    style={ImageDivSpanImgStyle2}
                    srcSet='https://ik.imagekit.io/2zlgs27bjo/public/image/portfolio/youmeme-new.svg?tr=w-288,q-100 1x, https://ik.imagekit.io/2zlgs27bjo/public/image/portfolio/youmeme-new.svg?tr=w-288,q-100 2x'
                  />
                )}
              </span>
            </div>
            <p
              className='ourWorks_descriptionText__16qVs'
              style={{ margin: '24px 0px 18px' }}
            >
              <b>YouMeme</b> is a state-of-the-art social network designed to
              deliver joy on demand. Enjoy the latest and funniest memes in the
              form of images, GIFs, and videos! The platform includes a native
              meme &amp; GIF editor, special events, a reward system based on a
              Meme-To-Earn model, a next-gen NFT marketplace, and much more!
            </p>
            <div>
              <div className='ourWorks_techStackContainer__aunf8'>
                <p>Tech Stack:</p>
                <div className='ourWorks_techStack__SbVrG undefined'>
                  <span style={ImageDivSpanStyle1}>
                    <span style={ImageDivSpanSpanStyle1}>
                      <img
                        alt=''
                        aria-hidden='true'
                        src='data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%2733%27%20height=%2723%27/%3e'
                        style={ImageDivSpanSpanImgStyle1}
                      />
                    </span>
                    <img
                      alt='/portfolio/nodejs-logo-new.svg'
                      draggable='false'
                      srcSet='https://ik.imagekit.io/2zlgs27bjo/public/image/portfolio/nodejs-logo-new.svg?tr=w-33,q-100 1x, https://ik.imagekit.io/2zlgs27bjo/public/image/portfolio/nodejs-logo-new.svg?tr=w-33,q-100 2x'
                      src='https://ik.imagekit.io/2zlgs27bjo/public/image/portfolio/nodejs-logo-new.svg?tr=w-33,q-100'
                      decoding='async'
                      data-nimg='intrinsic'
                      className='ourWorks_iconImage__fxkt8'
                      style={ImageDivSpanImgStyle2}
                    />
                  </span>
                </div>
                <div className='ourWorks_techStack__SbVrG undefined'>
                  <span style={ImageDivSpanStyle1}>
                    <span style={ImageDivSpanSpanStyle1}>
                      <img
                        alt=''
                        aria-hidden='true'
                        src='data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%2733%27%20height=%2723%27/%3e'
                        style={ImageDivSpanSpanImgStyle1}
                      />
                    </span>
                    <img
                      alt='/portfolio/react-logo-new.svg'
                      draggable='false'
                      srcSet='https://ik.imagekit.io/2zlgs27bjo/public/image/portfolio/react-logo-new.svg?tr=w-33,q-100 1x, https://ik.imagekit.io/2zlgs27bjo/public/image/portfolio/react-logo-new.svg?tr=w-33,q-100 2x'
                      src='https://ik.imagekit.io/2zlgs27bjo/public/image/portfolio/react-logo-new.svg?tr=w-33,q-100'
                      decoding='async'
                      data-nimg='intrinsic'
                      className='ourWorks_iconImage__fxkt8'
                      style={ImageDivSpanImgStyle2}
                    />
                  </span>
                </div>
              </div>
              <div className='ourWorks_techStackContainer__aunf8'>
                <p>Blockchain: : </p>
                <div className='ourWorks_techStack__SbVrG undefined'>
                  <span style={ImageDivSpanStyle1}>
                    <span style={ImageDivSpanSpanStyle1}>
                      <img
                        alt=''
                        aria-hidden='true'
                        src='data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%2733%27%20height=%2723%27/%3e'
                        style={ImageDivSpanSpanImgStyle1}
                      />
                    </span>
                    <img
                      alt='/portfolio/ethereum-logo-new.svg'
                      draggable='false'
                      srcSet='https://ik.imagekit.io/2zlgs27bjo/public/image/portfolio/ethereum-logo-new.svg?tr=w-33,q-100 1x, https://ik.imagekit.io/2zlgs27bjo/public/image/portfolio/ethereum-logo-new.svg?tr=w-33,q-100 2x'
                      src='https://ik.imagekit.io/2zlgs27bjo/public/image/portfolio/ethereum-logo-new.svg?tr=w-33,q-100'
                      decoding='async'
                      data-nimg='intrinsic'
                      className='ourWorks_iconImage__fxkt8'
                      style={ImageDivSpanImgStyle2}
                    />
                  </span>
                </div>
              </div>
            </div>
            <a
              href='https://youmeme.com'
              target='_blank'
              rel='noreferrer noreferrer nofollow'
              className={
                theme.palette.mode === 'dark'
                  ? 'ant-btn ant-btn-default button_btn__XHL7T ourWorks_projectBtn__hj4Gx ourWorks_dark__c4aW6 button_dark__1020G button_direction-row__QRu0d'
                  : 'ant-btn ant-btn-default button_btn__XHL7T ourWorks_projectBtn__hj4Gx false button_light__M4f83 button_direction-row__QRu0d'
              }
            >
              <p>View Project</p>
            </a>
          </div>
        </div>
        <div className='ourWorks_ourWorksMobile__iQU4A'>
          <span style={ImageDivSpanStyle1}>
            <span style={ImageDivSpanSpanStyle1}>
              <img
                alt=''
                aria-hidden='true'
                src='data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%27213%27%20height=%2782%27/%3e'
                style={ImageDivSpanSpanImgStyle1}
              />
            </span>
            {theme.palette.mode === 'dark' ? (
              <img
                alt='/portfolio/minti-logo.svg'
                draggable='false'
                srcSet='https://ik.imagekit.io/2zlgs27bjo/public/image/portfolio/dark/minti-logo-dark.svg?tr=w-213,q-100 1x, https://ik.imagekit.io/2zlgs27bjo/public/image/portfolio/dark/minti-logo-dark.svg?tr=w-213,q-100 2x'
                src='https://ik.imagekit.io/2zlgs27bjo/public/image/portfolio/dark/minti-logo-dark.svg?tr=w-213,q-100'
                decoding='async'
                data-nimg='intrinsic'
                className='ourWorks_logoImage__UQuzg'
                style={ImageDivSpanImgStyle2}
              />
            ) : (
              <img
                alt='/portfolio/minti-logo.svg'
                draggable='false'
                src='data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7'
                decoding='async'
                data-nimg='intrinsic'
                className='ourWorks_logoImage__UQuzg'
                style={ImageDivSpanImgStyle2}
              />
            )}
          </span>
        </div>
        <div className='undefined ourWorks_ourWorks__kX339 ourWorks_ourWorksRowReverse___UTmy'>
          <div className='ourWorks_imageContainer__Ny1IS'>
            <span style={ImageDivSpanStyle1}>
              <span style={ImageDivSpanSpanStyle1}>
                <img
                  alt=''
                  aria-hidden='true'
                  src='data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%27820%27%20height=%27425%27/%3e'
                  style={ImageDivSpanSpanImgStyle2}
                  data-xblocker='passed'
                />
              </span>
              <img
                alt='/portfolio/tr:q-100/mintiapp.png'
                draggable='false'
                srcSet='https://ik.imagekit.io/2zlgs27bjo/public/image/portfolio/tr:q-100/mintiapp.png?tr=w-820,q-100 1x, https://ik.imagekit.io/2zlgs27bjo/public/image/portfolio/tr:q-100/mintiapp.png?tr=w-820,q-100 2x'
                src='https://ik.imagekit.io/2zlgs27bjo/public/image/portfolio/tr:q-100/mintiapp.png?tr=w-820,q-100'
                decoding='async'
                data-nimg='intrinsic'
                style={ImageDivSpanImgStyle3}
                data-xblocker='passed'
              />
            </span>
          </div>
          <div className='ourWorks_description__Zxype'>
            <div className='ourWorks_ourWorksWeb__14L4F'>
              <span style={ImageDivSpanStyle1}>
                <span style={ImageDivSpanSpanStyle1}>
                  <img
                    alt=''
                    aria-hidden='true'
                    src='data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%27213%27%20height=%2782%27/%3e'
                    style={ImageDivSpanSpanImgStyle1}
                  />
                </span>
                {theme.palette.mode === 'dark' ? (
                  <img
                    alt='/portfolio/minti-logo.svg'
                    draggable='false'
                    srcSet='https://ik.imagekit.io/2zlgs27bjo/public/image/portfolio/dark/minti-logo-dark.svg?tr=w-213,q-100 1x, https://ik.imagekit.io/2zlgs27bjo/public/image/portfolio/dark/minti-logo-dark.svg?tr=w-213,q-100 2x'
                    src='https://ik.imagekit.io/2zlgs27bjo/public/image/portfolio/dark/minti-logo-dark.svg?tr=w-213,q-100'
                    decoding='async'
                    data-nimg='intrinsic'
                    className='ourWorks_logoImage__UQuzg'
                    style={ImageDivSpanImgStyle2}
                  />
                ) : (
                  <img
                    alt='/portfolio/minti-logo.svg'
                    draggable='false'
                    src='https://ik.imagekit.io/2zlgs27bjo/public/image/portfolio/minti-logo.svg?tr=w-213,q-100'
                    decoding='async'
                    data-nimg='intrinsic'
                    className='ourWorks_logoImage__UQuzg'
                    style={ImageDivSpanImgStyle2}
                    srcSet='https://ik.imagekit.io/2zlgs27bjo/public/image/portfolio/minti-logo.svg?tr=w-213,q-100 1x, https://ik.imagekit.io/2zlgs27bjo/public/image/portfolio/minti-logo.svg?tr=w-213,q-100 2x'
                  />
                )}
              </span>
            </div>
            <p
              className='ourWorks_descriptionText__16qVs'
              style={{ margin: '13px 0px 20px' }}
            >
              <b>Minting</b> on Solana with Minti has never been easier. It's
              lighting fast, and designed for you to easily mint all of your
              social content.With Minti you can now mint your social content and
              post it to your Instagram and Twitter where all of your followers
              are.
            </p>
            <div>
              <div className='ourWorks_techStackContainer__aunf8'>
                <p>Tech Stack:</p>
                <div className='ourWorks_techStack__SbVrG undefined'>
                  <span style={ImageDivSpanStyle1}>
                    <span style={ImageDivSpanSpanStyle1}>
                      <img
                        alt=''
                        aria-hidden='true'
                        src='data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%2733%27%20height=%2723%27/%3e'
                        style={ImageDivSpanSpanImgStyle1}
                      />
                    </span>
                    <img
                      alt='/portfolio/nodejs-logo-new.svg'
                      draggable='false'
                      srcSet='https://ik.imagekit.io/2zlgs27bjo/public/image/portfolio/nodejs-logo-new.svg?tr=w-33,q-100 1x, https://ik.imagekit.io/2zlgs27bjo/public/image/portfolio/nodejs-logo-new.svg?tr=w-33,q-100 2x'
                      src='https://ik.imagekit.io/2zlgs27bjo/public/image/portfolio/nodejs-logo-new.svg?tr=w-33,q-100'
                      decoding='async'
                      data-nimg='intrinsic'
                      className='ourWorks_iconImage__fxkt8'
                      style={ImageDivSpanImgStyle2}
                    />
                  </span>
                </div>
                <div className='ourWorks_techStack__SbVrG undefined'>
                  <span style={ImageDivSpanStyle1}>
                    <span style={ImageDivSpanSpanStyle1}>
                      <img
                        alt=''
                        aria-hidden='true'
                        src='data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%2733%27%20height=%2723%27/%3e'
                        style={ImageDivSpanSpanImgStyle1}
                      />
                    </span>
                    <img
                      alt='/portfolio/react-logo-new.svg'
                      draggable='false'
                      srcSet='https://ik.imagekit.io/2zlgs27bjo/public/image/portfolio/react-logo-new.svg?tr=w-33,q-100 1x, https://ik.imagekit.io/2zlgs27bjo/public/image/portfolio/react-logo-new.svg?tr=w-33,q-100 2x'
                      src='https://ik.imagekit.io/2zlgs27bjo/public/image/portfolio/react-logo-new.svg?tr=w-33,q-100'
                      decoding='async'
                      data-nimg='intrinsic'
                      className='ourWorks_iconImage__fxkt8'
                      style={ImageDivSpanImgStyle2}
                    />
                  </span>
                </div>
              </div>
              <div className='ourWorks_techStackContainer__aunf8'>
                <p>Blockchain:: </p>
                <div className='ourWorks_techStack__SbVrG undefined'>
                  <span style={ImageDivSpanStyle1}>
                    <span style={ImageDivSpanSpanStyle1}>
                      <img
                        alt=''
                        aria-hidden='true'
                        src='data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%2733%27%20height=%2723%27/%3e'
                        style={ImageDivSpanSpanImgStyle1}
                      />
                    </span>
                    <img
                      alt='/portfolio/solana-logo-new.svg'
                      draggable='false'
                      srcSet='https://ik.imagekit.io/2zlgs27bjo/public/image/portfolio/solana-logo-new.svg?tr=w-33,q-100 1x, https://ik.imagekit.io/2zlgs27bjo/public/image/portfolio/solana-logo-new.svg?tr=w-33,q-100 2x'
                      src='https://ik.imagekit.io/2zlgs27bjo/public/image/portfolio/solana-logo-new.svg?tr=w-33,q-100'
                      decoding='async'
                      data-nimg='intrinsic'
                      className='ourWorks_iconImage__fxkt8'
                      style={ImageDivSpanImgStyle2}
                    />
                  </span>
                </div>
                <div
                  className='ourWorks_techStack__SbVrG ourWorks_stackLong___ayt4'
                  style={{ width: '123px', height: '34px' }}
                >
                  <span style={ImageDivSpanStyle1}>
                    <span style={ImageDivSpanSpanStyle1}>
                      <img
                        alt=''
                        aria-hidden='true'
                        src='data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%2733%27%20height=%2723%27/%3e'
                        style={ImageDivSpanSpanImgStyle1}
                      />
                    </span>
                    <img
                      alt='/portfolio/metaplex-logo-new.svg'
                      draggable='false'
                      srcSet='https://ik.imagekit.io/2zlgs27bjo/public/image/portfolio/metaplex-logo-new.svg?tr=w-33,q-100 1x, https://ik.imagekit.io/2zlgs27bjo/public/image/portfolio/metaplex-logo-new.svg?tr=w-33,q-100 2x'
                      src='https://ik.imagekit.io/2zlgs27bjo/public/image/portfolio/metaplex-logo-new.svg?tr=w-33,q-100'
                      decoding='async'
                      data-nimg='intrinsic'
                      className='ourWorks_iconImage__fxkt8'
                      style={ImageDivSpanImgStyle2}
                    />
                  </span>
                </div>
              </div>
            </div>
            <a
              href='https://www.mintiapp.com/'
              target='_blank'
              rel='noreferrer noreferrer nofollow'
              className={
                theme.palette.mode === 'dark'
                  ? 'ant-btn ant-btn-default button_btn__XHL7T ourWorks_projectBtn__hj4Gx ourWorks_dark__c4aW6 button_dark__1020G button_direction-row__QRu0d'
                  : 'ant-btn ant-btn-default button_btn__XHL7T ourWorks_projectBtn__hj4Gx false button_light__M4f83 button_direction-row__QRu0d'
              }
            >
              <p>View Project</p>
            </a>
          </div>
        </div>
        <div className='ourWorks_ourWorksMobile__iQU4A'>
          <span style={ImageDivSpanStyle1}>
            <span style={ImageDivSpanSpanStyle1}>
              <img
                alt=''
                aria-hidden='true'
                src='data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%27280%27%20height=%27103%27/%3e'
                data-xblocker='passed'
                style={ImageDivSpanSpanImgStyle2}
              />
            </span>
            {theme.palette.mode === 'dark' ? (
              <img
                alt='/portfolio/lif3-logo.svg'
                draggable='false'
                srcSet='https://ik.imagekit.io/2zlgs27bjo/public/image/portfolio/dark/lif3-dark-logo.svg?tr=w-280,q-100 1x, https://ik.imagekit.io/2zlgs27bjo/public/image/portfolio/dark/lif3-dark-logo.svg?tr=w-280,q-100 2x'
                src='https://ik.imagekit.io/2zlgs27bjo/public/image/portfolio/dark/lif3-dark-logo.svg?tr=w-280,q-100'
                decoding='async'
                data-nimg='intrinsic'
                className='ourWorks_logoImage__UQuzg'
                style={ImageDivSpanImgStyle2}
              />
            ) : (
              <img
                alt='/portfolio/lif3-logo.svg'
                draggable='false'
                src='data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7'
                decoding='async'
                data-nimg='intrinsic'
                className='ourWorks_logoImage__UQuzg'
                style={ImageDivSpanImgStyle2}
              />
            )}
          </span>
        </div>
        <div className='undefined ourWorks_ourWorks__kX339 ourWorks_ourWorksCenter__nszn1'>
          <div className='ourWorks_imageContainer__Ny1IS'>
            <span style={ImageDivSpanStyle1}>
              <span style={ImageDivSpanSpanStyle1}>
                <img
                  alt=''
                  aria-hidden='true'
                  src='data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%27820%27%20height=%27425%27/%3e'
                  style={ImageDivSpanSpanImgStyle2}
                  data-xblocker='passed'
                />
              </span>
              <img
                alt='/portfolio/lif3.png'
                draggable='false'
                srcSet='https://ik.imagekit.io/2zlgs27bjo/public/image/portfolio/lif3.png?tr=w-820,q-100 1x, https://ik.imagekit.io/2zlgs27bjo/public/image/portfolio/lif3.png?tr=w-820,q-100 2x'
                src='https://ik.imagekit.io/2zlgs27bjo/public/image/portfolio/lif3.png?tr=w-820,q-100'
                decoding='async'
                data-nimg='intrinsic'
                style={ImageDivSpanImgStyle3}
                data-xblocker='passed'
              />
            </span>
          </div>
          <div className='ourWorks_description__Zxype'>
            <div className='ourWorks_ourWorksWeb__14L4F'>
              <span style={ImageDivSpanStyle1}>
                <span style={ImageDivSpanSpanStyle1}>
                  <img
                    alt=''
                    aria-hidden='true'
                    src='data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%27280%27%20height=%27103%27/%3e'
                    style={ImageDivSpanSpanImgStyle2}
                    data-xblocker='passed'
                  />
                </span>
                {theme.palette.mode === 'dark' ? (
                  <img
                    alt='/portfolio/lif3-logo.svg'
                    draggable='false'
                    srcSet='https://ik.imagekit.io/2zlgs27bjo/public/image/portfolio/dark/lif3-dark-logo.svg?tr=w-280,q-100 1x, https://ik.imagekit.io/2zlgs27bjo/public/image/portfolio/dark/lif3-dark-logo.svg?tr=w-280,q-100 2x'
                    src='https://ik.imagekit.io/2zlgs27bjo/public/image/portfolio/dark/lif3-dark-logo.svg?tr=w-280,q-100'
                    decoding='async'
                    data-nimg='intrinsic'
                    className='ourWorks_logoImage__UQuzg'
                    style={ImageDivSpanImgStyle3}
                    data-xblocker='passed'
                  />
                ) : (
                  <img
                    alt='/portfolio/lif3-logo.svg'
                    draggable='false'
                    src='https://ik.imagekit.io/2zlgs27bjo/public/image/portfolio/lif3-logo.svg?tr=w-280,q-100'
                    decoding='async'
                    data-nimg='intrinsic'
                    className='ourWorks_logoImage__UQuzg'
                    style={ImageDivSpanImgStyle3}
                    data-xblocker='passed'
                    srcSet='https://ik.imagekit.io/2zlgs27bjo/public/image/portfolio/lif3-logo.svg?tr=w-280,q-100 1x, https://ik.imagekit.io/2zlgs27bjo/public/image/portfolio/lif3-logo.svg?tr=w-280,q-100 2x'
                  />
                )}
              </span>
            </div>
            <p
              className='ourWorks_descriptionText__16qVs'
              style={{ margin: '15px 0px 24px' }}
            >
              <b>Lif3</b> is a DeFi mobile wallet app that lets users stake
              their tokens to earn rewards. It's part of a larger ecosystem
              offering both wallet storage and blockchain solutions, providing a
              comprehensive tool for managing and growing digital assets
              efficiently.
            </p>
            <div>
              <div className='ourWorks_techStackContainer__aunf8'>
                <p>Tech Stack:</p>
                <div className='ourWorks_techStack__SbVrG undefined'>
                  <span style={ImageDivSpanStyle1}>
                    <span style={ImageDivSpanSpanStyle1}>
                      <img
                        alt=''
                        aria-hidden='true'
                        src='data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%2733%27%20height=%2723%27/%3e'
                        style={ImageDivSpanSpanImgStyle1}
                      />
                    </span>
                    <img
                      alt='/portfolio/swift-logo-new.svg'
                      draggable='false'
                      srcSet='https://ik.imagekit.io/2zlgs27bjo/public/image/portfolio/swift-logo-new.svg?tr=w-33,q-100 1x, https://ik.imagekit.io/2zlgs27bjo/public/image/portfolio/swift-logo-new.svg?tr=w-33,q-100 2x'
                      src='https://ik.imagekit.io/2zlgs27bjo/public/image/portfolio/swift-logo-new.svg?tr=w-33,q-100'
                      decoding='async'
                      data-nimg='intrinsic'
                      className='ourWorks_iconImage__fxkt8'
                      style={ImageDivSpanImgStyle2}
                    />
                  </span>
                </div>
                <div className='ourWorks_techStack__SbVrG undefined'>
                  <span style={ImageDivSpanStyle1}>
                    <span style={ImageDivSpanSpanStyle1}>
                      <img
                        alt=''
                        aria-hidden='true'
                        src='data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%2733%27%20height=%2723%27/%3e'
                        style={ImageDivSpanSpanImgStyle1}
                      />
                    </span>
                    <img
                      alt='/portfolio/kotlin-logo-new.svg'
                      draggable='false'
                      srcSet='https://ik.imagekit.io/2zlgs27bjo/public/image/portfolio/kotlin-logo-new.svg?tr=w-33,q-100 1x, https://ik.imagekit.io/2zlgs27bjo/public/image/portfolio/kotlin-logo-new.svg?tr=w-33,q-100 2x'
                      src='https://ik.imagekit.io/2zlgs27bjo/public/image/portfolio/kotlin-logo-new.svg?tr=w-33,q-100'
                      decoding='async'
                      data-nimg='intrinsic'
                      className='ourWorks_iconImage__fxkt8'
                      style={ImageDivSpanImgStyle2}
                    />
                  </span>
                </div>
                <div className='ourWorks_techStack__SbVrG undefined'>
                  <span style={ImageDivSpanStyle1}>
                    <span style={ImageDivSpanSpanStyle1}>
                      <img
                        alt=''
                        aria-hidden='true'
                        src='data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%2733%27%20height=%2723%27/%3e'
                        style={ImageDivSpanSpanImgStyle1}
                      />
                    </span>
                    <img
                      alt='/portfolio/java-logo-new.svg'
                      draggable='false'
                      srcSet='https://ik.imagekit.io/2zlgs27bjo/public/image/portfolio/java-logo-new.svg?tr=w-33,q-100 1x, https://ik.imagekit.io/2zlgs27bjo/public/image/portfolio/java-logo-new.svg?tr=w-33,q-100 2x'
                      src='https://ik.imagekit.io/2zlgs27bjo/public/image/portfolio/java-logo-new.svg?tr=w-33,q-100'
                      decoding='async'
                      data-nimg='intrinsic'
                      className='ourWorks_iconImage__fxkt8'
                      style={ImageDivSpanImgStyle2}
                    />
                  </span>
                </div>
              </div>
            </div>
            <a
              href='https://lif3.com/'
              target='_blank'
              rel='noreferrer noreferrer nofollow'
              className={
                theme.palette.mode === 'dark'
                  ? 'ant-btn ant-btn-default button_btn__XHL7T ourWorks_projectBtn__hj4Gx ourWorks_dark__c4aW6 button_dark__1020G button_direction-row__QRu0d'
                  : 'ant-btn ant-btn-default button_btn__XHL7T ourWorks_projectBtn__hj4Gx false button_light__M4f83 button_direction-row__QRu0d'
              }
            >
              <p>View Project</p>
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PortfolioOurWorks

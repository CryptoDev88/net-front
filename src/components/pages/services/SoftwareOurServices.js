import { useTheme } from '@mui/system'
import { ImageDivSpanStyle2, ImageDivSpanImgStyle3 } from '../../BaseCss'

function SoftwareOurServices () {
  const theme = useTheme()

  return (
    <section className='ourServices_ourServicesContainer__mXpcX'>
      <div
        className={
          theme.palette.mode === 'dark'
            ? 'ourServices_ourServicestitleBox__95ACj ourServices_ourServicestitleBoxDark__b0JoH'
            : 'className="ourServices_ourServicestitleBox__95ACj false"'
        }
      >
        <div className='title_titleContainer__SvQXY'>
          <div
            className={
              theme.palette.mode === 'dark'
                ? 'title_title__mdTgq title_titleDark__uzlqO'
                : 'title_title__mdTgq'
            }
          >
            <span className='title_title__mdTgq'>Our Services</span>
          </div>
        </div>
      </div>
      <div
        className={
          theme.palette.mode === 'dark'
            ? 'ourServices_subYitle__7scrF ourServices_subYitleDark__3xg4Q'
            : 'ourServices_subYitle__7scrF false'
        }
      >
        Web Development
      </div>
      <div
        className={
          theme.palette.mode === 'dark'
            ? 'undefined services_servicesContainerDark__Q9Ut8 false'
            : 'undefined false false'
        }
      >
        <div
          className={
            theme.palette.mode === 'dark'
              ? 'services_servicesBox__nQbr4 undefined false'
              : 'services_servicesBox__nQbr4 false false'
          }
        >
          <div
            className={
              theme.palette.mode === 'dark'
                ? 'services_servicesTextBox__87ft3 services_rightPositionText__MeutG services_dark__BufB5'
                : 'services_servicesTextBox__87ft3 services_rightPositionText__MeutG'
            }
          >
            <div className='subTitleText_subTitle__2anJB'>
              <span
                className={
                  theme.palette.mode === 'dark'
                    ? 'subTitleText_subTitleText__bQxEn subTitleText_subTitleTextColor--font-color__AYsIE'
                    : 'subTitleText_subTitleText__bQxEn undefined'
                }
              >
                Web Development
              </span>
            </div>
            <div
              className='subTitleText_description__WoiQ_'
              style={{ maxWidth: 'none' }}
            >
              Solicy specializes in website design and development services. Our
              web experiences are high-performing, feature-oriented and
              digitally transformative, designed to be user-friendly, fully
              functional, very secure and able to scale as your enterprise
              grows.
            </div>
          </div>
          <div className='services_mobileTitle__F_X4Q'>Web Development</div>
          <div className='services_servicesImgBox__CJWSc undefined false  '>
            <div
              className='services_imageBlock__l9EFr false'
              style={{ height: '400px' }}
            >
              <span style={ImageDivSpanStyle2}>
                {theme.palette.mode === 'dark' ? (
                  <img
                    alt='/icons/servicesIcons/web-light.svg'
                    draggable='false'
                    sizes='100vw'
                    srcSet='https://ik.imagekit.io/2zlgs27bjo/public/icons/servicesIcons/webImageDark.svg?tr=w-undefined,q-100 640w, https://ik.imagekit.io/2zlgs27bjo/public/icons/servicesIcons/webImageDark.svg?tr=w-undefined,q-100 750w, https://ik.imagekit.io/2zlgs27bjo/public/icons/servicesIcons/webImageDark.svg?tr=w-undefined,q-100 828w, https://ik.imagekit.io/2zlgs27bjo/public/icons/servicesIcons/webImageDark.svg?tr=w-undefined,q-100 1080w, https://ik.imagekit.io/2zlgs27bjo/public/icons/servicesIcons/webImageDark.svg?tr=w-undefined,q-100 1200w, https://ik.imagekit.io/2zlgs27bjo/public/icons/servicesIcons/webImageDark.svg?tr=w-undefined,q-100 1920w, https://ik.imagekit.io/2zlgs27bjo/public/icons/servicesIcons/webImageDark.svg?tr=w-undefined,q-100 2048w, https://ik.imagekit.io/2zlgs27bjo/public/icons/servicesIcons/webImageDark.svg?tr=w-undefined,q-100 3840w'
                    src='https://ik.imagekit.io/2zlgs27bjo/public/icons/servicesIcons/webImageDark.svg?tr=w-undefined,q-100'
                    decoding='async'
                    data-nimg='fill'
                    style={ImageDivSpanImgStyle3}
                    data-xblocker='passed'
                  />
                ) : (
                  <img
                    alt='/icons/servicesIcons/web-light.svg'
                    draggable='false'
                    sizes='100vw'
                    srcSet='https://ik.imagekit.io/2zlgs27bjo/public/icons/servicesIcons/web-light.svg?tr=w-undefined,q-100 640w, https://ik.imagekit.io/2zlgs27bjo/public/icons/servicesIcons/web-light.svg?tr=w-undefined,q-100 750w, https://ik.imagekit.io/2zlgs27bjo/public/icons/servicesIcons/web-light.svg?tr=w-undefined,q-100 828w, https://ik.imagekit.io/2zlgs27bjo/public/icons/servicesIcons/web-light.svg?tr=w-undefined,q-100 1080w, https://ik.imagekit.io/2zlgs27bjo/public/icons/servicesIcons/web-light.svg?tr=w-undefined,q-100 1200w, https://ik.imagekit.io/2zlgs27bjo/public/icons/servicesIcons/web-light.svg?tr=w-undefined,q-100 1920w, https://ik.imagekit.io/2zlgs27bjo/public/icons/servicesIcons/web-light.svg?tr=w-undefined,q-100 2048w, https://ik.imagekit.io/2zlgs27bjo/public/icons/servicesIcons/web-light.svg?tr=w-undefined,q-100 3840w'
                    src='https://ik.imagekit.io/2zlgs27bjo/public/icons/servicesIcons/web-light.svg?tr=w-undefined,q-100'
                    decoding='async'
                    data-nimg='fill'
                    style={ImageDivSpanImgStyle3}
                    data-xblocker='passed'
                  />
                )}
              </span>
            </div>
          </div>
          <div className='services_mobileDescription__h4HSV'>
            Solicy specializes in website design and development services. Our
            web experiences are high-performing, feature-oriented and digitally
            transformative, designed to be user-friendly, fully functional, very
            secure and able to scale as your enterprise grows.
          </div>
        </div>
      </div>
      <div
        className={
          theme.palette.mode === 'dark'
            ? 'undefined false false'
            : 'undefined false services_servicesContainerLight__Hu2SB'
        }
      >
        <div className='services_servicesBox__nQbr4 false services_servicesBoxStart__dlvus'>
          <div
            className={
              theme.palette.mode === 'dark'
                ? 'services_servicesTextBox__87ft3 undefined services_dark__BufB5'
                : 'services_servicesTextBox__87ft3 undefined'
            }
          >
            <div className='subTitleText_subTitle__2anJB'>
              <span
                className={
                  theme.palette.mode === 'dark'
                    ? 'subTitleText_subTitleText__bQxEn subTitleText_subTitleTextColor--font-color__AYsIE'
                    : 'subTitleText_subTitleText__bQxEn undefined'
                }
              >
                Software Architecture
              </span>
            </div>
            <div
              className='subTitleText_description__WoiQ_'
              style={{ maxWidth: 'none' }}
            >
              To identify a problem and provide a solution, Solicy <br />{' '}
              provides software architecture services that involve technical
              project analysis. We develop cutting-edge digital products and
              offer a comprehensive launch <br /> cycle, including design,
              development, promotion, and future development.
            </div>
          </div>
          <div className='services_mobileTitle__F_X4Q'>
            Software Architecture
          </div>
          <div className='services_servicesImgBox__CJWSc undefined true  '>
            <div
              className='services_imageBlock__l9EFr true'
              style={{ width: '400px', height: '400px' }}
            >
              <span style={ImageDivSpanStyle2}>
                {theme.palette.mode === 'dark' ? (
                  <img
                    alt='/icons/servicesIcons/software.svg'
                    draggable='false'
                    sizes='100vw'
                    srcSet='https://ik.imagekit.io/2zlgs27bjo/public/icons/servicesIcons/software-dark.svg?tr=w-undefined,q-100 640w, https://ik.imagekit.io/2zlgs27bjo/public/icons/servicesIcons/software-dark.svg?tr=w-undefined,q-100 750w, https://ik.imagekit.io/2zlgs27bjo/public/icons/servicesIcons/software-dark.svg?tr=w-undefined,q-100 828w, https://ik.imagekit.io/2zlgs27bjo/public/icons/servicesIcons/software-dark.svg?tr=w-undefined,q-100 1080w, https://ik.imagekit.io/2zlgs27bjo/public/icons/servicesIcons/software-dark.svg?tr=w-undefined,q-100 1200w, https://ik.imagekit.io/2zlgs27bjo/public/icons/servicesIcons/software-dark.svg?tr=w-undefined,q-100 1920w, https://ik.imagekit.io/2zlgs27bjo/public/icons/servicesIcons/software-dark.svg?tr=w-undefined,q-100 2048w, https://ik.imagekit.io/2zlgs27bjo/public/icons/servicesIcons/software-dark.svg?tr=w-undefined,q-100 3840w'
                    src='https://ik.imagekit.io/2zlgs27bjo/public/icons/servicesIcons/software-dark.svg?tr=w-undefined,q-100'
                    decoding='async'
                    data-nimg='fill'
                    style={ImageDivSpanImgStyle3}
                    data-xblocker='passed'
                  />
                ) : (
                  <img
                    alt='/icons/servicesIcons/software.svg'
                    draggable='false'
                    src='https://ik.imagekit.io/2zlgs27bjo/public/icons/servicesIcons/software.svg?tr=w-undefined,q-100'
                    decoding='async'
                    data-nimg='fill'
                    style={ImageDivSpanImgStyle3}
                    data-xblocker='passed'
                    sizes='100vw'
                    srcSet='https://ik.imagekit.io/2zlgs27bjo/public/icons/servicesIcons/software.svg?tr=w-undefined,q-100 640w, https://ik.imagekit.io/2zlgs27bjo/public/icons/servicesIcons/software.svg?tr=w-undefined,q-100 750w, https://ik.imagekit.io/2zlgs27bjo/public/icons/servicesIcons/software.svg?tr=w-undefined,q-100 828w, https://ik.imagekit.io/2zlgs27bjo/public/icons/servicesIcons/software.svg?tr=w-undefined,q-100 1080w, https://ik.imagekit.io/2zlgs27bjo/public/icons/servicesIcons/software.svg?tr=w-undefined,q-100 1200w, https://ik.imagekit.io/2zlgs27bjo/public/icons/servicesIcons/software.svg?tr=w-undefined,q-100 1920w, https://ik.imagekit.io/2zlgs27bjo/public/icons/servicesIcons/software.svg?tr=w-undefined,q-100 2048w, https://ik.imagekit.io/2zlgs27bjo/public/icons/servicesIcons/software.svg?tr=w-undefined,q-100 3840w'
                  />
                )}
              </span>
            </div>
          </div>
          <div className='services_mobileDescription__h4HSV'>
            To identify a problem and provide a solution, Solicy <br /> provides
            software architecture services that involve technical project
            analysis. We develop cutting-edge digital products and offer a
            comprehensive launch <br /> cycle, including design, development,
            promotion, and future development.
          </div>
        </div>
      </div>
      <div
        className={
          theme.palette.mode === 'dark'
            ? 'undefined services_servicesContainerDark__Q9Ut8 false'
            : 'undefined false false'
        }
      >
        <div
          className={
            theme.palette.mode === 'dark'
              ? 'services_servicesBox__nQbr4 undefined false'
              : 'services_servicesBox__nQbr4 false false'
          }
        >
          <div
            className={
              theme.palette.mode === 'dark'
                ? 'services_servicesTextBox__87ft3 services_rightPositionText__MeutG services_dark__BufB5'
                : 'services_servicesTextBox__87ft3 services_rightPositionText__MeutG'
            }
          >
            <div className='subTitleText_subTitle__2anJB'>
              <span
                className={
                  theme.palette.mode === 'dark'
                    ? 'subTitleText_subTitleText__bQxEn subTitleText_subTitleTextColor--font-color__AYsIE'
                    : 'subTitleText_subTitleText__bQxEn undefined'
                }
              >
                Project Management
              </span>
            </div>
            <div
              className='subTitleText_description__WoiQ_'
              style={{ maxWidth: 'none' }}
            >
              New ideas are great, but they need to be managed. Solicy can help
              you manage your project effectively by planning, coordinating, and
              executing projects according to specific requirements and
              constraints. We take into account your time, budget, and available
              resources to make the best solutions.
            </div>
          </div>
          <div className='services_mobileTitle__F_X4Q'>Project Management</div>
          <div className='services_servicesImgBox__CJWSc undefined false  '>
            <div
              className='services_imageBlock__l9EFr false'
              style={{ height: '400px' }}
            >
              <span style={ImageDivSpanStyle2}>
                {theme.palette.mode === 'dark' ? (
                  <img
                    alt='/icons/servicesIcons/project.svg'
                    draggable='false'
                    sizes='100vw'
                    srcSet='https://ik.imagekit.io/2zlgs27bjo/public/icons/servicesIcons/projectDark.svg?tr=w-undefined,q-100 640w, https://ik.imagekit.io/2zlgs27bjo/public/icons/servicesIcons/projectDark.svg?tr=w-undefined,q-100 750w, https://ik.imagekit.io/2zlgs27bjo/public/icons/servicesIcons/projectDark.svg?tr=w-undefined,q-100 828w, https://ik.imagekit.io/2zlgs27bjo/public/icons/servicesIcons/projectDark.svg?tr=w-undefined,q-100 1080w, https://ik.imagekit.io/2zlgs27bjo/public/icons/servicesIcons/projectDark.svg?tr=w-undefined,q-100 1200w, https://ik.imagekit.io/2zlgs27bjo/public/icons/servicesIcons/projectDark.svg?tr=w-undefined,q-100 1920w, https://ik.imagekit.io/2zlgs27bjo/public/icons/servicesIcons/projectDark.svg?tr=w-undefined,q-100 2048w, https://ik.imagekit.io/2zlgs27bjo/public/icons/servicesIcons/projectDark.svg?tr=w-undefined,q-100 3840w'
                    src='https://ik.imagekit.io/2zlgs27bjo/public/icons/servicesIcons/projectDark.svg?tr=w-undefined,q-100'
                    decoding='async'
                    data-nimg='fill'
                    style={ImageDivSpanImgStyle3}
                    data-xblocker='passed'
                  />
                ) : (
                  <img
                    alt='/icons/servicesIcons/project.svg'
                    draggable='false'
                    src='https://ik.imagekit.io/2zlgs27bjo/public/icons/servicesIcons/project.svg?tr=w-undefined,q-100'
                    decoding='async'
                    data-nimg='fill'
                    style={ImageDivSpanImgStyle3}
                    data-xblocker='passed'
                    sizes='100vw'
                    srcSet='https://ik.imagekit.io/2zlgs27bjo/public/icons/servicesIcons/project.svg?tr=w-undefined,q-100 640w, https://ik.imagekit.io/2zlgs27bjo/public/icons/servicesIcons/project.svg?tr=w-undefined,q-100 750w, https://ik.imagekit.io/2zlgs27bjo/public/icons/servicesIcons/project.svg?tr=w-undefined,q-100 828w, https://ik.imagekit.io/2zlgs27bjo/public/icons/servicesIcons/project.svg?tr=w-undefined,q-100 1080w, https://ik.imagekit.io/2zlgs27bjo/public/icons/servicesIcons/project.svg?tr=w-undefined,q-100 1200w, https://ik.imagekit.io/2zlgs27bjo/public/icons/servicesIcons/project.svg?tr=w-undefined,q-100 1920w, https://ik.imagekit.io/2zlgs27bjo/public/icons/servicesIcons/project.svg?tr=w-undefined,q-100 2048w, https://ik.imagekit.io/2zlgs27bjo/public/icons/servicesIcons/project.svg?tr=w-undefined,q-100 3840w'
                  />
                )}
              </span>
            </div>
          </div>
          <div className='services_mobileDescription__h4HSV'>
            New ideas are great, but they need to be managed. Solicy can help
            you manage your project effectively by planning, coordinating, and
            executing projects according to specific requirements and
            constraints. We take into account your time, budget, and available
            resources to make the best solutions.
          </div>
        </div>
      </div>
      <div
        className={
          theme.palette.mode === 'dark'
            ? 'undefined false false'
            : 'undefined false services_servicesContainerLight__Hu2SB'
        }
      >
        <div className='services_servicesBox__nQbr4 false services_servicesBoxStart__dlvus'>
          <div
            className={
              theme.palette.mode === 'dark'
                ? 'services_servicesTextBox__87ft3 undefined services_dark__BufB5'
                : 'services_servicesTextBox__87ft3 undefined'
            }
          >
            <div className='subTitleText_subTitle__2anJB'>
              <span
                className={
                  theme.palette.mode === 'dark'
                    ? 'subTitleText_subTitleText__bQxEn subTitleText_subTitleTextColor--font-color__AYsIE'
                    : 'subTitleText_subTitleText__bQxEn undefined'
                }
              >
                UI/UX Design
              </span>
            </div>
            <div
              className='subTitleText_description__WoiQ_'
              style={{ maxWidth: 'none' }}
            >
              At Solicy we apply a full range of UI/UX services to <br /> build
              effective customer retention strategies, and help brands create
              genuine, human-centered identities that engage, excite, and build
              trust. With UX design <br /> services, we encourage brands to
              leave a lasting impression that motivates and inspires users aimed
              at optimizing the user-friendliness of the product.
            </div>
          </div>
          <div className='services_mobileTitle__F_X4Q'>UI/UX Design</div>
          <div className='services_servicesImgBox__CJWSc undefined true  '>
            <div
              className='services_imageBlock__l9EFr true'
              style={{ width: '400px', height: '400px' }}
            >
              <span style={ImageDivSpanStyle2}>
                {theme.palette.mode === 'dark' ? (
                  <img
                    alt='/icons/servicesIcons/ui-ux.svg'
                    draggable='false'
                    sizes='100vw'
                    srcSet='https://ik.imagekit.io/2zlgs27bjo/public/icons/servicesIcons/design-dark.svg?tr=w-undefined,q-100 640w, https://ik.imagekit.io/2zlgs27bjo/public/icons/servicesIcons/design-dark.svg?tr=w-undefined,q-100 750w, https://ik.imagekit.io/2zlgs27bjo/public/icons/servicesIcons/design-dark.svg?tr=w-undefined,q-100 828w, https://ik.imagekit.io/2zlgs27bjo/public/icons/servicesIcons/design-dark.svg?tr=w-undefined,q-100 1080w, https://ik.imagekit.io/2zlgs27bjo/public/icons/servicesIcons/design-dark.svg?tr=w-undefined,q-100 1200w, https://ik.imagekit.io/2zlgs27bjo/public/icons/servicesIcons/design-dark.svg?tr=w-undefined,q-100 1920w, https://ik.imagekit.io/2zlgs27bjo/public/icons/servicesIcons/design-dark.svg?tr=w-undefined,q-100 2048w, https://ik.imagekit.io/2zlgs27bjo/public/icons/servicesIcons/design-dark.svg?tr=w-undefined,q-100 3840w'
                    src='https://ik.imagekit.io/2zlgs27bjo/public/icons/servicesIcons/design-dark.svg?tr=w-undefined,q-100'
                    decoding='async'
                    data-nimg='fill'
                    style={ImageDivSpanImgStyle3}
                    data-xblocker='passed'
                  />
                ) : (
                  <img
                    alt='/icons/servicesIcons/ui-ux.svg'
                    draggable='false'
                    src='https://ik.imagekit.io/2zlgs27bjo/public/icons/servicesIcons/ui-ux.svg?tr=w-undefined,q-100'
                    decoding='async'
                    data-nimg='fill'
                    style={ImageDivSpanImgStyle3}
                    data-xblocker='passed'
                    sizes='100vw'
                    srcSet='https://ik.imagekit.io/2zlgs27bjo/public/icons/servicesIcons/ui-ux.svg?tr=w-undefined,q-100 640w, https://ik.imagekit.io/2zlgs27bjo/public/icons/servicesIcons/ui-ux.svg?tr=w-undefined,q-100 750w, https://ik.imagekit.io/2zlgs27bjo/public/icons/servicesIcons/ui-ux.svg?tr=w-undefined,q-100 828w, https://ik.imagekit.io/2zlgs27bjo/public/icons/servicesIcons/ui-ux.svg?tr=w-undefined,q-100 1080w, https://ik.imagekit.io/2zlgs27bjo/public/icons/servicesIcons/ui-ux.svg?tr=w-undefined,q-100 1200w, https://ik.imagekit.io/2zlgs27bjo/public/icons/servicesIcons/ui-ux.svg?tr=w-undefined,q-100 1920w, https://ik.imagekit.io/2zlgs27bjo/public/icons/servicesIcons/ui-ux.svg?tr=w-undefined,q-100 2048w, https://ik.imagekit.io/2zlgs27bjo/public/icons/servicesIcons/ui-ux.svg?tr=w-undefined,q-100 3840w'
                  />
                )}
              </span>
            </div>
          </div>
          <div className='services_mobileDescription__h4HSV'>
            At Solicy we apply a full range of UI/UX services to <br /> build
            effective customer retention strategies, and help brands create
            genuine, human-centered identities that engage, excite, and build
            trust. With UX design <br /> services, we encourage brands to leave
            a lasting impression that motivates and inspires users aimed at
            optimizing the user-friendliness of the product.
          </div>
        </div>
      </div>
    </section>
  )
}

export default SoftwareOurServices

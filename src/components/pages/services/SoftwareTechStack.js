import { useTheme } from '@mui/system'
import {
  ImageDivSpanStyle1,
  ImageDivSpanSpanStyle1,
  ImageDivSpanSpanImgStyle2,
  ImageDivSpanImgStyle3
} from '../../BaseCss'

function SoftwareTechStack () {
  const theme = useTheme()

  return (
    <div className='techStack_container__mqOzs'>
      <div className='title_titleContainer__SvQXY'>
        <div
          className={
            theme.palette.mode === 'dark'
              ? 'title_title__mdTgq title_titleDark__uzlqO'
              : 'title_title__mdTgq'
          }
        >
          <span className='title_title__mdTgq'>Tech Stack</span>
        </div>
      </div>
      <div className='techStack_techCard__Ik_rR'>
        <div
          id='/image/jsIcon.svg'
          onClick={() => window.open('https://www.javascript.com/', '_blank')}
        >
          <div className='techCard_imageItem__PHXmj'>
            <div className='techCard_box__j1mN7'>
              <span style={ImageDivSpanStyle1}>
                <span style={ImageDivSpanSpanStyle1}>
                  <img
                    alt=''
                    aria-hidden='true'
                    src='data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%27350%27%20height=%27120%27/%3e'
                    style={ImageDivSpanSpanImgStyle2}
                    data-xblocker='passed'
                  />
                </span>
                {theme.palette.mode === 'dark' ? (
                  <img
                    alt='https://www.javascript.com/'
                    draggable='false'
                    id='/image/jsIcon.svgtechCard'
                    srcSet='https://ik.imagekit.io/2zlgs27bjo/public/image/dark/js-dark.svg?tr=w-350,q-100 1x, https://ik.imagekit.io/2zlgs27bjo/public/image/dark/js-dark.svg?tr=w-350,q-100 2x'
                    src='https://ik.imagekit.io/2zlgs27bjo/public/image/dark/js-dark.svg?tr=w-350,q-100'
                    decoding='async'
                    data-nimg='intrinsic'
                    style={ImageDivSpanImgStyle3}
                    data-xblocker='passed'
                  />
                ) : (
                  <img
                    alt='https://www.javascript.com/'
                    draggable='false'
                    id='/image/jsIcon.svgtechCard'
                    srcSet='https://ik.imagekit.io/2zlgs27bjo/public/image/jsIcon.svg?tr=w-350,q-100 1x, https://ik.imagekit.io/2zlgs27bjo/public/image/jsIcon.svg?tr=w-350,q-100 2x'
                    src='https://ik.imagekit.io/2zlgs27bjo/public/image/jsIcon.svg?tr=w-350,q-100'
                    decoding='async'
                    data-nimg='intrinsic'
                    style={ImageDivSpanImgStyle3}
                    data-xblocker='passed'
                  />
                )}
              </span>
            </div>
          </div>
        </div>
        <div
          id='/image/vuejs.svg'
          onClick={() => window.open('https://vuejs.org/', '_blank')}
        >
          <div className='techCard_imageItem__PHXmj'>
            <div className='techCard_box__j1mN7'>
              <span style={ImageDivSpanStyle1}>
                <span style={ImageDivSpanSpanStyle1}>
                  <img
                    alt=''
                    aria-hidden='true'
                    src='data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%27350%27%20height=%27120%27/%3e'
                    style={ImageDivSpanSpanImgStyle2}
                    data-xblocker='passed'
                  />
                </span>
                {theme.palette.mode === 'dark' ? (
                  <img
                    alt='https://vuejs.org/'
                    draggable='false'
                    id='/image/vuejs.svgtechCard'
                    srcSet='https://ik.imagekit.io/2zlgs27bjo/public/image/dark/Vue-dark-new.svg?tr=w-350,q-100 1x, https://ik.imagekit.io/2zlgs27bjo/public/image/dark/Vue-dark-new.svg?tr=w-350,q-100 2x'
                    src='https://ik.imagekit.io/2zlgs27bjo/public/image/dark/Vue-dark-new.svg?tr=w-350,q-100'
                    decoding='async'
                    data-nimg='intrinsic'
                    style={ImageDivSpanImgStyle3}
                    data-xblocker='passed'
                  />
                ) : (
                  <img
                    alt='https://vuejs.org/'
                    draggable='false'
                    id='/image/vuejs.svgtechCard'
                    srcSet='https://ik.imagekit.io/2zlgs27bjo/public/image/vuejs.svg?tr=w-350,q-100 1x, https://ik.imagekit.io/2zlgs27bjo/public/image/vuejs.svg?tr=w-350,q-100 2x'
                    src='https://ik.imagekit.io/2zlgs27bjo/public/image/vuejs.svg?tr=w-350,q-100'
                    decoding='async'
                    data-nimg='intrinsic'
                    style={ImageDivSpanImgStyle3}
                    data-xblocker='passed'
                  />
                )}
              </span>
            </div>
          </div>
        </div>
        <div
          id='/image/react.svg'
          onClick={() => window.open('https://react.dev/', '_blank')}
        >
          <div className='techCard_imageItem__PHXmj'>
            <div className='techCard_box__j1mN7'>
              <span style={ImageDivSpanStyle1}>
                <span style={ImageDivSpanSpanStyle1}>
                  <img
                    alt=''
                    aria-hidden='true'
                    src='data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%27350%27%20height=%27120%27/%3e'
                    style={ImageDivSpanSpanImgStyle2}
                    data-xblocker='passed'
                  />
                </span>
                {theme.palette.mode === 'dark' ? (
                  <img
                    alt='https://reactjs.org/'
                    draggable='false'
                    id='/image/react.svgtechCard'
                    srcSet='https://ik.imagekit.io/2zlgs27bjo/public/image/dark/React-new-dark.svg?tr=w-350,q-100 1x, https://ik.imagekit.io/2zlgs27bjo/public/image/dark/React-new-dark.svg?tr=w-350,q-100 2x'
                    src='https://ik.imagekit.io/2zlgs27bjo/public/image/dark/React-new-dark.svg?tr=w-350,q-100'
                    decoding='async'
                    data-nimg='intrinsic'
                    style={ImageDivSpanImgStyle3}
                    data-xblocker='passed'
                  />
                ) : (
                  <img
                    alt='https://reactjs.org/'
                    draggable='false'
                    id='/image/react.svgtechCard'
                    srcSet='https://ik.imagekit.io/2zlgs27bjo/public/image/react.svg?tr=w-350,q-100 1x, https://ik.imagekit.io/2zlgs27bjo/public/image/react.svg?tr=w-350,q-100 2x'
                    src='https://ik.imagekit.io/2zlgs27bjo/public/image/react.svg?tr=w-350,q-100'
                    decoding='async'
                    data-nimg='intrinsic'
                    style={ImageDivSpanImgStyle3}
                    data-xblocker='passed'
                  />
                )}
              </span>
            </div>
          </div>
        </div>
        <div
          id='/image/angular.svg'
          onClick={() => window.open('https://angular.io/', '_blank')}
        >
          <div className='techCard_imageItem__PHXmj'>
            <div className='techCard_box__j1mN7'>
              <span style={ImageDivSpanStyle1}>
                <span style={ImageDivSpanSpanStyle1}>
                  <img
                    alt=''
                    aria-hidden='true'
                    src='data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%27350%27%20height=%27120%27/%3e'
                    style={ImageDivSpanSpanImgStyle2}
                    data-xblocker='passed'
                  />
                </span>
                {theme.palette.mode === 'dark' ? (
                  <img
                    alt='https://angular.io/'
                    draggable='false'
                    id='/image/angular.svgtechCard'
                    srcSet='https://ik.imagekit.io/2zlgs27bjo/public/image/dark/Angular-dark-new.svg?tr=w-350,q-100 1x, https://ik.imagekit.io/2zlgs27bjo/public/image/dark/Angular-dark-new.svg?tr=w-350,q-100 2x'
                    src='https://ik.imagekit.io/2zlgs27bjo/public/image/dark/Angular-dark-new.svg?tr=w-350,q-100'
                    decoding='async'
                    data-nimg='intrinsic'
                    style={ImageDivSpanImgStyle3}
                    data-xblocker='passed'
                  />
                ) : (
                  <img
                    alt='https://angular.io/'
                    draggable='false'
                    id='/image/angular.svgtechCard'
                    srcSet='https://ik.imagekit.io/2zlgs27bjo/public/image/angular.svg?tr=w-350,q-100 1x, https://ik.imagekit.io/2zlgs27bjo/public/image/angular.svg?tr=w-350,q-100 2x'
                    src='https://ik.imagekit.io/2zlgs27bjo/public/image/angular.svg?tr=w-350,q-100'
                    decoding='async'
                    data-nimg='intrinsic'
                    style={ImageDivSpanImgStyle3}
                    data-xblocker='passed'
                  />
                )}
              </span>
            </div>
          </div>
        </div>
        <div
          id='/image/net.svg'
          onClick={() =>
            window.open('https://dotnet.microsoft.com/en-us/', '_blank')
          }
        >
          <div className='techCard_imageItem__PHXmj'>
            <div className='techCard_box__j1mN7'>
              <span style={ImageDivSpanStyle1}>
                <span style={ImageDivSpanSpanStyle1}>
                  <img
                    alt=''
                    aria-hidden='true'
                    src='data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%27350%27%20height=%27120%27/%3e'
                    style={ImageDivSpanSpanImgStyle2}
                    data-xblocker='passed'
                  />
                </span>
                {theme.palette.mode === 'dark' ? (
                  <img
                    alt='https://dotnet.microsoft.com/en-us/'
                    draggable='false'
                    id='/image/net.svgtechCard'
                    srcSet='https://ik.imagekit.io/2zlgs27bjo/public/image/dark/net-dark-new.svg?tr=w-350,q-100 1x, https://ik.imagekit.io/2zlgs27bjo/public/image/dark/net-dark-new.svg?tr=w-350,q-100 2x'
                    src='https://ik.imagekit.io/2zlgs27bjo/public/image/dark/net-dark-new.svg?tr=w-350,q-100'
                    decoding='async'
                    data-nimg='intrinsic'
                    style={ImageDivSpanImgStyle3}
                    data-xblocker='passed'
                  />
                ) : (
                  <img
                    alt='https://dotnet.microsoft.com/en-us/'
                    draggable='false'
                    id='/image/net.svgtechCard'
                    srcSet='https://ik.imagekit.io/2zlgs27bjo/public/image/net.svg?tr=w-350,q-100 1x, https://ik.imagekit.io/2zlgs27bjo/public/image/net.svg?tr=w-350,q-100 2x'
                    src='https://ik.imagekit.io/2zlgs27bjo/public/image/net.svg?tr=w-350,q-100'
                    decoding='async'
                    data-nimg='intrinsic'
                    style={ImageDivSpanImgStyle3}
                    data-xblocker='passed'
                  />
                )}
              </span>
            </div>
          </div>
        </div>
        <div
          id='/image/nodeJs.svg'
          onClick={() => window.open('https://nodejs.org/en/', '_blank')}
        >
          <div className='techCard_imageItem__PHXmj'>
            <div className='techCard_box__j1mN7'>
              <span style={ImageDivSpanStyle1}>
                <span style={ImageDivSpanSpanStyle1}>
                  <img
                    alt=''
                    aria-hidden='true'
                    src='data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%27350%27%20height=%27120%27/%3e'
                    style={ImageDivSpanSpanImgStyle2}
                    data-xblocker='passed'
                  />
                </span>
                {theme.palette.mode === 'dark' ? (
                  <img
                    alt='https://nodejs.org/en/'
                    draggable='false'
                    id='/image/nodeJs.svgtechCard'
                    srcSet='https://ik.imagekit.io/2zlgs27bjo/public/image/dark/Node-dark-new.svg?tr=w-350,q-100 1x, https://ik.imagekit.io/2zlgs27bjo/public/image/dark/Node-dark-new.svg?tr=w-350,q-100 2x'
                    src='https://ik.imagekit.io/2zlgs27bjo/public/image/dark/Node-dark-new.svg?tr=w-350,q-100'
                    decoding='async'
                    data-nimg='intrinsic'
                    style={ImageDivSpanImgStyle3}
                    data-xblocker='passed'
                  />
                ) : (
                  <img
                    alt='https://nodejs.org/en/'
                    draggable='false'
                    id='/image/nodeJs.svgtechCard'
                    srcSet='https://ik.imagekit.io/2zlgs27bjo/public/image/nodeJs.svg?tr=w-350,q-100 1x, https://ik.imagekit.io/2zlgs27bjo/public/image/nodeJs.svg?tr=w-350,q-100 2x'
                    src='https://ik.imagekit.io/2zlgs27bjo/public/image/nodeJs.svg?tr=w-350,q-100'
                    decoding='async'
                    data-nimg='intrinsic'
                    style={ImageDivSpanImgStyle3}
                    data-xblocker='passed'
                  />
                )}
              </span>
            </div>
          </div>
        </div>
        <div
          id='/image/python.svg'
          onClick={() => window.open('https://www.python.org/', '_blank')}
        >
          <div className='techCard_imageItem__PHXmj'>
            <div className='techCard_box__j1mN7'>
              <span style={ImageDivSpanStyle1}>
                <span style={ImageDivSpanSpanStyle1}>
                  <img
                    alt=''
                    aria-hidden='true'
                    src='data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%27350%27%20height=%27120%27/%3e'
                    style={ImageDivSpanSpanImgStyle2}
                    data-xblocker='passed'
                  />
                </span>
                {theme.palette.mode === 'dark' ? (
                  <img
                    alt='https://www.python.org/'
                    draggable='false'
                    id='/image/python.svgtechCard'
                    srcSet='https://ik.imagekit.io/2zlgs27bjo/public/image/dark/Python-new-dark.svg?tr=w-350,q-100 1x, https://ik.imagekit.io/2zlgs27bjo/public/image/dark/Python-new-dark.svg?tr=w-350,q-100 2x'
                    src='https://ik.imagekit.io/2zlgs27bjo/public/image/dark/Python-new-dark.svg?tr=w-350,q-100'
                    decoding='async'
                    data-nimg='intrinsic'
                    style={ImageDivSpanImgStyle3}
                    data-xblocker='passed'
                  />
                ) : (
                  <img
                    alt='https://www.python.org/'
                    draggable='false'
                    id='/image/python.svgtechCard'
                    srcSet='https://ik.imagekit.io/2zlgs27bjo/public/image/python.svg?tr=w-350,q-100 1x, https://ik.imagekit.io/2zlgs27bjo/public/image/python.svg?tr=w-350,q-100 2x'
                    src='https://ik.imagekit.io/2zlgs27bjo/public/image/python.svg?tr=w-350,q-100'
                    decoding='async'
                    data-nimg='intrinsic'
                    style={ImageDivSpanImgStyle3}
                    data-xblocker='passed'
                  />
                )}
              </span>
            </div>
          </div>
        </div>
        <div
          id='/image/azure.svg'
          onClick={() =>
            window.open('https://azure.microsoft.com/en-us/', '_blank')
          }
        >
          <div className='techCard_imageItem__PHXmj'>
            <div className='techCard_box__j1mN7'>
              <span style={ImageDivSpanStyle1}>
                <span style={ImageDivSpanSpanStyle1}>
                  <img
                    alt=''
                    aria-hidden='true'
                    src='data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%27350%27%20height=%27120%27/%3e'
                    style={ImageDivSpanSpanImgStyle2}
                    data-xblocker='passed'
                  />
                </span>
                {theme.palette.mode === 'dark' ? (
                  <img
                    alt='https://azure.microsoft.com/en-us/'
                    draggable='false'
                    id='/image/azure.svgtechCard'
                    srcSet='https://ik.imagekit.io/2zlgs27bjo/public/image/dark/Azure-dark-new.svg?tr=w-350,q-100 1x, https://ik.imagekit.io/2zlgs27bjo/public/image/dark/Azure-dark-new.svg?tr=w-350,q-100 2x'
                    src='https://ik.imagekit.io/2zlgs27bjo/public/image/dark/Azure-dark-new.svg?tr=w-350,q-100'
                    decoding='async'
                    data-nimg='intrinsic'
                    style={ImageDivSpanImgStyle3}
                    data-xblocker='passed'
                  />
                ) : (
                  <img
                    alt='https://azure.microsoft.com/en-us/'
                    draggable='false'
                    id='/image/azure.svgtechCard'
                    srcSet='https://ik.imagekit.io/2zlgs27bjo/public/image/azure.svg?tr=w-350,q-100 1x, https://ik.imagekit.io/2zlgs27bjo/public/image/azure.svg?tr=w-350,q-100 2x'
                    src='https://ik.imagekit.io/2zlgs27bjo/public/image/azure.svg?tr=w-350,q-100'
                    decoding='async'
                    data-nimg='intrinsic'
                    style={ImageDivSpanImgStyle3}
                    data-xblocker='passed'
                  />
                )}
              </span>
            </div>
          </div>
        </div>
        <div
          id='/image/caspio.svg'
          onClick={() => window.open('https://www.caspio.com/', '_blank')}
        >
          <div className='techCard_imageItem__PHXmj'>
            <div className='techCard_box__j1mN7'>
              <span style={ImageDivSpanStyle1}>
                <span style={ImageDivSpanSpanStyle1}>
                  <img
                    alt=''
                    aria-hidden='true'
                    src='data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%27350%27%20height=%27120%27/%3e'
                    style={ImageDivSpanSpanImgStyle2}
                    data-xblocker='passed'
                  />
                </span>
                {theme.palette.mode === 'dark' ? (
                  <img
                    alt='https://www.caspio.com/'
                    draggable='false'
                    id='/image/caspio.svgtechCard'
                    srcSet='https://ik.imagekit.io/2zlgs27bjo/public/image/dark/Caspio-dark-new.svg?tr=w-350,q-100 1x, https://ik.imagekit.io/2zlgs27bjo/public/image/dark/Caspio-dark-new.svg?tr=w-350,q-100 2x'
                    src='https://ik.imagekit.io/2zlgs27bjo/public/image/dark/Caspio-dark-new.svg?tr=w-350,q-100'
                    decoding='async'
                    data-nimg='intrinsic'
                    style={ImageDivSpanImgStyle3}
                    data-xblocker='passed'
                  />
                ) : (
                  <img
                    alt='https://www.caspio.com/'
                    draggable='false'
                    id='/image/caspio.svgtechCard'
                    srcSet='https://ik.imagekit.io/2zlgs27bjo/public/image/caspio.svg?tr=w-350,q-100 1x, https://ik.imagekit.io/2zlgs27bjo/public/image/caspio.svg?tr=w-350,q-100 2x'
                    src='https://ik.imagekit.io/2zlgs27bjo/public/image/caspio.svg?tr=w-350,q-100'
                    decoding='async'
                    data-nimg='intrinsic'
                    style={ImageDivSpanImgStyle3}
                    data-xblocker='passed'
                  />
                )}
              </span>
            </div>
          </div>
        </div>
        <div
          id='/image/aws.svg'
          onClick={() => window.open('https://aws.amazon.com/', '_blank')}
        >
          <div className='techCard_imageItem__PHXmj'>
            <div className='techCard_box__j1mN7'>
              <span style={ImageDivSpanStyle1}>
                <span style={ImageDivSpanSpanStyle1}>
                  <img
                    alt=''
                    aria-hidden='true'
                    src='data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%27350%27%20height=%27120%27/%3e'
                    style={ImageDivSpanSpanImgStyle2}
                    data-xblocker='passed'
                  />
                </span>
                {theme.palette.mode === 'dark' ? (
                  <img
                    alt='https://aws.amazon.com/'
                    draggable='false'
                    id='/image/aws.svgtechCard'
                    srcSet='https://ik.imagekit.io/2zlgs27bjo/public/image/dark/AWS-dark-new.svg?tr=w-350,q-100 1x, https://ik.imagekit.io/2zlgs27bjo/public/image/dark/AWS-dark-new.svg?tr=w-350,q-100 2x'
                    src='https://ik.imagekit.io/2zlgs27bjo/public/image/dark/AWS-dark-new.svg?tr=w-350,q-100'
                    decoding='async'
                    data-nimg='intrinsic'
                    style={ImageDivSpanImgStyle3}
                    data-xblocker='passed'
                  />
                ) : (
                  <img
                    alt='https://aws.amazon.com/'
                    draggable='false'
                    id='/image/aws.svgtechCard'
                    srcSet='https://ik.imagekit.io/2zlgs27bjo/public/image/aws.svg?tr=w-350,q-100 1x, https://ik.imagekit.io/2zlgs27bjo/public/image/aws.svg?tr=w-350,q-100 2x'
                    src='https://ik.imagekit.io/2zlgs27bjo/public/image/aws.svg?tr=w-350,q-100'
                    decoding='async'
                    data-nimg='intrinsic'
                    style={ImageDivSpanImgStyle3}
                    data-xblocker='passed'
                  />
                )}
              </span>
            </div>
          </div>
        </div>
        <div
          id='/image/reactNative.svg'
          onClick={() => window.open('https://reactnative.dev/', '_blank')}
        >
          <div className='techCard_imageItem__PHXmj'>
            <div className='techCard_box__j1mN7'>
              <span style={ImageDivSpanStyle1}>
                <span style={ImageDivSpanSpanStyle1}>
                  <img
                    alt=''
                    aria-hidden='true'
                    src='data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%27350%27%20height=%27120%27/%3e'
                    style={ImageDivSpanSpanImgStyle2}
                    data-xblocker='passed'
                  />
                </span>
                {theme.palette.mode === 'dark' ? (
                  <img
                    alt='https://reactnative.dev/'
                    draggable='false'
                    id='/image/reactNative.svgtechCard'
                    srcSet='https://ik.imagekit.io/2zlgs27bjo/public/image/dark/ReactNative-new-dark.svg?tr=w-350,q-100 1x, https://ik.imagekit.io/2zlgs27bjo/public/image/dark/ReactNative-new-dark.svg?tr=w-350,q-100 2x'
                    src='https://ik.imagekit.io/2zlgs27bjo/public/image/dark/ReactNative-new-dark.svg?tr=w-350,q-100'
                    decoding='async'
                    data-nimg='intrinsic'
                    style={ImageDivSpanImgStyle3}
                    data-xblocker='passed'
                  />
                ) : (
                  <img
                    alt='https://reactnative.dev/'
                    draggable='false'
                    id='/image/reactNative.svgtechCard'
                    srcSet='https://ik.imagekit.io/2zlgs27bjo/public/image/reactNative.svg?tr=w-350,q-100 1x, https://ik.imagekit.io/2zlgs27bjo/public/image/reactNative.svg?tr=w-350,q-100 2x'
                    src='https://ik.imagekit.io/2zlgs27bjo/public/image/reactNative.svg?tr=w-350,q-100'
                    decoding='async'
                    data-nimg='intrinsic'
                    style={ImageDivSpanImgStyle3}
                    data-xblocker='passed'
                  />
                )}
              </span>
            </div>
          </div>
        </div>
        <div
          id='/image/docker.svg'
          onClick={() => window.open('https://www.docker.com/', '_blank')}
        >
          <div className='techCard_imageItem__PHXmj'>
            <div className='techCard_box__j1mN7'>
              <span style={ImageDivSpanStyle1}>
                <span style={ImageDivSpanSpanStyle1}>
                  <img
                    alt=''
                    aria-hidden='true'
                    src='data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%27350%27%20height=%27120%27/%3e'
                    style={ImageDivSpanSpanImgStyle2}
                    data-xblocker='passed'
                  />
                </span>
                {theme.palette.mode === 'dark' ? (
                  <img
                    alt='https://www.docker.com/'
                    draggable='false'
                    id='/image/docker.svgtechCard'
                    srcSet='https://ik.imagekit.io/2zlgs27bjo/public/image/dark/Docker-new-dark.svg?tr=w-350,q-100 1x, https://ik.imagekit.io/2zlgs27bjo/public/image/dark/Docker-new-dark.svg?tr=w-350,q-100 2x'
                    src='https://ik.imagekit.io/2zlgs27bjo/public/image/dark/Docker-new-dark.svg?tr=w-350,q-100'
                    decoding='async'
                    data-nimg='intrinsic'
                    style={ImageDivSpanImgStyle3}
                    data-xblocker='passed'
                  />
                ) : (
                  <img
                    alt='https://www.docker.com/'
                    draggable='false'
                    id='/image/docker.svgtechCard'
                    srcSet='https://ik.imagekit.io/2zlgs27bjo/public/image/docker.svg?tr=w-350,q-100 1x, https://ik.imagekit.io/2zlgs27bjo/public/image/docker.svg?tr=w-350,q-100 2x'
                    src='https://ik.imagekit.io/2zlgs27bjo/public/image/docker.svg?tr=w-350,q-100'
                    decoding='async'
                    data-nimg='intrinsic'
                    style={ImageDivSpanImgStyle3}
                    data-xblocker='passed'
                  />
                )}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SoftwareTechStack

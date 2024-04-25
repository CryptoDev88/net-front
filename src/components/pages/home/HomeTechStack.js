import { useTheme } from '@mui/system'
import { Link } from 'react-router-dom'

import {
  ImageDivSpanStyle1,
  ImageDivSpanSpanStyle1,
  ImageDivSpanSpanImgStyle2,
  ImageDivSpanImgStyle2,
  ImageDivSpanImgStyle3
} from '../../BaseCss'

function TechStack () {
  const theme = useTheme()

  return (
    <div id='techStack' className='techStack_container__y8j3y'>
      <div>
        <span className='techStack_forMobileTitle__1gaiv'>
          <div className='title_titleContainer__SvQXY'>
            <div
              className={
                theme.palette.mode === 'light'
                  ? 'title_title__mdTgq'
                  : 'title_title__mdTgq title_titleDark__uzlqO'
              }
            >
              <span className='title_title__mdTgq'>Tech Stack</span>
            </div>
          </div>
          <div className='subTitleText_subTitle__2anJB techStack_title__oacUw'>
            <span
              className={
                theme.palette.mode === 'light'
                  ? 'subTitleText_subTitleText__bQxEn undefined'
                  : 'subTitleText_subTitleText__bQxEn subTitleText_subTitleTextColor--font-color__AYsIE'
              }
            >
              Blockchain
            </span>
          </div>
          <div
            className='subTitleText_description__WoiQ_ title-text-color'
            style={{ maxWidth: 'none' }}
          ></div>
        </span>
        <div className='techStack_techCard__mxG8Z'>
          <div
            id='/image/solana.webp'
            className={
              theme.palette.mode === 'light'
                ? 'techStack_tech__ZCDwG'
                : 'techStack_tech__ZCDwG techStack_d-none__ZiiOz'
            }
            onClick={() => window.open('https://solana.com/', '_blank')}
          >
            <div className='techCard_imageItem__PHXmj'>
              <div className='techCard_box__j1mN7'>
                <span style={ImageDivSpanStyle1}>
                  <span style={ImageDivSpanSpanStyle1}>
                    <img
                      alt=''
                      aria-hidden='true'
                      src='data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%27350%27%20height=%27120%27/%3e'
                      data-xblocker='passed'
                      style={ImageDivSpanSpanImgStyle2}
                    />
                  </span>
                  <img
                    alt='https://solana.com/'
                    draggable='false'
                    src='https://ik.imagekit.io/2zlgs27bjo/public/image/solana.webp?tr=w-350,q-100'
                    decoding='async'
                    data-nimg='intrinsic'
                    style={ImageDivSpanImgStyle3}
                    srcSet='https://ik.imagekit.io/2zlgs27bjo/public/image/solana.webp?tr=w-350,q-100 1x, https://ik.imagekit.io/2zlgs27bjo/public/image/solana.webp?tr=w-350,q-100 2x'
                    data-xblocker='passed'
                  />
                </span>
              </div>
            </div>
          </div>
          <div
            id='/image/solana.webp'
            className={
              theme.palette.mode === 'light'
                ? 'techStack_tech__ZCDwG techStack_d-none__ZiiOz'
                : 'techStack_tech__ZCDwG'
            }
            onClick={() => window.open('https://solana.com/', '_blank')}
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
                  <img
                    alt='https://solana.com/'
                    draggable='false'
                    srcSet='https://ik.imagekit.io/2zlgs27bjo/public/image/dark/solana.svg?tr=w-350,q-100 1x, https://ik.imagekit.io/2zlgs27bjo/public/image/dark/solana.svg?tr=w-350,q-100 2x'
                    src='https://ik.imagekit.io/2zlgs27bjo/public/image/dark/solana.svg?tr=w-350,q-100'
                    decoding='async'
                    data-nimg='intrinsic'
                    style={ImageDivSpanImgStyle3}
                    data-xblocker='passed'
                  />
                </span>
              </div>
            </div>
          </div>
          <div
            id='/image/solidity.webp'
            className={
              theme.palette.mode === 'light'
                ? 'techStack_tech__ZCDwG'
                : 'techStack_tech__ZCDwG techStack_d-none__ZiiOz'
            }
            onClick={() => window.open('https://solidity.io/', '_blank')}
          >
            <div className='techCard_imageItem__PHXmj'>
              <div className='techCard_box__j1mN7'>
                <span style={ImageDivSpanStyle1}>
                  <span style={ImageDivSpanSpanStyle1}>
                    <img
                      alt=''
                      aria-hidden='true'
                      src='data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%27350%27%20height=%27120%27/%3e'
                      data-xblocker='passed'
                      style={ImageDivSpanSpanImgStyle2}
                    />
                  </span>
                  <img
                    alt='https://www.solidity.io/'
                    draggable='false'
                    src='https://ik.imagekit.io/2zlgs27bjo/public/image/solidity.webp?tr=w-350,q-100'
                    decoding='async'
                    data-nimg='intrinsic'
                    style={ImageDivSpanImgStyle3}
                    srcSet='https://ik.imagekit.io/2zlgs27bjo/public/image/solidity.webp?tr=w-350,q-100 1x, https://ik.imagekit.io/2zlgs27bjo/public/image/solidity.webp?tr=w-350,q-100 2x'
                    data-xblocker='passed'
                  />
                </span>
              </div>
            </div>
          </div>
          <div
            id='/image/solidity.webp'
            className={
              theme.palette.mode === 'light'
                ? 'techStack_tech__ZCDwG techStack_d-none__ZiiOz'
                : 'techStack_tech__ZCDwG'
            }
            onClick={() => window.open('https://solidity.io/', '_blank')}
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
                  <img
                    alt='https://www.solidity.io/'
                    draggable='false'
                    srcSet='https://ik.imagekit.io/2zlgs27bjo/public/image/dark/solidity.webp?tr=w-350,q-100 1x, https://ik.imagekit.io/2zlgs27bjo/public/image/dark/solidity.webp?tr=w-350,q-100 2x'
                    src='https://ik.imagekit.io/2zlgs27bjo/public/image/dark/solidity.webp?tr=w-350,q-100'
                    decoding='async'
                    data-nimg='intrinsic'
                    style={ImageDivSpanImgStyle3}
                    data-xblocker='passed'
                  />
                </span>
              </div>
            </div>
          </div>
          <div
            id='/image/ethereum.webp'
            className={
              theme.palette.mode === 'light'
                ? 'techStack_tech__ZCDwG'
                : 'techStack_tech__ZCDwG techStack_d-none__ZiiOz'
            }
            onClick={() => window.open('https://ethereum.org/en/', '_blank')}
          >
            <div className='techCard_imageItem__PHXmj'>
              <div className='techCard_box__j1mN7'>
                <span style={ImageDivSpanStyle1}>
                  <span style={ImageDivSpanSpanStyle1}>
                    <img
                      alt=''
                      aria-hidden='true'
                      src='data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%27350%27%20height=%27120%27/%3e'
                      data-xblocker='passed'
                      style={ImageDivSpanSpanImgStyle2}
                    />
                  </span>
                  <img
                    alt='https://ethereum.org/en/'
                    draggable='false'
                    src='https://ik.imagekit.io/2zlgs27bjo/public/image/ethereum.webp?tr=w-350,q-100'
                    decoding='async'
                    data-nimg='intrinsic'
                    style={ImageDivSpanImgStyle3}
                    srcSet='https://ik.imagekit.io/2zlgs27bjo/public/image/ethereum.webp?tr=w-350,q-100 1x, https://ik.imagekit.io/2zlgs27bjo/public/image/ethereum.webp?tr=w-350,q-100 2x'
                    data-xblocker='passed'
                  />
                </span>
              </div>
            </div>
          </div>
          <div
            id='/image/ethereum.webp'
            className={
              theme.palette.mode === 'light'
                ? 'techStack_tech__ZCDwG techStack_d-none__ZiiOz'
                : 'techStack_tech__ZCDwG'
            }
            onClick={() => window.open('https://ethereum.org/en/', '_blank')}
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
                  <img
                    alt='https://ethereum.org/en/'
                    draggable='false'
                    srcSet='https://ik.imagekit.io/2zlgs27bjo/public/image/dark/ethereum.svg?tr=w-350,q-100 1x, https://ik.imagekit.io/2zlgs27bjo/public/image/dark/ethereum.svg?tr=w-350,q-100 2x'
                    src='https://ik.imagekit.io/2zlgs27bjo/public/image/dark/ethereum.svg?tr=w-350,q-100'
                    decoding='async'
                    data-nimg='intrinsic'
                    style={ImageDivSpanImgStyle3}
                    data-xblocker='passed'
                  />
                </span>
              </div>
            </div>
          </div>
          <div
            id='/image/aptos.webp'
            className={
              theme.palette.mode === 'light'
                ? 'techStack_tech__ZCDwG'
                : 'techStack_tech__ZCDwG techStack_d-none__ZiiOz'
            }
            onClick={() => window.open('https://aptoslabs.com/', '_blank')}
          >
            <div className='techCard_imageItem__PHXmj'>
              <div className='techCard_box__j1mN7'>
                <span style={ImageDivSpanStyle1}>
                  <span style={ImageDivSpanSpanStyle1}>
                    <img
                      alt=''
                      aria-hidden='true'
                      src='data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%27350%27%20height=%27120%27/%3e'
                      data-xblocker='passed'
                      style={ImageDivSpanSpanImgStyle2}
                    />
                  </span>
                  <img
                    alt='https://aptoslabs.com/'
                    draggable='false'
                    src='https://ik.imagekit.io/2zlgs27bjo/public/image/aptos.webp?tr=w-350,q-100'
                    decoding='async'
                    data-nimg='intrinsic'
                    style={ImageDivSpanImgStyle3}
                    srcSet='https://ik.imagekit.io/2zlgs27bjo/public/image/aptos.webp?tr=w-350,q-100 1x, https://ik.imagekit.io/2zlgs27bjo/public/image/aptos.webp?tr=w-350,q-100 2x'
                    data-xblocker='passed'
                  />
                </span>
              </div>
            </div>
          </div>
          <div
            id='/image/aptos.webp'
            className={
              theme.palette.mode === 'light'
                ? 'techStack_tech__ZCDwG techStack_d-none__ZiiOz'
                : 'techStack_tech__ZCDwG'
            }
            onClick={() => window.open('https://aptoslabs.com/', '_blank')}
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
                  <img
                    alt='https://aptoslabs.com/'
                    draggable='false'
                    srcSet='https://ik.imagekit.io/2zlgs27bjo/public/image/dark/aptosdark.svg?tr=w-350,q-100 1x, https://ik.imagekit.io/2zlgs27bjo/public/image/dark/aptosdark.svg?tr=w-350,q-100 2x'
                    src='https://ik.imagekit.io/2zlgs27bjo/public/image/dark/aptosdark.svg?tr=w-350,q-100'
                    decoding='async'
                    data-nimg='intrinsic'
                    style={ImageDivSpanImgStyle3}
                    data-xblocker='passed'
                  />
                </span>
              </div>
            </div>
          </div>
          <div
            id='/image/polygon.webp'
            className={
              theme.palette.mode === 'light'
                ? 'techStack_tech__ZCDwG'
                : 'techStack_tech__ZCDwG techStack_d-none__ZiiOz'
            }
            onClick={() => window.open('https://polygon.technology/', '_blank')}
          >
            <div className='techCard_imageItem__PHXmj'>
              <div className='techCard_box__j1mN7'>
                <span style={ImageDivSpanStyle1}>
                  <span style={ImageDivSpanSpanStyle1}>
                    <img
                      alt=''
                      aria-hidden='true'
                      src='data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%27350%27%20height=%27120%27/%3e'
                      data-xblocker='passed'
                      style={ImageDivSpanSpanImgStyle2}
                    />
                  </span>
                  <img
                    alt='https://polygon.technology/'
                    draggable='false'
                    src='https://ik.imagekit.io/2zlgs27bjo/public/image/polygon.webp?tr=w-350,q-100'
                    decoding='async'
                    data-nimg='intrinsic'
                    style={ImageDivSpanImgStyle3}
                    srcSet='https://ik.imagekit.io/2zlgs27bjo/public/image/polygon.webp?tr=w-350,q-100 1x, https://ik.imagekit.io/2zlgs27bjo/public/image/polygon.webp?tr=w-350,q-100 2x'
                    data-xblocker='passed'
                  />
                </span>
              </div>
            </div>
          </div>
          <div
            id='/image/polygon.webp'
            className={
              theme.palette.mode === 'light'
                ? 'techStack_tech__ZCDwG techStack_d-none__ZiiOz'
                : 'techStack_tech__ZCDwG'
            }
            onClick={() => window.open('https://polygon.technology/', '_blank')}
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
                  <img
                    alt='https://polygon.technology/'
                    draggable='false'
                    srcSet='https://ik.imagekit.io/2zlgs27bjo/public/image/dark/polygon.webp?tr=w-350,q-100 1x, https://ik.imagekit.io/2zlgs27bjo/public/image/dark/polygon.webp?tr=w-350,q-100 2x'
                    src='https://ik.imagekit.io/2zlgs27bjo/public/image/dark/polygon.webp?tr=w-350,q-100'
                    decoding='async'
                    data-nimg='intrinsic'
                    style={ImageDivSpanImgStyle3}
                    data-xblocker='passed'
                  />
                </span>
              </div>
            </div>
          </div>
          <div
            id='/image/avalanche.webp'
            className={
              theme.palette.mode === 'light'
                ? 'techStack_tech__ZCDwG'
                : 'techStack_tech__ZCDwG techStack_d-none__ZiiOz'
            }
            onClick={() => window.open('https://www.avax.network/', '_blank')}
          >
            <div className='techCard_imageItem__PHXmj'>
              <div className='techCard_box__j1mN7'>
                <span style={ImageDivSpanStyle1}>
                  <span style={ImageDivSpanSpanStyle1}>
                    <img
                      alt=''
                      aria-hidden='true'
                      src='data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%27350%27%20height=%27120%27/%3e'
                      data-xblocker='passed'
                      style={ImageDivSpanSpanImgStyle2}
                    />
                  </span>
                  <img
                    alt='https://www.avax.network/'
                    draggable='false'
                    src='https://ik.imagekit.io/2zlgs27bjo/public/image/avalanche.webp?tr=w-350,q-100'
                    decoding='async'
                    data-nimg='intrinsic'
                    style={ImageDivSpanImgStyle3}
                    srcSet='https://ik.imagekit.io/2zlgs27bjo/public/image/avalanche.webp?tr=w-350,q-100 1x, https://ik.imagekit.io/2zlgs27bjo/public/image/avalanche.webp?tr=w-350,q-100 2x'
                    data-xblocker='passed'
                  />
                </span>
              </div>
            </div>
          </div>
          <div
            id='/image/avalanche.webp'
            className={
              theme.palette.mode === 'light'
                ? 'techStack_tech__ZCDwG techStack_d-none__ZiiOz'
                : 'techStack_tech__ZCDwG'
            }
            onClick={() => window.open('https://www.avax.network/', '_blank')}
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
                  <img
                    alt='https://www.avax.network/'
                    draggable='false'
                    srcSet='https://ik.imagekit.io/2zlgs27bjo/public/image/dark/avalanche.svg?tr=w-350,q-100 1x, https://ik.imagekit.io/2zlgs27bjo/public/image/dark/avalanche.svg?tr=w-350,q-100 2x'
                    src='https://ik.imagekit.io/2zlgs27bjo/public/image/dark/avalanche.svg?tr=w-350,q-100'
                    decoding='async'
                    data-nimg='intrinsic'
                    style={ImageDivSpanImgStyle3}
                    data-xblocker='passed'
                  />
                </span>
              </div>
            </div>
          </div>
          <div
            id='/image/cardano.webp'
            className={
              theme.palette.mode === 'light'
                ? 'techStack_tech__ZCDwG'
                : 'techStack_tech__ZCDwG techStack_d-none__ZiiOz'
            }
            onClick={() => window.open('https://cardano.org/', '_blank')}
          >
            <div className='techCard_imageItem__PHXmj'>
              <div className='techCard_box__j1mN7'>
                <span style={ImageDivSpanStyle1}>
                  <span style={ImageDivSpanSpanStyle1}>
                    <img
                      alt=''
                      aria-hidden='true'
                      src='data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%27350%27%20height=%27120%27/%3e'
                      data-xblocker='passed'
                      style={ImageDivSpanSpanImgStyle2}
                    />
                  </span>
                  <img
                    alt='https://cardano.org/'
                    draggable='false'
                    src='https://ik.imagekit.io/2zlgs27bjo/public/image/cardano.webp?tr=w-350,q-100'
                    decoding='async'
                    data-nimg='intrinsic'
                    style={ImageDivSpanImgStyle3}
                    srcSet='https://ik.imagekit.io/2zlgs27bjo/public/image/cardano.webp?tr=w-350,q-100 1x, https://ik.imagekit.io/2zlgs27bjo/public/image/cardano.webp?tr=w-350,q-100 2x'
                    data-xblocker='passed'
                  />
                </span>
              </div>
            </div>
          </div>
          <div
            id='/image/cardano.webp'
            className={
              theme.palette.mode === 'light'
                ? 'techStack_tech__ZCDwG techStack_d-none__ZiiOz'
                : 'techStack_tech__ZCDwG'
            }
            onClick={() => window.open('https://cardano.org/', '_blank')}
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
                  <img
                    alt='https://cardano.org/'
                    draggable='false'
                    srcSet='https://ik.imagekit.io/2zlgs27bjo/public/image/dark/cardano.webp?tr=w-350,q-100 1x, https://ik.imagekit.io/2zlgs27bjo/public/image/dark/cardano.webp?tr=w-350,q-100 2x'
                    src='https://ik.imagekit.io/2zlgs27bjo/public/image/dark/cardano.webp?tr=w-350,q-100'
                    decoding='async'
                    data-nimg='intrinsic'
                    style={ImageDivSpanImgStyle3}
                    data-xblocker='passed'
                  />
                </span>
              </div>
            </div>
          </div>
          <div
            id='/image/binance.webp'
            className={
              theme.palette.mode === 'light'
                ? 'techStack_tech__ZCDwG'
                : 'techStack_tech__ZCDwG techStack_d-none__ZiiOz'
            }
            onClick={() => window.open('https://www.binance.com/en', '_blank')}
          >
            <div className='techCard_imageItem__PHXmj'>
              <div className='techCard_box__j1mN7'>
                <span style={ImageDivSpanStyle1}>
                  <span style={ImageDivSpanSpanStyle1}>
                    <img
                      alt=''
                      aria-hidden='true'
                      src='data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%27350%27%20height=%27120%27/%3e'
                      data-xblocker='passed'
                      style={ImageDivSpanSpanImgStyle2}
                    />
                  </span>
                  <img
                    alt='https://www.binance.com/en'
                    draggable='false'
                    src='https://ik.imagekit.io/2zlgs27bjo/public/image/binance.webp?tr=w-350,q-100'
                    decoding='async'
                    data-nimg='intrinsic'
                    style={ImageDivSpanImgStyle3}
                    srcSet='https://ik.imagekit.io/2zlgs27bjo/public/image/binance.webp?tr=w-350,q-100 1x, https://ik.imagekit.io/2zlgs27bjo/public/image/binance.webp?tr=w-350,q-100 2x'
                    data-xblocker='passed'
                  />
                </span>
              </div>
            </div>
          </div>
          <div
            id='/image/binance.webp'
            className={
              theme.palette.mode === 'light'
                ? 'techStack_tech__ZCDwG techStack_d-none__ZiiOz'
                : 'techStack_tech__ZCDwG'
            }
            onClick={() => window.open('https://www.binance.com/en', '_blank')}
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
                  <img
                    alt='https://www.binance.com/en'
                    draggable='false'
                    srcSet='https://ik.imagekit.io/2zlgs27bjo/public/image/dark/binance.svg?tr=w-350,q-100 1x, https://ik.imagekit.io/2zlgs27bjo/public/image/dark/binance.svg?tr=w-350,q-100 2x'
                    src='https://ik.imagekit.io/2zlgs27bjo/public/image/dark/binance.svg?tr=w-350,q-100'
                    decoding='async'
                    data-nimg='intrinsic'
                    style={ImageDivSpanImgStyle3}
                    data-xblocker='passed'
                  />
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className='techStack_techCardMobile__HvcqW' style={{}}>
          <div
            id='/image/solana.webp'
            className='techStack_tech__ZCDwG'
            onClick={() => window.open('https://solana.com/', '_blank')}
          >
            <div className='techCard_imageItem__PHXmj'>
              <div className='techCard_box__j1mN7'>
                <span style={ImageDivSpanStyle1}>
                  <span style={ImageDivSpanSpanStyle1}>
                    <img
                      alt=''
                      aria-hidden='true'
                      src='data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%27350%27%20height=%27120%27/%3e'
                      data-xblocker='passed'
                      style={ImageDivSpanSpanImgStyle2}
                    />
                  </span>
                  <img
                    alt='https://solana.com/'
                    draggable='false'
                    src='data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7'
                    decoding='async'
                    data-nimg='intrinsic'
                    style={ImageDivSpanImgStyle2}
                  />
                  <noscript></noscript>
                </span>
              </div>
            </div>
          </div>
          <div
            id='/image/solidity.webp'
            className='techStack_tech__ZCDwG'
            onClick={() => window.open('https://solidity.io/', '_blank')}
          >
            <div className='techCard_imageItem__PHXmj'>
              <div className='techCard_box__j1mN7'>
                <span style={ImageDivSpanStyle1}>
                  <span style={ImageDivSpanSpanStyle1}>
                    <img
                      alt=''
                      aria-hidden='true'
                      src='data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%27350%27%20height=%27120%27/%3e'
                      data-xblocker='passed'
                      style={ImageDivSpanSpanImgStyle2}
                    />
                  </span>
                  <img
                    alt='https://www.solidity.io/'
                    draggable='false'
                    src='data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7'
                    decoding='async'
                    data-nimg='intrinsic'
                    style={ImageDivSpanImgStyle2}
                  />
                  <noscript></noscript>
                </span>
              </div>
            </div>
          </div>
          <div
            id='/image/ethereum.webp'
            className='techStack_tech__ZCDwG'
            onClick={() => window.open('https://ethereum.org/en/', '_blank')}
          >
            <div className='techCard_imageItem__PHXmj'>
              <div className='techCard_box__j1mN7'>
                <span style={ImageDivSpanStyle1}>
                  <span style={ImageDivSpanSpanStyle1}>
                    <img
                      alt=''
                      aria-hidden='true'
                      src='data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%27350%27%20height=%27120%27/%3e'
                      data-xblocker='passed'
                      style={ImageDivSpanSpanImgStyle2}
                    />
                  </span>
                  <img
                    alt='https://ethereum.org/en/'
                    draggable='false'
                    src='data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7'
                    decoding='async'
                    data-nimg='intrinsic'
                    style={ImageDivSpanImgStyle2}
                  />
                  <noscript></noscript>
                </span>
              </div>
            </div>
          </div>
          <div
            id='/image/aptos.webp'
            className='techStack_tech__ZCDwG'
            onClick={() => window.open('https://aptoslabs.com/', '_blank')}
          >
            <div className='techCard_imageItem__PHXmj'>
              <div className='techCard_box__j1mN7'>
                <span style={ImageDivSpanStyle1}>
                  <span style={ImageDivSpanSpanStyle1}>
                    <img
                      alt=''
                      aria-hidden='true'
                      src='data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%27350%27%20height=%27120%27/%3e'
                      data-xblocker='passed'
                      style={ImageDivSpanSpanImgStyle2}
                    />
                  </span>
                  <img
                    alt='https://aptoslabs.com/'
                    draggable='false'
                    src='https://ik.imagekit.io/2zlgs27bjo/public/image/aptos.webp?tr=w-350,q-100'
                    decoding='async'
                    data-nimg='intrinsic'
                    srcSet='https://ik.imagekit.io/2zlgs27bjo/public/image/aptos.webp?tr=w-350,q-100 1x, https://ik.imagekit.io/2zlgs27bjo/public/image/aptos.webp?tr=w-350,q-100 2x'
                    data-xblocker='passed'
                    style={ImageDivSpanImgStyle3}
                  />
                </span>
              </div>
            </div>
          </div>
          <div
            id='/image/polygon.webp'
            className='techStack_tech__ZCDwG'
            onClick={() => window.open('https://polygon.technology/', '_blank')}
          >
            <div className='techCard_imageItem__PHXmj'>
              <div className='techCard_box__j1mN7'>
                <span style={ImageDivSpanStyle1}>
                  <span style={ImageDivSpanSpanStyle1}>
                    <img
                      alt=''
                      aria-hidden='true'
                      src='data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%27350%27%20height=%27120%27/%3e'
                      data-xblocker='passed'
                      style={ImageDivSpanSpanImgStyle2}
                    />
                  </span>
                  <img
                    alt='https://polygon.technology/'
                    draggable='false'
                    src='data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7'
                    decoding='async'
                    data-nimg='intrinsic'
                    style={ImageDivSpanImgStyle2}
                  />
                  <noscript></noscript>
                </span>
              </div>
            </div>
          </div>
          <div
            id='/image/avalanche.webp'
            className='techStack_tech__ZCDwG'
            onClick={() => window.open('https://www.avax.network/', '_blank')}
          >
            <div className='techCard_imageItem__PHXmj'>
              <div className='techCard_box__j1mN7'>
                <span style={ImageDivSpanStyle1}>
                  <span style={ImageDivSpanSpanStyle1}>
                    <img
                      alt=''
                      aria-hidden='true'
                      src='data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%27350%27%20height=%27120%27/%3e'
                      data-xblocker='passed'
                      style={ImageDivSpanSpanImgStyle2}
                    />
                  </span>
                  <img
                    alt='https://www.avax.network/'
                    draggable='false'
                    src='data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7'
                    decoding='async'
                    data-nimg='intrinsic'
                    style={ImageDivSpanImgStyle2}
                  />
                  <noscript></noscript>
                </span>
              </div>
            </div>
          </div>
          <div
            id='/image/cardano.webp'
            className='techStack_tech__ZCDwG'
            onClick={() => window.open('https://cardano.org/', '_blank')}
          >
            <div className='techCard_imageItem__PHXmj'>
              <div className='techCard_box__j1mN7'>
                <span style={ImageDivSpanStyle1}>
                  <span style={ImageDivSpanSpanStyle1}>
                    <img
                      alt=''
                      aria-hidden='true'
                      src='data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%27350%27%20height=%27120%27/%3e'
                      data-xblocker='passed'
                      style={ImageDivSpanSpanImgStyle2}
                    />
                  </span>
                  <img
                    alt='https://cardano.org/'
                    draggable='false'
                    src='data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7'
                    decoding='async'
                    data-nimg='intrinsic'
                    style={ImageDivSpanImgStyle2}
                  />
                  <noscript></noscript>
                </span>
              </div>
            </div>
          </div>
          <div
            id='/image/binance.webp'
            className='techStack_tech__ZCDwG'
            onClick={() => window.open('https://www.binance.com/en', '_blank')}
          >
            <div className='techCard_imageItem__PHXmj'>
              <div className='techCard_box__j1mN7'>
                <span style={ImageDivSpanStyle1}>
                  <span style={ImageDivSpanSpanStyle1}>
                    <img
                      alt=''
                      aria-hidden='true'
                      src='data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%27350%27%20height=%27120%27/%3e'
                      data-xblocker='passed'
                      style={ImageDivSpanSpanImgStyle2}
                    />
                  </span>
                  <img
                    alt='https://www.binance.com/en'
                    draggable='false'
                    src='data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7'
                    decoding='async'
                    data-nimg='intrinsic'
                    style={ImageDivSpanImgStyle2}
                  />
                  <noscript></noscript>
                </span>
              </div>
            </div>
          </div>
        </div>
        <div
          className='techStack_techCardMobile__HvcqW'
          style={{ display: 'none' }}
        >
          <div
            id='/image/solana.webp'
            className='techStack_tech__ZCDwG'
            onClick={() => window.open('https://solana.com/', '_blank')}
          >
            <div className='techCard_imageItem__PHXmj'>
              <div className='techCard_box__j1mN7'>
                <span style={ImageDivSpanStyle1}>
                  <span style={ImageDivSpanSpanStyle1}>
                    <img
                      alt=''
                      aria-hidden='true'
                      src='data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%27350%27%20height=%27120%27/%3e'
                      data-xblocker='passed'
                      style={ImageDivSpanSpanImgStyle2}
                    />
                  </span>
                  <img
                    alt='https://solana.com/'
                    draggable='false'
                    src='data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7'
                    decoding='async'
                    data-nimg='intrinsic'
                    style={ImageDivSpanImgStyle2}
                  />
                  <noscript></noscript>
                </span>
              </div>
            </div>
          </div>
          <div
            id='/image/solidity.webp'
            className='techStack_tech__ZCDwG'
            onClick={() => window.open('https://solidity.io/', '_blank')}
          >
            <div className='techCard_imageItem__PHXmj'>
              <div className='techCard_box__j1mN7'>
                <span style={ImageDivSpanStyle1}>
                  <span style={ImageDivSpanSpanStyle1}>
                    <img
                      alt=''
                      aria-hidden='true'
                      src='data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%27350%27%20height=%27120%27/%3e'
                      data-xblocker='passed'
                      style={ImageDivSpanSpanImgStyle2}
                    />
                  </span>
                  <img
                    alt='https://www.solidity.io/'
                    draggable='false'
                    src='data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7'
                    decoding='async'
                    data-nimg='intrinsic'
                    style={ImageDivSpanImgStyle2}
                  />
                  <noscript></noscript>
                </span>
              </div>
            </div>
          </div>
          <div
            id='/image/ethereum.webp'
            className='techStack_tech__ZCDwG'
            onClick={() => window.open('https://ethereum.org/en/', '_blank')}
          >
            <div className='techCard_imageItem__PHXmj'>
              <div className='techCard_box__j1mN7'>
                <span style={ImageDivSpanStyle1}>
                  <span style={ImageDivSpanSpanStyle1}>
                    <img
                      alt=''
                      aria-hidden='true'
                      src='data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%27350%27%20height=%27120%27/%3e'
                      data-xblocker='passed'
                      style={ImageDivSpanSpanImgStyle2}
                    />
                  </span>
                  <img
                    alt='https://ethereum.org/en/'
                    draggable='false'
                    src='data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7'
                    decoding='async'
                    data-nimg='intrinsic'
                    style={ImageDivSpanImgStyle2}
                  />
                  <noscript></noscript>
                </span>
              </div>
            </div>
          </div>
          <div
            id='/image/aptos.webp'
            className='techStack_tech__ZCDwG'
            onClick={() => window.open('https://aptoslabs.com/', '_blank')}
          >
            <div className='techCard_imageItem__PHXmj'>
              <div className='techCard_box__j1mN7'>
                <span style={ImageDivSpanStyle1}>
                  <span style={ImageDivSpanSpanStyle1}>
                    <img
                      alt=''
                      aria-hidden='true'
                      src='data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%27350%27%20height=%27120%27/%3e'
                      data-xblocker='passed'
                      style={ImageDivSpanSpanImgStyle2}
                    />
                  </span>
                  <img
                    alt='https://aptoslabs.com/'
                    draggable='false'
                    srcSet='https://ik.imagekit.io/2zlgs27bjo/public/image/dark/aptosdark.svg?tr=w-350,q-100 1x, https://ik.imagekit.io/2zlgs27bjo/public/image/dark/aptosdark.svg?tr=w-350,q-100 2x'
                    src='https://ik.imagekit.io/2zlgs27bjo/public/image/dark/aptosdark.svg?tr=w-350,q-100'
                    decoding='async'
                    data-nimg='intrinsic'
                    data-xblocker='passed'
                    style={ImageDivSpanImgStyle3}
                  />
                </span>
              </div>
            </div>
          </div>
          <div
            id='/image/polygon.webp'
            className='techStack_tech__ZCDwG'
            onClick={() => window.open('https://polygon.technology/', '_blank')}
          >
            <div className='techCard_imageItem__PHXmj'>
              <div className='techCard_box__j1mN7'>
                <span style={ImageDivSpanStyle1}>
                  <span style={ImageDivSpanSpanStyle1}>
                    <img
                      alt=''
                      aria-hidden='true'
                      src='data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%27350%27%20height=%27120%27/%3e'
                      data-xblocker='passed'
                      style={ImageDivSpanSpanImgStyle2}
                    />
                  </span>
                  <img
                    alt='https://polygon.technology/'
                    draggable='false'
                    src='data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7'
                    decoding='async'
                    data-nimg='intrinsic'
                    style={ImageDivSpanImgStyle2}
                  />
                  <noscript></noscript>
                </span>
              </div>
            </div>
          </div>
          <div
            id='/image/avalanche.webp'
            className='techStack_tech__ZCDwG'
            onClick={() => window.open('https://www.avax.network/', '_blank')}
          >
            <div className='techCard_imageItem__PHXmj'>
              <div className='techCard_box__j1mN7'>
                <span style={ImageDivSpanStyle1}>
                  <span style={ImageDivSpanSpanStyle1}>
                    <img
                      alt=''
                      aria-hidden='true'
                      src='data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%27350%27%20height=%27120%27/%3e'
                      data-xblocker='passed'
                      style={ImageDivSpanSpanImgStyle2}
                    />
                  </span>
                  <img
                    alt='https://www.avax.network/'
                    draggable='false'
                    src='data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7'
                    decoding='async'
                    data-nimg='intrinsic'
                    style={ImageDivSpanImgStyle2}
                  />
                  <noscript></noscript>
                </span>
              </div>
            </div>
          </div>
          <div
            id='/image/cardano.webp'
            className='techStack_tech__ZCDwG'
            onClick={() => window.open('https://cardano.org/', '_blank')}
          >
            <div className='techCard_imageItem__PHXmj'>
              <div className='techCard_box__j1mN7'>
                <span style={ImageDivSpanStyle1}>
                  <span style={ImageDivSpanSpanStyle1}>
                    <img
                      alt=''
                      aria-hidden='true'
                      src='data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%27350%27%20height=%27120%27/%3e'
                      data-xblocker='passed'
                      style={ImageDivSpanSpanImgStyle2}
                    />
                  </span>
                  <img
                    alt='https://cardano.org/'
                    draggable='false'
                    src='data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7'
                    decoding='async'
                    data-nimg='intrinsic'
                    style={ImageDivSpanImgStyle2}
                  />
                  <noscript></noscript>
                </span>
              </div>
            </div>
          </div>
          <div
            id='/image/binance.webp'
            className='techStack_tech__ZCDwG'
            onClick={() => window.open('https://www.binance.com/en', '_blank')}
          >
            <div className='techCard_imageItem__PHXmj'>
              <div className='techCard_box__j1mN7'>
                <span style={ImageDivSpanStyle1}>
                  <span style={ImageDivSpanSpanStyle1}>
                    <img
                      alt=''
                      aria-hidden='true'
                      src='data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%27350%27%20height=%27120%27/%3e'
                      data-xblocker='passed'
                      style={ImageDivSpanSpanImgStyle2}
                    />
                  </span>
                  <img
                    alt='https://www.binance.com/en'
                    draggable='false'
                    src='data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7'
                    decoding='async'
                    data-nimg='intrinsic'
                    style={ImageDivSpanImgStyle2}
                  />
                  <noscript></noscript>
                </span>
              </div>
            </div>
          </div>
        </div>
        <Link to='/blockchain'>
          <button
            type='button'
            className='ant-btn ant-btn-default button_btn__XHL7T techStack_moreBtn__vq21C button_light__M4f83 button_direction-row__QRu0d'
          >
            <p>See More</p>
          </button>
        </Link>
        <div className='techStack_more__5Fd_p'>
          <span className='techStack_forMobileTitle__1gaiv'>
            <div className='subTitleText_subTitle__2anJB techStack_title__oacUw'>
              <span
                className={
                  theme.palette.mode === 'light'
                    ? 'subTitleText_subTitleText__bQxEn undefined'
                    : 'subTitleText_subTitleText__bQxEn subTitleText_subTitleTextColor--font-color__AYsIE'
                }
              >
                Software Development
              </span>
            </div>
            <div
              className='subTitleText_description__WoiQ_ title-text-color'
              style={{ maxWidth: 'none' }}
            ></div>
          </span>
          <div className='techStack_techSoft__x6kIR'>
            <div
              id='/image/jsIcon.svg'
              className='techStack_tech__ZCDwG'
              onClick={() =>
                window.open('https://www.javascript.com/', '_blank')
              }
            >
              <div className='techCard_imageItem__PHXmj'>
                <div className='techCard_box__j1mN7 techStack_cardTech__8bnbT'>
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
                    {theme.palette.mode === 'light' ? (
                      <img
                        alt='https://www.javascript.com/'
                        draggable='false'
                        src='https://ik.imagekit.io/2zlgs27bjo/public/image/jsIcon.svg?tr=w-350,q-100'
                        decoding='async'
                        data-nimg='intrinsic'
                        style={ImageDivSpanImgStyle3}
                        data-xblocker='passed'
                        srcSet='https://ik.imagekit.io/2zlgs27bjo/public/image/jsIcon.svg?tr=w-350,q-100 1x, https://ik.imagekit.io/2zlgs27bjo/public/image/jsIcon.svg?tr=w-350,q-100 2x'
                      />
                    ) : (
                      <img
                        alt='https://www.javascript.com/'
                        draggable='false'
                        srcSet='https://ik.imagekit.io/2zlgs27bjo/public/image/dark/js-dark.svg?tr=w-350,q-100 1x, https://ik.imagekit.io/2zlgs27bjo/public/image/dark/js-dark.svg?tr=w-350,q-100 2x'
                        src='https://ik.imagekit.io/2zlgs27bjo/public/image/dark/js-dark.svg?tr=w-350,q-100'
                        decoding='async'
                        data-nimg='intrinsic'
                        style={ImageDivSpanImgStyle3}
                        data-xblocker='passed'
                      ></img>
                    )}
                  </span>
                </div>
              </div>
            </div>
            <div
              id='/image/vuejs.svg'
              className='techStack_tech__ZCDwG'
              onClick={() => window.open('https://vuejs.org/', '_blank')}
            >
              <div className='techCard_imageItem__PHXmj'>
                <div className='techCard_box__j1mN7 techStack_cardTech__8bnbT'>
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
                    {theme.palette.mode === 'light' ? (
                      <img
                        alt='https://vuejs.org/'
                        draggable='false'
                        src='https://ik.imagekit.io/2zlgs27bjo/public/image/vuejs.svg?tr=w-350,q-100'
                        decoding='async'
                        data-nimg='intrinsic'
                        style={ImageDivSpanImgStyle3}
                        data-xblocker='passed'
                        srcSet='https://ik.imagekit.io/2zlgs27bjo/public/image/vuejs.svg?tr=w-350,q-100 1x, https://ik.imagekit.io/2zlgs27bjo/public/image/vuejs.svg?tr=w-350,q-100 2x'
                      />
                    ) : (
                      <img
                        alt='https://vuejs.org/'
                        draggable='false'
                        srcSet='https://ik.imagekit.io/2zlgs27bjo/public/image/dark/Vue-dark-new.svg?tr=w-350,q-100 1x, https://ik.imagekit.io/2zlgs27bjo/public/image/dark/Vue-dark-new.svg?tr=w-350,q-100 2x'
                        src='https://ik.imagekit.io/2zlgs27bjo/public/image/dark/Vue-dark-new.svg?tr=w-350,q-100'
                        decoding='async'
                        data-nimg='intrinsic'
                        style={ImageDivSpanImgStyle3}
                        data-xblocker='passed'
                      ></img>
                    )}
                  </span>
                </div>
              </div>
            </div>
            <div
              id='/image/react.svg'
              className='techStack_tech__ZCDwG'
              onClick={() => window.open('https://react.dev/', '_blank')}
            >
              <div className='techCard_imageItem__PHXmj'>
                <div className='techCard_box__j1mN7 techStack_cardTech__8bnbT'>
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
                    {theme.palette.mode === 'light' ? (
                      <img
                        alt='https://reactjs.org/'
                        draggable='false'
                        src='https://ik.imagekit.io/2zlgs27bjo/public/image/react.svg?tr=w-350,q-100'
                        decoding='async'
                        data-nimg='intrinsic'
                        style={ImageDivSpanImgStyle3}
                        data-xblocker='passed'
                        srcSet='https://ik.imagekit.io/2zlgs27bjo/public/image/react.svg?tr=w-350,q-100 1x, https://ik.imagekit.io/2zlgs27bjo/public/image/react.svg?tr=w-350,q-100 2x'
                      />
                    ) : (
                      <img
                        alt='https://reactjs.org/'
                        draggable='false'
                        srcSet='https://ik.imagekit.io/2zlgs27bjo/public/image/dark/React-new-dark.svg?tr=w-350,q-100 1x, https://ik.imagekit.io/2zlgs27bjo/public/image/dark/React-new-dark.svg?tr=w-350,q-100 2x'
                        src='https://ik.imagekit.io/2zlgs27bjo/public/image/dark/React-new-dark.svg?tr=w-350,q-100'
                        decoding='async'
                        data-nimg='intrinsic'
                        style={ImageDivSpanImgStyle3}
                        data-xblocker='passed'
                      ></img>
                    )}
                  </span>
                </div>
              </div>
            </div>
            <div
              id='/image/angularIcon.svg'
              className='techStack_tech__ZCDwG'
              onClick={() => window.open('https://angular.io/', '_blank')}
            >
              <div className='techCard_imageItem__PHXmj'>
                <div className='techCard_box__j1mN7 techStack_cardTech__8bnbT'>
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
                    {theme.palette.mode === 'light' ? (
                      <img
                        alt='https://angular.io/'
                        draggable='false'
                        src='https://ik.imagekit.io/2zlgs27bjo/public/image/angularIcon.svg?tr=w-350,q-100'
                        decoding='async'
                        data-nimg='intrinsic'
                        style={ImageDivSpanImgStyle3}
                        data-xblocker='passed'
                        srcSet='https://ik.imagekit.io/2zlgs27bjo/public/image/angularIcon.svg?tr=w-350,q-100 1x, https://ik.imagekit.io/2zlgs27bjo/public/image/angularIcon.svg?tr=w-350,q-100 2x'
                      />
                    ) : (
                      <img
                        alt='https://angular.io/'
                        draggable='false'
                        srcSet='https://ik.imagekit.io/2zlgs27bjo/public/image/dark/Angular-dark-new.svg?tr=w-350,q-100 1x, https://ik.imagekit.io/2zlgs27bjo/public/image/dark/Angular-dark-new.svg?tr=w-350,q-100 2x'
                        src='https://ik.imagekit.io/2zlgs27bjo/public/image/dark/Angular-dark-new.svg?tr=w-350,q-100'
                        decoding='async'
                        data-nimg='intrinsic'
                        style={ImageDivSpanImgStyle3}
                        data-xblocker='passed'
                      ></img>
                    )}
                  </span>
                </div>
              </div>
            </div>
            <div
              id='/image/net.svg'
              className='techStack_tech__ZCDwG'
              onClick={() =>
                window.open('https://dotnet.microsoft.com/en-us/', '_blank')
              }
            >
              <div className='techCard_imageItem__PHXmj'>
                <div className='techCard_box__j1mN7 techStack_cardTech__8bnbT'>
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
                    {theme.palette.mode === 'light' ? (
                      <img
                        alt='https://dotnet.microsoft.com/en-us/'
                        draggable='false'
                        src='https://ik.imagekit.io/2zlgs27bjo/public/image/net.svg?tr=w-350,q-100'
                        decoding='async'
                        data-nimg='intrinsic'
                        style={ImageDivSpanImgStyle3}
                        data-xblocker='passed'
                        srcSet='https://ik.imagekit.io/2zlgs27bjo/public/image/net.svg?tr=w-350,q-100 1x, https://ik.imagekit.io/2zlgs27bjo/public/image/net.svg?tr=w-350,q-100 2x'
                      />
                    ) : (
                      <img
                        alt='https://dotnet.microsoft.com/en-us/'
                        draggable='false'
                        srcSet='https://ik.imagekit.io/2zlgs27bjo/public/image/dark/net-dark-new.svg?tr=w-350,q-100 1x, https://ik.imagekit.io/2zlgs27bjo/public/image/dark/net-dark-new.svg?tr=w-350,q-100 2x'
                        src='https://ik.imagekit.io/2zlgs27bjo/public/image/dark/net-dark-new.svg?tr=w-350,q-100'
                        decoding='async'
                        data-nimg='intrinsic'
                        style={ImageDivSpanImgStyle3}
                        data-xblocker='passed'
                      ></img>
                    )}
                  </span>
                </div>
              </div>
            </div>
            <div
              id='/image/nodeJs.svg'
              className='techStack_tech__ZCDwG'
              onClick={() => window.open('https://nodejs.org/en/', '_blank')}
            >
              <div className='techCard_imageItem__PHXmj'>
                <div className='techCard_box__j1mN7 techStack_cardTech__8bnbT'>
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
                    {theme.palette.mode === 'light' ? (
                      <img
                        alt='https://nodejs.org/en/'
                        draggable='false'
                        src='https://ik.imagekit.io/2zlgs27bjo/public/image/nodeJs.svg?tr=w-350,q-100'
                        decoding='async'
                        data-nimg='intrinsic'
                        style={ImageDivSpanImgStyle3}
                        data-xblocker='passed'
                        srcSet='https://ik.imagekit.io/2zlgs27bjo/public/image/nodeJs.svg?tr=w-350,q-100 1x, https://ik.imagekit.io/2zlgs27bjo/public/image/nodeJs.svg?tr=w-350,q-100 2x'
                      />
                    ) : (
                      <img
                        alt='https://nodejs.org/en/'
                        draggable='false'
                        srcSet='https://ik.imagekit.io/2zlgs27bjo/public/image/dark/Node-dark-new.svg?tr=w-350,q-100 1x, https://ik.imagekit.io/2zlgs27bjo/public/image/dark/Node-dark-new.svg?tr=w-350,q-100 2x'
                        src='https://ik.imagekit.io/2zlgs27bjo/public/image/dark/Node-dark-new.svg?tr=w-350,q-100'
                        decoding='async'
                        data-nimg='intrinsic'
                        style={ImageDivSpanImgStyle3}
                        data-xblocker='passed'
                      ></img>
                    )}
                  </span>
                </div>
              </div>
            </div>
            <div
              id='/image/pythonIcon.svg'
              className='techStack_tech__ZCDwG'
              onClick={() => window.open('https://www.python.org/', '_blank')}
            >
              <div className='techCard_imageItem__PHXmj'>
                <div className='techCard_box__j1mN7 techStack_cardTech__8bnbT'>
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
                    {theme.palette.mode === 'light' ? (
                      <img
                        alt='https://www.python.org/'
                        draggable='false'
                        src='https://ik.imagekit.io/2zlgs27bjo/public/image/pythonIcon.svg?tr=w-350,q-100'
                        decoding='async'
                        data-nimg='intrinsic'
                        style={ImageDivSpanImgStyle3}
                        data-xblocker='passed'
                        srcSet='https://ik.imagekit.io/2zlgs27bjo/public/image/pythonIcon.svg?tr=w-350,q-100 1x, https://ik.imagekit.io/2zlgs27bjo/public/image/pythonIcon.svg?tr=w-350,q-100 2x'
                      />
                    ) : (
                      <img
                        alt='https://www.python.org/'
                        draggable='false'
                        srcSet='https://ik.imagekit.io/2zlgs27bjo/public/image/dark/Python-new-dark.svg?tr=w-350,q-100 1x, https://ik.imagekit.io/2zlgs27bjo/public/image/dark/Python-new-dark.svg?tr=w-350,q-100 2x'
                        src='https://ik.imagekit.io/2zlgs27bjo/public/image/dark/Python-new-dark.svg?tr=w-350,q-100'
                        decoding='async'
                        data-nimg='intrinsic'
                        style={ImageDivSpanImgStyle3}
                        data-xblocker='passed'
                      ></img>
                    )}
                  </span>
                </div>
              </div>
            </div>
            <div
              id='/image/azure.svg'
              className='techStack_tech__ZCDwG'
              onClick={() =>
                window.open('https://azure.microsoft.com/en-us/', '_blank')
              }
            >
              <div className='techCard_imageItem__PHXmj'>
                <div className='techCard_box__j1mN7 techStack_cardTech__8bnbT'>
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
                    {theme.palette.mode === 'light' ? (
                      <img
                        alt='https://azure.microsoft.com/en-us/'
                        draggable='false'
                        src='https://ik.imagekit.io/2zlgs27bjo/public/image/azure.svg?tr=w-350,q-100'
                        decoding='async'
                        data-nimg='intrinsic'
                        style={ImageDivSpanImgStyle3}
                        data-xblocker='passed'
                        srcSet='https://ik.imagekit.io/2zlgs27bjo/public/image/azure.svg?tr=w-350,q-100 1x, https://ik.imagekit.io/2zlgs27bjo/public/image/azure.svg?tr=w-350,q-100 2x'
                      />
                    ) : (
                      <img
                        alt='https://azure.microsoft.com/en-us/'
                        draggable='false'
                        srcSet='https://ik.imagekit.io/2zlgs27bjo/public/image/dark/Azure-dark-new.svg?tr=w-350,q-100 1x, https://ik.imagekit.io/2zlgs27bjo/public/image/dark/Azure-dark-new.svg?tr=w-350,q-100 2x'
                        src='https://ik.imagekit.io/2zlgs27bjo/public/image/dark/Azure-dark-new.svg?tr=w-350,q-100'
                        decoding='async'
                        data-nimg='intrinsic'
                        style={ImageDivSpanImgStyle3}
                        data-xblocker='passed'
                      ></img>
                    )}
                  </span>
                </div>
              </div>
            </div>
          </div>
          <Link to='/software'>
            <button
              type='button'
              className='ant-btn ant-btn-default button_btn__XHL7T techStack_moreBtn__vq21C button_light__M4f83 button_direction-row__QRu0d'
            >
              <p>See More</p>
            </button>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default TechStack

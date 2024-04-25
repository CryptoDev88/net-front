import { useTheme } from '@mui/system'
import {
  ImageDivSpanStyle1,
  ImageDivSpanSpanStyle1,
  ImageDivSpanSpanImgStyle2,
  ImageDivSpanImgStyle3
} from '../../BaseCss'

function BlockchainIntro () {
  const theme = useTheme()

  return (
    <section className='intro_container__LmN_U'>
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
                    theme.palette.mode === 'dark'
                      ? 'subTitleText_subTitleText__bQxEn subTitleText_subTitleTextFont50px__VYyHa subTitleText_subTitleTextColor--font-color__AYsIE'
                      : 'subTitleText_subTitleText__bQxEn subTitleText_subTitleTextFont50px__VYyHa undefined'
                  }
                >
                  Blockchain Development
                </h1>
              </div>
              <div
                className='subTitleText_description__WoiQ_ title-text-color'
                style={{ maxWidth: 'none' }}
              >
                Solicy keeps up with the latest developments and offers a wide
                range of services due to the strong demand for blockchain
                development services in the industry. Being experts in this
                area, we provide services ranging from decentralized exchange
                (DEX) development to NFT marketplace creation. Ethereum, Solana,
                Cardano, Polkadot, and ATOS are among the top Blockchain
                platforms that we employ.
              </div>
            </div>
            <div className='intro_introImage__7PEEi'>
              <span style={ImageDivSpanStyle1}>
                <span style={ImageDivSpanSpanStyle1}>
                  <img
                    alt=''
                    aria-hidden='true'
                    src='data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%27570%27%20height=%27390%27/%3e'
                    style={ImageDivSpanSpanImgStyle2}
                    data-xblocker='passed'
                  />
                </span>
                <img
                  alt='/icons/blockchainDark.svg'
                  draggable='false'
                  srcSet='https://ik.imagekit.io/2zlgs27bjo/public/icons/blockchainDark.svg?tr=w-570,q-100 1x, https://ik.imagekit.io/2zlgs27bjo/public/icons/blockchainDark.svg?tr=w-570,q-100 2x'
                  src='https://ik.imagekit.io/2zlgs27bjo/public/icons/blockchainDark.svg?tr=w-570,q-100'
                  decoding='async'
                  data-nimg='intrinsic'
                  style={ImageDivSpanImgStyle3}
                  data-xblocker='passed'
                />
              </span>
            </div>
          </div>
        </div>
      </section>
    </section>
  )
}

export default BlockchainIntro

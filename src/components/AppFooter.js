import * as React from 'react'
import { useTheme } from '@mui/system'
import { HashLink } from 'react-router-hash-link'
import { Link } from 'react-router-dom'

import '../css/appFooter.css'

function AppFooterBar () {
  const theme = useTheme()
  return (
    <div className='footer_footerContainer__9XiyR'>
      <div className='footer_footerBox__B_QBU'>
        <div>
          <div className='footer_footerLogoInfo__hzi8I'>
            <div className='footer_solicyLogo__fei9Q' href='index.html'>
              <span>
                <span>
                  <img
                    alt=''
                    aria-hidden='true'
                    src='data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%27200%27%20height=%2750%27/%3e'
                  />
                </span>
                <img
                  alt='solicy-footer-logo.svg'
                  draggable='false'
                  src='https://ik.imagekit.io/2zlgs27bjo/public/icons/solicy-footer-logo.svg?tr=w-200,q-100'
                  decoding='async'
                  data-nimg='intrinsic'
                  srcSet='https://ik.imagekit.io/2zlgs27bjo/public/icons/solicy-footer-logo.svg?tr=w-200,q-100 1x, https://ik.imagekit.io/2zlgs27bjo/public/icons/solicy-footer-logo.svg?tr=w-200,q-100 2x'
                />
              </span>
            </div>
            <div className='footer_socialBox__Hh_1N'>
              <div className='footer_lastBox__OheTo'>
                <div className='footer_socialIncons__qmQdN'>
                  <a
                    href='https://twitter.com/solicydotnet'
                    target='_blank'
                    rel='noreferrer noreferrer nofollow'
                    className={
                      theme.palette.mode === 'light'
                        ? 'footer_socialIcons__r7W0b false'
                        : 'footer_socialIcons__r7W0b footer_socialIconsDark__tlWNC'
                    }
                  >
                    <div
                      className={
                        theme.palette.mode === 'light'
                          ? 'borderedIcon_iconBox__GsTQ2 undefined borderedIcon_size32__WBuG4'
                          : 'borderedIcon_iconBoxDark__J5ckL undefined borderedIcon_size32__WBuG4'
                      }
                    >
                      <span>
                        <img
                          alt='/icons/socialIcons/twiter-footer.svg'
                          draggable='false'
                          name='twiter'
                          color='#FFFFFF'
                          aria-label='twiter'
                          src='https://ik.imagekit.io/2zlgs27bjo/public/icons/socialIcons/twiter-footer.svg?tr=w-777,q-100'
                          decoding='async'
                          data-nimg='fill'
                          sizes='100vw'
                          srcSet='https://ik.imagekit.io/2zlgs27bjo/public/icons/socialIcons/twiter-footer.svg?tr=w-777,q-100 640w, https://ik.imagekit.io/2zlgs27bjo/public/icons/socialIcons/twiter-footer.svg?tr=w-777,q-100 750w, https://ik.imagekit.io/2zlgs27bjo/public/icons/socialIcons/twiter-footer.svg?tr=w-777,q-100 828w, https://ik.imagekit.io/2zlgs27bjo/public/icons/socialIcons/twiter-footer.svg?tr=w-777,q-100 1080w, https://ik.imagekit.io/2zlgs27bjo/public/icons/socialIcons/twiter-footer.svg?tr=w-777,q-100 1200w, https://ik.imagekit.io/2zlgs27bjo/public/icons/socialIcons/twiter-footer.svg?tr=w-777,q-100 1920w, https://ik.imagekit.io/2zlgs27bjo/public/icons/socialIcons/twiter-footer.svg?tr=w-777,q-100 2048w, https://ik.imagekit.io/2zlgs27bjo/public/icons/socialIcons/twiter-footer.svg?tr=w-777,q-100 3840w'
                        />
                      </span>
                    </div>
                  </a>
                  <a
                    href='https://www.linkedin.com/company/solicy/'
                    target='_blank'
                    rel='noreferrer noreferrer nofollow'
                    className={
                      theme.palette.mode === 'light'
                        ? 'footer_socialIcons__r7W0b false'
                        : 'footer_socialIcons__r7W0b footer_socialIconsDark__tlWNC'
                    }
                  >
                    <div
                      className={
                        theme.palette.mode === 'light'
                          ? 'borderedIcon_iconBox__GsTQ2 undefined borderedIcon_size32__WBuG4'
                          : 'borderedIcon_iconBoxDark__J5ckL undefined borderedIcon_size32__WBuG4'
                      }
                    >
                      <span>
                        <img
                          alt='/icons/socialIcons/linkedin-footer.svg'
                          draggable='false'
                          name='linkedin'
                          color='#FFFFFF'
                          aria-label='linkedin'
                          src='https://ik.imagekit.io/2zlgs27bjo/public/icons/socialIcons/linkedin-footer.svg?tr=w-777,q-100'
                          decoding='async'
                          data-nimg='fill'
                          sizes='100vw'
                          srcSet='https://ik.imagekit.io/2zlgs27bjo/public/icons/socialIcons/linkedin-footer.svg?tr=w-777,q-100 640w, https://ik.imagekit.io/2zlgs27bjo/public/icons/socialIcons/linkedin-footer.svg?tr=w-777,q-100 750w, https://ik.imagekit.io/2zlgs27bjo/public/icons/socialIcons/linkedin-footer.svg?tr=w-777,q-100 828w, https://ik.imagekit.io/2zlgs27bjo/public/icons/socialIcons/linkedin-footer.svg?tr=w-777,q-100 1080w, https://ik.imagekit.io/2zlgs27bjo/public/icons/socialIcons/linkedin-footer.svg?tr=w-777,q-100 1200w, https://ik.imagekit.io/2zlgs27bjo/public/icons/socialIcons/linkedin-footer.svg?tr=w-777,q-100 1920w, https://ik.imagekit.io/2zlgs27bjo/public/icons/socialIcons/linkedin-footer.svg?tr=w-777,q-100 2048w, https://ik.imagekit.io/2zlgs27bjo/public/icons/socialIcons/linkedin-footer.svg?tr=w-777,q-100 3840w'
                        />
                      </span>
                    </div>
                  </a>
                  <a
                    href='https://discord.gg/E6MyNMrMCu'
                    target='_blank'
                    rel='noreferrer noreferrer nofollow'
                    className={
                      theme.palette.mode === 'light'
                        ? 'footer_socialIcons__r7W0b false'
                        : 'footer_socialIcons__r7W0b footer_socialIconsDark__tlWNC'
                    }
                  >
                    <div
                      className={
                        theme.palette.mode === 'light'
                          ? 'borderedIcon_iconBox__GsTQ2 undefined borderedIcon_size32__WBuG4'
                          : 'borderedIcon_iconBoxDark__J5ckL undefined borderedIcon_size32__WBuG4'
                      }
                    >
                      <span>
                        <img
                          alt='/icons/socialIcons/discord-footer.svg'
                          draggable='false'
                          name='discord'
                          color='#FFFFFF'
                          aria-label='discord'
                          src='https://ik.imagekit.io/2zlgs27bjo/public/icons/socialIcons/discord-footer.svg?tr=w-777,q-100'
                          decoding='async'
                          data-nimg='fill'
                          sizes='100vw'
                          srcSet='https://ik.imagekit.io/2zlgs27bjo/public/icons/socialIcons/discord-footer.svg?tr=w-777,q-100 640w, https://ik.imagekit.io/2zlgs27bjo/public/icons/socialIcons/discord-footer.svg?tr=w-777,q-100 750w, https://ik.imagekit.io/2zlgs27bjo/public/icons/socialIcons/discord-footer.svg?tr=w-777,q-100 828w, https://ik.imagekit.io/2zlgs27bjo/public/icons/socialIcons/discord-footer.svg?tr=w-777,q-100 1080w, https://ik.imagekit.io/2zlgs27bjo/public/icons/socialIcons/discord-footer.svg?tr=w-777,q-100 1200w, https://ik.imagekit.io/2zlgs27bjo/public/icons/socialIcons/discord-footer.svg?tr=w-777,q-100 1920w, https://ik.imagekit.io/2zlgs27bjo/public/icons/socialIcons/discord-footer.svg?tr=w-777,q-100 2048w, https://ik.imagekit.io/2zlgs27bjo/public/icons/socialIcons/discord-footer.svg?tr=w-777,q-100 3840w'
                        />
                      </span>
                    </div>
                  </a>
                  <a
                    href='https://github.com/Solicy-App'
                    target='_blank'
                    rel='noreferrer noreferrer nofollow'
                    className={
                      theme.palette.mode === 'light'
                        ? 'footer_socialIcons__r7W0b false'
                        : 'footer_socialIcons__r7W0b footer_socialIconsDark__tlWNC'
                    }
                  >
                    <div
                      className={
                        theme.palette.mode === 'light'
                          ? 'borderedIcon_iconBox__GsTQ2 undefined borderedIcon_size32__WBuG4'
                          : 'borderedIcon_iconBoxDark__J5ckL undefined borderedIcon_size32__WBuG4'
                      }
                    >
                      <span>
                        <img
                          alt='/icons/socialIcons/git-footer.svg'
                          draggable='false'
                          name='git'
                          color='#FFFFFF'
                          aria-label='git'
                          src='https://ik.imagekit.io/2zlgs27bjo/public/icons/socialIcons/git-footer.svg?tr=w-777,q-100'
                          decoding='async'
                          data-nimg='fill'
                          sizes='100vw'
                          srcSet='https://ik.imagekit.io/2zlgs27bjo/public/icons/socialIcons/git-footer.svg?tr=w-777,q-100 640w, https://ik.imagekit.io/2zlgs27bjo/public/icons/socialIcons/git-footer.svg?tr=w-777,q-100 750w, https://ik.imagekit.io/2zlgs27bjo/public/icons/socialIcons/git-footer.svg?tr=w-777,q-100 828w, https://ik.imagekit.io/2zlgs27bjo/public/icons/socialIcons/git-footer.svg?tr=w-777,q-100 1080w, https://ik.imagekit.io/2zlgs27bjo/public/icons/socialIcons/git-footer.svg?tr=w-777,q-100 1200w, https://ik.imagekit.io/2zlgs27bjo/public/icons/socialIcons/git-footer.svg?tr=w-777,q-100 1920w, https://ik.imagekit.io/2zlgs27bjo/public/icons/socialIcons/git-footer.svg?tr=w-777,q-100 2048w, https://ik.imagekit.io/2zlgs27bjo/public/icons/socialIcons/git-footer.svg?tr=w-777,q-100 3840w'
                        />
                      </span>
                    </div>
                  </a>
                  <a
                    href='https://t.me/Solicy_net'
                    target='_blank'
                    rel='noreferrer noreferrer nofollow'
                    className={
                      theme.palette.mode === 'light'
                        ? 'footer_socialIcons__r7W0b false'
                        : 'footer_socialIcons__r7W0b footer_socialIconsDark__tlWNC'
                    }
                  >
                    <div
                      className={
                        theme.palette.mode === 'light'
                          ? 'borderedIcon_iconBox__GsTQ2 undefined borderedIcon_size32__WBuG4'
                          : 'borderedIcon_iconBoxDark__J5ckL undefined borderedIcon_size32__WBuG4'
                      }
                    >
                      <span>
                        <img
                          alt='/icons/socialIcons/telegram-footer.svg'
                          draggable='false'
                          name='telegram'
                          color='#FFFFFF'
                          aria-label='telegram'
                          src='https://ik.imagekit.io/2zlgs27bjo/public/icons/socialIcons/telegram-footer.svg?tr=w-777,q-100'
                          decoding='async'
                          data-nimg='fill'
                          sizes='100vw'
                          srcSet='https://ik.imagekit.io/2zlgs27bjo/public/icons/socialIcons/telegram-footer.svg?tr=w-777,q-100 640w, https://ik.imagekit.io/2zlgs27bjo/public/icons/socialIcons/telegram-footer.svg?tr=w-777,q-100 750w, https://ik.imagekit.io/2zlgs27bjo/public/icons/socialIcons/telegram-footer.svg?tr=w-777,q-100 828w, https://ik.imagekit.io/2zlgs27bjo/public/icons/socialIcons/telegram-footer.svg?tr=w-777,q-100 1080w, https://ik.imagekit.io/2zlgs27bjo/public/icons/socialIcons/telegram-footer.svg?tr=w-777,q-100 1200w, https://ik.imagekit.io/2zlgs27bjo/public/icons/socialIcons/telegram-footer.svg?tr=w-777,q-100 1920w, https://ik.imagekit.io/2zlgs27bjo/public/icons/socialIcons/telegram-footer.svg?tr=w-777,q-100 2048w, https://ik.imagekit.io/2zlgs27bjo/public/icons/socialIcons/telegram-footer.svg?tr=w-777,q-100 3840w'
                        />
                      </span>
                    </div>
                  </a>
                  <a
                    href='https://instagram.com/solicydotnet?utm_medium=copy_link'
                    target='_blank'
                    rel='noreferrer noreferrer nofollow'
                    className={
                      theme.palette.mode === 'light'
                        ? 'footer_socialIcons__r7W0b false'
                        : 'footer_socialIcons__r7W0b footer_socialIconsDark__tlWNC'
                    }
                  >
                    <div
                      className={
                        theme.palette.mode === 'light'
                          ? 'borderedIcon_iconBox__GsTQ2 undefined borderedIcon_size32__WBuG4'
                          : 'borderedIcon_iconBoxDark__J5ckL undefined borderedIcon_size32__WBuG4'
                      }
                    >
                      <span>
                        <img
                          alt='/icons/socialIcons/instagram-footer.svg'
                          draggable='false'
                          name='instagram'
                          color='#FFFFFF'
                          aria-label='instagram'
                          src='https://ik.imagekit.io/2zlgs27bjo/public/icons/socialIcons/instagram-footer.svg?tr=w-777,q-100'
                          decoding='async'
                          data-nimg='fill'
                          sizes='100vw'
                          srcSet='https://ik.imagekit.io/2zlgs27bjo/public/icons/socialIcons/instagram-footer.svg?tr=w-777,q-100 640w, https://ik.imagekit.io/2zlgs27bjo/public/icons/socialIcons/instagram-footer.svg?tr=w-777,q-100 750w, https://ik.imagekit.io/2zlgs27bjo/public/icons/socialIcons/instagram-footer.svg?tr=w-777,q-100 828w, https://ik.imagekit.io/2zlgs27bjo/public/icons/socialIcons/instagram-footer.svg?tr=w-777,q-100 1080w, https://ik.imagekit.io/2zlgs27bjo/public/icons/socialIcons/instagram-footer.svg?tr=w-777,q-100 1200w, https://ik.imagekit.io/2zlgs27bjo/public/icons/socialIcons/instagram-footer.svg?tr=w-777,q-100 1920w, https://ik.imagekit.io/2zlgs27bjo/public/icons/socialIcons/instagram-footer.svg?tr=w-777,q-100 2048w, https://ik.imagekit.io/2zlgs27bjo/public/icons/socialIcons/instagram-footer.svg?tr=w-777,q-100 3840w'
                        />
                      </span>
                    </div>
                  </a>
                  <a
                    href='https://www.youtube.com/channel/UC6Zr3CgVMOu1nmp1YEsafHA'
                    target='_blank'
                    rel='noreferrer noreferrer nofollow'
                    className={
                      theme.palette.mode === 'light'
                        ? 'footer_socialIcons__r7W0b false'
                        : 'footer_socialIcons__r7W0b footer_socialIconsDark__tlWNC'
                    }
                  >
                    <div
                      className={
                        theme.palette.mode === 'light'
                          ? 'borderedIcon_iconBox__GsTQ2 undefined borderedIcon_size32__WBuG4'
                          : 'borderedIcon_iconBoxDark__J5ckL undefined borderedIcon_size32__WBuG4'
                      }
                    >
                      <span>
                        <img
                          alt='/icons/socialIcons/you-tube-footer.svg'
                          draggable='false'
                          name='tube'
                          color='#FFFFFF'
                          aria-label='tube'
                          src='https://ik.imagekit.io/2zlgs27bjo/public/icons/socialIcons/you-tube-footer.svg?tr=w-777,q-100'
                          decoding='async'
                          data-nimg='fill'
                          sizes='100vw'
                          srcSet='https://ik.imagekit.io/2zlgs27bjo/public/icons/socialIcons/you-tube-footer.svg?tr=w-777,q-100 640w, https://ik.imagekit.io/2zlgs27bjo/public/icons/socialIcons/you-tube-footer.svg?tr=w-777,q-100 750w, https://ik.imagekit.io/2zlgs27bjo/public/icons/socialIcons/you-tube-footer.svg?tr=w-777,q-100 828w, https://ik.imagekit.io/2zlgs27bjo/public/icons/socialIcons/you-tube-footer.svg?tr=w-777,q-100 1080w, https://ik.imagekit.io/2zlgs27bjo/public/icons/socialIcons/you-tube-footer.svg?tr=w-777,q-100 1200w, https://ik.imagekit.io/2zlgs27bjo/public/icons/socialIcons/you-tube-footer.svg?tr=w-777,q-100 1920w, https://ik.imagekit.io/2zlgs27bjo/public/icons/socialIcons/you-tube-footer.svg?tr=w-777,q-100 2048w, https://ik.imagekit.io/2zlgs27bjo/public/icons/socialIcons/you-tube-footer.svg?tr=w-777,q-100 3840w'
                        />
                      </span>
                    </div>
                  </a>
                  <a
                    href='https://www.tiktok.com/@solicydotnet'
                    target='_blank'
                    rel='noreferrer noreferrer nofollow'
                    className={
                      theme.palette.mode === 'light'
                        ? 'footer_socialIcons__r7W0b false'
                        : 'footer_socialIcons__r7W0b footer_socialIconsDark__tlWNC'
                    }
                  >
                    <div
                      className={
                        theme.palette.mode === 'light'
                          ? 'borderedIcon_iconBox__GsTQ2 undefined borderedIcon_size32__WBuG4'
                          : 'borderedIcon_iconBoxDark__J5ckL undefined borderedIcon_size32__WBuG4'
                      }
                    >
                      <span>
                        <img
                          alt='/icons/socialIcons/tiktok-footer.svg'
                          draggable='false'
                          name='tiktok'
                          color='#FFFFFF'
                          aria-label='tiktok'
                          src='https://ik.imagekit.io/2zlgs27bjo/public/icons/socialIcons/tiktok-footer.svg?tr=w-777,q-100'
                          decoding='async'
                          data-nimg='fill'
                          sizes='100vw'
                          srcSet='https://ik.imagekit.io/2zlgs27bjo/public/icons/socialIcons/tiktok-footer.svg?tr=w-777,q-100 640w, https://ik.imagekit.io/2zlgs27bjo/public/icons/socialIcons/tiktok-footer.svg?tr=w-777,q-100 750w, https://ik.imagekit.io/2zlgs27bjo/public/icons/socialIcons/tiktok-footer.svg?tr=w-777,q-100 828w, https://ik.imagekit.io/2zlgs27bjo/public/icons/socialIcons/tiktok-footer.svg?tr=w-777,q-100 1080w, https://ik.imagekit.io/2zlgs27bjo/public/icons/socialIcons/tiktok-footer.svg?tr=w-777,q-100 1200w, https://ik.imagekit.io/2zlgs27bjo/public/icons/socialIcons/tiktok-footer.svg?tr=w-777,q-100 1920w, https://ik.imagekit.io/2zlgs27bjo/public/icons/socialIcons/tiktok-footer.svg?tr=w-777,q-100 2048w, https://ik.imagekit.io/2zlgs27bjo/public/icons/socialIcons/tiktok-footer.svg?tr=w-777,q-100 3840w'
                        />
                      </span>
                    </div>
                  </a>
                  <a
                    href='https://www.facebook.com/Solicydotnet/'
                    target='_blank'
                    rel='noreferrer noreferrer nofollow'
                    className={
                      theme.palette.mode === 'light'
                        ? 'footer_socialIcons__r7W0b false'
                        : 'footer_socialIcons__r7W0b footer_socialIconsDark__tlWNC'
                    }
                  >
                    <div
                      className={
                        theme.palette.mode === 'light'
                          ? 'borderedIcon_iconBox__GsTQ2 undefined borderedIcon_size32__WBuG4'
                          : 'borderedIcon_iconBoxDark__J5ckL undefined borderedIcon_size32__WBuG4'
                      }
                    >
                      <span>
                        <img
                          alt='/icons/socialIcons/facebook-footer.svg'
                          draggable='false'
                          name='facebook'
                          color='#FFFFFF'
                          aria-label='facebook'
                          src='https://ik.imagekit.io/2zlgs27bjo/public/icons/socialIcons/facebook-footer.svg?tr=w-777,q-100'
                          decoding='async'
                          data-nimg='fill'
                          sizes='100vw'
                          srcSet='https://ik.imagekit.io/2zlgs27bjo/public/icons/socialIcons/facebook-footer.svg?tr=w-777,q-100 640w, https://ik.imagekit.io/2zlgs27bjo/public/icons/socialIcons/facebook-footer.svg?tr=w-777,q-100 750w, https://ik.imagekit.io/2zlgs27bjo/public/icons/socialIcons/facebook-footer.svg?tr=w-777,q-100 828w, https://ik.imagekit.io/2zlgs27bjo/public/icons/socialIcons/facebook-footer.svg?tr=w-777,q-100 1080w, https://ik.imagekit.io/2zlgs27bjo/public/icons/socialIcons/facebook-footer.svg?tr=w-777,q-100 1200w, https://ik.imagekit.io/2zlgs27bjo/public/icons/socialIcons/facebook-footer.svg?tr=w-777,q-100 1920w, https://ik.imagekit.io/2zlgs27bjo/public/icons/socialIcons/facebook-footer.svg?tr=w-777,q-100 2048w, https://ik.imagekit.io/2zlgs27bjo/public/icons/socialIcons/facebook-footer.svg?tr=w-777,q-100 3840w'
                        />
                      </span>
                    </div>
                  </a>
                  <a
                    href='https://www.reddit.com/user/Solicydot_net/'
                    target='_blank'
                    rel='noreferrer noreferrer nofollow'
                    className={
                      theme.palette.mode === 'light'
                        ? 'footer_socialIcons__r7W0b false'
                        : 'footer_socialIcons__r7W0b footer_socialIconsDark__tlWNC'
                    }
                  >
                    <div
                      className={
                        theme.palette.mode === 'light'
                          ? 'borderedIcon_iconBox__GsTQ2 undefined borderedIcon_size32__WBuG4'
                          : 'borderedIcon_iconBoxDark__J5ckL undefined borderedIcon_size32__WBuG4'
                      }
                    >
                      <span>
                        <img
                          alt='/icons/socialIcons/reddit-footer.svg'
                          draggable='false'
                          name='reddit'
                          color='#FFFFFF'
                          aria-label='reddit'
                          src='https://ik.imagekit.io/2zlgs27bjo/public/icons/socialIcons/reddit-footer.svg?tr=w-777,q-100'
                          decoding='async'
                          data-nimg='fill'
                          sizes='100vw'
                          srcSet='https://ik.imagekit.io/2zlgs27bjo/public/icons/socialIcons/reddit-footer.svg?tr=w-777,q-100 640w, https://ik.imagekit.io/2zlgs27bjo/public/icons/socialIcons/reddit-footer.svg?tr=w-777,q-100 750w, https://ik.imagekit.io/2zlgs27bjo/public/icons/socialIcons/reddit-footer.svg?tr=w-777,q-100 828w, https://ik.imagekit.io/2zlgs27bjo/public/icons/socialIcons/reddit-footer.svg?tr=w-777,q-100 1080w, https://ik.imagekit.io/2zlgs27bjo/public/icons/socialIcons/reddit-footer.svg?tr=w-777,q-100 1200w, https://ik.imagekit.io/2zlgs27bjo/public/icons/socialIcons/reddit-footer.svg?tr=w-777,q-100 1920w, https://ik.imagekit.io/2zlgs27bjo/public/icons/socialIcons/reddit-footer.svg?tr=w-777,q-100 2048w, https://ik.imagekit.io/2zlgs27bjo/public/icons/socialIcons/reddit-footer.svg?tr=w-777,q-100 3840w'
                        />
                      </span>
                    </div>
                  </a>
                </div>
              </div>
            </div>
            <div className='footer_mobileSocialIcons__rXpGK'>
              <a
                href='https://twitter.com/solicydotnet'
                target='_blank'
                rel='noreferrer noreferrer nofollow'
              >
                <div
                  className={
                    theme.palette.mode === 'light'
                      ? 'borderedIcon_iconBox__GsTQ2 footer_socialNames__ZsKJM borderedIcon_size32__WBuG4'
                      : 'borderedIcon_iconBoxDark__J5ckL footer_socialNames__ZsKJM borderedIcon_size32__WBuG4'
                  }
                >
                  <span>
                    <img
                      alt='twiter'
                      draggable='false'
                      color='#FFFFFF'
                      src='https://ik.imagekit.io/2zlgs27bjo/public/icons/socialIcons/twiter-footer.svg?tr=w-763,q-100'
                      decoding='async'
                      data-nimg='fill'
                      sizes='100vw'
                      srcSet='https://ik.imagekit.io/2zlgs27bjo/public/icons/socialIcons/twiter-footer.svg?tr=w-763,q-100 640w, https://ik.imagekit.io/2zlgs27bjo/public/icons/socialIcons/twiter-footer.svg?tr=w-763,q-100 750w, https://ik.imagekit.io/2zlgs27bjo/public/icons/socialIcons/twiter-footer.svg?tr=w-763,q-100 828w, https://ik.imagekit.io/2zlgs27bjo/public/icons/socialIcons/twiter-footer.svg?tr=w-763,q-100 1080w, https://ik.imagekit.io/2zlgs27bjo/public/icons/socialIcons/twiter-footer.svg?tr=w-763,q-100 1200w, https://ik.imagekit.io/2zlgs27bjo/public/icons/socialIcons/twiter-footer.svg?tr=w-763,q-100 1920w, https://ik.imagekit.io/2zlgs27bjo/public/icons/socialIcons/twiter-footer.svg?tr=w-763,q-100 2048w, https://ik.imagekit.io/2zlgs27bjo/public/icons/socialIcons/twiter-footer.svg?tr=w-763,q-100 3840w'
                    />
                  </span>
                </div>{' '}
              </a>
              <a
                href='https://www.linkedin.com/company/solicy/'
                target='_blank'
                rel='noreferrer noreferrer nofollow'
              >
                <div
                  className={
                    theme.palette.mode === 'light'
                      ? 'borderedIcon_iconBox__GsTQ2 footer_socialNames__ZsKJM borderedIcon_size32__WBuG4'
                      : 'borderedIcon_iconBoxDark__J5ckL footer_socialNames__ZsKJM borderedIcon_size32__WBuG4'
                  }
                >
                  <span>
                    <img
                      alt='linkedin'
                      draggable='false'
                      color='#FFFFFF'
                      src='https://ik.imagekit.io/2zlgs27bjo/public/icons/socialIcons/linkedin-footer.svg?tr=w-763,q-100'
                      decoding='async'
                      data-nimg='fill'
                      sizes='100vw'
                      srcSet='https://ik.imagekit.io/2zlgs27bjo/public/icons/socialIcons/linkedin-footer.svg?tr=w-763,q-100 640w, https://ik.imagekit.io/2zlgs27bjo/public/icons/socialIcons/linkedin-footer.svg?tr=w-763,q-100 750w, https://ik.imagekit.io/2zlgs27bjo/public/icons/socialIcons/linkedin-footer.svg?tr=w-763,q-100 828w, https://ik.imagekit.io/2zlgs27bjo/public/icons/socialIcons/linkedin-footer.svg?tr=w-763,q-100 1080w, https://ik.imagekit.io/2zlgs27bjo/public/icons/socialIcons/linkedin-footer.svg?tr=w-763,q-100 1200w, https://ik.imagekit.io/2zlgs27bjo/public/icons/socialIcons/linkedin-footer.svg?tr=w-763,q-100 1920w, https://ik.imagekit.io/2zlgs27bjo/public/icons/socialIcons/linkedin-footer.svg?tr=w-763,q-100 2048w, https://ik.imagekit.io/2zlgs27bjo/public/icons/socialIcons/linkedin-footer.svg?tr=w-763,q-100 3840w'
                    />
                  </span>
                </div>{' '}
              </a>
              <a
                href='https://discord.gg/E6MyNMrMCu'
                target='_blank'
                rel='noreferrer noreferrer nofollow'
              >
                <div
                  className={
                    theme.palette.mode === 'light'
                      ? 'borderedIcon_iconBox__GsTQ2 footer_socialNames__ZsKJM borderedIcon_size32__WBuG4'
                      : 'borderedIcon_iconBoxDark__J5ckL footer_socialNames__ZsKJM borderedIcon_size32__WBuG4'
                  }
                >
                  <span>
                    <img
                      alt='discord'
                      draggable='false'
                      color='#FFFFFF'
                      src='https://ik.imagekit.io/2zlgs27bjo/public/icons/socialIcons/discord-footer.svg?tr=w-763,q-100'
                      decoding='async'
                      data-nimg='fill'
                      sizes='100vw'
                      srcSet='https://ik.imagekit.io/2zlgs27bjo/public/icons/socialIcons/discord-footer.svg?tr=w-763,q-100 640w, https://ik.imagekit.io/2zlgs27bjo/public/icons/socialIcons/discord-footer.svg?tr=w-763,q-100 750w, https://ik.imagekit.io/2zlgs27bjo/public/icons/socialIcons/discord-footer.svg?tr=w-763,q-100 828w, https://ik.imagekit.io/2zlgs27bjo/public/icons/socialIcons/discord-footer.svg?tr=w-763,q-100 1080w, https://ik.imagekit.io/2zlgs27bjo/public/icons/socialIcons/discord-footer.svg?tr=w-763,q-100 1200w, https://ik.imagekit.io/2zlgs27bjo/public/icons/socialIcons/discord-footer.svg?tr=w-763,q-100 1920w, https://ik.imagekit.io/2zlgs27bjo/public/icons/socialIcons/discord-footer.svg?tr=w-763,q-100 2048w, https://ik.imagekit.io/2zlgs27bjo/public/icons/socialIcons/discord-footer.svg?tr=w-763,q-100 3840w'
                    />
                  </span>
                </div>{' '}
              </a>
              <a
                href='https://github.com/Solicy-App'
                target='_blank'
                rel='noreferrer noreferrer nofollow'
              >
                <div
                  className={
                    theme.palette.mode === 'light'
                      ? 'borderedIcon_iconBox__GsTQ2 footer_socialNames__ZsKJM borderedIcon_size32__WBuG4'
                      : 'borderedIcon_iconBoxDark__J5ckL footer_socialNames__ZsKJM borderedIcon_size32__WBuG4'
                  }
                >
                  <span>
                    <img
                      alt='git'
                      draggable='false'
                      color='#FFFFFF'
                      src='https://ik.imagekit.io/2zlgs27bjo/public/icons/socialIcons/git-footer.svg?tr=w-763,q-100'
                      decoding='async'
                      data-nimg='fill'
                      sizes='100vw'
                      srcSet='https://ik.imagekit.io/2zlgs27bjo/public/icons/socialIcons/git-footer.svg?tr=w-763,q-100 640w, https://ik.imagekit.io/2zlgs27bjo/public/icons/socialIcons/git-footer.svg?tr=w-763,q-100 750w, https://ik.imagekit.io/2zlgs27bjo/public/icons/socialIcons/git-footer.svg?tr=w-763,q-100 828w, https://ik.imagekit.io/2zlgs27bjo/public/icons/socialIcons/git-footer.svg?tr=w-763,q-100 1080w, https://ik.imagekit.io/2zlgs27bjo/public/icons/socialIcons/git-footer.svg?tr=w-763,q-100 1200w, https://ik.imagekit.io/2zlgs27bjo/public/icons/socialIcons/git-footer.svg?tr=w-763,q-100 1920w, https://ik.imagekit.io/2zlgs27bjo/public/icons/socialIcons/git-footer.svg?tr=w-763,q-100 2048w, https://ik.imagekit.io/2zlgs27bjo/public/icons/socialIcons/git-footer.svg?tr=w-763,q-100 3840w'
                    />
                  </span>
                </div>{' '}
              </a>
              <a
                href='https://t.me/Solicy_net'
                target='_blank'
                rel='noreferrer noreferrer nofollow'
              >
                <div
                  className={
                    theme.palette.mode === 'light'
                      ? 'borderedIcon_iconBox__GsTQ2 footer_socialNames__ZsKJM borderedIcon_size32__WBuG4'
                      : 'borderedIcon_iconBoxDark__J5ckL footer_socialNames__ZsKJM borderedIcon_size32__WBuG4'
                  }
                >
                  <span>
                    <img
                      alt='telegram'
                      draggable='false'
                      color='#FFFFFF'
                      src='https://ik.imagekit.io/2zlgs27bjo/public/icons/socialIcons/telegram-footer.svg?tr=w-763,q-100'
                      decoding='async'
                      data-nimg='fill'
                      sizes='100vw'
                      srcSet='https://ik.imagekit.io/2zlgs27bjo/public/icons/socialIcons/telegram-footer.svg?tr=w-763,q-100 640w, https://ik.imagekit.io/2zlgs27bjo/public/icons/socialIcons/telegram-footer.svg?tr=w-763,q-100 750w, https://ik.imagekit.io/2zlgs27bjo/public/icons/socialIcons/telegram-footer.svg?tr=w-763,q-100 828w, https://ik.imagekit.io/2zlgs27bjo/public/icons/socialIcons/telegram-footer.svg?tr=w-763,q-100 1080w, https://ik.imagekit.io/2zlgs27bjo/public/icons/socialIcons/telegram-footer.svg?tr=w-763,q-100 1200w, https://ik.imagekit.io/2zlgs27bjo/public/icons/socialIcons/telegram-footer.svg?tr=w-763,q-100 1920w, https://ik.imagekit.io/2zlgs27bjo/public/icons/socialIcons/telegram-footer.svg?tr=w-763,q-100 2048w, https://ik.imagekit.io/2zlgs27bjo/public/icons/socialIcons/telegram-footer.svg?tr=w-763,q-100 3840w'
                    />
                  </span>
                </div>{' '}
              </a>
              <a
                href='https://instagram.com/solicydotnet?utm_medium=copy_link'
                target='_blank'
                rel='noreferrer noreferrer nofollow'
              >
                <div
                  className={
                    theme.palette.mode === 'light'
                      ? 'borderedIcon_iconBox__GsTQ2 footer_socialNames__ZsKJM borderedIcon_size32__WBuG4'
                      : 'borderedIcon_iconBoxDark__J5ckL footer_socialNames__ZsKJM borderedIcon_size32__WBuG4'
                  }
                >
                  <span>
                    <img
                      alt='instagram'
                      draggable='false'
                      color='#FFFFFF'
                      src='https://ik.imagekit.io/2zlgs27bjo/public/icons/socialIcons/instagram-footer.svg?tr=w-763,q-100'
                      decoding='async'
                      data-nimg='fill'
                      sizes='100vw'
                      srcSet='https://ik.imagekit.io/2zlgs27bjo/public/icons/socialIcons/instagram-footer.svg?tr=w-763,q-100 640w, https://ik.imagekit.io/2zlgs27bjo/public/icons/socialIcons/instagram-footer.svg?tr=w-763,q-100 750w, https://ik.imagekit.io/2zlgs27bjo/public/icons/socialIcons/instagram-footer.svg?tr=w-763,q-100 828w, https://ik.imagekit.io/2zlgs27bjo/public/icons/socialIcons/instagram-footer.svg?tr=w-763,q-100 1080w, https://ik.imagekit.io/2zlgs27bjo/public/icons/socialIcons/instagram-footer.svg?tr=w-763,q-100 1200w, https://ik.imagekit.io/2zlgs27bjo/public/icons/socialIcons/instagram-footer.svg?tr=w-763,q-100 1920w, https://ik.imagekit.io/2zlgs27bjo/public/icons/socialIcons/instagram-footer.svg?tr=w-763,q-100 2048w, https://ik.imagekit.io/2zlgs27bjo/public/icons/socialIcons/instagram-footer.svg?tr=w-763,q-100 3840w'
                    />
                  </span>
                </div>{' '}
              </a>
              <a
                href='https://www.youtube.com/channel/UC6Zr3CgVMOu1nmp1YEsafHA'
                target='_blank'
                rel='noreferrer noreferrer nofollow'
              >
                <div
                  className={
                    theme.palette.mode === 'light'
                      ? 'borderedIcon_iconBox__GsTQ2 footer_socialNames__ZsKJM borderedIcon_size32__WBuG4'
                      : 'borderedIcon_iconBoxDark__J5ckL footer_socialNames__ZsKJM borderedIcon_size32__WBuG4'
                  }
                >
                  <span>
                    <img
                      alt='tube'
                      draggable='false'
                      color='#FFFFFF'
                      src='https://ik.imagekit.io/2zlgs27bjo/public/icons/socialIcons/you-tube-footer.svg?tr=w-763,q-100'
                      decoding='async'
                      data-nimg='fill'
                      sizes='100vw'
                      srcSet='https://ik.imagekit.io/2zlgs27bjo/public/icons/socialIcons/you-tube-footer.svg?tr=w-763,q-100 640w, https://ik.imagekit.io/2zlgs27bjo/public/icons/socialIcons/you-tube-footer.svg?tr=w-763,q-100 750w, https://ik.imagekit.io/2zlgs27bjo/public/icons/socialIcons/you-tube-footer.svg?tr=w-763,q-100 828w, https://ik.imagekit.io/2zlgs27bjo/public/icons/socialIcons/you-tube-footer.svg?tr=w-763,q-100 1080w, https://ik.imagekit.io/2zlgs27bjo/public/icons/socialIcons/you-tube-footer.svg?tr=w-763,q-100 1200w, https://ik.imagekit.io/2zlgs27bjo/public/icons/socialIcons/you-tube-footer.svg?tr=w-763,q-100 1920w, https://ik.imagekit.io/2zlgs27bjo/public/icons/socialIcons/you-tube-footer.svg?tr=w-763,q-100 2048w, https://ik.imagekit.io/2zlgs27bjo/public/icons/socialIcons/you-tube-footer.svg?tr=w-763,q-100 3840w'
                    />
                  </span>
                </div>{' '}
              </a>
              <a
                href='https://www.tiktok.com/@solicydotnet'
                target='_blank'
                rel='noreferrer noreferrer nofollow'
              >
                <div
                  className={
                    theme.palette.mode === 'light'
                      ? 'borderedIcon_iconBox__GsTQ2 footer_socialNames__ZsKJM borderedIcon_size32__WBuG4'
                      : 'borderedIcon_iconBoxDark__J5ckL footer_socialNames__ZsKJM borderedIcon_size32__WBuG4'
                  }
                >
                  <span>
                    <img
                      alt='tiktok'
                      draggable='false'
                      color='#FFFFFF'
                      src='https://ik.imagekit.io/2zlgs27bjo/public/icons/socialIcons/tiktok-footer.svg?tr=w-763,q-100'
                      decoding='async'
                      data-nimg='fill'
                      sizes='100vw'
                      srcSet='https://ik.imagekit.io/2zlgs27bjo/public/icons/socialIcons/tiktok-footer.svg?tr=w-763,q-100 640w, https://ik.imagekit.io/2zlgs27bjo/public/icons/socialIcons/tiktok-footer.svg?tr=w-763,q-100 750w, https://ik.imagekit.io/2zlgs27bjo/public/icons/socialIcons/tiktok-footer.svg?tr=w-763,q-100 828w, https://ik.imagekit.io/2zlgs27bjo/public/icons/socialIcons/tiktok-footer.svg?tr=w-763,q-100 1080w, https://ik.imagekit.io/2zlgs27bjo/public/icons/socialIcons/tiktok-footer.svg?tr=w-763,q-100 1200w, https://ik.imagekit.io/2zlgs27bjo/public/icons/socialIcons/tiktok-footer.svg?tr=w-763,q-100 1920w, https://ik.imagekit.io/2zlgs27bjo/public/icons/socialIcons/tiktok-footer.svg?tr=w-763,q-100 2048w, https://ik.imagekit.io/2zlgs27bjo/public/icons/socialIcons/tiktok-footer.svg?tr=w-763,q-100 3840w'
                    />
                  </span>
                </div>{' '}
              </a>
              <a
                href='https://www.facebook.com/Solicydotnet/'
                target='_blank'
                rel='noreferrer noreferrer nofollow'
              >
                <div
                  className={
                    theme.palette.mode === 'light'
                      ? 'borderedIcon_iconBox__GsTQ2 footer_socialNames__ZsKJM borderedIcon_size32__WBuG4'
                      : 'borderedIcon_iconBoxDark__J5ckL footer_socialNames__ZsKJM borderedIcon_size32__WBuG4'
                  }
                >
                  <span>
                    <img
                      alt='facebook'
                      draggable='false'
                      color='#FFFFFF'
                      src='https://ik.imagekit.io/2zlgs27bjo/public/icons/socialIcons/facebook-footer.svg?tr=w-763,q-100'
                      decoding='async'
                      data-nimg='fill'
                      sizes='100vw'
                      srcSet='https://ik.imagekit.io/2zlgs27bjo/public/icons/socialIcons/facebook-footer.svg?tr=w-763,q-100 640w, https://ik.imagekit.io/2zlgs27bjo/public/icons/socialIcons/facebook-footer.svg?tr=w-763,q-100 750w, https://ik.imagekit.io/2zlgs27bjo/public/icons/socialIcons/facebook-footer.svg?tr=w-763,q-100 828w, https://ik.imagekit.io/2zlgs27bjo/public/icons/socialIcons/facebook-footer.svg?tr=w-763,q-100 1080w, https://ik.imagekit.io/2zlgs27bjo/public/icons/socialIcons/facebook-footer.svg?tr=w-763,q-100 1200w, https://ik.imagekit.io/2zlgs27bjo/public/icons/socialIcons/facebook-footer.svg?tr=w-763,q-100 1920w, https://ik.imagekit.io/2zlgs27bjo/public/icons/socialIcons/facebook-footer.svg?tr=w-763,q-100 2048w, https://ik.imagekit.io/2zlgs27bjo/public/icons/socialIcons/facebook-footer.svg?tr=w-763,q-100 3840w'
                    />
                  </span>
                </div>{' '}
              </a>
              <a
                href='https://www.reddit.com/user/Solicydot_net/'
                target='_blank'
                rel='noreferrer noreferrer nofollow'
              >
                <div
                  className={
                    theme.palette.mode === 'light'
                      ? 'borderedIcon_iconBox__GsTQ2 footer_socialNames__ZsKJM borderedIcon_size32__WBuG4'
                      : 'borderedIcon_iconBoxDark__J5ckL footer_socialNames__ZsKJM borderedIcon_size32__WBuG4'
                  }
                >
                  <span>
                    <img
                      alt='reddit'
                      draggable='false'
                      color='#FFFFFF'
                      src='https://ik.imagekit.io/2zlgs27bjo/public/icons/socialIcons/reddit-footer.svg?tr=w-763,q-100'
                      decoding='async'
                      data-nimg='fill'
                      sizes='100vw'
                      srcSet='https://ik.imagekit.io/2zlgs27bjo/public/icons/socialIcons/reddit-footer.svg?tr=w-763,q-100 640w, https://ik.imagekit.io/2zlgs27bjo/public/icons/socialIcons/reddit-footer.svg?tr=w-763,q-100 750w, https://ik.imagekit.io/2zlgs27bjo/public/icons/socialIcons/reddit-footer.svg?tr=w-763,q-100 828w, https://ik.imagekit.io/2zlgs27bjo/public/icons/socialIcons/reddit-footer.svg?tr=w-763,q-100 1080w, https://ik.imagekit.io/2zlgs27bjo/public/icons/socialIcons/reddit-footer.svg?tr=w-763,q-100 1200w, https://ik.imagekit.io/2zlgs27bjo/public/icons/socialIcons/reddit-footer.svg?tr=w-763,q-100 1920w, https://ik.imagekit.io/2zlgs27bjo/public/icons/socialIcons/reddit-footer.svg?tr=w-763,q-100 2048w, https://ik.imagekit.io/2zlgs27bjo/public/icons/socialIcons/reddit-footer.svg?tr=w-763,q-100 3840w'
                    />
                  </span>
                </div>{' '}
              </a>
            </div>
          </div>
        </div>
        <div className='footer_whatWoDoContainer__p2bea'>
          <h3 className='footer_infoTitle__xwUjG'>What We Do</h3>
          <div className='footer_whatWoDo__W4YYG'>
            <div className='footer_middleBox__ufz2u'>
              <div>
                <div className='link_linkBox__vxiZm'>
                  <HashLink to='/#ourServices'>Our Services</HashLink>
                </div>
              </div>
              <div>
                <div className='link_linkBox__vxiZm'>
                  <Link to='/blockchain'>Blockchain</Link>
                </div>
              </div>
              <div>
                <div className='link_linkBox__vxiZm'>
                  <Link to='/software'>Software</Link>
                </div>
              </div>
            </div>
            <div className='footer_middleBox__ufz2u'>
              <div>
                <div className='link_linkBox__vxiZm'>
                  <HashLink to='/#techStack'>Tech Stack</HashLink>
                </div>
              </div>
              <div>
                <div className='link_linkBox__vxiZm'>
                  <Link to='/portfolio'>Portfolio</Link>
                </div>
              </div>
              <div>
                <div className='link_linkBox__vxiZm'>
                  <Link to='/career'>Careers</Link>
                </div>
              </div>
            </div>
            <div className='footer_middleBox__ufz2u'>
              <div className='link_linkBox__vxiZm'>
                <Link to='/about'>About Us</Link>
              </div>
              <div className='link_linkBox__vxiZm'>
                <Link to='/termsAndConditions'>Terms and Conditions</Link>
              </div>
              <div className='link_linkBox__vxiZm'>
                <Link to='/privacyPolicy'> Privacy Policy</Link>
              </div>
            </div>
          </div>
        </div>
        <div className='footer_contactInfoContainer__W5Czk'>
          <h3 className='footer_infoTitleContact__d12II'>Contact Us</h3>
          <div className='footer_contactInfo__xBCP1'>
            <div
              className={
                theme.palette.mode === 'light'
                  ? 'footer_footerInfoText__LURKR footer_addressForSend__30qq6 false'
                  : 'footer_footerInfoText__LURKR footer_addressForSend__30qq6 footer_addressForSendDark___pJ7K'
              }
            >
              {/* <p className="footer_addressForSend__30qq6 false"> */}
              <a
                href='https://www.google.com/maps/place/Solicy/@40.1584813,44.5066998,15z/data=!4m5!3m4!1s0x0:0xe9e555bb709dae86!8m2!3d40.1584813!4d44.5066998'
                className='footer_titleDark__lZkB6'
                target='_blank'
                rel='noreferrer noreferrer nofollow'
              >
                <div
                  className={
                    theme.palette.mode === 'light'
                      ? 'borderedIcon_iconBox__GsTQ2 undefined borderedIcon_size24__4J1JB'
                      : 'borderedIcon_iconBoxDark__J5ckL undefined borderedIcon_size24__4J1JB'
                  }
                >
                  <span>
                    <img
                      draggable='false'
                      color='#FFFFFF'
                      src='https://ik.imagekit.io/2zlgs27bjo/public/icons/navigation-footer.svg?tr=w-777,q-100'
                      decoding='async'
                      data-nimg='fill'
                      sizes='100vw'
                      srcSet='https://ik.imagekit.io/2zlgs27bjo/public/icons/navigation-footer.svg?tr=w-777,q-100 640w, https://ik.imagekit.io/2zlgs27bjo/public/icons/navigation-footer.svg?tr=w-777,q-100 750w, https://ik.imagekit.io/2zlgs27bjo/public/icons/navigation-footer.svg?tr=w-777,q-100 828w, https://ik.imagekit.io/2zlgs27bjo/public/icons/navigation-footer.svg?tr=w-777,q-100 1080w, https://ik.imagekit.io/2zlgs27bjo/public/icons/navigation-footer.svg?tr=w-777,q-100 1200w, https://ik.imagekit.io/2zlgs27bjo/public/icons/navigation-footer.svg?tr=w-777,q-100 1920w, https://ik.imagekit.io/2zlgs27bjo/public/icons/navigation-footer.svg?tr=w-777,q-100 2048w, https://ik.imagekit.io/2zlgs27bjo/public/icons/navigation-footer.svg?tr=w-777,q-100 3840w'
                      alt=''
                    />
                    <noscript></noscript>
                  </span>
                </div>
                30/1 Sevan St.,Yerevan
              </a>
              {/* </p> */}
            </div>
            <div
              className={
                theme.palette.mode === 'light'
                  ? 'footer_footerInfoText__LURKR footer_addressForSend__30qq6 false'
                  : 'footer_footerInfoText__LURKR footer_addressForSend__30qq6 footer_addressForSendDark___pJ7K'
              }
            >
              {/* <p className="footer_addressForSend__30qq6 false"> */}
              <a
                href='mailto:contact@solicy.net'
                className='footer_titleDark__lZkB6'
                target='_self'
                rel='noreferrer noreferrer nofollow'
              >
                <div
                  className={
                    theme.palette.mode === 'light'
                      ? 'borderedIcon_iconBox__GsTQ2 undefined borderedIcon_size24__4J1JB'
                      : 'borderedIcon_iconBoxDark__J5ckL undefined borderedIcon_size24__4J1JB'
                  }
                >
                  <span>
                    <img
                      draggable='false'
                      color='#FFFFFF'
                      src='https://ik.imagekit.io/2zlgs27bjo/public/icons/email-footer.svg?tr=w-777,q-100'
                      decoding='async'
                      data-nimg='fill'
                      sizes='100vw'
                      srcSet='https://ik.imagekit.io/2zlgs27bjo/public/icons/email-footer.svg?tr=w-777,q-100 640w, https://ik.imagekit.io/2zlgs27bjo/public/icons/email-footer.svg?tr=w-777,q-100 750w, https://ik.imagekit.io/2zlgs27bjo/public/icons/email-footer.svg?tr=w-777,q-100 828w, https://ik.imagekit.io/2zlgs27bjo/public/icons/email-footer.svg?tr=w-777,q-100 1080w, https://ik.imagekit.io/2zlgs27bjo/public/icons/email-footer.svg?tr=w-777,q-100 1200w, https://ik.imagekit.io/2zlgs27bjo/public/icons/email-footer.svg?tr=w-777,q-100 1920w, https://ik.imagekit.io/2zlgs27bjo/public/icons/email-footer.svg?tr=w-777,q-100 2048w, https://ik.imagekit.io/2zlgs27bjo/public/icons/email-footer.svg?tr=w-777,q-100 3840w'
                      alt=''
                    />
                    <noscript></noscript>
                  </span>
                </div>
                contact@solicy.net
              </a>
              {/* </p> */}
            </div>
          </div>
        </div>
        <div
          className={
            theme.palette.mode === 'light'
              ? 'footer_arrowUp__zi1IU false'
              : 'footer_arrowUp__zi1IU footer_arrowUpDark__AvnG5'
          }
          role='button'
          tabIndex='0'
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        >
          <span>
            <span>
              <img
                alt=''
                aria-hidden='true'
                src='data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%2718%27%20height=%2710%27/%3e'
              />
            </span>
            <img
              alt='arrow-up.svg'
              draggable='false'
              src='https://ik.imagekit.io/2zlgs27bjo/public/icons/arrow-up.svg?tr=w-18,q-100'
              decoding='async'
              data-nimg='intrinsic'
              srcSet='https://ik.imagekit.io/2zlgs27bjo/public/icons/arrow-up.svg?tr=w-18,q-100 1x, https://ik.imagekit.io/2zlgs27bjo/public/icons/arrow-up.svg?tr=w-18,q-100 2x'
            />
          </span>{' '}
        </div>
      </div>
      <p
        className={
          theme.palette.mode === 'light'
            ? 'footer_footerText__BecLk false'
            : 'footer_footerText__BecLk footer_footerTextDark__4ho0A'
        }
      >
        © 2024 Solicy LLC. All rights reserved.
      </p>
    </div>
  )
}

export default AppFooterBar

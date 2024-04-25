import { useTheme } from '@mui/system'

import {
  ImageDivSpanStyle1,
  ImageDivSpanSpanStyle1,
  ImageDivSpanSpanImgStyle2,
  ImageDivSpanImgStyle3
} from '../BaseCss'

function JoinCommunity (props) {
  const theme = useTheme()

  return (
    <div
      className={
        props.address === 'home'
          ? 'joinCommunity_joinCommunitySection__nnMdx'
          : 'joinCommunity_joinCommunitySection__nnMdx joinCommunity_joinCommunityContact__l6mIF'
      }
    >
      <div className='title_titleContainer__SvQXY'>
        <div
          className={
            theme.palette.mode === 'light'
              ? 'title_title__mdTgq'
              : 'title_title__mdTgq title_titleDark__uzlqO'
          }
        >
          <span className='title_title__mdTgq'>Join community</span>
        </div>
      </div>
      <div className='joinCommunity_joinCommunityContent__VG2W9'>
        <div className='joinCommunity_mobileText__Jt2lv'>
          <div
            className='subTitleText_description__WoiQ_ joinCommunity_descriptionCenter__sWdar'
            style={{ maxWidth: 'none' }}
          >
            Our social networks are for everyone who wants to be a part of the
            future, so don't hesitate about joining us!
          </div>
        </div>
        <div className='joinCommunity_leftSide__lYEmE'>
          <span style={ImageDivSpanStyle1}>
            <span style={ImageDivSpanSpanStyle1}>
              <img
                alt=''
                aria-hidden='true'
                src='data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%27506%27%20height=%27548%27/%3e'
                style={ImageDivSpanSpanImgStyle2}
                data-xblocker='passed'
              />
            </span>
            <img
              alt='illustration.svg'
              draggable='false'
              srcSet='https://ik.imagekit.io/2zlgs27bjo/public/icons/illustration.svg?tr=w-506,q-100 1x, https://ik.imagekit.io/2zlgs27bjo/public/icons/illustration.svg?tr=w-506,q-100 2x'
              src='https://ik.imagekit.io/2zlgs27bjo/public/icons/illustration.svg?tr=w-506,q-100'
              decoding='async'
              data-nimg='intrinsic'
              style={ImageDivSpanImgStyle3}
              data-xblocker='passed'
            />
          </span>
        </div>
        <div className='joinCommunity_rightSide__PXVEU'>
          <div className='joinCommunity_desktopText__ShUXi'>
            <div
              className='subTitleText_description__WoiQ_'
              style={{ maxWidth: 'none' }}
            >
              Our social networks are for everyone who wants to be a part of the
              future, so don't hesitate about joining us!
            </div>
          </div>
          <div
            className={
              theme.palette.mode === 'light'
                ? 'joinCommunity_joinCommunity__gsPKy'
                : 'joinCommunity_joinCommunity__gsPKy joinCommunity_dark__WlH5p'
            }
          >
            <a
              href='https://twitter.com/solicydotnet'
              target='_blank'
              rel='noopener noreferrer nofollow'
            >
              <div
                className={
                  theme.palette.mode === 'light'
                    ? 'joinCommunity_socialCard__s1y67 joinCommunity_Twitter__sAlgj'
                    : 'joinCommunity_socialCard__s1y67 joinCommunity_TwitterDark__DU9xT'
                }
              >
                <div className='joinCommunity_cardLeftSide__aDj_o'>
                  <div
                    className={
                      theme.palette.mode === 'light'
                        ? 'joinCommunity_socialIcon__6q6A8 joinCommunity_TwitterDark__DU9xT joinCommunity_Twitter-light__UKHQw'
                        : 'joinCommunity_socialIcon__6q6A8 joinCommunity_TwitterDark__DU9xT joinCommunity_Twitter-dark__Vdf93'
                    }
                  >
                    {' '}
                  </div>
                  <span className='joinCommunity_socialTitle__Zx4OW'>
                    Twitter
                  </span>
                </div>
                <div
                  className={
                    theme.palette.mode === 'light'
                      ? 'joinCommunity_arrow__BcpWi joinCommunity_social-light__i1tRo'
                      : 'joinCommunity_arrow__BcpWi joinCommunity_social-dark__H_iP4'
                  }
                >
                  {' '}
                </div>
              </div>
            </a>
            <a
              href='https://www.linkedin.com/company/solicy/'
              target='_blank'
              rel='noopener noreferrer nofollow'
            >
              <div
                className={
                  theme.palette.mode === 'light'
                    ? 'joinCommunity_socialCard__s1y67 joinCommunity_Linkedin__L_XSH'
                    : 'joinCommunity_socialCard__s1y67 joinCommunity_LinkedinDark__rNRQK'
                }
              >
                <div className='joinCommunity_cardLeftSide__aDj_o'>
                  <div
                    className={
                      theme.palette.mode === 'light'
                        ? 'joinCommunity_socialIcon__6q6A8 joinCommunity_LinkedinDark__rNRQK joinCommunity_Linkedin-light__frV30'
                        : 'joinCommunity_socialIcon__6q6A8 joinCommunity_LinkedinDark__rNRQK joinCommunity_Linkedin-dark__Icd0j'
                    }
                  >
                    {' '}
                  </div>
                  <span className='joinCommunity_socialTitle__Zx4OW'>
                    Linkedin
                  </span>
                </div>
                <div
                  className={
                    theme.palette.mode === 'light'
                      ? 'joinCommunity_arrow__BcpWi joinCommunity_social-light__i1tRo'
                      : 'joinCommunity_arrow__BcpWi joinCommunity_social-dark__H_iP4'
                  }
                >
                  {' '}
                </div>
              </div>
            </a>
            <a
              href='https://discord.gg/E6MyNMrMCu'
              target='_blank'
              rel='noopener noreferrer nofollow'
            >
              <div
                className={
                  theme.palette.mode === 'light'
                    ? 'joinCommunity_socialCard__s1y67 joinCommunity_Discord__Ew9rl'
                    : 'joinCommunity_socialCard__s1y67 joinCommunity_DiscordDark__GZglx'
                }
              >
                <div className='joinCommunity_cardLeftSide__aDj_o'>
                  <div
                    className={
                      theme.palette.mode === 'light'
                        ? 'joinCommunity_socialIcon__6q6A8 joinCommunity_DiscordDark__GZglx joinCommunity_Discord-light__sgZPQ'
                        : 'joinCommunity_socialIcon__6q6A8 joinCommunity_DiscordDark__GZglx joinCommunity_Discord-dark__vX9Pl'
                    }
                  >
                    {' '}
                  </div>
                  <span className='joinCommunity_socialTitle__Zx4OW'>
                    Discord
                  </span>
                </div>
                <div
                  className={
                    theme.palette.mode === 'light'
                      ? 'joinCommunity_arrow__BcpWi joinCommunity_social-light__i1tRo'
                      : 'joinCommunity_arrow__BcpWi joinCommunity_social-dark__H_iP4'
                  }
                >
                  {' '}
                </div>
              </div>
            </a>
            <a
              href='https://github.com/Solicy-App'
              target='_blank'
              rel='noopener noreferrer nofollow'
            >
              <div
                className={
                  theme.palette.mode === 'light'
                    ? 'joinCommunity_socialCard__s1y67 joinCommunity_Github__xQc7J'
                    : 'joinCommunity_socialCard__s1y67 joinCommunity_GithubDark__g66x4'
                }
              >
                <div className='joinCommunity_cardLeftSide__aDj_o'>
                  <div
                    className={
                      theme.palette.mode === 'light'
                        ? 'joinCommunity_socialIcon__6q6A8 joinCommunity_GithubDark__g66x4 joinCommunity_Github-light__8WNRX'
                        : 'joinCommunity_socialIcon__6q6A8 joinCommunity_GithubDark__g66x4 joinCommunity_Github-dark__QZA19'
                    }
                  >
                    {' '}
                  </div>
                  <span className='joinCommunity_socialTitle__Zx4OW'>
                    Github
                  </span>
                </div>
                <div
                  className={
                    theme.palette.mode === 'light'
                      ? 'joinCommunity_arrow__BcpWi joinCommunity_social-light__i1tRo'
                      : 'joinCommunity_arrow__BcpWi joinCommunity_social-dark__H_iP4'
                  }
                >
                  {' '}
                </div>
              </div>
            </a>
            <a
              href='https://instagram.com/solicydotnet?utm_medium=copy_link'
              target='_blank'
              rel='noopener noreferrer nofollow'
            >
              <div
                className={
                  theme.palette.mode === 'light'
                    ? 'joinCommunity_socialCard__s1y67 joinCommunity_Instagram__EQCQo'
                    : 'joinCommunity_socialCard__s1y67 joinCommunity_InstagramDark__htKSb'
                }
              >
                <div className='joinCommunity_cardLeftSide__aDj_o'>
                  <div
                    className={
                      theme.palette.mode === 'light'
                        ? 'joinCommunity_socialIcon__6q6A8 joinCommunity_InstagramDark__htKSb joinCommunity_Instagram-light__7FJ7q'
                        : 'joinCommunity_socialIcon__6q6A8 joinCommunity_InstagramDark__htKSb joinCommunity_Instagram-dark__XMOjt'
                    }
                  >
                    {' '}
                  </div>
                  <span className='joinCommunity_socialTitle__Zx4OW'>
                    Instagram
                  </span>
                </div>
                <div
                  className={
                    theme.palette.mode === 'light'
                      ? 'joinCommunity_arrow__BcpWi joinCommunity_social-light__i1tRo'
                      : 'joinCommunity_arrow__BcpWi joinCommunity_social-dark__H_iP4'
                  }
                >
                  {' '}
                </div>
              </div>
            </a>
            <a
              href='https://www.youtube.com/channel/UC6Zr3CgVMOu1nmp1YEsafHA'
              target='_blank'
              rel='noopener noreferrer nofollow'
            >
              <div
                className={
                  theme.palette.mode === 'light'
                    ? 'joinCommunity_socialCard__s1y67 joinCommunity_Youtube__HwD8I'
                    : 'joinCommunity_socialCard__s1y67 joinCommunity_YoutubeDark__D33jV'
                }
              >
                <div className='joinCommunity_cardLeftSide__aDj_o'>
                  <div
                    className={
                      theme.palette.mode === 'light'
                        ? 'joinCommunity_socialIcon__6q6A8 joinCommunity_YoutubeDark__D33jV joinCommunity_Youtube-light__jnkW5'
                        : 'joinCommunity_socialIcon__6q6A8 joinCommunity_YoutubeDark__D33jV joinCommunity_Youtube-dark__sLn8l'
                    }
                  >
                    {' '}
                  </div>
                  <span className='joinCommunity_socialTitle__Zx4OW'>
                    Youtube
                  </span>
                </div>
                <div
                  className={
                    theme.palette.mode === 'light'
                      ? 'joinCommunity_arrow__BcpWi joinCommunity_social-light__i1tRo'
                      : 'joinCommunity_arrow__BcpWi joinCommunity_social-dark__H_iP4'
                  }
                >
                  {' '}
                </div>
              </div>
            </a>
            <a
              href='https://www.tiktok.com/@solicydotnet'
              target='_blank'
              rel='noopener noreferrer nofollow'
            >
              <div
                className={
                  theme.palette.mode === 'light'
                    ? 'joinCommunity_socialCard__s1y67 joinCommunity_Tiktok__vp1XL'
                    : 'joinCommunity_socialCard__s1y67 joinCommunity_TiktokDark__StILO'
                }
              >
                <div className='joinCommunity_cardLeftSide__aDj_o'>
                  <div
                    className={
                      theme.palette.mode === 'light'
                        ? 'joinCommunity_socialIcon__6q6A8 joinCommunity_TiktokDark__StILO joinCommunity_Tiktok-light__MDE6M'
                        : 'joinCommunity_socialIcon__6q6A8 joinCommunity_TiktokDark__StILO joinCommunity_Tiktok-dark__dRFlH'
                    }
                  >
                    {' '}
                  </div>
                  <span className='joinCommunity_socialTitle__Zx4OW'>
                    Tiktok
                  </span>
                </div>
                <div
                  className={
                    theme.palette.mode === 'light'
                      ? 'joinCommunity_arrow__BcpWi joinCommunity_social-light__i1tRo'
                      : 'joinCommunity_arrow__BcpWi joinCommunity_social-dark__H_iP4'
                  }
                >
                  {' '}
                </div>
              </div>
            </a>
            <a
              href='https://www.facebook.com/Solicydotnet/'
              target='_blank'
              rel='noopener noreferrer nofollow'
            >
              <div
                className={
                  theme.palette.mode === 'light'
                    ? 'joinCommunity_socialCard__s1y67 joinCommunity_Facebook__t9Cwb'
                    : 'joinCommunity_socialCard__s1y67 joinCommunity_FacebookDark__fEmoY'
                }
              >
                <div className='joinCommunity_cardLeftSide__aDj_o'>
                  <div
                    className={
                      theme.palette.mode === 'light'
                        ? 'joinCommunity_socialIcon__6q6A8 joinCommunity_FacebookDark__fEmoY joinCommunity_Facebook-light__ZIzhC'
                        : 'joinCommunity_socialIcon__6q6A8 joinCommunity_FacebookDark__fEmoY joinCommunity_Facebook-dark___3rZZ'
                    }
                  >
                    {' '}
                  </div>
                  <span className='joinCommunity_socialTitle__Zx4OW'>
                    Facebook
                  </span>
                </div>
                <div
                  className={
                    theme.palette.mode === 'light'
                      ? 'joinCommunity_arrow__BcpWi joinCommunity_social-light__i1tRo'
                      : 'joinCommunity_arrow__BcpWi joinCommunity_social-dark__H_iP4'
                  }
                >
                  {' '}
                </div>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default JoinCommunity

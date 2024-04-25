import { useTheme } from '@mui/system'

import JoinCommunity from '../JoinCommunity'

function HomeJoinCommunity () {
  const theme = useTheme()

  return (
    <>
      <JoinCommunity address='home' />
      <div
        className='joinCommunity_joinCommunitySection__nnMdx'
        style={{ paddingTop: '0px' }}
      >
        <div
          id='JoinCommunityTelegram'
          className={
            theme.palette.mode === 'light'
              ? 'joinCommunity_telegramCommunity__Mm3T3 joinCommunity_telegramCommunityLight__48_i7'
              : 'joinCommunity_telegramCommunity__Mm3T3 joinCommunity_telegramCommunityDark__bKuFs'
          }
        >
          <div className='joinCommunity_sectionTitle__3cSz8'>
            Join Our Telegram Community
          </div>
          <div className='joinCommunity_telegramName__GF3_3'>@Solicy_net</div>
          <a
            className='joinCommunity_joinTelegramButton__NFa6T'
            rel='noreferrer noreferrer nofollow'
            href='https://t.me/Solicy_net'
            target='_blank'
          >
            <div className='joinCommunity_joinButton__Xmunf'>Join Now</div>
          </a>
        </div>
      </div>
    </>
  )
}

export default HomeJoinCommunity

import { useRef } from 'react'

import Introduction from './HomeIntroduction'
import Achievements from './HomeAchievements'
import TechStackOurClient from './HomeTechStackOurClient'
import SeeAbout from './HomeSeeAbout'
import OurServices from './HomeOurServices'
import TechStack from './HomeTechStack'
import HomeJoinCommunity from './HomeJoinCommunity'
import GetInTouch from '../GetInTouch'

function Home () {
  const scrollToGetInTouchRef = useRef(null)

  const scrollToGetInTouch = () => {
    if (scrollToGetInTouchRef.current) {
      scrollToGetInTouchRef.current.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <>
      <Introduction scrollToGetInTouch={scrollToGetInTouch} />
      <Achievements />
      <TechStackOurClient />
      <SeeAbout />
      <OurServices />
      <TechStack />
      <HomeJoinCommunity />
      <div ref={scrollToGetInTouchRef}></div>
      <GetInTouch />
    </>
  )
}

export default Home

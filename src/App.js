import './App.css'
import AppAppBar from './components/AppHeader'
import AppFooterBar from './components/AppFooter'
import { useState } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from './components/pages/home/HomeMain'
import About from './components/pages/about/AboutMain'
import BlockChain from './components/pages/services/BlockchainMain'
import Software from './components/pages/services/SoftwareMain'
import Portfolio from './components/pages/portfolio/PortfolioMain'
import Careers from './components/pages/careers/CareersMain'
import CareersJoinOurTeamDetail from './components/pages/careers/CareersJoinOurTeamDetail'
import Blog from './components/pages/blog/BlogMain'
import Contact from './components/pages/contact/Contact'
import ScrollTop from './components/pages/ScrollTop'
import TermsAndConditions from './components/pages/other/TermsAndConditions'
import PrivacyPolicy from './components/pages/other/PrivacyPolicy'
import { ThemeProvider, createTheme } from '@mui/material/styles'

function App () {
  const [mode, setMode] = useState('light')

  const toggleColorMode = () => {
    let next
    setMode(prev => {
      next = prev === 'dark' ? 'light' : 'dark'
      return next
    })

    document.documentElement.setAttribute('data-theme', next)
  }

  return (
    <ThemeProvider theme={createTheme({ palette: { mode } })}>
      <Router>
        <ScrollTop />
        <AppAppBar mode={mode} toggleColorMode={toggleColorMode} />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/blockchain' element={<BlockChain />} />
          <Route path='/software' element={<Software />} />
          <Route path='/portfolio' element={<Portfolio />} />
          <Route path='/career' element={<Careers />} />
          <Route
            path='/career/ITSalesSpecialist'
            element={<CareersJoinOurTeamDetail />}
          />
          <Route
            path='/career/PHPDeveloper'
            element={<CareersJoinOurTeamDetail />}
          />
          <Route
            path='/career/InternSoftwareDeveloper'
            element={<CareersJoinOurTeamDetail />}
          />
          <Route
            path='/career/SolidityDeveloper'
            element={<CareersJoinOurTeamDetail />}
          />
          <Route path='/blog' element={<Blog />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/termsAndConditions' element={<TermsAndConditions />} />
          <Route path='/privacyPolicy' element={<PrivacyPolicy />} />
        </Routes>
        <AppFooterBar />
      </Router>
    </ThemeProvider>
  )
}

export default App

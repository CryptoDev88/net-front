import * as React from 'react'
import PropTypes from 'prop-types'
import { useNavigate } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom'

import Box from '@mui/material/Box'
import AppBar from '@mui/material/AppBar'
import Container from '@mui/material/Container'
import ToggleColorMode from './ToggleColorMode'
import AppMenuItem from './AppMenuItem'
import AppMenuDrawer from './AppMenuDrawer'
import AppMenuIcon from './AppMenuIcon'
import ChatWithUs from './ChatWithUs'

const logoStyle = {
  width: '150px',
  height: '43px',
  cursor: 'pointer'
}

const appBarContainerStyle = {
  maxWidth: '100%',
  paddingLeft: 20,
  paddingRight: 20,
  display: 'flex',
  alignItems: 'center',
  flexShrink: 0,
  marginLeft: 0,
  marginRight: 0,
  justifyContent: 'center'
}

const appBarItems = [
  {
    name: 'Home',
    target: '/'
  },
  {
    name: 'About',
    target: '/about'
  },
  {
    name: 'Services',
    target: '/services',
    children: [
      {
        name: 'Blockchain',
        target: '/blockchain'
      },
      {
        name: 'Software',
        target: '/software'
      }
    ]
  },
  {
    name: 'Portfolio',
    target: '/portfolio'
  },
  {
    name: 'Careers',
    target: '/career'
  },
  {
    name: 'Blog',
    target: '/blog'
  },
  {
    name: 'Contact',
    target: '/contact'
  }
]

function AppAppBar ({ mode, toggleColorMode }) {
  const [open, setOpen] = useState(false)
  const [selMenu, setSelMenu] = useState(0)
  const navigate = useNavigate()

  const appBarStyle = {
    background:
      mode === 'light'
        ? 'linear-gradient(90deg,#1049b3 0.08%,#2268eb 100.59%)'
        : 'linear-gradient(89.92deg,#132d5f -0.61%,#183874 99.93%)',
    padding: '25px 0 18px',
    boxShadow: 'none'
  }

  const { pathname, hash } = useLocation()

  useEffect(() => {
    const currentPath = pathname

    const index = appBarItems.findIndex(item => {
      if (item.target === currentPath.toLowerCase()) return true
      if (item.children !== undefined)
        return (
          item.children.findIndex(
            child => child.target === currentPath.toLowerCase()
          ) !== -1
        )
      return false
    })

    setSelMenu(index)
  }, [pathname, hash])

  const onMenuClicked = index => {
    setSelMenu(index)
  }
  const toggleDrawer = () => {
    setOpen(!open)
  }

  useEffect(() => {
    const handleResize = () => {
      setOpen(false)
    }

    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  /* const scrollToSection = (sectionId) => {
    const sectionElement = document.getElementById(sectionId);
    const offset = 128;
    if (sectionElement) {
      const targetScroll = sectionElement.offsetTop - offset;
      sectionElement.scrollIntoView({ behavior: 'smooth' });
      window.scrollTo({
        top: targetScroll,
        behavior: 'smooth',
      });
      setOpen(false);
    }
  }; */

  return (
    <div>
      <AppBar style={appBarStyle}>
        <Container style={appBarContainerStyle}>
          <Box
            style={{
              justifyContent: 'space-between',
              width: '100%',
              height: '55px',
              alignItems: 'center',
              maxWidth: '1440px'
            }}
            sx={{
              flexGrow: 1,
              display: 'flex',
              alignItems: 'center',
              px: 0
            }}
          >
            <Box style={{ height: 49 }}>
              <img
                src={
                  'https://ik.imagekit.io/2zlgs27bjo/public/icons/solicy-logo.svg?tr=w-150,q-100'
                }
                style={logoStyle}
                alt='logo of sitemark'
                onClick={() => navigate('/')}
              />
            </Box>
            <Box
              style={{ height: '100%' }}
              sx={{ display: { xs: 'none', md: 'flex' } }}
            >
              <nav
                style={{
                  fontFamily: 'Quicksand',
                  boxSizing: 'border-box',
                  margin: 0,
                  padding: 0
                }}
              >
                <ul
                  style={{
                    display: 'flex',
                    justifyContent: 'center',
                    gridColumnGap: '45px',
                    width: '100%',
                    listStyle: 'none',
                    margin: 0,
                    padding: 0
                  }}
                >
                  {appBarItems.map((item, index) => (
                    <AppMenuItem
                      key={item.name}
                      isSelected={index === selMenu}
                      menuIndex={index}
                      item={item}
                      clickFn={onMenuClicked}
                    >
                      {item.name}
                    </AppMenuItem>
                  ))}
                </ul>
              </nav>
            </Box>
          </Box>
          <Box style={{ position: 'fixed', bottom: '32px', left: '22px' }}>
            <ToggleColorMode mode={mode} toggleColorMode={toggleColorMode} />
          </Box>
          <Box
            style={{ width: 24, height: 30 }}
            sx={{ display: { sm: '', md: 'none' } }}
          >
            <div onClick={() => toggleDrawer()}>
              <AppMenuIcon />
            </div>
          </Box>
        </Container>
        <AppMenuDrawer
          open={open}
          handleClose={index => setOpen(false)}
          handleSelMenu={setSelMenu}
        />

        <ChatWithUs />
      </AppBar>
      <div position='relative' style={{ ...appBarStyle, height: '98px' }}></div>
    </div>
  )
}

AppAppBar.propTypes = {
  mode: PropTypes.oneOf(['dark', 'light']).isRequired,
  toggleColorMode: PropTypes.func.isRequired
}

export default AppAppBar

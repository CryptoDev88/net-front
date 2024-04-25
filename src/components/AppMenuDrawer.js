import { useNavigate } from 'react-router-dom'
import { useEffect, useRef } from 'react'

const spanStyle = {
  boxSizing: 'border-box',
  display: 'block',
  width: 'initial',
  height: 'initial',
  background: 'none',
  opacity: '1',
  border: '0',
  margin: '0',
  padding: '0',
  maxWidth: '100%'
}

function AppMenuDrawer (props) {
  const navigate = useNavigate()
  const containerRef = useRef()

  useEffect(() => {
    const handlePoint = event => {
      const rect = containerRef.current.getBoundingClientRect()
      const x = event.clientX
      const y = event.clientY
      // Handle the click event here
      if (
        props.open &&
        containerRef.current &&
        x >= rect.left &&
        x <= rect.right &&
        y >= rect.top &&
        y <= rect.bottom
      ) {
        props.handleClose()
      }
    }

    window.addEventListener('click', handlePoint)
    return () => {
      window.removeEventListener('click', handlePoint)
    }
  }, [props])

  const handleClick = (target, index) => {
    navigate(target)
    props.handleClose()
    props.handleSelMenu(index)
  }

  return (
    <div
      className='header_hamburgerContainer__AUQ4q false header_active__hhmZQ'
      style={props.open ? { opacity: 1 } : { opacity: 0, height: 0 }}
    >
      <div className='header_navigationList__EKmjr'>
        <span className='false' onClick={() => handleClick('/', 0)}>
          Home
        </span>
        <span className='false' onClick={() => handleClick('/about', 1)}>
          About
        </span>
        <span className='false'>
          <div className='header_dropdown__m6MF_'>
            <span>
              Services
              <span
                style={{
                  boxSizing: 'border-box',
                  display: 'inline-block',
                  overflow: 'hidden',
                  width: 'initial',
                  height: 'initial',
                  background: 'none',
                  opacity: 1,
                  border: 0,
                  margin: 0,
                  padding: 0,
                  position: 'relative',
                  maxWidth: '100%'
                }}
              >
                <span style={spanStyle}>
                  <img
                    style={{
                      display: 'block',
                      maxWidth: '100%',
                      background: 'none',
                      opacity: 1,
                      border: 0,
                      margin: 0,
                      padding: 0
                    }}
                    alt=''
                    src='data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%2710%27%20height=%2710%27/%3e'
                  />
                </span>
                <img
                  alt='header-arrow.svg'
                  draggable='false'
                  src='https://ik.imagekit.io/2zlgs27bjo/public/icons/header-arrow.svg?tr=w-10,q-100'
                  decoding='async'
                  style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    bottom: 0,
                    right: 0,
                    boxSizing: 'border-box',
                    padding: 0,
                    border: 'none',
                    margin: 'auto',
                    display: 'block',
                    width: 100,
                    height: 0,
                    minWidth: '100%',
                    maxWidth: '100%',
                    minHeight: '100%',
                    maxHeight: '100%',
                    objectFit: 'contain'
                  }}
                  srcSet='https://ik.imagekit.io/2zlgs27bjo/public/icons/header-arrow.svg?tr=w-10,q-100 1x, https://ik.imagekit.io/2zlgs27bjo/public/icons/header-arrow.svg?tr=w-10,q-100 2x'
                />
              </span>
            </span>
            <div className='header_dropdownContent__4fZxp'>
              <div>
                <a
                  onClick={() => handleClick('/blockchain', 2)}
                  href='/blockchain'
                >
                  Blockchain
                </a>
              </div>
              <div>
                <a onClick={() => handleClick('/software', 2)} href='/software'>
                  Software
                </a>
              </div>
            </div>
          </div>
        </span>
        <span
          className='header_active__hhmZQ'
          onClick={() => handleClick('/portfolio', 3)}
        >
          Portfolio
        </span>
        <span className='false' onClick={() => handleClick('/career', 4)}>
          Careers
        </span>
        <span className='false' onClick={() => handleClick('/blog', 5)}>
          Blog
        </span>
        <span className='false' onClick={() => handleClick('/contact', 6)}>
          Contact
        </span>
      </div>
      <div style={{ height: '100%' }} ref={containerRef}></div>
    </div>
  )
}

export default AppMenuDrawer

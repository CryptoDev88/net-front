import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
// import { Link } from "react-router-dom";

const menuItemStyle = {
  fontWeight: 600,
  position: 'relative',
  transition: 'all .3s',
  fontStyle: 'normal',
  fontSize: 16,
  lineHeight: '40px',
  letterSpacing: '.115em',
  color: 'white',
  paddingBottom: '10px',
  cursor: 'pointer'
}

const afterItemStyle = {
  content: '.',
  position: 'absolute',
  right: 0,
  bottom: 0,
  left: 0,
  height: '2px',
  background: 'white',
  transition: 'all .3s',
  margin: 'auto',
  width: '100%',
  color: 'transparent',
  visibility: 'visible',
  opacity: 1
}

const dropMenuStyle = {
  width: '215px',
  marginTop: '10px',
  position: 'absolute',
  backgroundColor: 'white',
  color: '#131313',
  minWidth: '160px',
  boxShadow: '0 8px 16px 0 rgba(0,0,0,0.2)',
  zIndex: 1,
  borderRadius: '10px',
  overflow: 'hidden'
}

function AppMenuDropItem (props) {
  const [hover, setHover] = useState(false)
  const default_style = {
    padding: '13px 28px',
    display: 'block',
    borderBottom: '1px solid #d9d9d9',
    color: '#131313'
  }
  const new_style = hover
    ? { ...default_style, backgroundColor: '#ebebeb' }
    : default_style

  const navigate = useNavigate()

  return (
    <span
      onMouseOver={() => {
        setHover(true)
      }}
      onMouseLeave={() => {
        setHover(false)
      }}
      onClick={() => {
        navigate(props.item.target)
        props.handleClick()
      }}
      style={new_style}
    >
      {props.children}
    </span>
  )
}

function AppMenuItem (props) {
  const [hovered, setHovered] = useState(false)
  const [dropDownHovered, setDropDownHovered] = useState(false)

  const highlight = props.isSelected || hovered
  const menuStyle = props.isSelected
    ? { ...menuItemStyle, fontWeight: 700 }
    : menuItemStyle
  const afterStyle = highlight
    ? afterItemStyle
    : { ...afterItemStyle, opacity: 0, visibility: 'hidden', width: 0 }
  const hasChildren = props.item.children !== undefined
  const dropDown = hovered && hasChildren
  const dropDownMenuStyle =
    dropDown || dropDownHovered
      ? dropMenuStyle
      : { ...dropMenuStyle, display: 'none' }
  const navigate = useNavigate()

  return (
    <li
      style={{ boxSizing: 'border-box', margin: 0, padding: 0, minHeight: 50 }}
      onMouseOver={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <span style={menuStyle}>
        <div
          onClick={() => {
            if (!hasChildren) {
              props.clickFn(props.menuIndex)
              navigate(props.item.target)
            }
          }}
        >
          {props.children}
          {hasChildren && (
            <img
              style={{ paddingLeft: 10 }}
              alt='header-arrow.svg'
              draggable={false}
              src='https://ik.imagekit.io/2zlgs27bjo/public/icons/header-arrow.svg?tr=w-10,q-100'
            />
          )}
        </div>
        <div style={afterStyle}></div>
        <div
          onMouseOver={() => setDropDownHovered(true)}
          onMouseLeave={() => setDropDownHovered(false)}
        >
          <div style={dropDownMenuStyle}>
            {hasChildren &&
              props.item.children.map(item => (
                <AppMenuDropItem
                  key={item.name}
                  item={item}
                  handleClick={() => props.clickFn(props.menuIndex)}
                >
                  {item.name}
                </AppMenuDropItem>
              ))}
          </div>
        </div>
      </span>
    </li>
  )
}

export default AppMenuItem

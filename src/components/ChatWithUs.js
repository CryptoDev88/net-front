import { Button } from '@mui/material'
import React, { useState, useEffect } from 'react'
import ChatBubble from './ChatBubble'

const buttonStyle = {
  width: '60px',
  minWidth: '60px',
  height: '60px',
  borderRadius: '40px',
  position: 'fixed',
  bottom: '40px',
  right: '40px',
  padding: 0,
  margin: 0,
  transition: 'all 0.2s ease-in-out 0s',
  justifyContent: 'center',
  alignItems: 'center',
  background: 'linear-gradient(135deg, rgb(42, 39, 218), rgb(0, 204, 255))',
  zIndex: 2
}

const ChatApp = () => {
  const savedUser = sessionStorage.getItem('userName')
  const [hideChat, setHideChat] = useState(true)
  const [newMessage, setNewMessage] = useState('')
  const [userName, setUserName] = useState(
    savedUser === undefined || savedUser === null ? '' : savedUser
  )
  const [introPage, setIntroPage] = useState(false)
  const [msgHistory, setMsgHistory] = useState([])
  const [socket, setSocket] = useState(null)

  const handleNewMessageChange = event => {
    setNewMessage(event.target.value)
  }

  const handleSubmit = e => {
    e.preventDefault()

    console.log(userName)

    if (userName === '') {
      const delayedAction = setTimeout(() => {
        document
          .getElementById('user-data-input-wrap')
          .setAttribute('class', 'field-wrapper ')

        clearTimeout(delayedAction)
      }, 850)

      document
        .getElementById('user-data-input-wrap')
        .setAttribute('class', 'field-wrapper shake')
    } else {
      handleSendMessage()

      localStorage.setItem('userName', userName)

      setIntroPage(false)
    }
  }

  const handleSendMessage = () => {
    if (newMessage.trim() !== '') {
      if (socket && socket.readyState === WebSocket.OPEN) {
        socket.send(
          JSON.stringify({
            direction: 'from',
            message: newMessage,
            user: userName
          })
        )
        setNewMessage('')
      }
    } else {
      const delayedAction = setTimeout(() => {
        document
          .getElementById('new-message-textarea')
          .setAttribute('class', '')

        clearTimeout(delayedAction)
      }, 850)

      document
        .getElementById('new-message-textarea')
        .setAttribute('class', 'shake')
    }
  }

  useEffect(() => {
    const newSocket = new WebSocket('ws://localhost:5000') // WebSocket server URL
    // const newSocket = new WebSocket('ws://192.168.140.92:5000') // WebSocket server URL

    newSocket.onopen = () => {
      console.log('Connected to WebSocket server')
    }

    newSocket.onmessage = event => {
      const message = JSON.parse(event.data)

      setMsgHistory(message)
    }

    setSocket(newSocket)

    return () => {
      if (newSocket) {
        console.log('close socket')
        newSocket.close()
      }
    }
  }, [])

  return (
    <>
      <div>
        {!introPage && (
          <Button
            style={buttonStyle}
            onClick={() => {
              if (hideChat) setHideChat(false)
              else {
                if (newMessage !== '' && userName === '') setIntroPage(true)
                else handleSendMessage()
              }
            }}
          >
            {hideChat ? (
              <i
                className='material-icons type1 for-closed active'
                style={{
                  display: 'flex',
                  color: 'rgb(255, 255, 255)',
                  width: 32,
                  height: 32,
                  justifyContent: 'center',
                  alignItems: 'center'
                }}
              >
                <svg
                  id='ic_bubble'
                  fill='#FFFFFF'
                  height='24'
                  viewBox='0 0 24 24'
                  width='24'
                  xmlns='http://www.w3.org/2000/svg'
                  aria-hidden='true'
                >
                  <path d='M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2z'></path>
                  <path d='M0 0h24v24H0z' fill='none'></path>
                </svg>
              </i>
            ) : (
              <i
                className='material-icons type1 for-opened '
                style={{
                  display: 'flex',
                  color: 'rgb(255, 255, 255)',
                  width: 32,
                  height: 32,
                  justifyContent: 'center',
                  alignItems: 'center'
                }}
              >
                <svg
                  id='ic_send'
                  fill='#FFFFFF'
                  height='24'
                  viewBox='0 0 24 24'
                  width='24'
                  xmlns='http://www.w3.org/2000/svg'
                  aria-hidden='true'
                >
                  <path d='M2.01 21L23 12 2.01 3 2 10l15 2-15 2z'></path>
                  <path d='M0 0h24v24H0z' fill='none'></path>
                </svg>
              </i>
            )}
          </Button>
        )}
      </div>
      {!hideChat && (
        <div
          className='chat no-clip-path chrome'
          role='presentation'
          style={{ visibility: 'visible' }}
        >
          {introPage && (
            <div
              className='user-data-modal'
              data-testid='userDataModal'
              style={{
                backgroundImage:
                  'linear-gradient(rgb(255, 255, 255), rgb(255, 255, 255)), linear-gradient(118deg, rgb(42, 39, 218), rgb(0, 204, 255))',
                opacity: 1
              }}
            >
              <button
                className='user-data-modal-close'
                type='button'
                aria-label='Close modal'
              >
                <svg
                  id='ic_close'
                  fill='#000000'
                  height='24'
                  viewBox='0 0 24 24'
                  width='24'
                  xmlns='http://www.w3.org/2000/svg'
                  aria-hidden='true'
                >
                  <path d='M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z'></path>
                  <path d='M0 0h24v24H0z' fill='none'></path>
                </svg>
              </button>
              <div
                className='pre-chat'
                style={{ transform: 'translateY(0px)' }}
              >
                <div className='user-data-modal-operators'>
                  <div
                    className='user-data-modal-operator'
                    style={{
                      backgroundImage:
                        'url("https://avatars.tidiochat.com/clxhjyavjmyz86d1hgryhefvte5hxot5/avatars/c5d11fb1-230f-4932-acc7-be0d45e3abfa.png")'
                    }}
                  ></div>
                </div>
                <form onSubmit={handleSubmit}>
                  <div className='user-data-modal-text'>
                    <span>Please introduce yourself:</span>
                  </div>
                  <div className='user-data-modal-fields'>
                    <div id='user-data-input-wrap' className='field-wrapper '>
                      <input
                        type='text'
                        placeholder='Enter your name...'
                        className=''
                        onChange={e => {
                          setUserName(e.target.value)
                        }}
                        value={userName}
                      />
                    </div>
                  </div>
                  <button
                    className='user-data-modal-submit'
                    type='submit'
                    style={{
                      background:
                        'linear-gradient(99deg, rgb(42, 39, 218), rgb(0, 204, 255))',
                      color: 'rgb(255, 255, 255)',
                      boxShadow: 'rgba(0, 77, 255, 0.24) 0px 8px 32px 0px',
                      border: 0
                    }}
                  >
                    Send
                  </button>
                </form>
              </div>
              <div
                className='user-data-modal-filler'
                style={{ height: '96%' }}
              ></div>
            </div>
          )}
          <div
            className='chat-header project-online'
            style={{
              color: 'rgb(255, 255, 255)',
              background:
                'linear-gradient(135deg, rgb(42, 39, 218) 0%, rgb(0, 204, 255) 100%)'
            }}
          >
            <div className='avatars-wrapper operators-avatar-2'>
              <div
                className='header-ava'
                style={{
                  backgroundImage:
                    'url("https://avatars.tidiochat.com/clxhjyavjmyz86d1hgryhefvte5hxot5/avatars/c5d11fb1-230f-4932-acc7-be0d45e3abfa.png")'
                }}
              ></div>
              <div className='header-ava'></div>
            </div>
            <h2 className='oneline'>
              <span>
                Hi there{' '}
                <img
                  src='https://cdnjs.cloudflare.com/ajax/libs/twemoji/12.1.1/72x72/1f44b.png'
                  alt='👋'
                  className='emoji'
                />
              </span>
            </h2>
            <button
              className='material-icons exit-chat ripple tidio-1s5t5ku'
              type='button'
              aria-label='Minimize'
              style={{ color: 'rgb(255, 255, 255)' }}
              onClick={() => setHideChat(true)}
            >
              <svg
                xmlns='http://www.w3.org/2000/svg'
                height='24'
                viewBox='0 0 24 24'
                width='24'
                id='ic-minimize'
              >
                <path d='M0 0h24v24H0z' fill='none'></path>
                <path d='M11.67 3.87L9.9 2.1 0 12l9.9 9.9 1.77-1.77L3.54 12z'></path>
              </svg>
              <span>Minimize</span>
            </button>
            <button
              className='material-icons options ripple tidio-1s5t5ku'
              type='button'
              aria-label='Open options'
              style={{ color: 'rgb(255, 255, 255)' }}
            >
              <svg
                id='ic_options'
                className='options-icon'
                fill='#000000'
                height='24'
                viewBox='0 0 24 24'
                width='24'
                xmlns='http://www.w3.org/2000/svg'
                aria-hidden='true'
              >
                <path d='M0 0h24v24H0z' fill='none'></path>
                <path d='M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z'></path>
              </svg>
              <span>Open options</span>
            </button>
            <div
              className='offline-message'
              style={{
                backgroundImage:
                  'linear-gradient(135deg, rgba(42, 39, 218, 0.72) 0%, rgba(0, 204, 255, 0.72) 100%)'
              }}
            >
              <span className='online'>
                <span>We reply immediately</span>
              </span>
            </div>
          </div>
          <div id='conversation-group' className='   ' role='log'>
            <div
              id='messages'
              aria-live='polite'
              aria-atomic='false'
              data-testid='messagesLog'
            >
              {msgHistory.map((history, index) => {
                return (
                  userName === history.user && (
                    <ChatBubble
                      key={index}
                      direction={history.direction}
                      message={history.message}
                    />
                  )
                )
              })}
            </div>
            <div id='conversation-scroll' />
          </div>
          <div className='input-group '>
            <div className='drag-active-wrapper footer-input-wrapper '>
              <hr />
              <textarea
                id='new-message-textarea'
                rows='1'
                placeholder='Enter your message...'
                className=' '
                aria-label='New message'
                data-testid='newMessageTextarea'
                onChange={handleNewMessageChange}
                value={newMessage}
              ></textarea>
            </div>
            <div className='footer-bottom'>
              <div className='footer-icons-wrapper '>
                <form>
                  <input
                    type='file'
                    name='attachment'
                    aria-label='Attach file input'
                    style={{ display: 'none' }}
                  />
                </form>
                <button
                  type='button'
                  className='material-icons emoji-switch ripple  '
                  aria-label='Open Emoji picker'
                  style={{ color: 'rgb(0, 125, 252)' }}
                >
                  <svg
                    id='ic_emojiSwitch'
                    fill='#000000'
                    height='24'
                    viewBox='0 0 24 24'
                    width='24'
                    xmlns='http://www.w3.org/2000/svg'
                    aria-hidden='true'
                  >
                    <path d='M0 0h24v24H0z' fill='none'></path>
                    <path d='M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm3.5-9c.83 0 1.5-.67 1.5-1.5S16.33 8 15.5 8 14 8.67 14 9.5s.67 1.5 1.5 1.5zm-7 0c.83 0 1.5-.67 1.5-1.5S9.33 8 8.5 8 7 8.67 7 9.5 7.67 11 8.5 11zm3.5 6.5c2.33 0 4.31-1.46 5.11-3.5H6.89c.8 2.04 2.78 3.5 5.11 3.5z'></path>
                  </svg>
                </button>
              </div>
              <div>
                <a
                  href='https://www.tidio.com/powered-by-tidio/?platform=others&amp;project=clxhjyavjmyz86d1hgryhefvte5hxot5&amp;device=desktop&amp;utm_source=plugin_ref&amp;utm_medium=widget_v4&amp;utm_campaign=plugin_ref&amp;utm_referrer=solicy.net'
                  target='_blank'
                  rel='noopener noreferrer'
                  aria-label='Powered by Tidio.'
                  className='tidio-5hhiig'
                >
                  <span>POWERED BY</span>{' '}
                  <svg
                    version='1.1'
                    id='ic_logo'
                    xmlns='http://www.w3.org/2000/svg'
                    x='0px'
                    y='0px'
                    viewBox='0 0 52 16'
                    aria-hidden='true'
                  >
                    <polygon
                      className='st0'
                      points='4.8,4.7 5.1,4.3 8.9,4.7 11.2,6.3 11.7,9.1 11.8,11 11.5,11.4 11.3,11.7 8.4,11.7 5.8,10.4 4.3,8.8  4.3,6.5 4.4,5.4 '
                    ></polygon>
                    <g>
                      <g>
                        <polygon
                          className='st1'
                          points='23,12.4 23,5.3 20.5,5.3 20.5,4 27.1,4 27.1,5.3 24.5,5.3 24.5,12.4 		'
                        ></polygon>
                        <path
                          className='st1'
                          d='M31.3,12.4V4h3c1.5,0,2.7,0.4,3.6,1.1S39,6.9,39,8.2s-0.4,2.3-1.2,3.1c-0.8,0.7-2,1.1-3.7,1.1H31.3z M32.8,11.2h1.5c1,0,1.8-0.3,2.3-0.7c0.5-0.5,0.8-1.2,0.8-2.2S37.2,6.6,36.7,6c-0.5-0.5-1.4-0.8-2.5-0.8h-1.4V11.2L32.8,11.2z'
                        ></path>
                        <path
                          className='st1'
                          d='M47.5,12.5c-1.3,0-2.4-0.4-3.2-1.2C43.4,10.5,43,9.4,43,8.2s0.4-2.3,1.3-3.1c0.9-0.8,1.9-1.2,3.2-1.2 s2.3,0.4,3.2,1.2C51.6,5.9,52,7,52,8.2s-0.4,2.3-1.3,3.1C49.8,12.1,48.8,12.5,47.5,12.5z M47.5,5.1c-0.8,0-1.5,0.3-2.1,0.9 s-0.8,1.3-0.8,2.2s0.3,1.6,0.8,2.2c0.6,0.6,1.3,0.9,2.1,0.9s1.5-0.3,2.1-0.9c0.6-0.6,0.8-1.3,0.8-2.2S50.2,6.6,49.6,6 C49,5.4,48.3,5.1,47.5,5.1z'
                        ></path>
                        <path
                          className='st1'
                          d='M28.1,5.8c0-0.9,0.6-1.6,1.5-1.7l0,0v6.7c0,0.9-0.6,1.6-1.5,1.7l0,0V5.8z'
                        ></path>
                        <path
                          className='st1'
                          d='M40.3,5.8c0-0.9,0.6-1.6,1.5-1.7l0,0v6.7c0,0.9-0.6,1.6-1.5,1.7l0,0V5.8z'
                        ></path>
                      </g>
                      <g>
                        <g>
                          <path
                            className='st0'
                            d='M5.8,4.6c-0.3,0-0.7,0-1,0.1C4.7,5,4.7,5.4,4.7,5.7c0,3.1,2.6,5.7,5.8,5.7h1c0.1-0.3,0.1-0.7,0.1-1.1 C11.6,7.2,9,4.6,5.8,4.6z'
                          ></path>
                          <path
                            className='st2'
                            d='M10.5,11.4c-3.2,0-5.8-2.6-5.8-5.7c0-0.3,0-0.7,0.1-1C2.1,5.2,0,7.5,0,10.3V16h5.8c2.8,0,5.2-2,5.7-4.6H10.5 z'
                          ></path>
                          <path
                            className='st3'
                            d='M10.5,0C7.6,0,5.3,2,4.8,4.7c0.3-0.1,0.7-0.1,1-0.1c3.2,0,5.8,2.6,5.8,5.7c0,0.4,0,0.7-0.1,1.1h4.8V5.7 C16.3,2.6,13.7,0,10.5,0z'
                          ></path>
                        </g>
                      </g>
                    </g>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default ChatApp

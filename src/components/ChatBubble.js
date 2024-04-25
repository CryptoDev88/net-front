function ChatBubble (props) {
  const { direction, message } = props

  return direction === 'from' ? (
    <div
      className='message message-visitor  '
      style={{
        background:
          'linear-gradient(135deg, rgb(42, 39, 218), rgb(0, 204, 255))',
        color: 'rgb(255, 255, 255)'
      }}
    >
      <span className='message-content'>{message}</span>
    </div>
  ) : (
    <div
      className='message message-operator'
      style={{ transition: 'transform 0.2s ease 0s, margin 0.2s ease 0s' }}
    >
      {message}
    </div>
  )
}

export default ChatBubble;

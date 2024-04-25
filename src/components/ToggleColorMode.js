import * as React from 'react'
import PropTypes from 'prop-types'

import Box from '@mui/material/Box'
import Button from '@mui/material/Button'

function ToggleColorMode ({ mode, toggleColorMode }) {
  return (
    <Box sx={{ maxWidth: '32px' }}>
      <Button
        type='button'
        className={
          mode === 'dark'
            ? 'ant-btn ant-btn-default button_btn__XHL7T themeButton_themeToggler__h5VCF button_direction-row__QRu0d button_dark__1020G themeButton_darkTheme__318ZJ '
            : 'ant-btn ant-btn-default button_btn__XHL7T themeButton_themeToggler__h5VCF button_direction-row__QRu0d button_light__M4f83 '
        }
        style={{ minWidth: 62 }}
        onClick={toggleColorMode}
      >
        <span
          className={
            mode === 'dark'
              ? 'themeButton_themeTogglerImg__6km5g themeButton_darkThemeImg__rsboR'
              : 'themeButton_themeTogglerImg__6km5g'
          }
        />
      </Button>
    </Box>
  )
}

ToggleColorMode.propTypes = {
  mode: PropTypes.oneOf(['dark', 'light']).isRequired,
  toggleColorMode: PropTypes.func.isRequired
}

export default ToggleColorMode

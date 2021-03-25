import React from 'react'
import InfoIcon from '../../assets/icons/InfoIcon'
import SuccessIcon from '../../assets/icons/SuccessIcon'
import ErrorIcon from '../../assets/icons/ErrorIcon'
import CloseIcon from '../../assets/icons/CloseIcon'
import { AlertComponentPropsWithStyle } from 'react-alert';
import './styles.scss';

const AlertTemplate = ({ style, message, options, close }: AlertComponentPropsWithStyle) => {
  return (
    <div className="alert" style={{...style}}>
      {options.type === 'info' && <InfoIcon />}
      {options.type === 'success' && <SuccessIcon />}
      {options.type === 'error' && <ErrorIcon />}
      <span style={{ flex: 2 }}>{message}</span>
      <button onClick={close} className="alert-button">
        <CloseIcon />
      </button>
    </div>
  )
}

export default AlertTemplate
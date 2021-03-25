import React from 'react'
import InfoIcon from './icons/InfoIcon'
import SuccessIcon from './icons/SuccessIcon'
import ErrorIcon from './icons/ErrorIcon'
import CloseIcon from './icons/CloseIcon'
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
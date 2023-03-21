import React from "react";
import Button from "../UI/Button";
import { useState } from "react";
import './FormModal.scss'
import {FaWindowClose} from 'react-icons/fa'

export default function FormModal({children,open, onClose}) {
  const [selectedForm, setSelectedForm] = useState(0);
  if(!open) return null;

  const handleCancel = () => setSelectedForm(0);

  return (
    <div className="overlay">
      <div className="modalContainer">
        <div className="modalRight">
          <div className="closeBtn" onClick={onClose}><FaWindowClose fontSize={24}/></div>
          <div className="modalContent">{children}</div>
          <div className="btnContainer">
            <Button color='rgb(58, 110, 165)' text='Submit'></Button>
            <Button color='rgb(209, 69, 50)' text='Cancel' onClick={onClose}></Button>
          </div>
        </div>
      </div>
    </div>
  )
}

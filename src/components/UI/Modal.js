import {FaWindowClose } from "react-icons/fa";
import "./Modal.scss";

export default function Modal({ isOpen, onClose, children }) {
  if (!isOpen) {
    return null;
  }

  return(
    <div className="modalOverlay">
      <div className="modal">
        <button className="modalClose" onClick={onClose}>
          <FaWindowClose/>
        </button>
        <div className="modalContent">{children}</div>
      </div>
    </div>
  )
}
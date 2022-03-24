import React from 'react';
import ReactDOM from 'react-dom';
import './Modal.css';

const Modal = ({closeModal}) => {
    return (
        ReactDOM.createPortal(
            <div className="modal-overlay" onClick={() => closeModal()}>
                <div className="modal-container" onClick={(e) => e.stopPropagation()}>
                    <div className="upper-section">
                        <h1>Huge Announcement</h1>
                        <p className='close' onClick={() => closeModal()}>&times;</p>
                    </div>
                    <div className="middle-section">
                        <h3>My website is live!</h3>
                        <p>Go and check it out.</p>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti quaerat quidem consequatur autem accusamus cumque officiis ad qui nemo corporis!</p>
                    </div>
                    <div className="lower-section">
                        <a className="modal-btn btn-red" onClick={() => closeModal()}>Close</a>
                        <a href="https://github.com/simritkaul/flashtype" target="_blank" rel="noreferrer" className="modal-btn btn-green">Start</a>
                    </div>
                </div>
            </div>,
            document.getElementById("modal")
        )
    )
}

export default Modal;
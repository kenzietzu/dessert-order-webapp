import React from 'react';
import ReactDOM from 'react-dom';
import classes from './Modal.module.css';

const Backdrop = ({modalOffHandler}) => {
    return <div className={classes.backdrop} onClick={modalOffHandler} />
};

const ModalOverlay = ({children}) => {
    return (
        <div className={classes.modal}>
            <div>{children}</div>
        </div>
    );
};



const Modal = ({children, modalOffHandler}) => {
  return (
    <div className={classes.container}>
        {ReactDOM.createPortal(<Backdrop modalOffHandler={modalOffHandler} />, document.getElementById('overlays'))}
        {ReactDOM.createPortal(<ModalOverlay>{children}</ModalOverlay>, document.getElementById('overlays'))}
    </div>
  );
}; 

export default Modal;
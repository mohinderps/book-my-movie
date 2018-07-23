import React from 'react';
import './style.scss';

class Modal extends React.Component {
  render() {
    const {handleClose, show, children} = this.props;
    const showHideClassname = show ? 'modal display-flex': 'modal display-none';

    return (
      <div className={showHideClassname}>
        <section className="modal-main">
          <button type="button" className="close-button" onClick={handleClose}>x</button>
          {children}
        </section>
      </div>
    );
  }
}

export default Modal;

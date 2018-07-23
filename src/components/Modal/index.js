import React from 'react';
import './style.scss';

class Modal extends React.Component {
  render() {
    const {
      handleClose,
      show,
      children
    } = this.props;

    const showHideClassname = show ? 'modal display-block': 'modal display-none';

    return (
      <div className={showHideClassname}>
        <section className="modal-main">
          {children}
          <button type="button" onClick={handleClose}></button>
        </section>
      </div>
    );
  }
}

export default Modal;

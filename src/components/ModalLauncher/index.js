import React from 'react';
import Modal from '../Modal';
import './style.scss';

class ModalLauncher extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false
    }
    this.hideModal = this.hideModal.bind(this);
    this.showModal = this.showModal.bind(this);
  }

  hideModal() {
    this.setState({
      show: false
    });
  }

  showModal() {
    this.setState({
      show: true
    })
  }

  render() {
    const {show} = this.state;
    const {buttonTitle, buttonClass, children} = this.props;
    return (
      <div>
        <Modal handleClose={this.hideModal} show={show}>
          {children}
        </Modal>
        <button type="button"
          className={buttonClass}
          onClick={this.showModal}>{buttonTitle}</button>
      </div>
    );
  }
}

export default ModalLauncher;

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
    const {launcherTitle, launcherClass, children} = this.props;
    return (
      <div>
        <Modal handleClose={this.hideModal} show={show}>
          {children}
        </Modal>
        <div className="text-center">
          <button type="button"
            className={launcherClass}
            onClick={this.showModal}>{launcherTitle}</button>
        </div>
      </div>
    );
  }
}

export default ModalLauncher;

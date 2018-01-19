import React from 'react';

import Modal from 'react-modal';


const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)'
  }
};

class MoreDetailModal extends React.Component {
  constructor() {
    super();

    this.state = {
      modalIsOpen: false,
      information: [],
    };

    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

  openModal() {
    this.setState({ modalIsOpen: true });
  }

  closeModal() {
    this.setState({ modalIsOpen: false });
  }
  componentWillMount() {
    Modal.setAppElement('body');
  }


  render() {
    return (
      <div>
        <button id="moreDetail" onClick={this.openModal}>More Detail</button>
        <Modal
          isOpen={this.state.modalIsOpen}
          onAfterOpen={this.afterOpenModal}
          onRequestClose={this.closeModal}
          style={customStyles}

          contentLabel="Example Modal"
        >
          {/* <form className="form">
            <button className="closeButton">close</button>
          </form> */}

          <div className="text-center">Name: <br /> {this.props.persoInfo.candidateName}</div>
          <hr />
          <div className="container-table">

            <div className="row">
              <div className="col-md-12 text-center" >
                Company: <br /> {this.props.persoInfo.companyName}
              </div>
            </div>
            <hr />
            <div className="row">
              <div className="col-md-12 text-center">
                Interview date: <br /> {this.props.persoInfo.interviewDate}
              </div>

            </div>
            <hr />
            <div className="row">
              <div className="col-md-12 text-center" >
                Phase: <br /> {this.props.persoInfo.phase}
              </div>
            </div>
            <hr />
            <div className="row">
              <div className="col-md-12 text-center" >
                Status: <br /> {this.props.persoInfo.status}
              </div>
            </div>
            <hr />
            <div className="row">
              <div className="col-md-12 text-center" >
                Notes: <br /> {this.props.persoInfo.note}
              </div>
            </div>
          </div>
          <br />
         
        </Modal>
      </div >
    );
  }
}


export default MoreDetailModal;
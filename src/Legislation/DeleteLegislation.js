import React from "react";
import Modal from "react-modal";

export default class Delete extends React.Component {
  constructor() {
    super();
    this.state = {
      modalIsOpen: false,
      id: ""
    };
    Modal.setAppElement(document.body);
  }

  openModal = () => {
    this.setState({ modalIsOpen: true });
  };

  closeModal = () => {
    this.setState({ modalIsOpen: false });
  };

  generateBills = bill => {
    return (
      <option key={bill.id} id={bill.id} value={bill.id}>
        {bill.StateCode} {bill.StateBillID}
      </option>
    );
  };

  change = event => {
    this.setState({ id: event.target.value });
  };

  render() {
    return (
      <div>
        <button
          id="delete-button"
          className="modal-open"
          onClick={this.openModal}
        >
          <h2>Remove Only a Bill</h2>
        </button>
        <Modal
          isOpen={this.state.modalIsOpen}
          onAfterOpen={this.afterOpenModal}
          onRequestClose={this.closeModal}
          contentLabel="DeleteModal"
        >
          <div id="modal">
            <button onClick={this.closeModal} id="close-button">
              Close
            </button>
            <h2 id="form-title">Remove a Bill Only</h2>
            <form id="delete-form" onSubmit={this.props.deleteLegislation}>
              <label htmlFor="StateBillID">Find Bill:</label>
              <select
                id="delete-legislation"
                name="StateBillID"
                onChange={this.change}
                value={this.state.id}
                onClick={this.change}
                onKeyUp={this.change}
                onMouseLeave={this.change}
              >
                <option value="" disabled selected>
                  Select something...
                </option>
                {this.props.data.map(this.generateBills)}
              </select>
              <input type="submit" id="submit-button" value="Remove Bill" />
            </form>
          </div>
        </Modal>
      </div>
    );
  }
}

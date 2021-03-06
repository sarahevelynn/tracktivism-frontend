import React from "react";
import Modal from "react-modal";

export class UpdatePopulated extends React.Component {
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
      <option
        key={bill.id}
        id={bill.id}
        value={bill.id}
        onClick={this.props.updatePopulated}
      >
        {bill.StateCode} {bill.StateBillID}
      </option>
    );
  };

  populateData = id => {
    return this.props.data.find(bill => {
      return bill.id === id;
    });
  };

  change = event => {
    this.setState({ id: event.target.value });
  };

  render() {
    return (
      <div>
        <button
          id="update-open"
          className="modal-open"
          onChange={this.openModal}
        >
          <select
            id="StateBillID"
            name="StateBillID"
            onChange={this.change}
            value={this.state.id}
            onClick={this.change}
            onKeyUp={this.change}
            onMouseLeave={this.change}
          >
            <option value="" disabled selected>
              Select Bill to Update:
            </option>
            {this.props.data.map(this.generateBills)}
          </select>
        </button>
        <Modal
          isOpen={this.state.modalIsOpen}
          onAfterOpen={this.afterOpenModal}
          onRequestClose={this.closeModal}
          contentLabel="UpdateModal"
        >
          <h2>Update a Bill</h2>
          <form id="update-legislation" onSubmit={this.props.updateLegislation}>
            <label htmlFor="StateBillID">Select Bill to Update:</label>
            <label htmlFor="StateCode">Update State Code:</label>
            <input type="text" name="StateCode" />
            <label htmlFor="BillName">Update Bill Name:</label>
            <input type="text" name="BillName" />
            <label htmlFor="KeyWords">Update Key Words</label>
            <input type="text" name="KeyWords" />
            <label htmlFor="Link">Update Bill Link</label>
            <input type="text" name="Link" />
            <input type="submit" id="update-button" value="Update Bill" />
          </form>
          <button onClick={this.closeModal} id="done-button">
            Done
          </button>
        </Modal>
      </div>
    );
  }
}

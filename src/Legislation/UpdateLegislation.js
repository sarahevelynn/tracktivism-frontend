import React from "react";
import Modal from "react-modal";

export class Update extends React.Component {
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
  }

  closeModal = () => {
    this.setState({ modalIsOpen: false });
  }

  generateBills = bill => {
    return (
      <option key={bill.id} id={bill.id} value={bill.id}>
        {bill.StateCode} {bill.StateBillID}
      </option>
    );
  }

  generateCatagories = bill => {
    return (
      <option key={bill.id} id={bill.id} value={bill.KeyWords}>
        {bill.KeyWords}
      </option>
    );
  }

  change = event => {
    this.setState({id: event.target.value});
  }

  render() {
    return (
      <div>
      <button
        id="update-button"
        className="modal-open"
        onClick={this.openModal}
      >
      <h2>Update a Bill</h2>
      </button>
      <Modal
        isOpen={this.state.modalIsOpen}
        onAfterOpen={this.afterOpenModal}
        onRequestClose={this.closeModal}
        contentLabel="updateModal"
      >
        <h2>Update a Bill</h2>
        <form id="update-legislation" onSubmit={this.props.updateLegislation}>
        <label htmlFor="StateBillID">Select Bill to Update:</label>
        <select
          id="update-legislation"
          name="StateBillID"
          onChange={this.change} value={this.state.id}
          onClick={this.change}
          onKeyUp={this.change}
          onMouseLeave={this.change}
        >
          <option value="" disabled selected>
            Select something...
          </option>
          {this.props.data.map(this.generateBills)}
        </select>
          <label htmlFor="StateCode">Update State Code:</label>
          <input type="text" name="StateCode" />
          <label htmlFor="BillName">Update Bill Name:</label>
          <input type="text" name="BillName" />
          <label htmlFor="KeyWords">Update Key Words</label>
          <select
            id="update-legislation"
            name="StateBillID"
            onChange={this.change} value={this.state.id}
            onClick={this.change}
            onKeyUp={this.change}
            onMouseLeave={this.change}
          >
            <option value="" disabled selected>
              Select something...
            </option>
            {this.props.catagories.map(this.generateCatagories)}
          </select>
          <label htmlFor="Link">Update Bill Link</label>
          <input type="text" name="Link" />
          <input type="submit" id="update-button" value="Update Bill" />
        </form>
        <button onClick={this.closeModal} id="done-button">Done</button>
      </Modal>
      </div>
    );
  }
}

import React from "react";
import Modal from "react-modal";

export class AddLegislation extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modalIsOpen: false,
    };
    Modal.setAppElement(document.body);
  }

  openModal = () => {
    this.setState({ modalIsOpen: true });
  }

  closeModal = () => {
    this.setState({ modalIsOpen: false });
  }

  render() {
    return (
      <div id="add-legislation">
      <button
        id="delete-open"
        className="modal-open"
        onClick={this.openModal}
      >
      <h2>Add Some Bills </h2>
      </button>
      <Modal
        isOpen={this.state.modalIsOpen}
        onAfterOpen={this.afterOpenModal}
        onRequestClose={this.closeModal}
        contentLabel="AddLegislationModal"
      >
        <h2>Add Some Bills </h2>
        <form id="new-legislation" onSubmit={this.props.addLegislation}>
          <label htmlFor="StateBillID">Find your bill:</label>
          <input type="text" name="StateBillID" />
          <label htmlFor="StateCode">Enter your State Code:</label>
          <input type="text" name="StateCode" />
          <label htmlFor="BillName">Enter Bill Name:</label>
          <input type="text" name="BillName" />
          <label htmlFor="KeyWords">Enter Key Words</label>
          <input type="text" name="KeyWords" />
          <label htmlFor="Link">Enter Bill Link</label>
          <input type="text" name="Link" />
          <input
            type="submit"
            id="add-legislation-button"
            value="Submit Legislation"
          />
        </form>
        <button onClick={this.closeModal}>Done</button>
      </Modal>
      </div>
    );
  }
}

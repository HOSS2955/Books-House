import React from "react";
import Modal from "react-bootstrap/Modal";

export default function Modalnew({ show, handleClose, children, packages }) {
  return (
    <div>
      <Modal
        show={show}
        onHide={handleClose}
        size="lg"
        autoFocus="true"
        centered="true"
      >
        <Modal.Header closeButton>
          {packages && (
            <div>
              <span>{packages.name}</span>
              <span> ${packages.price}</span>
            </div>
          )}
        </Modal.Header>
        <Modal.Body>{children}</Modal.Body>
      </Modal>
    </div>
  );
}

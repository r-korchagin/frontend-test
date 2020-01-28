import React, { useState } from "react";
import { Modal, Button, Form } from "react-bootstrap";
import { observer } from "mobx-react";

import modalStore from "../store/modalStore";
import postList from "../store/postListStore";
import userList from "../store/userListStore";

/**
 * Render Modal window
 */
const PostInformationModal = () => {
  /* store current post data */
  const [post, setPost] = useState({});
  /* store current user data */
  const [user, setUser] = useState({});

  const showInfoModal = () => {
    /* load  information about that given post */
    setPost(postList.getPostByID(modalStore.getInfoID));
    /* load  information about that given user */
    setUser(userList.getUserByID(modalStore.getUserID));
  };

  /**
   * Set store state to hide modal window
   */
  const closeForm = () => {
    modalStore.closeInfoModal();
  };

  /**
   * Uppercase first char
   * @param {String} str - any string
   * @returns {String} Capitalize first char
   */
  const capitalize = str => {
    return str === undefined ? "" : str.charAt(0).toUpperCase() + str.slice(1);
  };

  /**
   * Email link
   * @param {String} str - email
   * @returns {String} - email link
   */
  const emailLink = str => {
    return str === undefined ? "" : "mailto:" + str;
  };

  /**
   * Web link
   * @param {String} str - site name
   * @returns {String} - link to site
   */
  const siteLink = str => {
    return str === undefined ? "" : "http://" + str;
  };

  /**
   * Render modal window
   */
  return (
    <Modal
      show={modalStore.isModal}
      onShow={showInfoModal}
      onHide={closeForm}
      animation={true}
    >
      <Modal.Header closeButton>
        <Modal.Title>{capitalize(post.title)}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form.Group>
          <label>
            <strong>Name:</strong> {user.name}
          </label>
          <address>
            <strong>Email:</strong>{" "}
            <a href={emailLink(user.email)}>{user.email}</a>.<br />
          </address>
          <address>
            <strong>Address:</strong>
            <br />
            {user.address ? user.address.street : ""}
            <br />
            {user.address ? user.address.suite : ""}
            <br />
            {user.address ? user.address.city : ""}
            <br />
            {user.address ? user.address.zipcode : ""}
          </address>
          <address>
            <abbr title="Phone">
              <strong>Phone:</strong>
            </abbr>{" "}
            {user.phone}
          </address>
          <address>
            <strong>Web Site: </strong>
            <a href={siteLink(user.website)}>{user.website}</a>
          </address>
        </Form.Group>
        <Form.Group>
          <label>
            <strong>Body:</strong>
          </label>
          <textarea
            className="form-control"
            rows="4"
            value={capitalize(post.body)}
          />
        </Form.Group>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={closeForm}>
          Ok
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default observer(PostInformationModal);

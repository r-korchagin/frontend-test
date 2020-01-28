import { observable, computed, action, decorate } from "mobx";

/**
 * Store for modal window
 */
class ModalStore {
  constructor() {
    this.infoModal = false;
    this.infoID = 0;
    this.userID = 0;
  }

  get isModal() {
    return this.infoModal;
  }

  get getInfoID() {
    return this.infoID;
  }

  get getUserID() {
    return this.userID;
  }

  openInfoModal(id, userid) {
    this.infoModal = true;
    this.infoID = id;
    this.userID = userid;
  }

  closeInfoModal() {
    this.infoModal = false;
  }
}

decorate(ModalStore, {
  infoModal: observable,
  isModal: computed,
  getInfoID: computed,
  getUserID: computed,
  openInfoModal: action,
  closeInfoModal: action
});

const modalStore = new ModalStore();

export default modalStore;

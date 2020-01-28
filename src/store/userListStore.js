import { observable, computed, action, decorate } from "mobx";

class UserListStore {
  constructor() {
    // fetch users data to local store
    let self = this;
    this.userList = [];
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(response => response.json())
      .then(posts => (self.userList = posts));
  }

  /**
   * Users list getter
   * @return {Array} - Users list
   */
  get getUserList() {
    return this.userList;
  }

  /**
   * Users count getter
   * @return {Number} - Count of users
   */
  get getUserCount() {
    return this.userList.length;
  }

  /**
   * Return user data by ID
   * @param {Number} id - user ID
   * @return {Object} user data
   */
  getUserByID(id) {
    let user = this.userList.filter(user => user.id === id)[0];
    if (user) return user || "Unknow user";
    return "Unknow user";
  }
}

/**
 * Create React App intentionally doesn’t support decorator syntax
 */
decorate(UserListStore, {
  userList: observable,
  getUserList: computed,
  getUserCount: computed,
  getUserByID: action
});

const userList = new UserListStore();

export default userList;

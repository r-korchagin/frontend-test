import { observable, computed, action, decorate } from "mobx";

/**
 * Store for posts list
 */
class PostListStore {
  constructor() {
    // fetch posts data to local store
    let self = this;
    this.postList = [];
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then(response => response.json())
      .then(posts => (self.postList = posts));
  }

  /**
   * Getter
   * @returns {Array} posts list
   */
  get getPostList() {
    return this.postList;
  }

  /**
   * Getter
   * @return {Number} lenhght of posts list
   */
  get getPostCount() {
    return this.postList.length;
  }

  /**
   *
   * @param {Number} id
   * @return {Object} post by ID
   */
  getPostByID(id) {
    let post = this.postList.filter(post => post.id === id)[0];
    if (post) return post || "Unknow post";
    return "Unknow post";
  }
}

/**
 * Create React App intentionally doesn’t support decorator syntax
 */
decorate(PostListStore, {
  postList: observable,
  getPostList: computed,
  getPostCount: computed,
  getPostByID: action
});

const postList = new PostListStore();

export default postList;

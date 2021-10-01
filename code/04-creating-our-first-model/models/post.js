const db = require('../data/database');

class Post {
  constructor(title, content, id) {
    this.title = title;
    this.content = content;
    this.id = id; // may be undefined
  }

  async save() {
    const result = await db.getDb().collection('posts').insertOne({
      title: this.title,
      content: this.content,
    });

    return result;
  }
}

module.exports = Post;
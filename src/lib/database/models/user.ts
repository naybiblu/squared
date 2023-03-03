import mongo from "mongoose";

const userSchema = new mongo.Schema({
    name: {
      first: { type: String, require: true },
      last: { type: String, require: true }
    },
    username: { type: String, unique: true },
    credentials: {
      email: { type: String, require: true, unique: true },
      password: { type: String, require: true }
    },
    pronoun: { type: String },
    createdAt: { type: String, require: true },
    img: {
      avatar: String,
      bg: String
    },
    biodata: String,
    bday: Number,
    authId: String,
    badge: Array,
    interactions: {
      posts: Array,
      comments: Array,
      likes: Array,
      shares: Array
    },
    friends: Array,
    groups: Array,
    settings: {
      darkMode: { type: Boolean, default: false },
      private: { type: Boolean, default: false },
      loggedIn: { type: Boolean, default: true }
    }
  });
export const model = mongo.models.users || mongo.model("users", userSchema);

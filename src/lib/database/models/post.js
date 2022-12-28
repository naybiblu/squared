import mongo from "mongoose";

const postSchema = new mongo.Schema({ 
    id: { type: String, require: true, unique: true },
    type: { type: String, require: true },
    content: { type: String, require: true },
    author: {
        name: { type: String, require: true },
        img: { type: String, require: true }
    },
    timestamp: { type: Number },
    likes: { type: Number, default: 0 },
    comments: Array
});
export const model = mongo.models.posts || mongo.model("posts", postSchema);

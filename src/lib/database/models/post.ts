import mongo from "mongoose";

const postSchema = new mongo.Schema({ 
    id: { type: String, require: true, unique: true },
    type: { type: String, default: "text" },
    content: { type: String, require: true },
    author: {
        name: { type: String, require: true },
        img: { type: String, require: true }
    },
    timestamp: { type: Number },
    interactions: {
        likes: { type: Number, default: 0 },
        comments: { type: Number, default: 0 },
        shares: { type: Number, default: 0 }
    }
});
export const model = mongo.models.posts || mongo.model("posts", postSchema);

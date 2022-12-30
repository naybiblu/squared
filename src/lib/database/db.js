import mongo from 'mongoose';
import { MONGO_URL } from "$env/static/private";

export const connect = async() => {
    await mongo.connect(MONGO_URL); 
    mongo.Promise = global.Promise;
}
export const disconnect = async() => await mongo.disconnect();

mongo.connection.on("disconnected", () => connect());
mongo.connection.on("error", () => connect());
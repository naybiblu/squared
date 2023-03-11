import mongo from 'mongoose';
import { MONGO_URL } from "$env/static/private";

export const connect = async() => {
    mongo.set('strictQuery', true);
    mongo.set('autoIndex', false);
  
    await mongo.connect(MONGO_URL);
    mongo.Promise = global.Promise;
}
export const disconnect = async() => setTimeout(async() => { await mongo.disconnect() }, 2000);

mongo.connection.on("disconnected", async () => await connect());
mongo.connection.on("error", async () => await connect());
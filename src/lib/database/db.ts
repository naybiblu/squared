import mongo from 'mongoose';
import { MONGO_URL } from "$env/static/private";

mongo.set('strictQuery', true);

export const connect = async() => {
    await mongo.connect(MONGO_URL);
    mongo.Promise = global.Promise;
}
export const disconnect = async() => setTimeout(async() => { await mongo.disconnect() }, 2000);

mongo.connection.on("disconnected", async () => await connect());
mongo.connection.on("error", async () => await connect());

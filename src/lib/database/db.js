import mongo from 'mongoose';
//import { MONGO_URL } from "$env/static/private";

export const connect = async() => {
    await mongo.connect("mongodb+srv://Iamsuperv_15:Iamsuperv_15@naypi.0hu278k.mongodb.net/?retryWrites=true&w=majority"); 
    mongo.Promise = global.Promise;
}
export const disconnect = async() => await mongo.disconnect();

mongo.connection.on("disconnected", () => connect());
mongo.connection.on("error", () => connect());
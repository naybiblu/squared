import mongo from 'mongoose';

export const connect = async(link: string) => {
    await mongo.connect(link); 
    mongo.Promise = global.Promise;
}
export const disconnect = async() => await mongo.disconnect();

mongo.connection.on("disconnected", () => connect());
mongo.connection.on("error", () => connect());

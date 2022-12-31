import mongo from 'mongoose';

export const connect = async(link: string) => {
    await mongo.connect(link); 
    mongo.Promise = global.Promise;
    mongo.connection.on("disconnected", async () => await connect(link));
    mongo.connection.on("error", async () => await connect(link));
}
export const disconnect = async() => await mongo.disconnect();
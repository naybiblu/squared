import { Client, AttachmentBuilder } from "discord.js";
import { DC_TOKEN, CHID_AV, CHID_BG, CHID_PI } from "$env/static/private";

const channelIdentifier = (type: number) => {
    switch (type) {
        default: return { id: CHID_AV, name: "av" };
        case 1: return { id: CHID_BG, name: "bg" };
    }
}

const client = new Client({
    intents: [ "GuildMessages", "Guilds", "GuildMembers", "MessageContent", "DirectMessages" ]
});

export const login = () => client.login(DC_TOKEN);

export const uploadImage = async (buffer: Buffer, username: string, channelType: number) => {
    const fileName = `${username}_${channelIdentifier(channelType).name}.jpg`;
    const guild = await client.guilds.fetch("1082987715387211786");
    const channel: any = await guild.channels.fetch(channelIdentifier(channelType).id);
    const file = new AttachmentBuilder(buffer, { name: fileName });
    const message = await channel.send({ content: fileName.replace(".jpg", ""), files: [file] });
    
    return message.attachments.first();
}

export const getImage = async (username: string, channelType: number) => {
    let selected: any;
    const fileName = username + "_" + channelIdentifier(channelType).name;
    const guild = await client.guilds.fetch("1082987715387211786");
    const channel: any = await guild.channels.fetch(channelIdentifier(channelType).id);
    const messages = await channel?.messages.fetch();
    messages.forEach((msg: any) => {
       if (msg.content === fileName) selected = msg.attachments.first();
    });
    return selected;
}

export const errorLogger = async (err: any) => {
    const guild = await client.guilds.fetch("1082987715387211786");
    const channel: any = await guild.channels.fetch("1084013501233762345");
    const message = await channel.send(`\`\`\`${err}\`\`\``);
    return message;
}
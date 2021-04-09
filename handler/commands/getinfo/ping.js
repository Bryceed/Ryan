const Discord = require("discord.js");

exports.run = async (client, message) =>  {
    let m = await message.channel.send("Ping?");
    m.edit(`:ping_pong: **Pong!** Atraso de **${m.createdTimestamp - message.createdTimestamp}ms** da sua rede até a minha!`);
    client.presets.statusTimeout = 2;
    console.log("OK");
}

exports.conf = {
    aliases: ['ping']
};
exports.help = {
    name: "Ping", description: "Latency test", usage: "ping"
};

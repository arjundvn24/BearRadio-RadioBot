const { Client, Intents } = require('discord.js');
const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES] });
const { Player } = require("discord-music-player");
const player = new Player(client, {
  leaveOnEmpty: false, // This options are optional.
});
client.player = player;
new Player(client, {
  leaveOnEnd: false,
  leaveOnStop: false,
  leaveOnEmpty: false,
  timeout: 0,
  volume: 150,
  quality: 'high',
});
client.on("ready", () => {
  const channel = client.channels.cache.get("824941590182887439");
  if (!channel) return console.error("The channel does not exist!");
  channel.join().then(connection => {
      // Yay, it worked!
      console.log("Successfully connected.");
  }).catch(e => {

      // Oh no, it errored! Let's log it to console :)
      console.error(e);
  });
  const channel1 = client.channels.cache.get('824941590182887438');
  channel1.send('Hi bot back');
  client.on('message', async (message) => {

        // If maxSongs is -1, will be infinite.
        await client.player.playlist(message, {
            search: 'https://open.spotify.com/playlist/0zlzPOThOEfCx8djkbrnyd?si=181d19d96c3e4200',
            maxSongs: -1
        });
        let status = client.player.setQueueRepeatMode(message, true);
});
});
client.login('ODcyODA1Njk2MjUxNTE0ODkw.YQvNpQ.24cLC7YRcLTZ6EPdHjGnGOETiB8');
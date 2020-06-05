const { ShardingManager } = require('discord.js');
const manager = new ShardingManager('./bot.js', { token: 'BOT-TOKEN' });

manager.spawn();
manager.on('launch', shard => console.log(`Launching Shard ${shard.id}`));

Manager.on('launch', shard => {
    log.info(`Launching Shard ${shard.id} [ ${shard.id + 1} of ${Manager.totalShards} ]`);
  });
}).catch(e => {
  log.error(`Unable to check for updates.\nMake sure you've an active internet connection.\n\n${e}`);
});

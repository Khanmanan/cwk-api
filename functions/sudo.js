async function sudo(message, options = {}){
	
		if (!message.member.hasPermission("MANAGE_WEBHOOKS")) {
            return message.channel.send(`You Don't Have Permission To Use This Command! Manage webhook (:`)}
    message.delete();
    let user =
      message.mentions.members.first() ||
      message.guild.members.cache.get(args[0]);
    if (!user) return message.channel.send("ex : sudo <user> or <id> <message>");
    const webhook = await message.channel.createWebhook(user.displayName, {
      avatar: user.user.displayAvatarURL(),
      channel: message.channel.id
    });
    await webhook.send(args.slice(1).join(" ")).then(() => {
      webhook.delete();
    });
  }

module.exports.sudo;
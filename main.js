const Discord = require('discord.js');
const client = new Discord.Client();
const config = require('./config.json');

client.on('ready', () => {
	console.log(`Logged in as ${client.user.tag}!`);
});

client.on("message" , msg => {
    if (msg.content === '!product'){
        const exampleEmbed = new Discord.MessageEmbed()
        .setColor('#E74C3C')
        .setTitle('Product List')
        .addField('<Product name>', 'Description')
        .addField('<Product name>', 'Description')
        .addField('<Product name>', 'Description')
        .addField('<Product name>', 'Description')
        .addField('<Product name>', 'Description')
        .setTimestamp()
        .setFooter('Kumi');
    
        msg.channel.send(exampleEmbed);
}
})

client.on("message" , msg => {
	if (msg.content === '!price'){
		const exampleEmbed = new Discord.MessageEmbed()
		.setColor('#E74C3C')
		.setTitle('Price List')
        .addField('<Product name>', 'Price')
        .addField('<Product name>', 'Price')
        .addField('<Product name>', 'Price')
        .addField('<Product name>', 'Price')
        .addField('<Product name>', 'Price')
		.setTimestamp()
		.setFooter('Kumi');
		
		msg.channel.send(exampleEmbed);
		}
		})
		client.on("message" , msg => {
			if (msg.content === '!website'){
				const exampleEmbed = new Discord.MessageEmbed()
				.setColor('#E74C3C')
				.setTitle('Kumi website')
				.setDescription('<website url>')
				.setTimestamp()
				.setFooter('Kumi');
			
				msg.channel.send(exampleEmbed);
			}
			})
client.on("message" , msg => {
	if (msg.content === '!github'){
		msg.channel.send('https://github.com/Kumi-the-chubby-bear/Kumi-discord-bot')
}
})
client.on("message" , msg => {
	if (msg.content === '!help'){
		const exampleEmbed = new Discord.MessageEmbed()
		.setColor('#E74C3C')
		.setTitle('Kumi help')
		.addField('`!product`', 'Product list')
        .addField('`!price`', 'Product price')
		.addField('`!website`', 'Kumi website')
		.addField('`!github`', 'Kumi bot github')
		.addField('`!help`', 'Shiw this command')
		.setTimestamp()
		.setFooter('Kumi');
	
		msg.channel.send(exampleEmbed);
	}
	})
	
client.login(config.token)


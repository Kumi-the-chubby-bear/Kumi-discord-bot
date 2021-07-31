const Discord = require('discord.js');
const client = new Discord.Client();
const config = require('./config.json');

client.on('ready', () => {
	console.log(`Logged in as ${client.user.tag}!`);
	client.user.setActivity("!help", { type: "PLAYING"})
});

client.on("message" , msg => {
    if (msg.content === '!product'){
        const exampleEmbed = new Discord.MessageEmbed()
        .setColor('#E74C3C')
        .setTitle('Product List')
        .addField('คุมิไรซ์บัตเตอร์บาล์ม', 'คุมิไรซ์บัตเตอร์บาล์ม สำหรับทาลดอาการคัน แมลงกัดต่อย ผลิตจากน้ำมันข้าว พร้อมด้วยสารสกัดจากลาเวนเดอร์ เปลือกกล้วยและวิตามิน')
        .addField('สติ๊กเกอร์กันยุงคุมิ', 'สติ๊กเกอร์กันยุงคุมิ 3 ส่วนผสมไล่ยุง 24 ชั่วโมง ปกป้องลูกน้อยได้หายห่วง ธรรมชาติ 100% ไม่มี DEET ไม่มีสารเคมี')
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
        .addField('คุมิไรซ์บัตเตอร์บาล์ม', '฿220.00')
        .addField('สติ๊กเกอร์กันยุงคุมิ', '฿130.00')
		.setTimestamp()
		.setFooter('Kumi');
		
		msg.channel.send(exampleEmbed);
		}
		})
		client.on("message" , msg => {
			if (msg.content === '!website'){
				msg.channel.send('<Webite url>')
			}
			})
client.on("message" , msg => {
	if (msg.content === '!github'){
		msg.channel.send('https://github.com/Kumi-the-chubby-bear/Kumi-discord-bot')
}
})
client.on("message" , msg => {
	if (msg.content === '!invite'){
		msg.channel.send('https://discord.com/oauth2/authorize?client_id=870516119604183091&permissions=75856&scope=bot')
}
})
client.on("message" , msg => {
	if (msg.content === '!help'){
		const exampleEmbed = new Discord.MessageEmbed()
		.setColor('#E74C3C')
		.setTitle('Kumi help')
		.addField('`!product`', 'Product list')
        .addField('`!price`', 'Product price')
		.addField('`!order`', 'How to order?')
		.addField('`!website`', 'Kumi website')
		.addField('`!github`', 'Kumi bot github')
		.addField('`!invite`', 'Kumi invite link')
		.addField('`!help`', 'Shiw this command')
		.setTimestamp()
		.setFooter('Kumi');
	
		msg.channel.send(exampleEmbed);
	}
	})
	client.on("message" , msg => {
		if (msg.content === '!order'){
			const exampleEmbed = new Discord.MessageEmbed()
			.setColor('#E74C3C')
			.setTitle('Price List')
			.addField('Facebook page', 'https://www.facebook.com/KumiTheChubbyBear/')
			.addField('Line shop', '<Line shop url>')
			.setTimestamp()
			.setFooter('Kumi');
			
			msg.channel.send(exampleEmbed);
			}
			})	
client.login(config.token)


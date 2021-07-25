const Discord = require('discord.js')
const disbut = require("discord-buttons");
const math = require('mathjs')

async function tictactoe(message, options = {}){
	
        console.log('test')
        let opponent = message.mentions.members.first()
        if (!opponent) return message.channel.send("Please provide the user to challenge!")
        let fighters = [message.member.id, opponent.id].sort(() => (Math.random() > .5) ? 1 : -1)

        let x_emoji = options.xEmoji || "❌"
        let o_emoji = options.oEmoji || "⭕"

        let dashmoji = options.idleEmoji || "➖"

        let Args = {
            user: 0,
            a1: {
                style: "gray",
                emoji: dashmoji,
                disabled: false
            },
            a2: {
                style: "gray",
                emoji: dashmoji,
                disabled: false
            },
            a3: {
                style: "gray",
                emoji: dashmoji,
                disabled: false
            },
            b1: {
                style: "gray",
                emoji: dashmoji,
                disabled: false
            },
            b2: {
                style: "gray",
                emoji: dashmoji,
                disabled: false
            },
            b3: {
                style: "gray",
                emoji: dashmoji,
                disabled: false
            },
            c1: {
                style: "gray",
                emoji: dashmoji,
                disabled: false
            },
            c2: {
                style: "gray",
                emoji: dashmoji,
                disabled: false
            },
            c3: {
                style: "gray",
                emoji: dashmoji,
                disabled: false
            }
        }
        let { MessageButton, MessageActionRow } = require('discord-buttons')

        const xoemb = new Discord.MessageEmbed()
            .setTitle('TicTacToe')
            .setDescription(`**How to Play ?**\n*Wait for your turn.. If its your turn, Click one of the buttons from the table to draw your emoji at there.*`)
            .setColor(options.embedColor || 0x075FFF)
            .setFooter(options.embedFoot || 'Make sure to win ;)')
            .setTimestamp()
        let infomsg = await message.channel.send(xoemb).then(ms => {
            setTimeout(() => ms.delete(), 10000)
        })

        let msg = await message.channel.send(`Waiting for Input | <@!${Args.userid}>, Your Emoji: ${o_emoji}`)
        tictactoe(msg)
        async function tictactoe(m) {
            Args.userid = fighters[Args.user]
            let won = {
                "<:O_:863314110560993340>": false,
                "<:X_:863314044781723668>": false
            }
            if (Args.a1.emoji == o_emoji && Args.b1.emoji == o_emoji && Args.c1.emoji == o_emoji) won["<:O_:863314110560993340>"] = true
            if (Args.a2.emoji == o_emoji && Args.b2.emoji == o_emoji && Args.c2.emoji == o_emoji) won["<:O_:863314110560993340>"] = true
            if (Args.a3.emoji == o_emoji && Args.b3.emoji == o_emoji && Args.c3.emoji == o_emoji) won["<:O_:863314110560993340>"] = true
            if (Args.a1.emoji == o_emoji && Args.b2.emoji == o_emoji && Args.c3.emoji == o_emoji) won["<:O_:863314110560993340>"] = true
            if (Args.a3.emoji == o_emoji && Args.b2.emoji == o_emoji && Args.c1.emoji == o_emoji) won["<:O_:863314110560993340>"] = true
            if (Args.a1.emoji == o_emoji && Args.a2.emoji == o_emoji && Args.a3.emoji == o_emoji) won["<:O_:863314110560993340>"] = true
            if (Args.b1.emoji == o_emoji && Args.b2.emoji == o_emoji && Args.b3.emoji == o_emoji) won["<:O_:863314110560993340>"] = true
            if (Args.c1.emoji == o_emoji && Args.c2.emoji == o_emoji && Args.c3.emoji == o_emoji) won["<:O_:863314110560993340>"] = true
            if (won["<:O_:863314110560993340>"] != false) return m.edit(`<@!${Args.userid}> (${oEmoji}) won.. That was a nice game.`)
            if (Args.a1.emoji == x_emoji && Args.b1.emoji == x_emoji && Args.c1.emoji == x_emoji) won["<:X_:863314044781723668>"] = true
            if (Args.a2.emoji == x_emoji && Args.b2.emoji == x_emoji && Args.c2.emoji == x_emoji) won["<:X_:863314044781723668>"] = true
            if (Args.a3.emoji == x_emoji && Args.b3.emoji == x_emoji && Args.c3.emoji == x_emoji) won["<:X_:863314044781723668>"] = true
            if (Args.a1.emoji == x_emoji && Args.b2.emoji == x_emoji && Args.c3.emoji == x_emoji) won["<:X_:863314044781723668>"] = true
            if (Args.a3.emoji == x_emoji && Args.b2.emoji == x_emoji && Args.c1.emoji == x_emoji) won["<:X_:863314044781723668>"] = true
            if (Args.a1.emoji == x_emoji && Args.a2.emoji == x_emoji && Args.a3.emoji == x_emoji) won["<:X_:863314044781723668>"] = true
            if (Args.b1.emoji == x_emoji && Args.b2.emoji == x_emoji && Args.b3.emoji == x_emoji) won["<:X_:863314044781723668>"] = true
            if (Args.c1.emoji == x_emoji && Args.c2.emoji == x_emoji && Args.c3.emoji == x_emoji) won["<:X_:863314044781723668>"] = true
            if (won["<:X_:863314044781723668>"] != false) return m.edit(`<@!${Args.userid}> (${x_emoji}) won.. That was a nice game.`)
            let a1 = new MessageButton()
                .setStyle(Args.a1.style)
                .setEmoji(Args.a1.emoji)
                .setID('a1')
                .setDisabled(Args.a1.disabled);
            let a2 = new MessageButton()
                .setStyle(Args.a2.style)
                .setEmoji(Args.a2.emoji)
                .setID('a2')
                .setDisabled(Args.a2.disabled);
            let a3 = new MessageButton()
                .setStyle(Args.a3.style)
                .setEmoji(Args.a3.emoji)
                .setID('a3')
                .setDisabled(Args.a3.disabled);
            let b1 = new MessageButton()
                .setStyle(Args.b1.style)
                .setEmoji(Args.b1.emoji)
                .setID('b1')
                .setDisabled(Args.b1.disabled);
            let b2 = new MessageButton()
                .setStyle(Args.b2.style)
                .setEmoji(Args.b2.emoji)
                .setID('b2')
                .setDisabled(Args.b2.disabled);
            let b3 = new MessageButton()
                .setStyle(Args.b3.style)
                .setEmoji(Args.b3.emoji)
                .setID('b3')
                .setDisabled(Args.b3.disabled);
            let c1 = new MessageButton()
                .setStyle(Args.c1.style)
                .setEmoji(Args.c1.emoji)
                .setID('c1')
                .setDisabled(Args.c1.disabled);
            let c2 = new MessageButton()
                .setStyle(Args.c2.style)
                .setEmoji(Args.c2.emoji)
                .setID('c2')
                .setDisabled(Args.c2.disabled);
            let c3 = new MessageButton()
                .setStyle(Args.c3.style)
                .setEmoji(Args.c3.emoji)
                .setID('c3')
                .setDisabled(Args.c3.disabled);
            let a = new MessageActionRow()
                .addComponents([a1, a2, a3])
            let b = new MessageActionRow()
                .addComponents([b1, b2, b3])
            let c = new MessageActionRow()
                .addComponents([c1, c2, c3])
            let buttons = { components: [a, b, c] }

            m.edit(`Waiting for Input | <@!${Args.userid}> | Your Emoji: ${Args.user == 0 ? `${o_emoji}` : `${x_emoji}`}`, buttons)
            const filter = (button) => button.clicker.user.id === Args.userid;
            const collector = m.createButtonCollector(filter, { max: 1, time: 30000 });

            collector.on('collect', b => {
                if (Args.user == 0) {
                    Args.user = 1
                    Args[b.id] = {
                        style: "green",
                        emoji: o_emoji,
                        disabled: true
                    }
                } else {
                    Args.user = 0
                    Args[b.id] = {
                        style: "red",
                        emoji: x_emoji,
                        disabled: true
                    }
                }
                b.reply.defer()
                const map = (obj, fun) =>
                    Object.entries(obj).reduce(
                        (prev, [key, value]) => ({
                            ...prev,
                            [key]: fun(key, value)
                        }),
                        {}
                    );
                const objectFilter = (obj, predicate) =>
                    Object.keys(obj)
                        .filter(key => predicate(obj[key]))
                        .reduce((res, key) => (res[key] = obj[key], res), {});
                let Brgs = objectFilter(map(Args, (_, fruit) => fruit.emoji == dashmoji), num => num == true);
                if (Object.keys(Brgs).length == 0) return m.edit('It\'s a tie!')
                tictactoe(m)
            });
            collector.on('end', collected => {
                if (collected.size == 0) m.edit(`<@!${Args.userid}> didn\'t react in time! (30s)`)
            });
        }
    }
    
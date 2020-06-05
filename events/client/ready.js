module.exports = async bot => {
     console.log(`${bot.user.username} is online`)
    bot.user.setActivity("Bot's Status" , {type: "WATCHING"})

}

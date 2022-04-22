/**
   * Error Chat !!!
   wa.me/917902653386
*/

const fs = require('fs')
const chalk = require('chalk')

// Website Api
global.APIs = {
	zenz: 'https://zenzapi.xyz',
}

// Apikey Website Api
global.APIKeys = {
	'https://zenzapi.xyz': 'Your Key',
}

// Other
global.owner = ['917902653386','919947200835']
global.web = 'Nothing Here !'
global.bot = 'ALOT_BOTz'
global.premium = ['6285748894171']
global.packname = 'ALOT'
global.author = 'Roar Insane'
global.sessionName = 'nahh'
global.prefa = ['','!','.','🐦','🐤','🗿']
global.sp = '⭔'
global.mess = {
    success: '✓ Success',
    admin: 'Group Admin Special Feature!',
    botAdmin: 'Bot Must Be Admin First!',
    owner: 'Owner Bots Special Feature',
    group: 'Feature Used For Group Only!',
    private: 'Feature Used Only For Private Chat!',
    bot: 'Special Features for Users Bot Number',
    wait: 'Loading...',
    endLimit: 'Your Daily Limit Has Expired, Limit Will Reset Every 12 Hours',
}
global.limitawal = {
    premium: "Infinity",
    free: 100
}
global.thumb = fs.readFileSync('./media/nakata.jpg')

let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})

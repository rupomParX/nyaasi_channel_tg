import { scheduleJob } from 'node-schedule'

import { telegram } from './telegram'
import { Telegraf } from 'telegraf'
import { registerBotCommands } from './bot-commands'
import { setBotUser, setPosts } from './store'
import { rss } from './rss'
import { checkingJob } from './rss-check-job'

async function main() {
  // Setup Telegraf bot for command handling
  const bot = new Telegraf(process.env.BOT_TOKEN!)
  registerBotCommands(bot)
  bot.launch()

  const botUser = await telegram.getMe()
  setBotUser(botUser)

  const posts = await rss.getHome()

  posts.reverse()

  if (process.env.NODE_ENV === 'development') {
    posts.pop()
    posts.pop()
  }

  setPosts(posts)

  scheduleJob('*/1 * * * *', checkingJob)
}

main()

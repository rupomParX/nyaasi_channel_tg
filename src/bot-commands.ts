import { Telegraf, Context } from 'telegraf'
import { getEnv } from './lib/get-env'

export function registerBotCommands(bot: Telegraf<Context>) {
  // /index command
  bot.command('index', async (ctx) => {
    await ctx.reply('https://nyaa.si — main page')
  })

  // /search command
  bot.command('search', async (ctx) => {
    const query = ctx.message.text.split(' ').slice(1).join(' ')
    if (!query) {
      await ctx.reply('Usage: /search <text to search>')
      return
    }
    await ctx.reply(`https://nyaa.si/?f=0&c=0_0&q=${encodeURIComponent(query)}`)
  })

  // /subscribe command
  bot.command('subscribe', async (ctx) => {
    await ctx.reply('Subscriptions to torrents are not implemented yet.')
  })

  // /source command
  bot.command('source', async (ctx) => {
    await ctx.reply('Source code: https://github.com/ejnshtein/nyaasi-channel')
  })

  // /about command
  bot.command('about', async (ctx) => {
    await ctx.reply('Nyaa.si RSS to Telegram channel bot. Maintained by ejnshtein. ( ° ʖ °)')
  })
}

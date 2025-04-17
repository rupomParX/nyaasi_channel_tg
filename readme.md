# nyaasi-channel


## Installation

- Create `.env` file and put all secrets here.
- om your .env file.

What You Need in .env
Based on your code, you need at least these variables:
BOT_TOKEN (botfather)
CHANNEL_ID (the Telegram channel ID or username, e.g. @yourchannel)
HOST (your public host/domain, e.g. nyaasi.example.com or localhost:PORT)
REAL_HOST (the real host for RSS, e.g. nyaa.si)
MAGNET_REDIRECT_HOST (for magnet links, e.g. nyaa.si or your custom domain)
MAGNET_REDIRECT_PREFIX (usually magnet or similar)
##Docker 
- Run commands.
  - `docker build -t nyaasi-bot .`
  - `docker run --env-file .env nyaasi-bot`
## Commands

/index — Replies with the nyaa.si main page.
/search <text> — Replies with a nyaa.si search link for the given text.
/subscribe — Replies that subscriptions are not implemented yet.
/source — Replies with the source code link.
/about — Replies with a short about message.

## Development

- Run command `up`
- In VSCode press `F5` to start debugger and ts build server.

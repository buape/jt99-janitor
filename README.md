# JT99-Janitor

JT-99 Janitor is a utility bot for answering common questions and providing information about the JT-99 network

## Commands

`/getserverinfo` - Explains how to join other seervers in the network.

`/bots` - Explains how the people chatting in the network aren't bots, and that webhooks are used to broadcast messages.

`/whatisthis` - Explains JT-99 in a nutshell.

`/support` - Directs users to the Base Station support channel.

`/basestation` - Provides an invite link to the Base Station.

`/english` - Warns users to speak in English and not any other lanauge.



# Contributing


To contribute new tags/commands to Janitor, you will need to follow a process in your own fork of this repo.

**NOTE: It is recommended you create a new BRANCH in your fork, which is dedicated to the changes you are about to make. This way, any other commits you push to your own `master` branch won't collide with your PR, since all commits pushed to a branch will show up in your PR, even though it might be unrelated.**



## Adding a new TagScript file

Go to `src/commands/tags` and duplicate an existing `.ts` file. Give it an appropriate name, and make sure to edit/replace the command names and descriptions.


## The Final Step (IMPORTANT!)

Go to `src/commands` and edit the `index.js` file. On line 8, add the name of your new command to the array, making sure you follow the proper formatting.


## The FINAL Final Step


Open a pull request to the main repo, then pray. One of the developers/maintainers will review your changes, and get back to you if you are required to make any changes.

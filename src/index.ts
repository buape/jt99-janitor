import { Client, ClientMode } from "@buape/carbon";
import type { ExecutionContext } from "@cloudflare/workers-types/2023-07-01";

// Import Commands
import baseStationCommand from "./commands/basestation";
import botsCommand from "./commands/bots";
import contributeCommand from "./commands/contribute";
import englishCommand from "./commands/english";
import getServerInfoCommand from "./commands/getserverinfo";
import supportCommand from "./commands/support";
import whatIsThisCommand from "./commands/whatisthis";

type Env = {
	CLIENT_ID: string;
	PUBLIC_KEY: string;
	DISCORD_TOKEN: string;
};

export default {
	async fetch(request: Request, _env: Env, ctx: ExecutionContext) {
		const client = new Client(
			{
				clientId: _env.CLIENT_ID,
				publicKey: _env.PUBLIC_KEY,
				token: _env.DISCORD_TOKEN,
				mode: ClientMode.CloudflareWorkers,
			},
			[
				// Commands
				new baseStationCommand(),
				new botsCommand(),
				new contributeCommand(),
				new englishCommand(),
				new getServerInfoCommand(),
				new supportCommand(),
				new whatIsThisCommand(),
			],
		);

		if (request.url.endsWith("/deploy")) {
			await client.deployCommands();
			return new Response("Deployed commands");
		}
		const response = await client.router.fetch(request, ctx);
		return response;
	},
};

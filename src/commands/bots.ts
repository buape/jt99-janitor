import { Command, type CommandInteraction } from "@buape/carbon";

export default class botsCommand extends Command {
	name = "bots";
	description = "Why is everyone a bot?";
	defer = false;

	async run(interaction: CommandInteraction) {
		return interaction.reply({
			content:
				'Those "apps" are actually just users in other servers. We use webhooks to broadcast the messages throughout the network, and those webhooks are displayed as apps in your client.',
		});
	}
}

import { Command, type CommandInteraction } from "@buape/carbon";

export default class getServerInfoCommand extends Command {
	name = "getserverinfo";
	description = "Info on joining other network servers";
	defer = false;

	async run(interaction: CommandInteraction) {
		return interaction.reply({
			content:
				'If you\'re interested in joining other public servers in the network:\n\nIf you\'re on desktop:\n- Right-click on our messages\n- Go to Apps\n- Click "Get Server Info" for <@741688760944558170>\n\nIf on mobile:\n- Tap and hold on a message\n- Go to Apps\n- Click "Get Server Info"',
		});
	}
}

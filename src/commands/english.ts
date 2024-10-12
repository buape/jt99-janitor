import { Command, type CommandInteraction } from "@buape/carbon";

export default class englishCommand extends Command {
	name = "english";
	description = "Only use English in this channel!";
	defer = false;

	async run(interaction: CommandInteraction) {
		return interaction.reply({
			content:
				"Please only use English in this channel, because it is broadcast to other servers in the JT-99 network!",
		});
	}
}

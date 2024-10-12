import { Command, type CommandInteraction } from "@buape/carbon";

export default class contributeCommand extends Command {
	name = "contribute";
	description = "How to add tags?";
	defer = false;

	async run(interaction: CommandInteraction) {
		return interaction.reply({
			content:
				"To add tags to this bot, Fork https://github.com/buape/jt99-janitor and follow the instructions in the readme",
		});
	}
}

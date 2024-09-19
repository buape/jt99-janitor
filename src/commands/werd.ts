import { Command, type CommandInteraction } from "@buape/carbon";

export default class englishCommand extends Command {
	name = "werd";
	description = "idk";
	defer = false;

	async run(interaction: CommandInteraction) {
		return interaction.reply({
			content: "The key is nouaegnol 1foubnfmoj",
		});
	}
}

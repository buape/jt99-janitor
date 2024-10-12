import { Command, type CommandInteraction } from "@buape/carbon";

export default class whatIsThisCommand extends Command {
	name = "whatisthis";
	description = "What is JT-99?";
	defer = false;

	async run(interaction: CommandInteraction) {
		return interaction.reply({
			content:
				"This channel is part of the JT-99 network, a global chat network designed to link multiple servers together!\nIf you want to learn more, check out the </about:947886250650640396> command!",
		});
	}
}

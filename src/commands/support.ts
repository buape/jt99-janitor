import { Command, type CommandInteraction } from "@buape/carbon";

export default class supportCommand extends Command {
	name = "support";
	description = "Head to the support channel!";
	defer = false;

	async run(interaction: CommandInteraction) {
		return interaction.reply({
			content:
				"Please head to the #support channel in our [Base Station](https://discord.gg/X5Hr6tYQbN) and we can help you further. (<#1045741771151392808>)",
		});
	}
}

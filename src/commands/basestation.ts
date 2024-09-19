import { Command, type CommandInteraction } from "@buape/carbon";

export default class baseStationCommand extends Command {
	name = "basestation";
	description = "Join the JT-99 Base Station!";
	defer = false;

	async run(interaction: CommandInteraction) {
		return interaction.reply({
			content:
				"Join the JT-99 Base Station here:\nhttps://discord.gg/X5Hr6tYQbN",
		});
	}
}

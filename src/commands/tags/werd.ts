import {
	APIInteraction,
	APIInteractionResponseChannelMessageWithSource,
	InteractionResponseType,
} from "discord-api-types/v10"
import { CommandData } from "../../../types"

const data: CommandData = {
	name: "werd",
}

const run = async (
	interaction: APIInteraction
): Promise<APIInteractionResponseChannelMessageWithSource> => {
	return {
		type: InteractionResponseType.ChannelMessageWithSource,
		data: {
			content: "The key is nouaegnol 1foubnfmoj",
			flags: 1 << 6,
		},
	}
}

export default { data, run }

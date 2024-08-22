import { APIInteraction, APIInteractionResponse, InteractionResponseType } from "discord-api-types/v10"
import { CommandData } from "../../../types"

const data: CommandData = {
    name: "contribute",
    description: "How to add tags",
}

const run = async (interaction: APIInteraction): Promise<APIInteractionResponse> => {
    return {
        type: InteractionResponseType.ChannelMessageWithSource,
        data: {
            content: "To add tags to this bot, Fork https://github.com/jt99network/janitor and follow the instructions in the readme",
        },
    }
}

export default { data, run }

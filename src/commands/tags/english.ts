import { APIInteraction, APIInteractionResponse, InteractionResponseType } from "discord-api-types/v10"
import { CommandData } from "../../../types"

const data: CommandData = {
    name: "english",
    description: "Only use English in this channel!",
}

const run = async (interaction: APIInteraction): Promise<APIInteractionResponse> => {
    return {
        type: InteractionResponseType.ChannelMessageWithSource,
        data: {
            content: "Please only use English in this channel, because it is broadcast to other servers in the JT-99 network!",
        },
    }
}

export default { data, run }

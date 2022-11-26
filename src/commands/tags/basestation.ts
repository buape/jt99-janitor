import { APIInteraction, APIInteractionResponse, InteractionResponseType } from "discord-api-types/v10"
import { CommandData } from "../../../types"

const data: CommandData = {
    name: "basestation",
    description: "Join the JT-99 Base Station!",
}

const run = async (interaction: APIInteraction): Promise<APIInteractionResponse> => {
    return {
        type: InteractionResponseType.ChannelMessageWithSource,
        data: {
            content: "Join the JT-99 Base Station here:\nhttps://discord.gg/X5Hr6tYQbN",
        },
    }
}

export default { data, run }

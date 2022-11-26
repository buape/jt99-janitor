import { APIInteraction, APIInteractionResponse, InteractionResponseType } from "discord-api-types/v10"
import { CommandData } from "../../../types"

const data: CommandData = {
    name: "support",
    description: "Head to the support channel!",
}

const run = async (interaction: APIInteraction): Promise<APIInteractionResponse> => {
    return {
        type: InteractionResponseType.ChannelMessageWithSource,
        data: {
            content:
                'Please head to the #support channel in our Base Station and we can help you further. (<#1045741771151392808>)',
        },
    }
}

export default { data, run }

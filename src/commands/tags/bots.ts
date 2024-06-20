import { APIInteraction, APIInteractionResponse, InteractionResponseType } from "discord-api-types/v10"
import { CommandData } from "../../../types"

const data: CommandData = {
    name: "bots",
    description: "Why is everyone a bot?",
}

const run = async (interaction: APIInteraction): Promise<APIInteractionResponse> => {
    return {
        type: InteractionResponseType.ChannelMessageWithSource,
        data: {
            content:
                'Those "apps" are actually just users in other servers. We use webhooks to broadcast the messages throughout the network, and those webhooks are displayed as apps in your client.',
        },
    }
}

export default { data, run }

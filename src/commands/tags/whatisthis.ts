import { APIInteraction, APIInteractionResponse, InteractionResponseType } from "discord-api-types/v10"
import { CommandData } from "../../../types"

const data: CommandData = {
    name: "whatisthis",
    description: "What is JT-99?",
}

const run = async (interaction: APIInteraction): Promise<APIInteractionResponse> => {
    return {
        type: InteractionResponseType.ChannelMessageWithSource,
        data: {
            content:
                "This channel is part of the JT-99 network, a global chat network designed to link multiple servers together!\nIf you want to learn more, check out the </about:947886250650640396> command!",
        },
    }
}

export default { data, run }

import { APIInteraction, APIInteractionResponse, InteractionResponseType } from "discord-api-types/v10"
import { CommandData } from "../../../types"

const data: CommandData = {
    name: "getserverinfo",
    description: "Info on joining other network servers",
}

const run = async (interaction: APIInteraction): Promise<APIInteractionResponse> => {
    return {
        type: InteractionResponseType.ChannelMessageWithSource,
        data: {
            content:
                "If you're interested in joining other public servers in the network:\n\nIf you're on desktop:\n- Right-click on our messages\n- Go to Apps\n- Click \"Get Server Info\" for <@741688760944558170>\n\nIf on mobile:\n- Tap and hold on a message\n- Go to Apps\n- Click \"Get Server Info\"",
        },
    }
}

export default { data, run }

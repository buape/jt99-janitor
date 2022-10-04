import {
    APIChatInputApplicationCommandInteraction,
    APIInteraction,
    InteractionResponseType,
    InteractionType,
} from "discord-api-types/v10"
import { isValidRequest, PlatformAlgorithm } from "discord-verify"

import commands from "./commands"

const requestHandler = async (event: FetchEvent) => {
    const isValid = await isValidRequest(
        event.request,
        "4a33caacf6cb3e94e68b518745cae8c53d6449a244b66f7e11a78d1c0776a448",
        PlatformAlgorithm.Cloudflare
    )
    if (!isValid) return new Response("Invalid request signature", { status: 401 })
    const data = (await event.request.json()) as APIInteraction

    console.log(data)
    console.log(commands)

    switch (data.type) {
        case InteractionType.Ping:
            return new Response(JSON.stringify({ type: 1 }))

        case InteractionType.ApplicationCommand:
            const command = commands.find((command) => command.data.name === data.data.name)
            if (!command) {
                return new Response(
                    JSON.stringify({
                        type: InteractionResponseType.ChannelMessageWithSource,
                        data: {
                            content: "Pong!",
                        },
                    }),
                    { status: 200 }
                )
            }
            const interaction = data as APIChatInputApplicationCommandInteraction
            const result = await command.run(interaction)
            return new Response(JSON.stringify(result), { headers: { "Content-Type": "application/json" } })
    }

    return new Response("Hello world!", { status: 200 })
}

addEventListener("fetch", (event) => {
    event.respondWith(requestHandler(event))
})

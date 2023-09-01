import APIApplicationCommandOption from "discord-api-types/v10"

declare global {
    const DISCORD_PUBLIC_KEY: string;
}

export interface CommandData {
    name: string;
    description?: string;
    options?: APIApplicationCommandOption[];
}
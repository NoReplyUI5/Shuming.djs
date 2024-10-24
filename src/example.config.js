// BOT BASIC CONFIGURATION
export const PREFIX = ["Prefix"]; // Bot Prefix & Dokdo Prefix
export const BOT_TOKEN = "Token"; // Bot Token 
export const OWNER_IDS = ["Owner Discord ID"]; // Owner IDs 
export const BOT_GUILD_ID = "Server ID"; // Your Discord Server ID 

// MongoDB Database Configuration
export const MONGO_URI = "MongoDB Database URI"; // Your MongoDB Database URI address

// LOGGING SYSTEM CONFIGURATION
export const TIME_ZONE = "Your Timezone"; // Example: 'Asia/Kolkata'

// RADIO SYSTEM CONFIGURATION
export const RADIO_CHANNEL = "Channel ID"; // Voice Channel ID 
export const RADIO_URL = "Radio URL"; // both HTTPS/HTTP Supported 
// Example Radio Source 'https://boxradio-edge-02.streamafrica.net/lofi' Recommended

// ANTI MESSAGE CONFIGURATION
export const ANTI_BOT_MSG = ["Channel ID"]; // Text Channel IDs 
export const MSG_DEL_TIME = 10; // Message delete interval in seconds (default: 10 seconds)
// Anti bot message system will delete all messages sent by bots on that particular channels

// AUTO ROLE CONFIGURATION
export const BOT_ROLE_ID = ["Role ID"]; // Auto Role IDs for bot ( Sticky Role )
export const USER_ROLE_ID = ["Role ID"]; // Auto Role IDs for user ( Sticky Role )


// MC STATS CONFIGURATION
export const MC_STATS_ENABLED = false; // Enable: (true) or disable: (false) MC Stats feature (default: false)
export const MC_STATS_CHANNEL_ID = "Channel ID"; // Channel ID where the stats will be posted
export const MC_STATS_IP = "Minecraft Server IP"; // Your Minecraft Server IP
export const MC_STATS_PORT = "Minecraft Server Port"; // Your Minecraft Server Port (usually 25565)
export const MC_STATS_REFRESH = 60; // Refresh interval in seconds (default: 60 seconds)
// The MC_STATS_REFRESH value controls how often the server stats will be updated
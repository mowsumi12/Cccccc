const axios = require('axios');

module.exports.config = {
    name: "monitor",
    version: "1.0.0",
    hasPermission: 0,
    description: "Monitor website uptime, search for monitored URLs, and list all monitored URLs",
    usePrefix: true,
    credits: "Jonell Magallanes",
    cooldowns: 6,
    commandCategory: "System",
};

module.exports.run = async function ({ api, event, args }) {
    const baseUrl = "https://ccprojectprivilege.adaptable.app";
    
    if (!args[0]) {
        return api.sendMessage("Please specify a command: `add`, `list`, or `search`.", event.threadID, event.messageID);
    }
   const wha = await api.sendMessage("Loading.....", event.threadID, event.messageID);
    const command = args[0];
    const urlOrSearch = args[1];

    if (command === 'add') {
        if (!urlOrSearch) {
            return api.sendMessage("Please provide a URL to add to the monitor list.", event.threadID, event.messageID);
        }

        try {
            const response = await axios.get(`${baseUrl}/uptime?url=${encodeURIComponent(urlOrSearch)}`);
            const data = response.data;

            if (data.message === "Website added successfully") {
                api.editMessage(`𝗠𝗼𝗻𝗶𝘁𝗼𝗿𝗲𝗱 𝗨𝗿𝗹 𝗔𝗱𝗱𝗲𝗱\n━━━━━━━━━━━━━━━━━━\nMonitor added successfully for URL: ${data.url}`, wha.messageID, event.threadID, event.messageID);
            } else if (data.message === "URL is already in the list") {
                api.editMessage(`𝗔𝗹𝗿𝗲𝗮𝗱𝘆 𝗨𝗽𝘁𝗶𝗺𝗲𝗱 𝗨𝗥𝗟\n━━━━━━━━━━━━━━━━━━\nURL is already in the database: ${data.url}`, wha.messageID, event.threadID, event.messageID);
            } else {
                api.editMessage("Unknown response from the server.", wha.messageID, event.threadID, event.messageID);
            }
        } catch (error) {
            api.sendMessage("Error adding monitor.", event.threadID, event.messageID);
        }
    } else if (command === 'search') {
        if (!urlOrSearch) {
            return api.sendMessage("Please provide a URL to search for in the monitor list.", event.threadID, event.messageID);
        }

        try {
            const response = await axios.get(`${baseUrl}/search?url=${encodeURIComponent(urlOrSearch)}`);
            const data = response.data;
            
            if (data.length === 0) {
                return api.editMessage(`No results found for: ${urlOrSearch}`, wha.messageID, event.threadID, event.messageID);
            }

            let message = `𝗦𝗲𝗮𝗿𝗰𝗵 𝗨𝗿𝗹 𝗠𝗼𝗻𝗶𝘁𝗼𝗿𝗲𝗱\n━━━━━━━━━━━━━━━━━━\n🔍 Search:${urlOrSearch}\n`;
            data.forEach(item => {
                const status = interpretStatus(item.status);
                message += `🌐 URL: ${item.url}\n📝 Status: ${status}\nDuration: ${item.duration}ms\n⏱️Last  Checked: ${new Date(item.lastChecked)}\n━━━━━━━━━━━━━━━━━━\n`;
            });

            api.editMessage(message, wha.messageID, event.threadID, event.messageID);
        } catch (error) {
            api.sendMessage("Error searching for the URL.", event.threadID, event.messageID);
        }
    } else if (command === 'list') {
        try {
            const response = await axios.get(`${baseUrl}/list`);
            const data = response.data;
            
            let message = "𝗠𝗼𝗻𝗶𝘁𝗼𝗿 𝗨𝗽𝘁𝗶𝗺𝗲𝗱 𝗟𝗶𝘀𝘁\n━━━━━━━━━━━━━━━━━━\n";
            data.forEach(item => {
                const status = interpretStatus(item.status);
                message += `🌐 URL: ${item.url}\n📝 Status: ${status}\nDuration: ${item.duration}ms\n⏱️ Last Checked: ${new Date(item.lastChecked)}\n━━━━━━━━━━━━━━━━━━\n`;
            });
            
            api.editMessage(message, wha.messageID, event.threadID, event.messageID);
        } catch (error) {
            api.sendMessage("Error fetching monitor list.", event.threadID, event.messageID);
        }
    } else {
        api.sendMessage("Invalid command. Use `add`, `list`, or `search`.", event.threadID, event.messageID);
    }
};

function interpretStatus(statusEmoji) {
    switch (statusEmoji) {
        case '🔵':
            return "Up (200 OK)";
        case '⚫':
            return "Forbidden or Bad Gateway";
        case '🔴':
            return "Down";
        default:
            return "Unknown Status";
    }
}

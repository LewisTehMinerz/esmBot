const HttpsProxyAgent = require("https-proxy-agent");
const servers = require("../servers.json").proxy;

const agents = [];

for (const server of servers) {
  agents.push(new HttpsProxyAgent(server));
}

exports.agents = agents;
module.exports = () => agents[agents[Math.floor(Math.random() * agents.length)]]; // pick a random agent each request to spread proxy load

const userConfig = require('./clouduser.next.config');
const { initOpenNextCloudflareForDev } = require('@opennextjs/cloudflare');

const webflowOverrides = {
  basePath: "/app",
  assetPrefix: "https://1acebdd5-0f03-416a-8aa1-ebdfbcfb9986.wf-app-prod.cosmic.webflow.services/app",
};

// Apply Webflow overrides to user config
for (const [key, value] of Object.entries(webflowOverrides)) {
  userConfig[key] = value;
}

// Initialize OpenNext for development
if (process.env.NODE_ENV === 'development') {
  try {
    initOpenNextCloudflareForDev();
  } catch (e) {
    // OpenNext not available in development
  }
}

module.exports = userConfig;
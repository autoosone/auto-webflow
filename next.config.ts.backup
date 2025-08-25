import type { NextConfig } from "next";
import userConfig from './clouduser.next.config';

const webflowOverrides: NextConfig = {
  basePath: "/app",
  assetPrefix: "https://1acebdd5-0f03-416a-8aa1-ebdfbcfb9986.wf-app-prod.cosmic.webflow.services/app",
};

for (const [key, value] of Object.entries(webflowOverrides)) {
  userConfig[key] = value;
}

export default userConfig;

import { initOpenNextCloudflareForDev } from "@opennextjs/cloudflare";
initOpenNextCloudflareForDev();

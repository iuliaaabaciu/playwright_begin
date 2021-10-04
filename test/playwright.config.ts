import { firefox, PlaywrightTestConfig } from '@playwright/test'

const config: PlaywrightTestConfig = {
    workers: 5,
    use : {
        browserName: "firefox",
        headless: false, 
        video: "on-first-retry"
    },
    retries: 2,
    timeout: 10
};

export default config;
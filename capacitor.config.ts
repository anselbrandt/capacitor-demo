import { CapacitorConfig } from "@capacitor/cli";

const config: CapacitorConfig = {
  appId: "com.example.app",
  appName: "capacitor-demo",
  webDir: "build",
  bundledWebRuntime: false,
  server: {
    url: "http://10.0.1.28:3000",
    cleartext: true,
  },
};

export default config;

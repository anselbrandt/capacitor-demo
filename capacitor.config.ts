import { CapacitorConfig } from "@capacitor/cli";

const config: CapacitorConfig = {
  appId: "com.example.app",
  appName: "capacitor-demo",
  webDir: "build",
  bundledWebRuntime: false,
  server: {
    url: "http://localhost:5001",
    cleartext: true,
  },
};

export default config;

# Capacitor Demo

```
yarn create react-app capacitor-demo --template typescript
yarn add react-router-dom
```

## Capacitor

```
# Install the Capacitor CLI locally
yarn add -D @capacitor/cli

# Initialize Capacitor in your React project
npx cap init

# Install the required packages
yarn add @capacitor/core @capacitor/ios @capacitor/android

# Add the native platforms
npx cap add ios
npx cap add android

# Build
yarn build
npx cap sync

Deploy Native Apps
npx cap open ios
npx cap open android
```

## Capacitor Live Reload

```
ipconfig getifaddr en0
```

`capacitor.config.ts`

```javascript
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
```

Apply changes:

```
npx cap copy
```

## Fix Mobile UI

Add `viewport-fit` to `public/index.html`

```
<meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover" />
```

`src/App.tsx` wrapper element:

```
paddingTop: 'env(safe-area-inset-top)'
```

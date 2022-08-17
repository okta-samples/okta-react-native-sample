# Okta + React Native & Okta-Hosted Login Page Example

This sample shows how to use the [Okta React Native Library](https://github.com/okta/okta-react-native) to sign a user in to a React Native application. The process uses Authorization Code Flow + PKCE, where the user is redirected to Okta for authentication. After the user authenticates, they are redirected back to the application with an authorization code, which is exchanged for an ID token and access token.

## Prerequisites

Before running this sample, you will need the following:

* [The Okta CLI Tool](https://github.com/okta/okta-cli#installation)
* An Okta Developer Account (create one using `okta register`, or configure an existing one with `okta login`)

## Get the Code

Grab and configure this project using `okta start react-native`. 

You can also clone this project from GitHub and run `okta start` in it.

```
git clone https://github.com/okta-samples/okta-react-native-sample.git
cd okta-react-native-sample
okta start
```

Follow the instructions printed to the console.

## Run the Example

Launch an Android Emulator or iOS Simulator:

```bash
# Android
npm run android

# iOS
npm run ios
```

**TIP**: If you have Android Studio install with CLI integration (Tools > Create Command-line Launcher), you can run `studio android` to view your project's code and run/debug from your IDE. 

If you see a home page that prompts you to login, then things are working!  Clicking the **Login** button will redirect you to the Okta sign-in page.

You can sign in with the same account that you created when signing up for your developer org, or you can use a known username and password from your Okta Directory.

## Methods

In this sample application, once the user logs in, there will be three methods that each shows a different way to get user info. 

### Get User From ID Token ###

This method calls `getUserFromIdToken()` to retrieve user info from decoding the ID Token claims.

### Get User From Request ###

This method calls `getUser()` to retrieve user info by passing in the access token, and making a request to the user info endpoint. It is done on the native modules. 

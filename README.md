# Instagram-UI-Design

A React Native project that integrates OneSignal for push notifications and mimics some aspects of Instagram's interface.

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/)
- [React Native CLI](https://reactnative.dev/docs/environment-setup)
- [Xcode](https://developer.apple.com/xcode/) (for iOS development)
- [Android Studio](https://developer.android.com/studio) (for Android development)

### Installation

1. Clone the repository:
   git clone https://github.com/nandutejaswini/Instagram-UI-Design.git
   cd MyNewProject
2. Install the dependencies:

   npm install
3. Install and link the required packages:
   
     npm install react-native-vector-icons
   
     npx react-native link react-native-vector-icons
   
     npm install react-native-onesignal
   
5. Configure OneSignal:

Replace "YOUR_ONESIGNAL_APP_ID" in the code with your actual OneSignal App ID.

Follow the OneSignal setup instructions for both iOS and Android.

### Running the Application

#### For Android
> Enable Developer Options and USB Debugging on your Android device.

> Connect your device to your computer via USB.

> Verify the connection:

> Run the application:
    npx react-native run-android

#### For iOS

Enable Developer Mode on your iOS device.

Connect your device to your Mac via USB.

Open the Xcode project located in ios/MyNewProject.xcworkspace.

Ensure that your development team is selected in the Signing & Capabilities tab.

Run the application:

npx react-native run-ios --device

### Expected Output
The application should display:

A top navigation bar with a camera icon, the text "Instagram", and a send icon.

A user post section with a profile picture, username, options icon, post image, and action icons (like, comment, share).

A bottom navigation bar with icons for home, search, add post, favorites, and profile.

### Troubleshooting
Ensure all dependencies are installed correctly.

Check for console errors in your terminal or IDE.

Verify device connectivity and recognition.

Make sure necessary permissions are set in AndroidManifest.xml (Android) and Info.plist (iOS).

### License
This project is licensed under the MIT License - see the LICENSE file for details.

### Acknowledgments
[React Native](https://reactnative.dev/)
[OneSignal](https://onesignal.com/)
[React Native Vector Icons](https://github.com/oblador/react-native-vector-icons)

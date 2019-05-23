expo init swipe

# set emulator as environment variable and path.  Take a look at it in the control panel.
emulator -list-avds
emulator -avd [emulator-name]
# for me, for now.
emulator -avd Nexus_S_API_28

npm start

# install default styling for React Native.  Kind of like material-ui.
npm install react-native-elements
# redux
npm install redux react-redux redux-thunk
# navigation
npm install react-navigation
# google firebase
npm install firebase
# firebase wrapper
npm install react-native-firebase

# converts latitude and longitude to zip code
npm latlng-to-zip
# import reverseGeocode from 'latlng-to-zip';

#VS CODE DEBUGGER
Lanuch the app in the Android Emulator
Install "React Native Tools" in the VS code extensions.
Menu: Debug/Add Configuration...
Select "React Native", and this will add bunch of debug mode to the launch.json
Enable Debugger in the Android Emulator
The breakpoint will hit here.

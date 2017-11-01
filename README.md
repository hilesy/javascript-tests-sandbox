To get the automation suite up and running, 
1) Clone the project using ```https://github.com/hilesy/javascript-tests-sandbox.git```
2) Install the dependancies using ```npm install``` at the root.


Running the suite on a mobile device:  
To make sure you have all the dependancies installed for appium you can run the following commands from the project root in terminal:   
```appium-doctor --ios```  
```appium-doctor --android```  
```appium-doctor --dev```  
This will tell you any outstanding set up which needs to be completed before you can run appium.


Running tests on an android device:  
First you will need to make sure you have Android Studio installed and added to your path. You will also need to make sure USB debugging is enabled in Developer Options on your device. Before running the test, you will need to update the driver-builder.js file with the credentials to match the device you are using within the buildAndroidDriver function.  
In the root of the project start the app server using ```npm run startServer```  
If everything is ok you should see a message like 'Appium REST http interface listener started on 127.0.0.1:4723'.  
Keeping the server terminal open, in a new terminal tab you can run your tests using one of the following commands from the project root:  
```npm run cucumber``` which will run cucumber tests only  
```npm run test``` which will run javascript linting and cucumber tests  
```npm run runReport``` which will run the cucumber tests, generate a report and also take any screenshots if a test has failed.  


Running the tests iOS simulator:  
First you will need to make sure you have Xcode installed and added to your path. Once you have Xcode installed, choose the device you want to run the test on. To do this go to Window > Devices. When you haven chosen the device, update the config in the driver-builder.js file to match.  
In the root of the project start the app server using ```npm run startServer```  
If everything is ok you should see a message like 'Appium REST http interface listener started on 127.0.0.1:4723'.  
Keeping the server terminal open, in a new terminal tab you can run your tests using one of the following commands from the project root:  
```npm run test``` which will run javascript linting and cucumber tests  
```npm run cucumber``` which will run cucumber tests only  
```npm run runReport``` which will run the cucumber tests, generate a report and also take any screenshots if a test has failed.  
When you run the tests, you should see the xcode simulator running on your desktop.   


Running the tests on iOS real device:  
Pre-reqs: 
- Apple Developer Account : To run the tests on Safari on an iOS device you will need an Apple Developer account. Once you've set up your Apple Developer account you will need to register the device you are running onto the Apple portal. 
You will also need to create a provisioning profile and an App ID. Instructions on how to set these up are here:
https://developer.apple.com/library/content/documentation/IDEs/Conceptual/AppDistributionGuide/MaintainingProfiles/MaintainingProfiles.html
- In the driver-builder file you will need to amend the details of your device under the buildSafariDriver to match the device & developer details
- Next you will need to make some config changes to the WebDriverAgent in Appium to allow permissions from the Apple Developer account to access the device. 
- Open terminal & open the the WebDriverAgent folder:
- /usr/local/lib/node_modules/appium/node_modules/appium-xcuitest-driver/WebDriverAgent

Run the following 2 commands:
- mkdir -p Resources/WebDriverAgent.bundle
- bash ./Scripts/bootstrap.sh -d

Open the Xcode project (Under the WebDriverAgent folder) 
- Make sure that the device under testing is connected
- Sign the WebDriverLib & the WebDriverAgent.
- update the bundle identifier to a unique string
- Run the builds for WebDriverLib and WebDriverAgent to make sure they are successful.
- (You may need to do the same for Safari-Launcher)

In the root of the project start the appium app server using ```npm run startServer```  
In a new tab start the ios_webkit_debug_proxy_server using ```npm run startIos``` << (you will need to change the UDID of the device in the package.json) to match the id of the device you're using.
In in a new tab you can run the tests as before using npm run test from project root.


Running tests on Saucelabs  

Some configuration needed in the driver-builder js file needed. Comment out the driver builder functions to enable running on saucelabs. You will also need to add details of the saucelabs device you wish to run the tests on. You can run the tests concurrently or on their own. To run concurrently you will need to connect to the saucelabs tunnel. To run on their own you dont need to connect to tunnel. 
Need to figure out how to run the tests on appium/saucelabs integration. 
(TODO)
to connect to saucelabs tunnel: add saucelabs credentials to path by doing the following:

In Terminal mode, enter vi ~/.bash_profile, and then press Enter.
Press i to insert text into your profile file.
Enter these lines:

```export SAUCE_USERNAME=“<USERNAME">```
```export SAUCE_ACCESS_KEY="<ACCESSKEY">```

Press Escape.
Hold Shift and press Z twice (z z) to save your file and quit vi.

In the terminal, enter source ~/.bash_profile.


TO RUN TESTS IN PARALELL ON SAUCELABS DOWNLOAD SOURCE CONNECT
WHEN YOU HAVE DOWNLOADED SOURCE CONNECT RUN THE FOLLOWING IN DOWNLOAD PATH (MAC):
```bin/sc -u <username> -k <accesskey>```







TODO:
- clearing cache on ios devices using selenium
- figure out issue with firefox driver & safari driver with latest browser versions
- set up selenium grid




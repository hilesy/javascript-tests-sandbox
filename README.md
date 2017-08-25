To get the automation suite up and running, 
1) Clone the project using ```https://github.com/hilesy/javascript-tests-sandbox.git```
2) Install the dependancies using ```npm install``` at the root.


Running the suite on a mobile device.
To make sure you have all the dependancies installed for appium you can run the following commands: 
```appium-doctor --ios```  
```appium-doctor --android```  
```appium-doctor --dev```  
This will tell you any outstanding set up which needs to be completed before you can run appium.


Running tests on an android device:  
First you will need to make sure you have Android Studio installed and added to your path. You will also need to make sure USB debugging is enabled in Developer Options on your device. Before running the test, you will need to update the driver-builder.js file with the credentials to match the device you are using within the buildAndroidDriver function.  
In the root of the project start the app server using ```npm run startServer```  
If everything is ok you should see a message like 'Appium REST http interface listener started on 127.0.0.1:4723'.  
Keeping the server terminal open, in a new terminal tab you can run your tests using one of the following commands:  
```npm run test``` which will run javascript linting and cucumber tests  
```npm run cucumber``` which will run cucumber tests only  
```npm run runReport``` which will run the cucumber tests, generate a report and also take any screenshots if a test has failed.  


Running the tests iOS simulator:  
First you will need to make sure you have Xcode installed and added to your path. Once you have Xcode installed, choose the device you want to run the test on. To do this go to Window > Devices. When you haven chosen the device, update the config in the driver-builder.js file to match.  
In the root of the project start the app server using ```npm run startServer```  
If everything is ok you should see a message like 'Appium REST http interface listener started on 127.0.0.1:4723'.  
Keeping the server terminal open, in a new terminal tab you can run your tests using one of the following commands:  
```npm run test``` which will run javascript linting and cucumber tests  
```npm run cucumber``` which will run cucumber tests only  
```npm run runReport``` which will run the cucumber tests, generate a report and also take any screenshots if a test has failed.  
When you run the tests, you should see the xcode simulator running on your desktop.   

Running the tests on iOS real device:  
(TODO)


Running tests on Saucelabs  
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



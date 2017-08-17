Chrome driver:
To run the tests on chrome, you will need to first make sure you have Chrome Driver installed and added to your path.


Appium:
To run the tests on a mobile device, you will need to first make sure you have Android Studio installed and added to your path. You will also need to make sure USB debugging is enabaled in Developer Options on your device. Next start the app server:

'npm run startServer'

In a seperate terminal, you can run your tests using:

'npm run test'.


Saucelabs
to connect to saucelabs tunnel: add saucelabs credentials to path by doing the following:

In Terminal mode, enter vi ~/.bash_profile, and then press Enter.
Press i to insert text into your profile file.
Enter these lines:

```export SAUCE_USERNAME=“<USERNAME"
export SAUCE_ACCESS_KEY="<ACCESSKEY"```

Press Escape.
Hold Shift and press Z twice (z z) to save your file and quit vi.

In the terminal, enter source ~/.bash_profile.


DOWNLOAD SOURCE CONNECT
WHEN YOU HAVE DOWNLOADED SOURCE CONNECT RUN THE FOLLOWING IN DOWNLOAD PATH (MAC):
```bin/sc -u <username> -k <accesskey>```



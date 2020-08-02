**_Procees to generate signed apk_**
GENERATE release key if not already generated (keytool -genkey -v -keystore my-release-key.jks -keyalg RSA -keysize 2048 -validity 10000 -alias (offline-type-app))

RUN COMMAND `ionic cordova build --release` (make sure build.json file is present in the root directory)

**_Challenges faced and solution_**

1. Execution failed for task ':app:packageRelease'. > Failed to generate v1 signature

- delete android folder
- run cordova platform add android
- run build command again

**_Tips_**

- To generate debuggable release apk add (`android:debuggable="true"`) to the android application config in config.xml file

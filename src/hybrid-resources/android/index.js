#!/usr/bin/env node
var fs = require('fs');
var mkdirp = require('mkdirp');
var writefile = require('writefile');
var cp = require('fs-cp');
var cpr = require('cpr');
var ncp = require('ncp').ncp;
var argv = require('yargs').usage('Usage: --proj "myApp" --user "Joe" --app "~/Documents/myWebApp" --icons "~/Documents/myWebAppIcons"').demand(['proj', 'user']).argv;
var android = require('./templates/android.js');
var gradle = require('./templates/gradle.js');
var path = require("path");
var os = require("os");
var platform = os.platform();
var user;
var appPath;
if (platform === 'win32') {
  appPath = path.join(process.env.HOMEPATH, 'Desktop', argv.proj);
  user = process.env.USERNAME;
} else if (platform === 'darwin') {
  appPath = path.join(process.env.HOME, 'Desktop', argv.proj);
  user = process.env.USER;
}

var icons = argv.icons;

var noop = function() {};

if (argv.proj) {
  
  // First level files:
  cp(path.join(__dirname, 'gradle', 'build.gradle'), path.join(appPath,  'build.gradle'), noop);
  cp(path.join(__dirname, 'gradle', 'gradle.properties'), path.join(appPath, 'gradle.properties'), noop);
  cp(path.join(__dirname, 'gradle', 'gradlew'), path.join(appPath, 'gradlew'), noop);
  cp(path.join(__dirname, 'gradle', 'gradlew.bat'), path.join(appPath, 'gradlew.bat'), noop);
  writefile(path.join(appPath,'local.properties'), gradle.local_properties, noop);
  cp(path.join(__dirname, 'app', 'app.iml'), path.join(appPath,  argv.proj + '.iml'), noop);
  writefile(path.join(appPath, 'settings.gradle'), gradle.settings, noop);

  // Files in ./gradle:
  cp(path.join(__dirname, 'gradle', 'gradle-wrapper.jar'), path.join(appPath, 'gradle', 'gradle-wrapper.jar'), noop);
  cp(path.join(__dirname, 'gradle', 'gradle-wrapper.properties'), path.join(appPath, 'gradle', 'gradle-wrapper.properties'), noop);

  // Files in ./app:
  writefile(path.join(appPath, 'app','proguard-rules.pro'), android.proguard_rules, noop);
  writefile(path.join(appPath, 'app','build.gradle'), gradle.build_gradle, noop);

  // Android Test file:
   writefile(path.join(appPath, 'app', 'src', 'androidTest', 'java', 'com', argv.user.toLowerCase(), argv.proj.toLowerCase(), 'ApplicationTest.java'), android.app_src_androidTest, noop);

   // Android Manifest:
   writefile(path.join(appPath, 'app', 'src', 'main', 'AndroidManifest.xml'), android.android_manifest, noop);


   // Create "MainActivity" file:
   writefile(path.join(appPath, 'app', 'src', 'main', 'java', 'com', argv.user.toLowerCase(), argv.proj.toLowerCase(), 'MainActivity.java'), android.main_activity, noop);

   // Copy out the resources (icons, etc.):

   if (icons) {
    cpr(icons, path.join(appPath, 'app', 'src', 'main', 'res'), noop);
   } else {
     cp(path.join(__dirname, 'res', 'drawable-hdpi', 'ic_launcher.png'), path.join(appPath, 'app', 'src', 'main', 'res', 'drawable-hdpi', 'ic_launcher.png'), noop);
     cp(path.join(__dirname, 'res', 'drawable-mdpi', 'ic_launcher.png'), path.join(appPath, 'app', 'src', 'main', 'res', 'drawable-mdpi', 'ic_launcher.png'), noop);
     cp(path.join(__dirname, 'res', 'drawable-xhdpi', 'ic_launcher.png'), path.join(appPath, 'app', 'src', 'main', 'res', 'drawable-xhdpi', 'ic_launcher.png'), noop);
     cp(path.join(__dirname, 'res', 'drawable-xxhdpi', 'ic_launcher.png'), path.join(appPath, 'app', 'src', 'main', 'res', 'drawable-xxhdpi', 'ic_launcher.png'), noop);
   }

   cp(path.join(__dirname, 'res', 'layout', 'activity_main.xml'), path.join(appPath, 'app', 'src', 'main', 'res', 'layout', 'activity_main.xml'), noop);
   cp(path.join(__dirname, 'res', 'menu', 'menu_main.xml'), path.join(appPath, 'app', 'src', 'main', 'res', 'menu', 'menu_main.xml'), noop);
   cp(path.join(__dirname, 'res', 'values', 'dimens.xml'), path.join(appPath, 'app', 'src', 'main', 'res', 'values', 'dimens.xml'), noop);
   cp(path.join(__dirname, 'res', 'values', 'styles.xml'), path.join(appPath, 'app', 'src', 'main', 'res', 'values', 'styles.xml'), noop);
   cp(path.join(__dirname, 'res', 'values-w820dp', 'dimens.xml'), path.join(appPath, 'app', 'src', 'main', 'res', 'values-w820dp', 'dimens.xml'), noop);
   writefile(path.join(appPath, 'app', 'src', 'main', 'res', 'values', 'strings.xml'), android.strings, noop);
  if (argv.app) {
    ncp.limit = 16;
    ncp(argv.app, path.join(appPath, 'app', 'src', 'main', 'assets'), noop);
  } else {
   // If no Web assets provided, out default Web page:
   cp(path.join(__dirname, 'web', 'index.html'), path.join(appPath, 'app', 'src', 'main', 'assets', 'index.html'), noop);
  }
  console.log('The project was successfully created. You may now import it into Android Studio.');
}


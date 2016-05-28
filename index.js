#!/usr/bin/env node
var fs = require('fs');
var writefile = require('writefile');
var ncp = require('ncp').ncp;
var p = require("path");
var replace = require('replace-in-file');
var argv = require('yargs').argv;
var currentOS = require("os");
var platform = currentOS.platform();
var examples = argv.examples;
var name = argv.name || argv.n;
var type = argv.type || argv.t || 'default';
var homedir;
var user;
if (platform === 'win32') {
  homedir = p.join(process.env.HOMEPATH, 'Desktop');
  user = process.env.USERNAME;
} else {
  homedir = p.join(process.env.HOME, 'Desktop');
  user = process.env.USER;
}
var path = argv.path || argv.p || homedir;
var os = argv.os || argv.o || 'ios';
var pkg = require('./package.json');
var jspm = argv.jspm || argv.j;
var mkdirp = require('mkdirp');
var noop = function() {};
var hybrid = argv.hybrid || argv.h;
var icons = argv.icons;
var src = argv.src || argv.s;

// Create projects:
//=================
var createProject = function() {
  if (jspm) {
    if (name) {
      ncp.limit = 32;
      mkdirp(p.join(path, name), noop);
      mkdirp(p.join(path, name, 'src'), noop);
      mkdirp(p.join(path, name, 'dist'), noop);
      mkdirp(p.join(path, name, 'dev'), noop);
      mkdirp(p.join(path, name, 'data'), noop);
      mkdirp(p.join(path, name, 'images'), noop);
      mkdirp(p.join(path, name, 'typings'), noop);
      
      // Copy files:
      ncp(p.join(__dirname, 'src', 'domstack.js'), p.join(path, name, 'src', 'domstack.js'), noop);
      ncp(p.join(__dirname, 'src', 'truck.js'), p.join(path, name, 'src', 'truck.js'), noop);
      ncp(p.join(__dirname, 'src', 'modules'), p.join(path, name, 'src', 'modules'), noop);
      ncp(p.join(__dirname, 'src', 'widgets'), p.join(path, name, 'src', 'widgets'), noop);
      ncp(p.join(__dirname, 'dist', 'styles'), p.join(path, name, 'dist', 'styles'), noop);
      ncp(p.join(__dirname, 'src', 'cli-resources', 'gulpfile.js'), p.join(path, name, 'gulpfile.js'), noop);
      ncp(p.join(__dirname, 'src', 'cli-resources', 'package.json'), p.join(path, name, 'package.json'), noop);
      ncp(p.join(__dirname, 'src', 'cli-resources', 'jsconfig.json'), p.join(path, name, 'jsconfig.json'), noop);
      ncp(p.join(__dirname, 'config.js'), p.join(path, name, 'config.js'), noop);
      ncp(p.join(__dirname, 'src', 'cli-resources', 'app.bundle.js'), p.join(path, name, 'dist', 'app.bundle.js'), noop);


      // Create project type:
      switch(type) {
        case 'default':
          ncp(p.join(__dirname, 'src', 'cli-resources', 'html', 'jspm', 'default.html'), p.join(path, name, 'index.html'), noop);
          ncp(p.join(__dirname, 'src', 'cli-resources', 'js', 'default.js'), p.join(path, name, 'dev', 'app.js'), noop);
          break;
        case 'navigation':
          ncp(p.join(__dirname, 'src', 'cli-resources', 'html', 'jspm', 'navigation.html'), p.join(path, name, 'index.html'), noop);
          ncp(p.join(__dirname, 'src', 'cli-resources', 'js', 'navigation.js'), p.join(path, name, 'dev', 'app.js'), noop);
          ncp(p.join(__dirname, 'src', 'cli-resources', 'data', 'lums.json'), p.join(path, name, 'data', 'lums.json'), noop);
          ncp(p.join(__dirname, 'src', 'cli-resources', 'images', 'luminaries'), p.join(path, name, 'images', ''), noop);
          break;
        case 'slideout':
          ncp(p.join(__dirname, 'src', 'cli-resources', 'html', 'jspm', 'slideout.html'), p.join(path, name, 'index.html'), noop);
          ncp(p.join(__dirname, 'src', 'cli-resources', 'js', 'slideout.js'), p.join(path, name, 'dev', 'app.js'), noop);
          ncp(p.join(__dirname, 'src', 'cli-resources', 'images'), p.join(path, name, 'images'), noop);
          ncp(p.join(__dirname, 'src', 'cli-resources', 'data', 'docs.json'), p.join(path, name, 'data', 'docs.json'), noop);
          ncp(p.join(__dirname, 'src', 'cli-resources', 'data', 'favorites.json'), p.join(path, name, 'data', 'favorites.json'), noop);
          ncp(p.join(__dirname, 'src', 'cli-resources', 'data', 'music.json'), p.join(path, name, 'data', 'music.json'), noop);
          ncp(p.join(__dirname, 'src', 'cli-resources', 'data', 'recipes.json'), p.join(path, name, 'data', 'recipes.json'), noop);
          ncp(p.join(__dirname, 'src', 'cli-resources', 'images', 'music'), p.join(path, name, 'images', 'music'), noop);
          break;
        case 'tabbar':
          ncp(p.join(__dirname, 'src', 'cli-resources', 'html', 'jspm', 'tabbar.html'), p.join(path, name, 'index.html'), noop);
          ncp(p.join(__dirname, 'src', 'cli-resources',  'js', 'tabbar.js'), p.join(path, name, 'dev', 'app.js'), noop);
          ncp(p.join(__dirname, 'src', 'cli-resources',  'data', 'docs.json'), p.join(path, name, 'data', 'docs.json'), noop);
          ncp(p.join(__dirname, 'src', 'cli-resources',  'data', 'favorites.json'), p.join(path, name, 'data', 'favorites.json'), noop);
          ncp(p.join(__dirname, 'src', 'cli-resources',  'data', 'music.json'), p.join(path, name, 'data', 'music.json'), noop);
          ncp(p.join(__dirname, 'src', 'cli-resources',  'data', 'recipes.json'), p.join(path, name, 'data', 'recipes.json'), noop);
          ncp(p.join(__dirname, 'src', 'cli-resources',  'images', 'icons'), p.join(path, name, 'images', 'icons'), noop);
          ncp(p.join(__dirname, 'src', 'cli-resources',  'images', 'music'), p.join(path, name, 'images', 'music'), noop);
          break;
        default:
          ncp(p.join(__dirname, 'src', 'cli-resources', 'html', 'jspm', 'default.html'), p.join(path, name, 'index.html'), noop);
          ncp(p.join(__dirname, 'src', 'cli-resources', 'js', 'default.js'), p.join(path, name, 'dev', 'app.js'), noop);
          break;
      }
    }
  } else {
    if (name) {
      ncp.limit = 16;
      mkdirp(p.join(path, name), noop);
      mkdirp(p.join(path, name, 'dist'), noop);
      mkdirp(p.join(path, name, 'typings'), noop);

      // Copy files:
      ncp(p.join(__dirname, 'src', 'cli-resources', 'gulpfile.js'), p.join(path, name, 'gulpfile.js'), noop);
      ncp(p.join(__dirname, 'src', 'cli-resources', 'package.json'), p.join(path, name, 'package.json'), noop);
      ncp(p.join(__dirname, 'src', 'cli-resources', 'jsconfig.json'), p.join(path, name, 'jsconfig.json'), noop);
      ncp(p.join(__dirname, 'dist', 'styles'), p.join(path, name, 'dist', 'styles'), noop);

      ncp(p.join(__dirname, 'dist', 'truck.min.js'), p.join(path, name, 'dist', 'truck.min.js'), noop);
      ncp(p.join(__dirname, 'dist', 'truck.min.js.map'), p.join(path, name, 'dist', 'truck.min.js.map'), noop);

      // Create project type:
      switch(type) {
        case 'default':
          ncp(p.join(__dirname, 'src', 'cli-resources', 'html', 'defaults', 'default.html'), p.join(path, name, 'index.html'), noop);
          break;
        case 'navigation':
          ncp(p.join(__dirname, 'src', 'cli-resources', 'html', 'defaults', 'navigation.html'), p.join(path, name, 'index.html'), noop);
          break;
        case 'slideout':
          ncp(p.join(__dirname, 'src', 'cli-resources', 'html', 'defaults', 'slideout.html'), p.join(path, name, 'index.html'), noop);
          break;
        case 'tabbar':
          ncp(p.join(__dirname, 'src', 'cli-resources', 'html', 'defaults', 'tabbar.html'), p.join(path, name, 'index.html'), noop);
          ncp(p.join(__dirname, 'src', 'cli-resources', 'images'), p.join(path, name, 'images'), noop);
          break;
        default:
          ncp(p.join(__dirname, 'src', 'html', 'defaults', 'default.html'), p.join(path, name, 'index.html'), noop);
          break;
      }
    }
  }
  ncp(p.join(__dirname, 'src', 'typings'), p.join(path, name, 'typings'), noop);

  setTimeout(function() {
    replace({
      replace: /APP_NAME/g,
      with: name,
      files: [
        p.join(path, name, 'index.html'),
        p.join(path, name, 'package.json')
      ],
    });
  }, 80);

  setTimeout(function() {
    replace({
      replace: /OS_THEME/g,
      with: os,
      files: p.join(path, name, 'index.html')
    });
  }, 150);

  console.log("We're done. Go check out your app project.");
}

function createXcodeProject() {
  if (os.toLowerCase() === 'ios') {
    console.log('Creating Xcode project for iOS');
    mkdirp(p.join(path, name), noop);
    mkdirp(p.join(path, name, '/', name + '.xcodeproj'), noop);
    mkdirp(p.join(path, name, '/', name + '.xcodeproj/project.xcworkspace'), noop);

    mkdirp(p.join(path, name, '/', name, '/', '/Base.lproj/'), noop);

    // Create Swift files and Info.plist
    writefile(p.join(path, name, '/', name, '/AppDelegate.swift'), ios_templates.appDelegate, noop);
    writefile(p.join(path, name, '/', name, '/ViewController.swift'), ios_templates.viewController, noop);
    writefile(p.join(path, name, '/', name, '/Info.plist'), ios_templates.infoPlist, noop);

    // Create Base.lproj files: ios_templates.launchScreen, noop);
    writefile(p.join(path, name, '/', name, '/Base.lproj/Main.storyboard'), ios_templates.mainStoryboard, noop);

    // Create AppIcon Contents file:
    if (icons) {
      ncp(icons, p.join(path, name, '/', name, '/Images.xcassets/'), noop);

    } else {
      ncp(__dirname + '/src/hybrid-resources/ios/icons/', p.join(path, name, '/', name, '/Images.xcassets/'), noop);
    }
    // Write JSON files for icons and launch images:
    writefile(p.join(path, name, '/', name, '/Images.xcassets/AppIcon.appiconset/Contents.json'), ios_templates.appiconset, noop);
    writefile(p.join(path, name, '/', name, '/Images.xcassets/iTunesArtwork.imageset/Contents.json'), ios_templates.itunesartwork, noop);
    writefile(p.join(path, name, '/', name, '/Images.xcassets/LaunchImage.launchimage/Contents.json'), ios_templates.launchimages, noop);

    // Create xcuserdata files:
    writefile(p.join(path, name, '/', name + '.xcodeproj','xcuserdata','xcschemes', name, '.xcscheme'), ios_templates.xcscheme, noop);
    writefile(p.join(path, name, '/', name + '.xcodeproj/xcuserdata/xcschemes/xcschememanagement.plist'), ios_templates.xcschememanagement, noop);
    writefile(p.join(path, name, '/', name + '.xcodeproj/xcuserdata/contents.xcworkspacedata'), ios_templates.xcworkspacedata, noop);

    // Create pbxproj file:
    writefile(p.join(path, name, '/', name + '.xcodeproj/project.pbxproj'), ios_templates.pbxproj, noop);

    // Create the Website index file:
    writefile(p.join(path, name, 'Website', 'index.html'), ios_templates.html, noop);

    // Create tests:
    writefile(p.join(path, name, '/', name, 'Tests/', name, 'Tests.swift'), ios_templates.testsSwift, noop);
    writefile(p.join(path, name, '/', name, 'Tests/Info.plist'), ios_templates.testsPlist, noop);

    // Check to see if user provided
    // a path to a Web app:
    if (src) {
      ncp.limit = 16;
      ncp(src, p.join(path, name, '/Website/'), noop);
    } 
    console.log('The project was successfully created. You may now open it in Xcode.')
  } else if (os === 'android') {
    console.log('Creating for Android');
  }
}

function createAndroidProject() {
  mkdirp(p.join(path, name, 'gradle'), noop);
  var android = require(p.join(__dirname, 'src', 'hybrid-resources', 'android','templates/android.js'));
  var gradle = require(p.join(__dirname, 'src', 'hybrid-resources', 'android','templates/gradle.js'));
  
  // First level files:
  ncp(p.join(__dirname, 'src', 'hybrid-resources', 'android', 'gradle', 'build.gradle'), p.join(path, name,  'build.gradle'), noop);
  ncp(p.join(__dirname, 'hybrid-resources', 'android', 'gradle', 'gradle.properties'), p.join(path, name, 'gradle.properties'), noop);
  ncp(p.join(__dirname, 'src', 'hybrid-resources', 'android', 'gradle', 'gradlew'), p.join(path, name, 'gradlew'), noop);
  ncp(p.join(__dirname, 'src', 'hybrid-resources', 'android', 'gradle', 'gradlew.bat'), p.join(path, name, 'gradlew.bat'), noop);
  writefile(p.join(path, name,'local.properties'), gradle.local_properties, noop);
  ncp(p.join(__dirname, 'src', 'hybrid-resources', 'android', 'app', 'app.iml'), p.join(path, name,  name + '.iml'), noop);
  writefile(p.join(path, name, 'settings.gradle'), gradle.settings, noop);

  // Files in ./gradle:
  ncp(p.join(__dirname, 'src', 'hybrid-resources', 'android', 'gradle', 'gradle-wrapper.jar'), p.join(path, name, 'gradle', 'gradle-wrapper.jar'), noop);
  ncp(p.join(__dirname, 'src', 'hybrid-resources', 'android', 'gradle', 'gradle-wrapper.properties'), p.join(path, name, 'gradle', 'gradle-wrapper.properties'), noop);

  ncp(p.join(__dirname, 'src', 'hybrid-resources', 'android', 'gradle', 'gradlew'), p.join(path, name, 'gradle-wrapper.jar'), noop);
  ncp(p.join(__dirname, 'src', 'hybrid-resources', 'android', 'gradle', 'gradlew.bat'), p.join(path, name, 'gradle-wrapper.jar'), noop);
  ncp(p.join(__dirname, 'src', 'hybrid-resources', 'android', 'gradle', 'gradle.properties'), p.join(path, name, 'gradle.properties'), noop);
  ncp(p.join(__dirname, 'src', 'hybrid-resources', 'android', 'gradle', 'build.gradle'), p.join(path, name, 'build.gradle'), noop);

  // Files in ./app:
  writefile(p.join(path, name, 'app','proguard-rules.pro'), android.proguard_rules, noop);
  writefile(p.join(path, name, 'app','build.gradle'), gradle.build_gradle, noop);

  // Android Test file:
   writefile(p.join(path, name, 'app', 'src', 'androidTest', 'java', 'com', user.toLowerCase(), name.toLowerCase(), 'ApplicationTest.java'), android.app_src_androidTest, noop);

   // Android Manifest:
   writefile(p.join(path, name, 'app', 'src', 'main', 'AndroidManifest.xml'), android.android_manifest, noop);

   // Create "MainActivity" file:
   writefile(p.join(path, name, 'app', 'src', 'main', 'java', 'com', user.toLowerCase(), name.toLowerCase(), 'MainActivity.java'), android.main_activity, noop);

   // Copy out the resources (icons, etc.):

   if (icons) {
    cpr(icons, p.join(path, name, 'app', 'src', 'main', 'res'), noop);
   } else {
     ncp(p.join(__dirname, 'src', 'hybrid-resources', 'android', 'res', 'drawable-hdpi', 'ic_launcher.png'), p.join(path, name, 'app', 'src', 'main', 'res', 'drawable-hdpi', 'ic_launcher.png'), noop);
     ncp(p.join(__dirname, 'src', 'hybrid-resources', 'android', 'res', 'drawable-mdpi', 'ic_launcher.png'), p.join(path, name, 'app', 'src', 'main', 'res', 'drawable-mdpi', 'ic_launcher.png'), noop);
     ncp(p.join(__dirname, 'src', 'hybrid-resources', 'android', 'res', 'drawable-xhdpi', 'ic_launcher.png'), p.join(path, name, 'app', 'src', 'main', 'res', 'drawable-xhdpi', 'ic_launcher.png'), noop);
     ncp(p.join(__dirname, 'src', 'hybrid-resources', 'android', 'res', 'drawable-xxhdpi', 'ic_launcher.png'), p.join(path, name, 'app', 'src', 'main', 'res', 'drawable-xxhdpi', 'ic_launcher.png'), noop);
   }

   ncp(p.join(__dirname, 'src', 'hybrid-resources', 'android', 'res', 'layout', 'activity_main.xml'), p.join(path, name, 'app', 'src', 'main', 'res', 'layout', 'activity_main.xml'), noop);
   ncp(p.join(__dirname, 'src', 'hybrid-resources', 'android', 'res', 'menu', 'menu_main.xml'), p.join(path, name, 'app', 'src', 'main', 'res', 'menu', 'menu_main.xml'), noop);
   ncp(p.join(__dirname, 'src', 'hybrid-resources', 'android', 'res', 'values', 'dimens.xml'), p.join(path, name, 'app', 'src', 'main', 'res', 'values', 'dimens.xml'), noop);
   ncp(p.join(__dirname, 'src', 'hybrid-resources', 'android', 'res', 'values', 'styles.xml'), p.join(path, name, 'app', 'src', 'main', 'res', 'values', 'styles.xml'), noop);
   ncp(p.join(__dirname, 'src', 'hybrid-resources', 'android', 'res', 'values-w820dp', 'dimens.xml'), p.join(path, name, 'app', 'src', 'main', 'res', 'values-w820dp', 'dimens.xml'), noop);
   writefile(p.join(path, name, 'app', 'src', 'main', 'res', 'values', 'strings.xml'), android.strings, noop);

  // Copy Web assets to project:
  if (src) {
    ncp.limit = 16;
    ncp(src, p.join(path, name, 'app', 'src', 'main', 'assets'), noop);
  } else {
   // If no Web assets provided, output default Web page:
   ncp(p.join(__dirname, 'web', 'index.html'), p.join(path, name, 'app', 'src', 'main', 'assets', 'index.html'), noop);
  }
  console.log('The project was successfully created. You may now import it into Android Studio.');
}

// Create a hybrid app based on user input:
//=========================================
if (hybrid) {
  console.log('Gonna make a hybrid app!');
  if (!name) return;
  if (os === 'ios') {
    var ios_templates = require('./src/hybrid-resources/ios/ios-templates.js');
    console.log('Creating an iOS hybrid app for Xcode.');
    // console.log(ios_templates.viewController);
    createXcodeProject();

  } else if (os === 'android') {
    console.log('Creating an Android hybrid app for Android Studio.');
    var android_templates = require('./src/hybrid-resources/android/templates/android.js');
    // console.log(android_templates.android_manifest)
    createAndroidProject();

  }
  return;
}
// Output all examples to desktop:
if (examples) {
  console.log('Outputting all examples to the Desktop. Look for the folder "truckjs-examples" on your desktop.');
  ncp.limit = 16;
  mkdirp(p.join(homedir, 'Desktop', 'TruckJS-examples'), noop);
  ncp('./examples', p.join(homedir, 'Desktop', 'truckjs-examples', 'examples'), noop);
  ncp('./examples-rtl', p.join(homedir, 'Desktop', 'TruckJS-examples', 'examples-rtl'), noop);
} else {
  // No project name provided:
  if (!name) {
    console.log('Please provide a name for the project using "--name" or "-n": truckjs -n foobar.');
    return;
  } else {
    // Create a project:
    createProject();
  }
}
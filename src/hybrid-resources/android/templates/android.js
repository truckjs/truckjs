var argv = require('yargs').argv;
var user = argv.user || argv.u || 'FooUser';
var name = argv.name || argv.n;
var os = require("os");
var platform = os.platform();
var progardPath;
if (platform === 'win32') {
  progardPath = 'C:\\Users\\' + process.env.USERNAME  + '\\AppData\\Local\\Android\\sdk\\/tools/proguard/proguard-android.txt';
} else if (platform === 'darwin') {
  progardPath = '/Users/' + process.env.USER + '/Library/Android/sdk/tools/proguard/proguard-android.txt';
}


exports.app_main_activity = 'package com.' + user.toLowerCase() + '.' + name.toLowerCase() + ';\n\
\n\
//import android.support.v7.app.ActionBarActivity;\n\
import android.app.Activity;\n\
import android.os.Bundle;\n\
import android.view.Menu;\n\
import android.view.MenuItem;\n\
import android.view.View;\n\
import android.view.Window;\n\
import android.view.WindowManager;\n\
import android.webkit.*;\n\
\n\
\n\
public class MainActivity extends Activity {\n\
\n\
    @Override\n\
    protected void onCreate(Bundle savedInstanceState) {\n\
        super.onCreate(savedInstanceState);\n\
        setContentView(R.layout.activity_main);\n\
\n\
        //requestWindowFeature(Window.FEATURE_NO_TITLE);\n\
        getWindow().setFlags(WindowManager.LayoutParams.FLAG_FULLSCREEN, WindowManager.LayoutParams.FLAG_FULLSCREEN);\n\
\n\
      /* Find WebView element by its id*/\n\
        WebView webView = (WebView) findViewById(R.id.webView);\n\
        webView.setWebChromeClient(new WebChromeClient());\n\
\n\
        /* Create new settings for our WebView element */\n\
        WebSettings webSettings = webView.getSettings();\n\
\n\
        /* Enable JavaScript */\n\
        webSettings.setJavaScriptEnabled(true);\n\
\n\
        /* Enable localStorage */\n\
        webSettings.setDomStorageEnabled(true);\n\
\n\
        /* Set scrollbars to be inside the app */\n\
        webView.setScrollBarStyle(View.SCROLLBARS_INSIDE_OVERLAY);\n\
\n\
        /* Define path to your local Web assets */\n\
        /* Using the name "android_asset" means that\n\
        the system will look for a file named "assets"\n\
        at app/src/main, the same fold this file is in. */\n\
        webView.loadUrl("file:///android_asset/index.html");\n\
    }\n\
\n\
}';


exports.proguard_rules = '# Add project specific ProGuard rules here.\n\
# By default, the flags in this file are appended to flags specified\n\
# in ' + progardPath + '\n\
# You can edit the include path and order by changing the proguardFiles\n\
# directive in build.gradle.\n\
#\n\
# For more details, see\n\
#   http://developer.android.com/guide/developing/tools/proguard.html\n\
\n\
# Add any project specific keep options here:\n\
\n\
# If your project uses WebView with JS, uncomment the following\n\
# and specify the fully qualified class name to the JavaScript interface\n\
# class:\n\
#-keepclassmembers class fqcn.of.javascript.interface.for.webview {\n\
#   public *;\n\
#}';


exports.app_src_androidTest = 'package com.' + user.toLowerCase() + '.' + name.toLowerCase() + ';\n\
\n\
import android.app.Application;\n\
import android.test.ApplicationTestCase;\n\
\n\
/**\n\
 * <a href="http://d.android.com/tools/testing/testing_android.html">Testing Fundamentals</a>\n\
 */\n\
public class ApplicationTest extends ApplicationTestCase<Application> {\n\
    public ApplicationTest() {\n\
        super(Application.class);\n\
    }\n\
}';

exports.values_strings = '<?xml version="1.0" encoding="utf-8"?>\n\
<resources>\n\
\n\
    <string name="app_name">' + name + '</string>\n\
    <string name="hello_world">Hello world!</string>\n\
    <string name="action_settings">Settings</string>\n\
\n\
</resources>';


exports.android_manifest = '<?xml version="1.0" encoding="utf-8"?>\n\
<manifest xmlns:android="http://schemas.android.com/apk/res/android"\n\
    package="com.' + user.toLowerCase() + '.' + name.toLowerCase() + '" >\n\
\n\
    <application\n\
        android:allowBackup="true"\n\
        android:icon="@drawable/ic_launcher"\n\
        android:label="' + name + '"\n\
        android:theme="@style/AppTheme" >\n\
        <activity\n\
            android:name=".MainActivity"\n\
            android:label="' + name + '" >\n\
            <intent-filter>\n\
                <action android:name="android.intent.action.MAIN" />\n\
\n\
                <category android:name="android.intent.category.LAUNCHER" />\n\
            </intent-filter>\n\
        </activity>\n\
    </application>\n\
    <uses-permission android:name="android.permission.INTERNET" />\n\
\n\
</manifest>';


exports.main_activity = 'package com.' + user.toLowerCase() + '.' + name.toLowerCase() + ';\n\
\n\
//import android.support.v7.app.ActionBarActivity;\n\
import android.app.Activity;\n\
import android.os.Bundle;\n\
import android.view.Menu;\n\
import android.view.MenuItem;\n\
import android.view.View;\n\
import android.view.Window;\n\
import android.view.WindowManager;\n\
import android.webkit.*;\n\
\n\
\n\
public class MainActivity extends Activity {\n\
\n\
    @Override\n\
    protected void onCreate(Bundle savedInstanceState) {\n\
        super.onCreate(savedInstanceState);\n\
        setContentView(R.layout.activity_main);\n\
\n\
        //requestWindowFeature(Window.FEATURE_NO_TITLE);\n\
        getWindow().setFlags(WindowManager.LayoutParams.FLAG_FULLSCREEN, WindowManager.LayoutParams.FLAG_FULLSCREEN);\n\
\n\
      /* Find WebView element by its id*/\n\
        WebView webView = (WebView) findViewById(R.id.webView);\n\
        webView.setWebChromeClient(new WebChromeClient());\n\
\n\
        /* Create new settings for our WebView element */\n\
        WebSettings webSettings = webView.getSettings();\n\
\n\
        /* Enable JavaScript */\n\
        webSettings.setJavaScriptEnabled(true);\n\
\n\
        /* Enable localStorage */\n\
        webSettings.setDomStorageEnabled(true);\n\
\n\
        /* Set scrollbars to be inside the app */\n\
        webView.setScrollBarStyle(View.SCROLLBARS_INSIDE_OVERLAY);\n\
\n\
        /* Define path to your local Web assets */\n\
        /* Using the name "android_asset" means that\n\
        the system will look for a file named "assets"\n\
        at app/src/main, the same fold this file is in. */\n\
        webView.loadUrl("file:///android_asset/index.html");\n\
    }\n\
\n\
}';


exports.strings = '<?xml version="1.0" encoding="utf-8"?>\n\
<resources>\n\
\n\
    <string name="app_name">' + name + '</string>\n\
    <string name="hello_world">Hello world!</string>\n\
    <string name="action_settings">Settings</string>\n\
\n\
</resources>';

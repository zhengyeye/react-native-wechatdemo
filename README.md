# react-native-wechatdemo
第一个使用react-native创建起来的微信分享的项目。
新建项目：
react-native init 项目名称;
然后按照提示运行项目。
主要关注点：
配置react-native-wechat的Android或者ios文件：
Android：https://github.com/yorkie/react-native-wechat/blob/master/docs/build-setup-android.md
IOS：https://github.com/yorkie/react-native-wechat/blob/master/docs/build-setup-ios.md；
配置好之后，需要重新卸载app再测试：为了使刚才的配置有效。
重点：
有时候会报类似于“java.io.IOException: Could not delete path 'F:\xxxxxxxxxxxxxxxxxxxxx”，这样的话：
cd android && gradlew clean
接着：react-native run-android。
至此，基本上就可以使用react-native进行微信分享了。
      

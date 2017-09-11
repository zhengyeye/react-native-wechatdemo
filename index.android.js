/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
  ToastAndroid,
} from 'react-native';

var WeChat=require('react-native-wechat');
class CustomButton extends Component {
  render() {
    return (
      <TouchableHighlight
        style={styles.button}
        underlayColor="#a5a5a5"
        onPress={this.props.onPress}>
        <Text style={styles.buttonText}>{this.props.text}</Text>
      </TouchableHighlight>
    );
  }
}

export default class wechatdemo extends Component {
  constructor(props) {
    super(props);  
    //应用注册
   WeChat.registerApp('wx5b3e565f96159269');
}
  render() {
    return (
      <View style={{margin:20}}>
        <Text style={styles.welcome}>
            微信好友/朋友圈分享实例
        </Text>
        <CustomButton text='微信好友分享-文本8'
          onPress={() => {
                  WeChat.isWXAppInstalled()
                    .then((isInstalled) => {
                      if (isInstalled) {
                        WeChat.shareToSession({type: 'text', description: '测试微信好友分享文本!'})
                        .catch((error) => {
                          ToastAndroid.show(error.message, ToastAndroid.SHORT);
                        });
                      } else {
                        ToastAndroid.show("没有安装微信软件，请您安装微信之后再试", ToastAndroid.SHORT);
                      }
                    });
              }}
        />
        <CustomButton text='微信好友分享-链接'
          onPress={() => {
                  WeChat.isWXAppInstalled()
                    .then((isInstalled) => {
                      if (isInstalled) {
                        WeChat.shareToSession({
                          title:'微信好友测试链接',
                          description: 'zheng小叶的分享',
                          thumbImage: '//upload.jianshu.io/users/upload_avatars/4106836/31a92241-30ea-47c7-ae24-9b8958433011.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/240/h/240',
                          type: 'news',
                          webpageUrl: 'http://www.jianshu.com/p/89ec01242e79'
                        })
                        .catch((error) => {
                          ToastShort(error.message);
                        });
                      } else {
                        ToastShort('没有安装微信软件，请您安装微信之后再试');
                      }
                    });
              }}
        />
        <CustomButton text='微信朋友圈分享-文本'
          onPress={() => {
                  WeChat.isWXAppInstalled()
                    .then((isInstalled) => {
                      if (isInstalled) {
                        WeChat.shareToTimeline({type: 'text', description: '测试微信朋友圈分享文本（zheng小叶的分享）'})
                        .catch((error) => {
                          ToastShort(error.message);
                        });
                      } else {
                        ToastShort('没有安装微信软件，请您安装微信之后再试');
                      }
                    });
              }}
        />
        <CustomButton text='微信朋友圈分享-链接'
          onPress={() => {
                  WeChat.isWXAppInstalled()
                    .then((isInstalled) => {
                      if (isInstalled) {
                        WeChat.shareToTimeline({
                          title:'微信朋友圈测试链接',
                          description: 'zheng小叶的分享',
                          thumbImage: '//upload.jianshu.io/users/upload_avatars/4106836/31a92241-30ea-47c7-ae24-9b8958433011.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/240/h/240',
                          type: 'news',
                          webpageUrl: 'http://www.jianshu.com/p/89ec01242e79'
                        })
                        .catch((error) => {
                          ToastShort(error.message);
                        });
                      } else {
                        ToastShort('没有安装微信软件，请您安装微信之后再试');
                      }
                    });
              }}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  button: {
    margin:5,
    backgroundColor: 'white',
    padding: 15,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: '#cdcdcd',
  }, 
});

AppRegistry.registerComponent('wechatdemo', () => wechatdemo);

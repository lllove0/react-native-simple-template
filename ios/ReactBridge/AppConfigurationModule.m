//
//  AppConfigurationModule.m
//  prometheus
//
//  Created by Mike on 20/04/2018.
//  Copyright © 2018 Facebook. All rights reserved.
//

#import "AppConfigurationModule.h"
#import <React/RCTConvert.h>
#import <React/RCTEventDispatcher.h>

@implementation AppConfigurationModule

RCT_EXPORT_MODULE();

- (NSDictionary *)constantsToExport {
    AppConfigurationModule *module = [AppConfigurationModule sharedInstance];
    return @{@"apiServer":module.apiServer,
             @"channel":module.channelId,
             @"umengAppKey":module.umengAppKey,
             @"jpushAppKey":module.jpushAppKey,
             @"codePushKey":module.codePushKey,
             @"codePushServerURL":module.codePushServerURL,
             @"socialWechatAppId":module.socialWechatAppId,
             @"socialWechatAppSecret":module.socialWechatAppSecret,
             @"socialQQAppId":module.socialQQAppId,
             @"socialQQAppSecret":module.socialQQAppSecret,
             @"socialQQAppCallback":module.socialQQAppCallback,
             @"socialSinaWeiboAppId":module.socialSinaWeiboAppId,
             @"socialSinaWeiboAppSecret":module.socialSinaWeiboAppSecret,
             @"socialSinaWeiboAppCallback":module.socialSinaWeiboAppCallback,
             @"deviceModel":@"", // @"iPhone10,3" -> @"iPhone X (CDMA)"  @"iPhone10,6" -> @"iPhone X (GSM)"
             @"signKey": module.signKey
             };
}

+ (instancetype)sharedInstance {
    static dispatch_once_t onceToken;
    static AppConfigurationModule *module;
    dispatch_once(&onceToken, ^{
        module = [[AppConfigurationModule alloc] init];
    });
    return module;
}

- (instancetype)init
{
    self = [super init];
    if (self) {
#ifdef DEBUG
        self.apiServer   = @"";
        self.channelId     = @"";
        self.umengAppKey = @"";
        self.jpushAppKey = @"";
        
        self.codePushKey        = @"";
        self.codePushServerURL  = @"http://api.codepush.cc/";
        self.codePushAppVersion = @"1.0.0";
        
        self.socialWechatAppId     = @"";
        self.socialWechatAppSecret = @"";
        
        self.socialQQAppId       = @"";
        self.socialQQAppSecret   = @"";
        self.socialQQAppCallback = @"";
        
        self.socialSinaWeiboAppId       = @"";
        self.socialSinaWeiboAppSecret   = @"";
        self.socialSinaWeiboAppCallback = @"";
        
        self.signKey = @"";
#else
        self.apiServer   = @"todo-apiServer";
        self.channelId     = @"todo-channel";
        self.umengAppKey = @"todo-umengAppKey";
        self.jpushAppKey = @"todo-jpushAppKey";
        
        self.codePushKey        = @"todo-codePushKey";
        self.codePushServerURL  = @"todo-codePushServerURL";
        self.codePushAppVersion = @"1.0.0";
        
        self.socialWechatAppId     = @"todo-socialWechatAppId";
        self.socialWechatAppSecret = @"todo-socialWechatAppSecret";
        
        self.socialQQAppId       = @"todo-socialQQAppId";
        self.socialQQAppSecret   = @"todo-socialQQAppSecret";
        self.socialQQAppCallback = @"todo-socialQQAppCallback";
        
        self.socialSinaWeiboAppId       = @"todo-socialSinaWeiboAppId";
        self.socialSinaWeiboAppSecret   = @"todo-socialSinaWeiboAppSecret";
        self.socialSinaWeiboAppCallback = @"todo-socialSinaWeiboAppCallback";
        
        self.signKey = @"todo-signKey";
#endif
    }
    return self;
}

@end

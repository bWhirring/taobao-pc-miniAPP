package com.taobao.miniapp;

import com.taobao.miniapp.function.anotation.RequestHandler;
import com.taobao.miniapp.function.anotation.NotNeedLogin;

@RequestHandler("activityManage.")
public class ActivityManageController {
    @NotNeedLogin
    @RequestHandler("hello")
    public String hello(){
        return "hello miniapp";
    }

    @RequestHandler("activityList")
    public String activityList(){
        return "hello activityList";
    }

    @NotNeedLogin
    @RequestHandler("activityDel")
    public String activityDel(){
        return "hello activityDel";
    }

    @NotNeedLogin
    @RequestHandler("activityEdit")
    public String activityEdit(){
        return "hello activityEdit";
    }

    @NotNeedLogin
    @RequestHandler("activitySave")
    public String activitySave(){
        return "hello activitySave";
    }

    @NotNeedLogin
    @RequestHandler("findGroupChat")
    public String findGroupChat(){
        return "hello findGroupChat";
    }

    @NotNeedLogin
    @RequestHandler("findPrize")
    public String findPrize(){
        return "hello findPrize";
    }

    @NotNeedLogin
    @RequestHandler("uploadImage")
    public String uploadImage(){
        return "hello uploadImage";
    }

    @NotNeedLogin
    @RequestHandler("findGoods")
    public String findGoods(){
        return "hello findGoods";
    }


}
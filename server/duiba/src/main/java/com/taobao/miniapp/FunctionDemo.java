package com.taobao.miniapp;

import com.taobao.miniapp.function.anotation.RequestHandler;
import com.taobao.miniapp.function.anotation.NotNeedLogin;

@RequestHandler("demo.")
public class FunctionDemo {
    @NotNeedLogin
    @RequestHandler("hello")
    public String hello(){
        return "hello miniapp";
    }
}
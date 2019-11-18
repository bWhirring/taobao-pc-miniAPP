package com.taobao.miniapp;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication(scanBasePackages = {"com.taobao.miniapp"})
public class FunctionApplication {
    public static void main(String[] args) {
        SpringApplication.run(FunctionApplication.class, args);
    }
}

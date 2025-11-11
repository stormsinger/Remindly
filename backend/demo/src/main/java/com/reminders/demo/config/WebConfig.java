package com.reminders.demo.config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@Configuration
public class WebConfig {

    @Bean
    public WebMvcConfigurer corsConfigurer() {
        return new WebMvcConfigurer() {
            @Override
            public void addCorsMappings(CorsRegistry registry) {
                registry.addMapping("/**") // leidžia visiems endpoint'ams
                        .allowedOrigins("http://localhost:5173") // leidžia React dev serveriui
                        .allowedMethods("GET", "POST", "PUT", "DELETE") // leidžiami HTTP metodai
                        .allowedHeaders("*"); // leidžiami visi headeriai
            }
        };
    }
}
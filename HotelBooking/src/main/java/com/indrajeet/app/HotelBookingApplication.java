package com.indrajeet.app;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.domain.EntityScan;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@SpringBootApplication
@ComponentScan(basePackages= {"com.indrajeet.controllers","com.indrajeet.services"})
@EntityScan(basePackages="com.indrajeet.entities")
@EnableJpaRepositories(basePackages= {"com.indrajeet.repository"})
@CrossOrigin
public class HotelBookingApplication implements WebMvcConfigurer{

	public static void main(String[] args) {
		SpringApplication.run(HotelBookingApplication.class, args);
	}
	@Override
	public void addCorsMappings(CorsRegistry registry) {
        registry.addMapping("/**");
    }
}

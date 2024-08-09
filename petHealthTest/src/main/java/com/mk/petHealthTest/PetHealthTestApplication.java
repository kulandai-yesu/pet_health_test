package com.mk.petHealthTest;

import com.mk.petHealthTest.model.Role;
import com.mk.petHealthTest.repository.RoleRepository;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

import java.time.LocalDateTime;

@SpringBootApplication
public class PetHealthTestApplication {

    public static void main(String[] args) {
        SpringApplication.run(PetHealthTestApplication.class, args);
    }

    @Bean
    public CommandLineRunner runner(RoleRepository roleRepository) {
        return args -> {
            if (roleRepository.findByName("USER").isEmpty()) {
                roleRepository.save(Role.builder().name("USER").createdDate(LocalDateTime.now()).build());
            }
        };
    }
}

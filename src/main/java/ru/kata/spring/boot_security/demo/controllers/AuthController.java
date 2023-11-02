package ru.kata.spring.boot_security.demo.controllers;

import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import ru.kata.spring.boot_security.demo.models.User;

@Controller
public class AuthController {

    @GetMapping("/admin")
    public String showAllUser(Model model) {
        model.addAttribute("newUser", new User());
        return "admin-panel";
    }

    @GetMapping("/user")
    public String showOneUser() {
        return "user-panel";
    }

    @GetMapping("/login")
    public String loginPage() {
        return "login";
    }
}

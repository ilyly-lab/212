package ru.kata.spring.boot_security.demo.services;

import org.springframework.transaction.annotation.Transactional;
import ru.kata.spring.boot_security.demo.models.User;

import java.util.List;

public interface UserService {
    User findByUserName(String name);
    List<User> getAllUsers();
    User getUserBiId(int id);
    void saveUser(User user);
    void updateUser( User user, int id);
    void deleteUser(int id);

}

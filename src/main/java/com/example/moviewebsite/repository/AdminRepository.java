package com.example.moviewebsite.repository;

import com.example.moviewebsite.model.Admin;
import org.springframework.data.jpa.repository.JpaRepository;

public interface AdminRepository extends JpaRepository<Admin, Long> {
}

package com.vinod.onlinebankingsystem.repo;

import org.springframework.data.jpa.repository.JpaRepository;
import com.vinod.onlinebankingsystem.model.Customer;

public interface CustomerRepository
        extends JpaRepository<Customer, Long> {
}
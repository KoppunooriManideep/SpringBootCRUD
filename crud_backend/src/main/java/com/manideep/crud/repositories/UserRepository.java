package com.manideep.crud.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.manideep.crud.models.User;

@Repository
public interface UserRepository extends JpaRepository<User, Long>{

}

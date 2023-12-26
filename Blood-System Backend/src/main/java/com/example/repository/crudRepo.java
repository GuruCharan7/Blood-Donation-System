package com.example.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.model.donorDetails;

public interface crudRepo extends JpaRepository<donorDetails, Integer>{

}

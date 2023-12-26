package com.example.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.example.model.Donor;

@Repository
public interface loginRepo extends JpaRepository<Donor, Integer>{
	
	@Query("select count(d) from Donor d where d.email = ?1")
	public List<Integer> emailExists(String email);
	
	@Query("select password from Donor d where d.email = ?1")
	public String passwordExists(String email);

}

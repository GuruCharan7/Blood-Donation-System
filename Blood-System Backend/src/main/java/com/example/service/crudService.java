package com.example.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.model.donorDetails;
import com.example.repository.crudRepo;

@Service
public class crudService {
	
	@Autowired
	private crudRepo crud;
	
	public donorDetails create(donorDetails d) {
		
		return crud.save(d);
	}
	
	public List<donorDetails> readAll(){
		
		return crud.findAll();
	}
	
	public Optional<donorDetails> read(int id){
		
		return crud.findById(id);
	}
	
	public donorDetails update(donorDetails d,int id) {
		
		donorDetails updateDonor = crud.findById(id).get();
		if(updateDonor == null) {
			return updateDonor;
		}
		else {
			updateDonor.setUsername(d.getUsername());
			updateDonor.setAge(d.getAge());
			updateDonor.setDisease(d.getDisease());
			updateDonor.setBlood_group(d.getBlood_group());
		}
		return crud.save(updateDonor);
	}

	public void delete(int id) {
		
		crud.deleteById(id);
	}
}

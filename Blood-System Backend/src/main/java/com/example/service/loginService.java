package com.example.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.model.Donor;
import com.example.repository.loginRepo;

@Service
public class loginService {
	
	@Autowired
	private loginRepo login;
	
	public boolean signup(Donor d) {
		
		List<Integer> count = login.emailExists(d.getEmail());
		if(count.get(0) == 0) {
			
			login.save(d);
			return true;
		}
		else return false;
	}
	
	public boolean Login(String email,String password) {
		
		List<Integer> count = login.emailExists(email);
		String orgPassword = login.passwordExists(email);
		
		if(count.get(0) == 1) {
			if(orgPassword.equals(password)) {
				return true;
			}
			else {
				return false;
			}
		}
		else {
			return false;
		}
	}

}

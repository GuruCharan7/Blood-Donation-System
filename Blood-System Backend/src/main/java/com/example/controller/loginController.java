package com.example.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

import com.example.model.Donor;
import com.example.service.loginService;

import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.responses.ApiResponse;
import io.swagger.v3.oas.annotations.responses.ApiResponses;

@RestController
@CrossOrigin
@RequestMapping("/api/donors")
public class loginController {
	
	@Autowired
	private loginService service;
	
	@Operation(summary = "Creates a new Donor")
	@ApiResponses(value = {@ApiResponse(responseCode = "201",description = "Donor created successfully"),
			     @ApiResponse(responseCode = "400",description = "Donor already Exist")})
	@ResponseStatus(HttpStatus.CREATED)
	@PostMapping(value = "/signup", consumes = "application/json")
	public boolean signup(@RequestBody Donor d) {
		
//		System.out.println(d.getEmail());
		return service.signup(d);
		
	}
	
	@Operation(summary = "Donor Logging In")
	@ApiResponses(value = {@ApiResponse(responseCode = "200",description = "Donor Logged In successfully"),
			     @ApiResponse(responseCode = "404",description = "Invalid Credentials")})
	@ResponseStatus(HttpStatus.CREATED)
	@GetMapping(value = "/login")
	public boolean login(@RequestParam String email,@RequestParam String password ) {
		
		return service.Login(email,password);
		
	}

}

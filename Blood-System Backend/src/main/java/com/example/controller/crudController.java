package com.example.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

import com.example.model.donorDetails;
import com.example.service.crudService;
import com.fasterxml.jackson.core.JsonProcessingException;

import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.responses.ApiResponse;
import io.swagger.v3.oas.annotations.responses.ApiResponses;

@CrossOrigin
@RestController
@RequestMapping("/api/donors")
public class crudController {
	
	@Autowired
	private crudService service;
	
	@Operation(summary = "Creates a new Donor")
	@ApiResponses(value = {@ApiResponse(responseCode = "201",description = "Donor created successfully"),
			     @ApiResponse(responseCode = "400",description = "Donor is invalid")})
	@ResponseStatus(HttpStatus.CREATED)
	@PostMapping(produces = "application/json",consumes = "application/json",value = "/post")
	public ResponseEntity<donorDetails> create(@RequestBody donorDetails d){
		
		//System.out.println(d);
		donorDetails createDonor = service.create(d);
		return ResponseEntity.ok(createDonor);
	}
	
	@GetMapping("/getAll")
	public List<donorDetails> readAll(){
		
		return service.readAll();
	}
	
	@Operation(summary = "Get an Donor with id")
	@ApiResponses(value = {@ApiResponse(responseCode = "200",description = "Getting Donor successfully"),
	              @ApiResponse(responseCode = "404",description = "Invalid Credentials")})
	@GetMapping(produces = "application/json",value = "/get/id={id}")
	public ResponseEntity<donorDetails> read(@PathVariable int id){
		
		Optional<donorDetails> createdDonor = service.read(id);
		return ResponseEntity.ok(createdDonor.get());
	}
	
	@Operation(summary = "Update an Donor with id")
	@ApiResponses(value = {@ApiResponse(responseCode = "200",description = "Donor updated successfully"),
			              @ApiResponse(responseCode = "400",description = "Invalid Credentials"),
			              @ApiResponse(responseCode = "401",description = "Donor not found")})
	@PutMapping(produces = "application/json",consumes = "application/json",value = "/put/id={id}")
	public ResponseEntity<donorDetails> update(@RequestBody donorDetails d,@PathVariable("id") int id) throws JsonProcessingException{
		
		donorDetails updateDonor = service.update(d,id);
		return ResponseEntity.ok(updateDonor);
	}
	
	@Operation(summary = "Delete an Donor with id")
	@ApiResponses(value = {@ApiResponse(responseCode = "200", description = "Donor deleted successfully"),
			@ApiResponse(responseCode = "401", description = "Invalid Credentials"),
			@ApiResponse(responseCode = "404", description = "Donor not found")})
	@DeleteMapping(value = "/delete/{id}")
	public void delete(@PathVariable int id){
		
		service.delete(id);
	}

}

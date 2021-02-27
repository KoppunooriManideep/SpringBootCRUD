package com.manideep.crud.contollers;

import java.util.List;

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
import org.springframework.web.bind.annotation.RestController;

import com.manideep.crud.exceptions.ResourceNotFoundException;
import com.manideep.crud.models.User;
import com.manideep.crud.repositories.UserRepository;

@CrossOrigin(origins="*")
@RestController
@RequestMapping("/api")
public class UserController {
	
	@Autowired
	private UserRepository userrepository;
	
	//Get All Users
	@GetMapping("/users")
	public List<User> getAllUsers()
	{
		return userrepository.findAll();
	}
	
	//Get user by Id
	@GetMapping("/users/{id}")
	public ResponseEntity<User> getByUserId(@PathVariable long id)
	{
		User user=userrepository.findById(id).orElseThrow(() -> new ResourceNotFoundException("User doesn't exist with ID : "+id));
		return ResponseEntity.ok(user);
	}
	
	//Create User
	@PostMapping("/users")
	public User createUser(@RequestBody User user)
	{
		return userrepository.save(user);
	}
	
	
	//Delete User
	@PutMapping("/users/{id}")
	public ResponseEntity<User> updateUser(@PathVariable long id,@RequestBody User userDetails)
	{
		User user=userrepository.findById(id).orElseThrow(() -> new ResourceNotFoundException("User doesn't exist with ID : "+id));
		user.setName(userDetails.getName());
		user.setAge(userDetails.getAge());
		user.setSex(userDetails.getSex());
		user.setAddress(userDetails.getAddress());
		
		
		User updatedUser=userrepository.save(user);
		
		return new ResponseEntity<User>(updatedUser,HttpStatus.OK);
	}
	
	//
	@DeleteMapping("clients/{id}")
	public ResponseEntity<User> deleteUser(@PathVariable long id)
	{
		User user=userrepository.findById(id).orElseThrow(() -> new ResourceNotFoundException("Client doesn't exist with ID : "+id));
		userrepository.delete(user);
		return ResponseEntity.ok().build();
	}
}

package com.randomprogramming.todoapp.Controller;

import com.randomprogramming.todoapp.Entity.Todo;
import com.randomprogramming.todoapp.Service.TodoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class TodoController {
	@Autowired
	TodoService todoService;

	@CrossOrigin
	@GetMapping("/api/getalltodos")
	public List<Todo> getAllTodos(){
		return todoService.getAll();
	}

	@CrossOrigin
	@PostMapping("/api/addtodo")
	public void addTodo(@RequestBody String task){
		todoService.addTodo(task);
	}

	@CrossOrigin
	@PostMapping("/api/deletetodo")
	public void deleteTodo(@RequestBody int id){
		todoService.deleteTodo(id);
	}

	@CrossOrigin
	@PostMapping("/api/changecompleted")
	public void changeCompleted(@RequestBody int id){
		todoService.changeCompleted(id);
	}
}

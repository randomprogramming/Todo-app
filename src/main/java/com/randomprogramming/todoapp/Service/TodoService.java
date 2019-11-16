package com.randomprogramming.todoapp.Service;

import com.randomprogramming.todoapp.Entity.Todo;
import com.randomprogramming.todoapp.Repository.TodoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class TodoService {
	@Autowired
	TodoRepository todoRepository;

	public List<Todo> getAll(){
		List<Todo> allTodos = new ArrayList<>();
		todoRepository.findAll().forEach(todo -> allTodos.add(todo));
		return allTodos;
	}
	public void addTodo(String task){
		todoRepository.save(new Todo(task));
	}
	public void deleteTodo(int id){
		todoRepository.deleteById(id);
	}
	public void changeCompleted(int id){
		Todo temp = todoRepository.findFirstById(id);
		temp.setCompleted(!temp.isCompleted());
		todoRepository.save(temp);
	}
}

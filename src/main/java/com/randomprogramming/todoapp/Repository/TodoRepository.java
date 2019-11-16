package com.randomprogramming.todoapp.Repository;

import com.randomprogramming.todoapp.Entity.Todo;
import org.springframework.data.repository.CrudRepository;

public interface TodoRepository extends CrudRepository<Todo, Integer>{
	public Todo findFirstById(int id);
}

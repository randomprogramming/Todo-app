package com.randomprogramming.todoapp.Entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;

@Entity
public class Todo {
	@Column
	@Id
	@GeneratedValue
	private int id;

	@Column
	private String task;

	@Column
	private boolean completed;

	private Todo(){}

	public Todo(String task) {
		this.task = task;
		this.completed = false;
	}

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getTask() {
		return task;
	}

	public void setTask(String task) {
		this.task = task;
	}

	public boolean isCompleted() {
		return completed;
	}

	public void setCompleted(boolean completed) {
		this.completed = completed;
	}
}

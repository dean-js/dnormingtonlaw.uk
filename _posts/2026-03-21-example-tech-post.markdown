---
layout: post
title: "Example Tech Post: Building My First Web App"
date: 2026-03-19 10:00:00 +0000
categories: [projects, web-development]
tags: [javascript, html, css, beginner]
excerpt: "A step-by-step guide to my first web app project as a coding beginner."
---

# Introduction

Welcome to my first example blog post! This is a sample entry to demonstrate how blog posts work on this Jekyll site. As someone transitioning from law to computing, I'm excited to share my coding journey.

## What I Built

For this project, I created a simple to-do list web app using HTML, CSS, and JavaScript. It allows users to add, remove, and mark tasks as complete.

### Key Features

- Add new tasks
- Delete tasks
- Mark tasks as done
- Local storage to save tasks between sessions

## Code Overview

Here's a snippet of the JavaScript code I used:

```javascript
// Function to add a new task
function addTask() {
  const taskInput = document.getElementById("taskInput");
  const taskText = taskInput.value.trim();

  if (taskText !== "") {
    const taskList = document.getElementById("taskList");
    const li = document.createElement("li");
    li.innerHTML = `
      <span>${taskText}</span>
      <button onclick="deleteTask(this)">Delete</button>
    `;
    taskList.appendChild(li);
    taskInput.value = "";
    saveTasks();
  }
}

// Function to delete a task
function deleteTask(button) {
  button.parentElement.remove();
  saveTasks();
}

// Save tasks to local storage
function saveTasks() {
  const tasks = [];
  document.querySelectorAll("#taskList li span").forEach((span) => {
    tasks.push(span.textContent);
  });
  localStorage.setItem("tasks", JSON.stringify(tasks));
}
```

## Challenges Faced

As a beginner, I struggled with:

- Understanding DOM manipulation
- Implementing local storage
- Making the UI responsive

## What I Learned

This project taught me the basics of:

- JavaScript event handling
- Working with the browser's local storage API
- CSS for styling interactive elements

## Next Steps

I'm planning to enhance this app with:

- Drag-and-drop functionality
- Categories for tasks
- A more polished UI

Feel free to check out the [live demo](https://example.com/todo-app) or the [source code](https://github.com/dean-js/todo-app) on GitHub.

What are your thoughts on this project? I'd love to hear your feedback in the comments!

---

_This is just an example post. Edit the content, front matter, and filename as needed for your actual blog entries._

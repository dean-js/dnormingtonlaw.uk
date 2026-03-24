---
layout: post
title: "Building FocusTask: Building My First Web App - A Simple but effcient to do list app"
date: 2026-03-24 10:00:00 +0000
categories: [projects, web-development]
tags: [javascript, html, css, beginner, projects]
excerpt: "A personal nsight into building FocusTask - A to-do List application."
---

# Introduction

Welcome to my first project blog post

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

-
- Understanding DOM manipulation
- Implementing local storage
- Making the UI responsive and visuall correct

## What I Learned

This project taught me the basics of:

- JavaScript event handling - cta buttons for example this changing the behaviour of the page enabling these trigered through user interaction
- Working with the browser's local storage API - saving data types
- CSS for styling interactive elements - padding, buttons, spacing, fonts, colour hex

## Next Steps

I'm planning to enhance this app with:

- Drag-and-drop functionality
- Categories for tasks
- A more polished UI
- Add Personal / Work seperation for tasks to help users organise both aspects of their day
- Less Co-Pilot / AI use in projects overall - Note to self: increases Laziness and critical thinking.
- reading, understanding syntax
- understanding math behind code - grids, spacing this being more understanding od css / scss

Feel free to check out the [live demo](https://example.com/todo-app) or the [source code](https://github.com/dean-js/todo-app) on GitHub.

What are your thoughts on this project? I'd love to hear your feedback in the comments!

---

_This is just an example post. Edit the content, front matter, and filename as needed for your actual blog entries._

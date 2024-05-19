document.addEventListener("DOMContentLoaded", () => {
  const todoTitle = document.getElementById("title");
  const todoDesc = document.getElementById("desc");
  const todoList = document.querySelector(".todo-list");
  const form = document.getElementById("form");
  let isEditing = false;
  let editingTodo = null;

  const formValues = {
    title: "",
    desc: "",
  };

  const updateFormValues = (key, value) => {
    formValues[key] = value;
  };

  todoTitle.addEventListener("change", (event) => {
    updateFormValues("title", event.target.value);
  });

  todoDesc.addEventListener("change", (event) => {
    updateFormValues("desc", event.target.value);
  });

  form.addEventListener("submit", (event) => {
    event.preventDefault();
    if (inputValidation()) {
      if (isEditing) {
        updateTodoItem(
          editingTodo,
          formValues.title.trim(),
          formValues.desc.trim()
        );
        isEditing = false;
        editingTodo = null;
      } else {
        addTodoItem(formValues.title.trim(), formValues.desc.trim());
      }
      todoTitle.value = "";
      todoDesc.value = "";
      saveTodos();
    }
  });

  const addTodoItem = (title, desc) => {
    const todoContainer = document.createElement("li");
    todoContainer.classList.add("todo-container");

    todoContainer.innerHTML = `
    <div class="contain">
        <h4>${title}</h4>
        <p>
          ${desc}
        </p>
      </div>
      <div class="delete"><i class="fa-solid fa-trash"></i></div>
      <div class="edit"><i class="fa-solid fa-pen"></i></div>           
    `;

    const h4 = todoContainer.querySelector("h4");
    h4.addEventListener("click", () => {
      h4.classList.toggle("strike-throw");
    });

    todoContainer.querySelector(".delete").addEventListener("click", () => {
      todoContainer.remove();
      saveTodos();
    });

    todoContainer.querySelector(".edit").addEventListener("click", () => {
      editTodoItem(todoContainer, title, desc);
    });

    todoList.appendChild(todoContainer);
  };

  // todo save and get to the localStorage
  const loadTodos = () => {
    const todos = JSON.parse(localStorage.getItem("todos")) || [];
    todos.forEach((todo) => {
      addTodoItem(todo.title, todo.desc);
    });
  };

  // set todos to the localStorage
  const saveTodos = () => {
    const todos = Array.from(document.querySelectorAll(".todo-container")).map(
      (todo) => ({
        title: todo.querySelector("h4").innerText,
        desc: todo.querySelector("p").innerText,
      })
    );
    localStorage.setItem("todos", JSON.stringify(todos));
  };

  // Load todos on initial page load
  loadTodos();

  const updateTodoItem = (todoContainer, title, desc) => {
    const contain = todoContainer.querySelector(".contain");
    contain.querySelector("h4").innerText = title;
    contain.querySelector("p").innerText = desc;
    saveTodos();
  };

  const editTodoItem = (todoContainer, title, desc) => {
    todoTitle.value = title;
    todoDesc.value = desc;
    formValues.title = todoTitle;
    formValues.desc = todoDesc;
    isEditing = true;
    editingTodo = todoContainer;
  };

  const errorMessage = (element, message) => {
    const inputParent = element.parentElement;
    const displayError = inputParent.querySelector(".error");

    displayError.innerText = message;
    inputParent.classList.add("error");
  };

  const successMessage = (element, message) => {
    const inputParent = element.parentElement;
    const displayError = inputParent.querySelector(".error");

    displayError.innerText = "";
    inputParent.classList.remove("error");
  };

  const inputValidation = () => {
    const todoTitleValue = todoTitle.value.trim();
    const todoDescValue = todoDesc.value.trim();

    let isValid = true;

    if (todoTitleValue === "") {
      errorMessage(todoTitle, "Todo title is required");
      isValid = false;
    } else {
      successMessage(todoTitle);
      updateFormValues("title", todoTitleValue);
    }

    if (todoDescValue === "") {
      errorMessage(todoDesc, "Todo description is required");
      isValid = false;
    } else {
      successMessage(todoDesc);
      updateFormValues("desc", todoDescValue);
    }
    return isValid;
  };
});

const formData = {
    email: "",
    message: "",
  };
  
  const STORAGE_KEY = "feedback-form-state";
  const form = document.querySelector(".feedback-form");
  const emailInput = form.elements.email;
  const messageInput = form.elements.message;

  function saveToLocalStorage() {
    formData.email = emailInput.value.trim();
    formData.message = messageInput.value.trim();
    localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
  }

  function loadFromLocalStorage() {
    const savedData = localStorage.getItem(STORAGE_KEY);
    if (savedData) {
      const parsedData = JSON.parse(savedData);
      formData.email = parsedData.email || "";
      formData.message = parsedData.message || "";
      emailInput.value = formData.email;
      messageInput.value = formData.message;
    }
  }
  
  function handleInput() {
    saveToLocalStorage();
  }
  
  function handleSubmit(event) {
    event.preventDefault();
  
    formData.email = emailInput.value.trim();
    formData.message = messageInput.value.trim();
  
    if (!formData.email || !formData.message) {
      alert("Fill please all fields");
      return;
    }
  
    console.log(formData);
  
    formData.email = "";
    formData.message = "";
    localStorage.removeItem(STORAGE_KEY);
    form.reset();
  }
  
  form.addEventListener("input", handleInput);
  form.addEventListener("submit", handleSubmit);
  
  loadFromLocalStorage();
  
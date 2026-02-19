const form = document.querySelector("form");

form.addEventListener("submit", processForm);

function processForm(event) {
  event.preventDefault();
  clearErrors(event);
  validateUser(event);
}

function clearErrors() {
  // console.log('test')
  const setErrors = document.querySelectorAll(".form-error");
  setErrors.forEach((setError) => {
    setError.remove();
  });
}

function validateUser(event) {
  const fillableInputFields = document.querySelectorAll(".fill-input-field");
  const fillableInputValues = [];

  fillableInputFields.forEach((item) => {
    fillableInputValues.push(item.value);
  });

  const fillableInputFiltered = fillableInputValues.filter(
    (element) => element !== "",
  );

  if (fillableInputFiltered.length > 0) {
    clearForm(form);
    // console.log('not empty');
  } else {
    validateForm(event);
    // console.log('empty');
  }
}

function validateForm(event) {
  const fNameInput = form.elements["f-name"];
  const fNameValue = fNameInput.value.trim();

  // const lNameInput = form.elements["l-name"];
  // const lNameValue = lNameInput.value.trim();

  const emailInput = form.elements["email"];
  const emailValue = emailInput.value.trim();

  const phoneInput = form.elements["phone"];
  const phoneValue = phoneInput.value.trim();

  const messageInput = form.elements["message"];
  const messageValue = messageInput.value.trim();

  const formData = {
    fNameValue,
    // lNameValue,
    emailValue,
    phoneValue,
    messageValue,
  };

  let errorPosition;
  let validationStatus = true;

  if (fNameValue.length < 1) {
    errorPosition = fNameInput;
    addErrorMessage("You must enter a first name", errorPosition);
    validationStatus = false;
    // console.log('You must enter an email');
  }

  if (emailValue.length < 1) {
    errorPosition = emailInput;
    addErrorMessage("You must enter an email", errorPosition);
    validationStatus = false;
    // console.log('You must enter an email');
  } else {
    if (!emailValue.toString().includes("@")) {
      errorPosition = emailInput;
      addErrorMessage("Your email must include a @ symbol", errorPosition);
      validationStatus = false;
      // console.log('Your email must include a @ symbol');
    }

    if (!emailValue.includes(".")) {
      errorPosition = emailInput;
      addErrorMessage("Your email must include a . symbol", errorPosition);
      validationStatus = false;
      // console.log('Your email must include a . symbol');
    }
  }

  if (validationStatus) {
    sendData(formData);
  }
}

function addErrorMessage(errorMessage, errorPosition) {
  const errorTemplate = document.getElementById("form-error-template");
  const errorInstance = errorTemplate.content.cloneNode(true);

  errorInstance.lastElementChild.textContent = errorMessage;

  const parentElement = errorPosition.parentElement;

  parentElement.appendChild(errorInstance);
}

function clearForm(form) {
  form.reset();
}

function sendData(formData) {
  fetch("../backend/process.php", {
    method: "POST",
    header: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(formData),
  }); /*.then(function (response) {
        return response.text();
    }).then(function (data) {
        console.log(data);
    })*/
  clearForm(form);
  // confirmSubmission();
}

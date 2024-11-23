const output = document.getElementById("output");

document.getElementById("get-btn").addEventListener("click", async () => {
  // Get input values
  const name = document.getElementById("name").value;
  const age = document.getElementById("age").value;

  // Create the URL with query parameters
  const url = new URL("https://echo.zuplo.io/api");
  url.searchParams.append("name", name);
  url.searchParams.append("age", age);

  try {
    // Send GET request
    const response = await fetch(url.toString());

    // Check if response is successful
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    // Parse response body
    const data = await response.json();

    // Display response in output area
    document.getElementById("output").textContent = JSON.stringify(
      data,
      null,
      2
    );
  } catch (error) {
    // Handle any errors
    document.getElementById("output").textContent = `Error: ${error.message}`;
  }
});

document.getElementById("post-json-btn").addEventListener("click", async () => {
  // Get input values
  const name = document.getElementById("name").value;
  const age = document.getElementById("age").value;

  // Create request body as JSON
  const requestBody = {
    name: name,
    age: Number(age),
  };

  try {
    // Send POST request with JSON data
    const response = await fetch("https://echo.zuplo.io/api", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(requestBody),
    });

    // Check if response is successful
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    // Parse response body
    const data = await response.json();

    // Display response in output area
    document.getElementById("output").textContent = JSON.stringify(
      data,
      null,
      2
    );
  } catch (error) {
    // Handle any errors
    document.getElementById("output").textContent = `Error: ${error.message}`;
  }
});

document.getElementById("post-form-btn").addEventListener("click", async () => {
  const name = document.getElementById("name").value;
  const age = document.getElementById("age").value;

  const formData = new URLSearchParams();
  formData.append("name", name);
  formData.append("age", age);

  try {
    const response = await fetch("https://echo.zuplo.io/api", {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: formData,
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();

    document.getElementById("output").textContent = JSON.stringify(
      data,
      null,
      2
    );
  } catch (error) {
    document.getElementById("output").textContent = `Error: ${error.message}`;
  }
});

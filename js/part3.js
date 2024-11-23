const output1 = document.getElementById("output-1");
const output2 = document.getElementById("output-2");

document.getElementById("api-1-btn").addEventListener("click", async () => {
  try {
    const response = await fetch("https://reqres.in/api/users?page=1");
    document.querySelector(".card:first-child h2").textContent =
      "API #1: ReqRes Users List";
    document.querySelector(".card:first-child h3:first-of-type").textContent =
      "URL: https://reqres.in/api/users?page=1";
    document.querySelector(".card:first-child h3:last-of-type").textContent =
      "Method: GET";

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    if (response.headers.get("content-length") === "0") {
      output1.textContent = `Status Code: ${response.status}`;
      return;
    }

    const data = await response.json();
    output1.textContent = JSON.stringify(data, null, 2);
  } catch (error) {
    output1.textContent = `Error: ${error.message}`;
  }
});

document.getElementById("api-2-btn").addEventListener("click", async () => {
  try {
    const postData = {
      name: "morpheus",
      job: "leader",
    };

    const response = await fetch("https://reqres.in/api/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(postData),
    });

    document.querySelector(".card:last-child h2").textContent =
      "API #2: ReqRes Create User";
    document.querySelector(".card:last-child h3:first-of-type").textContent =
      "URL: https://reqres.in/api/users";
    document.querySelector(".card:last-child h3:last-of-type").textContent =
      "Method: POST";

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    if (response.headers.get("content-length") === "0") {
      output2.textContent = `Status Code: ${response.status}`;
      return;
    }

    const data = await response.json();
    output2.textContent = JSON.stringify(data, null, 2);
  } catch (error) {
    output2.textContent = `Error: ${error.message}`;
  }
});

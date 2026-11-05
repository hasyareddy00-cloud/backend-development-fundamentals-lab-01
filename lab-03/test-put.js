
async function testPut() {
  try {
    const response = await fetch("http://localhost:3000/books/1/", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        title: "The Alchemist Updated",
        author: "Paulo Coelho",
        price: 300,
        pages: 220,
      }),
    });

    console.log("Status:", response.status);
    console.log("Response:", await response.text());
  } catch (error) {
    console.log("Error:", error.message);
  }
}

testPut();

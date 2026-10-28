async function testPost() {
  try {
    const response = await fetch("http://localhost:3000/books/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        title: "The Psychology of Money",
        author: "Morgan Housel",
        price: 350,
        pages: 256,
      }),
    });

    console.log("Status:", response.status);
    console.log("Response:", await response.json());
  } catch (error) {
    console.log("Error:", error.message);
  }
}

testPost();
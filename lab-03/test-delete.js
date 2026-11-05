
async function testDelete() {
  try {
    const response = await fetch("http://localhost:3000/books/11/", {
      method: "DELETE",
    });

    console.log("Status:", response.status);
    console.log("Response:", await response.text());
  } catch (error) {
    console.log("Error:", error.message);
  }
}

testDelete();

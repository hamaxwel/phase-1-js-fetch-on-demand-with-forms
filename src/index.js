const init = () => {
    const inputForm = document.querySelector("form");

    inputForm.addEventListener("submit", (event) => {
        event.preventDefault(); // Prevent the default form submission behavior

        const input = document.querySelector("input#searchByID").value; // Get the input value

        fetch(`http://localhost:3000/movies/${input}`) // Fetch the movie by ID
            .then((response) => {
                if (!response.ok) {
                    throw new Error("Movie not found"); // Handle errors
                }
                return response.json();
            })
            .then((data) => {
                const title = document.querySelector("section#movieDetails h4");
                const summary = document.querySelector("section#movieDetails p");

                title.innerText = data.title; // Update the title
                summary.innerText = data.summary; // Update the summary
            })
            .catch((error) => {
                console.error(error);
                // Optionally update the DOM to inform the user about the error
                const title = document.querySelector("section#movieDetails h4");
                const summary = document.querySelector("section#movieDetails p");

                title.innerText = "Movie Not Found"; // Handle invalid input
                summary.innerText = ""; // Clear the summary
            });
    });
};

document.addEventListener("DOMContentLoaded", init); // Execute the init function when the DOM is fully loaded

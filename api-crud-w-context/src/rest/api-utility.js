// location to store the api url
const API_ENDPOINT = "https://6298beb2f2decf5bb74a9edb.mockapi.io/todos";

// fetch information from the api (async await)
export const fetchData = async () => {
  try {
    const response = await fetch(API_ENDPOINT); //response object
    const data = await response.json(); //extracting json from response object
    console.log(data);
    return data;
  } catch (error) {
    console.log("Something went wrong", error); //error out if something goes wrong
  }
};

//post to api
export const postData = async (taskName) => {
  try {
    const response = await fetch(API_ENDPOINT, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ //stringify the object with the taskInput passed in from the Form component
        taskInput: taskName,
        completed: false
      })
    });
    
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error(error);
  }
};


//delete from the api (async await)
export const deleteData = async (id) => {
  // try to make a delete request to the api
  try {
    const response = await fetch(`${API_ENDPOINT}/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    });
    console.log("response from deleteData:", response);

    //if the response is not ok, throw an error (this is checking for a 200 response)
    if (!response.ok) {
      throw new Error("Failed to delete data from API");
    }

    //if the response is ok, return the data extracted from the response
    const data = await response.json();
    console.log("Data successfully deleted:", data);
    return data;

    //catch any errors and log them to the console
  } catch (error) {
    console.error("Error deleting data from API:", error);
  }
};



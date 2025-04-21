// This function should retrieve all the project objects from projects array.
// It should then traverse over the array to create individual cards displaying each project details.
function loadProjects() {
  var projectsContainer = document.getElementById("projects");
  projectsContainer.innerHTML = "";
  // Traverse over the projects array and create individual cards for each project
  for (var i = 0; i < projects.length; i++) {
    var project = projects[i];
    var card = document.createElement("div");
    card.classList.add("card");
    card.setAttribute("data-project-id", project.id);
    card.innerHTML = `
      <img src="${project.image}" alt="${project.title}">
      <p>${project.title}</p>
      <p>${project.description}</p>
    `;
    projectsContainer.appendChild(card);
  }
}



// This function should return the projectId of the new project
function newProjectId(){
  return projects.length + 1;
}

function saveNewProject() {

  // Get the new project details by using the DOM elements
  var title = document.getElementById("title").value;
  var description = document.getElementById("desc").value;
  var image = document.getElementById("image").value;

  // Create the new projectId by calling the newProjectId() function
  var projectId = newProjectId();   // Call the newProjectId() function to get the new projectId

  // Create a new project object
  var newProject = {
    projectId: projectId,
    title: title,
    description: description,
    image: image
  };

  // Add the new project object to the projects array 
  projects.push(newProject);  // Add the new project object to the projects array

  // Load the projects after adding the new project
  loadProjects();

  // Clear the values of the New Project Details Form after adding the new project
  document.getElementById("title").value = "";
  document.getElementById("desc").value = "";
  document.getElementById("image").value = "";
}

document.addEventListener("DOMContentLoaded", function (){
    const nameSearch = document.getElementById("name-search")
    const tags = document.querySelectorAll(".tag")
    const projects = document.querySelectorAll(".project")

    //searching through all diff projects, looking up name of project 
    function filterProjects(){
        const nameQuery = nameSearch.value.toLowerCase();

        projects.forEach((project) => {
            const name = project.getAttribute('data-name')
            const nameMatch = name.includes(nameQuery)
            //if name query we search for exists inside of name, we keep it by setting disp to blank, else we hide element
            if(nameMatch){
                project.style.display = "";
            }
            else{
                project.style.display = "none";
            }
        })
    }
    //doing the same thing for the tags but for all different tags now
    tags.forEach((tag) => {
        tag.addEventListener("click", function(){       //why listener is needed 
            const selectedTag = this.getAttribute("data-tag")
            
            projects.forEach((project) => {
                const projectTags = project.getAttribute("data-tags")
                if(projectTags.includes(selectedTag)){
                    project.style.display = ""
                }
                else{
                    project.style.display = "none"
                }
            })
        })
    })

    nameSearch.addEventListener("keyup", filterProjects)
})
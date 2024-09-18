var content = "<div></div>";
var projectDetails = [
    {
    "name":"RoastRoute",
    "desc":"built a GIS with C++",
    "tools":"C++, GTK, FastAPI",
    "image":"https://user-images.githubusercontent.com/93873940/235380410-9c7cddc7-0a3e-413f-99a2-2cba3bd2c1e8.png",
    "github":"https://github.com/ambroseling/RoastRoute-GIS",
    "date":"2024-09-15"
    },
    {
    "name":"NucleAIse",
    "desc":"ML model for protein function prediction",
    "tools":"PyTorch, Torch Geometric, SciKitLearn",
    "image":"https://imageio.forbes.com/specials-images/imageserve/1034901762/0x0.jpg?format=jpg&height=900&width=1600&fit=bounds",
    "github":"https://github.com/ambroseling/NucleAIse",
    "date":"2024-09-18"

    },
    {
    "name":"Stable Diffusion From Scratch",
    "desc":"Image generation model in Python",
    "tools":"Python, PyTorch",
    "image": "https://cdn.the-scientist.com/assets/articleNo/71687/aImg/52292/62dc0501-8dda-4bd7-9ba9-fa1a9b8c7cb4-l.jpg",
    "github": "https://github.com/ambroseling/stable-diffusion-torch",
    "date":"2024-09-18",

    },
    {
    "name":"My processor",
    "desc": "16 bit processor processing ARM instructions",
    "tools":"Python, Verilog, C",
    "image":"https://m.media-amazon.com/images/I/61Ueuz1R1HL._AC_UF350,350_QL80_.jpg",
    "github":"https://github.com/ambroseling/ARM-Processor",
    "date":"2024-03-18"

    }
    ];

    let toggle = false;

    function showProjects(){
      document.getElementById("showproj-button").onclick = function(){
        toggle = !toggle;
        if(toggle){
          document.getElementById('showproj-button').value = 'Hide Projects';
          document.getElementById('proj').innerHTML = projectDetails.sort((a, b) => new Date(b.date) - new Date(a.date)).map(project => 
            `          <div class="col s12 m6 l4">
                     <div class="card medium">
                       <div class="card-image waves-effect waves-block waves-light">
                         <img alt="Screenshot of web app" src="${project.image}"
                         style="height: 100%; width: 100%" class="activator" />
                       </div>
                       <div class="card-content">
                         <span class="card-title activator black-text hoverline">${project.name}<i
                             class="mdi-navigation-more-vert right"></i></span>
                         <p>
                         By Ambrose Ling
                         </p>
                       </div>
                       <div class="card-reveal">
                         <span class="card-title black-text"><small>Accomplishments</small><i
                             class="mdi-navigation-close right"></i></span>
                         <ul>
                           <li><b>Tools:</b>  ${project.tools}</li>
                           <li>${project.desc}</li>
                         </ul>
                         <div class="card-action">
                           <a aria-label="Visit Blog website" href="https://github.com/ambroseling" target="_blank" data-position="top"
                             data-tooltip="View Online"
                             class="btn-floating btn-large waves-effect waves-light blue-grey tooltipped"><i
                               class="fa fa-external-link"></i></a>
                           <a aria-label="Visit the GitHub repo for  project" href=${project.github}
                             target="_blank" data-position="top" data-tooltip="View Source"
                             class="btn-floating btn-large waves-effect waves-light blue-grey tooltipped"><i
                               class="fa fa-github"></i></a>
                         </div>
                       </div>
                     </div>
                   </div>`
          ).join('');
        }
        else{
          document.getElementById('showproj-button').value = 'Show Projects';
          document.getElementById('proj').innerHTML = `<div></div>`;
        }
      }
    }
    
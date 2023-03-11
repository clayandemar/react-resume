import { Wrapper } from "../components";
import image from "../components/images/game.png";
import image2 from "../components/images/note.png";
import image3 from "../components/images/readme.png";



const Projects = (props) => {

  return (
    <Wrapper>
      <h1 class="projects-title">Projects</h1>
      <div class="projects-container">
        
        <div class="card">
          <img src={image} class="card-img-top" alt="gaming blog"></img>
          <div class="card-body">
            <h5 class="card-title">Gaming Blog</h5>
            <p class="card-text">This is a group project from my coding boot-camp</p>
            <a href="https://github.com/christopherrclark/gaming-blog" class="btn btn-primary">Repository</a>
          </div>
        </div>

        <div class="card">
          <img src={image2} class="card-img" alt="note taking app"></img>
          <div class="card-body">
            <h5 class="card-title">Note Taker</h5>
            <p class="card-text">This is an individual project from my coding boot-camp</p>
            <a href="https://github.com/clayandemar/note-taker" class="btn btn-primary">Repository</a>
          </div>
        </div>

        <div class="card">
          <img src={image3} class="card-img-top" alt="readme generator"></img>
          <div class="card-body">
            <h5 class="card-title">README Generator</h5>
            <p class="card-text">This is an individual project from my coding boot-camp</p>
            <a href="https://github.com/clayandemar/readme-generator/blob/main/Develop/video/screen.mov" class="btn btn-primary">Repository</a>
          </div>
        </div>

      </div>
    </Wrapper>
  )
}





export default Projects;

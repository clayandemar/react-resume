import { Wrapper } from "../components";
import image from "../components/images/Clay 2.jpg";

const Home = (props) => {

  return (
    <Wrapper>
      <div class="home-items">
        <img class="profile-pic" src={image} alt="Profile of Clay Andemar" width="100px" height="100px"></img>
        <h1 class="name-header">Clay Andemar</h1>
        <h2 class="developer-header">Full Stack Developer</h2>
        </div>
    </Wrapper>
  )
}

export default Home
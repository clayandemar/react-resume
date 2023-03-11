import { Wrapper } from "../components";
import image1 from "../components/images/clabby.jpeg"
import image from "../components/images/background.webp"

const AboutMe = (props) => {

  return (
    <Wrapper>
      <img class="backgroundPic" src={image} alt="background"></img>
      <div class="flexbox-container">
        <h1 id="about-me">About Me</h1>
        <p class="about-me">Hello! I'm Clay Andemar and I'm a Full Stack Developer.
          I got my certificate through the University of Minnesota Coding Boot-camp in March 2023.
          I've lived in Minnesota my whole life, and absolutely love it here (besides the weather).
          When I'm not coding, I catch myself creating music or spending time with loved ones.
        </p>
        <h1 id="education">Education</h1>
        <p class="education">I'm a graduate of Eastview High School (2019) in Apple Valley, Minnesota.
          After Eastview I attended Minnesota State University Mankato for a year,
          transferred to University of St.Thomas for a year,
          then transferred to Minneapolis Community and Technical college for a year.</p>
        <img class="clabby" src={image1} alt="Clay with girlfriend Abby"></img>
      </div>
    </Wrapper>
  )
}

export default AboutMe
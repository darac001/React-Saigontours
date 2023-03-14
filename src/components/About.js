import about from '../images/about.jpg'
import Title from './Title';
const About = () => {
  return (
    <section className="section" id="about">
      <Title title="about" subTitle="us" />

      <div className="section-center about-center">
        <div className="about-img">
          <img src={about} className="about-photo" alt="awesome beach" />
        </div>
        <article className="about-info">
          <h3>We are the world's most awarded & loved tour company</h3>
          <p>
            Welcome to Saigon Tours Company, your one-stop destination for exploring the vibrant city of Saigon and beyond.
            Our company specializes in providing personalized, high-quality tours and experiences that cater to
            your interests and preferences. From cultural and historical sightseeing tours to adventurous
            activities and culinary experiences, we offer a wide range of options that will make your visit to Saigon unforgettable.
            
          </p>
          <p>
          Our team of experienced and knowledgeable guides will take you off the beaten path to
            discover the hidden gems and local favorites that make Saigon such a unique and fascinating city.
            Whether you're a solo traveler, a couple, or a group, we can tailor our tours to suit your needs
            and create an itinerary that suits your schedule and interests.
          </p>

        </article>
      </div>
    </section>
  );
};
export default About;

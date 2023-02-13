import Title from "./Title";
import { services } from "../data";

const Services = () => {
  return (
    <section className="section services" id="services">
      <Title title='our' subTitle='services'/>
      <div className="section-center services-center">        
          {services.map((service) => {
            return (          
              <>
              <article className="service">
                <span className="service-icon">
                <i className={service.icon}></i>
                </span>
                <div className="service-info">
                <h4 className="service-title">{service.title}</h4>
                <p className="service-text">
                  {service.text}
                </p>
                </div>
              </article>
              </>
            )
          })}      

      </div>
    </section>
  );
};
export default Services;
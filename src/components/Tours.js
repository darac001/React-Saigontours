import Title from "./Title";

const Tours = (props) => {
  const {tours, removeTour} = props
  return (
    <section className="section" id="tours">
      <Title title='featured' subTitle='tours'/>

      <div className="section-center featured-center">
        {tours.map((tour) => {
          return (
            <article className="tour-card" key={tour.id}>
              <div className="tour-img-container">
                <img src={tour.image} className="tour-img" alt="" />
                <p className="tour-date">{tour.date}</p>
              </div>
              <div className="tour-info">
                <div className="tour-title">
                  <h4>{tour.title}</h4>
                </div>
                <p>{tour.info}</p>
                <div className="tour-footer">
                  <p>
                    <span>
                      <i className="fas fa-map"></i>
                    </span>{" "}
                    {tour.location}
                  </p>
                  <p>{tour.duration}</p>
                  <p>{tour.price}</p>
                </div>
                <button className="delete-btn" onClick={() => removeTour(tour.id)}>
                  not interested
                </button>
              </div>
            </article>
          );
        })}
        
      </div>
    </section>
  );
};
export default Tours;

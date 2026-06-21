import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My career <span>&</span>
          <br /> experience
        </h2>

        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>

          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Full Stack Developer Intern</h4>
                <h5>Teanso Technologies</h5>
              </div>

              <h3>Mar 2026 – Jun 2026</h3>
            </div>

            <p>
              Worked as a Full Stack Developer Intern at Teanso Technologies,
              contributing to the development of the MyPropAI real estate platform.
              Built responsive user interfaces using Next.js, developed and
              integrated REST APIs with Django, managed PostgreSQL databases,
              and collaborated with the team to implement new features,
              optimize performance, and resolve bugs across the application.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
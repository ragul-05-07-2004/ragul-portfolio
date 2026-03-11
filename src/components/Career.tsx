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
                <h5>Teanso</h5>
              </div>

              <h3>2026</h3>

            </div>

            <p>
              Worked as a Full Stack Developer Intern building scalable web
              applications using React.js, Node.js, Express.js, and MongoDB.
              Developed responsive user interfaces, implemented authentication
              systems, and collaborated on building full-stack features for
              modern web applications.
            </p>

          </div>

        </div>
      </div>
    </div>
  );
};

export default Career;
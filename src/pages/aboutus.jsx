import "./styles.css";

function AboutPage() {
  return (
    <div className="about-container">
      <header className="header">
      <img
            src="/image.png"
            alt="Person holding a certificate with checkmark"
            className="skillzone"
          />
        <span className="about-text">ABOUT</span>

      </header>

      <div className="content">
        <p className="paragraph">
          At <span className="highlight">SkillZone</span>, we believe that education should be accessible to everyone —
          not limited by money, but driven by motivation. That's why we created a platform where you earn your way to
          premium content through our unique points system. Learn, complete quizzes, gain points, and unlock advanced
          courses — you can do all of this without spending a single cent.
        </p>

        <p className="paragraph">
          Our mobile app is designed for university students, professionals, beginners, and anyone with a passion to
          grow. Whether you're just starting out or looking to sharpen your skills, SkillZone makes the journey fun and
          rewarding.
        </p>

        <p className="paragraph">
          We're not just another learning platform. We focus on ensuring actual learning by integrating quizzes at the
          end of each lesson, so you can test your knowledge and track your progress in real-time.
        </p>

        <p className="paragraph">
          SkillZone is proudly built by a team of six passionate second-year students at ESTIN, committed to creating
          smarter ways to learn and grow.
        </p>

        <p className="quote">"Learn, grow, and shine with SkillZone!"</p>
      </div>

      <div className="footer">
        <div className="tagline">
          <span className="learning-text">LEARNING</span>
          <span className="makes-you-text">
            MAKES
            <br />
            YOU
          </span>{" "}
          <span className="happy-text">HAPPY</span>
        </div>
        <div className="illustration">
          <img
            src="/img.png"
            alt="Person holding a certificate with checkmark"
            className="illustration-image"
          />
        </div>
        <div className="star">✦</div>
      </div>
    </div>
  )
};
export default AboutPage;
const About = () => {
  return (
    <div className="about-page">
      <h1 className="app-title">Moves Mixer</h1>
      <h4 className="subheader">
        An app that enables you to design custom workout routines
      </h4>
      <div className="about-page-body">
        <img
          className="yoga-image"
          src="https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2120&q=80"
          alt="sunset yoga scene"
        />
        <div className="instructions-wrapper">
          <p className="instructions-intro-paragraph">
            Please follow the instructions below:
          </p>
          <ul className="instructions">
            <li>
              Access information about each workout routine on the homepage.
            </li>
            <li>
              Select an individual routine to view its exercise movements and
              equipment requirements.
            </li>
            <li>
              Add a new exercise or piece of equipment to the workout on form
              submission.
            </li>
            <li>
              Mark an exercise as complete as you proceed through the workout.
            </li>
            <li>Remove an exercise from the workout.</li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default About

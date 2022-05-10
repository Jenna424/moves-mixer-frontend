const About = () => {
  return (
    <div className="about-page">
      <h1>Moves Mixer</h1>
      <h4>
        <em>An app that enables you to design custom workout routines</em>
      </h4>
      <div className="about-page-body">
        <div className="instructions-wrapper">
          <p className="instructions-intro-paragraph">
            Please follow the instructions below:
          </p>
          <p>Access information about each workout routine on the homepage.</p>
          <p>
            Select an individual routine to view its exercise movements and
            equipment requirements.
          </p>
          <p>
            Add a new exercise or piece of equipment to the workout on form
            submission.
          </p>
          <p>
            <p>
              Mark an exercise as complete as you proceed through the workout.
            </p>
          </p>
          <p>Remove an exercise from the workout.</p>
        </div>
      </div>
    </div>
  )
}

export default About

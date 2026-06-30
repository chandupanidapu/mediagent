function Welcome() {
  const hour = new Date().getHours();

  let greeting = "Good Evening";

  if (hour < 12) greeting = "Good Morning";
  else if (hour < 17) greeting = "Good Afternoon";

  return (
    <section className="workspace-hero">

      <div className="hero-greeting">
        {greeting}, Doctor
      </div>

      <h1 className="hero-title">
        Clinical Intelligence Workspace
      </h1>

      <p className="hero-description">
        Analyze patient cases, interpret laboratory findings,
        review medical literature, generate differential diagnoses,
        and access evidence-based recommendations from a single,
        intelligent clinical workspace.
      </p>

    </section>
  );
}

export default Welcome;
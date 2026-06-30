import Welcome from "./Welcome.jsx";
import Composer from "./Composer.jsx";
import QuickActions from "./QuickActions.jsx";
import RecentSessions from "./RecentSessions.jsx";

function Workspace() {
  return (
    <section className="workspace-page">
      <Welcome />

      <Composer />

      <QuickActions />

      <RecentSessions />
    </section>
  );
}

export default Workspace;
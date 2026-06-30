import Workspace from "../workspace/Workspace";
import Conversation from "../conversation/Conversation";

function MainContent({ messages, loading }) {
  if (!messages || messages.length === 0) {
    return <Workspace />;
  }

  return (
    <Conversation
      messages={messages}
      loading={loading}
    />
  );
}

export default MainContent;
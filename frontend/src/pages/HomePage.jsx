export default function HomePage() {
    return (
        <div
            style={{
                maxWidth: "900px",
                margin: "0 auto",
                paddingTop: "40px",
            }}
        >
            <h1
                style={{
                    fontSize: "42px",
                    fontWeight: "700",
                    color: "#111827",
                    marginBottom: "16px",
                }}
            >
                Clinical Intelligence Platform
            </h1>

            <p
                style={{
                    fontSize: "18px",
                    color: "#6b7280",
                    marginBottom: "40px",
                    lineHeight: "1.8",
                }}
            >
                Welcome to MediAgent.
                <br />
                An AI-powered clinical decision support and medical research
                platform designed for healthcare professionals.
            </p>

            <div
                style={{
                    background: "#ffffff",
                    border: "1px solid #e5e7eb",
                    borderRadius: "16px",
                    padding: "32px",
                    boxShadow: "0 2px 10px rgba(0,0,0,0.05)",
                }}
            >
                <h2
                    style={{
                        marginBottom: "20px",
                        color: "#111827",
                    }}
                >
                    Coming Next
                </h2>

                <ul
                    style={{
                        lineHeight: "2",
                        color: "#374151",
                        paddingLeft: "22px",
                    }}
                >
                    <li>Multi-LLM Clinical Chat</li>
                    <li>Differential Diagnosis Assistant</li>
                    <li>Medical Research Workspace</li>
                    <li>Drug Comparison Engine</li>
                    <li>Conversation History</li>
                    <li>Evidence & Citation Panel</li>
                </ul>
            </div>
        </div>
    );
}
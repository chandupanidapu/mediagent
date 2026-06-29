import Sidebar from "./Sidebar";
import Header from "./Header";

export default function MainLayout({ children }) {
    return (
        <div
            style={{
                display: "flex",
                height: "100vh",
                width: "100%",
                overflow: "hidden",
                background: "#0f172a",
            }}
        >
            <Sidebar />

            <div
                style={{
                    flex: 1,
                    display: "flex",
                    flexDirection: "column",
                    overflow: "hidden",
                }}
            >
                <Header />

                <main
                    style={{
                        flex: 1,
                        overflowY: "auto",
                        padding: "24px",
                    }}
                >
                    {children}
                </main>
            </div>
        </div>
    );
}
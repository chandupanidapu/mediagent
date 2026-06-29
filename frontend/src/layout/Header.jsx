import { Bell, UserCircle, Stethoscope } from "lucide-react";

export default function Header() {
    return (
        <header
            style={{
                height: "72px",
                background: "#ffffff",
                borderBottom: "1px solid #e5e7eb",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                padding: "0 28px",
            }}
        >
            <div
                style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "12px",
                }}
            >
                <Stethoscope size={24} color="#2563eb" />

                <div>
                    <div
                        style={{
                            fontSize: "20px",
                            fontWeight: "700",
                            color: "#111827",
                        }}
                    >
                        MediAgent
                    </div>

                    <div
                        style={{
                            fontSize: "13px",
                            color: "#6b7280",
                        }}
                    >
                        Clinical Intelligence Platform
                    </div>
                </div>
            </div>

            <div
                style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "20px",
                }}
            >
                <Bell
                    size={22}
                    color="#6b7280"
                    style={{ cursor: "pointer" }}
                />

                <UserCircle
                    size={34}
                    color="#374151"
                    style={{ cursor: "pointer" }}
                />
            </div>
        </header>
    );
}
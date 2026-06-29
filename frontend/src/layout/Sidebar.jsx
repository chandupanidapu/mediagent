import {
    MessageSquare,
    Search,
    Pill,
    Settings,
    Activity,
} from "lucide-react";

const menuItems = [
    {
        icon: MessageSquare,
        label: "Clinical Chat",
    },
    {
        icon: Search,
        label: "Medical Research",
    },
    {
        icon: Pill,
        label: "Drug Comparison",
    },
    {
        icon: Activity,
        label: "Health Tools",
    },
    {
        icon: Settings,
        label: "Settings",
    },
];

export default function Sidebar() {
    return (
        <aside
            style={{
                width: "270px",
                background: "#111827",
                color: "white",
                display: "flex",
                flexDirection: "column",
                borderRight: "1px solid #1f2937",
            }}
        >
            <div
                style={{
                    padding: "28px 24px",
                    fontSize: "28px",
                    fontWeight: "700",
                    borderBottom: "1px solid #1f2937",
                }}
            >
                🩺 MediAgent
            </div>

            <nav
                style={{
                    padding: "18px",
                    display: "flex",
                    flexDirection: "column",
                    gap: "10px",
                }}
            >
                {menuItems.map((item) => {
                    const Icon = item.icon;

                    return (
                        <button
                            key={item.label}
                            style={{
                                display: "flex",
                                alignItems: "center",
                                gap: "14px",
                                padding: "14px 16px",
                                borderRadius: "10px",
                                border: "none",
                                cursor: "pointer",
                                background: "transparent",
                                color: "#d1d5db",
                                fontSize: "15px",
                                transition: "0.2s",
                            }}
                        >
                            <Icon size={20} />
                            {item.label}
                        </button>
                    );
                })}
            </nav>
        </aside>
    );
}
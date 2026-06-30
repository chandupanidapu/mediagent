import {
  Stethoscope,
  Brain,
  BookOpen,
  Pill,
  Microscope,
  ScanSearch,
  ChevronRight,
} from "lucide-react";

const actions = [
  {
    icon: Stethoscope,
    title: "Patient Analysis",
    description: "Analyze symptoms, history and clinical findings.",
  },
  {
    icon: Brain,
    title: "Differential Diagnosis",
    description: "Generate ranked evidence-based differentials.",
  },
  {
    icon: BookOpen,
    title: "Evidence Explorer",
    description: "Search guidelines, PubMed and references.",
  },
  {
    icon: Pill,
    title: "Drug Intelligence",
    description: "Interactions, dosing and contraindications.",
  },
  {
    icon: Microscope,
    title: "Research Assistant",
    description: "Summarize papers and generate reviews.",
  },
  {
    icon: ScanSearch,
    title: "Imaging AI",
    description: "Interpret radiology, ECG and uploaded images.",
  },
];

function QuickActions() {
  return (
    <section className="quick-actions-section">

      <div className="section-header">

        <h2>Quick Actions</h2>

        <span>Choose a clinical workflow</span>

      </div>

      <div className="quick-grid">

        {actions.map((item, index) => {

          const Icon = item.icon;

          return (

            <button
              key={index}
              className="quick-card"
            >

              <div className="quick-icon">

                <Icon size={26} />

              </div>

              <div className="quick-content">

                <h3>{item.title}</h3>

                <p>{item.description}</p>

              </div>

              <ChevronRight
                size={20}
                className="quick-arrow"
              />

            </button>

          );

        })}

      </div>

    </section>
  );
}

export default QuickActions;
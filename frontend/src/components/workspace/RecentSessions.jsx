import {
  Stethoscope,
  FlaskConical,
  BookOpen,
  ArrowRight,
} from "lucide-react";

const sessions = [

  {
    icon: Stethoscope,
    title: "STEMI ECG Analysis",
    time: "Today • 11:42 AM",
  },

  {
    icon: FlaskConical,
    title: "CKD Stage IV Management",
    time: "Yesterday • 4:15 PM",
  },

  {
    icon: BookOpen,
    title: "Community Acquired Pneumonia",
    time: "2 days ago • 8:30 PM",
  },

];

function RecentSessions() {

  return (

    <section className="recent-section">

      <div className="section-header">

        <h2>

          Recent Sessions

        </h2>

        <button className="view-all">

          View All

        </button>

      </div>

      <div className="recent-grid">

        {sessions.map((item,index)=>{

          const Icon=item.icon;

          return(

            <button

              key={index}

              className="recent-card"

            >

              <div className="recent-icon">

                <Icon size={22}/>

              </div>

              <div className="recent-content">

                <h3>

                  {item.title}

                </h3>

                <p>

                  {item.time}

                </p>

              </div>

              <ArrowRight
                size={20}
                className="recent-arrow"
              />

            </button>

          );

        })}

      </div>

    </section>

  );

}

export default RecentSessions;
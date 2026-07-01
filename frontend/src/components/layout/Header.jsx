import { ShieldCheck, BrainCircuit, Activity } from "lucide-react";
import logo from "../../assets/logo/logo-dark.svg";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 flex h-[72px] items-center justify-between border-b border-white/10 bg-[#0B1220] px-10">

      {/* Left */}
      <div className="flex items-center gap-4">
        <img
          src={logo}
          alt="Medarcy Logo"
          className="h-11 w-11 object-contain"
        />

        <div>
          <h1 className="text-2xl font-extrabold tracking-tight text-white">
            Medarcy
          </h1>

          <p className="text-sm text-slate-400">
            Clinical Intelligence Platform
          </p>
        </div>
      </div>

      {/* Right */}
      <div className="flex items-center gap-5">

        <div className="flex items-center gap-2 rounded-full border border-[#32435F] bg-[#111827]/90 px-6 py-2.5 backdrop-blur-md">
          <ShieldCheck size={20} className="text-blue-400" />
          <span className="text-sm font-medium text-white">
            Evidence-Based
          </span>
        </div>

        <div className="flex items-center gap-2 rounded-full border border-[#32435F] bg-[#111827]/90 px-6 py-2.5 backdrop-blur-md">
          <BrainCircuit size={20} className="text-green-400" />
          <span className="text-sm font-medium text-white">
            Clinical AI
          </span>
        </div>

        <div className="flex items-center gap-2 rounded-full border border-[#32435F] bg-[#111827]/90 px-6 py-2.5 backdrop-blur-md">
          <Activity size={20} className="text-violet-400" />
          <span className="text-sm font-medium text-white">
            Operational
          </span>
        </div>

      </div>

    </header>
  );
}
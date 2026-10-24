import React, { useState, useEffect } from 'react';
import { 
  Leaf, 
  BarChart3, 
  Settings, 
  Microscope, 
  Database, 
  Cpu, 
  Activity, 
  Droplets, 
  Sun, 
  Thermometer, 
  CheckCircle2, 
  AlertTriangle, 
  Zap, 
  Globe, 
  ShieldCheck, 
  Navigation,
  ArrowRight,
  TrendingDown,
  TrendingUp,
  FlaskConical,
  Sprout
} from 'lucide-react';
import { 
  LineChart, 
  Line, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer, 
  AreaChart, 
  Area 
} from 'recharts';
import { motion, AnimatePresence } from 'framer-motion';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

// Helper for tailwind class merging
function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// Simulated Data
const SENSOR_HISTORY = Array.from({ length: 24 }, (_, i) => ({
  time: `${i}:00`,
  npk: 40 + Math.random() * 20,
  ph: 6.2 + Math.random() * 0.8,
  moisture: 30 + Math.random() * 40,
  carbon: 2.1 + (i * 0.01) + Math.random() * 0.05
}));

const MICROBIAL_DATA = [
  { name: 'Mycorrhizae', level: 88, status: 'Healthy' },
  { name: 'Trichoderma', level: 65, status: 'Optimal' },
  { name: 'Azotobacter', level: 42, status: 'Low' },
  { name: 'Rhizobium', level: 92, status: 'Vibrant' },
];

const REGENERATIVE_TASKS = [
  { id: 1, task: 'Apply Bio-Stimulant (BioPulse v2)', priority: 'High', impact: '+12% Carbon', desc: 'Accelerates mycorrhizal growth' },
  { id: 2, task: 'Cover Cropping: Legume Mix', priority: 'Medium', impact: '+0.5 pH Neutrality', desc: 'Natural Nitrogen fixation' },
  { id: 3, task: 'Adjust Drip Irrigation Flow', priority: 'High', impact: 'Water Conservation', desc: 'Precise moisture targeting' },
];

const SCENARIOS = [
  { id: 'normal', name: 'Standard Growth', icon: <Sprout className="w-4 h-4 text-[#2ecc71]" />, status: 'Stable' },
  { id: 'drought', name: 'Extreme Drought', icon: <Sun className="w-4 h-4 text-orange-400" />, status: 'Critical' },
  { id: 'salinity', name: 'Salinity Surge', icon: <Activity className="w-4 h-4 text-blue-400" />, status: 'Attention' },
  { id: 'nutrient', name: 'Nutrient Collapse', icon: <AlertTriangle className="w-4 h-4 text-red-500" />, status: 'Warning' },
];

const VALIDATION_DATA = [
  { id: 'S-01', param: 'pH Level', lab: 6.5, ai: 6.6, dev: '+1.5%' },
  { id: 'S-02', param: 'Nitrogen (N)', lab: 45.0, ai: 43.5, dev: '-3.3%' },
  { id: 'S-03', param: 'Org. Carbon', lab: 2.1, ai: 2.05, dev: '-2.4%' },
  { id: 'S-04', param: 'Moisture', lab: 28.5, ai: 29.1, dev: '+2.1%' },
  { id: 'S-05', param: 'Phosphorus (P)', lab: 12.8, ai: 13.5, dev: '+5.4%' },
  { id: 'S-06', param: 'pH Level', lab: 7.2, ai: 7.1, dev: '-1.4%' },
  { id: 'S-07', param: 'Nitrogen (N)', lab: 38.2, ai: 39.0, dev: '+2.1%' },
  { id: 'S-08', param: 'Org. Carbon', lab: 1.4, ai: 1.38, dev: '-1.4%' },
  { id: 'S-09', param: 'Moisture', lab: 35.6, ai: 35.1, dev: '-1.4%' },
  { id: 'S-10', param: 'pH Level', lab: 6.1, ai: 6.0, dev: '-1.6%' },
];

export default function App() {
  const [activeTab, setActiveTab] = useState('dashboard');
  const [loading, setLoading] = useState(true);
  const [currentScenario, setCurrentScenario] = useState('normal');

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1500);
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <div className="h-screen w-full flex items-center justify-center bg-[#050a06]">
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          className="flex flex-col items-center gap-4"
        >
          <Leaf className="w-16 h-16 text-[#2ecc71] animate-pulse" />
          <h1 className="text-2xl font-bold text-gradient tracking-tighter">TERRAPULSE AI</h1>
          <p className="text-xs text-white/40 tracking-[0.2em] font-light">RESTORING EARTH'S VITALITY</p>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="flex h-screen bg-[#050a06] text-white overflow-hidden font-sans">
      {/* Sidebar Navigation */}
      <nav className="w-20 lg:w-64 border-r border-white/5 bg-black/20 flex flex-col items-center lg:items-start p-4 lg:p-6 gap-8 z-50">
        <div className="flex items-center gap-3 mb-4 self-center lg:self-start">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#2ecc71] to-[#27ae60] flex items-center justify-center shadow-lg shadow-[#2ecc71]/20">
            <Leaf className="w-6 h-6 text-white" />
          </div>
          <span className="hidden lg:block font-bold text-xl tracking-tighter">TerraPulse <span className="text-[#2ecc71]">AI</span></span>
        </div>

        <div className="flex flex-col w-full gap-2">
          <NavButton icon={<BarChart3 />} label="Dashboard" active={activeTab === 'dashboard'} onClick={() => setActiveTab('dashboard')} />
          <NavButton icon={<Cpu />} label="Edge AI Neural" active={activeTab === 'edge'} onClick={() => setActiveTab('edge')} />
          <NavButton icon={<FlaskConical />} label="Microbial Lab" active={activeTab === 'biolab'} onClick={() => setActiveTab('biolab')} />
          <NavButton icon={<CheckCircle2 />} label="Validation Lab" active={activeTab === 'validation'} onClick={() => setActiveTab('validation')} />
          <NavButton icon={<Globe />} label="Carbon Credits" active={activeTab === 'carbon'} onClick={() => setActiveTab('carbon')} />
          <NavButton icon={<Settings />} label="Settings" active={activeTab === 'settings'} onClick={() => setActiveTab('settings')} />
        </div>

        <div className="mt-auto w-full p-4 glass-green rounded-2xl hidden lg:block">
          <div className="flex items-center gap-2 mb-2">
            <div className="w-2 h-2 rounded-full bg-[#2ecc71] animate-pulse" />
            <span className="text-[10px] text-white/60 font-medium uppercase tracking-widest">Edge System Live</span>
          </div>
          <p className="text-[10px] text-white/40 leading-relaxed uppercase">Connected to 124 Soil Nodes</p>
        </div>
      </nav>

      {/* Main Content Area */}
      <main className="flex-1 overflow-y-auto relative h-full">
        {/* Header */}
        <header className="sticky top-0 z-40 w-full px-8 py-6 flex items-center justify-between glass-green border-b border-white/5 backdrop-blur-md">
          <div className="flex items-center gap-4">
            <h2 className="text-xl font-semibold capitalize tracking-tight">{activeTab}</h2>
            <div className="flex items-center gap-2 px-3 py-1 bg-white/5 rounded-full border border-white/10">
              <Sprout className="w-4 h-4 text-[#2ecc71]" />
              <span className="text-xs font-medium text-white/60">Farm: Pune_Alpha_01</span>
            </div>
          </div>
          
          <div className="flex items-center gap-6">
             <div className="flex items-center gap-2 px-4 py-2 bg-white/5 rounded-2xl border border-white/10 glass-green">
              <span className="text-[10px] text-white/40 uppercase tracking-widest font-bold">Scenario:</span>
              <select 
                value={currentScenario}
                onChange={(e) => setCurrentScenario(e.target.value)}
                className="bg-transparent text-xs font-bold text-[#2ecc71] outline-none cursor-pointer"
              >
                {SCENARIOS.map(s => <option key={s.id} value={s.id} className="bg-[#050a06]">{s.name}</option>)}
              </select>
            </div>
            <div className="flex flex-col items-end">
              <span className="text-[10px] text-white/40 uppercase tracking-widest">Soil Health Index</span>
              <span className="text-lg font-bold text-[#2ecc71]">{currentScenario === 'normal' ? '84.2%' : currentScenario === 'drought' ? '42.1%' : '65.8%'} <TrendingUp className="inline w-4 h-4 ml-1" /></span>
            </div>
          </div>
        </header>

        <AnimatePresence mode="wait">
          <motion.div 
            key={activeTab}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
            className="p-8"
          >
            {activeTab === 'dashboard' && <DashboardView scenario={currentScenario} />}
            {activeTab === 'edge' && <EdgeView />}
            {activeTab === 'biolab' && <BioLabView />}
            {activeTab === 'validation' && <ValidationView />}
            {activeTab === 'carbon' && <CarbonView />}
          </motion.div>
        </AnimatePresence>
      </main>
    </div>
  );
}

function NavButton({ icon, label, active, onClick }: { icon: React.ReactNode, label: string, active: boolean, onClick: () => void }) {
  return (
    <button 
      onClick={onClick}
      className={cn(
        "flex items-center gap-4 w-full p-3 rounded-xl transition-all duration-300 group",
        active ? "bg-[#2ecc71] shadow-lg shadow-[#2ecc71]/20" : "hover:bg-white/5"
      )}
    >
      <div className={cn(
        "w-6 h-6 flex items-center justify-center group-hover:scale-110 transition-transform",
        active ? "text-white" : "text-white/40"
      )}>
        {icon}
      </div>
      <span className={cn(
        "hidden lg:block text-sm font-medium",
        active ? "text-white" : "text-white/40 group-hover:text-white"
      )}>
        {label}
      </span>
    </button>
  );
}

function DashboardView({ scenario }: { scenario: string }) {
  const isDrought = scenario === 'drought';
  const isSalinity = scenario === 'salinity';
  const isNutrient = scenario === 'nutrient';
  
  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
      {/* Top Stats */}
      <div className="lg:col-span-8 flex flex-col gap-8">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          <StatCard 
            icon={<Droplets className={cn(isDrought || isNutrient ? "text-red-400" : "text-blue-400")} />} 
            label="Soil Moisture" 
            value={isDrought ? "12.4%" : isNutrient ? "22.1%" : "38.5%"} 
            trend={isDrought ? "-14.2%" : "+2.4%"} 
            trendUp={!isDrought} 
          />
          <StatCard 
            icon={<Thermometer className={cn(isDrought ? "text-red-500" : "text-orange-400")} />} 
            label="Soil Temp" 
            value={isDrought ? "38.2°C" : "24.2°C"} 
            trend="+1.2%" 
            trendUp={true} 
          />
          <StatCard 
            icon={<Activity className={cn(isSalinity ? "text-blue-400" : isNutrient ? "text-red-400" : "text-emerald-400")} />} 
            label={isNutrient ? "Nutrient Bio-Layer" : "Elec. Conductivity"} 
            value={isSalinity ? "4.2 dS/m" : isNutrient ? "Extremely Low" : "0.8 dS/m"} 
            trend={isSalinity ? "+240%" : isNutrient ? "-80%" : "optimal"} 
            trendUp={isSalinity} 
          />
        </div>

        {/* Digital Twin Visualization Placeholder */}
        <div className="relative h-[400px] rounded-3xl overflow-hidden glass border border-white/5">
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent z-10 p-8 flex flex-col justify-end">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-xl font-bold">Soil Digital Twin <span className="text-[#2ecc71] text-xs font-normal border border-[#2ecc71]/30 px-2 py-0.5 rounded-full ml-2">Live Rendering</span></h3>
                <p className="text-sm text-white/40">Multi-point holographic mapping of NPK levels</p>
              </div>
              <button className="px-4 py-2 bg-white/10 hover:bg-white/20 rounded-xl transition-colors text-sm font-medium flex items-center gap-2">
                <Navigation className="w-4 h-4" /> Expand Map
              </button>
            </div>
          </div>
          <img 
            src="/src/assets/map_twin.png" 
            alt="Soil Digital Twin" 
            className="w-full h-full object-cover opacity-60 scale-105 hover:scale-110 transition-transform duration-700" 
          />
        </div>

        {/* Real-time Telemetry Chart */}
        <div className="glass p-8 rounded-3xl border border-white/5">
          <div className="flex items-center justify-between mb-8">
            <h3 className="text-lg font-bold">Soil Carbon Sequestration Trend</h3>
            <div className="flex items-center gap-4 text-xs font-medium text-white/40 uppercase tracking-widest">
              <span className="flex items-center gap-1"><div className="w-2 h-2 rounded-full bg-[#2ecc71]" /> Carbon (t/ha)</span>
              <span className="flex items-center gap-1"><div className="w-2 h-2 rounded-full bg-blue-500" /> Moisture</span>
            </div>
          </div>
          <div className="h-[250px] w-full">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={SENSOR_HISTORY}>
                <defs>
                  <linearGradient id="colorCarbon" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#2ecc71" stopOpacity={0.3}/>
                    <stop offset="95%" stopColor="#2ecc71" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.05)" vertical={false} />
                <XAxis dataKey="time" stroke="rgba(255,255,255,0.3)" fontSize={10} axisLine={false} tickLine={false} />
                <YAxis stroke="rgba(255,255,255,0.3)" fontSize={10} axisLine={false} tickLine={false} />
                <Tooltip 
                  contentStyle={{ background: 'rgba(0,0,0,0.8)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '12px' }}
                  itemStyle={{ color: '#fff' }}
                />
                <Area type="monotone" dataKey="carbon" stroke="#2ecc71" fillOpacity={1} fill="url(#colorCarbon)" strokeWidth={2} />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>

      {/* Right Column (Advise & Status) */}
      <div className="lg:col-span-4 flex flex-col gap-8">
        {/* Regenerative Pilot */}
        <div className="glass-green p-6 rounded-3xl border border-[#2ecc71]/20">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 rounded-xl bg-[#2ecc71]/20 flex items-center justify-center">
              <Zap className="w-6 h-6 text-[#2ecc71]" />
            </div>
            <div>
              <h3 className="font-bold">Regenerative Pilot</h3>
              <p className="text-[10px] text-white/40 uppercase tracking-widest">AI Advisory Engine</p>
            </div>
          </div>

          <div className="space-y-4">
            {REGENERATIVE_TASKS.map((task) => (
              <div key={task.id} className="p-4 bg-black/40 rounded-2xl border border-white/5 hover:border-[#2ecc71]/30 transition-colors group cursor-pointer">
                <div className="flex justify-between items-start mb-2">
                  <span className={cn(
                    "px-2 py-0.5 rounded text-[8px] font-bold uppercase",
                    task.priority === 'High' ? "bg-red-500/20 text-red-400" : "bg-blue-500/20 text-blue-400"
                  )}>
                    {task.priority} Priority
                  </span>
                  <span className="text-[10px] text-[#2ecc71] font-bold">{task.impact}</span>
                </div>
                <p className="text-sm font-medium mb-3 group-hover:text-[#2ecc71] transition-colors">{task.task}</p>
                <div className="flex justify-end">
                  <ArrowRight className="w-4 h-4 text-white/20 group-hover:text-[#2ecc71] transition-colors" />
                </div>
              </div>
            ))}
          </div>

          <button className="w-full mt-6 py-4 bg-[#2ecc71] rounded-2xl font-bold flex items-center justify-center gap-2 hover:bg-[#27ae60] transition-colors shadow-lg shadow-[#2ecc71]/20">
             Execute Restoration Plan
          </button>
        </div>

        {/* Microbial Health Indicator */}
        <div className="glass p-6 rounded-3xl border border-white/5">
          <h3 className="font-bold mb-6 flex items-center gap-2">
            <Microscope className="w-5 h-5 text-[#2ecc71]" />
            Soil Biodiversity
          </h3>
          <div className="space-y-6">
            {MICROBIAL_DATA.map((microbe) => (
              <div key={microbe.name}>
                <div className="flex justify-between text-xs mb-2">
                  <span className="text-white/60">{microbe.name}</span>
                  <span className={cn(
                    "font-bold",
                    microbe.level > 80 ? "text-[#2ecc71]" : microbe.level > 50 ? "text-yellow-400" : "text-red-400"
                  )}>{microbe.level}%</span>
                </div>
                <div className="h-2 w-full bg-white/5 rounded-full overflow-hidden">
                  <motion.div 
                    initial={{ width: 0 }}
                    animate={{ width: `${microbe.level}%` }}
                    transition={{ duration: 1, delay: 0.5 }}
                    className={cn(
                      "h-full rounded-full",
                      microbe.level > 80 ? "bg-[#2ecc71]" : microbe.level > 50 ? "bg-yellow-400" : "bg-red-400"
                    )}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function EdgeView() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
      <div className="space-y-8">
        <div className="glass p-8 rounded-3xl border border-white/5">
          <h3 className="text-xl font-bold mb-2">EdgeMind Architecture</h3>
          <p className="text-sm text-white/40 mb-8">Integrated Sensing & On-Device AI Diagnostic</p>
          
          <img src="/src/assets/edge_sense.png" alt="Edge Hardware" className="w-full h-auto rounded-2xl border border-white/10 mb-8" />
          
          <div className="grid grid-cols-2 gap-4">
            <div className="p-4 bg-white/5 rounded-2xl">
              <h4 className="text-[10px] text-white/40 uppercase tracking-widest mb-1">Processor</h4>
              <p className="text-sm font-bold">Jetson Nano Edge</p>
            </div>
            <div className="p-4 bg-white/5 rounded-2xl">
              <h4 className="text-[10px] text-white/40 uppercase tracking-widest mb-1">Connectivity</h4>
              <p className="text-sm font-bold">LoRaWAN / 5G Ready</p>
            </div>
          </div>
        </div>
      </div>

      <div className="space-y-8">
        <div className="glass-green p-8 rounded-3xl border border-[#2ecc71]/20">
          <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
            <Activity className="text-[#2ecc71]" /> 
            Live Node Telemetry
          </h3>
          <div className="space-y-4">
            <TelemetryCard label="Nitrogen (N)" value="42 mg/kg" status="Optimal" color="text-green-400" />
            <TelemetryCard label="Phosphorus (P)" value="18 mg/kg" status="Low" color="text-yellow-400" />
            <TelemetryCard label="Potassium (K)" value="215 mg/kg" status="Optimal" color="text-green-400" />
            <TelemetryCard label="Soil Organic Carbon" value="2.8%" status="Increasing" color="text-emerald-400" />
            <TelemetryCard label="Electrical Conductivity" value="0.8 dS/m" status="Stable" color="text-blue-400" />
          </div>
        </div>

        <div className="glass p-8 rounded-3xl border border-white/5">
          <h3 className="text-lg font-bold mb-4">Autonomous Diagnostic</h3>
          <div className="flex items-start gap-4 p-4 bg-white/5 rounded-2xl border border-white/10">
            <div className="w-12 h-12 rounded-xl bg-yellow-500/10 flex items-center justify-center shrink-0">
              <AlertTriangle className="text-yellow-400" />
            </div>
            <div>
              <h4 className="text-sm font-bold mb-1">Nitrogen Deficiency Detected</h4>
              <p className="text-xs text-white/40 leading-relaxed">System identified early-stage chlorosis in Sector B-12. Bio-adjustment recommended within 48 hours.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function BioLabView() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
      <div className="lg:col-span-12 glass p-8 rounded-3xl border border-white/5 flex items-center justify-between">
        <div>
          <h3 className="text-2xl font-bold text-gradient">Bio-Pulse Diagnostic Lab</h3>
          <p className="text-white/40">Analyzing microbial rhizosphere interactions in real-time</p>
        </div>
        <div className="flex gap-4">
          <button className="px-6 py-3 glass-green rounded-xl text-sm font-bold border border-[#2ecc71]/30">Run Full Bio-Scan</button>
          <button className="px-6 py-3 bg-[#2ecc71] rounded-xl text-sm font-bold shadow-lg shadow-[#2ecc71]/20">Order Custom Blend</button>
        </div>
      </div>

      <div className="lg:col-span-8 space-y-8">
        <div className="glass p-8 rounded-3xl border border-white/5">
          <h3 className="text-lg font-bold mb-8">Microbial Population Dynamics</h3>
          <div className="h-[300px]">
             <ResponsiveContainer width="100%" height="100%">
              <LineChart data={SENSOR_HISTORY}>
                <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.05)" vertical={false} />
                <XAxis dataKey="time" stroke="rgba(255,255,255,0.3)" fontSize={10} axisLine={false} tickLine={false} />
                <YAxis stroke="rgba(255,255,255,0.3)" fontSize={10} axisLine={false} tickLine={false} />
                <Tooltip 
                   contentStyle={{ background: 'rgba(0,0,0,0.8)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '12px' }}
                />
                <Line type="monotone" dataKey="npk" stroke="#2ecc71" strokeWidth={3} dot={false} />
                <Line type="monotone" dataKey="ph" stroke="#f39c12" strokeWidth={3} dot={false} />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>

      <div className="lg:col-span-4 space-y-8">
        <div className="glass p-6 rounded-3xl border border-white/5">
          <h3 className="font-bold mb-6">Actionable Bio-Insights</h3>
          <div className="space-y-4">
            <BioInsightCard 
              title="Increase Mycorrhizal Colonization" 
              desc="Root connectivity is at 45%. Introducing native spores will improve phosphorus uptake by 22%."
              type="bio"
            />
             <BioInsightCard 
              title="Salinity Buffering" 
              desc="EC levels rising. Bio-stimulant Alpha-12 recommended to enhance osmotic tolerance."
              type="chemical"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

function StatCard({ icon, label, value, trend, trendUp }: { icon: React.ReactNode, label: string, value: string, trend: string, trendUp: boolean }) {
  return (
    <div className="glass p-6 rounded-3xl border border-white/5 hover:border-white/10 transition-all duration-300 group">
      <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
        {icon}
      </div>
      <p className="text-xs text-white/40 uppercase tracking-widest mb-1 font-medium">{label}</p>
      <div className="flex items-end justify-between">
        <h4 className="text-2xl font-bold">{value}</h4>
        <span className={cn(
          "text-[10px] font-bold px-2 py-0.5 rounded-full flex items-center gap-1",
          trendUp ? "bg-green-500/10 text-green-400" : "bg-red-500/10 text-red-400"
        )}>
          {trendUp ? <TrendingUp className="w-3 h-3" /> : <TrendingDown className="w-3 h-3" />}
          {trend}
        </span>
      </div>
    </div>
  );
}

function TelemetryCard({ label, value, status, color }: { label: string, value: string, status: string, color: string }) {
  return (
    <div className="flex items-center justify-between p-4 bg-white/5 rounded-2xl border border-white/5">
      <div>
        <h4 className="text-[10px] text-white/40 uppercase tracking-widest mb-0.5">{label}</h4>
        <p className="text-sm font-bold">{value}</p>
      </div>
      <div className="text-right">
        <span className={cn("text-[10px] font-bold uppercase tracking-widest", color)}>{status}</span>
      </div>
    </div>
  );
}

function BioInsightCard({ title, desc, type }: { title: string, desc: string, type: 'bio' | 'chemical' }) {
  return (
    <div className="p-4 bg-white/5 rounded-2xl border border-white/10 hover:border-[#2ecc71]/30 transition-colors">
      <div className="flex items-center gap-2 mb-2">
         {type === 'bio' ? <Sprout className="w-4 h-4 text-[#2ecc71]" /> : <FlaskConical className="w-4 h-4 text-orange-400" />}
         <h4 className="text-xs font-bold leading-tight">{title}</h4>
      </div>
      <p className="text-[10px] text-white/40 leading-relaxed">{desc}</p>
    </div>
  );
}

function CarbonView() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
       <div className="lg:col-span-12 glass-green p-8 rounded-3xl border border-[#2ecc71]/20 flex items-center justify-between overflow-hidden relative">
        <div className="relative z-10">
          <h3 className="text-2xl font-bold text-gradient-green flex items-center gap-2">
            <Globe className="w-8 h-8" /> Carbon Credit Ledger
          </h3>
          <p className="text-white/40 max-w-md mt-2">Verified Soil Organic Carbon (SOC) sequestration tracked via block-hash verification for the Voluntary Carbon Market.</p>
        </div>
        <div className="text-right relative z-10">
          <p className="text-[10px] text-white/40 uppercase tracking-widest font-bold mb-1">Total Carbon Sequestered</p>
          <h4 className="text-4xl font-bold text-[#2ecc71]">124.5 <span className="text-lg">tCO2e</span></h4>
        </div>
        <div className="absolute top-0 right-0 w-64 h-64 bg-[#2ecc71]/10 rounded-full blur-3xl -mr-32 -mt-32" />
      </div>

      <div className="lg:col-span-8 space-y-8">
        <div className="glass p-8 rounded-3xl border border-white/5">
          <div className="flex items-center justify-between mb-8">
            <h3 className="text-lg font-bold">Sequestration Rate (6 Months)</h3>
            <div className="px-4 py-2 bg-white/5 rounded-xl border border-white/10 text-xs font-bold text-[#2ecc71]">
              Verification: PENDING AUDIT
            </div>
          </div>
          <div className="h-[300px]">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={SENSOR_HISTORY}>
                <defs>
                  <linearGradient id="colorSOC" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#2ecc71" stopOpacity={0.3}/>
                    <stop offset="95%" stopColor="#2ecc71" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.05)" vertical={false} />
                <XAxis dataKey="time" stroke="rgba(255,255,255,0.3)" fontSize={10} axisLine={false} tickLine={false} />
                <YAxis stroke="rgba(255,255,255,0.3)" fontSize={10} axisLine={false} tickLine={false} />
                <Tooltip 
                  contentStyle={{ background: 'rgba(0,0,0,0.8)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '12px' }}
                />
                <Area type="monotone" dataKey="carbon" stroke="#2ecc71" fillOpacity={1} fill="url(#colorSOC)" strokeWidth={3} />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-6">
          <div className="glass p-6 rounded-3xl border border-white/5">
            <ShieldCheck className="w-8 h-8 text-[#2ecc71] mb-4" />
            <h4 className="font-bold mb-2">Immutable Verification</h4>
            <p className="text-xs text-white/40">Every data point is signed by the Edge AI module, preventing carbon fraud.</p>
          </div>
          <div className="glass p-6 rounded-3xl border border-white/5">
             <TrendingUp className="w-8 h-8 text-blue-400 mb-4" />
            <h4 className="font-bold mb-2">Projected Revenue</h4>
            <p className="text-xs text-white/40">Estimated annual payout: $2,840 based on current market rates ($32/ton).</p>
          </div>
        </div>
      </div>

      <div className="lg:col-span-4 glass-green p-6 rounded-3xl border border-[#2ecc71]/20">
        <h3 className="font-bold mb-6 flex items-center gap-2">
          <Database className="w-5 h-5" /> Audit Trail
        </h3>
        <div className="space-y-4">
          {[1,2,3,4].map(i => (
            <div key={i} className="p-4 bg-black/40 rounded-2xl border border-white/5 flex items-center justify-between">
              <div>
                <p className="text-xs font-bold">Audit_Log_0x4f{i}</p>
                <p className="text-[10px] text-white/40">Verified by Edge_Orin_Alpha</p>
              </div>
              <CheckCircle2 className="w-4 h-4 text-[#2ecc71]" />
            </div>
          ))}
        </div>
        <button className="w-full mt-8 py-4 bg-[#2ecc71] rounded-2xl font-bold hover:bg-[#27ae60] transition-colors shadow-lg shadow-[#2ecc71]/20 shimmer">
          Generate Verification Report
        </button>
      </div>
    </div>
  );
}

function ValidationView() {
  return (
    <div className="flex flex-col gap-8">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <StatCard 
          icon={<ShieldCheck className="text-[#2ecc71]" />} 
          label="Overall Accuracy" 
          value="96.2%" 
          trend="+1.2%" 
          trendUp={true} 
        />
        <StatCard 
          icon={<Activity className="text-blue-400" />} 
          label="R-Squared Correlation" 
          value="0.984" 
          trend="high" 
          trendUp={true} 
        />
        <StatCard 
          icon={<Zap className="text-yellow-400" />} 
          label="Inference Latency" 
          value="420ms" 
          trend="-20ms" 
          trendUp={false} 
        />
      </div>

      <div className="glass p-8 rounded-3xl border border-white/5 overflow-hidden">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h3 className="text-2xl font-bold">Lab Correlation Report</h3>
            <p className="text-white/40">Field Data (TerraPulse AI) vs Standard Laboratory Analysis (Wet Chemistry)</p>
          </div>
          <div className="flex gap-2">
            <div className="px-3 py-1 bg-[#2ecc71]/10 text-[#2ecc71] rounded-full text-[10px] font-bold uppercase tracking-widest border border-[#2ecc71]/20">Verified 100%</div>
            <div className="px-3 py-1 bg-white/5 text-white/40 rounded-full text-[10px] font-bold uppercase tracking-widest border border-white/10">Ref: Pune Lab #214</div>
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead>
              <tr className="border-b border-white/5">
                <th className="py-4 text-[10px] uppercase tracking-widest text-white/40 font-bold">Sample ID</th>
                <th className="py-4 text-[10px] uppercase tracking-widest text-white/40 font-bold">Parameter</th>
                <th className="py-4 text-[10px] uppercase tracking-widest text-white/40 font-bold">Lab Standard</th>
                <th className="py-4 text-[10px] uppercase tracking-widest text-white/40 font-bold">TerraPulse AI</th>
                <th className="py-4 text-[10px] uppercase tracking-widest text-white/40 font-bold">Deviation</th>
              </tr>
            </thead>
            <tbody>
              {VALIDATION_DATA.map((sample, idx) => (
                <tr key={idx} className="border-b border-white/5 hover:bg-white/5 transition-colors group">
                  <td className="py-4 font-bold text-sm text-[#2ecc71]">{sample.id}</td>
                  <td className="py-4 text-sm font-medium text-white/80">{sample.param}</td>
                  <td className="py-4 text-sm text-white/60">{sample.lab}</td>
                  <td className="py-4 text-sm font-bold text-white group-hover:text-[#2ecc71] transition-colors">{sample.ai}</td>
                  <td className="py-4">
                    <span className={cn(
                      "px-2 py-1 rounded text-[10px] font-bold",
                      sample.dev.startsWith('+') ? "text-yellow-400 bg-yellow-400/10" : "text-green-400 bg-green-400/10"
                    )}>
                      {sample.dev}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

       <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="glass p-8 rounded-3xl border border-white/5 relative overflow-hidden">
          <h3 className="text-lg font-bold mb-6">Error Distribution Analysis</h3>
// TerraPulse Module slice 20/21
export default function App() { return <div>Module Active</div>; }

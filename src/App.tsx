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
// TerraPulse Module slice 5/21
export default function App() { return <div>Module Active</div>; }

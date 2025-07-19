import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Gamepad2, Music, Home, Rocket, Users, ChevronLeft, ChevronRight, BookOpen, Notebook, Send } from 'lucide-react';
import { SUBJECTS } from '@/data/subjects';
import ResourceViewer from './ResourceViewer'; 

// --- Sub-components for the new layout ---

const LiveClassPreview = () => (
  <div className="bg-card border border-border-color rounded-xl p-4 flex flex-col animate-fade-in-up" style={{ animationDelay: '100ms' }}>
    <div className="flex justify-between items-center mb-3">
      <h3 className="font-semibold text-text-primary">Live Class</h3>
      <span className="flex items-center gap-1.5 text-xs text-red-400 font-bold">
        <span className="relative flex h-2 w-2"><span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span><span className="relative inline-flex rounded-full h-2 w-2 bg-red-500"></span></span>
        LIVE
      </span>
    </div>
    <div className="aspect-video bg-secondary rounded-lg flex items-center justify-center text-text-tertiary">
      <span>Screen Share</span>
    </div>
    <div className="flex p-1.5 gap-1.5">
        <div className="w-1/4 aspect-square bg-hover rounded" style={{ backgroundImage: "url('https://placehold.co/100x100/4F46E5/f0f0f0?text=T')" }}></div>
        <div className="w-1/4 aspect-square bg-hover rounded" style={{ backgroundImage: "url('https://placehold.co/100x100/7C3AED/f0f0f0?text=S1')" }}></div>
        <div className="w-1/4 aspect-square bg-hover rounded" style={{ backgroundImage: "url('https://placehold.co/100x100/10B981/f0f0f0?text=S2')" }}></div>
        <div className="w-1/4 aspect-square bg-hover rounded flex items-center justify-center text-text-tertiary font-semibold text-xs">+17</div>
    </div>
    <button className="w-full mt-3 py-2 bg-accent-primary hover:bg-accent-primary/90 rounded-md font-semibold text-white transition-colors">Join Class</button>
  </div>
);

const FriendsActivity = () => (
  <div className="bg-card border border-border-color rounded-xl p-4 animate-fade-in-up" style={{ animationDelay: '200ms' }}>
    <h3 className="font-semibold text-text-primary mb-4">Friends' Activity</h3>
    <div className="space-y-4">
      <div className="flex items-center gap-3 text-sm"><Users size={16} className="text-accent-secondary flex-shrink-0" /><p><span className="font-semibold text-text-primary">Jinyoung</span> started a drill in <span className="text-accent-secondary">AP Stats</span>.</p></div>
      <div className="flex items-center gap-3 text-sm"><Gamepad2 size={16} className="text-green-400 flex-shrink-0" /><p><span className="font-semibold text-text-primary">Sungho</span> achieved a new high score in <span className="text-green-400">Tetris</span>.</p></div>
      <div className="flex items-center gap-3 text-sm"><Home size={16} className="text-yellow-400 flex-shrink-0" /><p><span className="font-semibold text-text-primary">Minji</span> added a new item to their <span className="text-yellow-400">Minilife</span>.</p></div>
    </div>
  </div>
);

const CalendarWidget = () => {
    const [date, setDate] = useState(new Date());
    const daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    const year = date.getFullYear();
    const month = date.getMonth();
    const firstDayOfMonth = new Date(year, month, 1).getDay();
    const daysInMonth = new Date(year, month + 1, 0).getDate();
    const today = new Date();
    const changeMonth = (offset) => setDate(prev => new Date(prev.getFullYear(), prev.getMonth() + offset, 1));

    return (
        <div className="bg-card border border-border-color rounded-xl p-4 animate-fade-in-up flex flex-col" style={{ animationDelay: '300ms' }}>
            <div className="flex items-center justify-between mb-4"><h3 className="font-semibold text-text-primary text-lg">{monthNames[month]} {year}</h3><div className="flex items-center gap-2"><button onClick={() => changeMonth(-1)} className="p-1 rounded-md hover:bg-hover text-text-secondary hover:text-text-primary"><ChevronLeft size={20} /></button><button onClick={() => changeMonth(1)} className="p-1 rounded-md hover:bg-hover text-text-secondary hover:text-text-primary"><ChevronRight size={20} /></button></div></div>
            <div className="grid grid-cols-7 gap-y-2 text-center text-xs text-text-tertiary">{daysOfWeek.map(day => <div key={day}>{day}</div>)}</div>
            <div className="grid grid-cols-7 gap-y-2 text-center text-sm mt-2">
                {Array.from({ length: firstDayOfMonth }).map((_, i) => <div key={`empty-${i}`}></div>)}
                {Array.from({ length: daysInMonth }).map((_, day) => {
                    const dayNumber = day + 1;
                    const isToday = year === today.getFullYear() && month === today.getMonth() && dayNumber === today.getDate();
                    return (<div key={dayNumber} className={`relative flex items-center justify-center h-8 w-8 mx-auto rounded-full cursor-pointer ${isToday ? 'bg-accent-primary text-white' : 'hover:bg-hover'}`}>{dayNumber}{(dayNumber === 15 || dayNumber === 26) && <span className="absolute bottom-0.5 h-1 w-1 bg-accent-secondary rounded-full"></span>}</div>);
                })}
            </div>
        </div>
    );
};

const Playground = () => {
    const [activeTab, setActiveTab] = useState('Games');
    const tabs = [ { name: 'Games', icon: Gamepad2 }, { name: 'Media', icon: Music }, { name: 'Minilife', icon: Home }, { name: 'Metaverse', icon: Rocket }];
    return (
        <div className="bg-card border border-border-color rounded-xl p-4 animate-fade-in-up flex flex-col" style={{ animationDelay: '300ms' }}>
            <div className="flex justify-between items-center mb-4"><h3 className="font-semibold text-text-primary">Playground</h3><span className="font-bold text-lg text-yellow-400">💎 1,280 P</span></div>
            <div className="flex border-b border-border-color mb-4">{tabs.map(tab => (<button key={tab.name} onClick={() => setActiveTab(tab.name)} className={`flex-1 flex items-center justify-center gap-2 py-2 text-sm font-semibold transition-colors ${activeTab === tab.name ? 'text-accent-primary border-b-2 border-accent-primary' : 'text-text-secondary hover:text-text-primary'}`}><tab.icon size={16} /><span>{tab.name}</span></button>))}</div>
            <div className="grid grid-cols-2 gap-3"><div className="aspect-square bg-hover rounded-lg flex items-center justify-center text-text-secondary flex-col gap-2"><i className="fa-solid fa-chess-board text-4xl"></i><span className="text-sm font-semibold">Chess</span></div><div className="aspect-square bg-hover rounded-lg flex items-center justify-center text-text-secondary flex-col gap-2"><i className="fa-solid fa-table-cells text-4xl"></i><span className="text-sm font-semibold">Sudoku</span></div></div>
        </div>
    );
};

const StudyAndResourceWidget = ({ className, style, onShowResource }) => {
    const [activeView, setActiveView] = useState('notes'); // 'notes', 'library', 'diary'
    const [notes, setNotes] = useState("- 이산토스트\n- 배고파");
    const [diary, setDiary] = useState("");
    const [status, setStatus] = useState('');
    
    const handleSave = (type) => {
        setStatus('Saving...');
        setTimeout(() => {
            if (type === 'diary') {
                const futureDate = new Date();
                futureDate.setFullYear(futureDate.getFullYear() + 10);
                setStatus(`Sealed! See you on ${futureDate.toLocaleDateString()}.`);
            } else {
                setStatus('Saved!');
            }
        }, 1000);
        setTimeout(() => setStatus(''), 5000);
    };

    return (
        <div className={`bg-card border border-border-color rounded-xl p-4 flex flex-col ${className}`} style={style}>
            <div className="flex justify-between items-center mb-4">
                <h3 className="font-semibold text-text-primary">
                    {activeView === 'notes' && 'Study Notes'}
                    {activeView === 'library' && 'Resource Library'}
                    {activeView === 'diary' && '10-Year Diary'}
                </h3>
                <div className="flex items-center gap-1 bg-secondary p-1 rounded-md">
                    <button onClick={() => setActiveView('notes')} className={`p-1.5 rounded ${activeView === 'notes' ? 'bg-hover text-text-primary' : 'text-text-secondary'} transition-colors`} title="Study Notes"><Notebook size={16}/></button>
                    <button onClick={() => setActiveView('library')} className={`p-1.5 rounded ${activeView === 'library' ? 'bg-hover text-text-primary' : 'text-text-secondary'} transition-colors`} title="Resource Library"><BookOpen size={16}/></button>
                    <button onClick={() => setActiveView('diary')} className={`p-1.5 rounded ${activeView === 'diary' ? 'bg-hover text-text-primary' : 'text-text-secondary'} transition-colors`} title="10-Year Diary"><Send size={16}/></button>
                </div>
            </div>

            {activeView === 'notes' && (
                <div className="flex flex-col flex-grow">
                    <textarea className="flex-grow w-full bg-secondary border border-border-color text-text-primary rounded-md p-3 resize-none focus:ring-2 focus:ring-accent-primary outline-none transition" value={notes} onChange={e => setNotes(e.target.value)} />
                    <div className="flex justify-between items-center mt-3"><span className="text-xs text-text-tertiary h-4">{status}</span><button onClick={() => handleSave('notes')} className="px-4 py-2 bg-accent-primary hover:bg-accent-primary/90 rounded-md font-semibold text-white transition-colors">Save Notes</button></div>
                </div>
            )}
            {activeView === 'library' && (
                <div className="flex flex-col flex-grow space-y-3">
                    <div className="bg-hover p-3 rounded-lg flex items-center justify-between"><div><p className="text-xs text-text-tertiary font-semibold">AP STATISTICS</p><h3 className="font-semibold text-text-primary mt-1">👽 Wonjaemon's Adventure</h3></div><button onClick={onShowResource} className="px-4 py-2 bg-accent-primary hover:bg-accent-primary/90 rounded-md font-semibold text-white transition-colors text-sm">View</button></div>
                    <div className="bg-hover p-3 rounded-lg flex items-center justify-between"><div><p className="text-xs text-text-tertiary font-semibold">AP ECONOMICS</p><h3 className="font-semibold text-text-primary mt-1">Unit 3: Fiscal Policy Notes</h3></div><button className="px-4 py-2 bg-secondary hover:bg-hover rounded-md font-semibold text-text-primary border border-border-color hover:border-border-hover transition-colors text-sm">View</button></div>
                </div>
            )}
            {activeView === 'diary' && (
                 <div className="flex flex-col flex-grow">
                    <textarea className="flex-grow w-full bg-secondary border border-border-color text-text-primary rounded-md p-3 resize-none focus:ring-2 focus:ring-accent-primary outline-none transition" value={diary} onChange={e => setDiary(e.target.value)} placeholder="10년 후의 나에게..." />
                    <div className="flex justify-between items-center mt-3"><span className="text-xs text-text-tertiary h-4">{status}</span><button onClick={() => handleSave('diary')} className="px-4 py-2 bg-accent-secondary hover:bg-accent-secondary/90 rounded-md font-semibold text-white transition-colors">Seal for 10 Years</button></div>
                </div>
            )}
        </div>
    );
};

const SubjectCard = ({ subjectKey, subject }) => {
    const progress = subjectKey === 'econ' ? '72%' : '45%';
    const units = subjectKey === 'econ' ? '43/60' : '18/40';
    const accuracy = subjectKey === 'econ' ? '88%' : '82%';
    const gradient = subjectKey === 'econ' ? 'from-green-500 to-emerald-500' : 'from-blue-500 to-cyan-500';
    const bgColor = subjectKey === 'econ' ? 'bg-green-500/10' : 'bg-blue-500/10';
    const iconColor = subject.theme.primary;

    return (
        <div className="bg-card border border-border-color rounded-xl p-6 group hover:border-border-hover hover:-translate-y-1 transition-all duration-200 relative overflow-hidden">
            <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${gradient} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left`}></div>
            <div className="flex items-center gap-4 mb-4"><div className={`w-12 h-12 rounded-lg flex items-center justify-center ${bgColor}`}><subject.logo className={`text-xl ${iconColor}`} /></div><h3 className="text-lg font-semibold text-text-primary">{subject.name}</h3></div>
            <div className="text-sm text-text-secondary mb-5"><span>Progress</span><div className="w-full bg-hover rounded-full h-2 mt-2"><div className={`bg-gradient-to-r ${gradient} h-2 rounded-full`} style={{ width: progress }}></div></div></div>
            <div className="flex justify-between text-sm text-text-tertiary mb-6"><div><span className="font-semibold text-text-secondary">{units}</span> units</div><div><span className="font-semibold text-text-secondary">{accuracy}</span> accuracy</div></div>
            <Link to={`/drill?subject=${subjectKey}`} className="w-full block text-center py-3 bg-secondary hover:bg-hover rounded-md font-semibold text-text-primary border border-border-color hover:border-border-hover transition-colors">Go to Drill</Link>
        </div>
    );
};

// --- Main Dashboard V2 Component ---
export default function DashboardV2() {
  const [showResource, setShowResource] = useState(false);

  if (showResource) {
      return (
          <div className="p-8">
              <button onClick={() => setShowResource(false)} className="mb-4 px-4 py-2 bg-accent-primary text-white font-semibold rounded-md hover:bg-accent-primary/90 transition-colors">&larr; Back to Dashboard</button>
              <ResourceViewer />
          </div>
      );
  }

  return (
    <>
        <div className="mb-12">
            <h1 className="text-3xl font-bold text-text-primary mb-2">Welcome back, Wonjae! 👋</h1>
            <p className="text-text-secondary">You're on a 7-day streak! Keep up the great work.</p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_2fr_1.5fr] gap-8 items-start">
            
            <div className="space-y-8 hidden xl:flex xl:flex-col">
                <LiveClassPreview />
                <FriendsActivity />
                <CalendarWidget />
            </div>

            <div className="space-y-8">
                <div className="bg-card border border-border-color rounded-xl p-6 animate-fade-in-up" style={{ animationDelay: '100ms' }}>
                     <h2 className="text-xl font-semibold text-text-primary mb-4">Continue Learning</h2>
                     <div className="space-y-4">
                        <div className="bg-hover p-5 rounded-lg flex items-center justify-between"><div className="flex items-center gap-4"><div className="w-12 h-12 rounded-lg flex items-center justify-center bg-purple-500/10"><i className="fas fa-book text-xl text-purple-400"></i></div><div><p className="text-xs text-text-tertiary font-semibold">RESOURCE LIBRARY</p><h3 className="font-semibold text-text-primary">AP Economics - Unit 3: Fiscal Policy</h3></div></div><button className="px-5 py-2 bg-secondary hover:bg-hover rounded-md font-semibold text-text-primary border border-border-color hover:border-border-hover transition-colors">Review</button></div>
                        <div className="bg-hover p-5 rounded-lg flex items-center justify-between"><div className="flex items-center gap-4"><div className="w-12 h-12 rounded-lg flex items-center justify-center bg-blue-500/10"><i className="fas fa-bullseye text-xl text-blue-400"></i></div><div><p className="text-xs text-text-tertiary font-semibold">DRILL SESSION</p><h3 className="font-semibold text-text-primary">AP Statistics - 15 Questions</h3></div></div><button className="px-5 py-2 bg-accent-primary hover:bg-accent-primary/90 rounded-md font-semibold text-white transition-colors">Resume</button></div>
                     </div>
                </div>
                <div className="animate-fade-in-up grid grid-cols-1 md:grid-cols-2 gap-6" style={{ animationDelay: '200ms' }}>
                    {Object.entries(SUBJECTS).map(([key, subject]) => (<SubjectCard key={key} subjectKey={key} subject={subject} />))}
                </div>
                <div className="animate-fade-in-up" style={{ animationDelay: '300ms' }}>
                    <h2 className="text-xl font-semibold text-text-primary mb-4">Trending</h2>
                    <div className="bg-card border border-border-color rounded-xl p-6">
                        <div className="flex items-center justify-between">
                            <div>
                                <p className="text-xs text-text-tertiary font-semibold">AP STATISTICS</p>
                                <h3 className="font-semibold text-text-primary mt-1">👽 Wonjaemon's Adventure: Ch 7 & 8</h3>
                                <p className="text-xs text-text-tertiary mt-2">👀 1,204 views</p>
                            </div>
                            <button onClick={() => setShowResource(true)} className="px-5 py-2 bg-accent-primary hover:bg-accent-primary/90 rounded-md font-semibold text-white transition-colors">View</button>
                        </div>
                    </div>
                </div>
            </div>

            <div className="flex flex-col gap-8 h-full">
                <Playground />
                <div className="flex-grow">
                    <StudyAndResourceWidget onShowResource={() => setShowResource(true)} className="h-full" style={{ animationDelay: '400ms' }} />
                </div>
            </div>
        </div>
    </>
  );
}

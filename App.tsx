
import React, { useState, useMemo } from 'react';
import { Mascot } from './components/Mascot';
import { ViewState, Module } from './types';
import { MODULES } from './constants';

const App: React.FC = () => {
  const [view, setView] = useState<ViewState>('home');
  const [activeModuleId, setActiveModuleId] = useState<string | null>(null);

  const activeModule = useMemo(() => 
    MODULES.find(m => m.id === activeModuleId), 
  [activeModuleId]);

  const navigateToModule = (id: string) => {
    setActiveModuleId(id);
    setView('module');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const goHome = () => {
    setView('home');
    setActiveModuleId(null);
  };

  const currentIndex = MODULES.findIndex(m => m.id === activeModuleId);

  return (
    <div className="min-h-screen flex flex-col pb-24 selection:bg-orange-200">
      {/* Sticky Header */}
      <header className="sticky top-0 z-40 bg-white/70 backdrop-blur-xl border-b border-orange-100 shadow-sm px-4 md:px-8 py-4 flex items-center justify-between">
        <div 
          className="flex items-center gap-3 cursor-pointer group"
          onClick={goHome}
        >
          <div className="w-10 h-10 bg-orange-400 rounded-xl border-2 border-orange-600 flex flex-wrap p-1 group-hover:rotate-12 transition-all shadow-[0_4px_0_rgba(0,0,0,0.1)]">
            <div className="w-[40%] h-[40%] m-[5%] bg-orange-500 rounded-sm"></div>
            <div className="w-[40%] h-[40%] m-[5%] bg-orange-500 rounded-sm"></div>
            <div className="w-[40%] h-[40%] m-[5%] bg-orange-500 rounded-sm"></div>
            <div className="w-[40%] h-[40%] m-[5%] bg-orange-500 rounded-sm"></div>
          </div>
          <h1 className="text-2xl font-black text-orange-950 tracking-tighter">UNWAFFLED</h1>
        </div>
        
        <nav className="flex items-center gap-4 md:gap-8">
          <button 
            onClick={goHome}
            className={`text-sm font-bold tracking-widest uppercase transition-all pb-1 ${view === 'home' ? 'text-orange-600 border-b-4 border-orange-400' : 'text-gray-500 hover:text-orange-400'}`}
          >
            Learn
          </button>
          <button 
            onClick={() => setView('cheatsheet')}
            className={`text-sm font-bold tracking-widest uppercase transition-all pb-1 ${view === 'cheatsheet' ? 'text-orange-600 border-b-4 border-orange-400' : 'text-gray-500 hover:text-orange-400'}`}
          >
            Cheat Sheet
          </button>
        </nav>
      </header>

      {/* Main Content Area */}
      <main className="flex-grow max-w-6xl mx-auto w-full px-6 py-12 md:py-20">
        {view === 'home' && (
          <div className="space-y-24">
            <header className="text-center space-y-8">
              <div className="inline-flex items-center gap-2 px-6 py-2 bg-orange-100 text-orange-700 text-xs font-black rounded-full uppercase tracking-[0.3em] shadow-sm animate-bounce">
                📢 THE MASTERCLASS FOR NOTICE WRITING
              </div>
              <h2 className="text-6xl md:text-8xl font-black text-orange-950 leading-[0.85] tracking-tighter">
                Serve it hot.<br/><span className="text-orange-500 underline decoration-orange-200 underline-offset-[16px] decoration-8">Keep it short.</span>
              </h2>
              <p className="text-xl md:text-2xl text-orange-900/80 font-bold max-w-2xl mx-auto leading-relaxed italic">
                The ultimate guide to Notice Writing. <br/>
                "The only place where Waffling is strictly forbidden."
              </p>
              <div className="flex justify-center gap-3">
                <div className="h-2.5 w-32 bg-orange-400 rounded-full shadow-sm"></div>
                <div className="h-2.5 w-6 bg-orange-200 rounded-full"></div>
              </div>
            </header>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
              {MODULES.map((module) => (
                <div 
                  key={module.id}
                  onClick={() => navigateToModule(module.id)}
                  className="group relative bg-white/40 backdrop-blur-xl p-10 rounded-[3.5rem] border-2 border-white shadow-[0_30px_60px_-15px_rgba(255,165,0,0.15)] hover:shadow-[0_45px_90px_-20px_rgba(255,165,0,0.25)] hover:bg-white/70 hover:-translate-y-3 transition-all duration-500 cursor-pointer flex flex-col overflow-hidden"
                >
                  <div className="absolute -top-6 -right-6 p-6 opacity-[0.04] group-hover:opacity-[0.1] transition-opacity duration-700">
                    <span className="text-[14rem] select-none pointer-events-none">{module.icon}</span>
                  </div>
                  <div className="text-6xl mb-10 group-hover:scale-125 transition-transform duration-500 origin-left drop-shadow-xl">{module.icon}</div>
                  <h3 className="text-2xl font-black text-gray-950 mb-4 tracking-tight uppercase">{module.title}</h3>
                  <p className="text-gray-700 text-base leading-relaxed font-bold flex-grow opacity-80">{module.shortDesc}</p>
                  <div className="mt-12 flex items-center text-orange-600 font-black text-sm uppercase tracking-widest bg-orange-50 w-fit px-4 py-2 rounded-full border border-orange-100 group-hover:bg-orange-500 group-hover:text-white transition-colors">
                    Start Learning
                    <svg className="w-5 h-5 ml-2 group-hover:translate-x-3 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="4" d="M13 7l5 5m0 0l-5 5m5-5H6"></path></svg>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {view === 'module' && activeModule && (
          <div className="space-y-12 animate-in fade-in slide-in-from-bottom-12 duration-700">
            <button 
              onClick={goHome}
              className="group flex items-center text-sm font-black text-orange-600 hover:text-orange-900 transition-colors uppercase tracking-[0.3em]"
            >
              <svg className="w-5 h-5 mr-2 group-hover:-translate-x-2 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="4" d="M11 17l-5-5m0 0l5-5m-5 5h12"></path></svg>
              All Topics
            </button>
            
            <div className="flex items-center gap-8">
              <span className="text-8xl drop-shadow-2xl">{activeModule.icon}</span>
              <h2 className="text-5xl md:text-7xl font-black text-gray-950 tracking-tighter leading-[0.9]">{activeModule.title}</h2>
            </div>
            
            <div className="bg-white/90 backdrop-blur-3xl rounded-[4rem] p-8 md:p-16 shadow-[0_60px_120px_-30px_rgba(0,0,0,0.08)] border-4 border-white">
              <div className="max-w-none">
                {activeModule.content}
              </div>
            </div>

            <div className="flex flex-col md:flex-row justify-between items-center gap-10 py-16">
              <div className="flex flex-col md:flex-row gap-4 w-full md:w-auto">
                {currentIndex > 0 && (
                  <button 
                    onClick={() => navigateToModule(MODULES[currentIndex - 1].id)}
                    className="px-12 py-6 rounded-3xl font-black text-gray-500 bg-gray-100 hover:bg-gray-200 hover:text-gray-950 transition-all uppercase tracking-widest text-sm"
                  >
                    Previous Topic
                  </button>
                )}
                <button 
                   onClick={goHome}
                   className="px-12 py-6 rounded-3xl font-black text-gray-500 hover:bg-gray-200 hover:text-gray-950 transition-all uppercase tracking-widest text-sm bg-gray-100"
                >
                  Back to Home
                </button>
              </div>
              <button 
                onClick={() => {
                  const nextModule = MODULES[currentIndex + 1];
                  if (nextModule) {
                    navigateToModule(nextModule.id);
                  } else {
                    setView('cheatsheet');
                  }
                }}
                className="w-full md:w-auto px-20 py-7 bg-orange-500 hover:bg-orange-600 text-white rounded-[3rem] font-black shadow-3xl shadow-orange-300 transition-all hover:-translate-y-2 active:scale-95 uppercase tracking-[0.2em] text-xl"
              >
                {currentIndex === MODULES.length - 1 ? 'Go to Bible' : 'Keep it Crisp'}
              </button>
            </div>
          </div>
        )}

        {view === 'cheatsheet' && (
          <div className="space-y-20 animate-in fade-in slide-in-from-bottom-12 duration-700">
            <header className="text-center space-y-6">
              <h2 className="text-7xl md:text-9xl font-black text-orange-950 tracking-tighter">THE CRISP BIBLE</h2>
              <p className="text-2xl text-orange-800 font-black uppercase tracking-[0.3em] opacity-90">Secret Recipe for Notice Success</p>
            </header>

            <div className="bg-white/80 backdrop-blur-3xl rounded-[5rem] p-12 md:p-28 shadow-3xl border-4 border-white space-y-20">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
                <div className="space-y-12">
                  <h4 className="text-4xl font-black text-orange-950 border-b-8 border-orange-100 pb-6 tracking-tight uppercase">Essentials</h4>
                  <ul className="space-y-8">
                    {['The BOX (Use Pencil & Scale!)', 'Org Name (Centered Top)', 'NOTICE (In Bold Capitals)', 'Date (12th March, 20XX)', 'Subject (Punchy & Underlined)', 'Name & Post (Bottom Left)'].map(item => (
                      <li key={item} className="flex items-start gap-6 text-2xl font-black text-gray-900 group">
                        <div className="mt-1 w-10 h-10 bg-orange-500 text-white rounded-[1rem] flex items-center justify-center shadow-xl group-hover:scale-125 transition-transform duration-300">✓</div>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="bg-gradient-to-br from-orange-50 to-orange-100 p-12 rounded-[4rem] border-2 border-orange-200/40 shadow-inner">
                  <h4 className="text-4xl font-black text-orange-950 mb-10 tracking-tight uppercase">Smart Editing</h4>
                  <div className="space-y-8">
                    <div className="bg-white/95 p-8 rounded-[2.5rem] shadow-md border border-orange-100 transition-all hover:scale-105">
                      <p className="text-xs text-gray-400 font-black line-through italic mb-2 uppercase tracking-widest">I would like to inform everyone that...</p>
                      <p className="text-2xl font-black text-green-600">This is to inform all...</p>
                    </div>
                    <div className="bg-white/95 p-8 rounded-[2.5rem] shadow-md border border-orange-100 transition-all hover:scale-105">
                      <p className="text-xs text-gray-400 font-black line-through italic mb-2 uppercase tracking-widest">Students who want to participate</p>
                      <p className="text-2xl font-black text-green-600">Interested students</p>
                    </div>
                    <div className="bg-white/95 p-8 rounded-[2.5rem] shadow-md border border-orange-100 transition-all hover:scale-105">
                      <p className="text-xs text-gray-400 font-black line-through italic mb-2 uppercase tracking-widest">At the venue of the auditorium</p>
                      <p className="text-2xl font-black text-green-600">In the auditorium</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-red-600 p-16 rounded-[4.5rem] shadow-[0_40px_100px_rgba(220,38,38,0.3)] text-white transform hover:scale-[1.03] transition-transform duration-500 relative overflow-hidden group">
                <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <div className="flex flex-col md:flex-row items-center gap-12 relative z-10">
                  <div className="text-[10rem] animate-pulse drop-shadow-2xl">🚨</div>
                  <div className="text-center md:text-left space-y-4">
                    <h4 className="text-5xl font-black uppercase tracking-[0.15em]">50 WORD LIMIT</h4>
                    <p className="text-3xl font-bold leading-none opacity-95">Every extra word is a deduction. Edit ruthlessly. Sir Crisp hates soggy writing!</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </main>

      {/* Sticky Footer */}
      <footer className="fixed bottom-0 left-0 right-0 bg-orange-950/95 backdrop-blur-md text-orange-200/60 py-5 px-8 text-center z-30 border-t border-white/10">
        <div className="flex items-center justify-center gap-6 text-[11px] md:text-sm font-black uppercase tracking-[0.4em]">
          <span className="text-white">UNWAFFLED</span>
          <span className="w-2 h-2 bg-orange-600 rounded-full shadow-[0_0_8px_rgba(234,88,12,0.5)]"></span>
          <span>By <span className="text-orange-400">Shalaka Kashikar</span></span>
        </div>
      </footer>

      {/* The Mascot */}
      <Mascot />
    </div>
  );
};

export default App;

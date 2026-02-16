
import React from 'react';

export const ModuleFoundation: React.FC = () => (
  <div className="space-y-16">
    {/* Intro Header */}
    <section className="bg-orange-50 p-12 rounded-[4rem] border-l-[12px] border-orange-400 relative overflow-hidden">
      <div className="absolute top-[-20%] right-[-10%] opacity-5 rotate-12">
        <span className="text-[20rem] font-black italic select-none">FOUNDATION</span>
      </div>
      <h3 className="text-4xl font-black mb-6 text-orange-950 uppercase tracking-tighter">Sir Crisp's Philosophy</h3>
      <p className="text-orange-900 leading-tight font-black text-3xl max-w-3xl">
        "Absolute clarity is the best syrup." <br/>
        <span className="text-lg font-bold opacity-80 block mt-4 leading-relaxed text-gray-700">
          A notice isn't just a list of facts. It's a <span className="text-orange-600 underline underline-offset-4 decoration-4">precision tool</span>. You have 50 words to guide a crowd. If you waffle, people get lost. If you stay crisp, you win the marks.
        </span>
      </p>
    </section>

    {/* The 6 W's Grid */}
    <div className="space-y-8">
       <div className="text-center">
         <h4 className="text-4xl font-black text-gray-900 uppercase tracking-tight">The 6 W's Vitality Test</h4>
         <p className="text-gray-500 font-bold italic mt-2">If your notice fails even one, it's headed for the bin!</p>
       </div>
       <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {[
            {w: 'Who', d: 'Target Audience', icon: '👤', color: 'bg-red-100 border-red-200 text-red-700'},
            {w: 'What', d: 'Event/Reason', icon: '📢', color: 'bg-blue-100 border-blue-200 text-blue-700'},
            {w: 'When', d: 'Date & Time', icon: '⏰', color: 'bg-green-100 border-green-200 text-green-700'},
            {w: 'Where', d: 'Exact Venue', icon: '📍', color: 'bg-purple-100 border-purple-200 text-purple-700'},
            {w: 'Why', d: 'Objective', icon: '🎯', color: 'bg-yellow-100 border-yellow-200 text-yellow-700'},
            {w: 'Whom', d: 'Contact Person', icon: '📞', color: 'bg-pink-100 border-pink-200 text-pink-700'}
          ].map(item => (
            <div key={item.w} className={`${item.color} p-6 rounded-[2.5rem] border-2 shadow-sm flex flex-col items-center justify-center text-center group hover:scale-110 hover:-rotate-3 transition-all duration-300 cursor-default`}>
              <span className="text-4xl mb-3 group-hover:scale-125 transition-transform">{item.icon}</span>
              <span className="font-black text-2xl uppercase tracking-tighter mb-1">{item.w}</span>
              <p className="text-[10px] font-black uppercase opacity-60 tracking-widest">{item.d}</p>
            </div>
          ))}
       </div>
    </div>

    {/* Marking & Logic Breakdown */}
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
      {/* Marking Breakdown */}
      <div className="bg-[#1A1A1A] p-12 rounded-[4rem] shadow-3xl text-white relative overflow-hidden border-4 border-orange-500/20">
        <div className="absolute top-4 right-8 bg-orange-500 text-white font-black text-xs px-4 py-1 rounded-full uppercase tracking-widest animate-pulse">
          Exam Bible
        </div>
        <h4 className="text-4xl font-black mb-12 text-orange-400 uppercase tracking-widest leading-none">The Official <br/>Scorecard</h4>
        <div className="space-y-12">
          {[
            {m: '1 Mark', t: 'Format', d: 'Box, Header, Date, Subject, Sign-off.', desc: 'Miss the box? Lose the mark. Forget the date? Lose the mark. This is pure precision.'},
            {m: '2 Marks', t: 'Content', d: 'The 6 W\'s and Logistics.', desc: 'Every missing detail (Time, Venue, Contact) is a -0.5 deduction. Don\'t be vague!'},
            {m: '1 Mark', t: 'Accuracy', d: 'Spelling, Grammar & Tone.', desc: 'Maintain formal register. Errors here suggest a "soggy" effort. Keep it crisp!'}
          ].map((item, i) => (
            <div key={i} className="flex gap-8 group">
              <div className="flex flex-col items-center shrink-0">
                <div className="w-20 h-20 rounded-[2rem] bg-gradient-to-br from-orange-400 to-orange-600 text-white flex flex-col items-center justify-center font-black text-center shadow-[0_0_30px_rgba(234,88,12,0.3)] group-hover:scale-110 transition-transform">
                  <span className="text-xl leading-none">{item.m.split(' ')[0]}</span>
                  <span className="text-[10px] uppercase tracking-widest opacity-80">{item.m.split(' ')[1]}</span>
                </div>
                <div className="w-1 h-full bg-gradient-to-b from-white/20 to-transparent mt-2"></div>
              </div>
              <div className="flex-1 pb-4">
                <h5 className="text-2xl font-black uppercase text-orange-200 mb-1 tracking-tight">{item.t}</h5>
                <p className="text-sm font-bold opacity-50 mb-3 uppercase tracking-wider">{item.d}</p>
                <p className="text-base text-gray-400 font-medium italic leading-relaxed">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Rules Grid */}
      <div className="space-y-8">
        <div className="bg-blue-950 text-white p-10 rounded-[3.5rem] border-4 border-blue-900 shadow-xl space-y-6">
          <div className="flex items-center gap-4">
            <span className="text-4xl">⏳</span>
            <h4 className="text-3xl font-black uppercase tracking-tight text-blue-300">The Tense Rule</h4>
          </div>
          <p className="text-lg font-bold text-blue-100 leading-relaxed italic opacity-80">
            "Notice writing lives in the future."
          </p>
          <div className="space-y-3">
             <div className="bg-white/5 p-4 rounded-2xl border border-white/10 flex items-center gap-4">
               <span className="text-green-400 text-xl">✅</span>
               <span className="font-mono text-sm">"The club <strong>will organize</strong> a tour..."</span>
             </div>
             <div className="bg-white/5 p-4 rounded-2xl border border-white/10 flex items-center gap-4 opacity-50">
               <span className="text-red-400 text-xl">❌</span>
               <span className="font-mono text-sm line-through text-gray-400">"The club organized a tour..."</span>
             </div>
          </div>
        </div>

        <div className="bg-purple-950 text-white p-10 rounded-[3.5rem] border-4 border-purple-900 shadow-xl space-y-6">
          <div className="flex items-center gap-4">
            <span className="text-4xl">🎩</span>
            <h4 className="text-3xl font-black uppercase tracking-tight text-purple-300">Pronoun Policy</h4>
          </div>
          <p className="text-lg font-bold text-purple-100 leading-relaxed italic opacity-80">
            "Be a ghost. Stay in the Third Person."
          </p>
          <div className="space-y-3">
             <div className="bg-white/5 p-4 rounded-2xl border border-white/10 flex items-center gap-4">
               <span className="text-green-400 text-xl">✅</span>
               <span className="font-mono text-sm">"Students are requested to..."</span>
             </div>
             <div className="bg-white/5 p-4 rounded-2xl border border-white/10 flex items-center gap-4 opacity-50">
               <span className="text-red-400 text-xl">❌</span>
               <span className="font-mono text-sm line-through text-gray-400">"I want you to attend..."</span>
             </div>
          </div>
        </div>
      </div>
    </div>

    {/* Common Pitfalls Section: The Danger Zone */}
    <div className="relative bg-black p-1 pt-20 rounded-[4rem] shadow-3xl overflow-hidden border-[8px] border-yellow-400">
      {/* Caution Tape Pattern Background */}
      <div className="absolute top-0 left-0 right-0 h-16 bg-yellow-400 flex items-center overflow-hidden z-10">
        <div className="whitespace-nowrap flex animate-[scroll_20s_linear_infinite]">
          {Array.from({length: 20}).map((_, i) => (
            <span key={i} className="text-black font-black text-2xl uppercase tracking-[0.2em] px-8 flex items-center">
              ⚠️ DANGER ZONE ⚠️ CAUTION ⚠️ MARK KILLERS AHEAD
            </span>
          ))}
        </div>
      </div>
      
      <div className="bg-zinc-900 p-12 rounded-[3.5rem] space-y-12">
        <div className="text-center space-y-3">
          <h4 className="text-5xl font-black text-yellow-400 uppercase tracking-tighter">Sir Crisp's Hall of Shame</h4>
          <p className="text-zinc-400 font-bold uppercase tracking-widest text-xs">These errors will shred your marks like a waffle iron</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              title: "The Floating Date",
              desc: "Writing the date on the right side. Date belongs to the LEFT margin!",
              fix: "FATAL ERROR: Always left-align.",
              icon: "🛑"
            },
            {
              title: "Header Chaos",
              desc: "Starting with 'NOTICE' instead of the Organization Name.",
              fix: "CRITICAL FAIL: Org first.",
              icon: "⛔"
            },
            {
              title: "Signature Missing",
              desc: "Only writing the name. No designation = No marks.",
              fix: "MARK KILLER: Need (Post).",
              icon: "🚫"
            }
          ].map(pitfall => (
            <div key={pitfall.title} className="bg-zinc-800 p-8 rounded-[2.5rem] border-2 border-red-500/30 flex flex-col relative group overflow-hidden">
               {/* Hazard Stripes Decoration */}
               <div className="absolute -top-4 -right-4 w-16 h-16 bg-red-600/10 rotate-45 group-hover:bg-red-600/20 transition-all"></div>
               
               <div className="text-4xl mb-4">{pitfall.icon}</div>
               <h5 className="text-xl font-black text-white mb-3 uppercase tracking-tight">{pitfall.title}</h5>
               <p className="text-sm font-bold text-zinc-400 mb-6 leading-relaxed opacity-80">{pitfall.desc}</p>
               <div className="mt-auto pt-4 border-t border-zinc-700 text-red-500 font-black text-xs uppercase tracking-widest animate-pulse">
                 {pitfall.fix}
               </div>
            </div>
          ))}
        </div>

        <div className="text-center">
           <div className="inline-block bg-yellow-400 text-black px-8 py-3 rounded-full font-black uppercase tracking-widest text-sm hover:scale-105 transition-transform cursor-default">
             STOP THE SOGGY WRITING
           </div>
        </div>
      </div>
    </div>

    {/* Quick Tip Footer */}
    <div className="bg-orange-950 text-white p-12 rounded-[5rem] flex flex-col md:flex-row items-center gap-10">
      <div className="text-7xl">🥨</div>
      <div className="space-y-2">
        <h4 className="text-2xl font-black uppercase text-orange-400">Pro Tip: The Pencil First Rule</h4>
        <p className="text-lg font-bold text-orange-100 opacity-80 italic">
          "Always write your content first, THEN draw the box. Nothing is worse than a notice that spills out of its box. Keep it contained, keep it crisp!"
        </p>
      </div>
    </div>
    
    <style dangerouslySetInnerHTML={{ __html: `
      @keyframes scroll {
        0% { transform: translateX(0); }
        100% { transform: translateX(-50%); }
      }
    `}} />
  </div>
);

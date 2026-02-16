
import React from 'react';

export const ModuleWordDiet: React.FC = () => (
  <div className="space-y-10">
    <header className="bg-red-50 p-8 rounded-[2.5rem] border-2 border-red-100">
      <h3 className="text-4xl font-black text-red-900 mb-2">The 50-Word Diet</h3>
      <p className="text-xl text-red-800 font-bold">Sir Crisp hates soggy, long sentences. Let's slash the fillers ruthlessly.</p>
    </header>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
      <div className="space-y-6">
        <h4 className="text-2xl font-black text-orange-950 uppercase tracking-widest">Technique 1: Slash Redundancy</h4>
        <div className="space-y-4">
          {[
            {w: "Students who are interested", c: "Interested students"},
            {w: "At 10 o'clock in the morning", c: "At 10 AM"},
            {w: "In the month of March", c: "In March"},
            {w: "Kindly bring to your kind notice", c: "Inform you"}
          ].map(pair => (
            <div key={pair.w} className="flex flex-col text-lg border-b border-gray-100 pb-3">
              <span className="line-through text-gray-400 font-medium italic text-base">{pair.w}</span>
              <span className="text-green-600 font-black text-xl">➔ {pair.c}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="space-y-6">
        <h4 className="text-2xl font-black text-orange-950 uppercase tracking-widest">Technique 2: The Colon Method</h4>
        <div className="p-8 bg-white rounded-3xl shadow-xl border-2 border-orange-100 space-y-6">
          <p className="text-sm font-black text-gray-500 uppercase tracking-wider">Instead of a long paragraph:</p>
          <div className="p-5 bg-red-50 rounded-2xl text-base line-through opacity-60 italic leading-relaxed">
            "The meeting will be held on Saturday which is the 15th of March at 10 AM in the school auditorium." (19 words)
          </div>
          <p className="text-sm font-black text-gray-500 uppercase tracking-wider">Write this:</p>
          <div className="p-5 bg-green-50 rounded-2xl text-xl font-black text-green-800 leading-relaxed">
            "Date: 15th March | Time: 10 AM | Venue: School Auditorium" (10 words)
          </div>
          <p className="text-lg text-orange-600 font-black animate-pulse">🔥 SAVED: 9 WORDS!</p>
        </div>
      </div>
    </div>

    <div className="bg-orange-950 text-white p-10 rounded-[3rem]">
      <h4 className="text-3xl font-black mb-6 text-orange-400">Word-Saving Commandments:</h4>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 text-sm">
        <div className="bg-white/10 p-6 rounded-2xl border border-white/5 hover:bg-white/20 transition-colors">
          <p className="font-black uppercase text-orange-300 mb-2 text-base">Active Voice</p>
          <p className="opacity-90 italic text-base">"Meeting is organized by club" <br/><span className="text-orange-400 font-black text-lg">➔</span> "Club organizes meeting"</p>
        </div>
        <div className="bg-white/10 p-6 rounded-2xl border border-white/5 hover:bg-white/20 transition-colors">
          <p className="font-black uppercase text-orange-300 mb-2 text-base">Remove Fillers</p>
          <p className="opacity-90 italic text-base">"I am very pleased to inform you that..." <br/><span className="text-orange-400 font-black text-lg">➔</span> "This is to inform all students that..."</p>
        </div>
        <div className="bg-white/10 p-6 rounded-2xl border border-white/5 hover:bg-white/20 transition-colors">
          <p className="font-black uppercase text-orange-300 mb-2 text-base">Use Slashes/Ranges</p>
          <p className="opacity-90 italic text-base">"15th, 16th and 17th January" <br/><span className="text-orange-400 font-black text-lg">➔</span> "15th-17th January"</p>
        </div>
      </div>
    </div>
  </div>
);

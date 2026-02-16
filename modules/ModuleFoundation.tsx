
import React from 'react';

export const ModuleFoundation: React.FC = () => (
  <div className="space-y-12">
    <section className="bg-orange-50 p-10 rounded-[3rem] border-l-8 border-orange-400">
      <h3 className="text-3xl font-black mb-4 text-orange-950 uppercase">Why Notice Writing Matters</h3>
      <p className="text-orange-900 leading-relaxed font-bold text-2xl">
        It's not just an exam task; it's the art of <span className="text-orange-600 underline">absolute clarity</span>. In 50 words, you learn to communicate efficiently—a skill used everywhere from school boards to corporate offices.
      </p>
    </section>

    <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
      <div className="bg-white p-10 rounded-[3rem] shadow-xl border-2 border-orange-100">
        <h4 className="text-3xl font-black mb-4 text-orange-950 flex items-center gap-3">
          <span className="bg-orange-100 p-2 rounded-xl">✅</span> The 6 W's Test
        </h4>
        <p className="text-lg text-gray-600 mb-8 font-bold italic">If your notice can't answer all of these, it's soggy!</p>
        <div className="grid grid-cols-2 gap-4">
          {[
            {w: 'Who', d: 'Who is this for?'},
            {w: 'What', d: 'What is happening?'},
            {w: 'When', d: 'Date and time?'},
            {w: 'Where', d: 'Exact location?'},
            {w: 'Why', d: 'Purpose/Reason?'},
            {w: 'How', d: 'Action required?'}
          ].map(item => (
            <div key={item.w} className="bg-orange-50 p-4 rounded-2xl border border-orange-200 text-center group hover:bg-orange-500 hover:text-white transition-all">
              <span className="font-black text-2xl uppercase">{item.w}</span>
              <p className="text-xs font-bold mt-1 opacity-80">{item.d}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-[#3E2723] p-10 rounded-[3rem] shadow-xl text-white">
        <h4 className="text-3xl font-black mb-8 text-orange-300 uppercase tracking-widest">Marking Breakdown</h4>
        <div className="space-y-8">
          <div className="border-b border-white/10 pb-6 group">
            <div className="flex justify-between items-center mb-2">
              <span className="font-black text-2xl group-hover:text-orange-300 transition-colors">1. Format</span>
              <span className="text-orange-400 font-black text-xl">1 Mark</span>
            </div>
            <p className="text-sm font-bold opacity-70 italic leading-relaxed">Box, Header, Date, Subject, Name & Designation. Miss the box, lose the mark!</p>
          </div>
          
          <div className="border-b border-white/10 pb-6 group">
            <div className="flex justify-between items-center mb-2">
              <span className="font-black text-2xl group-hover:text-orange-300 transition-colors">2. Content</span>
              <span className="text-orange-400 font-black text-xl">2 Marks</span>
            </div>
            <p className="text-sm font-bold opacity-70 italic leading-relaxed">Relevant info, precise dates, and clear instructions. Don't leave them guessing!</p>
          </div>
          
          <div className="group">
            <div className="flex justify-between items-center mb-2">
              <span className="font-black text-2xl group-hover:text-orange-300 transition-colors">3. Expression</span>
              <span className="text-orange-400 font-black text-xl">1 Mark</span>
            </div>
            <p className="text-sm font-bold opacity-70 italic leading-relaxed">Formal tone, perfect grammar, and staying within 50 words.</p>
          </div>
        </div>
      </div>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
      <div className="bg-blue-50 p-10 rounded-[3rem] border-2 border-blue-100">
        <h4 className="text-2xl font-black text-blue-900 mb-4 uppercase">The Tense Rule</h4>
        <ul className="space-y-4 text-lg font-bold text-blue-800">
          <li className="flex items-center gap-3">
            <span className="text-2xl">⏳</span> Use <span className="underline">Present/Future</span> for announcements.
          </li>
          <li className="flex items-center gap-3">
            <span className="text-2xl">❌</span> Never use Past Tense for events yet to come.
          </li>
          <li className="flex items-center gap-3">
            <span className="text-2xl">✅</span> Correct: "The club <span className="text-blue-600 italic">will organize</span>..."
          </li>
        </ul>
      </div>

      <div className="bg-purple-50 p-10 rounded-[3rem] border-2 border-purple-100">
        <h4 className="text-2xl font-black text-purple-900 mb-4 uppercase">Pronoun Policy</h4>
        <p className="text-lg font-bold text-purple-800 leading-relaxed">
          Always use <span className="underline">Third Person</span> for official notices. Avoid "I" or "You" unless it's a Lost item or a personal Appeal.
        </p>
        <div className="mt-4 p-4 bg-white rounded-2xl border border-purple-200 font-mono text-sm text-purple-600">
          WRONG: "I want you to come to the hall."<br/>
          RIGHT: "Students are requested to attend..."
        </div>
      </div>
    </div>
  </div>
);

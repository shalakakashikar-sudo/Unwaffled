
import React from 'react';
import { NoticePreview } from '../components/NoticePreview';

export const ModuleStructure: React.FC = () => (
  <div className="space-y-16">
    <div className="text-center space-y-4">
      <h3 className="text-5xl font-black text-orange-950 uppercase tracking-tight">The Visual Blueprint</h3>
      <p className="text-xl text-gray-600 font-bold max-w-2xl mx-auto">Every element has a precise home. Misplace one, and Sir Crisp gets soggy!</p>
    </div>

    <NoticePreview 
      showLines={true}
      data={{
        orgName: "NAME OF ISSUING ORGANIZATION",
        date: "15th February, 20XX",
        subject: "[SUBJECT: PUNCHY & UNDERLINED]",
        body: "This is the first paragraph where you state the essential key information regarding the event. Date: Sunday, 20th Mar | Time: 10 AM | Venue: School Hall.\n\nKindly note all instructions carefully. For further details, please contact the undersigned.",
        name: "SIR CRISP",
        designation: "Chief Waffle Officer"
      }}
    />

    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      <div className="bg-white p-8 rounded-[2.5rem] shadow-xl border-2 border-orange-50 hover:-translate-y-2 transition-transform">
        <div className="w-12 h-12 bg-orange-100 rounded-2xl flex items-center justify-center text-2xl mb-4">📏</div>
        <h5 className="font-black text-orange-600 mb-2 uppercase text-sm tracking-widest">Alignment</h5>
        <p className="text-base font-bold text-gray-800 leading-relaxed">Organization, NOTICE, and Subject are <span className="text-orange-600 italic">CENTERED</span>. Date and Sign-off are <span className="text-orange-600 italic">LEFT-ALIGNED</span>.</p>
      </div>
      <div className="bg-white p-8 rounded-[2.5rem] shadow-xl border-2 border-orange-50 hover:-translate-y-2 transition-transform">
        <div className="w-12 h-12 bg-orange-100 rounded-2xl flex items-center justify-center text-2xl mb-4">✏️</div>
        <h5 className="font-black text-orange-600 mb-2 uppercase text-sm tracking-widest">The Box</h5>
        <p className="text-base font-bold text-gray-800 leading-relaxed">Draw it with a pencil and scale. It must enclose <span className="underline">everything</span>. It defines the formal boundary.</p>
      </div>
      <div className="bg-white p-8 rounded-[2.5rem] shadow-xl border-2 border-orange-50 hover:-translate-y-2 transition-transform">
        <div className="w-12 h-12 bg-orange-100 rounded-2xl flex items-center justify-center text-2xl mb-4">✍️</div>
        <h5 className="font-black text-orange-600 mb-2 uppercase text-sm tracking-widest">Authority</h5>
        <p className="text-base font-bold text-gray-800 leading-relaxed">The Issuing Authority (Org Name) goes <span className="underline">first</span>. Never start with the word 'NOTICE'.</p>
      </div>
    </div>

    <div className="bg-orange-950 text-white p-12 rounded-[4rem] space-y-8">
      <h4 className="text-3xl font-black text-orange-400 uppercase text-center">Subject Line Masterclass</h4>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        <div className="space-y-4">
          <p className="text-sm font-black uppercase text-gray-400 tracking-widest">❌ The Waffly Header</p>
          <div className="bg-white/10 p-6 rounded-3xl border border-white/5 line-through opacity-60 text-lg">
            "A meeting for the students of the science club to discuss things."
          </div>
        </div>
        <div className="space-y-4">
          <p className="text-sm font-black uppercase text-orange-300 tracking-widest">✅ The Crisp Header</p>
          <div className="bg-white/10 p-6 rounded-3xl border border-orange-500/50 text-xl font-black">
            SCIENCE CLUB MEETING: EXHIBITION PLANNING
          </div>
        </div>
      </div>
      <p className="text-center font-bold text-orange-200 italic">"Keep it in ALL CAPS or Underline it. It must catch the eye immediately!" — Sir Crisp</p>
    </div>
  </div>
);


import React from 'react';

export const ModuleWordDiet: React.FC = () => (
  <div className="space-y-16">
    <header className="bg-red-50 p-10 rounded-[3rem] border-2 border-red-100 relative overflow-hidden">
      <div className="absolute top-0 right-0 p-8 opacity-10">
        <span className="text-9xl">✂️</span>
      </div>
      <h3 className="text-5xl font-black text-red-900 mb-4 tracking-tighter">THE 50-WORD DIET</h3>
      <p className="text-2xl text-red-800 font-bold max-w-2xl leading-tight">
        Sir Crisp hates soggy, long sentences. Every word must earn its place on the plate. Let's slash the fillers ruthlessly.
      </p>
    </header>

    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
      {/* Technique 1: Redundancy Slasher */}
      <div className="space-y-8">
        <div className="flex items-center gap-4">
          <div className="bg-orange-500 text-white w-12 h-12 rounded-2xl flex items-center justify-center font-black text-2xl shadow-lg">1</div>
          <h4 className="text-3xl font-black text-orange-950 uppercase tracking-tight">Slash Redundancy</h4>
        </div>
        
        <div className="bg-white p-8 rounded-[3rem] shadow-xl border-2 border-orange-50 grid grid-cols-1 gap-4">
          {[
            {w: "Students who are interested", c: "Interested students"},
            {w: "At 10 o'clock in the morning", c: "At 10 AM"},
            {w: "In the month of March", c: "In March"},
            {w: "Kindly bring to your kind notice", c: "Inform you"},
            {w: "All the members are requested to", c: "Members are requested to"},
            {w: "For the purpose of discussing", c: "To discuss"},
            {w: "In the near future", c: "Soon"},
            {w: "During the course of the day", c: "During the day"},
            {w: "A large number of students", c: "Many students"},
            {w: "In view of the fact that", c: "As / Since"},
            {w: "Provided that you have", c: "If you have"},
            {w: "Collaborate together", c: "Collaborate"},
            {w: "Absolutely essential", c: "Essential"},
            {w: "Past history", c: "History"}
          ].map((pair, idx) => (
            <div key={idx} className="flex flex-col text-lg border-b border-gray-50 pb-3 group">
              <span className="line-through text-gray-300 font-medium italic text-sm group-hover:text-red-300 transition-colors">{pair.w}</span>
              <span className="text-green-600 font-black text-xl group-hover:scale-105 origin-left transition-transform">➔ {pair.c}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Technique 2: The Colon Method */}
      <div className="space-y-8">
        <div className="flex items-center gap-4">
          <div className="bg-orange-500 text-white w-12 h-12 rounded-2xl flex items-center justify-center font-black text-2xl shadow-lg">2</div>
          <h4 className="text-3xl font-black text-orange-950 uppercase tracking-tight">The Colon Method</h4>
        </div>

        <div className="space-y-6">
          {/* Example A: Event */}
          <div className="p-8 bg-white rounded-[3rem] shadow-xl border-2 border-orange-100 space-y-4">
            <p className="text-xs font-black text-gray-400 uppercase tracking-widest">Scenario: Event Announcement</p>
            <div className="p-5 bg-red-50 rounded-2xl text-sm line-through opacity-60 italic leading-relaxed">
              "The meeting will be held on Saturday which is the 15th of March at 10 AM in the school auditorium." (19 words)
            </div>
            <div className="p-5 bg-green-50 rounded-2xl text-xl font-black text-green-800 leading-relaxed border-2 border-green-200">
              "Date: 15th March | Time: 10 AM | Venue: Auditorium" (8 words)
            </div>
            <p className="text-lg text-orange-600 font-black">🔥 SAVED: 11 WORDS!</p>
          </div>

          {/* Example B: Lost & Found */}
          <div className="p-8 bg-white rounded-[3rem] shadow-xl border-2 border-orange-100 space-y-4">
            <p className="text-xs font-black text-gray-400 uppercase tracking-widest">Scenario: Lost Item</p>
            <div className="p-5 bg-red-50 rounded-2xl text-sm line-through opacity-60 italic leading-relaxed">
              "I have lost my watch which is gold in color and made by the Titan company." (15 words)
            </div>
            <div className="p-5 bg-green-50 rounded-2xl text-xl font-black text-green-800 leading-relaxed border-2 border-green-200">
              "Item: Gold Titan Watch" (4 words)
            </div>
            <p className="text-lg text-orange-600 font-black">🔥 SAVED: 11 WORDS!</p>
          </div>
        </div>
      </div>
    </div>

    {/* Technique 3 & 4: Word Power-Ups */}
    <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
      <div className="bg-indigo-950 text-white p-12 rounded-[4rem] shadow-2xl space-y-6">
        <h4 className="text-3xl font-black text-indigo-300 uppercase">3. Phrase Swapping</h4>
        <p className="opacity-80 font-bold">Replace complex phrases with punchy single words.</p>
        <div className="space-y-4">
          {[
            {from: "With reference to", to: "About"},
            {from: "Owing to the fact that", to: "Because"},
            {from: "In the event of", to: "If"},
            {from: "At this point in time", to: "Now"},
            {from: "Is representative of", to: "Represents"}
          ].map((item, i) => (
            <div key={i} className="flex items-center justify-between bg-white/5 p-4 rounded-2xl border border-white/5">
              <span className="text-gray-400 italic line-through">{item.from}</span>
              <span className="text-indigo-400 font-black text-xl">➔ {item.to}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-emerald-950 text-white p-12 rounded-[4rem] shadow-2xl space-y-6">
        <h4 className="text-3xl font-black text-emerald-300 uppercase">4. Action Verbs</h4>
        <p className="opacity-80 font-bold">Sir Crisp says: "Don't 'make a decision', just 'decide'!"</p>
        <div className="space-y-4">
          {[
            {from: "Give a demonstration", to: "Demonstrate"},
            {from: "Make a contribution", to: "Contribute"},
            {from: "Hold a discussion", to: "Discuss"},
            {from: "Provide assistance", to: "Assist / Help"},
            {from: "Reach a conclusion", to: "Conclude"}
          ].map((item, i) => (
            <div key={i} className="flex items-center justify-between bg-white/5 p-4 rounded-2xl border border-white/5">
              <span className="text-gray-400 italic line-through">{item.from}</span>
              <span className="text-emerald-400 font-black text-xl">➔ {item.to}</span>
            </div>
          ))}
        </div>
      </div>
    </div>

    {/* The Bible of Brevity */}
    <div className="bg-orange-950 text-white p-12 rounded-[5rem] shadow-3xl relative overflow-hidden">
      <div className="absolute -bottom-20 -right-20 opacity-10">
        <span className="text-[20rem] font-black italic">50</span>
      </div>
      <h4 className="text-4xl font-black mb-10 text-orange-400 text-center tracking-tighter uppercase">The Commandments of Brevity</h4>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {[
          {
            title: "Active Voice",
            desc: "Subject + Verb + Object.",
            eg: "Club organizes... (NOT: Is organized by...)"
          },
          {
            title: "No Intro Fluff",
            desc: "Skip 'I am happy to...'",
            eg: "Start with: 'This is to inform...'"
          },
          {
            title: "Range Utility",
            desc: "Use dashes for spans.",
            eg: "15th-17th Jan (Saves 3 words!)"
          },
          {
            title: "Punctuation Pro",
            desc: "Use slashes and pipes.",
            eg: "Time: 10AM-2PM | Fee: ₹100"
          },
          {
            title: "Noun Diet",
            desc: "Use verbs, not nouns.",
            eg: "'Register' (NOT: 'Do registration')"
          },
          {
            title: "Zero Adjectives",
            desc: "No 'wonderful' or 'great'.",
            eg: "Just 'Event' or 'Concert'."
          },
          {
            title: "Whom To Contact",
            desc: "End with a punchy line.",
            eg: "Contact: Undersigned"
          },
          {
            title: "Audit Word Count",
            desc: "Count only the body.",
            eg: "Header/Footer don't count!"
          }
        ].map((item, idx) => (
          <div key={idx} className="bg-white/10 p-8 rounded-[2.5rem] border border-white/5 hover:bg-white/20 transition-all flex flex-col justify-between">
            <div>
              <p className="font-black uppercase text-orange-300 mb-3 text-lg tracking-tight">{item.title}</p>
              <p className="opacity-90 italic text-sm mb-4 leading-relaxed">{item.desc}</p>
            </div>
            <p className="text-xs font-black text-orange-100/50 uppercase tracking-widest mt-auto">{item.eg}</p>
          </div>
        ))}
      </div>
    </div>

    <div className="bg-orange-100 p-8 rounded-[3rem] border-2 border-orange-200 text-center">
      <p className="text-3xl font-black text-orange-900 italic">"Remember: A 51-word notice is like a soggy waffle. Nobody wants it!"</p>
      <p className="text-sm font-black text-orange-600 uppercase tracking-[0.3em] mt-2">— Sir Crisp</p>
    </div>
  </div>
);

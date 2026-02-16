
import React from 'react';
import { NoticePreview } from '../components/NoticePreview';

export const ModuleStructure: React.FC = () => (
  <div className="space-y-20">
    {/* Section 1: Introduction */}
    <div className="text-center space-y-4">
      <div className="inline-block bg-orange-100 text-orange-600 px-6 py-2 rounded-full text-xs font-black uppercase tracking-[0.3em] mb-4">
        Chapter 2: The Skeleton
      </div>
      <h3 className="text-6xl font-black text-orange-950 uppercase tracking-tighter">The Visual Blueprint</h3>
      <p className="text-xl text-gray-600 font-bold max-w-2xl mx-auto leading-relaxed">
        Sir Crisp says: "A notice is like a building. If the foundation is wobbly, the marks collapse." Learn the exact coordinates of excellence.
      </p>
    </div>

    {/* Section 2: The Template Preview */}
    <div className="relative group">
      <div className="absolute -inset-4 bg-orange-400/10 rounded-[4rem] blur-2xl group-hover:bg-orange-400/20 transition-all"></div>
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
    </div>

    {/* Section 3: The Anatomy Breakdown */}
    <div className="space-y-10">
      <h4 className="text-3xl font-black text-orange-950 uppercase tracking-tight text-center">Line-by-Line Anatomy</h4>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {[
          {
            title: "1. The Anchor",
            part: "Org Name",
            desc: "Always the first line. Centered. All caps preferred.",
            tip: "Never start with 'NOTICE'!"
          },
          {
            title: "2. The Label",
            part: "NOTICE",
            desc: "Centered, bold, and in all-caps. It screams the purpose.",
            tip: "Leave a line above and below."
          },
          {
            title: "3. The Timestamp",
            part: "The Date",
            desc: "Left-aligned. Use the formal format: 15th March, 20XX.",
            tip: "No slashes (15/03/24) allowed!"
          },
          {
            title: "4. The Hook",
            part: "The Subject",
            desc: "The 'What'. Centered and Underlined. Keep it under 6 words.",
            tip: "Underline with a ruler!"
          },
          {
            title: "5. The Meat",
            part: "The Body",
            desc: "The 6 W's. Use pipes (|) or colons (:) to save words.",
            tip: "Keep the word count in check."
          },
          {
            title: "6. The Seal",
            part: "The Sign-off",
            desc: "Name and Designation. Left-aligned at the bottom.",
            tip: "Designation goes in brackets."
          }
        ].map((item, idx) => (
          <div key={idx} className="bg-white p-10 rounded-[3rem] shadow-xl border-2 border-orange-50 hover:border-orange-200 transition-all flex flex-col group">
            <span className="text-orange-300 font-black text-xs uppercase tracking-widest mb-2">{item.title}</span>
            <h5 className="text-2xl font-black text-gray-900 mb-4 tracking-tight group-hover:text-orange-600 transition-colors">{item.part}</h5>
            <p className="text-gray-600 font-medium mb-6 text-sm leading-relaxed">{item.desc}</p>
            <div className="mt-auto bg-orange-50 p-3 rounded-2xl text-[10px] font-black text-orange-700 uppercase tracking-wider">
              💡 {item.tip}
            </div>
          </div>
        ))}
      </div>
    </div>

    {/* Section 4: Brevity Hacks (Visual Punctuation) */}
    <div className="bg-indigo-950 text-white p-16 rounded-[5rem] shadow-3xl relative overflow-hidden">
      <div className="absolute top-0 right-0 p-12 opacity-5">
        <span className="text-9xl font-black italic">| : —</span>
      </div>
      <div className="relative z-10 space-y-12">
        <div className="text-center space-y-4">
          <h4 className="text-4xl font-black text-indigo-300 uppercase tracking-tighter">Brevity Hacks: Visual Punctuation</h4>
          <p className="text-indigo-100 font-bold opacity-70">Don't write sentences when symbols can do the job better.</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="space-y-6">
            <h5 className="text-xl font-black text-orange-400 uppercase tracking-widest flex items-center gap-3">
              <span className="w-8 h-8 rounded-full bg-orange-400 text-indigo-950 flex items-center justify-center text-sm font-black">1</span>
              The Pipe Operator (|)
            </h5>
            <div className="space-y-4">
              <div className="p-5 bg-white/5 rounded-2xl border border-white/10 opacity-50 line-through">
                "The meeting will happen on 10th March and the time is 5 PM and it is in Room 5." (18 words)
              </div>
              <div className="p-5 bg-white/10 rounded-2xl border-2 border-indigo-400 text-xl font-black text-indigo-200 italic">
                "Date: 10th Mar | Time: 5 PM | Venue: Room 5" (10 words)
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <h5 className="text-xl font-black text-orange-400 uppercase tracking-widest flex items-center gap-3">
              <span className="w-8 h-8 rounded-full bg-orange-400 text-indigo-950 flex items-center justify-center text-sm font-black">2</span>
              The Range Dash (—)
            </h5>
            <div className="space-y-4">
              <div className="p-5 bg-white/5 rounded-2xl border border-white/10 opacity-50 line-through">
                "It is open to students of classes six to classes twelve." (11 words)
              </div>
              <div className="p-5 bg-white/10 rounded-2xl border-2 border-indigo-400 text-xl font-black text-indigo-200 italic">
                "Eligibility: Classes VI—XII" (3 words)
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    {/* Section 5: Subject Line Masterclass Expanded */}
    <div className="bg-orange-50 p-16 rounded-[4rem] border-4 border-orange-100 space-y-12">
      <div className="text-center space-y-2">
        <h4 className="text-4xl font-black text-orange-950 uppercase tracking-tight">Subject Line Masterclass</h4>
        <p className="text-orange-800 font-bold opacity-70 italic">Transform soggy headers into punchy headlines.</p>
      </div>

      <div className="grid grid-cols-1 gap-6">
        {[
          {
            type: "Meeting",
            bad: "A gathering for the students of the science club to talk about the fair",
            good: "SCIENCE CLUB MEETING: EXHIBITION PLANNING"
          },
          {
            type: "Lost Item",
            bad: "I have lost my very expensive watch somewhere in the playground today",
            good: "LOST: TITAN GOLD WATCH"
          },
          {
            type: "Event",
            bad: "Singing competition for students to show their musical talents",
            good: "INTER-HOUSE SINGING COMPETITION"
          },
          {
            type: "Appeal",
            bad: "Please donate some money for the people affected by the big flood",
            good: "APPEAL: FLOOD RELIEF FUND"
          },
          {
            type: "Tour",
            bad: "Information regarding the trip we are taking to the city of Jaipur",
            good: "EDUCATIONAL TOUR: JAIPUR"
          },
          {
            type: "Change",
            bad: "Announcement about how school timings are going to be different now",
            good: "REVISED SCHOOL TIMINGS: SUMMER"
          }
        ].map((item, i) => (
          <div key={i} className="bg-white p-8 rounded-3xl shadow-sm border border-orange-100 flex flex-col md:flex-row items-center gap-10 group overflow-hidden relative">
            <div className="shrink-0 w-24 text-center">
              <span className="text-[10px] font-black text-orange-400 uppercase tracking-widest block mb-1">Category</span>
              <span className="text-sm font-black text-gray-900 uppercase">{item.type}</span>
            </div>
            <div className="flex-grow space-y-4 w-full">
              <div className="flex items-center gap-4 opacity-40 line-through italic text-sm text-red-900">
                <span className="shrink-0">❌</span>
                <p>{item.bad}</p>
              </div>
              <div className="flex items-center gap-4 text-lg font-black text-green-700 tracking-tight group-hover:scale-[1.02] transition-transform origin-left">
                <span className="shrink-0">✅</span>
                <p>{item.good}</p>
              </div>
            </div>
            {/* Background Accent */}
            <div className="absolute top-0 right-0 h-full w-2 bg-gradient-to-b from-orange-400 to-orange-100"></div>
          </div>
        ))}
      </div>

      <div className="text-center pt-6">
        <div className="inline-block p-10 bg-orange-950 text-white rounded-[3.5rem] shadow-2xl max-w-2xl">
          <p className="text-2xl font-black italic">"Subject lines are the syrup. Too thin, and they run off. Too thick, and they get stuck. Keep it centered, capitalized, and crisp!"</p>
          <p className="text-sm font-black text-orange-400 uppercase tracking-[0.3em] mt-4">— Sir Crisp</p>
        </div>
      </div>
    </div>
  </div>
);

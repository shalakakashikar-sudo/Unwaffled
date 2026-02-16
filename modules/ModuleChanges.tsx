
import React from 'react';
import { NoticePreview } from '../components/NoticePreview';

export const ModuleChanges: React.FC = () => (
  <div className="space-y-12">
    <div className="text-center space-y-6">
      <h3 className="text-5xl font-black text-orange-950 uppercase tracking-tighter">Mastering the Update</h3>
      <p className="max-w-2xl mx-auto text-xl text-gray-600 font-bold leading-relaxed">
        Update notices are meant to correct a mental file. You MUST show <span className="text-orange-600 underline">What WAS</span> vs <span className="text-orange-600 underline">What NOW IS</span>.
      </p>
    </div>

    <div className="bg-orange-50 p-12 rounded-[4rem] border-2 border-orange-200 shadow-inner">
      <h4 className="text-xl font-black text-orange-800 mb-8 uppercase tracking-widest text-center">The Clarity Formula:</h4>
      <div className="bg-white p-8 rounded-[2.5rem] shadow-sm border-2 border-orange-100 font-mono text-center text-orange-950 font-black text-xl leading-relaxed">
        "Due to [REASON], [WHAT] changed from [OLD] to [NEW], effective from [DATE]."
      </div>
    </div>

    <div className="space-y-24">
      <div className="space-y-6">
        <h4 className="text-2xl font-black text-orange-950 uppercase flex items-center gap-3">
          <span className="bg-orange-100 p-2 rounded-xl">⏰</span> School Timing Revision
        </h4>
        <NoticePreview 
          data={{
            orgName: "EMERALD HEIGHTS PUBLIC SCHOOL, INDORE",
            date: "5th April, 20XX",
            subject: "CHANGE OF SCHOOL TIMINGS",
            body: "Due to the extreme heat in the summer season, school timings are revised from 10th April. New timings will be 7:30 AM-1:30 PM instead of 8 AM-2 PM.\n\nAll students and staff must adhere to this schedule. Contact the undersigned for queries regarding bus timings during transition.",
            name: "Anjali Rao",
            designation: "School Captain"
          }}
        />
      </div>

      <div className="space-y-6">
        <h4 className="text-2xl font-black text-orange-950 uppercase flex items-center gap-3">
          <span className="bg-orange-100 p-2 rounded-xl">🚌</span> Bus Route Modification
        </h4>
        <NoticePreview 
          data={{
            orgName: "SUNRISE SCHOOL, CHANDIGARH",
            date: "12th June, 20XX",
            subject: "REVISION IN BUS ROUTE NO. 4",
            body: "Due to ongoing road construction at Sector 17, Bus Route No. 4 will follow an alternate path via Sector 18 effective from 15th June.\n\nKindly note that all pick-up timings will advance by 10 minutes. For detailed route map, contact the Transport In-charge immediately.",
            name: "Neha Kapoor",
            designation: "Activity Coordinator"
          }}
        />
      </div>

      <div className="space-y-6">
        <h4 className="text-2xl font-black text-orange-950 uppercase flex items-center gap-3">
          <span className="bg-orange-100 p-2 rounded-xl">🏫</span> Temporary Venue Shift
        </h4>
        <NoticePreview 
          data={{
            orgName: "RIVERSIDE SCHOOL, MUMBAI",
            date: "20th April, 20XX",
            subject: "PTM VENUE CHANGE",
            body: "The Parent-Teacher Meeting scheduled for 28th April will be held in individual classrooms instead of the School Auditorium due to AC repair work.\n\nParents are requested to visit respective class teachers directly between 5 PM and 7 PM. Contact the office for help.",
            name: "Dr. Sharma",
            designation: "Principal"
          }}
        />
      </div>
    </div>

    <div className="bg-gray-900 text-white p-12 rounded-[4rem] border-4 border-orange-500/20">
      <h5 className="text-2xl font-black text-orange-400 mb-4 uppercase">The Clarity Paradox:</h5>
      <p className="text-lg font-bold opacity-90 leading-relaxed italic">
        "Sir Crisp says: It's better to use more words to show the 'Old vs New' contrast than to be brief and cause a riot at the gate! Clarity saves lives (and marks) in updates."
      </p>
    </div>
  </div>
);


import React from 'react';
import { NoticePreview } from '../components/NoticePreview';

export const ModuleEvents: React.FC = () => (
  <div className="space-y-12">
    <div className="bg-orange-950 text-white p-12 rounded-[4rem] shadow-2xl">
      <h3 className="text-3xl font-black mb-8 text-orange-400 uppercase text-center">The Event Execution Matrix</h3>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {[
          { icon: '🎉', t: 'Announce', d: 'The hook!' },
          { icon: '📍', t: 'Logistics', d: 'Where & When?' },
          { icon: '👥', t: 'Eligibility', d: 'Who joins?' },
          { icon: '📝', t: 'Registration', d: 'Deadlines!' }
        ].map(i => (
          <div key={i.t} className="bg-white/10 p-6 rounded-3xl border border-white/5 hover:bg-white/20 transition-all">
            <div className="text-3xl mb-3">{i.icon}</div>
            <p className="text-sm font-black uppercase tracking-tighter text-orange-200">{i.t}</p>
            <p className="text-xs opacity-70 mt-1">{i.d}</p>
          </div>
        ))}
      </div>
    </div>

    <div className="space-y-20">
      <div className="space-y-6">
        <h4 className="text-2xl font-black text-orange-950 uppercase flex items-center gap-3">
          <span className="bg-orange-100 p-2 rounded-xl">🏀</span> Inter-School Tournament
        </h4>
        <NoticePreview 
          data={{
            orgName: "EXCEL PUBLIC SCHOOL, PUNE",
            date: "10th January, 20XX",
            subject: "INTER-SCHOOL BASKETBALL TOURNAMENT",
            body: "An Inter-School Basketball Tournament will be held on 25th January, 20XX at 9 AM at the School Sports Complex. Students of Classes IX-XII can register in teams of five players each.\n\nRegister by 20th January with the undersigned. Participation certificates and trophies will be awarded.",
            name: "Arjun Nair",
            designation: "Sports Captain"
          }}
        />
      </div>

      <div className="space-y-6">
        <h4 className="text-2xl font-black text-orange-950 uppercase flex items-center gap-3">
          <span className="bg-orange-100 p-2 rounded-xl">🚌</span> Regional Study Tour
        </h4>
        <NoticePreview 
          data={{
            orgName: "DELHI PUBLIC SCHOOL, NOIDA",
            date: "1st December, 20XX",
            subject: "EDUCATIONAL TOUR: AGRA-JAIPUR",
            body: "A 3-day educational tour to Agra and Jaipur will be organized for Classes IX-XI from 20th-22nd December, 20XX. Cost: ₹3000 inclusive of transport, boarding, and lodging expenses during the entire trip.\n\nSubmit fees and consent forms by 15th December. Contact the undersigned for details.",
            name: "Ms. Sharma",
            designation: "Tour Coordinator"
          }}
        />
      </div>

      <div className="space-y-6">
        <h4 className="text-2xl font-black text-orange-950 uppercase flex items-center gap-3">
          <span className="bg-orange-100 p-2 rounded-xl">📖</span> Literary Festival Wordfest
        </h4>
        <NoticePreview 
          data={{
            orgName: "ST. XAVIER'S SCHOOL, MUMBAI",
            date: "1st November, 20XX",
            subject: "LITERARY FESTIVAL 'WORDFEST 20XX'",
            body: "A 3-day Literary Festival featuring debates, poetry, and creative writing competitions will be held from 15th-17th November, 20XX. Students of Classes VI-XII are eligible to participate in various categories.\n\nRegister for individual events by 10th November. Contact the undersigned for rules.",
            name: "Arjun Mehta",
            designation: "Secretary, Literary Club"
          }}
        />
      </div>
    </div>

    <div className="bg-blue-900 text-white p-12 rounded-[4rem]">
       <h4 className="text-2xl font-black text-blue-300 uppercase mb-4">Inter-School Pro Tip:</h4>
       <p className="text-lg font-bold opacity-90 leading-relaxed">
         When inviting other schools, always include a <span className="underline">Contact Number</span>. External participants need a way to reach you if they get lost or have specific technical queries!
       </p>
    </div>
  </div>
);


import React from 'react';
import { NoticePreview } from '../components/NoticePreview';

export const ModuleWorkshops: React.FC = () => (
  <div className="space-y-12">
    <div className="bg-gradient-to-r from-indigo-900 to-purple-900 text-white p-12 rounded-[4rem] shadow-2xl">
      <h3 className="text-3xl font-black mb-6 text-indigo-300 uppercase">The Credibility Structure</h3>
      <p className="text-lg font-bold opacity-80 leading-relaxed mb-8">
        Workshops require a <span className="text-indigo-400">Value Proposition</span>. Why should they attend? What will they gain? Who is the expert?
      </p>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {['Resource Person', 'Topic Value', 'Target Audience', 'Registration'].map(tag => (
          <span key={tag} className="bg-white/10 px-4 py-3 rounded-2xl text-xs font-black uppercase tracking-widest text-center border border-white/5">{tag}</span>
        ))}
      </div>
    </div>

    <div className="space-y-20">
      <div className="space-y-8">
        <h4 className="text-2xl font-black text-orange-950 uppercase flex items-center gap-3">
          <span className="bg-orange-100 p-2 rounded-xl">💻</span> IT Club Masterclass
        </h4>
        <NoticePreview 
          data={{
            orgName: "TECH VALLEY SCHOOL, BANGALORE",
            date: "8th September, 20XX",
            subject: "WORKSHOP ON WEB DEVELOPMENT",
            body: "The IT Club organizes a masterclass workshop on Web Development on 20th September, 20XX from 2 PM to 5 PM in the Computer Lab. Mr. Rahul Verma will lead the session.\n\nInterested students must register with the undersigned by 15th September. Limited seats available on first-come basis. For details, contact.",
            name: "Amit Patel",
            designation: "Secretary, IT Club"
          }}
        />
      </div>

      <div className="space-y-8">
        <h4 className="text-2xl font-black text-orange-950 uppercase flex items-center gap-3">
          <span className="bg-orange-100 p-2 rounded-xl">🎓</span> Career Guidance Seminar
        </h4>
        <NoticePreview 
          data={{
            orgName: "MODERN HIGH SCHOOL, CHENNAI",
            date: "14th February, 20XX",
            subject: "SEMINAR: CAREER COUNSELLING",
            body: "A career counselling seminar will be conducted on 22nd February, 20XX at 10 AM in the Auditorium to help students choose right paths after Class XII. Dr. APJ Pillai is invited.\n\nAttendance is compulsory for all XII students. Contact the undersigned for further details regarding the session flow.",
            name: "Priyanka Iyer",
            designation: "Head Girl"
          }}
        />
      </div>

      <div className="space-y-8">
        <h4 className="text-2xl font-black text-orange-950 uppercase flex items-center gap-3">
          <span className="bg-orange-100 p-2 rounded-xl">🖊️</span> Literary Club Guest Speaker
        </h4>
        <NoticePreview 
          data={{
            orgName: "ST. JOSEPH'S COLLEGE, KOCHI",
            date: "5th February, 20XX",
            subject: "LITERARY CLUB MEETING WITH GUEST",
            body: "All club members are invited to a special meeting on 12th February, 20XX at 4 PM in the Library Hall. Renowned author Ms. Anita Nair will discuss career opportunities in writing.\n\nAttendance is mandatory for all members. For details regarding the agenda, contact the undersigned.",
            name: "Deepak Menon",
            designation: "Secretary, Literary Club"
          }}
        />
      </div>
    </div>

    <div className="bg-indigo-50 p-10 rounded-[4rem] border-2 border-indigo-100">
      <h5 className="text-2xl font-black text-indigo-900 mb-4 uppercase">Sir Crisp's Credibility Tip:</h5>
      <p className="text-lg font-bold text-indigo-800 leading-relaxed italic">
        "Always mention the Resource Person's name and title (e.g., 'Senior Developer' or 'Renowned Author'). It earns you 'Expression' marks for appropriate context and tone!"
      </p>
    </div>
  </div>
);

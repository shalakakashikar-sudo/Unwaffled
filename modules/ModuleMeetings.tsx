
import React from 'react';
import { NoticePreview } from '../components/NoticePreview';

export const ModuleMeetings: React.FC = () => (
  <div className="space-y-12">
    <div className="flex flex-col md:flex-row gap-8 items-center">
      <div className="flex-1 space-y-4">
        <h3 className="text-4xl font-black text-orange-950">Type 1: Meeting Notices</h3>
        <p className="text-gray-700 font-bold leading-relaxed text-xl">
          Meetings target specific groups. Every meeting notice MUST answer: <span className="text-orange-600 italic">Purpose, Audience, Venue, and Prerequisites.</span>
        </p>
        <div className="bg-orange-100 p-6 rounded-[2rem] text-lg font-bold text-orange-800 border-2 border-orange-200">
          <span className="text-2xl">💡</span> Sir Crisp says: "Always specify if members need to bring something like reports or proposals!"
        </div>
      </div>
      <div className="w-full md:w-1/3 bg-white p-8 rounded-[3rem] shadow-lg border-2 border-orange-50 text-center">
        <span className="text-6xl mb-4 block">👥</span>
        <p className="text-xs font-black text-gray-400 uppercase tracking-widest">Strategic Tip</p>
        <p className="text-lg font-bold text-gray-800 mt-2 italic">For internal meetings, 'Attendance is Compulsory' is your best friend.</p>
      </div>
    </div>

    <div className="space-y-20">
      <div className="space-y-6">
        <h4 className="text-2xl font-black text-orange-950 uppercase flex items-center gap-3">
          <span className="bg-orange-100 p-2 rounded-xl">📅</span> Student Council Planning
        </h4>
        <NoticePreview 
          data={{
            orgName: "GREEN VALLEY SCHOOL, MUMBAI",
            date: "10th March, 20XX",
            subject: "SCIENCE CLUB EXHIBITION PLANNING",
            body: "All Science Club members must attend a meeting on 15th March, 20XX at 2 PM in the Biology Lab to discuss arrangements for the upcoming Science Exhibition and decide on various roles.\n\nPlease bring your budget proposals and project ideas. For details, contact the undersigned.",
            name: "Priya Sharma",
            designation: "Secretary, Science Club"
          }}
        />
      </div>

      <div className="space-y-6">
        <h4 className="text-2xl font-black text-orange-950 uppercase flex items-center gap-3">
          <span className="bg-orange-100 p-2 rounded-xl">🏠</span> Urgent Resident Briefing
        </h4>
        <NoticePreview 
          data={{
            orgName: "SHANTI APARTMENTS RWA, NOIDA",
            date: "5th June, 20XX",
            subject: "URGENT MEETING: POWER CUTS",
            body: "All residents are requested to attend an urgent meeting on 7th June, 20XX at 6 PM at the Community Hall to discuss frequent power cuts and find a permanent solution for the colony.\n\nAttendance is mandatory for all members. For details, contact the undersigned.",
            name: "Rakesh Kumar",
            designation: "President, RWA"
          }}
        />
      </div>

      <div className="space-y-6">
        <h4 className="text-2xl font-black text-orange-950 uppercase flex items-center gap-3">
          <span className="bg-orange-100 p-2 rounded-xl">🍎</span> Executive Decision Meeting
        </h4>
        <NoticePreview 
          data={{
            orgName: "ABC ENTERPRISES PVT. LTD.",
            date: "12th April, 20XX",
            subject: "TRADE FAIR PARTICIPATION FINALIZATION",
            body: "All department heads are required to attend a meeting on 15th April, 20XX at 10 AM in the Board Room to finalize our participation in the International Trade Fair.\n\nKindly bring your departmental budget proposals. Attendance is mandatory for all executive staff.",
            name: "Rajesh Malhotra",
            designation: "General Manager"
          }}
        />
      </div>
    </div>
  </div>
);

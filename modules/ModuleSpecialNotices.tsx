
import React from 'react';
import { NoticePreview } from '../components/NoticePreview';

export const ModuleSpecialNotices: React.FC = () => (
  <div className="space-y-12">
    <section className="space-y-6">
      <div className="bg-orange-950 text-white p-10 rounded-[3rem]">
        <h3 className="text-3xl font-black text-orange-400">1. Appeal Notices</h3>
        <p className="font-bold opacity-80 mt-2 italic">"Touch hearts, but keep it formal. Balance emotion with info."</p>
      </div>
      <NoticePreview 
        data={{
          orgName: "SUNSHINE INTERNATIONAL SCHOOL",
          date: "15th March, 20XX",
          subject: "APPEAL FOR EARTHQUAKE RELIEF",
          body: "Our school is organizing a relief effort for recent earthquake victims. We request students to donate essential items such as food and clothing.\n\nLet's unite to support those in need. Submit donations at the main office by 25th March between 9 AM and 11 AM.",
          name: "Rohan Shah",
          designation: "Head Boy"
        }}
      />
    </section>

    <section className="space-y-6">
      <div className="bg-white p-10 rounded-[3rem] border-4 border-orange-100">
        <h3 className="text-3xl font-black text-orange-950">2. Change/Update Notices</h3>
        <p className="font-bold text-gray-600 mt-2">Formula: <span className="text-orange-600 italic">Changed from [OLD] to [NEW] effective from [DATE]</span></p>
      </div>
      <NoticePreview 
        data={{
          orgName: "EMERALD HEIGHTS PUBLIC SCHOOL",
          date: "5th April, 20XX",
          subject: "CHANGE OF SCHOOL TIMINGS",
          body: "Due to the summer season, school timings have been revised. From 10th April, timings will be 7:30 AM to 1:30 PM instead of 8:00 AM to 2:00 PM.\n\nAll students and staff members are requested to adhere to the new schedule. Punctuality is requested.",
          name: "Anjali Rao",
          designation: "School Captain"
        }}
      />
    </section>
  </div>
);


import React from 'react';
import { NoticePreview } from '../components/NoticePreview';

export const ModuleSpecialNotices: React.FC = () => (
  <div className="space-y-24">
    {/* Section 1: Appeals */}
    <section className="space-y-12">
      <div className="bg-orange-950 text-white p-10 rounded-[3rem] shadow-xl">
        <h3 className="text-3xl font-black text-orange-400 uppercase tracking-tight">1. Appeal Notices</h3>
        <p className="font-bold opacity-80 mt-2 italic text-lg">"Touch hearts, but keep it formal. Balance emotion with info."</p>
      </div>
      
      {/* Existing Appeal Example */}
      <div className="space-y-6">
        <div className="bg-orange-50 p-4 rounded-2xl border border-orange-100 italic font-medium text-gray-600">
          <span className="font-black text-orange-900 not-italic uppercase text-xs mr-2">Problem Statement:</span>
          Appeal for Earthquake relief funds/items.
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
      </div>

      {/* New Appeal: Slum Education Fund */}
      <div className="space-y-6">
        <div className="bg-orange-50 p-4 rounded-2xl border border-orange-100 italic font-medium text-gray-600">
          <span className="font-black text-orange-900 not-italic uppercase text-xs mr-2">Problem Statement:</span>
          Appeal for funds to sponsor the education of children in a nearby slum.
        </div>
        <NoticePreview 
          data={{
            orgName: "ST. ANNE'S SCHOOL, KOLKATA",
            date: "10th June, 20XX",
            subject: "APPEAL: EACH ONE TEACH ONE",
            body: "The Social Service Club is launching 'Each One Teach One' project for children in the neighborhood slums. We appeal for a donation of ₹500 per student to cover stationery costs.\n\nYour generosity can light up a child's future. Please deposit the amount with your class teacher by 20th June. Receipts will be provided to all donors.",
            name: "Arpita Sen",
            designation: "Secretary, Social Service Club"
          }}
        />
      </div>
    </section>

    {/* Section 2: Changes/Updates */}
    <section className="space-y-12">
      <div className="bg-white p-10 rounded-[3rem] border-4 border-orange-100 shadow-xl">
        <h3 className="text-3xl font-black text-orange-950 uppercase tracking-tight">2. Change/Update Notices</h3>
        <p className="font-bold text-gray-600 mt-2 text-lg">Formula: <span className="text-orange-600 italic">Changed from [OLD] to [NEW] effective from [DATE]</span></p>
      </div>

      {/* Existing Change Example */}
      <div className="space-y-6">
        <div className="bg-orange-50 p-4 rounded-2xl border border-orange-100 italic font-medium text-gray-600">
          <span className="font-black text-orange-900 not-italic uppercase text-xs mr-2">Problem Statement:</span>
          Revision of school timings due to the summer season.
        </div>
        <NoticePreview 
          data={{
            orgName: "EMERALD HEIGHTS PUBLIC SCHOOL",
            date: "05th April, 20XX",
            subject: "CHANGE OF SCHOOL TIMINGS",
            body: "Due to the summer season, school timings have been revised. From 10th April, timings will be 7:30 AM to 1:30 PM instead of 8:00 AM to 2:00 PM.\n\nAll students and staff members are requested to adhere to the new schedule. Punctuality is requested.",
            name: "Anjali Rao",
            designation: "School Captain"
          }}
        />
      </div>

      {/* New Change: Examination Venue */}
      <div className="space-y-6">
        <div className="bg-orange-50 p-4 rounded-2xl border border-orange-100 italic font-medium text-gray-600">
          <span className="font-black text-orange-900 not-italic uppercase text-xs mr-2">Problem Statement:</span>
          Change of venue for the Math Final Exam for Class X.
        </div>
        <NoticePreview 
          data={{
            orgName: "NAVYUG PUBLIC SCHOOL, DELHI",
            date: "28th February, 20XX",
            subject: "URGENT: VENUE CHANGE FOR MATH EXAM",
            body: "The Mathematics final examination for Class X, originally scheduled in the School Hall, will now be conducted in the New Wing (Room Nos. 301-310) due to technical reasons.\n\nExam date and time (3rd March, 9 AM) remain unchanged. Students must report to the new venue 15 minutes before the start time.",
            name: "S.K. Bansal",
            designation: "Controller of Examinations"
          }}
        />
      </div>
    </section>

    {/* Section 3: Disciplinary/Warnings */}
    <section className="space-y-12">
      <div className="bg-red-950 text-white p-10 rounded-[3rem] shadow-xl">
        <h3 className="text-3xl font-black text-red-400 uppercase tracking-tight">3. Warning & Instruction Notices</h3>
        <p className="font-bold opacity-80 mt-2 italic text-lg">"Be firm, clear, and state the consequences of non-compliance."</p>
      </div>

      <div className="space-y-6">
        <div className="bg-red-50 p-4 rounded-2xl border border-red-100 italic font-medium text-gray-600">
          <span className="font-black text-red-900 not-italic uppercase text-xs mr-2">Problem Statement:</span>
          Warning against the use of mobile phones in the school premises.
        </div>
        <NoticePreview 
          data={{
            orgName: "BAL BHARATI PUBLIC SCHOOL, DELHI",
            date: "12th July, 20XX",
            subject: "WARNING: USE OF MOBILE PHONES",
            body: "It has been observed that some students are bringing mobile phones to school. This is a strict violation of school disciplinary rules.\n\nAny student found in possession of a mobile phone will have the device confiscated for the remainder of the academic year. Severe disciplinary action will follow.",
            name: "R.P. Singh",
            designation: "Discipline In-charge"
          }}
        />
      </div>

      <div className="space-y-6">
        <div className="bg-red-50 p-4 rounded-2xl border border-red-100 italic font-medium text-gray-600">
          <span className="font-black text-red-900 not-italic uppercase text-xs mr-2">Problem Statement:</span>
          Compulsory attendance for the upcoming inspection by the Zonal Education Officer.
        </div>
        <NoticePreview 
          data={{
            orgName: "KENDRIYA VIDYALAYA, CHANDIGARH",
            date: "04th November, 20XX",
            subject: "MANDATORY ATTENDANCE: ZONAL INSPECTION",
            body: "The Zonal Education Officer will be visiting our school for an annual inspection on 10th November. 100% attendance of students and staff is mandatory on this day.\n\nEnsure you are in full school uniform and carry all required textbooks. No leave applications will be entertained except on medical grounds.",
            name: "Mrs. Mehra",
            designation: "Principal"
          }}
        />
      </div>
    </section>

    {/* Section 4: Celebratory Notices */}
    <section className="space-y-12">
      <div className="bg-blue-950 text-white p-10 rounded-[3rem] shadow-xl">
        <h3 className="text-3xl font-black text-blue-400 uppercase tracking-tight">4. Celebratory Announcements</h3>
        <p className="font-bold opacity-80 mt-2 italic text-lg">"Celebrate success and invite the community to share the joy."</p>
      </div>

      <div className="space-y-6">
        <div className="bg-blue-50 p-4 rounded-2xl border border-blue-100 italic font-medium text-gray-600">
          <span className="font-black text-blue-900 not-italic uppercase text-xs mr-2">Problem Statement:</span>
          Announce victory in an inter-school debate competition and invite students for a victory assembly.
        </div>
        <NoticePreview 
          data={{
            orgName: "ST. XAVIER'S SCHOOL, MUMBAI",
            date: "20th January, 20XX",
            subject: "VICTORY AT INTER-SCHOOL DEBATE",
            body: "We are proud to announce that our school team won the 'Voice of Mumbai' Inter-School Debate Trophy held yesterday. Kudos to our speakers!\n\nA special victory assembly will be held tomorrow at 8:30 AM in the auditorium to felicitate the winners. Let's gather to cheer our champions.",
            name: "Rohan Varma",
            designation: "Cultural Secretary"
          }}
        />
      </div>

      <div className="space-y-6">
        <div className="bg-blue-50 p-4 rounded-2xl border border-blue-100 italic font-medium text-gray-600">
          <span className="font-black text-blue-900 not-italic uppercase text-xs mr-2">Problem Statement:</span>
          Invitation for the Annual Alumni Meet 'Reminisce 20XX'.
        </div>
        <NoticePreview 
          data={{
            orgName: "MODERN HIGH SCHOOL, SHIMLA",
            date: "01st October, 20XX",
            subject: "REMINISCE: ANNUAL ALUMNI MEET",
            body: "The school is hosting its Annual Alumni Meet on 15th October, 20XX at 6:30 PM in the Main Ground. We invite all former students to relive their school memories.\n\nPlease register your presence on the school portal by 10th October. A grand dinner and cultural show await you. We look forward to seeing you back home!",
            name: "Dr. K. Gupta",
            designation: "President, Alumni Association"
          }}
        />
      </div>
    </section>

    {/* Section 5: Urgent/Holiday Notices */}
    <section className="space-y-12 pb-20">
      <div className="bg-purple-950 text-white p-10 rounded-[3rem] shadow-xl">
        <h3 className="text-3xl font-black text-purple-400 uppercase tracking-tight">5. Urgent Holiday Notices</h3>
        <p className="font-bold opacity-80 mt-2 italic text-lg">"Direct, urgent, and clear on the duration of closure."</p>
      </div>

      <div className="space-y-6">
        <div className="bg-purple-50 p-4 rounded-2xl border border-purple-100 italic font-medium text-gray-600">
          <span className="font-black text-purple-900 not-italic uppercase text-xs mr-2">Problem Statement:</span>
          Sudden holiday announcement due to heavy rainfall.
        </div>
        <NoticePreview 
          data={{
            orgName: "LOYOLA HIGH SCHOOL, PATNA",
            date: "14th August, 20XX",
            subject: "URGENT: SCHOOL CLOSED DUE TO RAIN",
            body: "In view of the red alert issued by the Meteorological Department and the heavy rainfall since morning, the school will remain closed tomorrow, 15th August.\n\nThe Independence Day celebration stands postponed and will be held as per the revised schedule to be announced later. Stay safe at home.",
            name: "Fr. Thomas",
            designation: "Principal"
          }}
        />
      </div>

      <div className="space-y-6">
        <div className="bg-purple-50 p-4 rounded-2xl border border-purple-100 italic font-medium text-gray-600">
          <span className="font-black text-purple-900 not-italic uppercase text-xs mr-2">Problem Statement:</span>
          Holiday on account of a regional festival.
        </div>
        <NoticePreview 
          data={{
            orgName: "ARMY PUBLIC SCHOOL, AMBALA",
            date: "25th October, 20XX",
            subject: "HOLIDAY NOTICE: BHAI DOOJ",
            body: "All students and staff are hereby informed that the school will remain closed on 27th October, 20XX on account of 'Bhai Dooj'.\n\nThe school will reopen on 28th October with regular timings. We wish everyone a happy and joyous festive season.",
            name: "Col. Bhatia",
            designation: "Principal"
          }}
        />
      </div>
    </section>
  </div>
);

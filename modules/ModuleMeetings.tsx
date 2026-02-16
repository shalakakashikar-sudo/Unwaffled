import React from 'react';
import { NoticePreview } from '../components/NoticePreview';

export const ModuleMeetings: React.FC = () => (
  <div className="space-y-12">
    <div className="flex flex-col md:flex-row gap-8 items-center">
      <div className="flex-1 space-y-4">
        <h3 className="text-4xl font-black text-orange-950 uppercase">Type 1: Meeting Notices</h3>
        <p className="text-gray-700 font-bold leading-relaxed text-xl">
          Meetings target specific groups. Every meeting notice MUST answer: <span className="text-orange-600 italic">Purpose, Audience, Venue, and Prerequisites.</span>
        </p>
        <div className="bg-orange-100 p-6 rounded-[2rem] text-lg font-bold text-orange-800 border-2 border-orange-200">
          <span className="text-2xl">💡</span> Sir Crisp says: "Use colons for logistics (Date: 15th Mar) to save words for the actual agenda!"
        </div>
      </div>
      <div className="w-full md:w-1/3 bg-white p-8 rounded-[3rem] shadow-lg border-2 border-orange-50 text-center">
        <span className="text-6xl mb-4 block">👥</span>
        <p className="text-xs font-black text-gray-400 uppercase tracking-widest">Marking Tip</p>
        <p className="text-lg font-bold text-gray-800 mt-2 italic">Specific venues (e.g., 'Room 201') earn more marks than vague ones ('School').</p>
      </div>
    </div>

    <div className="space-y-24">
      {/* Example 1: NCC */}
      <div className="space-y-6">
        <div className="bg-orange-50 p-4 rounded-2xl border border-orange-100 italic font-medium text-gray-600">
          <span className="font-black text-orange-900 not-italic uppercase text-xs mr-2">Problem Statement:</span>
          As NCC Cadet Captain, call a meeting of all cadets to plan for the Independence Day parade.
        </div>
        <NoticePreview 
          data={{
            orgName: "ARMY PUBLIC SCHOOL, AMBALA",
            date: "1st August, 20XX",
            subject: "NCC CADET MEETING: PARADE PLANNING",
            body: "A mandatory meeting for all NCC cadets (Junior and Senior wing) will be held on 5th August, 20XX at 7:30 AM on the Parade Ground to discuss the Independence Day march-past.\n\nPlease attend in full uniform. Bring your drill sticks and water bottles. Absentees will be penalized.",
            name: "Rajesh Thapa",
            designation: "Cadet Captain"
          }}
        />
      </div>

      {/* Example 2: Editorial Board */}
      <div className="space-y-6">
        <div className="bg-orange-50 p-4 rounded-2xl border border-orange-100 italic font-medium text-gray-600">
          <span className="font-black text-orange-900 not-italic uppercase text-xs mr-2">Problem Statement:</span>
          As Student Editor, call a meeting of the Editorial Board to discuss the theme for the upcoming school magazine 'The Clarion'.
        </div>
        <NoticePreview 
          data={{
            orgName: "MODERN ACADEMY, HYDERABAD",
            date: "12th September, 20XX",
            subject: "EDITORIAL BOARD MEETING: MAGAZINE THEME",
            body: "The Editorial Board will meet on 18th September, 20XX at 2:30 PM in the English Department to finalize the central theme for the annual magazine 'The Clarion'.\n\nPlease come prepared with at least three cover design ideas and a list of student contributors from your sections. Your creative input is vital.",
            name: "Ananya Iyer",
            designation: "Student Editor"
          }}
        />
      </div>

      {/* Example 3: Student Council */}
      <div className="space-y-6">
        <div className="bg-orange-50 p-4 rounded-2xl border border-orange-100 italic font-medium text-gray-600">
          <span className="font-black text-orange-900 not-italic uppercase text-xs mr-2">Problem Statement:</span>
          You are the Head Girl. Call an emergency meeting of the Student Council to discuss disciplinary issues during the break.
        </div>
        <NoticePreview 
          data={{
            orgName: "SACRED HEART SCHOOL, SHIMLA",
            date: "20th October, 20XX",
            subject: "EMERGENCY MEETING: SCHOOL DISCIPLINE",
            body: "An emergency meeting of the Student Council is scheduled for tomorrow, 21st October, at 11 AM in the Principal's Conference Room to address recent disciplinary concerns.\n\nAll House Captains and Prefects must attend with a brief report on corridor behavior during lunch hours. Punctuality is strictly expected.",
            name: "Sneha Kapur",
            designation: "Head Girl"
          }}
        />
      </div>

      {/* Example 4: Literary Club */}
      <div className="space-y-6">
        <div className="bg-orange-50 p-4 rounded-2xl border border-orange-100 italic font-medium text-gray-600">
          <span className="font-black text-orange-900 not-italic uppercase text-xs mr-2">Problem Statement:</span>
          As President of the Literary Club, call a meeting to select topics for the Inter-school Debate.
        </div>
        <NoticePreview 
          data={{
            orgName: "ST. XAVIER'S SCHOOL, MUMBAI",
            date: "05th July, 20XX",
            subject: "LITERARY CLUB: DEBATE TOPIC SELECTION",
            body: "All members of the Literary Club are requested to attend a meeting on 10th July, 20XX at 1:45 PM in Room No. 402 to select topics for the upcoming Zonal Debate Competition.\n\nKindly bring a list of current affairs topics suitable for the Senior Category. Active participation from all members is requested.",
            name: "Rohan Varma",
            designation: "President, Literary Club"
          }}
        />
      </div>

      {/* Example 5: Music Department */}
      <div className="space-y-6">
        <div className="bg-orange-50 p-4 rounded-2xl border border-orange-100 italic font-medium text-gray-600">
          <span className="font-black text-orange-900 not-italic uppercase text-xs mr-2">Problem Statement:</span>
          As Music Prefect, call a meeting of the choir members to discuss practice schedules for the Annual Concert.
        </div>
        <NoticePreview 
          data={{
            orgName: "CALCUTTA PUBLIC SCHOOL",
            date: "14th February, 20XX",
            subject: "CHOIR PRACTICE SCHEDULE",
            body: "Members of the Senior School Choir are to meet on 18th February, 20XX at 3 PM in the Music Room to finalize the practice schedule for the Annual Concert.\n\nPlease bring your lyrics booklets and personal instruments if required. Attendance is mandatory for all selected vocalists.",
            name: "Vikram Sen",
            designation: "Music Prefect"
          }}
        />
      </div>

      {/* Example 6: Drama Club */}
      <div className="space-y-6">
        <div className="bg-orange-50 p-4 rounded-2xl border border-orange-100 italic font-medium text-gray-600">
          <span className="font-black text-orange-900 not-italic uppercase text-xs mr-2">Problem Statement:</span>
          As Secretary of the Drama Club, call a meeting to assign roles for the school play.
        </div>
        <NoticePreview 
          data={{
            orgName: "SPRINGDALES SCHOOL, JAIPUR",
            date: "25th November, 20XX",
            subject: "DRAMA CLUB: ROLE ALLOTMENT",
            body: "Selected actors for the annual play 'The Tempest' are required to attend a meeting on 30th November at 2:30 PM in the School Auditorium for final role allotment.\n\nPlease bring your character analysis notes and scripts. Any member unable to attend must inform the undersigned in advance.",
            name: "Meera Das",
            designation: "Secretary, Drama Club"
          }}
        />
      </div>

      {/* Example 7: Prefectorial Board */}
      <div className="space-y-6">
        <div className="bg-orange-50 p-4 rounded-2xl border border-orange-100 italic font-medium text-gray-600">
          <span className="font-black text-orange-900 not-italic uppercase text-xs mr-2">Problem Statement:</span>
          As School Captain, call a meeting of the Prefectorial Board to implement new gate pass rules.
        </div>
        <NoticePreview 
          data={{
            orgName: "BAL BHARATI PUBLIC SCHOOL",
            date: "04th August, 20XX",
            subject: "PREFECTORIAL BOARD: NEW GATE RULES",
            body: "All Prefects and Vice-Prefects must attend a meeting on 8th August, 20XX at 10 AM in the Staff Room to discuss the implementation of the new student gate pass system.\n\nPlease study the draft rules circulated earlier and bring your suggestions. This meeting is vital for smooth campus operations.",
            name: "Aditya Singh",
            designation: "School Captain"
          }}
        />
      </div>

      {/* Example 8: Red Cross Unit */}
      <div className="space-y-6">
        <div className="bg-orange-50 p-4 rounded-2xl border border-orange-100 italic font-medium text-gray-600">
          <span className="font-black text-orange-900 not-italic uppercase text-xs mr-2">Problem Statement:</span>
          As Student Coordinator of the Red Cross Unit, call a meeting for first-aid training.
        </div>
        <NoticePreview 
          data={{
            orgName: "KENDRIYA VIDYALAYA, LUCKNOW",
            date: "12th May, 20XX",
            subject: "RED CROSS UNIT: TRAINING SESSION",
            body: "All registered volunteers of the Red Cross Unit are to meet on 15th May, 20XX at 1:30 PM in the Biology Lab for a mandatory first-aid training session by Dr. Singh.\n\nPlease bring a clean notebook and a pen. Practical demonstration of bandages and basic life support will be covered in this session.",
            name: "Komal Mishra",
            designation: "Student Coordinator"
          }}
        />
      </div>

      {/* Example 9: Robotics Club */}
      <div className="space-y-6">
        <div className="bg-orange-50 p-4 rounded-2xl border border-orange-100 italic font-medium text-gray-600">
          <span className="font-black text-orange-900 not-italic uppercase text-xs mr-2">Problem Statement:</span>
          As President of the Robotics Club, call a meeting to prepare for the National Tech-Fest.
        </div>
        <NoticePreview 
          data={{
            orgName: "DPS, R.K. PURAM, DELHI",
            date: "18th January, 20XX",
            subject: "ROBOTICS CLUB: TECH-FEST PREPARATION",
            body: "Robotics Club members of Classes IX-XII must attend a meeting on 22nd January at 3:30 PM in the Computer Lab to finalize our entries for the National Tech-Fest.\n\nBring your project blueprints and budget estimates. We will also be selecting the core competition team during this meeting.",
            name: "Sahil Mehta",
            designation: "President, Robotics Club"
          }}
        />
      </div>

      {/* Example 10: Heritage Club */}
      <div className="space-y-6">
        <div className="bg-orange-50 p-4 rounded-2xl border border-orange-100 italic font-medium text-gray-600">
          <span className="font-black text-orange-900 not-italic uppercase text-xs mr-2">Problem Statement:</span>
          As Secretary of the Heritage Club, call a meeting to plan a visit to a local museum.
        </div>
        <NoticePreview 
          data={{
            orgName: "HERITAGE SCHOOL, JAIPUR",
            date: "10th October, 20XX",
            subject: "HERITAGE CLUB: MUSEUM VISIT PLANNING",
            body: "All Heritage Club members are requested to attend a meeting on 15th October, 20XX at 1 PM in Room No. 12 to plan a heritage walk and museum visit for next month.\n\nKindly bring suggestions for the itinerary and budget. Permission slips will be distributed at the end of the meeting.",
            name: "Dia Sharma",
            designation: "Secretary, Heritage Club"
          }}
        />
      </div>

      {/* Existing Example 1 */}
      <div className="space-y-6">
        <div className="bg-orange-50 p-4 rounded-2xl border border-orange-100 italic font-medium text-gray-600">
          <span className="font-black text-orange-900 not-italic uppercase text-xs mr-2">Problem Statement:</span>
          As Secretary of the Science Club, call a meeting to plan the annual Science Exhibition.
        </div>
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

      {/* Existing Example 2 */}
      <div className="space-y-6">
        <div className="bg-orange-50 p-4 rounded-2xl border border-orange-100 italic font-medium text-gray-600">
          <span className="font-black text-orange-900 not-italic uppercase text-xs mr-2">Problem Statement:</span>
          As Sports Captain, call a meeting of the Sports Committee to finalize events for the Annual Sports Meet.
        </div>
        <NoticePreview 
          data={{
            orgName: "EXCEL PUBLIC SCHOOL, PUNE",
            date: "12th November, 20XX",
            subject: "SPORTS COMMITTEE MEETING",
            body: "A meeting of the Sports Committee will be held on 18th November, 20XX at 3 PM in the Sports Room to finalize track and field events for the upcoming Annual Meet.\n\nAll house captains must attend with their respective athlete lists. Attendance is mandatory for the selection process.",
            name: "Arjun Nair",
            designation: "Sports Captain"
          }}
        />
      </div>

      {/* Existing Example 3 */}
      <div className="space-y-6">
        <div className="bg-orange-50 p-4 rounded-2xl border border-orange-100 italic font-medium text-gray-600">
          <span className="font-black text-orange-900 not-italic uppercase text-xs mr-2">Problem Statement:</span>
          You are the Secretary of the Environment Club. Call a meeting to discuss a 'Plastic Free Campus' drive.
        </div>
        <NoticePreview 
          data={{
            orgName: "ST. MARY'S CONVENT, DELHI",
            date: "05th July, 20XX",
            subject: "PLASTIC FREE CAMPUS CAMPAIGN",
            body: "All members of the Environment Club are requested to attend a meeting on 10th July, 20XX at 1:30 PM in the Staff Room to plan the 'Plastic Free Campus' drive.\n\nKindly bring suggestions for awareness posters and recycling activities. Your active participation is highly appreciated.",
            name: "Rahul Mehra",
            designation: "Secretary, Environment Club"
          }}
        />
      </div>

      {/* Existing Example 4 */}
      <div className="space-y-6">
        <div className="bg-orange-50 p-4 rounded-2xl border border-orange-100 italic font-medium text-gray-600">
          <span className="font-black text-orange-900 not-italic uppercase text-xs mr-2">Problem Statement:</span>
          As Library Prefect, call a meeting to discuss the purchase of new titles for the school library.
        </div>
        <NoticePreview 
          data={{
            orgName: "MODERN HIGH SCHOOL, SHIMLA",
            date: "20th January, 20XX",
            subject: "LIBRARY ADVISORY COMMITTEE MEETING",
            body: "The Library Advisory Committee will meet on 25th January, 20XX at 11 AM in the Library Hall to discuss the procurement of new fiction and reference titles for the academic year.\n\nPlease come prepared with a list of recommended books from your respective classes. Punctuality is requested.",
            name: "Sonia Gupta",
            designation: "Library Prefect"
          }}
        />
      </div>
    </div>
  </div>
);

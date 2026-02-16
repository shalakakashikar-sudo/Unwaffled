
import React from 'react';
import { NoticePreview } from '../components/NoticePreview';

export const ModuleWorkshops: React.FC = () => (
  <div className="space-y-12">
    <div className="bg-gradient-to-r from-indigo-900 to-purple-900 text-white p-12 rounded-[4rem] shadow-2xl">
      <h3 className="text-3xl font-black mb-6 text-indigo-300 uppercase text-center">The Credibility Structure</h3>
      <p className="text-lg font-bold opacity-80 leading-relaxed mb-8 text-center">
        Workshops require a <span className="text-indigo-400">Value Proposition</span>. Why should they attend? What will they gain? Who is the expert?
      </p>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {['Resource Person', 'Topic Value', 'Target Audience', 'Registration'].map(tag => (
          <span key={tag} className="bg-white/10 px-4 py-3 rounded-2xl text-xs font-black uppercase tracking-widest text-center border border-white/5">{tag}</span>
        ))}
      </div>
    </div>

    <div className="space-y-24">
      {/* Existing Example 1 */}
      <div className="space-y-8">
        <div className="bg-indigo-50 p-4 rounded-2xl border border-indigo-100 italic font-medium text-gray-600">
          <span className="font-black text-indigo-900 not-italic uppercase text-xs mr-2">Problem Statement:</span>
          As Secretary of the Art Club, announce a Photography Workshop by a professional.
        </div>
        <NoticePreview 
          data={{
            orgName: "CALCUTTA PUBLIC SCHOOL",
            date: "10th July, 20XX",
            subject: "WORKSHOP ON DIGITAL PHOTOGRAPHY",
            body: "The Art Club is organizing a three-day workshop on Digital Photography from 20th-22nd July, 20XX in the AV Room. Renowned photographer Mr. S. Sen will conduct the sessions.\n\nInterested students of Classes IX-XII should register with the undersigned by 15th July. Registration fee is ₹200. Limited seats available.",
            name: "Ananya Das",
            designation: "Secretary, Art Club"
          }}
        />
      </div>

      {/* Existing Example 2 */}
      <div className="space-y-8">
        <div className="bg-indigo-50 p-4 rounded-2xl border border-indigo-100 italic font-medium text-gray-600">
          <span className="font-black text-indigo-900 not-italic uppercase text-xs mr-2">Problem Statement:</span>
          Your school is holding a seminar on Mental Health Awareness. Invite students of senior classes.
        </div>
        <NoticePreview 
          data={{
            orgName: "LITTLE FLOWERS SCHOOL, HYDERABAD",
            date: "05th September, 20XX",
            subject: "SEMINAR: MENTAL HEALTH AWARENESS",
            body: "A seminar on 'Mental Health and Stress Management' will be held on 15th September, 20XX at 10 AM in the School Auditorium. Dr. V. Rao, clinical psychologist, will be the keynote speaker.\n\nAttendance is mandatory for all students of Classes X-XII. The session will conclude with an interactive Q&A session. Be punctual.",
            name: "K. Reddy",
            designation: "School Counselor"
          }}
        />
      </div>

      {/* New Example: Creative Writing */}
      <div className="space-y-8">
        <div className="bg-indigo-50 p-4 rounded-2xl border border-indigo-100 italic font-medium text-gray-600">
          <span className="font-black text-indigo-900 not-italic uppercase text-xs mr-2">Problem Statement:</span>
          As Student Editor, announce a Creative Writing workshop by a famous children's author.
        </div>
        <NoticePreview 
          data={{
            orgName: "ST. XAVIER'S HIGH SCHOOL, MUMBAI",
            date: "12th November, 20XX",
            subject: "CREATIVE WRITING MASTERCLASS",
            body: "The Editorial Board is hosting a masterclass on 'Narrative Techniques' by celebrated author Ruskin Bond on 25th November at 11:30 AM in the Library Hall.\n\nStudents of Classes VIII-X are invited to attend. Participants must bring their own journals and pens. Registration closes on 20th November. No entry fee required.",
            name: "Ishaan Mehra",
            designation: "Student Editor"
          }}
        />
      </div>

      {/* New Example: Robotics Bootcamp */}
      <div className="space-y-8">
        <div className="bg-indigo-50 p-4 rounded-2xl border border-indigo-100 italic font-medium text-gray-600">
          <span className="font-black text-indigo-900 not-italic uppercase text-xs mr-2">Problem Statement:</span>
          As President of the Science Club, announce a weekend Robotics & Coding bootcamp.
        </div>
        <NoticePreview 
          data={{
            orgName: "DELHI PUBLIC SCHOOL, R.K. PURAM",
            date: "05th January, 20XX",
            subject: "ROBOTICS & CODING BOOTCAMP",
            body: "The Science Club is organizing a weekend bootcamp on 'Arduino Programming' on 18th-19th January in the Physics Lab. Experts from IIT Delhi will mentor the teams.\n\nInterested teams (max 3 members) must register by 12th January. Kits will be provided by the school. A participation certificate will be awarded to all.",
            name: "Sahil Gupta",
            designation: "President, Science Club"
          }}
        />
      </div>

      {/* Existing Example 3 */}
      <div className="space-y-8">
        <div className="bg-indigo-50 p-4 rounded-2xl border border-indigo-100 italic font-medium text-gray-600">
          <span className="font-black text-indigo-900 not-italic uppercase text-xs mr-2">Problem Statement:</span>
          Invite students for a Career Counselling session by a guest speaker.
        </div>
        <NoticePreview 
          data={{
            orgName: "MODERN HIGH SCHOOL, CHENNAI",
            date: "14th February, 20XX",
            subject: "CAREER COUNSELLING SESSION",
            body: "A career counselling session for Class XII students will be conducted on 22nd February, 20XX at 11 AM in the Hall. Expert counsellor Dr. APJ Pillai will discuss career paths.\n\nStudents are requested to come with their specific career queries. Parents are also invited to attend the second half of the session.",
            name: "Priyanka Iyer",
            designation: "Head Girl"
          }}
        />
      </div>

      {/* New Example: Theater Workshop */}
      <div className="space-y-8">
        <div className="bg-indigo-50 p-4 rounded-2xl border border-indigo-100 italic font-medium text-gray-600">
          <span className="font-black text-indigo-900 not-italic uppercase text-xs mr-2">Problem Statement:</span>
          As Secretary of the Drama Club, notify students about a Theater Production Workshop.
        </div>
        <NoticePreview 
          data={{
            orgName: "SHAKUNTALA VIDYALAYA, MYSORE",
            date: "18th August, 20XX",
            subject: "THEATER PRODUCTION WORKSHOP",
            body: "A comprehensive workshop on 'Stage Lighting and Set Design' will be conducted by NSD faculty on 28th August in the Auditorium from 2 PM to 5 PM.\n\nDrama Club members and interested students of Class XI are requested to attend. Please dress in comfortable dark clothing for the practical sessions. Attendance is mandatory for stage crew.",
            name: "Aditi Nair",
            designation: "Secretary, Drama Club"
          }}
        />
      </div>

      {/* New Example: Financial Literacy */}
      <div className="space-y-8">
        <div className="bg-indigo-50 p-4 rounded-2xl border border-indigo-100 italic font-medium text-gray-600">
          <span className="font-black text-indigo-900 not-italic uppercase text-xs mr-2">Problem Statement:</span>
          As Commerce Society President, announce a seminar on Financial Literacy for senior students.
        </div>
        <NoticePreview 
          data={{
            orgName: "LOYOLA HIGH SCHOOL, PATNA",
            date: "22nd October, 20XX",
            subject: "SEMINAR: FINANCIAL LITERACY",
            body: "The Commerce Society is organizing a seminar on 'Basics of Stock Market and Personal Finance' on 30th October at 10 AM in the AV Room. A senior manager from RBI will lead the talk.\n\nOpen to all students of Classes XI and XII. This session aims to build essential life skills for the future. Contact the society secretary for early registration.",
            name: "Vikram Rathore",
            designation: "President, Commerce Society"
          }}
        />
      </div>

      {/* New Example: Public Speaking */}
      <div className="space-y-8">
        <div className="bg-indigo-50 p-4 rounded-2xl border border-indigo-100 italic font-medium text-gray-600">
          <span className="font-black text-indigo-900 not-italic uppercase text-xs mr-2">Problem Statement:</span>
          Invite students for a Personality Development workshop focused on Public Speaking.
        </div>
        <NoticePreview 
          data={{
            orgName: "G.D. GOENKA SCHOOL, LUCKNOW",
            date: "14th April, 20XX",
            subject: "PUBLIC SPEAKING WORKSHOP",
            body: "A three-day workshop on 'Confident Communication' will be held from 25th-27th April in the Conference Hall. A TedX speaker will share tips on overcoming stage fright.\n\nInterested candidates from Classes IX-XII must register by 20th April. A nominal fee of ₹100 applies. Only 50 slots available on a first-come-first-serve basis.",
            name: "Sanya Kapoor",
            designation: "Cultural Secretary"
          }}
        />
      </div>

      {/* New Example: Traditional Art Workshop */}
      <div className="space-y-8">
        <div className="bg-indigo-50 p-4 rounded-2xl border border-indigo-100 italic font-medium text-gray-600">
          <span className="font-black text-indigo-900 not-italic uppercase text-xs mr-2">Problem Statement:</span>
          As Secretary of the Heritage Club, announce a Madhubani Painting workshop.
        </div>
        <NoticePreview 
          data={{
            orgName: "HERITAGE SCHOOL, JAIPUR",
            date: "05th September, 20XX",
            subject: "MADHUBANI PAINTING WORKSHOP",
            body: "Celebrate Teachers' Day by learning traditional art! A workshop on 'Madhubani Painting' by a state-awardee artist will be held on 10th September in the Art Studio.\n\nAll material will be provided at the venue. Students of Classes VI-VIII can register with their Art teacher. Come and explore our rich artistic heritage!",
            name: "Dia Sharma",
            designation: "Secretary, Heritage Club"
          }}
        />
      </div>

      {/* New Example: Cyber Security */}
      <div className="space-y-8 pb-10">
        <div className="bg-indigo-50 p-4 rounded-2xl border border-indigo-100 italic font-medium text-gray-600">
          <span className="font-black text-indigo-900 not-italic uppercase text-xs mr-2">Problem Statement:</span>
          As IT Captain, announce a workshop on Cyber Security and Online Ethics.
        </div>
        <NoticePreview 
          data={{
            orgName: "SPRINGDALES SCHOOL, NEW DELHI",
            date: "20th May, 20XX",
            subject: "WORKSHOP: CYBER SECURITY & ETHICS",
            body: "An essential workshop on 'Staying Safe Online' will be conducted for Classes VIII-XII on 25th May in the school auditorium. A cyber-law expert from the Delhi Police will be the speaker.\n\nThe workshop will cover data privacy and identification of cyber threats. Attendance is highly recommended for all. Please be seated by 8:45 AM sharp.",
            name: "Rohan Malhotra",
            designation: "IT Captain"
          }}
        />
      </div>
    </div>
  </div>
);

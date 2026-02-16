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

    <div className="space-y-24">
      {/* Example 1: Blood Donation */}
      <div className="space-y-6">
        <div className="bg-orange-50 p-4 rounded-2xl border border-orange-100 italic font-medium text-gray-600">
          <span className="font-black text-orange-900 not-italic uppercase text-xs mr-2">Problem Statement:</span>
          Your school is organizing a Blood Donation Camp in collaboration with Red Cross Society. Invite senior students and staff.
        </div>
        <NoticePreview 
          data={{
            orgName: "ST. STEPHEN'S SCHOOL, DELHI",
            date: "14th June, 20XX",
            subject: "BLOOD DONATION CAMP",
            body: "A Blood Donation Camp is being organized in the School Infirmary on 20th June from 10 AM to 3 PM. Qualified doctors from the Red Cross Society will oversee the camp.\n\nAll staff members and students above 18 years are requested to come forward for this noble cause. Donors will receive a certificate and refreshments. Be a life-saver!",
            name: "Dr. P. Bansal",
            designation: "School Medical Officer"
          }}
        />
      </div>

      {/* Example 2: Inter-School Debate */}
      <div className="space-y-6">
        <div className="bg-orange-50 p-4 rounded-2xl border border-orange-100 italic font-medium text-gray-600">
          <span className="font-black text-orange-900 not-italic uppercase text-xs mr-2">Problem Statement:</span>
          As Cultural Secretary, invite participants for an Inter-School Debate Competition.
        </div>
        <NoticePreview 
          data={{
            orgName: "MODERN HIGH SCHOOL, CHANDIGARH",
            date: "05th August, 20XX",
            subject: "INTER-SCHOOL DEBATE COMPETITION",
            body: "Our school is hosting the Zonal Inter-School Debate on 15th August, 20XX at 10 AM in the Hall. Topic: 'AI will replace human creativity'. Open to Classes XI-XII.\n\nInterested students should register for auditions with their respective English teachers by 8th August. The top two speakers will represent the school.",
            name: "Sanya Malik",
            designation: "Cultural Secretary"
          }}
        />
      </div>

      {/* Example 3: Cyber Security Workshop */}
      <div className="space-y-6">
        <div className="bg-orange-50 p-4 rounded-2xl border border-orange-100 italic font-medium text-gray-600">
          <span className="font-black text-orange-900 not-italic uppercase text-xs mr-2">Problem Statement:</span>
          Notify students of a workshop on 'Safe Internet Usage and Cyber Security'.
        </div>
        <NoticePreview 
          data={{
            orgName: "G.D. GOENKA SCHOOL, LUCKNOW",
            date: "22nd February, 20XX",
            subject: "WORKSHOP: CYBER SECURITY AWARENESS",
            body: "A mandatory workshop on 'Safe Internet Usage' will be conducted for Classes VIII-XII on 28th February in the AV Room. Expert from the Cyber Crime Cell will lead the session.\n\nPlease be seated by 9 AM. The workshop aims to educate students on protecting personal data and identifying online threats. Your presence is essential.",
            name: "R.K. Gupta",
            designation: "HOD Computer Science"
          }}
        />
      </div>

      {/* Example 4: Tree Plantation */}
      <div className="space-y-6">
        <div className="bg-orange-50 p-4 rounded-2xl border border-orange-100 italic font-medium text-gray-600">
          <span className="font-black text-orange-900 not-italic uppercase text-xs mr-2">Problem Statement:</span>
          Invite volunteers for a Tree Plantation Drive on World Environment Day.
        </div>
        <NoticePreview 
          data={{
            orgName: "GREENVALE PUBLIC SCHOOL, PUNE",
            date: "01st June, 20XX",
            subject: "TREE PLANTATION DRIVE",
            body: "To celebrate World Environment Day, the Eco-Club is organizing a plantation drive on 5th June, 20XX at 8 AM in the school backyard and neighboring park.\n\nVolunteers from Classes VI-XII are requested to register their names with the club secretary. Please bring your own small trowels and gardening gloves if possible.",
            name: "Rahul Mehra",
            designation: "Secretary, Eco-Club"
          }}
        />
      </div>

      {/* Example 5: Book Fair */}
      <div className="space-y-6">
        <div className="bg-orange-50 p-4 rounded-2xl border border-orange-100 italic font-medium text-gray-600">
          <span className="font-black text-orange-900 not-italic uppercase text-xs mr-2">Problem Statement:</span>
          Announce a three-day Book Fair in the school library.
        </div>
        <NoticePreview 
          data={{
            orgName: "ST. JOSEPH'S CONVENT, KOCHI",
            date: "10th November, 20XX",
            subject: "ANNUAL SCHOOL BOOK FAIR",
            body: "The School Library is hosting a 3-day Book Fair from 15th-17th November, 20XX. Leading publishers will display fiction, science, and academic titles at heavy discounts.\n\nThe fair will be open during school hours for all students and after school (3-5 PM) for parents. Come and expand your personal libraries! Entry is free.",
            name: "Mrs. D'Souza",
            designation: "Librarian"
          }}
        />
      </div>

      {/* Example 6: Art Exhibition */}
      <div className="space-y-6">
        <div className="bg-orange-50 p-4 rounded-2xl border border-orange-100 italic font-medium text-gray-600">
          <span className="font-black text-orange-900 not-italic uppercase text-xs mr-2">Problem Statement:</span>
          Invite students to submit their artworks for the 'Kalakriti' Art Exhibition.
        </div>
        <NoticePreview 
          data={{
            orgName: "DAV PUBLIC SCHOOL, CHANDIGARH",
            date: "18th July, 20XX",
            subject: "KALAKRITI: ANNUAL ART EXHIBITION",
            body: "The Fine Arts Club invites entries for the 'Kalakriti' Exhibition to be held on 30th July. Themes: 'Nature' or 'Abstract'. All mediums (Oil, Water, Charcoal) are welcome.\n\nSubmit your original work, clearly labeled with Name and Class, to the Art Room by 25th July. Selected works will be framed and displayed in the main gallery.",
            name: "Anil Kapoor",
            designation: "President, Fine Arts Club"
          }}
        />
      </div>

      {/* Example 7: Yoga Day */}
      <div className="space-y-6">
        <div className="bg-orange-50 p-4 rounded-2xl border border-orange-100 italic font-medium text-gray-600">
          <span className="font-black text-orange-900 not-italic uppercase text-xs mr-2">Problem Statement:</span>
          Inform students about the International Yoga Day celebration.
        </div>
        <NoticePreview 
          data={{
            orgName: "ARMY PUBLIC SCHOOL, PATNA",
            date: "15th June, 20XX",
            subject: "INTERNATIONAL YOGA DAY CELEBRATION",
            body: "Our school will observe International Yoga Day on 21st June, 20XX with a mass yoga session on the school playground from 7 AM to 8:30 AM.\n\nAll students are required to attend in their white house uniforms. Please bring a yoga mat or a large towel. Attendance is mandatory for the Physical Education marks.",
            name: "Col. Bhatia",
            designation: "Principal"
          }}
        />
      </div>

      {/* Example 8: Science Fair */}
      <div className="space-y-6">
        <div className="bg-orange-50 p-4 rounded-2xl border border-orange-100 italic font-medium text-gray-600">
          <span className="font-black text-orange-900 not-italic uppercase text-xs mr-2">Problem Statement:</span>
          Invite innovative models for the National Science Day exhibition.
        </div>
        <NoticePreview 
          data={{
            orgName: "KENDRIYA VIDYALAYA, DEHRADUN",
            date: "05th February, 20XX",
            subject: "NATIONAL SCIENCE DAY EXHIBITION",
            body: "To celebrate National Science Day on 28th February, a grand exhibition will be held in the Science Block. We invite innovative working models on 'Sustainable Energy'.\n\nStudents of Classes IX-XII can participate individually or in groups of three. Register your project synopsis with the Science HOD by 15th February.",
            name: "Dr. Verma",
            designation: "HOD Science"
          }}
        />
      </div>

      {/* Example 9: Annual Day Auditions */}
      <div className="space-y-6">
        <div className="bg-orange-50 p-4 rounded-2xl border border-orange-100 italic font-medium text-gray-600">
          <span className="font-black text-orange-900 not-italic uppercase text-xs mr-2">Problem Statement:</span>
          Announce auditions for various cultural programs for the school's Annual Day.
        </div>
        <NoticePreview 
          data={{
            orgName: "DPS, RK PURAM, DELHI",
            date: "12th September, 20XX",
            subject: "ANNUAL DAY: CULTURAL AUDITIONS",
            body: "Auditions for the Annual Day cultural program (Dance, Skit, and Music) will be held from 20th-22nd September in the school auditorium from 2 PM onwards.\n\nStudents from Classes V-XII are invited. Please bring your own backing tracks on a pen drive. Final lists will be put up on the notice board on 25th September.",
            name: "Rishi Sen",
            designation: "Student Coordinator"
          }}
        />
      </div>

      {/* Example 10: ISRO Educational Tour */}
      <div className="space-y-6">
        <div className="bg-orange-50 p-4 rounded-2xl border border-orange-100 italic font-medium text-gray-600">
          <span className="font-black text-orange-900 not-italic uppercase text-xs mr-2">Problem Statement:</span>
          Invite students for a 3-day educational tour to ISRO, Sriharikota.
        </div>
        <NoticePreview 
          data={{
            orgName: "SPACE SCIENCE SCHOOL, BENGALURU",
            date: "10th January, 20XX",
            subject: "EDUCATIONAL TOUR TO ISRO",
            body: "The Science Department is organizing a three-day educational tour to ISRO, Sriharikota from 5th-7th February, 20XX. Open for Class XII Science students only. Cost: ₹6000.\n\nSubmit fees and parent consent forms to the office by 20th January. Seats are limited to 40 on a first-come, first-served basis. Don't miss this unique opportunity!",
            name: "K. Reddy",
            designation: "Tour Coordinator"
          }}
        />
      </div>

      {/* Existing Example 1 */}
      <div className="space-y-6">
        <div className="bg-orange-50 p-4 rounded-2xl border border-orange-100 italic font-medium text-gray-600">
          <span className="font-black text-orange-900 not-italic uppercase text-xs mr-2">Problem Statement:</span>
          Invite students to participate in an Inter-House Singing Competition.
        </div>
        <NoticePreview 
          data={{
            orgName: "MORNING STAR SCHOOL, JAIPUR",
            date: "05th August, 20XX",
            subject: "INTER-HOUSE SINGING COMPETITION",
            body: "An Inter-House Singing Competition will be held on 20th August, 20XX at 10 AM in the Auditorium. Categories include Solo Classical and Group Western Folk. Students of Classes VI-XII are invited.\n\nRegister with the undersigned by 15th August. Auditions will be held on 12th August in the Music Room.",
            name: "Ravi Kumar",
            designation: "Cultural Secretary"
          }}
        />
      </div>

      {/* Existing Example 2 */}
      <div className="space-y-6">
        <div className="bg-orange-50 p-4 rounded-2xl border border-orange-100 italic font-medium text-gray-600">
          <span className="font-black text-orange-900 not-italic uppercase text-xs mr-2">Problem Statement:</span>
          Your school is organizing a Charity Carnival for flood victims. Invite students and parents.
        </div>
        <NoticePreview 
          data={{
            orgName: "RIVERDALE SCHOOL, MUMBAI",
            date: "10th October, 20XX",
            subject: "CHARITY CARNIVAL: FLOOD RELIEF",
            body: "The school is organizing a Charity Carnival on 25th October, 20XX from 9 AM to 4 PM on the school grounds to raise funds for flood relief operations in North India.\n\nEnjoy food stalls, games, and cultural shows. Tickets are available at the school counter for ₹100. Contribute to this noble cause generously.",
            name: "Rohan Desai",
            designation: "Head Boy"
          }}
        />
      </div>

      {/* Existing Example 3 */}
      <div className="space-y-6">
        <div className="bg-orange-50 p-4 rounded-2xl border border-orange-100 italic font-medium text-gray-600">
          <span className="font-black text-orange-900 not-italic uppercase text-xs mr-2">Problem Statement:</span>
          As Drama Club President, announce auditions for the Annual School Play.
        </div>
        <NoticePreview 
          data={{
            orgName: "SHAKUNTALA VIDYALAYA, MYSORE",
            date: "20th October, 20XX",
            subject: "ANNUAL PLAY AUDITIONS",
            body: "Auditions for our upcoming annual play 'The Merchant of Venice' will be conducted on 28th October, 20XX at 3:30 PM in the School Auditorium. Open to students of Classes VIII-XII.\n\nPlease prepare a two-minute monologue for the audition. Sign up at the Drama Club room by 25th October.",
            name: "Aditi Krishnan",
            designation: "President, Drama Club"
          }}
        />
      </div>

      {/* Existing Example 4 */}
      <div className="space-y-6">
        <div className="bg-orange-50 p-4 rounded-2xl border border-orange-100 italic font-medium text-gray-600">
          <span className="font-black text-orange-900 not-italic uppercase text-xs mr-2">Problem Statement:</span>
          As Tour Coordinator, invite students for an adventure trip to Manali.
        </div>
        <NoticePreview 
          data={{
            orgName: "HILLSIDE SCHOOL, DEHRADUN",
            date: "10th May, 20XX",
            subject: "TREKKING EXPEDITION TO MANALI",
            body: "The Adventure Club is organizing a 5-day trekking expedition to Manali from 1st-5th June, 20XX. The trip is open for students of Classes X-XII. Cost: ₹4500 per head.\n\nSubmit fees and parent consent forms by 20th May. A medical fitness certificate is mandatory. Contact the undersigned for details.",
            name: "Captain Rajesh",
            designation: "Adventure Club Coordinator"
          }}
        />
      </div>
    </div>
  </div>
);

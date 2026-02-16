
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

    <div className="space-y-24">
      {/* Existing Example 1 */}
      <div className="space-y-6">
        <div className="bg-orange-50 p-4 rounded-2xl border border-orange-100 italic font-medium text-gray-600">
          <span className="font-black text-orange-900 not-italic uppercase text-xs mr-2">Problem Statement:</span>
          Inform students about the postponement of the English examination.
        </div>
        <NoticePreview 
          data={{
            orgName: "ST. JOSEPH'S SCHOOL, KOCHI",
            date: "12th March, 20XX",
            subject: "POSTPONEMENT OF ENGLISH EXAMINATION",
            body: "Due to an unplanned public holiday, the Class XII English examination scheduled for 15th March has been postponed to 22nd March, 20XX. The timing and venue remain unchanged.\n\nAny inconvenience caused is regretted. All students are requested to note the revised date carefully and appear for the exam accordingly.",
            name: "Vikram Singh",
            designation: "Examination In-charge"
          }}
        />
      </div>

      {/* New Example 1: Summer Timings */}
      <div className="space-y-6">
        <div className="bg-orange-50 p-4 rounded-2xl border border-orange-100 italic font-medium text-gray-600">
          <span className="font-black text-orange-900 not-italic uppercase text-xs mr-2">Problem Statement:</span>
          Inform students and staff about the shift to summer timings.
        </div>
        <NoticePreview 
          data={{
            orgName: "G.D. GOENKA PUBLIC SCHOOL, DELHI",
            date: "25th March, 20XX",
            subject: "REVISED SUMMER TIMINGS",
            body: "In view of the rising temperature, the school will follow summer timings with effect from 1st April, 20XX. The new timings will be 7:30 AM to 1:30 PM for all classes.\n\nThe school buses will ply 30 minutes earlier than the current schedule. Parents and students are requested to note this change and ensure punctuality.",
            name: "Dr. K. Saxena",
            designation: "Principal"
          }}
        />
      </div>

      {/* New Example 2: Winter Uniform */}
      <div className="space-y-6">
        <div className="bg-orange-50 p-4 rounded-2xl border border-orange-100 italic font-medium text-gray-600">
          <span className="font-black text-orange-900 not-italic uppercase text-xs mr-2">Problem Statement:</span>
          Notify students about the mandatory shift to winter uniform.
        </div>
        <NoticePreview 
          data={{
            orgName: "ARMY PUBLIC SCHOOL, AMBALA",
            date: "15th October, 20XX",
            subject: "COMMENCEMENT OF WINTER UNIFORM",
            body: "All students are hereby informed that the switch to the official winter uniform is mandatory from 1st November, 20XX. Full-sleeved shirts and sweaters/blazers must be worn as per the school code.\n\nStudents not in proper winter uniform after the deadline will be sent home. Uniform sets are available at the school tuck shop.",
            name: "R.S. Chauhan",
            designation: "Administrative Officer"
          }}
        />
      </div>

      {/* New Example 3: Bus Route Update */}
      <div className="space-y-6">
        <div className="bg-orange-50 p-4 rounded-2xl border border-orange-100 italic font-medium text-gray-600">
          <span className="font-black text-orange-900 not-italic uppercase text-xs mr-2">Problem Statement:</span>
          Inform students using Bus Route No. 12 about a temporary diversion and time change.
        </div>
        <NoticePreview 
          data={{
            orgName: "MODERN ACADEMY, HYDERABAD",
            date: "05th September, 20XX",
            subject: "CHANGE IN BUS ROUTE NO. 12",
            body: "Due to ongoing road repairs on the Main City Bridge, Bus Route No. 12 will take a diversion via the Bypass Road starting 7th September. This will delay the drop-off time by 15 minutes.\n\nMorning pick-up times remain unchanged. Students using this route are requested to cooperate with the bus staff during this temporary adjustment.",
            name: "S. Murthy",
            designation: "Transport Coordinator"
          }}
        />
      </div>

      {/* New Example 4: Picnic Venue Change */}
      <div className="space-y-6">
        <div className="bg-orange-50 p-4 rounded-2xl border border-orange-100 italic font-medium text-gray-600">
          <span className="font-black text-orange-900 not-italic uppercase text-xs mr-2">Problem Statement:</span>
          Announce a change in the destination for the Class X picnic.
        </div>
        <NoticePreview 
          data={{
            orgName: "ST. COLUMBA'S SCHOOL, CHANDIGARH",
            date: "10th February, 20XX",
            subject: "CHANGE OF PICNIC DESTINATION",
            body: "This is to inform the students of Class X that the venue for the upcoming picnic on 15th February has been changed from 'Splash Water Park' to 'Heritage Village Resorts'.\n\nThe change is due to maintenance work at the water park. Departure time and assembly point remain the same. Please update your consent forms accordingly.",
            name: "Pooja Khanna",
            designation: "Class Coordinator"
          }}
        />
      </div>

      {/* New Example 5: Sports Meet Rescheduling */}
      <div className="space-y-6">
        <div className="bg-orange-50 p-4 rounded-2xl border border-orange-100 italic font-medium text-gray-600">
          <span className="font-black text-orange-900 not-italic uppercase text-xs mr-2">Problem Statement:</span>
          Reschedule the Annual Sports Meet due to heavy rain predictions.
        </div>
        <NoticePreview 
          data={{
            orgName: "LOYOLA HIGH SCHOOL, PATNA",
            date: "12th December, 20XX",
            subject: "RESCHEDULING OF ANNUAL SPORTS MEET",
            body: "The Annual Sports Meet scheduled for 15th December has been postponed due to a forecast of heavy rainfall. The meet will now be held on 22nd December, 20XX.\n\nAll house captains are requested to continue practice sessions during school hours as per the original schedule. Any further updates will be communicated via class teachers.",
            name: "Father Joseph",
            designation: "Principal"
          }}
        />
      </div>

      {/* New Example 6: Cancellation of Workshop */}
      <div className="space-y-6">
        <div className="bg-orange-50 p-4 rounded-2xl border border-orange-100 italic font-medium text-gray-600">
          <span className="font-black text-orange-900 not-italic uppercase text-xs mr-2">Problem Statement:</span>
          Announce the cancellation of a Guest Lecture by Dr. Mehta due to his ill health.
        </div>
        <NoticePreview 
          data={{
            orgName: "SPRINGDALES SCHOOL, JAIPUR",
            date: "20th November, 20XX",
            subject: "CANCELLATION: GUEST LECTURE",
            body: "The guest lecture on 'Space Exploration' by Dr. A.K. Mehta scheduled for 22nd November stands cancelled due to his sudden illness. The event will be rescheduled next month.\n\nRegular classes for Class XI and XII will be held as per the normal timetable during the designated lecture period. Inconvenience caused is regretted.",
            name: "Nidhi Jain",
            designation: "Cultural Secretary"
          }}
        />
      </div>

      {/* New Example 7: Audition Date Shift */}
      <div className="space-y-6">
        <div className="bg-orange-50 p-4 rounded-2xl border border-orange-100 italic font-medium text-gray-600">
          <span className="font-black text-orange-900 not-italic uppercase text-xs mr-2">Problem Statement:</span>
          Inform students that the choir auditions have been moved to an earlier date.
        </div>
        <NoticePreview 
          data={{
            orgName: "BAL BHARATI PUBLIC SCHOOL",
            date: "04th August, 20XX",
            subject: "REVISED AUDITION DATE: SCHOOL CHOIR",
            body: "The auditions for the Senior School Choir, originally scheduled for 10th August, have been advanced to 7th August, 20XX at 2:30 PM in the Music Room.\n\nInterested candidates are requested to register their names with the Music Teacher by tomorrow. Prepare one classical and one contemporary song for the session.",
            name: "Ms. Lalita",
            designation: "HOD Music"
          }}
        />
      </div>

      {/* New Example 8: Syllabus Revision Notice */}
      <div className="space-y-6">
        <div className="bg-orange-50 p-4 rounded-2xl border border-orange-100 italic font-medium text-gray-600">
          <span className="font-black text-orange-900 not-italic uppercase text-xs mr-2">Problem Statement:</span>
          Inform students of a small correction/deletion in the Half-Yearly Exam syllabus for Science.
        </div>
        <NoticePreview 
          data={{
            orgName: "KENDRIYA VIDYALAYA, LUCKNOW",
            date: "02nd September, 20XX",
            subject: "SYLLABUS UPDATE: SCIENCE (CLASS IX)",
            body: "This is to inform the students of Class IX that Chapter 7 'Diversity in Living Organisms' has been deleted from the Science syllabus for the upcoming Half-Yearly Examinations.\n\nQuestions will only be asked from the first six chapters as discussed in the classroom sessions. Students are advised to revise the remaining chapters thoroughly.",
            name: "S.K. Singh",
            designation: "Science Coordinator"
          }}
        />
      </div>

      {/* New Example 9: Office Hours Update */}
      <div className="space-y-6">
        <div className="bg-orange-50 p-4 rounded-2xl border border-orange-100 italic font-medium text-gray-600">
          <span className="font-black text-orange-900 not-italic uppercase text-xs mr-2">Problem Statement:</span>
          Notify students of a change in Librarian's office hours during the exam period.
        </div>
        <NoticePreview 
          data={{
            orgName: "ST. MARY'S ACADEMY, SHIMLA",
            date: "14th May, 20XX",
            subject: "REVISED LIBRARY OFFICE HOURS",
            body: "To assist students during the final examinations, the Library will now remain open from 8:00 AM to 6:00 PM starting 16th May. The Librarian will be available for book issues until 4:00 PM.\n\nStudents are requested to maintain absolute silence and follow the seating arrangements strictly. Late book returns will still incur fines as per standard policy.",
            name: "Mrs. Fernandes",
            designation: "Librarian"
          }}
        />
      </div>

      {/* New Example 10: Parking Policy Update */}
      <div className="space-y-6">
        <div className="bg-orange-50 p-4 rounded-2xl border border-orange-100 italic font-medium text-gray-600">
          <span className="font-black text-orange-900 not-italic uppercase text-xs mr-2">Problem Statement:</span>
          Update the parking rules for senior students bringing bicycles/scooters.
        </div>
        <NoticePreview 
          data={{
            orgName: "DELHI PUBLIC SCHOOL, RANCHI",
            date: "28th July, 20XX",
            subject: "NEW PARKING POLICY FOR STUDENTS",
            body: "Effective from 1st August, all student bicycles and scooters must be parked in the new designated shed behind the South Block. Parking near the main porch is strictly prohibited.\n\nStudents must register their vehicles at the security gate and obtain a parking sticker. Vehicles without stickers will not be allowed inside the campus premises.",
            name: "Col. Bhatia",
            designation: "Security In-charge"
          }}
        />
      </div>

      {/* Existing Example 2 */}
      <div className="space-y-6">
        <div className="bg-orange-50 p-4 rounded-2xl border border-orange-100 italic font-medium text-gray-600">
          <span className="font-black text-orange-900 not-italic uppercase text-xs mr-2">Problem Statement:</span>
          Announce an extension of the deadline for school fee payment.
        </div>
        <NoticePreview 
          data={{
            orgName: "EMERALD HEIGHTS PUBLIC SCHOOL",
            date: "05th April, 20XX",
            subject: "EXTENSION OF FEE PAYMENT DEADLINE",
            body: "Due to recent technical issues in the online payment portal, the last date for school fee payment has been extended from 10th April to 20th April, 20XX.\n\nParents can now pay without any late fee penalty until the revised date. We appreciate your patience during this period of technical resolution.",
            name: "Anjali Rao",
            designation: "Finance Officer"
          }}
        />
      </div>

      {/* Existing Example 3 */}
      <div className="space-y-6">
        <div className="bg-orange-50 p-4 rounded-2xl border border-orange-100 italic font-medium text-gray-600">
          <span className="font-black text-orange-900 not-italic uppercase text-xs mr-2">Problem Statement:</span>
          Inform parents about a temporary venue change for the Parent-Teacher Meeting.
        </div>
        <NoticePreview 
          data={{
            orgName: "RIVERSIDE SCHOOL, MUMBAI",
            date: "20th April, 20XX",
            subject: "PTM VENUE CHANGE",
            body: "The Parent-Teacher Meeting scheduled for 28th April will now be held in individual classrooms instead of the School Auditorium due to ongoing renovation work in the main hall.\n\nParents are requested to visit respective class teachers directly between 5 PM and 7 PM. Directional signs will be placed at the entrance.",
            name: "Dr. Sharma",
            designation: "Principal"
          }}
        />
      </div>
    </div>
  </div>
);

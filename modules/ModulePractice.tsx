
import React, { useState } from 'react';

interface Question {
  id: string;
  source: string;
  type: string;
  prompt: string;
  hints: string[];
}

const QUESTIONS: Question[] = [
  // --- TYPE: EVENT & TOUR (Module: Events & Tours) ---
  {
    id: 'q1',
    source: 'CBSE SQP 2024',
    type: 'Event & Tour',
    prompt: 'You are the Cultural Secretary of Sunrise Public School, Delhi. Your school is organizing an Inter-School Folk Dance Competition. Draft a notice in not more than 50 words inviting students to participate.',
    hints: ['Mention date, time, and venue clearly.', 'State eligibility (e.g. Classes IX-XII).', 'Provide a registration deadline.', 'Sign off as Cultural Secretary.']
  },
  {
    id: 'q_pottery',
    source: 'Practice Set',
    type: 'Event & Tour',
    prompt: 'You are Daljeet Kaur, a member of the Teen Well-Being Association, Chandigarh. The Association is planning to organise free pottery classes every Sunday morning at the community hall to encourage creativity among young residents. Write a notice in about 50 words, informing the residents of the event and inviting registrations.',
    hints: ['Who: Young residents.', 'What: Free Pottery Classes.', 'When: Every Sunday morning.', 'Venue: Community Hall.']
  },
  {
    id: 'q_ecofiesta',
    source: 'ABC School, Madurai',
    type: 'Event & Tour',
    prompt: 'You are Keerthi, Secretary of the Environmental Club of ABC School, Madurai. Your school is organising an ‘Eco-Fiesta’ to raise awareness about environmental issues. Draft a notice in about 50 words, inviting students to participate in various activities and setting up of food stalls.',
    hints: ['Highlight "Eco-Fiesta" in the subject.', 'Invite participation for activities AND stalls.', 'State the awareness objective.', 'Sign off as Secretary, Environmental Club.']
  },
  {
    id: 'q_sports_camp',
    source: 'Anand Prakash Vidyalaya',
    type: 'Event & Tour',
    prompt: 'Your school is holding a summer camp for training students in Hockey and Basketball. Write a notice for the school notice board of Anand Prakash Vidyalaya, Allahabad. You are the Sports Secretary of the school.',
    hints: ['Eligibility and duration of the camp.', 'Sports: Hockey and Basketball.', 'Mention kit requirements.', 'Contact point for enrollment.']
  },
  {
    id: 'q_nss_camp',
    source: 'S.D. Sr. Sec. School',
    type: 'Event & Tour',
    prompt: 'Write a notice for the school notice board inviting volunteers for an N.S.S. Camp. You are Gauri/Gautam, Group Leader of S.D. Sr. Sec. School, Ambala Cantt.',
    hints: ['Target group for volunteers.', 'Purpose of social service.', 'Dates and duration.', 'Last date for registration.']
  },
  {
    id: 'q_blood_donation',
    source: 'St. Thomas School',
    type: 'Event & Tour',
    prompt: 'Write a notice for the school notice board inviting volunteers for a one-day Blood Donation Camp organised by The Red Cross Society of India at your school. You are Rama Rao, Secretary of the Students’ Council, St. Thomas School, Cochin.',
    hints: ['Collaborator: Red Cross Society.', 'Target: Staff and senior students.', 'Incentives: Certificate/Refreshments.', 'Health eligibility criteria.']
  },
  {
    id: 'q_road_safety',
    source: 'Sunshine Public School',
    type: 'Event & Tour',
    prompt: 'The Principal, Sunshine Public School, Dindigul has invited the Inspector of Police (Traffic) to deliver a lecture on ‘Road Safety’ in her school. Draft a notice in about 50 words informing the students to assemble in the school auditorium.',
    hints: ['Guest speaker and topic.', 'Date and time of lecture.', 'Venue: School Auditorium.', 'Compulsory attendance instruction.']
  },
  {
    id: 'q_spicmacay',
    source: 'MVN Public School',
    type: 'Event & Tour',
    prompt: 'Your school is organizing a SPICMACAY programme on World Dance Day. Renowned Bharatanatyam dancer Geeta Chandran will give a lecture-demonstration. As President of the Cultural Society of MVN Public School, draft a notice.',
    hints: ['Event: Lecture-demonstration.', 'Guest: Geeta Chandran.', 'Occasion: World Dance Day.', 'Venue and timing.']
  },
  {
    id: 'q_benefit_show',
    source: 'Central Public School',
    type: 'Event & Tour',
    prompt: 'You are Pushpak/Pooja, Secretary of the Social Service League, Central Public School, Vijayawada. You have organised a cultural benefit show in aid of mentally handicapped children. Write a notice.',
    hints: ['Purpose: Charity benefit.', 'Program highlights.', 'Ticket prices/Collection.', 'Appeal for generous contribution.']
  },
  {
    id: 'q_thanksgiving',
    source: 'Cultural Club',
    type: 'Event & Tour',
    prompt: 'You are Rohit/Rashi, Secretary of the Cultural Club of your school. You have organised a cultural evening as a thanksgiving programme on the last day of school.',
    hints: ['Occasion: Last day of school.', 'Theme: Thanksgiving.', 'Participation invitation.', 'Reporting time.']
  },
  {
    id: 'q_slum_funds',
    source: 'Amar Vidyalaya',
    type: 'Event & Tour',
    prompt: 'Your school (Amar Vidyalaya, Noida) is organizing a cultural evening on 10 March 20XX at 5 p.m. to collect funds for slum children of Seemapuri. The Education Minister will be Chief Guest.',
    hints: ['Chief Guest: Education Minister.', 'Cause: Seemapuri slum children.', 'Invitation to parents/well-wishers.', 'Date/Time/Venue.']
  },
  {
    id: 'q_ballet',
    source: 'St. Francis School',
    type: 'Event & Tour',
    prompt: 'You are Rohit/Roopali, President of the Students’ Council, St. Francis Sr. Sec. School, Bengaluru. You have invited a Russian Ballet Troupe to perform on the occasion of the school’s Golden Jubilee.',
    hints: ['Special event: Russian Ballet.', 'Occasion: Golden Jubilee.', 'Limited seating instructions.', 'Formal decorum note.']
  },
  {
    id: 'q_dramatics_comp',
    source: 'Rye Public School',
    type: 'Event & Tour',
    prompt: 'You are Amber, the cultural secretary of Rye Public School. Inform students of classes XI and XII about an upcoming Inter-School Dramatics Competition.',
    hints: ['Classes XI and XII.', 'Audition details.', 'Theme of competition.', 'Last date for entries.']
  },
  {
    id: 'q_fancy_dress',
    source: 'RJ Public School',
    type: 'Event & Tour',
    prompt: 'RJ Public School (Central Government colony) has decided to organise a Fancy Dress Show on 25 January 20XX. Each participant will wear a costume of a particular region.',
    hints: ['Theme: Regional Costumes.', 'Date: 25 January.', 'Age/Class criteria.', 'Registration point.']
  },
  {
    id: 'q_debate_silver',
    source: 'Literary Club',
    type: 'Event & Tour',
    prompt: 'You are Rahul/Rashmi, President of the Literary Club of your school. You have organised an Inter-School Debate Competition on the Silver Jubilee of your school.',
    hints: ['Occasion: Silver Jubilee.', 'Debate Topic.', 'Prizes and certificates.', 'Enrollment deadline.']
  },
  {
    id: 'q_fancy_dress_patna',
    source: 'Sanskriti School',
    type: 'Event & Tour',
    prompt: 'You are David/Dorothy, Secretary of the Dance and Drama Society, Sanskriti School, Patna. Write a notice inviting students to give their names for a Fancy Dress Competition.',
    hints: ['Invite names.', 'Categories/Themes.', 'Date of final show.', 'Sign off as Secretary.']
  },
  {
    id: 'q_orchestra',
    source: 'Cultural Forum',
    type: 'Event & Tour',
    prompt: 'You are Ravi/Rachna, President of the Cultural Forum of your school. You have organised an Inter-School Orchestra Competition on the Silver Jubilee of your school.',
    hints: ['Silver Jubilee special.', 'Instrumental competition.', 'Registration fee if any.', 'Audition dates.']
  },
  {
    id: 'q_act_plays',
    source: 'Dramatic Club',
    type: 'Event & Tour',
    prompt: 'You are Pradeep/Asha, President of the Dramatic Club of your school. You have organised an Inter-School One-Act Plays Competition on the Silver Jubilee.',
    hints: ['Theater event.', 'Word/Time limit.', 'Script submission info.', 'Prize distribution.']
  },
  {
    id: 'q_science_exh',
    source: 'Science Club',
    type: 'Event & Tour',
    prompt: 'You are Praveen/Prabha, Secretary of the Science Club of your school. Draft a notice informing students about an Inter-School Science Exhibition and encouraging participation.',
    hints: ['Exhibition theme.', 'Model/Project categories.', 'Inauguration details.', 'Participation appeal.']
  },
  {
    id: 'q_basketball_match',
    source: 'King’s Public School',
    type: 'Event & Tour',
    prompt: 'You are Sports Captain of King’s Public School, Kalimpong. Write a notice for the school notice board informing students about the Inter-School Basketball Match.',
    hints: ['Final match details.', 'Opponent team name.', 'Time of tip-off.', 'Appeal for cheering.']
  },
  {
    id: 'q_hist_visit',
    source: 'Vidya Mandir School',
    type: 'Event & Tour',
    prompt: 'You are Secretary of the History Club, Vidya Mandir School. Draft a notice informing students of a proposed educational visit to important historical sites in your city.',
    hints: ['Sites included.', 'Cost of trip.', 'Parent consent requirement.', 'Duration.']
  },
  {
    id: 'q_mumbai_tour',
    source: 'St. Columbia’s',
    type: 'Event & Tour',
    prompt: 'Your school is organising a tour to Mumbai and Goa during the winter vacation. Write a notice giving detailed information. You are Madhav/Madhavi, Pupil Leader.',
    hints: ['Destination: Mumbai/Goa.', 'Winter vacation dates.', 'Fee and itinerary.', 'Meeting for parents.']
  },
  {
    id: 'q_ajanta_ellora',
    source: 'Students’ Council',
    type: 'Event & Tour',
    prompt: 'The Students’ Council has organised an excursion to Ajanta and Ellora for classes XI and XII during winter break. Invite names.',
    hints: ['Target: XI & XII.', 'Historical significance.', 'Enrollment deadline.', 'Teacher escort details.']
  },
  {
    id: 'q_kathmandu',
    source: 'Excursion Club',
    type: 'Event & Tour',
    prompt: 'You are Sanjay/Sangeeta, President of the Excursion Club. You have organised an excursion to Kathmandu (Nepal) during summer for senior students.',
    hints: ['International trip.', 'Passport/ID requirements.', 'Summer dates.', 'Package cost.']
  },
  {
    id: 'q_picnic_surajkund',
    source: 'School Captain',
    type: 'Event & Tour',
    prompt: 'You are Deepak/Dipti, School Captain. The Principal has permitted a class picnic to Surajkund/Badhkhal Lake. Write a notice inviting names.',
    hints: ['Venue: Surajkund.', 'Things to carry.', 'Food and transport info.', 'Consent form.']
  },
  {
    id: 'q_cleanliness_drive',
    source: 'Citizens Public School',
    type: 'Event & Tour',
    prompt: 'You are Health Secretary, Students’ Council, Citizens Public School, Varanasi. The Council has decided to start a week-long cleanliness drive around the school from 2nd October.',
    hints: ['Date: 2nd Oct (Gandhi Jayanti).', 'Class XI focus.', 'Social service activity.', 'Enrollment point.']
  },
  {
    id: 'q3',
    source: 'CBSE 2023 (Set 1)',
    type: 'Event & Tour',
    prompt: 'You are the President of the Literary Club of your school. Your club is organizing a "Poetry Recitation Competition" for Classes VI-VIII. Draft a notice inviting the names of interested participants.',
    hints: ['Date: XX March, 20XX | Venue: School Library.', 'Criteria for selection.', 'Last date for entries.', 'Contact person: Undersigned.']
  },

  // --- TYPE: MEETING (Module: Meetings) ---
  {
    id: 'q5',
    source: 'CBSE 2020',
    type: 'Meeting',
    prompt: 'You are the Head Boy of St. Mary\'s High School, Mumbai. Draft a notice calling an emergency meeting of the Student Council to discuss the decorum of the school during the upcoming inspection.',
    hints: ['State the date, time, and venue of the meeting.', 'Specific agenda: Inspection decorum.', 'Mandatory attendance.', 'Crisp language.']
  },
  {
    id: 'q6',
    source: 'CBSE 2019',
    type: 'Meeting',
    prompt: 'As the Secretary of the Science Club of your school, write a notice for the club members informing them about a meeting to be held for planning the Science Fair.',
    hints: ['Who: Club members.', 'What: Planning Science Fair.', 'Logistics: Date/Time/Venue.', 'Action: Bring project ideas.']
  },
  {
    id: 'q_security_meeting',
    source: 'Gen X Welfare Society',
    type: 'Meeting',
    prompt: 'You are Rudra/Ria, Secretary of the Gen X Welfare Society, Babulvadi, Guwahati. Draft a notice for all society members, informing them of a meeting on 25 April (3 pm) at the community hall to discuss residents’ security issues.',
    hints: ['Topic: Security issues.', 'Date/Time/Venue.', 'Audience: Society members.', 'Importance of attendance.']
  },

  // --- TYPE: LOST & FOUND (Module: Lost & Found) ---
  {
    id: 'q7',
    source: 'CBSE SQP 2023',
    type: 'Lost & Found',
    prompt: 'You lost your digital camera in the school cafeteria during the lunch break. Draft a notice in not more than 50 words giving a description of the camera and promising a reward to the finder.',
    hints: ['Mention brand/color of the camera.', 'Approximate time of loss.', 'Return to: Class XII-B / Office.', 'Reward mention (optional but common).']
  },
  {
    id: 'q_found_bag',
    source: 'Park Notice Board',
    type: 'Lost & Found',
    prompt: 'While walking in a park, you found a small plastic bag containing documents and cash. Write a notice asking the owner to identify and collect it. You are Amari/Amrita.',
    hints: ['Vague description: Plastic bag.', 'Location: Park.', 'Validation: Owner must describe documents/amount.', 'Contact info.']
  },
  {
    id: 'q_lost_calc',
    source: 'Jain Model School',
    type: 'Lost & Found',
    prompt: 'Saurabh Shukla, a Class XII student of Jain Model School, Surat, has lost his Sharp-VM calculator in the school premises. Write a short notice requesting the finder to return it to him.',
    hints: ['Brand: Sharp-VM.', 'Location: School premises.', 'Owner: Saurabh Shukla (XII).', 'Return point.']
  },
  {
    id: 'q_found_watch',
    source: 'Practice Set',
    type: 'Lost & Found',
    prompt: 'You are Ashish Khanna of Class XII. You have found a gent’s wrist watch in the school playground. Write a notice inviting its rightful owner to claim it after furnishing necessary details.',
    hints: ['Item: Gents wrist watch.', 'Found at: Playground.', 'Claim from: Undersigned/Office.', 'Identification required.']
  },
  {
    id: 'q_found_geometry',
    source: 'Delhi 2010',
    type: 'Lost & Found',
    prompt: 'You have found a red-coloured ‘Faber-Castell’ Geometry Box in the school playground. Draft a notice for the school notice board informing the owner.',
    hints: ['Brand/Color: Red Faber-Castell.', 'Found at: Playground.', 'Verification question.', 'Sign off as finder.']
  },
  {
    id: 'q_found_watch_aud',
    source: 'Practice Set',
    type: 'Lost & Found',
    prompt: 'You are Asha of Class XII. You found a wristwatch in the school auditorium. Write a notice for the school notice board inviting its rightful owner to furnish the necessary details to claim it back.',
    hints: ['Item: Wristwatch.', 'Found at: Auditorium.', 'Class of finder.', 'Owner identification.']
  },

  // --- TYPE: WORKSHOP (Module: Workshops) ---
  {
    id: 'q2',
    source: 'CBSE 2023',
    type: 'Workshop',
    prompt: 'As the Student Editor of your school magazine, draft a notice for the school notice board inviting original stories, poems, and articles from the students for the upcoming issue of "The Clarion".',
    hints: ['Clearly state the deadline for submissions.', 'Mention the word limit for each category.', 'Give contact details for submission.', 'Underline the subject.']
  },
  {
    id: 'q_career_session',
    source: 'Practice Set',
    type: 'Workshop',
    prompt: 'As Head Boy/Girl of your school you are organising a Career Counselling Session for XI and XII students. Write a notice giving details to be displayed on the school notice board.',
    hints: ['Target: XI and XII.', 'Objective: Career guidance.', 'Time and Venue.', 'Resource person details.']
  },
  {
    id: 'q_magazine_articles',
    source: 'Student Editor',
    type: 'Workshop',
    prompt: 'You are Ramesh, Student Editor of your school magazine. Write a notice inviting articles for the next issue of the school magazine.',
    hints: ['Submission deadline.', 'Word limit.', 'Topics allowed.', 'Sign off as Student Editor.']
  },
  {
    id: 'q_wall_magazine',
    source: 'Students’ Forum',
    type: 'Workshop',
    prompt: 'You are Avani/Avinash, Secretary of the Students’ Forum. You want to start a Wall Magazine for your school. Write a notice inviting articles, stories, poems and campus news.',
    hints: ['New initiative: Wall Magazine.', 'Call for creative works.', 'Campus news invitation.', 'Display location.']
  },

  // --- TYPE: APPEAL (Module: Appeals) ---
  {
    id: 'q9',
    source: 'CBSE 2024 (SQP)',
    type: 'Appeal',
    prompt: 'You are the Secretary of the Social Service Club of your school. Draft a notice appealing to students to donate old clothes and medicines for the victims of a recent flood in a neighboring state.',
    hints: ['Urgent tone.', 'Specific list of needed items.', 'Collection point and deadline.', 'Focus on the noble cause.']
  },
  {
    id: 'q_noble_cause',
    source: 'Practice Set',
    type: 'Appeal',
    prompt: 'Write a notice in about 50 words urging people to come in large numbers for a noble cause (details can be assumed).',
    hints: ['Define the cause (e.g. Charity Run).', 'Appeal for presence.', 'State impact.', 'Volunteer registration.']
  },

  // --- TYPE: UPDATE (Module: Updates) ---
  {
    id: 'q11',
    source: 'CBSE 2020',
    type: 'Update',
    prompt: 'You are the Principal of ABC School. Draft a notice informing parents and students about the change in school timings due to severe winter conditions.',
    hints: ['Old vs New timings.', 'Effective date.', 'Reason: Winter.', 'Formal tone.']
  },
  {
    id: 'q_timings_change',
    source: 'Sardar Patel Vidyalaya',
    type: 'Update',
    prompt: 'As Principal of Sardar Patel Vidyalaya, Lucknow, draft a notice informing students of a change in school timings with effect from 1st October (state valid reasons).',
    hints: ['Effective: 1st Oct.', 'Reason for change.', 'New morning/afternoon hours.', 'Authority: Principal.']
  },
  {
    id: 'q_dengue_policy',
    source: 'Sunshine Public School',
    type: 'Update',
    prompt: 'After the rains, dengue and chikungunya cases are rising. As Principal of Sunshine Public School, Manu Vihar, you have decided to allow students to wear full-sleeve shirts and trousers for one month.',
    hints: ['Reason: Health advisory.', 'Uniform change allowed.', 'Duration: One month.', 'Parental advisory.']
  }
];

const QuestionCard: React.FC<{ q: Question }> = ({ q }) => {
  const [showHints, setShowHints] = useState(false);

  return (
    <div className="bg-white p-8 rounded-[3rem] border-2 border-orange-100 shadow-xl hover:shadow-2xl transition-all flex flex-col group relative overflow-hidden">
      <div className="flex justify-between items-start mb-6">
        <div className="flex flex-col gap-1">
          <span className="bg-orange-500 text-white text-[10px] font-black px-4 py-1 rounded-full uppercase tracking-widest w-fit">
            {q.source}
          </span>
        </div>
        <span className="text-[10px] font-black text-gray-400 uppercase tracking-[0.2em]">{q.type}</span>
      </div>
      
      <p className="text-lg font-bold text-gray-800 leading-relaxed mb-10 flex-grow italic">
        "{q.prompt}"
      </p>

      <div className="space-y-4">
        <button 
          onClick={() => setShowHints(!showHints)}
          className={`w-full py-4 rounded-2xl font-black uppercase tracking-widest text-sm transition-all border-2 ${showHints ? 'bg-orange-50 border-orange-200 text-orange-600' : 'bg-white border-orange-500 text-orange-600 hover:bg-orange-50'}`}
        >
          {showHints ? 'Hide Sir Crisp\'s Hints' : 'Reveal Sir Crisp\'s Hints'}
        </button>

        {showHints && (
          <div className="bg-orange-950 p-6 rounded-2xl text-orange-100 space-y-3 animate-in fade-in slide-in-from-top-4 duration-300">
            <p className="text-[10px] font-black text-orange-400 uppercase tracking-[0.2em] mb-2">Sir Crisp says:</p>
            <ul className="space-y-2">
              {q.hints.map((hint, i) => (
                <li key={i} className="flex gap-3 text-sm font-medium">
                  <span className="text-orange-400 font-black">❯</span>
                  {hint}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>

      {/* Decorative Waffle Corner */}
      <div className="absolute -bottom-6 -right-6 w-20 h-20 bg-orange-100 rounded-full opacity-20 group-hover:scale-150 transition-transform"></div>
    </div>
  );
};

export const ModulePractice: React.FC = () => {
  const [filter, setFilter] = useState('All');
  
  // Updated categories to match Module IDs perfectly as requested
  const categories = ['All', 'Meeting', 'Event & Tour', 'Lost & Found', 'Workshop', 'Appeal', 'Update'];

  const filteredQuestions = filter === 'All' 
    ? QUESTIONS 
    : QUESTIONS.filter(q => q.type === filter);

  return (
    <div className="space-y-16">
      <header className="bg-orange-950 p-16 rounded-[5rem] shadow-3xl text-center relative overflow-hidden">
        <div className="absolute top-0 left-0 p-12 opacity-5 pointer-events-none">
          <span className="text-9xl font-black italic">PYQ</span>
        </div>
        <h3 className="text-6xl font-black text-orange-400 uppercase tracking-tighter mb-4">The Practice Zone</h3>
        <p className="text-xl text-orange-100 font-bold opacity-80 max-w-2xl mx-auto italic">
          "Don't just read the recipe, start baking! Here are the real challenges from the CBSE ovens."
        </p>
      </header>

      {/* Filter Chips - Enhanced to match the requested pill-shaped UI in the screenshot */}
      <div className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto px-4 py-6">
        {categories.map(cat => (
          <button
            key={cat}
            onClick={() => setFilter(cat)}
            className={`px-8 py-3 rounded-2xl text-[11px] font-black uppercase tracking-widest transition-all border-2 flex-shrink-0 ${filter === cat ? 'bg-orange-600 border-orange-600 text-white shadow-xl scale-110 translate-y-[-2px]' : 'bg-white border-orange-50 text-gray-400 hover:border-orange-200 hover:text-orange-500 hover:bg-orange-50'}`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Questions Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 px-4">
        {filteredQuestions.map(q => (
          <QuestionCard key={q.id} q={q} />
        ))}
      </div>

      {/* Evaluation Section */}
      <div className="bg-white p-12 rounded-[4rem] border-4 border-orange-100 text-center space-y-10 mx-4">
        <div className="space-y-2">
           <h4 className="text-4xl font-black text-gray-900 uppercase tracking-tight">Self-Evaluation Checklist</h4>
           <p className="text-gray-500 font-bold italic">Score yourself like a CBSE examiner!</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 text-left">
          {[
            'Did I draw the box with a ruler?',
            'Is the Org Name in ALL CAPS?',
            'Is the word NOTICE centered?',
            'Did I underline the subject?',
            'Is my word count below 50?',
            'Is the date left-aligned?',
            'Did I include the designation?',
            'Did I answer the 6 W\'s?',
            'Is my tone formal?'
          ].map((check, i) => (
            <div key={i} className="flex gap-4 items-center bg-orange-50/50 p-5 rounded-3xl border border-orange-100 hover:bg-orange-100/50 transition-colors group">
              <input type="checkbox" className="w-6 h-6 rounded-lg border-orange-300 text-orange-600 focus:ring-orange-500 cursor-pointer" />
              <span className="text-sm font-bold text-orange-950 group-hover:translate-x-1 transition-transform">{check}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

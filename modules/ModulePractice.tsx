
import React, { useState } from 'react';

interface Question {
  id: string;
  source: string;
  type: string;
  prompt: string;
  hints: string[];
}

const QUESTIONS: Question[] = [
  // --- SCHOOL EVENTS / CULTURAL ---
  {
    id: 'q1',
    source: 'CBSE SQP 2024',
    type: 'Event',
    prompt: 'You are the Cultural Secretary of Sunrise Public School, Delhi. Your school is organizing an Inter-School Folk Dance Competition. Draft a notice in not more than 50 words inviting students to participate.',
    hints: ['Mention date, time, and venue clearly.', 'State eligibility (e.g. Classes IX-XII).', 'Provide a registration deadline.', 'Sign off as Cultural Secretary.']
  },
  {
    id: 'q2',
    source: 'CBSE 2023',
    type: 'Workshop',
    prompt: 'As the Student Editor of your school magazine, draft a notice for the school notice board inviting original stories, poems, and articles from the students for the upcoming issue of "The Clarion".',
    hints: ['Clearly state the deadline for submissions.', 'Mention the word limit for each category.', 'Give contact details for submission.', 'Underline the subject.']
  },
  {
    id: 'q3',
    source: 'CBSE 2023 (Set 1)',
    type: 'Event',
    prompt: 'You are the President of the Literary Club of your school. Your club is organizing a "Poetry Recitation Competition" for Classes VI-VIII. Draft a notice inviting the names of interested participants.',
    hints: ['Date: XX March, 20XX | Venue: School Library.', 'Criteria for selection.', 'Last date for entries.', 'Contact person: Undersigned.']
  },
  {
    id: 'q4',
    source: 'CBSE 2022 (Term 2)',
    type: 'Tour',
    prompt: 'You are the Secretary of the Travel Club of Modern School, Pune. Draft a notice for students of Class XI and XII regarding a proposed educational tour to Rajasthan during the winter break.',
    hints: ['Mention the duration of the trip.', 'Estimated cost and itinerary highlights.', 'Mention the last date to deposit fees and consent forms.', 'Formal tone.']
  },

  // --- MEETINGS ---
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

  // --- LOST & FOUND ---
  {
    id: 'q7',
    source: 'CBSE SQP 2023',
    type: 'Lost',
    prompt: 'You lost your digital camera in the school cafeteria during the lunch break. Draft a notice in not more than 50 words giving a description of the camera and promising a reward to the finder.',
    hints: ['Mention brand/color of the camera.', 'Approximate time of loss.', 'Return to: Class XII-B / Office.', 'Reward mention (optional but common).']
  },
  {
    id: 'q8',
    source: 'CBSE 2021 (Special)',
    type: 'Found',
    prompt: 'You found a gold-colored pendant in the school playground. Draft a notice for the "Lost and Found" board of your school informing students about it and asking the owner to claim it.',
    hints: ['Vague description: Gold pendant.', 'Venue: Found in playground.', 'Validation: Owner must describe unique markings.', 'Sign off as "Finder".']
  },

  // --- APPEALS / SOCIAL CAUSE ---
  {
    id: 'q9',
    source: 'CBSE 2024 (SQP)',
    type: 'Appeal',
    prompt: 'You are the Secretary of the Social Service Club of your school. Draft a notice appealing to students to donate old clothes and medicines for the victims of a recent flood in a neighboring state.',
    hints: ['Urgent tone.', 'Specific list of needed items.', 'Collection point and deadline.', 'Focus on the noble cause.']
  },
  {
    id: 'q10',
    source: 'CBSE 2018',
    type: 'Appeal',
    prompt: 'As the President of the Eco-Club of your school, draft a notice appealing to students to observe a "No Crackers" Diwali. Suggest alternatives like donating to an orphanage.',
    hints: ['Reasoning: Environmental protection.', 'Specific appeal: Avoid crackers.', 'Alternative action: Donation drive.', 'Effective subject line.']
  },

  // --- UPDATES / CHANGES ---
  {
    id: 'q11',
    source: 'CBSE 2020 (Compartment)',
    type: 'Update',
    prompt: 'You are the Principal of ABC School. Draft a notice informing parents and students about the change in school timings due to severe winter conditions.',
    hints: ['Old timings vs New timings.', 'Effective date.', 'Reason: Weather conditions.', 'Formal authority.']
  }
];

const QuestionCard: React.FC<{ q: Question }> = ({ q }) => {
  const [showHints, setShowHints] = useState(false);

  return (
    <div className="bg-white p-8 rounded-[3rem] border-2 border-orange-100 shadow-xl hover:shadow-2xl transition-all flex flex-col group relative overflow-hidden">
      <div className="flex justify-between items-start mb-6">
        <span className="bg-orange-500 text-white text-[10px] font-black px-4 py-1 rounded-full uppercase tracking-widest">
          {q.source}
        </span>
        <span className="text-xs font-black text-gray-400 uppercase tracking-widest">{q.type}</span>
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
  const categories = ['All', 'Event', 'Meeting', 'Lost', 'Found', 'Appeal', 'Update', 'Tour', 'Workshop'];

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

      {/* Filter Chips */}
      <div className="flex flex-wrap justify-center gap-3">
        {categories.map(cat => (
          <button
            key={cat}
            onClick={() => setFilter(cat)}
            className={`px-6 py-2 rounded-full text-xs font-black uppercase tracking-widest transition-all border-2 ${filter === cat ? 'bg-orange-600 border-orange-600 text-white shadow-lg scale-110' : 'bg-white border-orange-100 text-gray-500 hover:border-orange-300'}`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Questions Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {filteredQuestions.map(q => (
          <QuestionCard key={q.id} q={q} />
        ))}
      </div>

      <div className="bg-white p-12 rounded-[4rem] border-4 border-orange-100 text-center space-y-6">
        <h4 className="text-3xl font-black text-gray-900 uppercase">Self-Evaluation Checklist</h4>
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
            <div key={i} className="flex gap-4 items-center bg-orange-50 p-4 rounded-2xl border border-orange-100">
              <input type="checkbox" className="w-6 h-6 rounded border-orange-300 text-orange-600 focus:ring-orange-500" />
              <span className="text-sm font-bold text-orange-950">{check}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

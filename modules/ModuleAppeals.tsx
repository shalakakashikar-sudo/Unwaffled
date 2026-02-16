
import React from 'react';
import { NoticePreview } from '../components/NoticePreview';

export const ModuleAppeals: React.FC = () => (
  <div className="space-y-16">
    <div className="bg-red-50 p-12 rounded-[4rem] border-l-8 border-red-500 shadow-sm">
      <h3 className="text-4xl font-black text-red-950 mb-4 uppercase">The Art of Persuasion</h3>
      <p className="text-xl text-red-900 font-bold leading-relaxed">
        Appeals are voluntary. You must <span className="text-red-600 underline">inspire</span>, not demand. Balance compassion with professional dignity. Focus on the <span className="italic">Impact</span> of their contribution.
      </p>
    </div>

    <div className="space-y-24">
      {/* Example 1 */}
      <div className="space-y-6">
        <div className="bg-red-50 p-4 rounded-2xl border border-red-100 italic font-medium text-gray-600">
          <span className="font-black text-red-900 not-italic uppercase text-xs mr-2">Problem Statement:</span>
          Appeal for donations for a visit to a local Old Age Home.
        </div>
        <NoticePreview 
          data={{
            orgName: "MODERN PUBLIC SCHOOL, DELHI",
            date: "08th December, 20XX",
            subject: "APPEAL: VISIT TO OLD AGE HOME",
            body: "The Student Council is organizing a visit to 'Nirmal Chhaya', a local old age home, on 20th December. We appeal to all students to contribute items like blankets and medicines.\n\nYour small gesture can bring immense joy to the senior citizens. Please deposit your contributions at the Council Room by 15th December. Thank you.",
            name: "Akanksha",
            designation: "Head Girl"
          }}
        />
      </div>

      {/* Example 2 */}
      <div className="space-y-6">
        <div className="bg-red-50 p-4 rounded-2xl border border-red-100 italic font-medium text-gray-600">
          <span className="font-black text-red-900 not-italic uppercase text-xs mr-2">Problem Statement:</span>
          Appeal for funds for a Cancer Awareness drive and patient support.
        </div>
        <NoticePreview 
          data={{
            orgName: "RIVERSIDE HIGH, PUNE",
            date: "10th April, 20XX",
            subject: "APPEAL FOR CANCER PATIENT SUPPORT",
            body: "Our school is raising funds to support underprivileged cancer patients undergoing treatment at the City Hospital. We appeal for your generous contributions towards this humanitarian cause.\n\nDonations in cash or cheques may be submitted to the class teacher by 25th April. Every rupee counts in this noble fight for life.",
            name: "Priya Sharma",
            designation: "Secretary, Social Service Club"
          }}
        />
      </div>

      {/* Example 3 */}
      <div className="space-y-6">
        <div className="bg-red-50 p-4 rounded-2xl border border-red-100 italic font-medium text-gray-600">
          <span className="font-black text-red-900 not-italic uppercase text-xs mr-2">Problem Statement:</span>
          As Secretary of the Social Service League, appeal for old textbooks for a slum library.
        </div>
        <NoticePreview 
          data={{
            orgName: "SUNRISE ACADEMY, CHANDIGARH",
            date: "05th July, 20XX",
            subject: "DONATE BOOKS: SLUM LIBRARY PROJECT",
            body: "The Social Service League is establishing a library for children in the nearby slum area. We appeal to students to donate their old, well-maintained textbooks and storybooks.\n\nLet's spread the light of education. Please drop off the books in the designated boxes near the gate by 15th July.",
            name: "Karan Mehta",
            designation: "Secretary, Social Service League"
          }}
        />
      </div>
    </div>
  </div>
);


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
      {/* Existing Example 1 */}
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

      {/* Existing Example 2 */}
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

      {/* Existing Example 3 */}
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

      {/* New Example 4: Animal Welfare */}
      <div className="space-y-6">
        <div className="bg-red-50 p-4 rounded-2xl border border-red-100 italic font-medium text-gray-600">
          <span className="font-black text-red-900 not-italic uppercase text-xs mr-2">Problem Statement:</span>
          Appeal for food and medical supplies for a local animal shelter.
        </div>
        <NoticePreview 
          data={{
            orgName: "LITTLE FLOWERS SCHOOL, HYDERABAD",
            date: "12th August, 20XX",
            subject: "APPEAL: AID FOR ANIMAL SHELTER",
            body: "The 'Paws and Claws' club is collecting dry food, old towels, and basic medicines for the 'Happy Tails' Animal Shelter. Many abandoned pets are in urgent need of care.\n\nKindly contribute generously and drop off the items in the collection bin near the school reception by 20th August. Every small pack helps a furry friend.",
            name: "Sania Mirza",
            designation: "President, Nature Club"
          }}
        />
      </div>

      {/* New Example 5: Disaster Relief */}
      <div className="space-y-6">
        <div className="bg-red-50 p-4 rounded-2xl border border-red-100 italic font-medium text-gray-600">
          <span className="font-black text-red-900 not-italic uppercase text-xs mr-2">Problem Statement:</span>
          Appeal for funds for Flood Victims in North India.
        </div>
        <NoticePreview 
          data={{
            orgName: "ST. JOSEPH'S CONVENT, KOCHI",
            date: "14th July, 20XX",
            subject: "APPEAL: FLOOD RELIEF FUND",
            body: "Unprecedented floods have displaced thousands in North India. Our school is collecting funds to provide essential food packets and drinking water to the victims.\n\nStudents are requested to donate a minimum of ₹100 to their respective class teachers by 22nd July. All collections will be sent to the PM's National Relief Fund.",
            name: "Fr. Thomas",
            designation: "Principal"
          }}
        />
      </div>

      {/* New Example 6: Winter Clothing Drive */}
      <div className="space-y-6">
        <div className="bg-red-50 p-4 rounded-2xl border border-red-100 italic font-medium text-gray-600">
          <span className="font-black text-red-900 not-italic uppercase text-xs mr-2">Problem Statement:</span>
          Appeal for woollens and blankets for homeless people during winter.
        </div>
        <NoticePreview 
          data={{
            orgName: "ARMY PUBLIC SCHOOL, SHIMLA",
            date: "01st November, 20XX",
            subject: "APPEAL: SHARE THE WARMTH",
            body: "As winter sets in, many homeless citizens struggle for warmth. We appeal to all students to donate old but clean blankets, sweaters, and woollen caps for distribution.\n\nPlease ensure items are in good condition. Submit your donations at the Sports Complex between 2nd and 10th November. Let's make this winter warmer for everyone.",
            name: "Col. R.K. Singh",
            designation: "Administrative Officer"
          }}
        />
      </div>

      {/* New Example 7: Stationery Drive */}
      <div className="space-y-6">
        <div className="bg-red-50 p-4 rounded-2xl border border-red-100 italic font-medium text-gray-600">
          <span className="font-black text-red-900 not-italic uppercase text-xs mr-2">Problem Statement:</span>
          Appeal for stationery items for an underprivileged primary school.
        </div>
        <NoticePreview 
          data={{
            orgName: "HERITAGE SCHOOL, JAIPUR",
            date: "05th September, 20XX",
            subject: "APPEAL: GIFT A PENCIL, GIFT A FUTURE",
            body: "To celebrate Teachers' Day, we are organizing a stationery drive for the Government Primary School, Village Alwar. We need pencils, notebooks, and geometry boxes.\n\nSmall contributions lead to big smiles. Please deposit your items at the School Library by 10th September. Together, we can empower young learners with the tools they need.",
            name: "Aditi Sharma",
            designation: "Cultural Secretary"
          }}
        />
      </div>

      {/* New Example 8: Support for School Staff */}
      <div className="space-y-6">
        <div className="bg-red-50 p-4 rounded-2xl border border-red-100 italic font-medium text-gray-600">
          <span className="font-black text-red-900 not-italic uppercase text-xs mr-2">Problem Statement:</span>
          Appeal for medical aid for a long-serving school security guard.
        </div>
        <NoticePreview 
          data={{
            orgName: "MODERN ACADEMY, INDORE",
            date: "18th May, 20XX",
            subject: "APPEAL: MEDICAL AID FOR MR. RAM SINGH",
            body: "Our beloved security guard, Mr. Ram Singh, has been diagnosed with a serious kidney ailment and requires urgent surgery. The school is raising funds to assist his family.\n\nWe request students and parents to contribute as per their capacity. Voluntary donations can be dropped in the 'Aid Box' at the main gate until 25th May. Let's support one of our own.",
            name: "Dr. K. Saxena",
            designation: "Principal"
          }}
        />
      </div>

      {/* New Example 9: Toy and Game Drive */}
      <div className="space-y-6">
        <div className="bg-red-50 p-4 rounded-2xl border border-red-100 italic font-medium text-gray-600">
          <span className="font-black text-red-900 not-italic uppercase text-xs mr-2">Problem Statement:</span>
          Appeal for toys and board games for a children's orphanage during Diwali.
        </div>
        <NoticePreview 
          data={{
            orgName: "BAL BHARATI PUBLIC SCHOOL, DELHI",
            date: "20th October, 20XX",
            subject: "APPEAL: DIWALI TOY DRIVE",
            body: "This Diwali, let's share our joy with the children of 'Asha Orphanage'. We appeal for donations of new or gently used toys, puzzles, and board games.\n\nPlease ensure the toys are clean and in working condition. Submit your gifts, wrapped or unwrapped, at the Activity Room by 30th October. Spread the light of happiness!",
            name: "Rishi Sen",
            designation: "Head Boy"
          }}
        />
      </div>

      {/* New Example 10: Eco-Friendly Awareness */}
      <div className="space-y-6 pb-12">
        <div className="bg-red-50 p-4 rounded-2xl border border-red-100 italic font-medium text-gray-600">
          <span className="font-black text-red-900 not-italic uppercase text-xs mr-2">Problem Statement:</span>
          Appeal to students to say 'No to Crackers' and donate the saved money to a green cause.
        </div>
        <NoticePreview 
          data={{
            orgName: "SPRINGDALES SCHOOL, NEW DELHI",
            date: "15th October, 20XX",
            subject: "APPEAL: A GREEN AND CLEAN DIWALI",
            body: "In view of the rising pollution levels, the Eco-Club appeals to all students to celebrate a cracker-free Diwali. Instead, we urge you to donate the money saved to our 'Plant a Tree' initiative.\n\nEvery contribution of ₹200 will sponsor a sapling and its maintenance. Deposits can be made with the Club Treasurer in the Biology Lab by 25th October.",
            name: "Meera Das",
            designation: "Secretary, Eco-Club"
          }}
        />
      </div>
    </div>
  </div>
);

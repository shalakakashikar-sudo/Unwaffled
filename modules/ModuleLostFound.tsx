
import React from 'react';
import { NoticePreview } from '../components/NoticePreview';

export const ModuleLostFound: React.FC = () => (
  <div className="space-y-16">
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      <div className="bg-blue-50 p-10 rounded-[3.5rem] border-2 border-blue-100 relative overflow-hidden group hover:shadow-2xl transition-all">
        <div className="absolute top-4 right-4 text-5xl opacity-10 group-hover:scale-150 transition-transform">🕵️</div>
        <h4 className="text-2xl font-black text-blue-900 mb-2 uppercase tracking-tight">Lost Items</h4>
        <p className="text-sm font-black text-blue-800 uppercase tracking-widest mb-4 italic">1st Person (I, My)</p>
        <p className="text-lg text-blue-700 leading-relaxed font-bold">You are the owner. Be <span className="underline decoration-blue-300">Specific</span>! Mention brand, color, unique marks. Use an emotional hook if it's an urgent document.</p>
      </div>
      
      <div className="bg-green-50 p-10 rounded-[3.5rem] border-2 border-green-100 relative overflow-hidden group hover:shadow-2xl transition-all">
        <div className="absolute top-4 right-4 text-5xl opacity-10 group-hover:scale-150 transition-transform">🎁</div>
        <h4 className="text-2xl font-black text-green-900 mb-2 uppercase tracking-tight">Found Items</h4>
        <p className="text-sm font-black text-green-800 uppercase tracking-widest mb-4 italic">3rd Person (A, The)</p>
        <p className="text-lg text-green-700 leading-relaxed font-bold">You are the protector. Be <span className="underline decoration-green-300">Vague</span>. Keep details secret so only the real owner can verify the claim through description.</p>
      </div>

      <div className="bg-orange-50 p-10 rounded-[3.5rem] border-2 border-orange-100 relative overflow-hidden group hover:shadow-2xl transition-all">
        <div className="absolute top-4 right-4 text-5xl opacity-10 group-hover:scale-150 transition-transform">✨</div>
        <h4 className="text-2xl font-black text-orange-900 mb-2 uppercase tracking-tight">Recovered</h4>
        <p className="text-sm font-black text-orange-800 uppercase tracking-widest mb-4 italic">Search Cancellation</p>
        <p className="text-lg text-orange-700 leading-relaxed font-bold">The search ends here! Use a <span className="underline decoration-orange-300">thankful</span> tone. State clearly that the item has been found to prevent wasted effort.</p>
      </div>
    </div>

    <div className="space-y-24">
      {/* Existing Example 1 */}
      <div className="space-y-6">
        <div className="bg-orange-50 p-4 rounded-2xl border border-orange-100 italic font-medium text-gray-600">
          <span className="font-black text-orange-900 not-italic uppercase text-xs mr-2">Problem Statement:</span>
          You lost your Titan gold wristwatch in the school auditorium.
        </div>
        <NoticePreview 
          data={{
            orgName: "SPRINGFIELDS SCHOOL, PUNE",
            date: "04th March, 20XX",
            subject: "LOST: TITAN WRISTWATCH",
            body: "I lost my gold-plated Titan wristwatch with a stainless steel chain in the school auditorium on 3rd March during the morning assembly. It has a distinctive scratch on the dial.\n\nAnyone who finds it is requested to return it to the undersigned or the office. A treat is promised to the finder.",
            name: "Arundhati",
            designation: "Class XII"
          }}
        />
      </div>

      {/* New Example: Lost Library Card */}
      <div className="space-y-6">
        <div className="bg-orange-50 p-4 rounded-2xl border border-orange-100 italic font-medium text-gray-600">
          <span className="font-black text-orange-900 not-italic uppercase text-xs mr-2">Problem Statement:</span>
          You lost your school library card. You need to inform others and prevent misuse.
        </div>
        <NoticePreview 
          data={{
            orgName: "ST. XAVIER'S SCHOOL, KOLKATA",
            date: "10th April, 20XX",
            subject: "LOST: LIBRARY CARD",
            body: "I lost my library card (No. Lib-2024/045) on the school campus on 9th April. It is blue in color and has my photograph and signature on it.\n\nThe finder is requested to return it to me or deposit it with the Librarian. If found, please ensure it is not misused. A small reward is assured.",
            name: "Sumit Roy",
            designation: "Class IX-C"
          }}
        />
      </div>

      {/* New Example: Found Keychain */}
      <div className="space-y-6">
        <div className="bg-orange-50 p-4 rounded-2xl border border-orange-100 italic font-medium text-gray-600">
          <span className="font-black text-orange-900 not-italic uppercase text-xs mr-2">Problem Statement:</span>
          You found a set of keys in the school playground.
        </div>
        <NoticePreview 
          data={{
            orgName: "DELHI PUBLIC SCHOOL, DWARKA",
            date: "22nd February, 20XX",
            subject: "FOUND: SET OF KEYS",
            body: "A set of keys with a cartoon-character keychain was found lying near the basketball court on 21st February during the lunch break.\n\nThe owner can claim the keys from the school office after giving proper details of the number of keys and the specific character on the keychain.",
            name: "Sanjana",
            designation: "Class X-A"
          }}
        />
      </div>

      {/* New Example: Lost Certificate Folder */}
      <div className="space-y-6">
        <div className="bg-orange-50 p-4 rounded-2xl border border-orange-100 italic font-medium text-gray-600">
          <span className="font-black text-orange-900 not-italic uppercase text-xs mr-2">Problem Statement:</span>
          You lost a plastic folder containing your original birth certificate and grade sheet in the library.
        </div>
        <NoticePreview 
          data={{
            orgName: "NAVYUG PUBLIC SCHOOL, LUCKNOW",
            date: "05th May, 20XX",
            subject: "LOST: FOLDER WITH DOCUMENTS",
            body: "I lost a transparent plastic folder containing my original birth certificate and Class VIII mark-sheet in the Senior Library on 4th May. These documents are vital for my upcoming admission process.\n\nFinder is requested to return the folder to Class IX-B immediately. A handsome reward will be provided.",
            name: "Rahul Mehra",
            designation: "Class IX"
          }}
        />
      </div>

      {/* New Example: Found Digital Watch */}
      <div className="space-y-6">
        <div className="bg-orange-50 p-4 rounded-2xl border border-orange-100 italic font-medium text-gray-600">
          <span className="font-black text-orange-900 not-italic uppercase text-xs mr-2">Problem Statement:</span>
          You found a digital watch in the school washroom.
        </div>
        <NoticePreview 
          data={{
            orgName: "DAV MODEL SCHOOL, CHANDIGARH",
            date: "18th July, 20XX",
            subject: "FOUND: DIGITAL WATCH",
            body: "A black digital sports watch was found in the second-floor boy's washroom on 17th July during the fourth period. It appears to be relatively new.\n\nThe owner can collect it from the Sports Room after identifying the brand and describing the specific alarm settings or straps of the watch.",
            name: "Karan",
            designation: "Class XII-D"
          }}
        />
      </div>

      {/* New Example: Lost School Blazer */}
      <div className="space-y-6">
        <div className="bg-orange-50 p-4 rounded-2xl border border-orange-100 italic font-medium text-gray-600">
          <span className="font-black text-orange-900 not-italic uppercase text-xs mr-2">Problem Statement:</span>
          You lost your school blazer during the sports meet.
        </div>
        <NoticePreview 
          data={{
            orgName: "BAL BHARATI PUBLIC SCHOOL",
            date: "14th December, 20XX",
            subject: "LOST: SCHOOL BLAZER",
            body: "I lost my navy blue school blazer (Size 38) near the athletic track on 13th December during the Annual Sports Meet. It has my name tag 'Aman' stitched inside the collar.\n\nIf found, please return it to the Lost & Found counter or Class XI-C. Your help is highly appreciated.",
            name: "Aman Gupta",
            designation: "Class XI"
          }}
        />
      </div>

      {/* New Example: Found Scientific Calculator */}
      <div className="space-y-6">
        <div className="bg-orange-50 p-4 rounded-2xl border border-orange-100 italic font-medium text-gray-600">
          <span className="font-black text-orange-900 not-italic uppercase text-xs mr-2">Problem Statement:</span>
          You found a scientific calculator in the Physics Lab.
        </div>
        <NoticePreview 
          data={{
            orgName: "KENDRIYA VIDYALAYA, DEHRADUN",
            date: "03rd September, 20XX",
            subject: "FOUND: SCIENTIFIC CALCULATOR",
            body: "A Casio scientific calculator was found in the Physics Laboratory on 2nd September after the practical session. It has some stickers on the back cover.\n\nThe owner is requested to claim it from the Lab Assistant after stating the model number and describing the stickers on the back for verification.",
            name: "Pooja Bisht",
            designation: "Lab Prefect"
          }}
        />
      </div>

      {/* New Example: Lost Parker Pen */}
      <div className="space-y-6">
        <div className="bg-orange-50 p-4 rounded-2xl border border-orange-100 italic font-medium text-gray-600">
          <span className="font-black text-orange-900 not-italic uppercase text-xs mr-2">Problem Statement:</span>
          You lost a Parker fountain pen, an heirloom from your grandfather.
        </div>
        <NoticePreview 
          data={{
            orgName: "LOYOLA HIGH SCHOOL, PATNA",
            date: "20th November, 20XX",
            subject: "LOST: PARKER FOUNTAIN PEN",
            body: "I lost my silver-colored Parker fountain pen in the corridor of the main building on 19th November. This pen is of great sentimental value as it was gifted by my grandfather.\n\nAnyone finding it is requested to return it to me in Class XII-B. A treat at the canteen is promised to the finder.",
            name: "Ishaan",
            designation: "Class XII"
          }}
        />
      </div>

      {/* New Example: Found Lunch Box (Vague) */}
      <div className="space-y-6">
        <div className="bg-orange-50 p-4 rounded-2xl border border-orange-100 italic font-medium text-gray-600">
          <span className="font-black text-orange-900 not-italic uppercase text-xs mr-2">Problem Statement:</span>
          You found a multi-layered tiffin box in the canteen area.
        </div>
        <NoticePreview 
          data={{
            orgName: "MODERN ACADEMY, INDORE",
            date: "08th August, 20XX",
            subject: "FOUND: TIFFIN BOX",
            body: "A three-tier stainless steel tiffin box was found on a table in the school canteen on 7th August after the break. It was wrapped in a cloth napkin.\n\nThe genuine owner can claim it from the canteen supervisor after identifying the color and pattern of the napkin it was wrapped in.",
            name: "Rishi",
            designation: "Class VIII-E"
          }}
        />
      </div>

      {/* New Example: Lost Umbrella */}
      <div className="space-y-6">
        <div className="bg-orange-50 p-4 rounded-2xl border border-orange-100 italic font-medium text-gray-600">
          <span className="font-black text-orange-900 not-italic uppercase text-xs mr-2">Problem Statement:</span>
          You lost your umbrella on a rainy day at school.
        </div>
        <NoticePreview 
          data={{
            orgName: "SACRED HEART SCHOOL, SHIMLA",
            date: "15th June, 20XX",
            subject: "LOST: UMBRELLA",
            body: "I lost my black-and-white polka dot umbrella near the cycle stand on 14th June. It has a curved wooden handle and my name written on the inner tag.\n\nIf anyone has found it, please return it to Class X-C. I would be very grateful as it is currently the peak of the monsoon season.",
            name: "Megha",
            designation: "Class X"
          }}
        />
      </div>

      {/* New Example: Found Bus Pass */}
      <div className="space-y-6">
        <div className="bg-orange-50 p-4 rounded-2xl border border-orange-100 italic font-medium text-gray-600">
          <span className="font-black text-orange-900 not-italic uppercase text-xs mr-2">Problem Statement:</span>
          You found a student bus pass near the school gate.
        </div>
        <NoticePreview 
          data={{
            orgName: "ARMY PUBLIC SCHOOL, AGRA",
            date: "27th January, 20XX",
            subject: "FOUND: STUDENT BUS PASS",
            body: "A student bus pass issued by the City Transport Authority was found near the main school gate this morning. It belongs to a student of Class VI as per the details.\n\nThe owner can collect it from the Administrative Office after showing their school ID card for verification. We want to avoid any travel inconvenience.",
            name: "Vikram",
            designation: "Head Boy"
          }}
        />
      </div>

      {/* New Example 1: Discontinue Search - Library Book */}
      <div className="space-y-6">
        <div className="bg-orange-50 p-4 rounded-2xl border border-orange-100 italic font-medium text-gray-600">
          <span className="font-black text-orange-900 not-italic uppercase text-xs mr-2">Problem Statement:</span>
          You have recovered your lost library book and wish to cancel the search notice.
        </div>
        <NoticePreview 
          data={{
            orgName: "ST. ANNE'S ACADEMY, GOA",
            date: "12th September, 20XX",
            subject: "RECOVERED: LIBRARY BOOK",
            body: "This is to inform everyone that I have found my lost library book 'Wings of Fire' which was reported missing since 10th September. It was found in the Music Room.\n\nPlease discontinue the search for the same. I thank all the students and staff members for their assistance and support.",
            name: "Neha Prabhu",
            designation: "Class XI-A"
          }}
        />
      </div>

      {/* New Example 2: Discontinue Search - Sports Kit */}
      <div className="space-y-6">
        <div className="bg-orange-50 p-4 rounded-2xl border border-orange-100 italic font-medium text-gray-600">
          <span className="font-black text-orange-900 not-italic uppercase text-xs mr-2">Problem Statement:</span>
          You recovered your lost sports kit and want to inform others to stop searching.
        </div>
        <NoticePreview 
          data={{
            orgName: "BISHOP COTTON SCHOOL, SHIMLA",
            date: "05th February, 20XX",
            subject: "DISCONTINUE SEARCH: SPORTS KIT",
            body: "I am happy to inform all that I have recovered my sports kit bag which was lost on the athletic field yesterday. It was mistakenly picked up by another student and has been returned safely.\n\nThe search is now officially closed. I appreciate the concern shown by my fellow housemates.",
            name: "Arjun Singh",
            designation: "Curzon House"
          }}
        />
      </div>

      {/* New Example 3: Discontinue Search - ID Card */}
      <div className="space-y-6">
        <div className="bg-orange-50 p-4 rounded-2xl border border-orange-100 italic font-medium text-gray-600">
          <span className="font-black text-orange-900 not-italic uppercase text-xs mr-2">Problem Statement:</span>
          Your lost identity card has been found; cancel the previous notice.
        </div>
        <NoticePreview 
          data={{
            orgName: "MODERN HIGH SCHOOL, DELHI",
            date: "20th October, 20XX",
            subject: "SEARCH CLOSED: IDENTITY CARD",
            body: "I have recovered my school identity card which I had misplaced on the school grounds last week. I would like to express my gratitude to the school security team for their help in finding it.\n\nStudents and staff are requested to kindly stop looking for the same. Thank you for your cooperation.",
            name: "Ravi Teja",
            designation: "Class XII-B"
          }}
        />
      </div>

      {/* New Example 4: Discontinue Search - Spectacles */}
      <div className="space-y-6">
        <div className="bg-orange-50 p-4 rounded-2xl border border-orange-100 italic font-medium text-gray-600">
          <span className="font-black text-orange-900 not-italic uppercase text-xs mr-2">Problem Statement:</span>
          You found your spectacles in your own locker; inform the school to stop searching.
        </div>
        <NoticePreview 
          data={{
            orgName: "G.D. GOENKA SCHOOL, LUCKNOW",
            date: "28th March, 20XX",
            subject: "DISCONTINUE SEARCH: SPECTACLES",
            body: "My lost spectacles in a black leather case have been recovered. I found them inside my locker this morning after a thorough check.\n\nI apologize for the trouble caused to the staff and students and thank those who were helping in the search. The previous notice stands cancelled.",
            name: "Sanya Malik",
            designation: "Class X-C"
          }}
        />
      </div>

      {/* Existing Example: Discontinue Search - Lunch Box */}
      <div className="space-y-6">
        <div className="bg-orange-50 p-4 rounded-2xl border border-orange-100 italic font-medium text-gray-600">
          <span className="font-black text-orange-900 not-italic uppercase text-xs mr-2">Problem Statement:</span>
          You found your lost lunch box and want to discontinue the search.
        </div>
        <NoticePreview 
          data={{
            orgName: "MODERN HIGH SCHOOL, SHIMLA",
            date: "18th April, 20XX",
            subject: "DISCONTINUE SEARCH: LUNCH BOX",
            body: "This is to inform all that I have recovered my red lunch box which was reported missing since 15th April. I accidentally left it in the Chemistry Lab.\n\nI thank all students and staff for their concern and urge you to discontinue the search. I regret the inconvenience caused to everyone.",
            name: "Sonia Gupta",
            designation: "Class X-C"
          }}
        />
      </div>
    </div>
  </div>
);

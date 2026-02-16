
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
      <div className="space-y-6">
        <h4 className="text-2xl font-black text-orange-950 uppercase flex items-center gap-3">
          <span className="bg-orange-100 p-2 rounded-xl">🏷️</span> Lost Document (Specific)
        </h4>
        <NoticePreview 
          data={{
            orgName: "VANASTHALI PUBLIC SCHOOL, LUDHIANA",
            date: "25th February, 20XX",
            subject: "LOST: HALL TICKET",
            body: "I lost my Class XII hall ticket in the school playground during lunchtime on 24th February. It is in a transparent folder and contains my Roll No. 12345678 and recent passport photograph.\n\nAnyone finding it should return it to Class XII-A. A suitable reward will be given to the finder.",
            name: "Ira Sachdeva",
            designation: "Class XII"
          }}
        />
      </div>

      <div className="space-y-6">
        <h4 className="text-2xl font-black text-orange-950 uppercase flex items-center gap-3">
          <span className="bg-orange-100 p-2 rounded-xl">👛</span> Lost Wallet (Public Area)
        </h4>
        <NoticePreview 
          data={{
            orgName: "MODERN RESIDENCY, BANGALORE",
            date: "12th May, 20XX",
            subject: "LOST: LEATHER WALLET",
            body: "I lost my brown leather wallet while traveling by bus from Banashankari to MG Road on 11th May. It contains my identity card and some cash.\n\nAnyone who finds it is requested to contact me on 98765XXXXX. A generous reward will be given to the finder.",
            name: "Karthik Rao",
            designation: "Resident"
          }}
        />
        <p className="text-center font-bold text-gray-500 italic mt-4">Sir Crisp: "In public areas, a contact number is your only hope! Don't forget it."</p>
      </div>

      <div className="space-y-6">
        <h4 className="text-2xl font-black text-orange-950 uppercase flex items-center gap-3">
          <span className="bg-orange-100 p-2 rounded-xl">💼</span> Found Item (Vague)
        </h4>
        <NoticePreview 
          data={{
            orgName: "ORCHID GARDEN, NEW DELHI",
            date: "09 March, 20XX",
            subject: "FOUND: PLASTIC BAG",
            body: "A small plastic bag containing important documents and some cash has been found near Gate No. 2 of Orchid Garden on 8th March around 5 PM. The bag is blue in color.\n\nGenuine owner should identify and collect it from the undersigned after proper verification of articles.",
            name: "Amrita",
            designation: "Resident"
          }}
        />
      </div>

      <div className="space-y-6">
        <h4 className="text-2xl font-black text-orange-950 uppercase flex items-center gap-3">
          <span className="bg-orange-100 p-2 rounded-xl">🎉</span> Search Discontinued
        </h4>
        <NoticePreview 
          data={{
            orgName: "MODERN HIGH SCHOOL, SHIMLA",
            date: "18th April, 20XX",
            subject: "DISCONTINUE SEARCH: LUNCH BOX",
            body: "This is to inform all that I have found my lost red lunch box which was missing since 15th April. I accidentally left it in the Chemistry Lab during the practical session.\n\nI thank everyone for their efforts and urge you to discontinue the search immediately. For details, contact the undersigned.",
            name: "Sonia Gupta",
            designation: "Class X-C"
          }}
        />
      </div>
    </div>
  </div>
);

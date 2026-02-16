
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

    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      <div className="bg-white p-10 rounded-[3rem] border-2 border-red-100 shadow-xl group hover:scale-[1.02] transition-transform">
        <span className="inline-block text-xs font-black text-red-400 uppercase tracking-widest bg-red-50 px-4 py-1 rounded-full mb-4">❌ Too Manipulative</span>
        <p className="text-lg italic font-medium text-gray-500">"Please help these poor suffering souls who are dying of hunger in the cold with absolutely no food..."</p>
      </div>
      <div className="bg-green-50 p-10 rounded-[3rem] border-2 border-green-100 shadow-xl group hover:scale-[1.02] transition-transform">
        <span className="inline-block text-xs font-black text-green-500 uppercase tracking-widest bg-green-100 px-4 py-1 rounded-full mb-4">✅ Balanced & Dignified</span>
        <p className="text-lg font-bold text-green-900">"We appeal to your humanitarian spirit to contribute towards helping cyclone victims rebuild their lives and communities."</p>
      </div>
    </div>

    <div className="space-y-24">
      <div className="space-y-6">
        <h4 className="text-2xl font-black text-orange-950 uppercase flex items-center gap-3">
          <span className="bg-orange-100 p-2 rounded-xl">🌪️</span> Natural Disaster Relief
        </h4>
        <NoticePreview 
          data={{
            orgName: "VIJAY PUBLIC SCHOOL, VIJAY NAGAR",
            date: "8th December, 20XX",
            subject: "APPEAL FOR HURRICANE RELIEF",
            body: "The Student Council organizes a rehabilitation drive for hurricane victims. Please donate clothes, books, and blankets to support families who lost their homes in this tragic natural disaster recently.\n\nKindly submit your contributions by 15th December. For details, contact the undersigned. Certificates given to contributors.",
            name: "Akanksha",
            designation: "Head Girl"
          }}
        />
      </div>

      <div className="space-y-6">
        <h4 className="text-2xl font-black text-orange-950 uppercase flex items-center gap-3">
          <span className="bg-orange-100 p-2 rounded-xl">🐾</span> Animal Shelter Support
        </h4>
        <NoticePreview 
          data={{
            orgName: "RIVERSIDE SCHOOL, PUNE",
            date: "10th April, 20XX",
            subject: "APPEAL: ANIMAL SHELTER DONATIONS",
            body: "The Nature Club is collecting donations for the City Animal Shelter. We request you to donate blankets, food, and medicines for abandoned animals to help them live better lives.\n\nShow compassion for voiceless beings. Kindly donate by 20th April. Contact the undersigned for further information.",
            name: "Priya Sharma",
            designation: "Captain, Nature Club"
          }}
        />
      </div>

      <div className="space-y-6">
        <h4 className="text-2xl font-black text-orange-950 uppercase flex items-center gap-3">
          <span className="bg-orange-100 p-2 rounded-xl">🤝</span> Voluntary Service (Time)
        </h4>
        <NoticePreview 
          data={{
            orgName: "MODERN HIGH SCHOOL, BANGALORE",
            date: "5th July, 20XX",
            subject: "VOLUNTEERS FOR TEACHING DRIVE",
            body: "The Social Service Club appeals for student volunteers to teach at the local orphanage on weekends. We need dedicated individuals to spend two hours every Saturday.\n\nHelp make a difference in a child's education. Register with the undersigned by 10th July. Certificates provided.",
            name: "Karan Mehta",
            designation: "Secretary, Social Service Club"
          }}
        />
      </div>
    </div>

    <div className="bg-orange-950 text-white p-12 rounded-[4rem] space-y-8">
      <h4 className="text-2xl font-black text-orange-400 uppercase tracking-widest text-center">Sir Crisp's Motivational Phrase Bank:</h4>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 text-lg font-bold opacity-80 italic">
        <div className="flex items-start gap-4">
          <div className="mt-1 w-2 h-2 bg-orange-500 rounded-full shrink-0"></div>
          "Every small contribution counts toward a bigger change."
        </div>
        <div className="flex items-start gap-4">
          <div className="mt-1 w-2 h-2 bg-orange-500 rounded-full shrink-0"></div>
          "Join hands in this noble cause to rebuild lives."
        </div>
        <div className="flex items-start gap-4">
          <div className="mt-1 w-2 h-2 bg-orange-500 rounded-full shrink-0"></div>
          "Your support can help bring a smile back to those in need."
        </div>
        <div className="flex items-start gap-4">
          <div className="mt-1 w-2 h-2 bg-orange-500 rounded-full shrink-0"></div>
          "We appeal to your humanitarian spirit for this drive."
        </div>
      </div>
    </div>
  </div>
);


import React from 'react';
import { NoticeData } from '../types';

interface NoticePreviewProps {
  data: NoticeData;
  showLines?: boolean;
}

const RuledLine: React.FC<{ children?: React.ReactNode; className?: string }> = ({ children, className = "" }) => (
  <div className={`h-[40px] w-full flex items-center overflow-visible ${className}`}>
    {children}
  </div>
);

export const NoticePreview: React.FC<NoticePreviewProps> = ({ data, showLines = true }) => {
  // Logic to calculate body word count
  const wordCount = data.body.split(/\s+/).filter(w => w.length > 0).length;

  return (
    <div className="relative w-full max-w-2xl mx-auto py-10">
      {/* Box Label */}
      <div className="absolute top-0 left-0 bg-orange-600 text-white text-[10px] font-black px-3 py-1 rounded-t-lg uppercase tracking-widest z-20">
        Mandatory Box Format
      </div>

      <div className={`relative w-full shadow-2xl border-2 border-black bg-white overflow-hidden ${showLines ? 'ruled-paper' : ''}`}>
        {/* Left vertical red margin line */}
        {showLines && (
          <div className="absolute left-12 top-0 bottom-0 w-[1.5px] bg-red-200 z-0"></div>
        )}

        <div className="relative z-10 flex flex-col text-gray-950">
          
          {/* Line 1: Organization Name */}
          <RuledLine className="justify-center">
            <h2 className="text-xl font-black uppercase tracking-tight">{data.orgName}</h2>
          </RuledLine>

          {/* Line 2: Empty Spacer */}
          <RuledLine />

          {/* Line 3: NOTICE */}
          <RuledLine className="justify-center">
            <div className="relative">
              <h3 className="text-lg font-black tracking-[0.2em]">NOTICE</h3>
              <div className="absolute -bottom-1 left-0 right-0 h-1 bg-black"></div>
            </div>
          </RuledLine>

          {/* Line 4: Empty Spacer */}
          <RuledLine />
          
          {/* Line 5: Date */}
          <RuledLine className="pl-16">
            <span className="font-bold text-sm">Date: {data.date}</span>
          </RuledLine>

          {/* Line 6: Empty Spacer */}
          <RuledLine />

          {/* Line 7: Subject */}
          <RuledLine className="justify-center px-12">
            <h4 className="font-black uppercase border-b-2 border-black leading-none pb-1">
              {data.subject}
            </h4>
          </RuledLine>

          {/* Line 8: Empty Spacer */}
          <RuledLine />

          {/* Lines 9+: Body */}
          <div className="w-full px-16 text-justify">
            <p className="font-bold text-gray-800 text-xl leading-[40px] whitespace-pre-wrap">
              {data.body}
            </p>
          </div>

          {/* Empty Spacer after body */}
          <RuledLine />

          {/* Sign-off Lines */}
          <div className="w-full pl-16 pb-10">
            <RuledLine>
              <span className="font-black text-lg">{data.name}</span>
            </RuledLine>
            <RuledLine>
              <span className="font-bold italic text-gray-600">({data.designation})</span>
            </RuledLine>
          </div>
        </div>
      </div>
      
      <div className="mt-4 text-center">
        <span className="inline-block bg-orange-100 text-orange-800 text-xs font-black px-4 py-1 rounded-full uppercase tracking-widest border border-orange-200">
          Body Word Count: {wordCount} Words
        </span>
      </div>
    </div>
  );
};

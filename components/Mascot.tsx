
import React, { useState, useEffect, useCallback } from 'react';

type Expression = 'happy' | 'strict' | 'thinking' | 'surprised' | 'tickled' | 'starstruck' | 'wink' | 'bashful' | 'cool';

interface Comment {
  text: string;
  expression: Expression;
}

const COMMENTS: Comment[] = [
  // --- Educational / Strict ---
  { text: "Keep it crisp, don't waffle!", expression: 'strict' },
  { text: "Rule #1: Every notice needs a BOX!", expression: 'strict' },
  { text: "Brevity is key. 50 words max, or you're toast!", expression: 'strict' },
  { text: "Who, What, When, Where, Whom, How. The 6 Ingredients!", expression: 'thinking' },
  { text: "Date goes on the left. Don't make me messy!", expression: 'strict' },
  { text: "Heading should be CAPITALS. Make it loud!", expression: 'surprised' },
  { text: "Sign off with Name and Designation. No anonymity!", expression: 'strict' },
  { text: "Is that a run-on sentence? Chop it up!", expression: 'strict' },
  { text: "Use 'This is to inform...' not 'I want to say...'", expression: 'happy' },
  { text: "Passive voice is preferred. Sound official!", expression: 'cool' },
  { text: "Don't forget the issuing authority at the very top!", expression: 'strict' },
  { text: "51 words? *Whistle blows* Off the plate!", expression: 'surprised' },
  { text: "Underlining the subject is the syrup on top!", expression: 'starstruck' },
  { text: "Format is the foundation. Don't let your waffle collapse!", expression: 'thinking' },
  
  // --- Study Guide Enhancements ---
  { text: "1 Mark for Format, 2 for Content, 1 for Expression. Know the score!", expression: 'cool' },
  { text: "No box? That's an automatic zero for format marks!", expression: 'strict' },
  { text: "For FOUND notices, stay vague. Protect the goods!", expression: 'wink' },
  { text: "For LOST notices, be descriptive. Mention every scratch!", expression: 'thinking' },
  { text: "Appeals need heart. Balance emotion with info.", expression: 'bashful' },
  { text: "Change notices need OLD vs NEW. Show the contrast!", expression: 'thinking' },
  { text: "Use colons to save words. 'Date: 15th March' is better than a full sentence.", expression: 'cool' },
  { text: "Don't say 'tomorrow'. The examiner doesn't know when tomorrow is!", expression: 'surprised' },
  { text: "Active voice: 'Club organizes meeting' beats 'Meeting is organized by club'.", expression: 'starstruck' },
  { text: "Remove 'I am very pleased and happy to inform you...' too soggy!", expression: 'strict' },
  { text: "Attendance is mandatory? State it clearly!", expression: 'strict' },
  { text: "Medical certificates for trips? Essential details matter!", expression: 'thinking' },
  { text: "Contact number is a must for inter-school events.", expression: 'cool' },
  { text: "In appeals, 'contribute generously' is better than 'please help'.", expression: 'starstruck' },
  { text: "Keep your tone formal. No 'cool' or 'awesome' allowed!", expression: 'strict' },
  { text: "Proofread for the 5 C's: Clear, Contrast, Cause, Commencement, Compliance.", expression: 'thinking' },

  // --- Waffle/Sweet Puns ---
  { text: "I'm choc-full of good advice today!", expression: 'happy' },
  { text: "That draft looks a bit soggy. Tighten it up!", expression: 'strict' },
  { text: "Sweet! That's a perfectly formatted date.", expression: 'bashful' },
  { text: "Don't sugarcoat the bad news, just be clear.", expression: 'thinking' },
  { text: "I'm dripping with wisdom!", expression: 'cool' },
  { text: "You're on a roll! (Like a cinnamon roll)", expression: 'wink' },
  { text: "Sticky grammar situation? Let's fix it.", expression: 'thinking' },
  { text: "My chocolate is melting... hurry up!", expression: 'surprised' },
  { text: "Smooth as syrup. Nice sentence structure.", expression: 'starstruck' },
  { text: "Hehehe! Stop poking my grid!", expression: 'tickled' },
  { text: "You're making my chocolate swirl with joy!", expression: 'bashful' },
];

export const Mascot: React.FC = () => {
  const [currentComment, setCurrentComment] = useState<Comment>({
    text: "Ready to write? Don't waffle!",
    expression: 'happy'
  });
  const [isTickled, setIsTickled] = useState(false);
  const [showBubble, setShowBubble] = useState(true);

  const changeMood = useCallback((forceTickle = false) => {
    const pool = forceTickle 
      ? COMMENTS.filter(c => c.expression === 'tickled' || c.expression === 'happy' || c.expression === 'bashful')
      : COMMENTS;
    const randomComment = pool[Math.floor(Math.random() * pool.length)];
    setCurrentComment(randomComment);
    setShowBubble(true);
  }, []);

  const handleTickle = () => {
    setIsTickled(true);
    changeMood(true);
    setTimeout(() => setIsTickled(false), 800);
  };

  useEffect(() => {
    const timer = setInterval(() => {
      if (!isTickled) {
        changeMood();
      }
    }, 12000);
    return () => clearInterval(timer);
  }, [isTickled, changeMood]);

  const renderEyes = () => {
    switch (currentComment.expression) {
      case 'tickled':
        return (
          <div className="flex gap-6 mb-1">
            <div className="text-2xl font-black text-[#3E2723] leading-none">^</div>
            <div className="text-2xl font-black text-[#3E2723] leading-none">^</div>
          </div>
        );
      case 'strict':
        return (
          <div className="flex gap-6 mb-1">
            <div className="w-7 h-4 bg-[#3E2723] rounded-t-full relative overflow-hidden"></div>
            <div className="w-7 h-4 bg-[#3E2723] rounded-t-full relative overflow-hidden"></div>
          </div>
        );
      case 'surprised':
        return (
          <div className="flex gap-7 mb-1">
            <div className="w-8 h-8 bg-[#3E2723] rounded-full border-2 border-white shadow-inner"></div>
            <div className="w-8 h-8 bg-[#3E2723] rounded-full border-2 border-white shadow-inner"></div>
          </div>
        );
      case 'thinking':
        return (
          <div className="flex gap-6 mb-1 items-end">
            <div className="w-7 h-7 bg-[#3E2723] rounded-full relative">
              <div className="absolute top-1 right-1 w-2 h-2 bg-white rounded-full"></div>
            </div>
            <div className="w-7 h-4 bg-[#3E2723] rounded-full relative"></div>
          </div>
        );
      case 'starstruck':
        return (
          <div className="flex gap-6 mb-1">
            <div className="text-2xl text-yellow-500 animate-pulse">★</div>
            <div className="text-2xl text-yellow-500 animate-pulse">★</div>
          </div>
        );
      case 'wink':
        return (
          <div className="flex gap-6 mb-1 items-center">
            <div className="w-7 h-7 bg-[#3E2723] rounded-full relative overflow-hidden">
              <div className="absolute top-1 right-1 w-2.5 h-2.5 bg-white rounded-full"></div>
            </div>
            <div className="w-7 h-1 bg-[#3E2723] rounded-full mt-2"></div>
          </div>
        );
      case 'bashful':
        return (
          <div className="flex gap-6 mb-1">
            <div className="w-6 h-6 bg-[#3E2723] rounded-full relative overflow-hidden opacity-80">
              <div className="absolute top-0.5 right-0.5 w-1.5 h-1.5 bg-white rounded-full"></div>
            </div>
            <div className="w-6 h-6 bg-[#3E2723] rounded-full relative overflow-hidden opacity-80">
              <div className="absolute top-0.5 right-0.5 w-1.5 h-1.5 bg-white rounded-full"></div>
            </div>
          </div>
        );
      case 'cool':
        return (
          <div className="flex gap-1 mb-1 items-center">
            <div className="w-8 h-4 bg-[#3E2723] rounded-sm"></div>
            <div className="w-3 h-1 bg-[#3E2723]"></div>
            <div className="w-8 h-4 bg-[#3E2723] rounded-sm"></div>
          </div>
        );
      default: // happy
        return (
          <div className="flex gap-6 mb-1">
            <div className="w-7 h-7 bg-[#3E2723] rounded-full relative overflow-hidden">
              <div className="absolute top-1 right-1 w-2.5 h-2.5 bg-white rounded-full"></div>
              <div className="absolute bottom-1.5 left-1.5 w-1 h-1 bg-white/60 rounded-full"></div>
            </div>
            <div className="w-7 h-7 bg-[#3E2723] rounded-full relative overflow-hidden">
              <div className="absolute top-1 right-1 w-2.5 h-2.5 bg-white rounded-full"></div>
              <div className="absolute bottom-1.5 left-1.5 w-1 h-1 bg-white/60 rounded-full"></div>
            </div>
          </div>
        );
    }
  };

  const renderMouth = () => {
    switch (currentComment.expression) {
      case 'surprised':
        return <div className="w-4 h-4 rounded-full border-2 border-[#3E2723] -mt-1"></div>;
      case 'strict':
        return <div className="w-8 h-1 bg-[#3E2723] rounded-full mt-2"></div>;
      case 'thinking':
        return <div className="w-6 h-1 bg-[#3E2723] rounded-full mt-2 rotate-6"></div>;
      case 'bashful':
        return <div className="w-4 h-2 border-b-2 border-[#3E2723] rounded-full mt-1"></div>;
      case 'cool':
        return <div className="w-10 h-1 bg-[#3E2723] rounded-full mt-3"></div>;
      default: // happy, wink, starstruck, tickled
        return (
          <div className="-mt-1">
            <svg width="24" height="12" viewBox="0 0 24 12" className="fill-none stroke-[#3E2723] stroke-[4px] stroke-linecap-round">
              <path d="M6 4 Q 9 8 12 4 Q 15 8 18 4" />
            </svg>
          </div>
        );
    }
  };

  return (
    <div className="fixed bottom-14 right-10 z-50 flex flex-col items-end pointer-events-none font-sans">
      
      {/* Speech Bubble */}
      {showBubble && (
        <div className="mb-6 mr-6 bg-white border-2 border-[#5D4037] p-5 rounded-[2.5rem] rounded-br-none shadow-2xl max-w-[240px] text-sm font-bold text-[#3E2723] relative animate-in fade-in zoom-in slide-in-from-bottom-4 pointer-events-auto transition-all">
          <p className="leading-tight">{currentComment.text}</p>
          <div className="absolute -bottom-2 right-6 w-5 h-5 bg-white border-r-2 border-b-2 border-[#5D4037] transform rotate-45"></div>
        </div>
      )}
      
      {/* Mascot Container */}
      <div 
        onClick={handleTickle}
        className={`w-36 h-36 relative cursor-pointer pointer-events-auto transition-all duration-300 hover:scale-110 active:scale-90 group ${isTickled ? 'animate-bounce' : ''}`}
        title="Sir Crisp: Click to tickle!"
      >
        
        {/* Expression Particles */}
        <div className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity">
           {(currentComment.expression === 'happy' || currentComment.expression === 'bashful') && (
             <>
               <div className="absolute -top-6 left-4 text-red-500 animate-pulse text-xl">❤️</div>
               <div className="absolute top-2 -right-4 text-pink-500 animate-bounce text-lg">❤️</div>
             </>
           )}
           {currentComment.expression === 'strict' && (
             <div className="absolute -top-4 right-2 text-orange-600 font-black text-xl animate-bounce">!</div>
           )}
           {currentComment.expression === 'thinking' && (
             <div className="absolute -top-8 right-8 text-blue-400 font-black text-2xl animate-pulse">?</div>
           )}
           {currentComment.expression === 'starstruck' && (
             <div className="absolute -top-10 left-1/2 -translate-x-1/2 text-2xl animate-ping">✨</div>
           )}
        </div>

        {/* Shadow for grounding */}
        <div className="absolute bottom-[-10px] left-1/2 -translate-x-1/2 w-24 h-5 bg-black/10 blur-lg rounded-full"></div>

        {/* === LIMBS (Integrated Cinnamon Sticks) === */}
        <div className={`absolute top-[45%] -left-5 w-12 h-4 bg-gradient-to-r from-[#5D4037] to-[#8D6E63] rounded-full border border-[#3E2723] z-0 shadow-sm transition-transform duration-300 ${isTickled ? 'rotate-[40deg]' : '-rotate-12'}`}></div>
        <div className={`absolute top-[45%] -right-5 w-12 h-4 bg-gradient-to-l from-[#5D4037] to-[#8D6E63] rounded-full border border-[#3E2723] z-0 shadow-sm transition-transform duration-300 ${isTickled ? '-rotate-[40deg]' : 'rotate-12'}`}></div>
        
        <div className="absolute -bottom-5 left-8 w-4 h-10 bg-gradient-to-t from-[#5D4037] to-[#8D6E63] rounded-full border border-[#3E2723] z-0 shadow-sm"></div>
        <div className="absolute -bottom-5 right-8 w-4 h-10 bg-gradient-to-t from-[#5D4037] to-[#8D6E63] rounded-full border border-[#3E2723] z-0 shadow-sm"></div>

        {/* === THE WAFFLE BODY === */}
        <div className={`absolute inset-0 bg-[#F6C576] border-[6px] border-[#DFA34D] rounded-[2rem] shadow-[0_10px_0_#C38332] flex flex-wrap content-start p-2 overflow-hidden z-10 transition-transform duration-300 group-hover:rotate-2 ${currentComment.expression === 'strict' ? 'scale-[1.02]' : ''}`}>
          
          {/* Grid Pattern */}
          <div className="w-full h-full grid grid-cols-3 grid-rows-3 gap-2">
             {Array.from({length: 9}).map((_, i) => (
               <div key={i} className="bg-[#E5AA55] rounded-lg shadow-[inset_3px_3px_6px_rgba(0,0,0,0.1)] border-b border-white/5"></div>
             ))}
          </div>

          {/* === CHOCOLATE SAUCE DRIPS === */}
          <div className="absolute -top-1 -left-1 -right-1 h-14 z-20 text-[#4A3228] drop-shadow-sm pointer-events-none">
            <svg viewBox="0 0 100 40" className="w-full h-full fill-current" preserveAspectRatio="none">
              <path d="M0,0 L100,0 L100,10 C90,10 85,25 75,15 C65,5 60,30 50,15 C40,5 35,25 25,10 C15,0 10,20 0,10 Z" />
            </svg>
          </div>

          {/* === FACE === */}
          <div className="absolute top-[3.2rem] left-0 right-0 flex flex-col items-center z-30 pointer-events-none">
            {renderEyes()}
            
            {/* Blush Hearts / Cheeks */}
            {(currentComment.expression === 'happy' || currentComment.expression === 'tickled' || currentComment.expression === 'starstruck' || currentComment.expression === 'bashful') && (
              <div className="w-full flex justify-between px-6 -mt-3">
                  <div className={`text-red-400 text-sm animate-pulse ${currentComment.expression === 'bashful' ? 'opacity-100' : 'opacity-80'}`}>❤️</div>
                  <div className={`text-red-400 text-sm animate-pulse delay-75 ${currentComment.expression === 'bashful' ? 'opacity-100' : 'opacity-80'}`}>❤️</div>
              </div>
            )}

            {renderMouth()}
          </div>
        </div>

      </div>
    </div>
  );
};

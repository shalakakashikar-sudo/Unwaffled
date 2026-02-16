
import React, { useState, useEffect, useCallback, useRef } from 'react';
import { ViewState } from '../types';

type Expression = 'happy' | 'strict' | 'thinking' | 'surprised' | 'tickled' | 'starstruck' | 'wink' | 'bashful' | 'cool';

interface Comment {
  text: string;
  expression: Expression;
}

interface MascotProps {
  view: ViewState;
  moduleId: string | null;
}

const COMMENTS: Record<string, Comment[]> = {
  home: [
    { text: "Welcome to the bakery! Ready to bake some crisp notices?", expression: 'happy' },
    { text: "A notice is like a waffle: keep it square, keep it light, and don't let it get soggy with extra words!", expression: 'cool' },
    { text: "Sir Crisp's Rule #1: If you waffle in a notice, you lose the crunch!", expression: 'strict' },
    { text: "Teachers have a 50-word radar. Go to 51, and BEEP!", expression: 'surprised' },
    { text: "Don't let your marks get soggy. Start a module!", expression: 'wink' },
  ],
  cheatsheet: [
    { text: "The Bible of Brevity! Memorize these formulas or I'll soak your textbooks!", expression: 'strict' },
    { text: "50 words or less—that's the golden rule here. Every extra word is a calorie I can't burn!", expression: 'thinking' },
    { text: "Format marks are free marks—it's like getting free syrup with your waffle.", expression: 'starstruck' },
    { text: "The Box is the border between success and absolute sogginess.", expression: 'strict' },
    { text: "Remember: 'This is to inform...' is the standard dough for any notice recipe.", expression: 'happy' },
  ],
  practice: [
    { text: "These questions are the real test! Time to get cooking, Chef.", expression: 'thinking' },
    { text: "Need a hint? I've hidden some secret syrup-sweet tips in there.", expression: 'wink' },
    { text: "Check your word count! Use your fingers, your toes, or a calculator if you have to. Just joking!", expression: 'strict' },
    { text: "Consistency is key. A notice a day keeps the soggy marks away!", expression: 'cool' },
    { text: "If you hit 51 words, imagine me turning into a soggy pancake. Don't do that to me!", expression: 'surprised' },
  ],
  module_foundation: [
    { text: "Who, What, When, Where, Whom, Why. The 6 Holy Ingredients!", expression: 'thinking' },
    { text: "1 Mark for Format. It's a gift—don't throw it in the trash bin!", expression: 'happy' },
    { text: "Third person only! Writing 'I' or 'Me' is like putting pickles on a waffle. Disgusting!", expression: 'strict' },
    { text: "Future tense is the only tense in Sir Crisp's kitchen. 'Will happen', not 'Has happened'.", expression: 'cool' },
  ],
  module_structure: [
    { text: "Center that 'NOTICE' label! Let it breathe like a fresh waffle.", expression: 'surprised' },
    { text: "Underlining the subject is the chocolate drizzle on top!", expression: 'starstruck' },
    { text: "Date on the LEFT. Putting it on the right makes my grid itch!", expression: 'strict' },
    { text: "A notice without a box is just a floating paragraph. Give it a home!", expression: 'happy' },
  ],
  module_diet: [
    { text: "Chop those run-on sentences! Use a verbal cleaver. *Chop Chop*", expression: 'strict' },
    { text: "Colons save words. 'Date: 12th Mar' is elite. 'The date is 12th Mar' is soggy.", expression: 'cool' },
    { text: "Remove 'I am happy to inform you...'—it's too sweet and uses too many words!", expression: 'surprised' },
    { text: "Adjectives are just empty calories. Cut them for a leaner, meaner notice.", expression: 'wink' },
  ],
  tickle: [
    { text: "Hehehe! That tickles my butter-bits! Now go back to studying!", expression: 'tickled' },
    { text: "Stop! You'll smudge my chocolate glaze! I'm a professional waffle!", expression: 'surprised' },
    { text: "Waffle-checking is okay, but waffle-poking is a 5-mark deduction in my book!", expression: 'strict' },
    { text: "Oh! You found my secret syrup stash! Don't tell the principal.", expression: 'starstruck' },
    { text: "Stop it! I'm trying to look sophisticated for the board exams!", expression: 'bashful' },
    { text: "Is that a scale in your pocket or are you just happy to draw a box?", expression: 'wink' },
  ],
  generic: [
    { text: "Keep it crisp, don't waffle! Brevity is the soul of wit (and notices).", expression: 'strict' },
    { text: "I'm dripping with wisdom and maple syrup!", expression: 'cool' },
    { text: "Soggy waffle situation? Let's cook it well.", expression: 'thinking' },
    { text: "Every time you use 'I', a waffle loses its crunch. Think of the poor waffles!", expression: 'strict' },
    { text: "Pro tip: Draw the box AFTER writing. Don't let your text overflow like bad batter!", expression: 'thinking' },
  ]
};

export const Mascot: React.FC<MascotProps> = ({ view, moduleId }) => {
  const [currentComment, setCurrentComment] = useState<Comment>({
    text: "Ready to write? Don't waffle!",
    expression: 'happy'
  });
  const [isTickled, setIsTickled] = useState(false);
  const [showBubble, setShowBubble] = useState(true);
  const [isDismissed, setIsDismissed] = useState(false);
  const revertTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const getContextKey = useCallback(() => {
    if (view === 'module' && moduleId) return `module_${moduleId}`;
    return view;
  }, [view, moduleId]);

  const changeMood = useCallback((forceType?: 'tickle' | 'default') => {
    let pool: Comment[];
    
    if (forceType === 'tickle') {
      pool = COMMENTS.tickle;
    } else {
      const contextKey = getContextKey();
      pool = COMMENTS[contextKey] || COMMENTS.generic;
      // Occasionally mix in generic witty ones
      if (Math.random() > 0.6) pool = [...pool, ...COMMENTS.generic];
    }

    const randomComment = pool[Math.floor(Math.random() * pool.length)];
    setCurrentComment(randomComment);
    setShowBubble(true);
  }, [getContextKey]);

  const handleTickle = () => {
    // If user pokes Sir Crisp, bring back the bubble even if dismissed
    setIsDismissed(false);
    
    if (isTickled) return;
    
    setIsTickled(true);
    changeMood('tickle');
    
    // Clear any existing revert timer
    if (revertTimerRef.current) clearTimeout(revertTimerRef.current);
    
    // Stop the bounce animation after a short burst
    setTimeout(() => setIsTickled(false), 1200);
    
    // Revert comment to context-appropriate one after 6 seconds as requested
    revertTimerRef.current = setTimeout(() => {
      changeMood('default');
      revertTimerRef.current = null;
    }, 6000);
  };

  const handleDismiss = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsDismissed(true);
  };

  useEffect(() => {
    // Reset dismissal when page changes
    setIsDismissed(false);
    
    // Change comment immediately when view changes
    changeMood('default');
    
    const timer = setInterval(() => {
      // Only change automatically if we aren't currently showing a tickle response
      if (!isTickled && !revertTimerRef.current) {
        changeMood('default');
      }
    }, 18000); // Educational tips every 18 seconds while idle
    
    return () => {
      clearInterval(timer);
      if (revertTimerRef.current) clearTimeout(revertTimerRef.current);
    };
  }, [view, moduleId, changeMood]);

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
              <div className="absolute top-1 right-1 w-2.5 h-2.5 bg-white rounded-full"></div>
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
      {showBubble && !isDismissed && (
        <div className="mb-6 mr-6 bg-white border-2 border-[#5D4037] p-5 rounded-[2.5rem] rounded-br-none shadow-2xl max-w-[240px] text-sm font-bold text-[#3E2723] relative animate-in fade-in zoom-in slide-in-from-bottom-4 pointer-events-auto transition-all">
          
          {/* Close Sign */}
          <button 
            onClick={handleDismiss}
            className="absolute -top-2 -right-2 w-7 h-7 bg-[#5D4037] text-white rounded-full flex items-center justify-center hover:bg-orange-600 transition-colors border-2 border-white shadow-md z-10"
            title="Dismiss until next page"
          >
            <span className="text-[10px] font-black leading-none uppercase">✕</span>
          </button>

          <p className="leading-tight">{currentComment.text}</p>
          <div className="absolute -bottom-2 right-6 w-5 h-5 bg-white border-r-2 border-b-2 border-[#5D4037] transform rotate-45"></div>
        </div>
      )}
      
      {/* Mascot Container */}
      <div 
        onClick={handleTickle}
        className={`w-36 h-36 relative cursor-pointer pointer-events-auto transition-all duration-300 hover:scale-110 active:scale-90 group ${isTickled ? 'animate-bounce scale-105' : ''}`}
        title="Sir Crisp: Click to tickle!"
      >
        
        {/* Expression Particles */}
        <div className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity">
           {(currentComment.expression === 'happy' || currentComment.expression === 'bashful' || currentComment.expression === 'tickled') && (
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

        {/* === LIMBS === */}
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

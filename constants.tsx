
import React from 'react';
import { Module } from './types';
import { ModuleFoundation } from './modules/ModuleFoundation';
import { ModuleStructure } from './modules/ModuleStructure';
import { ModuleWordDiet } from './modules/ModuleWordDiet';
import { ModuleMeetings } from './modules/ModuleMeetings';
import { ModuleEvents } from './modules/ModuleEvents';
import { ModuleLostFound } from './modules/ModuleLostFound';
import { ModuleWorkshops } from './modules/ModuleWorkshops';
import { ModuleAppeals } from './modules/ModuleAppeals';
import { ModuleChanges } from './modules/ModuleChanges';

export const MODULES: Module[] = [
  {
    id: 'foundation',
    title: 'The Foundation',
    shortDesc: 'Master the 6 W\'s and the official CBSE 4-Mark Bible.',
    icon: '🏗️',
    content: <ModuleFoundation />
  },
  {
    id: 'structure',
    title: 'The Visual Blueprint',
    shortDesc: 'The anatomy that never changes. Alignment and the Box.',
    icon: '📦',
    content: <ModuleStructure />
  },
  {
    id: 'diet',
    title: 'The 50-Word Diet',
    shortDesc: 'Slash the waffle. Use colons. Active voice editing.',
    icon: '✂️',
    content: <ModuleWordDiet />
  },
  {
    id: 'meetings',
    title: 'Type 1: Meetings',
    shortDesc: 'Internal announcements and attendee prerequisites.',
    icon: '👥',
    content: <ModuleMeetings />
  },
  {
    id: 'events',
    title: 'Type 2: Events & Tours',
    shortDesc: 'Competitions, tours, and the 4-part formula.',
    icon: '🎉',
    content: <ModuleEvents />
  },
  {
    id: 'lostfound',
    title: 'Type 3: Lost & Found',
    shortDesc: 'Mastering the perspective shift (1st vs 3rd Person).',
    icon: '🔍',
    content: <ModuleLostFound />
  },
  {
    id: 'workshops',
    title: 'Type 4: Workshops',
    shortDesc: 'Seminars and Literary events with resource persons.',
    icon: '🎓',
    content: <ModuleWorkshops />
  },
  {
    id: 'appeals',
    title: 'Type 5: Appeals',
    shortDesc: 'Donation drives and balancing emotion with info.',
    icon: '❤️',
    content: <ModuleAppeals />
  },
  {
    id: 'changes',
    title: 'Type 6: Updates',
    shortDesc: 'Handling revisions to timings, routes, and venues.',
    icon: '🔄',
    content: <ModuleChanges />
  }
];

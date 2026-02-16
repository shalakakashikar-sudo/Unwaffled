
// Added React import to resolve the "Cannot find namespace 'React'" error for React.ReactNode
import React from 'react';

export interface Module {
  id: string;
  title: string;
  shortDesc: string;
  icon: string;
  content: React.ReactNode;
}

export type ViewState = 'home' | 'module' | 'cheatsheet' | 'practice';

export interface NoticeData {
  orgName: string;
  date: string;
  subject: string;
  body: string;
  name: string;
  designation: string;
}

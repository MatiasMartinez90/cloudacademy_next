"use client";
import { useState } from 'react';

const steps = [
  { id: 'step0', emoji: '👀', title: 'Step #0: Before we start Step #1...' },
  { id: 'step1', emoji: '📚', title: 'Step #1: Setting Up...' },
  { id: 'step2', emoji: '🪣', title: 'Step #2: Store Your Data' },
  { id: 'step3', emoji: '🧠', title: 'Step #3: Finish Setup' },
  { id: 'step4', emoji: '🔑', title: 'Step #4: Get Access' },
  { id: 'step5', emoji: '🌊', title: 'Step #5: Sync Your Data' },
  { id: 'step6', emoji: '🤖', title: 'Step #6: Chat With Your Bot' },
];

export default function CourseStepsSidebar({ activeStep }) {
  const handleClick = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };
  return (
    <aside className="w-full max-w-xs md:w-72 lg:w-80 sticky top-24">
      <nav className="bg-white dark:bg-gray-800 rounded-xl border border-gray-100 dark:border-gray-700 shadow p-4">
        <ul className="space-y-1">
          {steps.map((step, idx) => (
            <li key={step.id}>
              <button
                type="button"
                onClick={() => handleClick(step.id)}
                className={`flex items-center w-full px-3 py-2 rounded-lg text-left gap-3 transition-colors text-base font-medium
                  ${activeStep === step.id ? 'bg-indigo-100 dark:bg-indigo-900 text-indigo-700 dark:text-indigo-300' : 'text-gray-700 dark:text-gray-200 hover:bg-gray-200 dark:hover:bg-gray-700'}`}
              >
                <span className="text-xl">{step.emoji}</span>
                <span className={activeStep === step.id ? 'font-bold' : ''}>{step.title}</span>
              </button>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
} 
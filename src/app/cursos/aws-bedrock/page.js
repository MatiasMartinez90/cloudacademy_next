"use client";
import Navigation from '@/components/Navigation'
import { useState, useEffect, useRef } from 'react'
import { ClockIcon, CurrencyDollarIcon, FireIcon, UserGroupIcon, WrenchScrewdriverIcon, KeyIcon } from '@heroicons/react/24/outline'
import CourseStepsSidebar from '@/components/CourseStepsSidebar'

export default function AwsBedrock() {
  // Para el textarea de reflexión, puedes luego hacer un componente aparte si lo necesitas reutilizar
  const [reflection, setReflection] = useState("");
  const maxChars = 500;
  const sectionRefs = useRef([]);
  const progressBarRef = useRef(null);
  const [activeStep, setActiveStep] = useState('step0');
  const [showProgress, setShowProgress] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const sections = sectionRefs.current;
      if (!sections.length) return;
      const scrollY = window.scrollY + 100; // 100px offset for navbar and margin
      let found = false;
      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (!section) continue;
        const top = section.offsetTop;
        if (scrollY >= top) {
          setActiveStep(section.id);
          found = true;
          break;
        }
      }
      if (!found) setActiveStep(sections[0]?.id || 'step0');
      // Barra de progreso
      const totalHeight = document.body.scrollHeight - window.innerHeight;
      let progress = 0;
      if (totalHeight > 0) {
        progress = window.scrollY / totalHeight;
      }
      if (progressBarRef.current) {
        progressBarRef.current.style.width = `${Math.min(progress * 100, 100)}%`;
      }
      setShowProgress(window.scrollY > 0);
    };
    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // --- PASOS DEL CURSO ---
  const steps = [
    {
      id: 'step0',
      emoji: '👀',
      title: 'Step #0: Before we start Step #1...',
      content: (
        <>
          <h2 className="text-2xl font-bold mb-4">Before we start Step #1...</h2>
          <p className="font-semibold mb-2">Here's a quick overview of what we're building today:</p>
          <p className="mb-4">You're about to build a chatbot that's trained on your personal documents. When you send a message to your completed chatbot, three things will happen behind the scenes:</p>
          <ol className="list-decimal list-inside space-y-2 mb-4">
            <li>The chatbot uses an <strong>AI model</strong> to understand your question and figure out what information it needs to answer it.</li>
            <li>The AI model sends a request for information it needs to your <strong>Knowledge Base</strong>, which is where you process and store your personal documents.</li>
            <li>The AI model transforms the raw data (e.g. paragraphs of text) from your Knowledge Base into a <strong>proper response</strong>, which gets sent back to you.</li>
          </ol>
          {/* Diagrama simple */}
          <div className="flex flex-col items-center my-8">
            <img src="/images/bedrock/step-0-annotated.png" alt="User-AI-KnowledgeBase Flow" className="w-full max-w-2xl rounded-xl border border-gray-200 dark:border-gray-700 shadow" />
            <span className="text-gray-500 dark:text-gray-400 text-sm mt-2">A simple diagram of what we're building</span>
          </div>
          {/* Bloque explicativo de cómo se va a construir */}
          <div className="bg-yellow-50 dark:bg-yellow-900/40 border border-yellow-200 dark:border-yellow-700 rounded-lg p-4 mb-4 flex items-start gap-2">
            <span className="text-xl">💡</span>
            <div>
              <div className="font-semibold mb-1">How in the world are we going to build this?</div>
              <ul className="list-disc list-inside mb-2">
                <li>We'll build a <b>Knowledge Base</b> in Amazon Bedrock in <span className="inline-flex items-center gap-1">📚 Steps #1-3</span>.</li>
                <li>We'll pick the best <b>AI models</b> for our chatbot in <span className="inline-flex items-center gap-1">🧠 Step #4</span>.</li>
                <li>We'll sync your documents from S3 to the Knowledge Base in <span className="inline-flex items-center gap-1">🪣 Step #5</span>.</li>
                <li>Finally, Bedrock sets up a chatbot when we connect the Knowledge Base and AI model, which we'll test in <span className="inline-flex items-center gap-1">🤖 Step #6</span>!</li>
              </ul>
            </div>
          </div>
          {/* Diagrama completo */}
          <div className="flex flex-col items-center my-8">
            <img src="/images/bedrock/architecture-complete.png" alt="S3-Chunking-Embeddings-OpenSearch Flow" className="w-full max-w-2xl rounded-xl border border-gray-200 dark:border-gray-700 shadow" />
            <span className="text-gray-500 dark:text-gray-400 text-sm mt-2">Your complete solution will look like this</span>
          </div>
          {/* Bloque de reflexión */}
          <div className="mt-8 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-xl p-6 flex flex-col items-center shadow-sm">
            <h3 className="text-xl font-semibold mb-2 flex items-center gap-2">
              <span role="img" aria-label="writing">✍️</span> What is RAG and how will you demonstrate it today?
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mb-4 text-center">Start your answer with 'RAG (Retrieval Augmented Generation) is... In this project, I will demonstrate RAG by...'</p>
            <textarea
              className="w-full max-w-xl min-h-[100px] rounded-lg border border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 p-3 mb-2 resize-none focus:outline-none focus:ring-2 focus:ring-indigo-400 text-gray-900 dark:text-white"
              placeholder="Go on, we know you have a great answer.."
              maxLength={500}
            />
            <div className="w-full max-w-xl flex justify-between items-center text-xs text-gray-500 dark:text-gray-400 mb-4">
              <span>0/500</span>
              <span className="italic">Character limit reached <span className="underline cursor-pointer">Upgrade to Pro</span></span>
            </div>
            <button className="w-full max-w-xs mb-2 py-2 px-4 rounded-lg bg-gray-100 dark:bg-gray-800 border border-gray-300 dark:border-gray-700 text-gray-800 dark:text-gray-200 font-medium flex items-center justify-center gap-2">
              ✓ Tasks still to complete
            </button>
            <button className="w-full max-w-xs py-2 px-4 rounded-lg bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 text-gray-600 dark:text-gray-300 font-medium flex items-center justify-center gap-2">
              ↩️ Return to later
            </button>
          </div>
        </>
      )
    },
    {
      id: 'step1',
      emoji: '📚',
      title: 'Step #1: Setting Up a Knowledge Base',
      content: (
        <>
          <h2 className="text-2xl font-bold mb-4">Step #1: Setting Up a Knowledge Base</h2>
          <p>In this step, you'll create a Knowledge Base in Amazon Bedrock to store your chatbot's information.</p>
          <ul className="list-disc list-inside mt-2 mb-4">
            <li>Go to the Amazon Bedrock console.</li>
            <li>Navigate to Knowledge Bases and click <b>Create Knowledge Base</b>.</li>
            <li>Follow the prompts to set up your Knowledge Base.</li>
          </ul>
        </>
      )
    },
    {
      id: 'step2',
      emoji: '🪣',
      title: 'Step #2: Store Your Documents in S3',
      content: (
        <>
          <h2 className="text-2xl font-bold mb-4">Step #2: Store Your Documents in S3</h2>
          <p>Upload your documents to Amazon S3 so your chatbot can access them.</p>
          <ul className="list-disc list-inside mt-2 mb-4">
            <li>Create a new S3 bucket.</li>
            <li>Upload your files to the bucket.</li>
            <li>Set the correct permissions for Bedrock to access your files.</li>
          </ul>
        </>
      )
    },
    {
      id: 'step3',
      emoji: '🧠',
      title: 'Step #3: Finish Setting Up Your Knowledge Base',
      content: (
        <>
          <h2 className="text-2xl font-bold mb-4">Step #3: Finish Setting Up Your Knowledge Base</h2>
          <p>Connect your S3 bucket to your Knowledge Base and complete the setup.</p>
          <ul className="list-disc list-inside mt-2 mb-4">
            <li>In the Bedrock console, link your S3 bucket to your Knowledge Base.</li>
            <li>Index your documents.</li>
            <li>Test the connection.</li>
          </ul>
        </>
      )
    },
    {
      id: 'step4',
      emoji: '🔑',
      title: 'Step #4: Get Access to AI Models',
      content: (
        <>
          <h2 className="text-2xl font-bold mb-4">Step #4: Get Access to AI Models</h2>
          <p>Request access to the Bedrock AI models if you haven't already.</p>
          <ul className="list-disc list-inside mt-2 mb-4">
            <li>Go to the Bedrock console and request access to the models you need.</li>
            <li>Wait for approval from AWS.</li>
          </ul>
        </>
      )
    },
    {
      id: 'step5',
      emoji: '🌊',
      title: 'Step #5: Sync Your Knowledge Base',
      content: (
        <>
          <h2 className="text-2xl font-bold mb-4">Step #5: Sync Your Knowledge Base</h2>
          <p>Sync your Knowledge Base to make sure all your documents are up to date.</p>
          <ul className="list-disc list-inside mt-2 mb-4">
            <li>Click the <b>Sync</b> button in the Bedrock console.</li>
            <li>Check for any errors or missing files.</li>
          </ul>
        </>
      )
    },
    {
      id: 'step6',
      emoji: '🤖',
      title: 'Step #6: Chat With Your Bot',
      content: (
        <>
          <h2 className="text-2xl font-bold mb-4">Step #6: Chat With Your Bot</h2>
          <p>Now you can interact with your chatbot and ask questions about your documents!</p>
          <ul className="list-disc list-inside mt-2 mb-4">
            <li>Open the chat interface in Bedrock.</li>
            <li>Ask a question and see the AI-generated response.</li>
            <li>Try different types of questions to test your bot.</li>
          </ul>
        </>
      )
    },
  ];

  function StepReflection({ stepId }) {
    const [value, setValue] = useState("");
    const maxChars = 500;
    return (
      <div className="mt-8 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-xl p-6 flex flex-col items-center shadow-sm">
        <h3 className="text-xl font-semibold mb-2 flex items-center gap-2">
          <span role="img" aria-label="writing">✍️</span> What are we doing in this step?
        </h3>
        <p className="text-gray-600 dark:text-gray-300 mb-4 text-center">Start your answer with 'In this step, I will'...</p>
        <textarea
          className="w-full max-w-xl min-h-[100px] rounded-lg border border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 p-3 mb-2 resize-none focus:outline-none focus:ring-2 focus:ring-indigo-400 text-gray-900 dark:text-white"
          placeholder="Go on, we know you have a great answer.."
          maxLength={maxChars}
          value={value}
          onChange={e => setValue(e.target.value)}
        />
        <div className="w-full max-w-xl flex justify-between items-center text-xs text-gray-500 dark:text-gray-400 mb-4">
          <span>{value.length}/{maxChars}</span>
          <span className="italic">Character limit reached <span className="underline cursor-pointer">Upgrade to Pro</span></span>
        </div>
        <button className="w-full max-w-xs mb-2 py-2 px-4 rounded-lg bg-gray-100 dark:bg-gray-800 border border-gray-300 dark:border-gray-700 text-gray-800 dark:text-gray-200 font-medium flex items-center justify-center gap-2">
          ✓ Tasks still to complete
        </button>
        <button className="w-full max-w-xs py-2 px-4 rounded-lg bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 text-gray-600 dark:text-gray-300 font-medium flex items-center justify-center gap-2">
          ↩️ Return to later
        </button>
      </div>
    );
  }

  // Checklist interactiva
  function Checklist() {
    const initial = [
      { text: 'Build a powerful RAG chatbot from scratch in Amazon Bedrock!', checked: false, icon: '🛠️' },
      { text: 'Create a Knowledge Base to hold your chatbot\'s information.', checked: false, icon: '📚' },
      { text: 'Use Amazon S3 and OpenSearch to manage your chatbot\'s data.', checked: false, icon: '🪣' },
      { text: 'Test and refine your chatbot\'s performance.', checked: false, icon: '🧪' },
    ];
    const [items, setItems] = useState(initial);
    const toggle = idx => setItems(items => items.map((item, i) => i === idx ? { ...item, checked: !item.checked } : item));
    return (
      <ul className="mb-4">
        {items.map((item, idx) => (
          <li key={idx} className="flex items-center gap-2 mb-1 cursor-pointer select-none" onClick={() => toggle(idx)}>
            <input type="checkbox" checked={item.checked} readOnly className="accent-green-500 w-5 h-5" />
            <span className={item.checked ? 'line-through text-gray-400' : 'font-medium text-gray-900 dark:text-gray-100'}>
              <span className="mr-1">{item.icon}</span>{item.text}
            </span>
          </li>
        ))}
      </ul>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <Navigation />
      <main className="max-w-7xl mx-auto py-8 sm:px-6 lg:px-8 flex gap-8">
        {/* Barra de progreso */}
        <div className="fixed left-0 right-0" style={{top: '0px', zIndex: 50, pointerEvents: 'none', height: '20px'}}>
          <div className={`w-full h-5 bg-white dark:bg-gray-900 flex items-end transition-opacity duration-300`} style={{opacity: showProgress ? 1 : 0}}>
            <div className="h-1.5 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden w-full">
              <div ref={progressBarRef} className="h-1.5 bg-indigo-500 transition-all duration-300" style={{width: '0%'}} />
            </div>
          </div>
        </div>
        {/* Sidebar de pasos tipo steps */}
        <div className="hidden lg:block">
          <CourseStepsSidebar activeStep={activeStep} />
        </div>
        {/* Contenido principal */}
        <section className="flex-1">
          {/* Portada principal */}
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow p-8 mb-8 border border-gray-100 dark:border-gray-700">
            <div className="mb-2">
              <span className="inline-block text-xs font-semibold bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded px-2 py-1 mb-2">• PROJECT</span>
            </div>
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-4">
              <div>
                <h1 className="text-3xl md:text-4xl font-extrabold mb-2">Set Up a RAG Chatbot in Bedrock</h1>
                <p className="text-lg text-gray-600 dark:text-gray-300">Build an AI chatbot that learns from your data with RAG and Amazon Bedrock!</p>
              </div>
              <div className="flex items-center space-x-2">
                {/* Avatares de ejemplo */}
                <img src="https://randomuser.me/api/portraits/men/32.jpg" alt="avatar1" className="w-8 h-8 rounded-full border-2 border-white dark:border-gray-700" />
                <img src="https://randomuser.me/api/portraits/women/44.jpg" alt="avatar2" className="w-8 h-8 rounded-full border-2 border-white dark:border-gray-700 -ml-2" />
                <img src="https://randomuser.me/api/portraits/men/65.jpg" alt="avatar3" className="w-8 h-8 rounded-full border-2 border-white dark:border-gray-700 -ml-2" />
                <img src="https://randomuser.me/api/portraits/men/12.jpg" alt="avatar4" className="w-8 h-8 rounded-full border-2 border-white dark:border-gray-700 -ml-2" />
                <span className="ml-2 text-gray-500 dark:text-gray-400 text-sm">70+ completed</span>
              </div>
            </div>
            <div className="border-t border-gray-200 dark:border-gray-700 my-4" />
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 text-sm mb-4">
              <div className="flex items-center gap-2">
                <FireIcon className="w-5 h-5 text-orange-500" />
                <span className="font-semibold">DIFFICULTY</span>
                <span className="ml-2">Mildly spicy</span>
              </div>
              <div className="flex items-center gap-2">
                <ClockIcon className="w-5 h-5 text-indigo-500" />
                <span className="font-semibold">TIME</span>
                <span className="ml-2">60 min</span>
              </div>
              <div className="flex items-center gap-2">
                <CurrencyDollarIcon className="w-5 h-5 text-green-600" />
                <span className="font-semibold">COST</span>
                <span className="ml-2">~$0.01</span>
              </div>
              <div className="flex items-center gap-2">
                <UserGroupIcon className="w-5 h-5 text-gray-400" />
                <span className="ml-2">70+ completed</span>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
              <div className="flex items-start gap-3">
                <WrenchScrewdriverIcon className="w-6 h-6 text-gray-500 mt-1" />
                <div>
                  <div className="font-semibold">WHAT YOU'LL NEED</div>
                  <ul className="list-disc list-inside text-gray-700 dark:text-gray-200">
                    <li>An AWS account - <a href="https://portal.aws.amazon.com/billing/signup" target="_blank" rel="noopener noreferrer" className="underline text-blue-600 dark:text-blue-400">Create one here!</a></li>
                  </ul>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <KeyIcon className="w-6 h-6 text-gray-500 mt-1" />
                <div>
                  <div className="font-semibold">KEY CONCEPTS</div>
                  <ul className="list-disc list-inside text-gray-700 dark:text-gray-200">
                    <li>Amazon Bedrock</li>
                    <li>Amazon OpenSearch Serverless</li>
                    <li>Amazon S3</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* 30 Second Summary */}
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow p-8 mb-8 border border-gray-100 dark:border-gray-700">
            <div className="flex items-center gap-2 mb-2">
              <span className="text-xl">⚡</span>
              <span className="font-bold text-lg">30 Second Summary</span>
            </div>
            <p className="mb-2">In this project, you'll learn how to build a chatbot that's an expert on you – it can answer questions about who you are, what you do, and what you know!</p>
            <p className="mb-2">This is made possible when we use a special AI technique called <b>RAG (Retrieval Augmented Generation)</b>, which is a way to train an AI chatbot on your personal documents. We'll learn how to do this on <b>Amazon Bedrock</b>, an AWS service that gives you access to AI models to bring into your applications.</p>
            {/* Imagen de ejemplo del chatbot final */}
            <div className="flex flex-col items-center my-8 w-full">
              <div className="bg-[#f7f5f2] dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-xl overflow-hidden shadow mb-2 p-4">
                <img src="/images/bedrock/step-6.15.png" alt="Test Knowledge Base" className="w-full max-w-md mx-auto" />
              </div>
              <span className="text-gray-500 dark:text-gray-400 text-sm mb-2">This is what your finished chatbot can do!</span>
              <button className="mt-2 px-4 py-2 rounded-lg bg-gray-100 dark:bg-gray-800 border border-gray-300 dark:border-gray-700 text-gray-800 dark:text-gray-200 font-medium flex items-center gap-2">
                Explore your potential <span aria-hidden>↗️</span>
              </button>
            </div>
          </div>

          {/* Imagen de ejemplo de chatbot */}
          <div className="flex flex-col items-center mb-2">
            <div className="bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-xl overflow-hidden shadow mb-2">
              <img src="https://i.imgur.com/4M7IWwP.png" alt="Test Knowledge Base" className="w-full max-w-xl" />
            </div>
            <span className="text-gray-500 dark:text-gray-400 text-sm mb-8">This is what your finished chatbot can do!</span>
          </div>

          {/* What is RAG? */}
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow p-8 mb-8 border border-gray-100 dark:border-gray-700">
            <div className="flex items-center gap-2 mb-2">
              <span className="text-xl">🤔</span>
              <span className="font-bold text-lg">What is RAG?</span>
            </div>
            <p className="mb-2">AI chatbots like ChatGPT are super smart, but they only know what they learned during training and what they can search online. They can't answer questions about you or your documents, unless you upload your files manually in each conversation (or unless you're a celebrity 👀).</p>
            <p className="mb-2">That's where <b>RAG (Retrieval Augmented Generation)</b> comes in. RAG is an AI technique that lets you take an AI model's brain (i.e. their ability to turn data into a human-like response) and give it your own documents to train on. Now, your AI chatbot becomes an in-house expert on your documents and information!</p>
            <p>Companies often use RAG to create customer support chatbots, but you can also use RAG to create a personal research assistant or an advanced way to search your documents.</p>
          </div>

          {/* Let's get ready... */}
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow p-8 mb-8 border border-gray-100 dark:border-gray-700">
            <div className="flex items-center gap-2 mb-2">
              <span className="text-xl">✅</span>
              <span className="font-bold text-lg">Let's get ready to...</span>
            </div>
            {/* Checklist interactiva */}
            <Checklist />
            <p className="mb-2 mt-6">Want a complete demo of how to do this project, from start to finish? Check out our <span className="inline-flex items-center gap-1"><span role="img" aria-label="video">🎥</span> <a href="https://www.youtube.com/watch?v=6Qk5hQ2U8gk" target="_blank" rel="noopener noreferrer" className="underline text-blue-600 dark:text-blue-400">walkthrough with Natasha</a> 🎥</span></p>
            <div className="flex justify-center mt-4">
              <iframe width="480" height="270" src="https://www.youtube.com/embed/6Qk5hQ2U8gk" title="Set Up a RAG Chatbot in Bedrock | AWS x Bedrock | Step-by-Step Tutorial" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen className="rounded-xl shadow max-w-full"></iframe>
            </div>
          </div>

          {/* Choose Your Mode... */}
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow p-8 mb-8 border border-gray-100 dark:border-gray-700">
            <div className="flex items-center gap-2 mb-2">
              <span className="text-xl">🧑‍💻</span>
              <span className="font-bold text-lg">Choose Your Mode…</span>
            </div>
            <p className="mb-2">We like to give a couple of different options for these hands-on projects, based on how much support and guidance you want.</p>
            <p className="mb-2">There are three <span role="img" aria-label="clover">🍀</span> equally awesome ways you can complete your project.</p>
            <div className="flex flex-col md:flex-row gap-2 mt-4">
              <div className="flex-1 flex flex-col items-center border border-gray-200 dark:border-gray-700 rounded-lg p-4 bg-gray-50 dark:bg-gray-900">
                <span className="text-2xl mb-1">😶‍🌫️</span>
                <span className="font-semibold">#0 - No Touch</span>
              </div>
              <div className="flex-1 flex flex-col items-center border border-gray-200 dark:border-gray-700 rounded-lg p-4 bg-gray-50 dark:bg-gray-900">
                <span className="text-2xl mb-1">🙂</span>
                <span className="font-semibold">#1 - Low Touch</span>
              </div>
              <div className="flex-1 flex flex-col items-center border border-gray-200 dark:border-gray-700 rounded-lg p-4 bg-gray-50 dark:bg-gray-900">
                <span className="text-2xl mb-1">🤩</span>
                <span className="font-semibold">#2 - High Touch</span>
              </div>
            </div>
          </div>

          {/* Your Step-By-Step Project */}
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow p-8 mb-8 border border-gray-100 dark:border-gray-700">
            <div className="flex items-center gap-2 mb-2">
              <span className="text-xl">🪜</span>
              <span className="font-bold text-lg">Your Step-By-Step Project</span>
            </div>
            <p className="mb-2">Welcome to the high-touch version of this project. We'll guide you through this project step-by-step together.</p>
            <p className="mb-2">Let's go!</p>
            <div className="bg-yellow-50 dark:bg-yellow-900/40 border border-yellow-200 dark:border-yellow-700 rounded-lg p-4 mt-4">
              <span role="img" aria-label="flag">🏴</span> If you're EVER stuck – <a href="https://community.nextwork.org/" target="_blank" rel="noopener noreferrer" className="underline text-blue-600 dark:text-blue-400">ask the NextWork community</a>. Students like you are already asking questions about this project.
            </div>
          </div>

          {/* Aquí irían los pasos del curso, que puedes seguir replicando con la misma lógica */}
          {steps.map((step, idx) => (
            <div
              key={step.id}
              id={step.id}
              ref={el => sectionRefs.current[idx] = el}
              className="bg-white dark:bg-gray-800 rounded-2xl shadow p-8 mb-8 border border-gray-100 dark:border-gray-700 scroll-mt-32"
            >
              <div className="flex items-center gap-2 mb-2">
                <span className="text-xl">{step.emoji}</span>
                <span className="font-bold text-lg">{step.title}</span>
              </div>
              {step.content}
              {step.id !== 'step0' && <StepReflection stepId={step.id} />}
            </div>
          ))}
        </section>
      </main>
    </div>
  )
} 
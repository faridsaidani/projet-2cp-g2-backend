import React, { useState } from 'react';

function FAQSection() {
    // State to track whether each question is expanded or collapsed
    const [expanded, setExpanded] = useState(Array(6).fill(false));

    // Function to toggle the visibility of a question's answer
    const toggleAnswer = (index) => {
        const newExpanded = [...expanded];
        newExpanded[index] = !newExpanded[index];
        setExpanded(newExpanded);
    };

    // FAQ data containing questions and answers
    const faqs = [
        {
            question: "What is depression?",
            answer: "Depression is a common and serious medical illness that negatively affects how you feel, the way you think, and how you act. It causes feelings of sadness and loss of interest in activities once enjoyed."
        },
        {
            question: "What are the symptoms of anxiety?",
            answer: "Anxiety disorders involve more than temporary worry or fear. For a person with an anxiety disorder, the anxiety does not go away and can get worse over time, affecting their daily life."
        },
        {
            question: "What is PTSD?",
            answer: "Post-traumatic stress disorder (PTSD) is a mental health condition that's triggered by a terrifying event — either experiencing it or witnessing it. Symptoms may include flashbacks, nightmares, and severe anxiety."
        },
        {
            question: "What are the signs of addiction?",
            answer: "Addiction is a complex condition, a brain disease that is manifested by compulsive substance use despite harmful consequences. Signs of addiction may include increased tolerance, withdrawal symptoms, and loss of control."
        },
        {
            question: "How can I improve my mental health?",
            answer: "Improving mental health involves a variety of strategies such as seeking therapy, practicing self-care, exercising regularly, maintaining social connections, and adopting healthy coping mechanisms."
        },
        {
            question: "What is cognitive behavioral therapy (CBT)?",
            answer: "Cognitive-behavioral therapy (CBT) is a type of psychotherapy that helps people learn how to identify and change negative thought patterns and behaviors. It is effective in treating a wide range of mental health issues."
        }
    ];

    return (
        <div className="faq-container bg-primback  rounded-md  mx-auto p-4">
            {faqs.map((faq, index) => (
                <div key={index} className={`mb-4 ${index !== faqs.length - 1 ? 'pb-4 border-b border-seclight' : ''}`}>
                    <button
                        className="flex items-center justify-between w-full py-2 px-4 text-left font-bold  font-urbanist"
                        onClick={() => toggleAnswer(index)}
                    >
                        <span>{faq.question}</span>
                        {/* SVG for collapsed state */}
                        {!expanded[index] ? (
                            <svg width="41" height="40" viewBox="0 0 41 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect x="0.5" width="40" height="40" rx="4" fill="#C3E7FA"/>
                            <path d="M21.25 14.75C21.25 14.3358 20.9142 14 20.5 14C20.0858 14 19.75 14.3358 19.75 14.75V19.25H15.25C14.8358 19.25 14.5 19.5858 14.5 20C14.5 20.4142 14.8358 20.75 15.25 20.75L19.75 20.75V25.25C19.75 25.6642 20.0858 26 20.5 26C20.9142 26 21.25 25.6642 21.25 25.25V20.75L25.75 20.75C26.1642 20.75 26.5 20.4142 26.5 20C26.5 19.5858 26.1642 19.25 25.75 19.25H21.25V14.75Z" fill="#4C606E"/>
                            </svg>
                            
                        ) : (
                            // SVG for expanded state
                            <svg width="41" height="40" viewBox="0 0 41 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect x="0.5" width="40" height="40" rx="4" fill="#298EA6"/>
                            <path d="M16.7803 15.2197C16.4874 14.9268 16.0126 14.9268 15.7197 15.2197C15.4268 15.5126 15.4268 15.9874 15.7197 16.2803L19.4393 20L15.7197 23.7197C15.4268 24.0126 15.4268 24.4874 15.7197 24.7803C16.0126 25.0732 16.4874 25.0732 16.7803 24.7803L20.5 21.0607L24.2197 24.7803C24.5126 25.0732 24.9874 25.0732 25.2803 24.7803C25.5732 24.4874 25.5732 24.0126 25.2803 23.7197L21.5607 20L25.2803 16.2803C25.5732 15.9874 25.5732 15.5126 25.2803 15.2197C24.9874 14.9268 24.5126 14.9268 24.2197 15.2197L20.5 18.9393L16.7803 15.2197Z" fill="white"/>


                                <polyline points="18 15 12 9 6 15"></polyline>
                            </svg>
                        )}
                    </button>
                    {expanded[index] && <p className="mt-2">{faq.answer}</p>}
                </div>
            ))}
        </div>
    );
}

export default FAQSection;


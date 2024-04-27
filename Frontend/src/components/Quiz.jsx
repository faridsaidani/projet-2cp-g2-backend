import React, { useState } from 'react';

function Quiz() {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [userAnswers, setUserAnswers] = useState([]);
  const [showResult, setShowResult] = useState(false);
  const [concern, setConcern] = useState(null);

  const questionsByConcern = {
    Anxiety: [
      { question: 'What triggers your anxiety the most?', options: ['Work or school pressure', 'Relationship issues', 'Health concerns', 'Financial worries'] },
      { question: 'How do your anxiety symptoms usually manifest?', options: ['Excessive worrying', 'Restlessness or feeling on edge', 'Difficulty concentrating', 'Muscle tension'] },
      { question: 'How often do you experience these symptoms?', options: ['Daily', 'Several times a week', 'Occasionally', 'Rarely'] },
      { question: 'What strategies have you previously tried to manage your anxiety?', options: ['Meditation or relaxation techniques', 'Physical activity', 'Medication', 'Therapy or counseling'] },
      { question: 'How does anxiety impact your daily functionality?', options: ['Severely — affects daily tasks', 'Moderately — manageable but disruptive', 'Mildly — slight disruptions', 'Minimally — not much impact'] },
      { question: 'Do you feel that your anxiety is under control?', options: ['Yes, generally it is manageable', 'Sometimes, but not consistently', 'Rarely, it feels overwhelming often', 'No, I feel overwhelmed all the time'] },
    ],
    Stress: [
      { question: 'What are the primary sources of your stress?', options: ['Workload or job demands', 'Family or personal relationships', 'Financial obligations', 'Health issues'] },
      { question: 'How does stress affect your daily life?', options: ['Impaired sleep', 'Irritability or moodiness', 'Fatigue or low energy', 'Difficulty making decisions'] },
      { question: 'What stress management techniques have you tried?', options: ['Meditation or breathing exercises', 'Physical activity or exercise', 'Talking to friends or family', 'Professional help or therapy'] },
      { question: 'How often do you feel stressed?', options: ['Daily', 'Several times a week', 'Occasionally', 'Rarely'] },
      { question: 'When stressed, how do you usually react?', options: ['Withdraw from others', 'Become upset or angry', 'Feel hopeless', 'Use substances like alcohol or drugs'] },
      { question: 'Do you feel equipped to handle your stress?', options: ['Yes, most of the time', 'Sometimes, but I struggle often', 'Rarely, I feel constantly overwhelmed', 'No, I am not handling it well at all'] },
    ],
    Depression: [
      { question: 'How long have you felt depressed?', options: ['A few weeks', 'Several months', 'Over a year', 'On and off for several years'] },
      { question: 'Which symptoms of depression do you experience?', options: ['Persistent sadness or low mood', 'Loss of interest or pleasure in activities', 'Changes in appetite or weight', 'Insomnia or hypersomnia'] },
      { question: 'What treatments or interventions have you tried for depression?', options: ['Medication', 'Therapy or counseling', 'Lifestyle changes (e.g., diet, exercise)', 'Support groups'] },
      { question: 'How does your depression affect your relationships?', options: ['Significant strain or breakdown', 'Some difficulties, but generally manageable', 'Minimal impact', 'I prefer not to discuss my relationships'] },
      { question: 'How often do you experience mood swings or emotional highs and lows?', options: ['Frequently throughout the day', 'Several times a week', 'Occasionally', 'Rarely'] },
      { question: 'How would you describe your ability to manage daily tasks?', options: ['I manage well despite my mood', 'It’s challenging, but I get things done', 'I struggle significantly with daily tasks', 'I cannot manage daily tasks at all'] },
    ],
    'Other Concerns': [
      { question: 'Can you specify what you are experiencing?', options: ['Mood swings', 'Obsessive thoughts', 'Panic attacks', 'Eating disorders'] },
      { question: 'How often do you experience these issues?', options: ['Daily', 'Several times a week', 'Occasionally', 'Rarely'] },
      { question: 'What impact do these concerns have on your daily life?', options: ['Significant disruption at work or school', 'Strain on personal relationships', 'Difficulty managing daily activities', 'Isolation from others'] },
      { question: 'What methods have you used to cope with these issues?', options: ['Professional therapy or counseling', 'Medication', 'Self-help strategies (e.g., books, online resources)', 'Support from friends or family'] },
      { question: 'How do you feel about your progress in dealing with these concerns?', options: ['I am making good progress', 'I see some improvement but still struggle', 'I see little to no improvement', 'I feel worse over time'] },
      { question: 'Do you feel you need more support in dealing with your concerns?', options: ['Yes, significantly', 'Yes, but it’s manageable', 'Somewhat, I’m not sure what would help', 'No, I manage well on my own'] },
    ],
  };

  const resultParagraph = {
    Anxiety: `Based on your responses, it seems you are dealing with anxiety. Deep breathing exercises, mindfulness, and regular physical activity can be beneficial. Establishing a routine to help manage anxiety is also effective. For a thorough diagnosis and tailored treatment plan, consulting with a mental health professional is crucial. Visit our blog or contact us for further assistance and resources.`,
    Stress: `Your answers indicate a high level of stress. Organizing your time and responsibilities better can help reduce stress. Techniques like mindfulness and scheduled relaxation time are very effective. If stress continues to be overwhelming, visit our blog or contact us for further assistance and resources and consider taking an appointment with a doctor.`,
    Depression: `The responses suggest you might be experiencing depression. It’s important to consider small daily activities like short walks, exposure to sunlight, and maintaining a routine to help improve your mood. For a thorough diagnosis and tailored treatment plan, consulting with a mental health professional is crucial. Visit our blog or contact us for further assistance and resources.`,
    'Other Concerns': `Your answers indicate that you are dealing with concerns that might be less common but are equally important. Depending on your specific symptoms and their impact, different strategies such as joining support groups, specific therapies like Cognitive Behavioral Therapy (CBT), or possibly medication might be helpful. Maintaining a routine and ensuring regular check-ins with a mental health professional are crucial. For more personalized support and to ensure these suggestions suit your needs, consider booking an appointment with a healthcare provider, or take a look at our blogs.`
  };

  const handleAnswer = (selectedOption) => {
    const currentQuestion = questionsByConcern[concern][currentQuestionIndex];
    setUserAnswers([...userAnswers, { question: currentQuestion.question, selectedOption }]);
    
    if (currentQuestionIndex < questionsByConcern[concern].length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      setShowResult(true);
    }
  };

  const handleConcernSelection = (selectedConcern) => {
    setConcern(selectedConcern);
    setCurrentQuestionIndex(0);
  };

  const restartQuiz = () => {
    setCurrentQuestionIndex(0);
    setUserAnswers([]);
    setShowResult(false);
    setConcern(null);
  };

  if (!concern) {
    return (
      <div className='flex flex-col justify-center items-center bg-primback w-[100%] h-[100%] p-10 rounded-3xl'>
        <h3 className='font-urbanist text-4xl text-center text-primdark font-bold leading-loose'>Welcome to Oxypsy</h3>
        <p className='text-center font-urbanist text-sm text-secdark font-semibold leading-custom-lineHeight'>Thank you for choosing Oxypsy to explore your mental well-being. This detailed questionnaire will help identify your current mental state and offer tailored initial advice. Let’s take the first step towards understanding and improving your mental health.</p>
        <h3 className='font-urbanist text-3xl text-center text-primdark font-bold leading-loose'>Initial Question: What are you primarily concerned about today?</h3>
        <ul className='flex flex-col w-[30%]'>
          <li className='font-urbanist text-xl font-bold text-center text-sechover bg-seclight m-2 py-2 px-6  rounded-lg cursor-pointer'><button onClick={() => handleConcernSelection('Anxiety')}>Anxiety</button></li>
          <li className='font-urbanist text-xl font-bold text-center text-sechover bg-seclight m-2 py-2 px-6  rounded-lg cursor-pointer'><button onClick={() => handleConcernSelection('Stress')}>Stress</button></li>
          <li className='font-urbanist text-xl font-bold text-center text-sechover bg-seclight m-2 py-2 px-6  rounded-lg cursor-pointer'><button onClick={() => handleConcernSelection('Depression')}>Depression</button></li>
          <li className='font-urbanist text-xl font-bold text-center text-sechover bg-seclight m-2 py-2 px-6  rounded-lg cursor-pointer'><button onClick={() => handleConcernSelection('Other Concerns')}>Other Concerns</button></li>
        </ul>
      </div>
    );
  }
  
  if (showResult) {
    return (
      <div className='flex flex-col gap-10  items-center bg-primback w-[100%] h-[100%] p-10 rounded-3xl'>

        {/*
        <h3 className='font-urbanist text-4xl text-center text-primdark font-bold leading-loose'>Quiz Result</h3>
        <ul className='w-[65%]'>
          {userAnswers.map((answer, index) => (
            <li className='grid grid-cols-[auto,1fr] font-urbanist text-xs text-secdark font-semibold leading-custom-lineHeight' key={index}>
              <strong>{answer.question}:</strong> 
              <span>{answer.selectedOption}</span>
            </li>
          ))}
        </ul>
         */}
       
        <h3 className='font-urbanist text-3xl text-center text-primdark font-bold leading-loose'>Diagnosis and Advice for your situation:</h3>
        <div className='w-[60%]'>
            <p >{resultParagraph[concern]}</p>
        </div>
        
        
        
        <button className='mt-auto bg-sechover text-secwhite py-2 px-4 rounded-lg' onClick={restartQuiz}>Restart Quiz</button>
      </div>
    );
  }

  return (
    <div className='flex flex-col justify-center items-center bg-primback w-[100%] h-[100%] p-10 rounded-3xl'>
      <h3 className='font-urbanist text-3xl text-center text-primdark font-bold leading-loose'>{questionsByConcern[concern][currentQuestionIndex].question}</h3>
      <ul className='flex flex-col w-[50%]'>
        {questionsByConcern[concern][currentQuestionIndex].options.map((option, index) => (
          <li className='font-urbanist text-xl font-bold text-center text-sechover bg-seclight m-2 py-2 px-6  rounded-lg cursor-pointer' key={index}>
            <button onClick={() => handleAnswer(option)}>{option}</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Quiz;

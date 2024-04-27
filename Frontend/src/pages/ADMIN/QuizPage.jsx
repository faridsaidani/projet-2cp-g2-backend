import React from 'react'
import Quiz from '../../components/Quiz.jsx'
import Header from '../../components/Header.jsx'
import Footer from '../../components/Footer.jsx'
import petals from '../../assets/Petals.png'
import petalSemi from '../../assets/PetalsSemi.png'
import design from '../../assets/Design.png'
import designtop from '../../assets/DesignTop.png'


const QuizPage = () => {
  return (
    <div className='flex flex-col'>
        <div className='h-[15%]'>
            <Header></Header>
        </div>
        <div className='flex justify-center w-[100%] h-[80%]'>
            <div className='flex flex-col h-[100%] w-[100%]'>
                <div className='flex h-[90%] '>
                   
                        <div className='flex flex-col w-[10%] '>
                            <div className='mb-auto mr-auto w-[100%] '>
                                <img src={designtop} alt="" />
                            </div>
                            <div className=' mr-auto  w-[70%]'>
                                <img src={petals} alt="" />
                            </div>
                        </div>

                   
                        <div className='flex justify-center w-[100%] mt-6 '>
                            <Quiz></Quiz>
                        </div>


                        <div className='flex flex-col w-[10%] '>
                            <div className='mb-auto ml-auto w-[70%] '>
                                <img src={petals} alt="" />
                            </div>
                            <div className=' ml-auto  w-[80%]'>
                                <img src={design} alt="" />
                            </div>

                        </div>

                </div>
                <div className='w-[5%] h-[10%] mr-auto ml-[40%]'>
                    <img src={petalSemi} alt="" />
                </div>
            </div>
            
        </div>
        <Footer></Footer>
        
        
    </div>
  )
}

export default QuizPage
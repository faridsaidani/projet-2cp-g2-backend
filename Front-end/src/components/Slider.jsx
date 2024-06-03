import React from 'react'
import ReactSlidy from 'react-slidy'


const Slider = () => {
  return (
    <div>
                <ReactSlidy  keyboardNavigation >
                          <div className='flex flex-col justify-center items-center text-center bg-primback w-[90%] h-[60%]'>
                              <h3>What are you primarly concerned today?</h3>
                              <p>by answering this question you will one of the 4 roads for other diffrent questions</p>
                              <div className=' flex flex-col w-[60%]'>
                                  <button>
                                      Axiety
                                  </button>
                                  <button>
                                      Stress
                                  </button>
                                      Depression
                                  <button>
                                      Others
                                  </button>
                              </div>
                          </div>


                          <div div className='flex flex-col justify-center items-center bg-primback w-[90%] h-[60%]'>
                              <h3>How does you anxiety sumptoms usually manifeste?</h3>
                              <p></p>
                              <div className='w-[60%]'>
                                  <button>

                                  </button>
                                  <button>

                                  </button>
                                  <button>

                                  </button>
                                  <button>

                                  </button>
                              </div>
                          </div>
                   
            </ReactSlidy>
    </div>
  )
}

export default Slider
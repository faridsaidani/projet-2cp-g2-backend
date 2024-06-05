import React from 'react'
import { Link } from 'react-router-dom';
import Navbar from './Navbar'

const Header = ({ currentPage }) => {
  return (
    <div className='bg-primdark pt-10 pb-4 w-[100%] '>

        {/* Top header a ne pas toucher */}
        <div className="flex justify-center items-center h-auto text-white mb-10">
          
          {/* Button */}
            <Link to='/sign-up' className='relative  h-[10%] w-[90%] px-10 py-2 border border-sechover text-white rounded-md flex items-center justify-center'> 

                 
                    <svg className=' absolute left-4 ' width="11%" height="100%" viewBox="0 0 146 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M85.6979 -17L34.4334 5.41143L85.6979 -7.34476L36.5137 14.1505L117.645 -9.03619L1 36.8438L144.689 -5.4419L34.4334 35.5752L117.645 15.8419L50.0356 43.2571L112.742 26.2724L72.3246 57" stroke="#298EA6" stroke-width="2" stroke-dasharray="0.35 0.35"/>
                    </svg>
                  
                    <div className='flex justify-center items-center w-auto h-[50%]' >
                      <svg  className='mr-2' width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M0.429688 8.96664C0.429688 10.3646 0.77288 11.6787 1.3923 12.8506L2.8404 11.4025C3.03292 11.21 3.3259 11.21 3.51842 11.4025C3.71094 11.595 3.71931 11.888 3.51842 12.0889L1.89453 13.7128C2.10379 14.0057 2.31306 14.2903 2.5558 14.5498L14.5591 2.55483C14.2913 2.31208 13.9983 2.09445 13.7138 1.89355L12.0731 3.53418C11.8805 3.7267 11.5793 3.71833 11.3867 3.53418C11.1942 3.34165 11.1942 3.04869 11.3867 2.8478L12.8432 1.3997C11.6797 0.771903 10.3571 0.428711 8.95926 0.428711C4.29687 0.428711 0.429688 4.2959 0.429688 8.96664ZM10.7924 4.81487L9.64562 5.96163C9.45312 6.15415 9.15176 6.14579 8.95926 5.96163C8.77512 5.76911 8.76676 5.4594 8.95926 5.27525L10.1144 4.12849C10.3069 3.94434 10.6083 3.93597 10.7924 4.12849C10.9849 4.32101 10.9849 4.62235 10.7924 4.81487ZM8.37333 7.24233L7.2182 8.38907C7.03404 8.57321 6.7327 8.57321 6.54018 8.38907C6.34766 8.19657 6.34766 7.89521 6.54018 7.70271L7.68697 6.55594C7.87947 6.36342 8.18083 6.36342 8.37333 6.55594C8.55747 6.7401 8.56583 7.05818 8.37333 7.24233ZM5.94587 9.66143L4.80748 10.8081C4.60659 11.0007 4.31362 10.9924 4.1211 10.8081C3.92857 10.6156 3.92857 10.3227 4.1211 10.1301L5.25949 8.975C5.45201 8.7825 5.75335 8.79085 5.94587 8.975C6.13002 9.16757 6.14677 9.46885 5.94587 9.66143ZM8.96762 17.5046C13.6384 17.5046 17.5055 13.6291 17.5055 8.96664C17.5055 7.57714 17.1624 6.2546 16.543 5.0911L15.0948 6.53083C14.894 6.73173 14.6094 6.72335 14.4168 6.53083C14.2327 6.33831 14.216 6.04534 14.4168 5.84445L16.0408 4.22893C15.8398 3.93597 15.6305 3.65137 15.3878 3.39188L3.38449 15.3869C3.65235 15.6212 3.93694 15.8389 4.22154 16.0398L5.86217 14.3991C6.06306 14.1899 6.35603 14.2066 6.54855 14.3991C6.74107 14.5916 6.74945 14.8763 6.54855 15.0771L5.0837 16.542C6.25558 17.1531 7.56975 17.5046 8.96762 17.5046ZM13.8142 7.80314L12.6758 8.95828C12.4833 9.15078 12.1819 9.14243 11.9894 8.95828C11.8053 8.75743 11.7969 8.46443 11.9894 8.27193L13.1362 7.12514C13.3287 6.93262 13.6217 6.93262 13.8142 7.12514C14.015 7.30929 14.0067 7.61064 13.8142 7.80314ZM11.3951 10.2306L10.2483 11.369C10.0558 11.5699 9.75447 11.5699 9.56197 11.369C9.37776 11.1849 9.3694 10.8751 9.56197 10.6826L10.717 9.54421C10.9013 9.36007 11.211 9.36007 11.3951 9.54421C11.5876 9.73671 11.5876 10.0297 11.3951 10.2306ZM8.97597 12.6497L7.8209 13.7964C7.62833 13.9806 7.33538 13.989 7.14286 13.7964C6.95034 13.6039 6.95034 13.3026 7.14286 13.1101L8.28962 11.9633C8.48212 11.7708 8.78347 11.7875 8.97597 11.9633C9.16019 12.1642 9.16855 12.4656 8.97597 12.6497Z" fill="#298EA6"/>
                      </svg>

                      <span className='mr-2' >Check Our Personalized Offers</span> 
                      <span>&rarr;</span>
                    </div>
                  
                    <svg className='absolute right-4' width="11%" height="100%" viewBox="0 0 146 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M60.1189 -13L111.494 9.41143L60.1189 -3.34476L109.41 18.1505L28.1024 -5.03619L145 40.8438L0.999994 -1.4419L111.494 39.5752L28.1024 19.8419L95.8583 47.2571L33.0165 30.2724L73.5212 61" stroke="#298EA6" stroke-width="2" stroke-dasharray="0.35 0.35"/>
                    </svg>
                     

            </Link>
            
            
        </div>









        {/* buttom Header*/}
        <div className='flex justify-center items-center '>
          <div className='flex justify-between items-center w-[90%]'>  
           { /*logo*/}
            <div className='h-[4%]  w-[8%]  ' >
                <svg width="148" height="34" viewBox="0 0 148 34" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12.7694 10.3888C8.8766 6.60116 11.5581 0 16.9894 0C22.4208 0 25.1023 6.60116 21.2095 10.3888L16.9894 14.4947L12.7694 10.3888Z" fill="#C3E7FA"/>
                <path d="M12.7928 23.6112C8.90004 27.3988 11.5815 34 17.0129 34C22.4442 34 25.1257 27.3988 21.2329 23.6112L17.0129 19.5053L12.7928 23.6112Z" fill="#C3E7FA"/>
                <path d="M10.3888 21.2316C6.60116 25.1244 0 22.4429 0 17.0115C0 11.5802 6.60116 8.8987 10.3888 12.7915L14.4947 17.0115L10.3888 21.2316Z" fill="#C3E7FA"/>
                <path d="M23.6112 21.2072C27.3988 25.1 34 22.4185 34 16.9871C34 11.5558 27.3988 8.87428 23.6112 12.7671L19.5053 16.9871L23.6112 21.2072Z" fill="#C3E7FA"/>
                <path d="M51.264 25.216C49.664 25.216 48.28 24.864 47.112 24.16C45.944 23.44 45.032 22.432 44.376 21.136C43.736 19.824 43.416 18.288 43.416 16.528C43.416 15.2 43.6 14.008 43.968 12.952C44.336 11.88 44.856 10.968 45.528 10.216C46.216 9.448 47.04 8.864 48 8.464C48.976 8.064 50.064 7.864 51.264 7.864C52.864 7.864 54.248 8.216 55.416 8.92C56.584 9.624 57.488 10.624 58.128 11.92C58.768 13.216 59.088 14.744 59.088 16.504C59.088 17.832 58.904 19.032 58.536 20.104C58.168 21.176 57.64 22.096 56.952 22.864C56.28 23.632 55.464 24.216 54.504 24.616C53.544 25.016 52.464 25.216 51.264 25.216ZM51.264 23.248C52.416 23.248 53.4 22.984 54.216 22.456C55.032 21.928 55.656 21.16 56.088 20.152C56.536 19.144 56.76 17.936 56.76 16.528C56.76 14.4 56.28 12.752 55.32 11.584C54.376 10.416 53.024 9.832 51.264 9.832C50.112 9.832 49.12 10.096 48.288 10.624C47.472 11.136 46.848 11.896 46.416 12.904C45.984 13.896 45.768 15.104 45.768 16.528C45.768 18.64 46.248 20.288 47.208 21.472C48.168 22.656 49.52 23.248 51.264 23.248ZM62.5076 25.144C62.2676 25.144 62.0596 25.072 61.8836 24.928C61.7076 24.784 61.6116 24.592 61.5956 24.352C61.5956 24.112 61.6996 23.856 61.9076 23.584L66.0596 18.424V19.504L62.1716 14.704C61.9476 14.432 61.8436 14.176 61.8596 13.936C61.8756 13.696 61.9636 13.504 62.1236 13.36C62.2996 13.216 62.5156 13.144 62.7716 13.144C63.0436 13.144 63.2676 13.192 63.4436 13.288C63.6356 13.384 63.8116 13.536 63.9716 13.744L67.2836 17.944H66.5156L69.8276 13.744C69.9876 13.536 70.1556 13.384 70.3316 13.288C70.5236 13.192 70.7476 13.144 71.0036 13.144C71.2596 13.144 71.4676 13.216 71.6276 13.36C71.8036 13.504 71.8916 13.696 71.8916 13.936C71.9076 14.176 71.8116 14.432 71.6036 14.704L67.7396 19.456V18.496L71.8676 23.584C72.0916 23.84 72.1956 24.088 72.1796 24.328C72.1636 24.568 72.0676 24.768 71.8916 24.928C71.7316 25.072 71.5236 25.144 71.2676 25.144C70.9956 25.144 70.7636 25.096 70.5716 25C70.3956 24.904 70.2276 24.752 70.0676 24.544L66.4916 20.056H67.2356L63.7076 24.544C63.5476 24.736 63.3716 24.888 63.1796 25C63.0036 25.096 62.7796 25.144 62.5076 25.144ZM77.4478 29.488C77.1918 29.488 76.9758 29.416 76.7998 29.272C76.6398 29.144 76.5438 28.96 76.5118 28.72C76.4958 28.496 76.5438 28.256 76.6558 28L78.2878 24.304V25.216L73.7518 14.656C73.6398 14.384 73.5998 14.136 73.6318 13.912C73.6638 13.688 73.7678 13.504 73.9438 13.36C74.1358 13.216 74.3918 13.144 74.7118 13.144C74.9838 13.144 75.1998 13.208 75.3598 13.336C75.5198 13.464 75.6718 13.688 75.8158 14.008L79.5838 23.296H78.9118L82.7518 14.008C82.8798 13.688 83.0318 13.464 83.2078 13.336C83.3838 13.208 83.6238 13.144 83.9278 13.144C84.1998 13.144 84.4078 13.216 84.5518 13.36C84.7118 13.504 84.8078 13.688 84.8398 13.912C84.8718 14.136 84.8238 14.376 84.6958 14.632L78.6478 28.624C78.4878 28.96 78.3198 29.184 78.1438 29.296C77.9838 29.424 77.7518 29.488 77.4478 29.488ZM88.5503 25.168C88.1983 25.168 87.9263 25.072 87.7343 24.88C87.5423 24.672 87.4463 24.384 87.4463 24.016V9.208C87.4463 8.84 87.5423 8.56 87.7343 8.368C87.9423 8.176 88.2223 8.08 88.5742 8.08H94.2863C96.1103 8.08 97.5103 8.528 98.4863 9.424C99.4783 10.32 99.9743 11.576 99.9743 13.192C99.9743 14.824 99.4783 16.088 98.4863 16.984C97.5103 17.88 96.1103 18.328 94.2863 18.328H89.6783V24.016C89.6783 24.384 89.5823 24.672 89.3903 24.88C89.2143 25.072 88.9343 25.168 88.5503 25.168ZM89.6783 16.528H93.9983C95.2463 16.528 96.1823 16.248 96.8063 15.688C97.4463 15.112 97.7663 14.28 97.7663 13.192C97.7663 12.104 97.4463 11.288 96.8063 10.744C96.1823 10.184 95.2463 9.904 93.9983 9.904H89.6783V16.528ZM106.003 25.216C105.283 25.216 104.555 25.136 103.819 24.976C103.099 24.8 102.419 24.504 101.779 24.088C101.603 23.976 101.475 23.84 101.395 23.68C101.331 23.504 101.307 23.336 101.323 23.176C101.355 23 101.427 22.848 101.539 22.72C101.651 22.592 101.787 22.52 101.947 22.504C102.123 22.472 102.307 22.512 102.499 22.624C103.123 22.976 103.723 23.224 104.299 23.368C104.891 23.512 105.475 23.584 106.051 23.584C106.931 23.584 107.595 23.424 108.043 23.104C108.491 22.784 108.715 22.36 108.715 21.832C108.715 21.384 108.563 21.04 108.259 20.8C107.971 20.544 107.515 20.352 106.891 20.224L104.659 19.768C103.667 19.544 102.915 19.176 102.403 18.664C101.907 18.136 101.659 17.464 101.659 16.648C101.659 15.928 101.851 15.304 102.235 14.776C102.635 14.232 103.187 13.816 103.891 13.528C104.595 13.24 105.403 13.096 106.315 13.096C107.019 13.096 107.683 13.192 108.307 13.384C108.947 13.56 109.523 13.832 110.035 14.2C110.227 14.312 110.347 14.456 110.395 14.632C110.459 14.792 110.467 14.96 110.419 15.136C110.387 15.296 110.315 15.432 110.203 15.544C110.091 15.656 109.947 15.728 109.771 15.76C109.595 15.776 109.403 15.728 109.195 15.616C108.731 15.296 108.251 15.072 107.755 14.944C107.275 14.8 106.795 14.728 106.315 14.728C105.451 14.728 104.795 14.896 104.347 15.232C103.915 15.568 103.699 16.008 103.699 16.552C103.699 16.968 103.827 17.312 104.083 17.584C104.355 17.856 104.779 18.056 105.355 18.184L107.587 18.64C108.627 18.864 109.411 19.224 109.939 19.72C110.467 20.2 110.731 20.856 110.731 21.688C110.731 22.776 110.299 23.64 109.435 24.28C108.587 24.904 107.443 25.216 106.003 25.216ZM116.026 29.488C115.77 29.488 115.554 29.416 115.378 29.272C115.218 29.144 115.122 28.96 115.09 28.72C115.074 28.496 115.122 28.256 115.234 28L116.866 24.304V25.216L112.33 14.656C112.218 14.384 112.178 14.136 112.21 13.912C112.242 13.688 112.346 13.504 112.522 13.36C112.714 13.216 112.97 13.144 113.29 13.144C113.562 13.144 113.778 13.208 113.938 13.336C114.098 13.464 114.25 13.688 114.394 14.008L118.162 23.296H117.49L121.33 14.008C121.458 13.688 121.61 13.464 121.786 13.336C121.962 13.208 122.202 13.144 122.506 13.144C122.778 13.144 122.986 13.216 123.13 13.36C123.29 13.504 123.386 13.688 123.418 13.912C123.45 14.136 123.402 14.376 123.274 14.632L117.226 28.624C117.066 28.96 116.898 29.184 116.722 29.296C116.562 29.424 116.33 29.488 116.026 29.488Z" fill="white"/>
                </svg>
            </div>
            {/*Navbar*/}
            <div className='ml-auto'>
            <Navbar currentPage={currentPage}/>
            </div>

          </div>
        </div>

    </div>
  )
}      



    
  
  

export default Header
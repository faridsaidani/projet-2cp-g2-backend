import React from 'react'
import './index.css'

const GetStarted = () => {
  return (
    <div className='bg-home ' >

        <div className="hero-section">
            <ul className="hero-section-list">
                <li>GET YOUR THEREPIST</li>
                <li>Mental Health Is not a <br/>
                    Destination <br/>
                    <span className="styling"> But a Process </span> <svg className="fact" width="60" height="28"
                        viewBox="0 0 60 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M0.640625 8C0.640625 3.58172 4.22235 0 8.64062 0H51.6475C56.0658 0 59.6475 3.58172 59.6475 8V20C59.6475 24.4183 56.0658 28 51.6475 28H0.640625V8Z"
                            fill="#298EA6" />
                        <path
                            d="M15.8449 19V8.09091H22.6098V9.50781H17.4908V12.8317H22.1251V14.2433H17.4908V19H15.8449ZM26.8579 19.1811C26.3394 19.1811 25.8706 19.0852 25.4516 18.8935C25.0326 18.6982 24.7005 18.4158 24.4555 18.0465C24.214 17.6772 24.0933 17.2244 24.0933 16.6882C24.0933 16.2266 24.1821 15.8466 24.3596 15.5483C24.5372 15.25 24.7769 15.0138 25.0787 14.8398C25.3806 14.6658 25.7179 14.5344 26.0908 14.4457C26.4637 14.3569 26.8437 14.2894 27.2307 14.2433C27.7208 14.1864 28.1185 14.1403 28.4239 14.1048C28.7293 14.0657 28.9513 14.0036 29.0897 13.9183C29.2282 13.8331 29.2975 13.6946 29.2975 13.5028V13.4656C29.2975 13.0004 29.1661 12.6399 28.9033 12.3842C28.6441 12.1286 28.257 12.0007 27.7421 12.0007C27.2059 12.0007 26.7833 12.1197 26.4743 12.3576C26.1689 12.592 25.9576 12.853 25.8405 13.1406L24.3437 12.7997C24.5212 12.3026 24.7804 11.9013 25.1214 11.5959C25.4658 11.2869 25.8618 11.0632 26.3092 10.9247C26.7566 10.7827 27.2272 10.7116 27.7208 10.7116C28.0475 10.7116 28.3937 10.7507 28.7595 10.8288C29.1288 10.9034 29.4733 11.0419 29.7929 11.2443C30.116 11.4467 30.3806 11.7362 30.5866 12.1126C30.7925 12.4854 30.8955 12.9702 30.8955 13.5668V19H29.3401V17.8814H29.2762C29.1732 18.0874 29.0187 18.2898 28.8128 18.4886C28.6068 18.6875 28.3422 18.8526 28.0191 18.984C27.6959 19.1154 27.3089 19.1811 26.8579 19.1811ZM27.2041 17.9027C27.6444 17.9027 28.0209 17.8157 28.3334 17.6417C28.6494 17.4677 28.8891 17.2404 29.0525 16.9599C29.2194 16.6758 29.3028 16.3722 29.3028 16.049V14.9943C29.246 15.0511 29.1359 15.1044 28.9726 15.1541C28.8128 15.2003 28.6299 15.2411 28.4239 15.2766C28.2179 15.3086 28.0173 15.3388 27.822 15.3672C27.6267 15.392 27.4633 15.4134 27.3319 15.4311C27.023 15.4702 26.7407 15.5359 26.485 15.6282C26.2329 15.7205 26.0304 15.8537 25.8777 16.0277C25.7286 16.1982 25.654 16.4254 25.654 16.7095C25.654 17.1037 25.7996 17.402 26.0908 17.6044C26.382 17.8033 26.7531 17.9027 27.2041 17.9027ZM36.4632 19.1651C35.6713 19.1651 34.9895 18.9858 34.4178 18.6271C33.8496 18.2649 33.4128 17.766 33.1074 17.1303C32.802 16.4947 32.6493 15.7667 32.6493 14.9464C32.6493 14.1154 32.8056 13.3821 33.1181 12.7464C33.4306 12.1072 33.8709 11.6083 34.4391 11.2496C35.0073 10.891 35.6767 10.7116 36.4473 10.7116C37.0687 10.7116 37.6227 10.8271 38.1092 11.0579C38.5957 11.2852 38.9881 11.6048 39.2864 12.0167C39.5882 12.4286 39.7676 12.9098 39.8244 13.4602H38.2743C38.1891 13.0767 37.9938 12.7464 37.6884 12.4695C37.3865 12.1925 36.9817 12.054 36.4739 12.054C36.03 12.054 35.6411 12.1712 35.3073 12.4055C34.9771 12.6364 34.7196 12.9666 34.535 13.3963C34.3503 13.8224 34.258 14.3267 34.258 14.9091C34.258 15.5057 34.3485 16.0206 34.5296 16.4538C34.7108 16.8871 34.9664 17.2227 35.2967 17.4606C35.6305 17.6985 36.0229 17.8175 36.4739 17.8175C36.7757 17.8175 37.0492 17.7624 37.2942 17.6523C37.5428 17.5387 37.7505 17.3771 37.9174 17.1676C38.0879 16.9581 38.2068 16.706 38.2743 16.4112H39.8244C39.7676 16.9403 39.5953 17.4126 39.3077 17.8281C39.0201 18.2436 38.6348 18.5703 38.1518 18.8082C37.6724 19.0462 37.1095 19.1651 36.4632 19.1651ZM45.3468 10.8182V12.0966H40.8777V10.8182H45.3468ZM42.0763 8.85795H43.6689V16.5977C43.6689 16.9066 43.7151 17.1392 43.8074 17.2955C43.8998 17.4482 44.0187 17.5529 44.1643 17.6097C44.3135 17.663 44.475 17.6896 44.649 17.6896C44.7769 17.6896 44.8888 17.6808 44.9846 17.663C45.0805 17.6452 45.1551 17.631 45.2084 17.6204L45.496 18.9361C45.4037 18.9716 45.2723 19.0071 45.1018 19.0426C44.9314 19.0817 44.7183 19.103 44.4626 19.1065C44.0436 19.1136 43.653 19.0391 43.2907 18.8828C42.9285 18.7266 42.6356 18.4851 42.4118 18.1584C42.1881 17.8317 42.0763 17.4215 42.0763 16.9279V8.85795Z"
                            fill="white" />
                    </svg>

                </li>
                <li>Korem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit <br/>
                    interdum, ac aliquet odio mattis. <br/>
                    Class aptent taciti sociosqu ad litora torquent per conubia nostra,Korem ipsum dolor sit <br/>
                    amet, consectetur adipiscing elit. </li>
                <li><button className='items-center rounded-[8px] w-[169px] h-[48px]  tex-[18px] font-[700]
                leading-[21.6px] mx-auto font-urbanist justify-center flex bg-[#298EA6] gap-2 px-5 py-3'  > <span> Get Started </span>
              
                
                <svg
                className='items-center ' width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M12.5 5L19.5 12L12.5 19" stroke="#F8F8F7" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M5.5 12L19.5 12" stroke="#F8F8F7" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
</svg>

                    </button></li>
            </ul>
        </div>

    </div>
  )
}

export default GetStarted

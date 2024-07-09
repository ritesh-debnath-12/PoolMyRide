function Navbar() {

    return (
        // Navbar links
        <div className=" top-0 left-0 w-full flex justify-between items-center p-5 px-12 max-sm:p-5 max-sm:pt-2">
            <div className="text-2xl flex gap-20 font-bold">
                <a href='/' className="max-sm:text-[22px]">PoolMyRide</a>
                <div className="list-none flex gap-20 font-normal text-xl max-sm:hidden">

                    <li className="cursor-pointer relative glowing-underline pb-1">
                        <a href="/drive">Drive</a>
                    </li>
                    <li className="relative cursor-pointer glowing-underline pb-1">
                        <a href="/ride">Ride</a>
                    </li>
                    <li className="relative cursor-pointer glowing-underline pb-1">
                        <a href="/about">About</a>
                    </li>
                </div>
                {/*Navbar Mobile*/}
                <section
                    className="fixed z-50 md:w-[30rem] md:m-auto bottom-10 left-0 right-0 flex flex-wrap justify-center w-full xl:hidden">
                    <div
                        className="flex gap-3 flex-wrap items-center w-[75%] justify-between p-2 backdrop-blur-lg border-2 rounded-full px-5 border-gray-800 border-opacity-45 py-4">
                        <a href="/drive">
                            <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M31.8333 16C31.8333 24.7445 24.7445 31.8333 16 31.8333C7.25549 31.8333 0.166664 24.7445 0.166664 16C0.166664 7.2555 7.25549 0.166672 16 0.166672C24.7445 0.166672 31.8333 7.2555 31.8333 16ZM14.0409 28.5161C12.9978 25.9559 10.0162 19.0193 8.08333 18.375C6.73143 17.9244 4.86652 17.9868 3.51066 18.1241C4.41372 23.4727 8.66919 27.6821 14.0409 28.5161ZM3.85495 12.3908C5.40899 7.15352 10.2584 3.33334 16 3.33334C21.7416 3.33334 26.591 7.15352 28.145 12.3908C25.6453 11.9223 21.1588 11.25 16 11.25C10.8412 11.25 6.35473 11.9223 3.85495 12.3908ZM28.4893 18.1241C27.1335 17.9868 25.2686 17.9244 23.9167 18.375C21.9838 19.0193 19.0022 25.9559 17.9591 28.5161C23.3308 27.6821 27.5863 23.4727 28.4893 18.1241Z" fill="#5D6D7E" />
                            </svg>
                        </a>
                        <a href="/ride">
                            <svg width="32" height="26" viewBox="0 0 32 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M1.59572 8.88063L1.57679 8.89325C0.695825 9.48056 0.166672 10.4693 0.166672 11.5281V24.0833C0.166672 24.9578 0.875554 25.6667 1.75001 25.6667H3.33334C4.20779 25.6667 4.91667 24.9578 4.91667 24.0833V22.5H27.0833V24.0833C27.0833 24.9578 27.7922 25.6667 28.6667 25.6667H30.25C31.1245 25.6667 31.8333 24.9578 31.8333 24.0833V11.5281C31.8333 10.4693 31.3042 9.48056 30.4232 8.89325L30.4043 8.88063C30.9813 8.54735 31.504 8.21997 31.6055 8.07407C31.8504 7.72222 31.963 6.66666 31.6055 6.66666H28.6667L26.8129 2.95906C26.0083 1.34984 24.3635 0.333328 22.5643 0.333328H9.43567C7.6365 0.333328 5.99175 1.34984 5.18714 2.95906L3.33334 6.66666H0.394484C0.0370562 6.66666 0.149579 7.72222 0.394484 8.07407C0.496035 8.21997 1.01867 8.54735 1.59572 8.88063ZM6.66144 3.59313L3.95425 8.66911C3.67301 9.19645 4.05514 9.83333 4.65278 9.83333H27.3472C27.9449 9.83333 28.327 9.19645 28.0458 8.66911L25.3386 3.59313C24.7882 2.56123 23.7139 1.91666 22.5445 1.91666H9.45556C8.28608 1.91666 7.21179 2.56123 6.66144 3.59313ZM1.75001 14.7098V12.795C1.75001 12.184 2.4128 11.8033 2.94057 12.1112L8.22705 15.1949C8.9556 15.6199 8.60294 16.7377 7.76241 16.6677L3.20185 16.2876C2.38122 16.2193 1.75001 15.5333 1.75001 14.7098ZM30.25 12.795V14.7098C30.25 15.5333 29.6188 16.2193 28.7982 16.2876L24.2376 16.6677C23.3971 16.7377 23.0444 15.6199 23.773 15.1949L29.0594 12.1112C29.5872 11.8033 30.25 12.184 30.25 12.795Z" fill="#5D6D7E" />
                            </svg>

                        </a>
                        <a href="/about">
                            <img src="./src/assets/about.svg" alt="about" className="size-8" />
                        </a>
                    </div>
                </section>
            </div>

            {/* Login / Signup links*/}
            <div className="flex gap-5 items-center max-sm:gap-2">
                <a href="/login"
                    className="xl:mr-4 border-1 rounded-full px-5 py-2 text-center text-gray-200 no-underline align-middle transition-all duration-300 ease-in-out bg-transparent border-2 border-gray-600 border-solid cursor-pointer select-none hover:text-white hover:border-white focus:shadow-xs focus:no-underline max-sm:py-1 max-sm:px-4">Login</a>
                <a href="/signup"
                    className="text-black py-2 px-4 text-center whitespace-no-wrap bg-white border-2 border-transparent rounded-full shadow-sm hover:bg-transparent hover:text-white hover:border-white focus:outline-none transition-all duration-300 ease-in-out max-sm:py-1 max-sm:px-2">Sign
                    up</a>
            </div>
        </div>
    )
}
export default Navbar;
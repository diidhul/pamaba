import React from 'react'

const splashScreen = () => {
    return (
        <div className=" flex-col space-y-4 fixed inset-0 flex  flex-col-1 justify-center items-center bg-splash-screen bg-cover bg-center ">
            <img className="animate-fade-in-down delay-5" src="src/assets/splashTitle.svg" alt="Splash Title" />
            <img className='animate-fade-in-down delay-5' src="src/assets/splashSubTitle.svg" alt="" />
        </div>
    )
}

export default splashScreen

import BackButton from "./BackButton";

function AppLayout({ children, showBack = true }) {
    return (
       
            <div className="mx-auto min-h-screen w-full bg-gray-900 px-5 pb-8 pt-6 md:max-w-[360px]">
                
                {showBack && <BackButton />}

                {children}

            </div>
        

    );
}

export default AppLayout
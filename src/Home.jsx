function Home(){
    return(
        <div>
            <div className="header">
                <div className="logo">
                    <a href="/">
                        <img src="src/assets/logo.svg" alt="logo" />    
                    </a>
                </div>
                <div className="menu">
                    <a href="/#/popular">топ песен</a>
                    <a href="/#/discuss">обсуждения песен</a>
                    <a href="https://t.me/SPSuperBot" target="_blank">поддержка</a>
                </div>
                <div className="login">
                    <a href="/#/signup"><img src="src/assets/account.svg" alt="button" /></a>   
                </div>
            </div>
        </div>
    );
}

export default Home;
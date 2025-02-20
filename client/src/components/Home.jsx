
function Home() {
    return (
        <main>
            <div className="differentiator"></div>
            <div className="home">
                <img className="home-bgimg" src="images/wallpapers/anime-girl-countryside-scenery-2k-wallpaper-uhdpaper.com-187@3@a.jpg" alt="" />
            </div>
            <div className="home-contianer">
                <div className="contianer-left">
                    <div className="home-anime-details">
                        <span><img className="h-icons play-icon " src="images/icons/icons8-play-50 (1).png" alt="" /> TV</span>
                        <span><img className="h-icons date-icon " src="images/icons/icons8-date-100.png" alt="" /> 18-oct-2024</span>
                        <span><img className="h-icons time-icon " src="images/icons/icons8-time-50.png" alt="" /> 24 m</span>
                    </div>
                    <div className="h-anime-info">
                        <div className="h-anime-title">
                            <h1>The Eminence in Shadow</h1>
                        </div>
                        <div className="h-anime-description">
                            The Eminence in Shadow (Japanese: 陰の実力者になりたくて!, Hepburn: Kage no Jitsuryokusha ni Naritakute!) is a Japanese light novel series written by Daisuke Aizawa and illustrated by Tōzai. It began serialization online in May 2018 on the user-generated novel publishing website
                        </div>
                    </div>
                    <div className="h-btns">
                        <button className="watch-btn" > <img src="images/icons/icons8-play-50 (1).png" alt="" />  Watch Now  </button>
                        <button className="details-btn" >Detials<img src="images/icons/icons8-next-48.png" alt="" /></button>
                    </div>


                </div>
                <div className="contianer-right">

                </div>

            </div>
        </main>
    )
}

export default Home

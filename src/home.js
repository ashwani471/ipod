import React from 'react';
import ReactDom from 'react-dom';

ReactDom.render(
    <>
     <div className="home-main">
            <div className="main-left">
                <div className="home-heading"><strong>iPod</strong></div>
                {/* using the method of conditional rendering to add the class Active */}
                <div className={activeDiv==='coverflow'?'home-menu activeList':'home-menu'}>Coverflow</div>
                <div className={activeDiv==='music'?'home-menu activeList':'home-menu'}>Music</div>
                <div className={activeDiv==='games'?'home-menu activeList':'home-menu'} id="games">Games</div>
                <div className={activeDiv==='settings'?'home-menu activeList':'home-menu'} id="settings">Settings</div>
            </div>
            <div className="main-right">
                <img src='/assets/home-main.gif' style={styles.img} alt='Image of home'/>
            </div>
        </div>
    </>
);
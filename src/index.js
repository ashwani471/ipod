import React from 'react';
import ReactDom from 'react-dom';
import './index.css';

ReactDom.render(
  <>
  <div className="main-container">
  <div className="rect flex-center">
                    <div className="circ1 flex-center" id="circ1">
                        <div className="circ2" id="circ2" style={{border: '2px solid black'}} >
                        <div className="menu" id="menu" >Menu</div>
                        <div className="forward" ><img src="https://icons-for-free.com/iconfiles/png/512/forward+icon-1320166878041096316.png"/></div>
                        <div className="pause"><img src="https://image.shutterstock.com/image-vector/pause-button-media-menu-icon-260nw-1528573811.jpg"/></div>
                        <div className="backward" ><img src="https://cdn0.iconfinder.com/data/icons/player-controls/512/backward-512.png"/></div>
                        </div>
                    </div>
                </div>
  </div>
  </>,
  document.getElementById('root')
)
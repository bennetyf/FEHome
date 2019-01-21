import React from "react";
import style from './style.scss';
import ringshape from "../../assests/GoldRing.png";

export default class ringImg extends React.PureComponent{
    render(){
        return(
            <div className={style.circle_wrap}>
                <img src={ringshape}/>
                <div className={style.original}><span>{this.props.systemName}</span></div>
                <div className={style.overlay_bg}></div>
                <div className={style.overlay_content}>
                    {this.props.children}
                </div>
            </div>
        );
    }
}
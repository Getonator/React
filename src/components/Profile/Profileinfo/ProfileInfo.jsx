import React from "react";
import s from './ProfileInfo.module.css'

const ProfileInfo = () =>{
    return(
        <div>
            <div>
                <img src='https://img.fonwall.ru/o/2p/canada-moraine-lake-ozero-gory.jpg?route=mid&amp;h=750'/>
            </div>
            <div className={s.indent}>
                ava + descript
            </div>
        </div>
    );
}

export default ProfileInfo;
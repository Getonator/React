import React from "react";
import s from './Dialogs.module.css'
import DialogItem from "./Dialogitem/DialogItem";
import Message from "./Messages/Message";



const Dialogs = (props)=>{



    let dialogsElements =
        props.dialogs.map(d=><DialogItem name = {d.name} id = {d.id}/>  ) ;


    let messageElement =
        props.messages.map(m => <Message text = {m.message} id = {m.id}/> )

    return(
        <div className={s.dialogs}>
            <div className = {s.dialogsItems}>

                {dialogsElements}

            </div>
      <div className={s.messages}>

          {messageElement}

      </div>
</div>
    );
}

export default Dialogs;
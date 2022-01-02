import React from 'react';
import s from './Dialogs.module.css';
import Message from './Message/Message';
import DialogItem from './DialogItem/DialogItem';
import { updateNewMessageBodyCreator, sendMessageCreator } from './../../redux/messages-reducer'



const Dialogs = (props) => {
     let state = props.store.getState().messagesPage;
    // debugger;
    let messageElements =
        state.messages.map(m => <Message message={m.message} />
        );
    // let newMessageElement = React.createRef();

    // let addMessage = () => {
    //   props.store.dispatch(addMessageActionCreator());


    let dialogsElements =
    state.dialogs.map(d => <DialogItem name={d.name} id={d.id} />
        );
    let newMessageBody = state.newMessageBody;
    // let newMesssageText = props.state.newMesssageText

    // let onMessageChange = (e) => {
    // let newMessageText = e.target.value;
    //   props.store.dispatch(updateNewMessageTextActionCreator(newMessageText))
    // }
    let onSendMessageClick = () => {
        props.store.dispatch(sendMessageCreator());
    }
    let onNewMessageChange = (e) => {
        let body = e.target.value;
        props.store.dispatch(updateNewMessageBodyCreator(body));
    }
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                {messageElements}
            </div>
            <div>
                <textarea
                    onChange={onNewMessageChange}
                    placeholder='Enter your message'
                    className={s.messageText}
                    value={newMessageBody}

                ></textarea>
            </div>
            <div>
                <button
                    onClick={onSendMessageClick}
                    className={s.messageButton}>Send message</button>
            </div>
        </div>
    );
}




export default Dialogs;
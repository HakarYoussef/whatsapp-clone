import React from 'react';
import './Chat.css';
import { Avatar, IconButton } from '@material-ui/core';
import { HiDotsHorizontal, HiOutlineEmojiHappy } from 'react-icons/hi';
import { MdAttachFile } from 'react-icons/md';
import { RiSearchLine } from 'react-icons/ri';
import { BiMicrophone } from 'react-icons/bi';
function Chat() {
  return (
    <div className="chat">
      <div className="chat__header">
        <Avatar src="https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=80" />
        <div className="chat__headerInfo">
          <h3>Mark</h3>
          <p>Last seen at {new Date().toLocaleString()}</p>
        </div>
        <div className="chat__headerRight">
          <IconButton>
            <RiSearchLine />
          </IconButton>
          <IconButton>
            <MdAttachFile />
          </IconButton>
          <IconButton>
            <HiDotsHorizontal />
          </IconButton>
        </div>
      </div>
      <div className="chat__body">
        <p className="chat__message chat__reciever">
          <span className="chat__name">Me</span>
          Hi!
          <span className="chat__timestamp">{new Date().toLocaleString()}</span>
        </p>

        <p className="chat__message">
          <span className="chat__name">Mark</span>
          Hello!
          <span className="chat__timestamp">{new Date().toLocaleString()}</span>
        </p>
      </div>

      <div className="chat__footer">
        <HiOutlineEmojiHappy className="MuSvgIcon-root" />
        <form>
          <input placeholder="Type a message" type="text" />
          <button type="submit">Send a message</button>
        </form>
        <BiMicrophone className="MuSvgIcon-root" />
      </div>
    </div>
  );
}

export default Chat;

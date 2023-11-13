import React from 'react';
import Button from '../../common/Button/Button';
import styles from './Chatbot.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faTimes,
  faSync,
  faPaperPlane,
  faEdit,
} from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';

const Chatbot = () => {
  const [messages, setMessages] = useState(['How can I help you?']);
  const [newMessage, setNewMessage] = useState('');
  const [isHovered, setIsHovered] = useState(false);
  const [isChatVisible, setIsChatVisible] = useState(false);

  const handleSendMessage = () => {
    if (newMessage.trim() === '') {
      return;
    }
    setMessages([...messages, newMessage]);
    setNewMessage('');
  };
  const handleResetChat = () => {
    setMessages(['How can I help you?']);
    setNewMessage('');
  };

  const toggleChatVisibility = () => {
    setIsChatVisible(!isChatVisible);
  };
  const handleMouseEnter = () => {
    setIsHovered(true);
  };
  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <>
      <div
        className={styles.button}
        onClick={toggleChatVisibility}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        {isHovered && <div className={styles.text}>If you need help, write!</div>}
        <Button className={styles.faEdit}>
          <FontAwesomeIcon icon={faEdit} />
        </Button>
      </div>
      {isChatVisible && (
        <div className={styles.chatBox}>
          <div className={styles.top}>
            <div className={styles.icon}>
              <FontAwesomeIcon icon={faTimes} onClick={toggleChatVisibility} />
              <FontAwesomeIcon icon={faSync} onClick={handleResetChat} />
            </div>
          </div>
          <div className={styles.textAreaView}>
            {messages.map((message, index) => (
              <div key={index}>{message}</div>
            ))}
          </div>
          <div className={styles.textArea}>
            <input
              type='text'
              value={newMessage}
              onChange={e => setNewMessage(e.target.value)}
              placeholder='Type your message...'
            />
            <button onClick={handleSendMessage}>
              <FontAwesomeIcon icon={faPaperPlane} />
            </button>
          </div>
          <div className={styles.bottom}></div>
        </div>
      )}
    </>
  );
};

export default Chatbot;

'use client';
 
import { useEffect, useRef } from 'react';
import { useChat } from 'ai/react';

export default function Chat() {
  const { messages, input, handleInputChange, handleSubmit } = useChat();
  const endRef = useRef(null);

  useEffect(() => {
    if (endRef.current) {
      (endRef.current as HTMLElement).scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages]);

  return (
    <div className="flex flex-col w-full max-w-md py-24 mx-auto stretch">
      {messages.map((m, index) => (
        <div key={m.id} className="message whitespace-pre-wrap" style={{borderLeft: '0.5px solid rgba(100, 255, 255, 1)', paddingLeft: '30px', borderRight: '0.5px solid rgba(100, 255, 255, 1)', paddingRight: '30px'}}>
          {m.role === 'user' ? 'User: ' : 'AI: '}
          {m.content}
          {index === messages.length - 1 ? <div ref={endRef} /> : null}
        </div>
      ))}

      <form onSubmit={handleSubmit}>
        <input
          className="fixed bottom-0 w-full mx-auto max-w-md p-2 mb-8 border border-gray-300 rounded shadow-xl"
          value={input}
          placeholder="Say something..."
          onChange={handleInputChange}
          style={{backgroundColor: 'black', border: '0.5px solid pink', boxShadow: '0 0 20px hotpink'}}
        />
      </form>
    </div>
  );
}
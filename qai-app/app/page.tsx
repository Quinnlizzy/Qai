'use client';
 
import { useChat } from 'ai/react';
 
export default function Chat() {
  const { messages, input, handleInputChange, handleSubmit } = useChat();
  return (
    <div className="flex flex-col w-full max-w-md py-24 mx-auto stretch" style={{borderLeft: '1px solid cyan', borderRight: '1px solid cyan'}}>
    {messages.map(m => (
      <div key={m.id} className="whitespace-pre-wrap">
        {m.role === 'user' ? 'User: ' : 'AI: '}
        {m.content}
      </div>
    ))}
  

 
      <form onSubmit={handleSubmit}>
      <input
  className="fixed bottom-0 w-full max-w-md p-2 mb-8 border border-gray-300 rounded shadow-xl"
  value={input}
  placeholder="Say something..."
  onChange={handleInputChange}
  style={{backgroundColor: 'black', border: '1px solid light pink', boxShadow: '0 0 40px hot pink'}}
        />
      </form>
    </div>
  );
}
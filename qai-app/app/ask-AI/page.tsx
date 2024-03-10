'use client';

import { Card, CardContent, CardHeader, CardTitle, } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { askai } from '@/components/askai';
import { useChat } from 'ai/react';
 
export default function Page() {
  const { messages, input, handleInputChange, handleSubmit } = useChat();
 
  return (

<main className="flex flex-1 flex-col gap-4 p-4 md:gap-8 md:p-6">
          <Card>
            <CardHeader>
              <CardTitle>Ask AI</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit}>
                <Input placeholder="Type your message here." type="text" value={input} onChange={handleInputChange}/>
                <div className="flex items-center gap-2">
                  <Button type="submit" className="flex-1">Send</Button>
                </div>
              </form>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>AI Response</CardTitle>
            </CardHeader>
            <CardContent>
              <Input placeholder="AI response will appear here." readOnly type="text" />
              <ul>
        {messages.map((m, index) => (
          <li key={index}>
            {m.role === 'user' ? 'User: ' : 'AI: '}
            {m.content}
          </li>
        ))}
      </ul>
            </CardContent>
          </Card>
        </main>

  );
}
import { Conversation } from './components/conversation';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 bg-gradient-to-r from-purple-500 to-pink-500">
      <div className="z-10 max-w-5xl w-full flex flex-row justify-between items-center font-mono text-sm">
        <div className="flex flex-col items-center">
          <h1 className="text-4xl font-bold mb-8 text-center">
            11labs ConvAI
          </h1>
        </div>
        <Conversation />
      </div>
    </main>
  );
}
import { Inter } from 'next/font/google';
import { Process } from './process';

const inter = Inter({ subsets: ['latin'] })


export default function Home() {
  return (
    <main className={inter.className}>
      <div className="flex flex-col items-center space-y-4 m-6">
        <h1 className="text-4xl font-bold text-sky-500">Easy Quotation</h1>
        <h2 className="text-lg">書式解除を行ったうえで、資料内の「」を『』に変換し、改行文字を消します。</h2>
      </div>

      <Process />
    </main>
  )
}

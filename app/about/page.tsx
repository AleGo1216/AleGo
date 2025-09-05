import Link from 'next/link';

export default function AboutPage() {
    return (
      <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <h1 className="text-4xl font-bold">关于我们</h1>
        <p>这是一个使用 Next.js App Router 创建的关于页面。</p>
        <Link href="/" className="text-blue-500 hover:underline">
        返回首页
      </Link>
      </main>
    );
  }
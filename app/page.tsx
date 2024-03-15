import Link from "next/link";
import Header from "@/components/header";

export default function Home() {
  return (
    <main>
      <Header />
      <p>🔥 Let&apos;s get started! 🔥</p>
      <p>
        <Link href="/about">About Us</Link>
      </p>
    </main>
  );
}

/*
// react-router-dom 에서 아래의 코드가 Next.js에서 폴더를 만드는 것
// app/about/page.tsx
const router = createBrowserRouter([
  {path: '/', element: <Home />},
  {path: '/about', element: <About />}
])

export default function App() {
  return <RouterProvider router={router} />;
}
*/

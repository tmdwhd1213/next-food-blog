export default function Home() {
  return (
    <main>
      <h1 style={{ color: "white", textAlign: "center" }}>
        Time to get started!
      </h1>
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

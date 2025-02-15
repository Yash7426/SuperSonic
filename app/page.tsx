import Login from "@/components/ui-login/login";
declare global {
  interface Window {
    ethereum?: any;
  }
}
export default function Home() {
  return (
    // mayank
    <main className="flex justify-center content-center h-screen">
      <Login />
    </main>
  );
}

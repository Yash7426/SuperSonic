import Login from "@/components/ui-login/login";
import Token from "@/components/ui-token/token";
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
      {/* <Token /> */}
    </main>
  );
}

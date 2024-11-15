import Home from "@/components/home";
import Chat from "@/components/chatpage";
import { useContext } from "react";
import { GlobalContext } from "@/context";
import { useEffect, useState } from "react";

export default function Page() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  // const [userInfo, setUserInfo] = useState<any>(null);

  const handleLogin = async () => {
    chrome.identity.getAuthToken({ interactive: true }, async (token) => {
      if (chrome.runtime.lastError) {
        console.error("Authentication failed:", chrome.runtime.lastError);
        return;
      }

      if (token) {
        // Fetch Google user profile data
        // const response = await fetch(
        //   "https://www.googleapis.com/oauth2/v1/userinfo?alt=json",
        //   {
        //     headers: { Authorization: `Bearer ${token}` },
        //   }
        // );
        // const user = await response.json();

        // setUserInfo(user);
        setIsLoggedIn(true);
        // chrome.storage.local.set({ userInfo: user });

        // Send user info to your backend
        await fetch("http://localhost:3000/auth/google/redirect", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ id_token: token}),
        });
      }
    });
  };
  useEffect(() => {
    // Check if the user is already logged in by checking stored user data
    chrome.storage.local.get(["userInfo"], (result) => {
      if (result.userInfo) {
        console.log(result.userInfo);
        // setUserInfo(result.userInfo);
        setIsLoggedIn(true);
      }
    });
  }, []);
  const { activeTab } = useContext(GlobalContext);
  console.log(activeTab);
  return (
    <div>
      {isLoggedIn ? (
        <>
          {activeTab === "home" && <Home />}
          {activeTab === "chat" && <Chat />}
        </>
      ) : (
        <button className="bg-blue-500 text-white p-2 rounded-md" onClick={handleLogin}>Login with Google</button>
      )}
    </div>
  );
}

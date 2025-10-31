import { LuBot, LuHash, LuHouse, LuMail, LuTerminal } from "react-icons/lu"
import Dock, { type DockProps } from "./components/Dock"
import { Outlet, useLocation } from "react-router"

const dockItems: DockProps["items"] = [
  { icon: LuHouse, label: "Home", href: "/" },
  { icon: LuHash, label: "Connect with me", href: "/", hash: "connect" },
  { icon: LuMail, label: "Mail Me", href: "mailto:imsudipmahata@gmail.com" },
  { icon: LuTerminal, label: "Terminal Mode", href: "/terminal" },
  { icon: LuBot, label: "AI Twin", href: "/chat", new: true },
]

function App() {
  const location = useLocation()
  console.log(location)
  return (
    <div className="w-full h-dvh flex flex-col items-center relative">
      <Outlet />
      <Dock items={dockItems} />
    </div>
  )
}

export default App

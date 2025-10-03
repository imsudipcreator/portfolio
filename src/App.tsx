import { LuGithub, LuHouse, LuLinkedin, LuMail, LuTwitter } from "react-icons/lu"
import Dock from "./components/dock"
import Home from "./pages/Home"

const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  })
}

const dockItems = [
  { icon: LuHouse, label: "Home", onClick: () => scrollToTop() },
  { icon: LuTwitter, label: "X (Twitter)", onClick: () => window.open("https://x.com/imsudipdev", "_blank") },
  { icon: LuLinkedin, label: "LinkedIn", onClick: () => window.open("https://www.linkedin.com/in/imsudipcreator/", "_blank") },
  { icon: LuGithub, label: "Github", onClick: () => window.open("https://github.com/imsudipcreator", "_blank") },
  { icon: LuMail, label: "Mail", onClick: () => window.open("mailto:imsudipmahata@gmail.com", "_blank") },
]
function App() {

  return (
    <div className="w-full min-h-screen flex flex-col items-center relative">
      <Home />
      {/* <Navbar /> */}
      <Dock items={dockItems} />
      <div className="w-full h-36 fixed bottom-0 bg-gradient-to-b from-transparent to-white">

      </div>
    </div>
  )
}

export default App

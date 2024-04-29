import backgroundImage from "./assets/home/background-home-desktop.jpg"

function App() {


  return (
    <main className="w-screen h-screen flex items-center justify-center"> 
    <img className="min-w-full min-h-full object-cover relative" src ={backgroundImage} alt="back-img" />
    <header className="absolute top-20 right-0">
      <div className="bg-gray-700  py-8 px-20 pr-40">
        <ul className="flex gap-8 text-white text-ms h-">
          <li className="active hover:border-b-2"><a href="App.tsx"><span className="font-bold pr-3">00</span>HOME</a></li>
          <li className="focus:border-b-2"><a href="Destination.tsx"><span className="font-bold pr-3">01</span>DESTINATION</a></li>
          <li><a href="Crew.tsx"><span className="font-bold pr-3">02</span>CREW</a></li>
          <li><a href="Technology.tsx"><span className="font-bold pr-3">03</span>TECHNOLOGY</a></li>
        </ul>
      </div>
    </header>

    </main>
  )
}

export default App

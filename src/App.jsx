function App() {
  return (
    <div className="flex flex-col items-center justify-center h-full">
      <img src="logo.png" alt="logo" className="h-24 w-24 m-8" />
      <div className="text-white text-[1.5rem] font-thin mb-8">
        Oğuzhan Necim Bayoğlu
      </div>
      <div className="flex flex-col gap-4 justify-center items-center w-[20rem]">
        <h1 className="text-white text-[1rem] font-bold ml-2">Projects</h1>
        <div className="flex flex-row justify-center gap-2 flex-wrap">
          <a
            href="https://oguzhanbayoglu.github.io/React-ColorPicker/"
            className="text-white border-[rgba(255,255,255,0.5)] border-2 flex items-center justify-center py-2 px-4 rounded-[1.5rem]  w-[9rem]"
            target="blank"
          >
            Color Picker
          </a>
          <a
            href="https://oguzhanbayoglu.github.io/reactube/"
            className="text-white border-[rgba(255,255,255,0.5)] border-2 flex items-center justify-center py-2 px-4 rounded-[1.5rem] w-[9rem]"
            target="blank"
          >
            Reactube
          </a>
          <a
            href="https://oguzhanbayoglu.github.io/musict/"
            className="text-white border-[rgba(255,255,255,0.5)] border-2 flex items-center justify-center py-2 px-4 rounded-[1.5rem] w-[9rem]"
            target="blank"
          >
            Musict
          </a>
          <a
            href="https://oguzhanbayoglu.github.io/voice-news/"
            className="text-white border-[rgba(255,255,255,0.5)] border-2 flex items-center justify-center py-2 px-4 rounded-[1.5rem] w-[9rem]"
            target="blank"
          >
            Voice News
          </a>
          <a
            href="https://oguzhanbayoglu.github.io/Travel-Advisor-App/"
            className="text-white border-[rgba(255,255,255,0.5)] border-2 flex items-center justify-center py-2 px-4 rounded-[1.5rem] w-[9rem]"
            target="blank"
          >
            Travel Advisor
          </a>
          <a
            href="https://oguzhanbayoglu.github.io/tenzies-game/"
            className="text-white border-[rgba(255,255,255,0.5)] border-2 flex items-center justify-center py-2 px-4 rounded-[1.5rem] w-[9rem]"
            target="blank"
          >
            Tenzies
          </a>
        </div>
      </div>
      <div className="flex flex-col gap-4 justify-center items-center w-[20rem] mt-8">
        <h1 className="text-white text-[1rem] font-bold ml-2">Socials</h1>
        <div className="flex flex-row justify-center gap-2 flex-wrap">
          <a
            href="https://github.com/oguzhanbayoglu"
            className="text-white border-[rgba(255,255,255,0.5)] border-2 flex items-center justify-center py-2 px-4 rounded-[1.5rem]  w-[9rem]"
            target="blank"
          >
            Github
          </a>
          <a
            href="https://www.linkedin.com/in/o%C4%9Fuzhan-bayo%C4%9Flu-83725a1b3/"
            className="text-white border-[rgba(255,255,255,0.5)] border-2 flex items-center justify-center py-2 px-4 rounded-[1.5rem]  w-[9rem]"
            target="blank"
          >
            LinkedIn
          </a>
          <a
            href="https://www.instagram.com/oguzhan_bayoglu/"
            className="text-white border-[rgba(255,255,255,0.5)] border-2 flex items-center justify-center py-2 px-4 rounded-[1.5rem] w-[9rem]"
            target="blank"
          >
            Instagram
          </a>
        </div>
      </div>
    </div>
  );
}

export default App;

//<div className="absolute blur-[13rem] z-[-2] h-[30rem] w-[30rem] bg-[rgba(255,255,255,0.23)]"></div>

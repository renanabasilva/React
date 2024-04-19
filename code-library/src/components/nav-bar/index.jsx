import { useState } from "react";

const button = "border-b-2 border-transparent hover:cursor-pointer hover:border-black hover:border-b-2"

export default function NavBar() {
  const [ tab, setTab] = useState("Home")
  return (
    <div className="flex flex-col justify-center items-center gap-10">
      <div className="flex flex-row justify-center items-center gap-8 mt-5 p-5 bg-gray-400">
        <a className={button} onClick={() => setTab("Home")}>Home</a>
        <a className={button} onClick={() => setTab("News")}>News</a>
        <a className={button} onClick={() => setTab("Contact")}>Contact</a>
        <a className={button} onClick={() => setTab("About")}>About</a>
      </div>
      <div className="w-20 m-0">
        <section>
          <span>{tab.toUpperCase()}</span>
        </section>
      </div>
    </div>
  );
}

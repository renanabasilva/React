import { useState } from "react";

const button = "bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded disabled:opacity-50 disabled:bg-blue-500";
const slides = [
  {
    title: "Today's workout plan",
    text: "We're gonna do 3 fundamental excercises."
  },
  {
    title: "First, 10 push-ups",
    text: "Do 10 reps. Remember about full range of motion. Don't rush."
  },
  {
    title: "Next, 20 squats",
    text: "Squats are important. Remember to keep your back straight."
  },
  {
    title: "Finally, 15 sit-ups",
    text: "Slightly bend your knees. Remember about full range of motion."
  },
  {
    title: "Great job!",
    text: "You made it, have a nice day and see you next time!"
  },
];

export default function Slides() {
  const [activeSlideNumber, setActiveSlideNumber] = useState(0);
  const [currentSlide, setCurrentSlide] = useState(slides[0]);
  const [disablePrev, setDisablePrev] = useState(true);
  const [disableNext, setDisableNext] = useState(false);
  const [disableRestart, setDisableRestart] = useState(true);
  
  const onClickNext = () => {
    let currentSlideNumber = activeSlideNumber;
    if (currentSlideNumber < slides.length - 1) {
      currentSlideNumber++;
      setCurrentSlide(slides[currentSlideNumber]);
      setActiveSlideNumber(currentSlideNumber);
      setDisablePrev(false);
      setDisableRestart(false);
    }  
    if (currentSlideNumber === slides.length - 1) {
      setDisableNext(true);
    } 
  };
  
  const onClickPrev = () => {
    let currentSlideNumber = activeSlideNumber;
    if (currentSlideNumber > 0) {
      currentSlideNumber--;
      setCurrentSlide(slides[currentSlideNumber]);
      setActiveSlideNumber(currentSlideNumber);
      setDisableNext(false);
      setDisableRestart(false);
    }  
    if (currentSlideNumber === 0) {
      setDisablePrev(true);
      setDisableRestart(true);
    } 
  };
  
  const onClickRestart = () => {
    setActiveSlideNumber(0);
    setCurrentSlide(slides[0]);
    setDisablePrev(true);
    setDisableRestart(true);
    setDisableNext(false);
  };

  return (
    <>
      <div className="flex flex-row gap-5 items-center justify-center">
        <button disabled={disableRestart} className={button} onClick={() => onClickRestart()}>Restart</button>
        <button disabled={disablePrev} className={button} onClick={() => onClickPrev()}>Prev</button>
        <button disabled={disableNext} className={button} onClick={() => onClickNext()}>Next</button>
      </div>
      <div className="text-center">
        <h1>{currentSlide.title}</h1>
        <p>{currentSlide.text}</p>
      </div>
    </>
  );
}

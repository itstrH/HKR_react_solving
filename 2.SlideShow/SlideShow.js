import React, {useState} from "react";

function Slides({ slides }) {
    if (slides.length === 0) return null;
    const [slideIndex, setSlideIndex] = useState(0);
    
    const handleSlideRestart = () => setSlideIndex(0);
    const handleNextSlide = (isNextSlide = true) => setSlideIndex(prevSlideIndex => isNextSlide ? prevSlideIndex + 1 : prevSlideIndex - 1);

    const {title, text} = slides[slideIndex];


  return (
    <div>
      <div id="navigation" className="text-center">
        <button data-testid="button-restart" className="small outlined" disabled={slideIndex===0} onClick={handleSlideRestart}>
          Restart
        </button>
        <button data-testid="button-prev" className="small" disabled={slideIndex===0} onClick={() => handleNextSlide(false)}>
          Prev
        </button>
        <button data-testid="button-next" className="small" disabled={slideIndex + 1 === slides.length} onClick={() => handleNextSlide()}>
          Next
        </button>
      </div>
      <div id="slide" className="card text-center">
        <h1 data-testid="title">{title}</h1>
        <p data-testid="text">{text}</p>
      </div>
    </div>
  );
}

export default Slides;
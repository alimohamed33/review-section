import { useState } from "react";
import people from "./data";
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from "react-icons/fa";

const App = () => {
  const [index, setIndex] = useState(0);
  const { name, job, image, text } = people[index];

  const handleNextPerson = () => {
    setIndex((currentIndex) => {
      const newIndex = currentIndex + 1;

      if (newIndex > people.length - 1) return 0;

      return newIndex;
    });
  };

  const handlePrevPerson = () => {
    setIndex((currentIndex) => {
      const newIndex = currentIndex - 1;

      if (newIndex < 0) return people.length - 1;

      return newIndex;
    });
  };

  const handleRandomPerson = () => {
    const randomNumber = Math.floor(Math.random() * people.length);

    // no repeat number twice
    if (randomNumber === index) return index + 1;

    const newIndex = randomNumber % people.length;

    setIndex(newIndex);
  };

  return (
    <main>
      <article className="review">
        <div className="img-container">
          <img src={image} alt={name} className="person-img" />
          <span className="quote-icon">
            <FaQuoteRight />
          </span>
        </div>
        <h4 className="author">{name}</h4>
        <p className="job">{job}</p>
        <p className="info">{text}</p>

        <div className="btn-container">
          <button type="button" className="prev-btn" onClick={handlePrevPerson}>
            <FaChevronLeft />
          </button>
          <button type="button" className="next-btn" onClick={handleNextPerson}>
            <FaChevronRight />
          </button>
        </div>
        <button
          type="button"
          className="btn btn-hipster"
          onClick={handleRandomPerson}
        >
          suprise me
        </button>
      </article>
    </main>
  );
};
export default App;

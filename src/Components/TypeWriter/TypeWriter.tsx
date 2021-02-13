/** @format */
import Typewriter from "typewriter-effect";
import "./TypeWriter.scss";

const TypeWriter = () => {
  return (
    <Typewriter
      onInit={(typewriter) => {
        typewriter
          .typeString("I am <strong>Sanji Pun.</strong>")
          .pauseFor(2500)
          .deleteChars(10)
          .typeString("<strong>flexible.</strong>")
          .pauseFor(2500)
          .deleteChars(9)
          .typeString("<strong>hungry to learn.</strong>")
          .pauseFor(2500)
          .deleteAll()
          .pauseFor(2500)
          .start();
      }}
      options={{
        autoStart: true,
        loop: true,
      }}
    />
  );
};

export default TypeWriter;

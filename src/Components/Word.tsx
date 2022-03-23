import React, { useState, useEffect } from "react";

export const Word: React.FC = ({}) => {
  const [newMessage, setNewMessage] = useState("");
  //prevent the infinte loop
  useEffect(() => {
    shuffle();
  }, []);

  const shuffle = () => {
    let word = ["Great job!", "Keep it up!", "Nice!", "woho!", "Lets goo!"];
    //shuffle the word array
    const words = word[Math.floor(Math.random() * word.length)];
    console.log(words);
    setNewMessage(words);
  };

  return <p>{newMessage}</p>;
};

import React from "react";
import { Message } from "semantic-ui-react";

const trans = {
  TODO: "процеса предстои да започне!",
  DOING: "в момента се извършва процеса!",
  PROBLEM:
    "изкочил е неочакван проблем и профикалктиката може да се забави повече от предвиденото!",
  DONE: "процеса е извършен!",
};

function Task({ task }) {
  const { name, description, status } = task;
  return (
    <Message
      negative={status === "PROBLEM"}
      warning={status === "TODO"}
      positive={status === "DOING"}
      success={status === "DONE"}>
      <h1>{name}</h1>
      <p>{description}</p>
      <p>Статус: {trans[status]}</p>
    </Message>
  );
}

export default Task;

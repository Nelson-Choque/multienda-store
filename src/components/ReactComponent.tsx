import React, { useEffect } from "react";

interface Props {
  name: string;
  title: string;
}

function ReactComponent({ name, title }: Props) {
  return (
    <>
      <h2>{title}</h2>
      <p>{name}</p>
    </>
  );
}

export default ReactComponent;

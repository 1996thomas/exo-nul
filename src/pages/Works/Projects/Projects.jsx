import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import data from '../../../assets/data'

export default function Projects() {
  let { client } = useParams()
  let [currentProject, setCurrentProject] = useState("")


  useEffect(() => {
    const foundProject = data.find((item) => item.client === client );
    setCurrentProject(foundProject)
  },[client])

  console.log(currentProject)
  return (
    <>
    <p>{currentProject.client}</p>
    <p>{currentProject.title}</p>
    <p>{currentProject.content}</p>
    </>
  );
}

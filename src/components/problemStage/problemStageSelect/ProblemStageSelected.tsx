"use client"

import React from "react";

import useProblemStore from "@/store/problemStageStore";

interface ProblemStageSelectedType {
    listName:"solution"|"practice"|"level",
    value:string,
    name:string
}

const ProblemStageSelected:React.FC<ProblemStageSelectedType> = ({listName,value,name}) => {
    const {setProblemItemCheck} = useProblemStore();
    const clickProblemStageSelected = (event:React.MouseEvent<HTMLButtonElement>) =>{
        setProblemItemCheck(listName,name,false)
    }
    return (
        <div className="flex items-center justify-evenly w-20 h-5 rounded-md bg-thema-color text-white text-xs">
            #{value}<button onClick={clickProblemStageSelected}>x</button>
        </div>
    )
}

export default ProblemStageSelected
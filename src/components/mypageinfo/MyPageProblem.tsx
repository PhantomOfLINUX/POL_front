'use client'
import React from "react";
import Link from "next/link";
import useMyPageCompletedStore from "@/store/myPageCompleteStore";
import useMyPageInProgressStore from "@/store/myPageInProgressStore";
import HeatmapForm from "./Heatmap";

const MyPageProblemForm = () => {
    const { completed } = useMyPageCompletedStore();
    const { inProgress } = useMyPageInProgressStore();
    return (
        <div>
            {completed}개 문제 해결
            <br />
            진행중인 문제 : {inProgress + ', '}
            <br />
            <div>
                <HeatmapForm />
            </div>
        </div>
    )
}

export default MyPageProblemForm;
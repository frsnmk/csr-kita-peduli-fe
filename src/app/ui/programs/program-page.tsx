'use client'

import { Program } from "@/app/lib/types/program"
import GridView from "../grid-view"


interface ProgramPageProps {
    programs:Program[]
}

export const ProgramPage = ({programs}:ProgramPageProps) => {

    return (
        <div className="p-4">
            <GridView title="Program" data={programs}/>
        </div>
    )
}


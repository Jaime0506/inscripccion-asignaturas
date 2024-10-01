import { Table, TableBody, TableCell, TableColumn, TableHeader, TableRow } from "@nextui-org/table"
import { SubjectType } from "../types/redux"
import { useEffect, useState } from "react"

interface TableSubjectsProps {
    subjects: SubjectType[]
}

export const TableSubjects = ({ subjects }: TableSubjectsProps) => {
    const [data, setData] = useState<SubjectType[]>();

    const renderHeaders = () => {

        if (!data) return <></>

        const headers = Object.keys(data[0]).filter(key => key != "data_subject")

        console.log(headers)
        return headers.map((header, index) => (
            <TableColumn key={index}>{header.toUpperCase()}</TableColumn>
        ))
    }

    useEffect(() => {
        const temp = [...subjects]

        setData(temp)
    }, [subjects])

    useEffect(() => {
        console.log(data)

        if (data && data?.length > 0) {
            renderHeaders()
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [data])

    if (!data || data.length === 0 ) return <>Loading</>

    return (
        <Table aria-label="table subjects">
            <TableHeader>
                {renderHeaders()}
            </TableHeader>
            <TableBody>
                <TableRow key={1} >
                    <TableCell>Ejemplo para entender1</TableCell>
                    <TableCell>Ejemplo para entender2</TableCell>
                    <TableCell>Ejemplo para entender3</TableCell>
                    <TableCell>Ejemplo para entender4</TableCell>
                </TableRow>
            </TableBody>
        </Table>
    )
}

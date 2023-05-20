import { useState } from "react"
import ExportExcel
 from "../components/ExportExcel"
function Test() {

    const [csvData, setCsvData] = useState([{ name: 'John', age: 30, city: 'New York' },
    { name: 'Jane', age: 25, city: 'San Francisco' },
    { name: 'Bob', age: 35, city: 'Los Angeles' },])
    const [filename, setFilename] = useState('테스트');
    return(

        <>
        <div>
            hi
        </div>
        <ExportExcel csvData={csvData} filename={filename}/>
        </>
    )
}
export default Test
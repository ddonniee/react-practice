import { useContext, useState } from "react"
import Editor from "../components/Editor"
import FileUpload from "../hooks/FileUpload"
import { TestContext } from "../hooks/TestContext"

function Dashboard() {

    const testValue = useContext(TestContext)
    return (
        <>
        <div>{testValue.email}</div>
       
        <Editor />
        <FileUpload />
        </>
    )
}

export default Dashboard
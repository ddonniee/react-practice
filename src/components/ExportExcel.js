import moment from 'moment';
import {CSVLink, CSVDownload} from 'react-csv';

function ExportExcel (props) {

    const {csvData, filename } = props;
    return(
        <>
        <CSVLink data={csvData} filename={filename+moment().format('yyyy-MM-DD_HH-mm-ss')+'.csv'} >
                <button type='button' className='btn-download'>엑셀다운</button>
        </CSVLink>
        </>
    )

}

export default ExportExcel
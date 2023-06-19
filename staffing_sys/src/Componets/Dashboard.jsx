import React, { useEffect, useState } from "react";
import Nav from "./Nav";
import axios from "axios";


function Dashboard(){

    const [Alldata , setAllData] = useState([]);

    useEffect(()=>{
        console.log("useEffect Called");
        axios.get("http://localhost:5000/api/")
        .then((res)=>{
            setAllData(res.data)
        })
        .catch(err => console.log(err))
        }, [])

        const downloadAsPDF = (dataBuffer, name) => {
            const url = window.URL.createObjectURL(new Blob([new Uint8Array(dataBuffer).buffer]));
            const link = document.createElement('a');
            link.href = url;
            link.setAttribute('download', name+'.pdf');
            document.body.appendChild(link);
            link.click();
          };

    console.log(Alldata);
    return (
    <div>
        <Nav/>
        <div className="pa4">
            <div className="overflow-auto">
                <table className="f6 w-100 mw8 center" cellspacing="0">
                <thead>
                    <tr>
                    <th className="fw6 bb b--black-20 tl pb3 pr3 bg-white">Name</th>
                    <th className="fw6 bb b--black-20 tl pb3 pr3 bg-white">File</th>
                    <th className="fw6 bb b--black-20 tl pb3 pr3 bg-white">Technologies Choosen</th>
                    </tr>
                </thead>
                <tbody className="lh-copy">
                    {
                        Alldata.map((elem, idx)=>{
                            return <tr>
                                        <td className="pv3 pr3 bb b--black-20">{elem.name}</td>
                                        <td className="pv3 pr3 bb b--black-20">
                                            <button onClick={() => downloadAsPDF(elem.file.data.data, elem.name)}>Download PDF</button>
                                        </td>
                                        {/* <td>{elem.file.data.data}</td> */}
                                        <td className="pv3 pr3 bb b--black-20">{elem.tech}</td>
                                   </tr>
                        })
                    }
                </tbody>
                </table>
            </div>
        </div>
    </div>
        );
}

export default Dashboard;
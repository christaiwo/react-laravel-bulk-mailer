import React, { useEffect, useState } from 'react'

import DataTable from 'react-data-table-component';
import { BsPen, BsTrash } from 'react-icons/bs';
import axiosClient from '../axios-client';
import { ThreeDots } from 'react-loader-spinner';
import {toast } from 'react-toastify';

const Mails = () => {
    const [loading, setLoading] = useState(true);
    const [data, setData] = useState();
    
    // call the getmails request on page load
    useEffect(() => {
        getMails();
    },[])

    // axios send request to get the data
    const getMails = () => {
        axiosClient.get('/mail').then(({data}) => {
            setData(data.mails);
            setTimeout(() => {
                setLoading(false);
              }, 1000);
        }).catch((err) => {

        });
    }

    const deleteMail = (id) => {
        if(!window.confirm(`Are you sure you want to delete`)){
            return ;
        }
        axiosClient.delete(`mail/${id}`).then(() => {
            toast.success("deleted successfully");
            return getMails();
        }).catch((err) => {
            return toast.error("an error occurred while deleting");
        })
    }

    // table headers
    const columns = [
        {
            name: 'Subject',
            selector: row => row.subject,
        },
        {
            name: 'Total Emails',
            selector: row => row.total,
        },
        {
            name: 'Total Sent',
            selector: row => row.sent ,
        },
        {
            name: 'Date',
            selector: row => row.created_at,
        },
        {
            name: 'Status',
            sortable: false,
            cell: row => (
                <div className="flex justify-between gap-2">
                    {row.status == 0 ? <span className='bg-red-400 py-2 px-2 rounded-md text-white'>pending</span> : <span className='bg-green-400 py-2 px-2 rounded-md text-white'>sent</span>}
                </div>
            ),
        },
        {
            name: 'Action',
            sortable: false,
            cell: row => (
                <div className="flex justify-between gap-2">
                    <button className="btn btn-sm btn-danger" onClick={() => deleteMail(row.id)}>
                        <BsTrash className='bg-red-600 rounded-lg py-2 px-2 w-8 h-8 text-white font-bold' />
                    </button>
                    {/* <button className="btn btn-sm btn-success" onClick={() => editMail(row.id)}>
                        <BsPen className='bg-green-600 rounded-lg py-2 px-2 w-8 h-8 text-white font-bold' />
                    </button> */}
                </div>
            ),
        },
    ];

    const options = {
        responsive: true // Add the responsive option
    };
      

  return (
    <div className='mt-10'>
        {loading 
      ? <div className='flex items-center justify-center my-auto h-full'>
        <ThreeDots
          height="100" 
          width="100" 
          radius="9"
          color="#696261" 
          ariaLabel="three-dots-loading"
          wrapperStyle={{}}
          wrapperClassName=""
          visible={true}
        />
      </div>
      :<div className='flex flex-col justify-center items-center'>
            <div className='bg-white w-full rounded-md flex flex-col shadow-sm py-2 px-4' style={{ width: '100%' }}>
                <DataTable title="Mails"  pagination columns={columns} data={data}   options={options}/>
            </div>
      </div>}
    </div>
  )
}


export default Mails
import React, { useEffect, useState } from 'react'
import DataTable from 'react-data-table-component'
import { ThreeDots } from 'react-loader-spinner'
import axiosClient from '../axios-client';
import { useNavigate, useParams } from 'react-router-dom';
import { BsTrash } from 'react-icons/bs';
import {toast } from 'react-toastify';


const ViewMail = () => {
    const [loading, setLoading] = useState(true);
    const [data, setData] = useState();
    const {id} = useParams();
    const [mail, setMail] = useState();


    useEffect(() => {
        getMail();
    }, [])

    const getMail = () => {
        axiosClient.get(`mail/${id}`).then(({data}) => {
            setData(data);
            setMail(data.mail);
            setLoading(false);
        }).catch((err) => {

        });
    }

    const deleteMail = (id) => {
        if(!window.confirm(`Are you sure you want to delete ${id}`)){
            return ;
        }
        axiosClient.delete(`email/${id}`).then(() => {
            toast.success("deleted successfully");
            return getMail();
        }).catch((err) => {
            return toast.error("an error occurred while deleting");
        })
    }

    // table headers
    const columns = [
        {
            name: 'Email',
            selector: row => row.email,
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
      :<div className='flex flex-col gap-3 justify-center items-center'>
            <div className='bg-white w-full rounded-md flex flex-col shadow-sm py-2 px-4 text-center'>
                <h1 className='text-2xl'>{mail.subject}</h1>
                <h3 className='text-sm'>{mail.message}</h3>
            </div>
            <div className='bg-white w-full rounded-md flex flex-col shadow-sm py-2 px-4'>
                <DataTable title="Mails"  pagination columns={columns} data={data.emails}   options={options}/>
            </div>
      </div>}
    </div>
  )
}

export default ViewMail
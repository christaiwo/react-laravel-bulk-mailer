import React from 'react'

import DataTable from 'react-data-table-component';
import { BsPen, BsTrash } from 'react-icons/bs';

const Mails = () => {
    const columns = [
        {
            name: 'Subject',
            selector: row => row.subject,
        },
        {
            name: 'Date',
            selector: row => row.date,
        },
        {
            name: 'Status',
            selector: row => row.status,
        },
        {
            name: 'Action',
            selector: row => row.action,
        },
    ];

    
    const data = [
        {
            id: 1,
            subject: 'Beetlejuice',
            date: '1988',
            status: 1,
            action: <ActionButton id={1} />,
        },
        {
            id: 2,
            subject: 'Ghostbusters',
            date: '1984',
            status: 1,
            action: <ActionButton id={1} />,
        },
    ]
    
  return (
    <div className='mt-10'>
      <div className='flex flex-col justify-center items-center'>
            <div className='bg-white w-full rounded-md flex flex-col shadow-sm py-2 px-4'>
            <DataTable title="Mails" pagination columns={columns} data={data} selectableRows/>
            </div>
      </div>
    </div>
  )
}


const ActionButton = ({id}) => {
    return (
        <div className='flex gap-2'>
            <BsTrash onClick={() => { alert(id) }} className='bg-red-600 rounded-lg py-2 px-2 w-8 h-8 text-white font-bold' />
            <BsPen onClick={() => { alert(id) }}  className='bg-green-600 rounded-lg py-2 px-2 w-8 h-8 text-white font-bold' />
        </div>
    )
}

export default Mails
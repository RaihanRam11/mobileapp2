'use client'
import Card from '../../../../components/card';
import { useRouter } from 'next/navigation'

export default function AdminBlogs() {
    const router = useRouter();

    const onAddNew = ()=>{
        router.push('/admin/blogs/form')
    }
    return (
        <>
        <Card title="List of Blogs" style="mt-5" showAddBtn onAddNew={onAddNew}>
            <table className="table-auto">
                <thead>
                    <tr>
                        <th className='p-4 border-b border-blue-gray-100 bg-gray-100'>Title</th>
                        <th className='p-4 border-b border-blue-gray-100 bg-gray-100'>Sub_Title</th>
                        <th className='p-4 border-b border-blue-gray-100 bg-gray-100'>Content</th>
                        <th className='p-4 border-b border-blue-gray-100 bg-gray-100'>Created_at</th>
                        <th className='p-4 border-b border-blue-gray-100 bg-gray-100'>Action</th>
                    </tr>
                </thead>
                
                <tbody>
                    <tr className='border-b border-blue-gray-50 '>
                        <td className='p-4 '>1</td>
                        <td className='p-4 '>Jhon doe</td>
                        <td className='p-4 '>jhondoe@mail.com</td>
                        <td className='p-4 '>Loremipsum</td>
                        <td className='p-4 '>
                            <div className="inline-flex text-[12px]">
                                <button className=" bg-green-300 hover:bg-green-400 text-gray-800 py-2 px-4">
                                    Detail
                                </button>
                                <button className="bg-gray-300 hover:bg-gray-400 text-gray-800 py-2 px-4">
                                    Edit
                                </button>
                                <button className="bg-red-300 hover:bg-red-400 text-gray-800 py-2 px-4">
                                    Delete
                                </button>
                            </div>
                        </td>
                    </tr>
                </tbody>
            </table>
        </Card>
      </>
    );
}
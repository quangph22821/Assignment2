import { useEffect, useState } from "react"
import { IProduct } from "../../models"
import { getAll } from "../../api/product"
import { Link } from "react-router-dom"


const AdminHome = () => {
    const [products, setProducts] = useState<IProduct[]>([])

    const fetchProduct = async () => {
        try {
            const { data } = await getAll()
            setProducts(data)
        } catch (error) {

        }
    }

    useEffect(() => {
        fetchProduct()
    }, [])
    return <>


        <main className='flex'>
            <section className='flex-initial w-[300px] h-[1000px] mt-[50px]'>
                <h2 className='py-5 px-5 hover:bg-sky-500 rounded-lg'><i className="fa-solid fa-mobile "></i>Điện thoại</h2>
                <h2 className='py-5 px-5 hover:bg-sky-500 rounded-lg'><i className="fa-solid fa-laptop"></i>Laptop</h2>
                <h2 className='py-5 px-5 hover:bg-sky-500 rounded-lg'><i className="fa-solid fa-tablet"></i>Máy tính bảng</h2>
                <h2 className='py-5 px-5 hover:bg-sky-500 rounded-lg'><i className="fa-solid fa-headphones"></i>Âm thanh</h2>
            </section>
            <section className='flex-initial w-full px-[10px] bg-slate-50  '>
                <h1 className='text-3xl mt-[10px] font-bold'>Điện Thoại</h1>
                <div>
                    <p className='ml-[80px] mt-[20px]'>Danh mục sản phẩm</p>
                    <p>Bộ lọc: </p>
                    <select className="w-[400px] border rounded-lg border-sky-500 ml-[80px] h-[25px]" name="" id="">
                        <option value="">Lap top</option>
                        <option value="">Điện thoại</option>
                        <option value="">Âm Thanh</option>
                    </select>
                </div>
                <div className='mt-[20px]'>
                    <div className="overflow-x-auto rounded-lg border border-gray-200">
                        <table className="min-w-full divide-y-2 divide-gray-200 text-sm">
                            <thead>
                                <tr>
                                    <th
                                        className="whitespace-nowrap px-4 py-2 text-left font-medium text-gray-900"
                                    >
                                        Tên sản phẩm
                                    </th>
                                    <th
                                        className="whitespace-nowrap px-4 py-2 text-left font-medium text-gray-900"
                                    >
                                        Giá
                                    </th>
                                    <th
                                        className="whitespace-nowrap px-4 py-2 text-left font-medium text-gray-900"
                                    >
                                        Giá khuyến mãi
                                    </th>
                                    <th
                                        className="whitespace-nowrap px-4 py-2 text-left font-medium text-gray-900"
                                    >
                                        Hình ảnh
                                    </th>
                                    <th
                                        className="whitespace-nowrap px-4 py-2 text-left font-medium text-gray-900"
                                    >
                                        Thao tác
                                    </th>
                                </tr>
                            </thead>

                            <tbody className="divide-y divide-gray-200">
                                {products.map(product => (
                                    

                                    <tr>
                                        <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                                            {product.name}

                                        </td>
                                        <td className="whitespace-nowrap px-4 py-2 text-gray-700">{product.price}</td>
                                        <td className="whitespace-nowrap px-4 py-2 text-gray-700">{product.original_price}</td>
                                        <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                                            <img className="w-[30%]" src={product.images?.[0].base_url} alt="" />
                                        </td>
                                        <td className="text-center ">
                                            <button className="bg-red-600 text-white rounded-md p-2 "><i className ="fa-sharp fa-solid fa-trash"></i></button>

                                            <Link to={`/admin/product/${product.id}`}>
                                                <button className="bg-green-500 text-white rounded-md p-2 ml-[6px]"><i className="fa-solid fa-wrench"></i></button>
                                            </Link>
                                        </td>
                                        
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>

                </div>
            </section>
        </main>
    </>
}

export default AdminHome
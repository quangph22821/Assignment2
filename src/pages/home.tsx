import { useEffect, useState } from "react"
import Product from "../components/product"
import Slideshow from "./slider"
import { IProduct } from "../models"
import { getAll } from "../api/product"



const HomePage = () => {
    const [products,setProducts] = useState<IProduct[]>([])

    const fetchProduct = async () =>{
        try {
            const {data} = await getAll()
            setProducts(data)
        } catch (error) {
            
        }
    }

    useEffect(()=>{
        fetchProduct()
    },[])
    return <div className="">
        <div className="my-2">
            <Slideshow/>
        </div>
        <h1 className="text-left my-5">ĐIỆN THOẠI NỔI BẬT NHẤT</h1>
        <div className="grid grid-cols-4 gap-3">
           {products.map(product => <Product
                data={product}
                key={product.id}
           />)}
        </div>

    </div>
}

export default HomePage
import { useEffect, useState } from "react"
import { useParams } from 'react-router-dom'
import { IProduct } from "../models"
import { getById } from "../api/product"


const DetailPage = (props:any ) => {
  // assertion
  const [product, setProduct] = useState<IProduct>({} as IProduct)
  const { id } = useParams()

  const fetchProductById = async (id:string) => {
    try {
      const {data} = await getById(id)
      setProduct(data)
    } catch (error) {
      
    }
  }

  useEffect(()=>{
    if(id){
      fetchProductById(id)
    }
  },[])

  return <div className="container ">
    {/* Chi tiet sp {id} */}
    <nav>
      <ul className=" flex ml-[200px] mt-[10px]">
        <li className="pl-[30px]"><a href="">Trang Chủ</a></li>
        <li className="pl-[30px]"><a href="">Điện Thoại</a></li>
        <li className="pl-[30px]"><a href="">Sam Sung</a></li>
        <li className="pl-[30px]"><a href="">{product.name}</a></li>
      </ul>
    </nav>
    <div className="text-xl ml-[228px]"><b>{product.name}</b></div>
    {/* ////Main////// */}
    <div>
      <div className="  grid grid-cols-2 mt-[40px]  ">
        <div className="" >
          <div className="mb-[40px]">
            <img src={product.images?.[0].base_url} alt="" />
          </div>

          {/* ///////////////////////// */}

          <div className="flex mt-[10px] gap-8 ">
            <div className="border border-gray rounded-lg h-[50px] w-[50px] py-[2px] px-[2px] ">
              <img className="ml-[9px]" src="/ngoisao.png" alt="" />
              <p className="  text-[8px] ml-[3px] px-px">Tính năng nổi bật</p>
            </div>
            {/* ảnh 1 */}
            <img className="border border-gray rounded-lg h-[50px] py-[2px] px-[2px]" src="/ct3den.png" alt="" />
            <img className="border border-gray rounded-lg h-[50px] py-[2px] px-[2px]" src="/ct3trang.png" alt="" />
            <img className="border border-gray rounded-lg h-[50px] py-[2px] px-[2px]" src="/ct3xam.png" alt="" />
            <img className="border border-gray rounded-lg h-[50px] py-[2px] px-[2px]" src="/ct3xanh.png" alt="" />
          </div>

        </div>
        {/* ------------------------------------------------------------------------- */}
        <div className="">
          {/*  */}
          <div className="flex">
            <p className="text-xl text-red-400">{product.price}đ</p>
            <p className="text-xs pt-[8px] pl-[6px]">{product.original_price}đ</p>
          </div>

          {/* mota */}
          <div className="w-[580px] pt-[20px]">
            <p > {product.description}</p>
          </div>

          {/* muahang */}
          <div className="flex mt-[280px]">
            <button className="w-[233px] bg-red-500 h-[48px]">Mua ngay</button>
            <div className="pl-[10px] mt-5">
              <img src="/giohang.png" alt="" />
            </div>
            <p className="w-[80px] ml-[20px]"><a>Thêm vào giỏ hàng</a></p>
          </div>

        </div>
      </div>
      {/* ----------------------------------end------------------------------- */}

      <div className="">
        <div className="bg-gray-200  w-[1100px] ">
          <h1 className=" w-[1500px] mt-[40px] text-red-600 text-center">
            ĐẶC ĐIỂM NỔI BẬT
          </h1>
          <p className="ml-[30px] pt-[10px]">Camera chất lượng, bắt trọn từng khoảng khắc - Cụm 4 camera với cảm biến chính lên đến 108 MP</p>
          <p className="ml-[30px] pt-[5px]">Thưởng thức không gian giải trí cực đỉnh - Màn hình lớn 6.7 inch, độ phân giải Full HD+, 120Hz mượt mà</p>
          <p className="ml-[30px] pt-[5px]">Cấu hình Galaxy A73 5G được nâng cấp mạnh với chip Snapdragon 778G, RAM lên đến 8 GB</p>
          <p className="ml-[30px] pt-[5px] pb-[10px]">Chiến game thoải mái không lo gián đoạn - Viên pin lớn 5000 mAh, hỗ trợ sạc nhanh 25 W</p>
        </div>
        {/*  */}
        <div className=" w-[1100px]  pt-[10px]">
          <p>
            Năm 2022 hứa hẹn sẽ là một năm rất đáng trông đợi đối với những ai là fan của thương hiệu điện thoại Samsung. Mới đây, hãng sẽ tiếp tục cho ra mắt nhiều smartphone với sự cải tiến trong thiết kế và cấu hình, trong đó phải kể đến chiếc Samsung Galaxy A73 với nhiều cải tiến so với thế hệ trước. Vậy sản phẩm có gì nổi bật, giá bao nhiêu và liệu có nên mua không? Tìm hiểu ngay nhé!
          </p>
        </div>
        {/*  */}

        <div className="w-[1100px] text-xl pt-[10px] ">
          <h2 className=" "><b>Đánh giá Samsung A73 - Hiệu năng mượt mà, chụp ảnh chuyên nghiệp</b></h2>
          <p className="pt-[10px] text-[16px]">Điện thoại cao cấp nhất dòng Galaxy A series sở hữu nhiều nâng cấp đáng giá so với thế hệ trước, từ ngoại hình cho đến hiệu năng, đặc biệt là hệ thống camera. Sau đây là những đánh giá chi tiết về chiếc</p>
          <h2 className="text-xl pt-[10px]">Thiết kế sang trọng, màn hình Super AMOLED</h2>
          <p className="pt-[10px] text-[16px]">Trước khi mua bất kỳ chiếc điện thoại nào, người dùng cũng sẽ quan tâm đến thiết kế sản phẩm trước. Với phiên bản A73, Samsung đã tạo nên một chiếc smartphone với vẻ ngoài mang đến cảm giác sang trọng và tinh tế.</p>
          <p className="pt-[10px] text-[16px]" >Samsung Galaxy A73 được thiết kế gọn nhẹ với tiêu chí đáp ứng khả năng mang theo để tiện đi lại cho người dùng. Giờ đây, bạn có thể mang theo chiếc smartphone bên cạnh đến bất cứ đâu, bất cứ lúc nào.</p>
          <p className="pt-[10px] text-[16px]">Kích thước và trọng lượng của chiếc điện thoại rất vừa phải và dĩ nhiên sẽ không chiếm quá nhiều diện tích trong túi xách và có thể di chuyển dễ dàng.</p>
        </div>
        <div className="text-center w-[1400px]"><button className=" border border-stone-950 border-3 w-[300px] rounded-lg mt-[20px]">Xem Thêm</button></div>

      </div>

    </div>
  </div >
}

export default DetailPage
const Footer = () => {
    return <>
        <div className="flex flex-nowrap gap-10 my-20 justify-center">
            <div className="">
                <a href="">
                    <h2 className="text-2xl">Tìm cửa hàng</h2>
                    <p>Tìm cửa hàng gần nhất</p>
                    <p>Mua hàng từ xa</p>
                    <p>Gặp trực tiếp cửa hàng gần nhất (Zalo hoặc gọi điện)</p>
                    <h2 className="text-2xl">Phương thức thanh toán</h2>
                    <div className="flex flex-nowrap gap-6">
                        <img src="/citi.png" alt="" />
                        <img src="/vnpay.png" alt="" />
                        <img src="/redi.png" alt="" />
                        <img src="/vpbank.png" alt="" />
                        <img src="/moco.png" alt="" />
                    </div></a>

            </div>
            {/* /////////////////////////////////// */}
            <div>
                <p>Gọi mua hàng:1800.2044(8h00 - 22h00)</p>
                <p>Gọi khiếu nại:1800.2063(8h00 - 22h00)</p>
                <p>Gọi bảo hành:1800.2064(8h00 - 22h00)</p>
                <h1 className="text-2xl mt-2.5">Đối tác dịch vụ bảo hành</h1>
                <p>Điện Thoại - Máy tính</p>
                <h2 className="text-2xl mt-2.5 mb-2">Trung tâm bảo hành uỷ quyền Apple</h2>
                <img src="/dtvui.png" alt="" />
            </div>
            {/* ///////////////////////////////////////// */}
            <div>
                <p>Mua hàng và thanh toán Online</p>
                <p>Dịch vụ bảo hành điện thoại</p>
                <p>  Mua hàng trả góp Online</p>
                <p>  Tra thông tin đơn hàng</p>
                <p>  Tra điểm Smember</p>
                <p>  Tra thông tin bảo hành</p>
                <p>  Tra cứu hoá đơn VAT điện tử</p>
                <p>   Trung tâm bảo hành chính hãng</p>
                <p>   Quy định về việc sao lưu dữ liệu</p>
            </div>
            {/* //////////////////////////////////////////// */}
            <div>
                <p>Quy chế hoạt động</p>
                <p>Chính sách Bảo hành</p>
                <p>Liên hệ hợp tác kinh doanh</p>
                <p>Khách hàng doanh nghiệp (B2B)</p>
                <p>Ưu đãi thanh toán</p>
                <p>Tuyển dụng</p>
            </div>
        </div>
        {/* /////////////////////////////////////// footer2*/}
        <div className="bg-slate-50 my-10">
            <div className="flex flex-nowrap justify-center gap-5 py-10">
                <div>
                    <a href="">
                        <p>Điện thoại iPhone 13-Điện thoại iPhone 12-Điện thoại iPhone 11</p>
                        <p> Điện thoại iPhone 13 Pro Max-Điện thoại iPhone 11 Pro Max</p>
                        <p>  iPhone cũ giá rẻ-iPhone 13 cũ-iPhone 12 cũ-iPhone 11 cũ</p>
                    </a>
                </div>
                {/* /////////////////////////////////// */}
                <div>
                    <a href="">
                        <p> Điện thoại iPhone-Điện thoại Samsung-Điện thoại Samsung A</p>
                        <p>Điện thoại OPPO-Điện thoại Xiaomi-Điện thoại Vivo- Điện thoại Nokia</p>
                        <p>Samsung Fold 3-Samsung S22-Samsung A73-Samsung A53</p>
                    </a>
                </div>
                {/* /////////////////////////////////////////////////////////////////// */}
                <div>
                    <a href="">
                        <p>Laptop-Laptop HP-Laptop Dell-Laptop Acer</p>
                        <p>Microsoft Surface-Laptop Lenovo-Laptop Asus</p>
                        <p>Máy tính để bàn-Màn hình máy tính-Camera-Camera hành trình</p>
                    </a>
                </div>
            </div>
            {/* //////////////////////////////// */}
            <div className="justify-center pb-2.5" >
                <a href="" className="ml-2.5">
                    <p className="text-center mx-10">Công ty TNHH Thương mại và dịch vụ kỹ thuật DIỆU PHÚC - GPĐKKD: 0316172372 do sở KH & ĐT TP. HCM cấp ngày 02/03/2020. Địa chỉ: 350-352 Võ Văn Kiệt, Phường Cô Giang, Quận 1, Thành phố Hồ Chí Minh, Việt Nam. Điện thoại: 028.7108.9666.</p>
                </a>
            </div>
        </div>
    </>
}

export default Footer
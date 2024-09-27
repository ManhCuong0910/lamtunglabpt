import ImageAsia from '../../assets/servive/asia.jpg'
import ImagePassport from '../../assets/servive/passport.jpg'
import ImageUs from '../../assets/servive/us.jpg'
const Products = () => {
  return (
    <div className="mb-12 mt-14">
      <div className="container">
        {/* Header section */}
        <div className="text-center mb-10 max-w-[600px] mx-auto">
          <h1 data-aos="fade-up" className="text-3xl font-bold">
            Các Gói Dịch Vụ Chụp Ảnh Thẻ Chuyên Nghiệp Tại Lâm Tùng Lab
          </h1>
        </div>
        {/* Body section */}
        <div className="flex flex-wrap">
          <div className="w-full text-center">
            <img src={ImageAsia} alt="" className="w-[600px] mx-auto" />
            <h3 className="py-2 text-2xl font-bold">
              Visa Châu Âu, Hàn Quốc, Nhật Bản 3.5 x 4.5
            </h3>
          </div>
          <div className="w-full text-center">
            <img src={ImagePassport} alt="" className="w-[600px mx-auto" />
            <h3 className="py-2 text-2xl font-bold">Hộ Chiếu 4x6</h3>
          </div>
          <div className="w-full text-center">
            <img src={ImageUs} alt="" className="w-[600px] mx-auto" />
            <h3 className="py-2 text-2xl font-bold">Visa Mỹ USA 5x5</h3>
          </div>
        </div>
        <div>
          {/* view all button */}
          <div className="flex justify-center">
            <a
              href="https://zalo.me/0336224042"
              className="px-5 py-1 mt-10 text-center text-white rounded-md cursor-pointer bg-primary"
            >
              Xem thêm
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Products

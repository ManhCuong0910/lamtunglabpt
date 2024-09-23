import Img1 from '../../assets/shirt/shirt.png'
import Img2 from '../../assets/shirt/shirt2.png'
import Img3 from '../../assets/shirt/shirt3.png'

const ProductsData = [
  {
    id: 1,
    img: Img1,
    title: 'Vest'
  },
  {
    id: 2,
    img: Img2,
    title: 'Sơ mi nam'
  },
  {
    id: 3,
    img: Img3,
    title: 'Sơ mi nữ'
  }
]
// eslint-disable-next-line react/prop-types
const TopProducts = () => {
  return (
    <div>
      <div className="container">
        {/* Header section */}
        <div className="mb-24 text-left">
          <p data-aos="fade-up" className="text-sm text-primary">
            Luôn đem đến lựa chọn hoàn hảo cho khách hàng
          </p>
          <h1 data-aos="fade-up" className="py-5 text-3xl font-bold">
            Styling Quần Áo Đẹp Tại Lâm Tùng
          </h1>
          <p data-aos="fade-up" className="text-[16px] text-gray-400 mb-3">
            Dịch vụ chuyên nghiệp giúp bạn phối đồ hoàn hảo cho mọi dịp. Tại Lâm
            Tùng, chúng tôi không chỉ giúp bạn lựa chọn trang phục phù hợp với
            phong cách cá nhân mà còn tư vấn các xu hướng thời trang mới nhất,
            đảm bảo bạn luôn tự tin và nổi bật.
          </p>
        </div>
        {/* Body section */}
        <div className="grid grid-cols-1 gap-20 sm:grid-cols-2 md:grid-cols-3 md:gap-5 place-items-center">
          {ProductsData.map((data) => (
            // eslint-disable-next-line react/jsx-key
            <div
              data-aos="zoom-in"
              className="rounded-2xl bg-white dark:bg-gray-800 hover:bg-black/80 dark:hover:bg-primary hover:text-white relative shadow-xl duration-300 group max-w-[300px]"
            >
              {/* image section */}
              <div className="h-[100px]">
                <img
                  src={data.img}
                  alt=""
                  className="max-w-[140px] block mx-auto transform -translate-y-20 group-hover:scale-105 duration-300 drop-shadow-md"
                />
              </div>
              {/* details section */}
              <div className="p-4 text-center">
                <h1 className="text-xl font-bold">{data.title}</h1>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default TopProducts

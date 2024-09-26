import { GiFoodTruck } from 'react-icons/gi'
import { GrSecure } from 'react-icons/gr'
import { IoFastFood } from 'react-icons/io5'
import BannerImg from '../../assets/hero/US2.png'

const Banner = () => {
  return (
    <div className="min-h-[550px] flex justify-center items-center py-12 sm:py-0">
      <div className="container">
        <div className="grid items-center grid-cols-1 gap-6 sm:grid-cols-2">
          {/* image section */}
          <div data-aos="zoom-in">
            <img
              src={BannerImg}
              alt=""
              className="max-w-[400px] h-[600px] w-full mx-auto drop-shadow-[-10px_10px_12px_rgba(0,0,0,1)] object-cover"
            />
          </div>

          {/* text details section */}
          <div className="flex flex-col justify-center gap-6 sm:pt-0">
            <h1 data-aos="fade-up" className="text-3xl font-bold sm:text-4xl">
              Bảng giá dịch vụ
            </h1>
            <p
              data-aos="fade-up"
              className="text-sm leading-5 tracking-wide text-gray-500"
            >
              Chỉ với{' '}
              <span className="text-xl font-extrabold text-red-600">
                50.000
              </span>{' '}
              cho một tấm ảnh bất kỳ với kích thước ảnh mà khách hàng yêu cầu
            </p>
            <div className="flex flex-col gap-4">
              <div data-aos="fade-up" className="flex items-center gap-4">
                <GrSecure className="w-12 h-12 p-4 text-4xl rounded-full shadow-sm bg-violet-100 dark:bg-violet-400" />
                <p>Ảnh chất lượng cao</p>
              </div>
              <div data-aos="fade-up" className="flex items-center gap-4">
                <IoFastFood className="w-12 h-12 p-4 text-4xl bg-orange-100 rounded-full shadow-sm dark:bg-orange-400" />
                <p>Lấy ngay sau 10 phút</p>
              </div>
              <div data-aos="fade-up" className="flex items-center gap-4">
                <GiFoodTruck className="w-12 h-12 p-4 text-4xl bg-green-100 rounded-full shadow-sm dark:bg-green-400" />
                <p>Đa dạng phương thức thanh toán</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Banner

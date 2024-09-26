import Slider from 'react-slick'
import Image from '../../assets/comment-avatar/Pro.jpg'
const TestimonialData = [
  {
    id: 1,
    name: 'Hiếu Bùi',
    text: 'Nơi chụp ảnh thẻ có tâm nhất mà trước đây tôi từng chụp. Rất hài lòng với chất lượng và dịch vụ',
    img: 'https://picsum.photos/101/101'
  },
  {
    id: 2,
    name: 'Điều Trần',
    text: 'Hiệu ảnh chụp hình có tâm nhất bờ hồ. Rất hài lòng về chất lượng và dịch vụ',
    img: Image
  },
  {
    id: 3,
    name: 'Mạnh Cường',
    text: 'Mình rất hài lòng với màu sắc và chất lượng ảnh chụp profile của cửa hàng mình',
    img: 'https://picsum.photos/104/104'
  },
  {
    id: 5,
    name: 'Nguyễn Văn Miên',
    text: 'Tôi rất hài lòng với dịch vụ chụp ảnh thẻ của cừa hàng, dịch vụ rất chất lương và chuyên nghiệp',
    img: 'https://picsum.photos/103/103'
  }
]

const Testimonials = () => {
  var settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    cssEase: 'linear',
    pauseOnHover: true,
    pauseOnFocus: true,
    responsive: [
      {
        breakpoint: 10000,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true
        }
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2
        }
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  }

  return (
    <div className="py-10 mb-10">
      <div className="container">
        {/* header section */}
        <div className="text-center mb-10 max-w-[600px] mx-auto">
          <p data-aos="fade-up" className="text-sm text-primary">
            Khách hàng của chúng tôi đã hài lòng với dịch vụ như thế nào ?
          </p>
          <h1 data-aos="fade-up" className="text-3xl font-bold">
            Đánh giá khách hàng
          </h1>
        </div>

        {/* Testimonial cards */}
        <div data-aos="zoom-in">
          <Slider {...settings}>
            {TestimonialData.map((data) => (
              // eslint-disable-next-line react/jsx-key
              <div className="my-6">
                <div
                  key={data.id}
                  className="relative flex flex-col gap-4 px-6 py-8 mx-4 shadow-lg rounded-xl dark:bg-gray-800 bg-primary/10"
                >
                  <div className="mb-4">
                    <img
                      src={data.img}
                      alt=""
                      className="w-20 h-20 rounded-full"
                    />
                  </div>
                  <div className="flex flex-col items-center gap-4">
                    <div className="space-y-3">
                      <p className="text-xs text-gray-500">{data.text}</p>
                      <h1 className="text-xl font-bold text-black/80 dark:text-light">
                        {data.name}
                      </h1>
                    </div>
                  </div>
                  <p className="absolute top-0 right-0 font-serif text-black/20 text-9xl">
                    ,,
                  </p>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  )
}

export default Testimonials

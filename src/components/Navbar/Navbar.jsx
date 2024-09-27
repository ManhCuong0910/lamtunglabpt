import { CiCamera } from 'react-icons/ci'
const Menu = [
  {
    id: 1,
    name: 'Trang chủ',
    link: '/#'
  },
  {
    id: 2,
    name: 'Chụp ảnh thẻ đẹp',
    link: '/#services'
  },
  {
    id: 3,
    name: 'Chụp ảnh hộ chiếu',
    link: '/#'
  },
  {
    id: 3,
    name: 'Chụp ảnh profile',
    link: '/#'
  },
  {
    id: 3,
    name: 'Bảng giá',
    link: '/#'
  },
  {
    id: 3,
    name: 'Liên hệ',
    link: '/#'
  }
]

// eslint-disable-next-line react/prop-types
const Navbar = () => {
  return (
    <div className="relative z-40 duration-200 bg-white shadow-md dark:bg-gray-900 dark:text-white">
      {/* upper Navbar */}
      <div className="py-2 bg-primary/40">
        <div className="container flex items-center justify-between">
          <div>
            <a href="#" className="flex gap-2 text-2xl font-bold sm:text-3xl">
              <CiCamera className="w-10 text-4xl text-black cursor-pointer drop-shadow-sm" />
              LamTungLab
            </a>
          </div>

          {/* search bar */}
          <div className="flex items-center justify-between gap-4">
            {/* order button */}

            <a
              href="https://zalo.me/0336224042"
              className="flex items-center gap-3 px-4 py-1 text-white transition-all duration-200 rounded-full bg-gradient-to-r from-primary to-secondary group"
            >
              <a
                href="https://zalo.me/0336224042"
                className="hidden transition-all duration-200 group-hover:block"
              >
                Liên hệ chụp ảnh
              </a>
              <CiCamera className="text-xl text-white cursor-pointer drop-shadow-sm" />
            </a>
          </div>
        </div>
      </div>
      {/* lower Navbar */}
      <div data-aos="zoom-in" className="justify-center hidden lg:py-4 lg:flex">
        <ul className="items-center hidden gap-4 sm:flex">
          {Menu.map((data) => (
            <li key={data.id}>
              <a
                href={data.link}
                className="inline-block px-4 duration-200 hover:text-primary"
              >
                {data.name}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default Navbar

import { Link } from "react-router-dom";


const Banner = () => {
    const banner1 = "https://i.ibb.co/SfhgPXb/2.png";
    const banner2 = "https://i.ibb.co/8DpmDnH/ales-nesetril-Im7l-Zjxe-Lhg-unsplash.jpg";
    const banner3 = "https://i.ibb.co/z58QVVG/maxim-hopman-Hin-rzh-Od-Ws-unsplash.jpg";
    const banners = [banner1, banner2, banner3];

    return (
      <div className="relative h-screen overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={banners[Math.floor(Math.random() * banners.length)]}
            alt="Banner Image"
            className="object-cover w-full h-full"
          />
          <div className="absolute inset-0 bg-black opacity-50"></div>
        </div>
        <div className="relative z-10 flex flex-col justify-center items-center h-full text-white text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">Discover Your Dream Job</h1>
          <p className="text-lg md:text-xl mb-6">Find exciting opportunities that match your skills.</p>
          <Link
            to="/jobs"
            className="bg-blue-600 hover:bg-blue-700 text-white text-lg md:text-xl py-2 px-6 rounded-full transition-transform transform hover:scale-105"
          >
            Explore Jobs
          </Link>
        </div>
      </div>
    );
  };

export default Banner;


// export default Banner;
//'https://i.ibb.co/SfhgPXb/2.png',
// 'https://i.ibb.co/8DpmDnH/ales-nesetril-Im7l-Zjxe-Lhg-unsplash.jpg',
// 'https://i.ibb.co/z58QVVG/maxim-hopman-Hin-rzh-Od-Ws-unsplash.jpg',
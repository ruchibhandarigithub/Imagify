import { useState } from 'react';
import { FaCamera } from 'react-icons/fa';
const Navbar = ({ setSearch }) =>{
    const [searchTerm,setSearchTerm] = useState('');
    const handleButtonSearch = () =>{
        setSearch(searchTerm);
    }
    return (
        <div className="bg-gray-900 text-4xl gap-10 text-white flex jflex-col  md:flex-row lg:justify-center  px-5 py-5">
          <div className='flex justify-center items-center  border-dotted'>
          <h1 className="font-size-22">Imagify </h1> 
          <FaCamera />
          </div>
           <div className="flex  ">
           <input
                className="bg-gray-50 border border-gray-300 text-black text-sm w-full indent-2 p-0.5 outline-none focus:border-blue-500 focus:ring-2 rounded-tl rounded-bl"
                type="search"
                placeholder="Search Anything..."
                value={searchTerm}
                onChange={(e)=> setSearchTerm(e.target.value)}
                
            />
           <button onClick={handleButtonSearch} className="bg-blue-600 px-3 py-1.5 text-white rounded-tr rounded-br focus:ring-2 focus:ring-blue-300 disabled:bg-gray-400"
            >Search</button>
           </div>

        </div>
    )
}
export default Navbar;
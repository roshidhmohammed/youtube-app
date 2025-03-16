import { MdSort } from "react-icons/md";
import { CgProfile } from "react-icons/cg";

const Comments = () => {
  return (
    <div className=' text-white   rounded-lg p-1 my-20 '>
        <div className=' flex gap-10'>
            <h1>75 comments </h1>
            <div className="flex items-center  gap-3"><MdSort size={26}/>Sort by</div>
        </div>
        <div className=" flex gap-3 mt-5">
            <CgProfile size={26}/>
            <input type="text" className=" w-full  border-none appearance-none focus:outline-none"  placeholder="Write your comment"/>
           
        </div>

    </div>
  )
}

export default Comments
const Footer = () => {
  return (
    <div className=' text-xl px-3 mt-24 md:p-2 bg-[url("../public/wave.svg")] ] bg-cover'>
    <div className="mt-36 md:w-[90%] mx-auto text-center" >
    <div className="flex md:w-[60%] mx-auto justify-between ">
        <div >
            <h1 className="font-bold">Hometown</h1>
            <h1 className=" text-sm justify-center">🏠Faridabad,Haryana</h1>
            <h1 className=" text-sm justify-center">📧mohitkr@gmail.com</h1>
        </div>
        <div className="w-[50%]">
            <h1 className="font-bold ">Social links</h1>
            <div className="flex text-sm flex-wrap mx-auto text-center justify-center">
            <a href="https://www.linkedin.com/in/mohit-kumar-34a944220/" target="_blank" className="mx-1" >Linkdin</a>
            <a href="https://github.com/mohitkumar1718" target="_blank" className="mx-1" >Github</a>
            <a href="https://x.com/mohitkumar1718" target="_blank" className="mx-1" >Twitter</a>
            <a className="mx-1" href="https://leetcode.com/u/mohitkumar1718/" target="_blank">Leetcode</a>
            <a className="mx-1" href="https://www.codechef.com/users/mohitkr7982" target="_blank">Codechef</a>
            </div>
        </div>
    </div>
        <h1 className="mt-10">© 2024 Mohit Kumar. All rights reserved.</h1>
    </div>
    </div>
  )
}

export default Footer
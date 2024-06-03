const Footer = () => {
  return (
    <div className=' text-xl px-3 mt-24 md:p-2 bg-[url("../public/wave.svg")] ] bg-cover'>
    <div className="mt-36 md:w-[90%] mx-auto text-center" >
    <div className="flex md:w-[60%] mx-auto justify-between ">
        <div >
            <h1 className="font-bold">Hometown</h1>
            <h1>🏠Faridabad,Haryana</h1>
            <h1>📧mohitkr@gmail.com</h1>
        </div>
        <div className="w-[50%]">
            <h1 className="font-bold ">Social links</h1>
            <div className="flex flex-wrap mx-auto text-center">
            <a className="mx-1" href="">Linkdin</a>
            <a className="mx-1" href="">Github</a>
            <a className="mx-1" href="">Twitter</a>
            <a className="mx-1" href="">Leetcode</a>
            <a className="mx-1" href="">Codechef</a>
            </div>
        </div>
    </div>
        <h1 className="mt-10">© 2024 Mohit Kumar. All rights reserved.</h1>
    </div>
    </div>
  )
}

export default Footer
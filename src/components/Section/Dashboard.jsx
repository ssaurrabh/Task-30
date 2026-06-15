


function Dashboard() {
  return (
    <>
    <div className="flex justify-around gap-50 h-screen w-full mt-5">
      <div className="p-4 w-1/2">
        <h2 className="text-4xl mb-4 font-bold p-4">If you are a certified teacher<br/> then <span className=" text-transparent bg-clip-text bg-linear-to-r from-fuchsia-500 to-indigo-500">become an Instructor</span></h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi, quod asperiores. Doloribus dolor nulla illo. Voluptatum, iusto rerum. Provident, voluptatem.</p>
      </div>
      <div className="p-4 overflow-auto w-1/2">
        <img src="../../../public/linkedin-sales-solutions-wS73LE0GnKs-unsplash.jpg" alt="Ins" className="h-120 rounded-2xl outline outline-dashed outline-offset-4 outline-indigo-600 rounded-2xl"/>
      </div>
    </div>
    <div className="h-120 w-120 rounded-full bg-linear-to-br from-fuchsia-600 to-indigo-600 absolute top-30 right-30 -z-10"></div>
    </>
    
  )
}

export default Dashboard

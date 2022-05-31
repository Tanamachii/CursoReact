function Footer() {
    function backToTop(){
        window.scrollTo({top: 0, behavior: 'smooth'});
    }
  return (
    <div>
        <button onClick={backToTop} className="bg-indigo-600 w-full p-3 text-white uppercase font-bold hover:bg-indigo-500 cursor-pointer transition-all">Back to top</button>
    </div>
  )
}

export default Footer
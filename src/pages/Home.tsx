import Background from '../assets/images/vintagevibes2.jpg'

function Home() {
  return (
    <div 
      style={{ backgroundImage: `url(${ Background })`}} 
      className='flex flex-row justify-center mx-auto bg-cover bg-fixed'
      >
        <div className='flex place-items-center h-screen'>
          <h3 className='p-5 bg-black font-serif font-bold text-white rounded'>Distinctly Vintage, Distinctly Different.</h3>
        </div>
    </div>
  )
}

export default Home
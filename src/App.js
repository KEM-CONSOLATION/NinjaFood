import './App.css';
import Pic1 from "../src/img/pic1.jpg"
import Pic2 from "../src/img/pic2.jpg"
import Pic3 from "../src/img/pic3.jpg"
function App() {
  return (

    // content wrapper
    <div className="Wrapper bg-gray-100 grid md:grid-cols-3">
      <div className=' md:col-span-1 md:flex md:justify-end'>
        <nav className=' text-right'>
          <div>
            <h1 className=' font-bold uppercase p-4 border-b border-gray-100'>
              <a href="/" className=' hover:text-gray-700'>Food Ninja</a>
            </h1>
          </div>
          <ul className=' text-sm mt-6 '>
            <li className=' text-gray-700 font-bold'>
              <a href="/" className=' px-4 flex justify-end'>
                <span>Home</span>
              </a>
            </li>
            <li>
              <a href="/" className=' px-4 flex justify-end'>
                <span>About</span>
              </a>
            </li>
            <li>
              <a href="/" className=' px-4 flex justify-end'>
                <span>Contact</span>
              </a>
            </li>
          </ul>
        </nav>
      </div>


      <main className=' px-16 py-6 md:col-span-2'>
        <div className=' flex justify-center md:justify-end'>
          <a href='/' className=' text-pink-600 font-semibold px-6 py-3 md:bg-pink-600 md:text-white rounded-md  md:hover:bg-white md:hover:border-2 md:hover:border-pink-600 md:hover:text-pink-600'>Log In</a> 
          <a href='/' className=' text-pink-600 font-semibold ml-2 px-4 py-3 md:border-2 md:border-pink-600 text-pink-600 rounded-md md:hover:bg-pink-600 md:hover:text-white md:active:bg-pink-800'>Sign Up</a>
        </div>

        <header>
          <h2 className=' text-gray-700 text-6xl font-semibold'>Recipes</h2>
          <h3 className=' text-2xl font-semibold'>For Techies</h3>
        </header>



        <div>
          <h4 className=' font-bold text-pink-600 mt-12 pb-2 border-b border-gray-200'>Latest Recipes</h4>
          
          <div className=' mt-8 grid lg:grid-cols-3 md:grid-cols-2 gap-10'>
            {/* Cards go here */}
            <div className=' card'>
              <img src= {Pic1} alt=""  className='w-full  object-cover'/>
              <div className=' m-4'>
                <span className=' text-pink-600 font-semibold '>5 Bean Chilly Stew</span>
                <span className=' font-bold text-pink-600 text-sm block '>Recipe by Mario</span>
              </div>
              <div className=' badge'>
                  <span>25 mins</span>
              </div>
            </div>
            
             {/* Cards go here */}
             <div className=' card'>
              <img src= {Pic1} alt=""  className='w-full'/>
              <div className=' m-4'>
                <span className=' text-pink-600 font-semibold '>5 Bean Chilly Stew</span>
                <span className=' font-bold text-pink-600 text-sm block'>Recipe by Mario</span>
              </div>
              <div className=' badge'>
                  <span>25 mins</span>
              </div>
            </div>

             {/* Cards go here */}
             <div className=' card'>
              <img src= {Pic1} alt=""  className='w-full'/>
              <div className=' m-4'>
                <span className=' text-pink-600 font-semibold '>5 Bean Chilly Stew</span>
                <span className=' font-bold text-pink-600 text-sm block'>Recipe by Mario</span>
              </div>
              <div className=' badge'>
                  <span>25 mins</span>
              </div>
            </div>


          </div>

          <h4  className=' font-bold text-pink-600 mt-12 pb-2 border-b border-gray-200'>Most Popular</h4>
          
          <div className=' mt-8 flex justify-evenly mb-8'>
            {/* Cards go here */}
            <div className='card'>
              <img src= {Pic2} alt=""  className='max-w-xs'/>
              <div className=' m-4'>
                <span className=' text-pink-600 font-semibold '>5 Bean Chilly Stew</span>
                <span className=' font-bold text-pink-600 text-sm block'>Recipe by Mario</span>
              </div>
              <div className=' badge'>
                  <span>25 mins</span>
              </div>
            </div>
            
             {/* Cards go here */}
             <div className=' card'>
              <img src= {Pic3} alt=""  className='max-w-xs'/>
              <div className=' m-4'>
                <span className=' text-pink-600 font-semibold '>5 Bean Chilly Stew</span>
                <span className=' font-bold text-pink-600 text-sm block'>Recipe by Mario</span>
              </div>
              <div className=' badge'>
                  <span>25 mins</span>
              </div>
            </div>

             {/* Cards go here */}
             <div className=' card'>
              <img src= {Pic2} alt=""  className='max-w-xs'/>
              <div className=' m-4'>
                <span className=' text-pink-600 font-semibold '>5 Bean Chilly Stew</span>
                <span className=' font-bold text-pink-600 text-sm block'>Recipe by Mario</span>
              </div>
              <div className=' badge'>
                  <span>25 mins</span>
              </div>
            </div>

          </div>


          <div className=' flex justify-center'>
            <div className=' bg-pink-600 rounded-lg p-4 text-white font-bold drop-shadow-md'>Load More</div>
          </div>
        </div>



      </main>
    </div>
  );
}

export default App;

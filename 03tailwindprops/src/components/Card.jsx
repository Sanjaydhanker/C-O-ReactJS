import React from 'react'

function Card(props) {
  return (
     <div className="max-w-sm bg-white mx-auto mb-2 rounded-lg overflow-hidden border items-center sm:max-w-xl">
      <div className=" sm:flex">
        <div>
          <img className="w-full h-48  " src="https://images.pexels.com/photos/2325447/pexels-photo-2325447.jpeg?_gl=1*xy4h84*_ga*ODIxNzMyMjQ3LjE3MjU5NzAwOTk.*_ga_8JE65Q40S6*czE3NTQxMjUyNjIkbzEwJGcxJHQxNzU0MTI1MjgyJGo0MCRsMCRoMA.." alt="" />
          
        </div>

        <div className="p-3">
          <h1 className="font-bold text-lg text-center">
          {props.name} 
          </h1>
          <p className="text-justify">
            This is a normal card for practice and more
          </p>
          <button className='w-full text-center items-center p-2 mt-4 font-bold rounded-md bg-indigo-500 text-white hover:bg-indigo-800'>
            {props.btnText}
          </button>
        </div>
      </div>
    </div>
  )
}

export default Card
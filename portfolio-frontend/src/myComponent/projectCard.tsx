import {projectCardDetails} from "../myComponent/data"

const projectCard = () => {
  return (
    <div>
        {projectCardDetails.map((item)=>{
          return(
            <div key={item.id}>
              <div className='border px-5 py-6 flex flex-col gap-3 rounded-r rounded-b-lg bg-white' data-aos="fade-left">
                <h1>{item.head}</h1>
                <p>{item.parag}</p>
                <button className="px-4 py-2 curosr-pointer bg-green-900 text-white">{item.code}</button>
                <button className="px-4 py-2 curosr-pointer bg-green-400 text-white">{item.live}</button>
              </div>
            </div>
          )
        })}
    </div>
  )
}

export default projectCard
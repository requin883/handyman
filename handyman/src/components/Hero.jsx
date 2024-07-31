import heroBgImg from '../assets/reno.webp'

export const Hero = () => {
  return (
    <div className='w-screen max-h-[800px] bg-black relative'>
      <img src={heroBgImg} alt="" className='max-h-[800px] w-screen opacity-25' />
      <div className='absolute inset-x-1/3 inset-y-1/3 text-white grid place-items-center gap-4'>
        <h2 className='text-3xl md:text-8xl text-center font-bold'>Handyman Services</h2>
        <p className='text-sm md:text-md'>Where we solve your challenges, allowing you to unwind and find tranquility</p>
        <button className='bg-yellow-400 p-4 rounded-lg text-black font-bold'>Get a Quote</button>
      </div>
    </div>
  )
}
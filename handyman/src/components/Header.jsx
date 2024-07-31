import search from '../assets/search.svg'

export const Header = () => {
  return (
    <header className="grid grid-flow-col space-between p-8 border-b-2 border-yellow-400">
      <h1>Handyman Services</h1>
      <form action="" className="place-self-center relative">
        <input type="text" className="bg-gray-200 rounded-sm w-full"/>
          <button type="submit" className='absolute w-6 l-50'><img src={search} alt="" /></button>
      </form>
      <nav>
        <ul className="grid grid-flow-col gap-4">
          <li><a href="">Home</a></li>
          <li><a href="">Services</a></li>
          <li><a href="">About</a></li>
          <li><a href="">Contact</a></li>
          <li><a href="">Login</a></li>
        </ul>
      </nav>
    </header>
  )
}
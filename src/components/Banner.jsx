import logo from '@/assets/logo.jpeg';
export const Banner = () => {
  return (
    <div className="w-60 h-14 flex items-center justify-center my-5">
      <img src={logo} alt="logo" className='h-14 mx-2' />
      <h1 className="text-primary-default contents text-md font-bold select-none">mercuri</h1>
      <h1 className='text-gray-400 text-md font-bold select-none'>cash</h1>
    </div>
  )
}
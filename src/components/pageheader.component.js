export function PageHeader({plainText, gradientText}) {
  return ( 
    <>
      <h1 className="flex items-center justify-center leading-snug text-6xl font-extrabold text-gray-900 dark:text-white p-6">{plainText}&nbsp;<span className="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400">{gradientText}</span></h1>
    </>

  )
}; 

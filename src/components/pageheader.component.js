export function PageHeader({plainText, gradientText, breadcrumbs}) {


  return ( 
    <>
    <h1 className="flex items-center justify-center leading-snug text-6xl font-extrabold text-gray-900 dark:text-white p-6">{plainText}&nbsp;<span className="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400">{gradientText}</span></h1>
    <div className="flex items-center justify-center mb-4 font-extrabold text-gray-900 dark:text-white">
      <h3>{breadcrumbs}</h3>
    </div>
    </>

  )
}; 

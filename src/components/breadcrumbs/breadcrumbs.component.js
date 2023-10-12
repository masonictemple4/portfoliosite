import { useRouter } from 'next/router';
import Link from 'next/link';

const BreadCrumbs = () => {
  const router = useRouter();

  const pathSegments = router.asPath.split('/').filter((x) => x);

  const detailPath = "detail?path="

    return (
      <nav className="w-2/3 max-w-2/3 mx-auto">
      <ul className="flex">
      {pathSegments.map((segment, index) => (
        <li key={index}>
        {index === pathSegments.length - 1 ? (
          <span>{segment} /</span> 
        ) : (
          <Link href={`/${pathSegments.slice(0, index + 1).join('/')}`}>
          <span className="text-link-blue hover:underline">{segment}</span>
          </Link>
        )}
        {index !== pathSegments.length - 1 && (
          <span className="mx-2">/</span>  // Delimiter
        )}
        </li>
      ))}
      </ul>
      </nav>
    )

      
}

export default BreadCrumbs;

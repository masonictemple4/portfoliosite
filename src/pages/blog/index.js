import Feed from '@/components/blog/feed.component.js';
import { BASE_API_URL } from '@/utils/globals';


export async function getServerSideProps(context) {
  const response = await fetch(`${BASE_API_URL}/blogs`);
  const data = await response.json();
  

  return {
    props: {
      blogs: data,
    },
  };
}

export default function Blog({ blogs }) {

  return (
    <Feed blogs={blogs} />
  )
}

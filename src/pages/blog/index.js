import Feed from '@/components/blog/feed.component.js';
import MarkdownLayout from './layout';
import axios from 'axios';


export async function getServerSideProps(context) {
  const response = await fetch('http://localhost:8080/blog');
  const data = await response.json();
  

  return {
    props: {
      blogs: data,
    },
  };
}

export default function Markdown({ blogs }) {

  return (
    <Feed blogs={blogs} />
  )
}

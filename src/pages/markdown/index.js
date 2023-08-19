import Feed from '@/components/markdown/feed.component.js';
import MarkdownLayout from './layout';


export async function getServerSideProps(context) {
    const response = await fetch('http://localhost:8080/notes/', {
      method: 'GET',
    });

    const data = await response.json();

  return {
    props: {
      notes: data.files,
    },
  };
}

export default function Markdown({ notes }) {

  return (
    <Feed notes={notes} />
  )
}

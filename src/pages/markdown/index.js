import Feed from '@/components/markdown/feed.component.js';


export async function getServerSideProps(context) {
  const { path } = context.query;
    const response = await fetch('http://localhost:8080/notes/', {
      method: 'GET',
    });

    const data = await response.json();

  return {
    props: {
      notes: data.files,
      path: path,
    },
  };
}

export default function Markdown({ notes }) {

  return (
    <>
      <Feed notes={notes} />
    </>
  )
}

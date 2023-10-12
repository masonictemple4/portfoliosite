import BlogCard from '@/components/blog/blogcard.component';


export default function Feed({ ...props  }) {
  const { blogs } = props;


   return (
     <ul role="list" className="flex flex-col items-center w-full min-w-full max-w-full">
       {blogs.map((blog) => {
         return (
           <BlogCard blog={blog} key={blog.id} />
         )
       })}
     </ul>
   )

}

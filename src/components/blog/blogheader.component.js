import Image from 'next/image';
import LineSeparator from '../lineseparator.component';

export default function BlogDetailHeader({ blog }) {

return (
            <header className="mb-4 lg:mb-6 not-format">
              <LineSeparator />
  <h1 className="mb-4 text-3xl font-extrabold leading-tight text-gray-900 lg:mb-6 lg:text-4xl dark:text-white">{blog.subtitle}</h1>
  <p className="text-base font-medium leading-6 text-gray-500 dark:text-gray-400">{blog.description}</p>
              <address className="flex items-center my-6 not-italic">
                  <div className="inline-flex items-center mr-3 text-sm text-gray-900 dark:text-white">
                      <Image className="mr-4 w-16 h-16 rounded-full" src={blog.authors ? blog.authors[0].profilepicture : `/profilePicture.jpg`} alt="Jese Leos" width={'100'} height={'100'} />
                      <div>
  
                          {blog.authors ? blog.authors.map((author) => {
                            return (
                              <span href="" rel="author" className="text-xl font-bold text-gray-900 dark:text-white" key={author.username}>{author.username}</span>
                            )
                          }) : null}
  {/*<p className="text-base text-gray-500 dark:text-gray-400">{'something cool'}</p>*/}
                          <p className="text-base text-gray-500 dark:text-gray-400">
                            {blog.createdat
                              ? new Date(blog.createdat).toLocaleDateString('en-US', {
                                hour: '2-digit',
                                minute: '2-digit',
                                hour12: true,
                              })
                              : blog.createdat
                            }
                        </p>
                      </div>

                  </div>
              </address>
  <div className="flex flex-row flex-wrap items-center my-4">
  {blog.tags ? blog.tags.map((tag) => {
    return (
      <button type="button" className="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-full text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700" key={tag.name}>{tag.name}</button>
    )
  }) : null}
  </div>
  <LineSeparator />
          </header>
)

}

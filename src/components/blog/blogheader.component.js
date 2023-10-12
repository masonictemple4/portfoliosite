import Image from 'next/image';

export default function BlogDetailHeader({ blog }) {

return (
            <header class="mb-4 lg:mb-6 not-format">
  <hr class="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700" />
              <address class="flex items-center mb-6 not-italic">
                  <div class="inline-flex items-center mr-3 text-sm text-gray-900 dark:text-white">
                      <Image class="mr-4 w-16 h-16 rounded-full" src={blog.authors ? blog.authors[0].profilepicture : `/profilePicture.jpg`} alt="Jese Leos" width={'100'} height={'100'} />
                      <div>
  
                          {blog.authors ? blog.authors.map((author) => {
                            return (
                              <span href="" rel="author" class="text-xl font-bold text-gray-900 dark:text-white">{author.username}</span>
                            )
                          }) : null}
  {/*<p class="text-base text-gray-500 dark:text-gray-400">{'something cool'}</p>*/}
                          <p class="text-base text-gray-500 dark:text-gray-400">
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
  <div class="flex flex-row items-center">
  {blog.tags ? blog.tags.map((tag) => {
    return (
      <button type="button" class="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-full text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700">{tag.name}</button>
    )
  }) : null}
  </div>
  <hr class="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700" />
          </header>
)

}

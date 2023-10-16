// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
//
//
import { BASE_API_URL } from '@/utils/globals';

const blogList = async (req, res) => {

  const { method, body } = req

  let response
  switch (method) {
    case 'GET':
      const url = BASE_API_URL + '/blog'
      response = await fetch(url, {
        method,
        headers: {
          'Content-Type': 'application/json'
        },
      });

      res.status(response.status).json({ data: response.data })
      break
    default:
      res.setHeader('Allow', ['GET', 'POST'])
      res.status(405).end(`Method ${method} Not Allowed`)
      break

  }
}

export default blogList

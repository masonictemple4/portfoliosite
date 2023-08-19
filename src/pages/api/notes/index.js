// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
//
//
import { getSession } from 'next-auth/react'
import { BASE_API_URL } from '@/utils/globals';

const notesList = async (req, res) => {
  // const session = await getSession({ req })

  const { method, body } = req

  let response
  switch (method) {
    case 'GET':
      const url = BASE_API_URL + '/notes/'
      console.log('url:', url)
      response = await fetch(url, {
        method,
        headers: {
          'Content-Type': 'application/json'
        },
      });

      console.log('response GET:', response)
      res.status(response.status).json({ data: response.data })
      break
    default:
      console.log('response DEFAULT:', response)
      res.setHeader('Allow', ['GET', 'POST'])
      res.status(405).end(`Method ${method} Not Allowed`)
      break

  }
}

export default notesList
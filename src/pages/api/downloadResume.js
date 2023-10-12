import { PDF_RESUME_URL } from "@/utils/globals";

export default async (req, res) => {
  const { method, body } = req



  let response
  switch (method) {
    case 'GET':
      const url = PDF_RESUME_URL;
      response = await fetch(url, {
        method,
        headers: {
          'Content-Type': 'application/pdf'
        },
      });

      const blobData = await response.arrayBuffer();
      
      console.log('blobData', blobData);

      // Set headers for file download
      res.setHeader('Content-Type', 'application/json');

      // Send the blob as the response
      res.status(response.status).json({ buff: blobData});
      break
    default:
      res.setHeader('Allow', ['GET'])
      res.status(405).end(`Method ${method} Not Allowed`)
      break

  }

}

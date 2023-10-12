# Masonictemple4 Portfolio
This is the active repository used to maintain [masonictemple4.com](https://masonictemple4.com/)



### Notes: 
If you notice blog updates or detail page (especially with resumes) check the object cache settings in GCP they might need updated for a better experience.

You can view/update meta properties of an object like so:
```bash
# View 
$ gcloud storage objects describe gs://BUCKET_NAME/OBJECT_NAME


# update
gsutil setmeta -h "METADATA_KEY:METADATA_VALUE " gs://BUCKET_NAME/OBJECT_NAME

```

To modify cache-control set `Cache-control: no-store` for an object not to ever
be cached.

You can also set `public with max-age`


For more [caching](https://cloud.google.com/storage/docs/caching) and [metadata updates](
https://cloud.google.com/storage/docs/viewing-editing-metadata#gsutil_1)

There are also SSR caching options: [here](https://github.com/vercel/next.js/blob/canary/examples/ssr-caching/pages/index.tsx) check out the next js docs as well.











This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.js`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.js`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

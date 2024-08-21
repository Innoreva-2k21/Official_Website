
import { createClient } from "next-sanity";

import imageUrlBuilder from '@sanity/image-url'

export const client = createClient({
  projectId: `${process.env.NEXT_PUBLIC_SANITY_STUDIO_PROJECT_ID}`,

  dataset: 'production',
  useCdn: false, // set to `false` to bypass the edge cache
  apiVersion: '2024-02-02', // use current date (YYYY-MM-DD) to target the latest API version
  token: `${process.env.NEXT_PUBLIC_SANITY_STUDIO_SECRET_TOKEN}`,
})

export const builder = imageUrlBuilder(client)


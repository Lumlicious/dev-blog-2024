/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: [
          'images.unsplash.com', 
          'prod-files-secure.s3.us-west-2.amazonaws.com', 
          'm.media-amazon.com',
          'i.postimg.cc'
        ],
      }
}

module.exports = nextConfig

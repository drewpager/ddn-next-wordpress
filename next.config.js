module.exports = {
  images: {
    domains: ['res.cloudinary.com', `${process.env.WORDPRESS_URL}`, 'secure.gravatar.com'],
    
  },
  env: {
    WORDPRESS_API_URL: 'https://dailydosenow.com/graphql'
  }
}
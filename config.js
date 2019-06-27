const path = require('path')

module.exports = {
  debug: process.env.NODE_ENV !== 'production',
  host: process.env.HOST || '127.0.0.1',   // ip
  port: process.env.PORT || 8080,
  publicURL: process.env.PUBLIC_URL,
  uploadDir: process.env.UPLOAD_DIR || path.resolve(__dirname, 'upload'),
}

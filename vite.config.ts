import { defineConfig } from 'vite'

// https://vitejs.dev/config/
import { loadEnv } from 'vite'
import { createHtmlPlugin } from 'vite-plugin-html'

export default ({ mode }) => {
  const env = loadEnv(mode, process.cwd())
  return {
    plugins: [
      createHtmlPlugin({
        minify: true,
        inject: {
          data: {
            title: env.VITE_SITE_TITLE,
            domain: env.VITE_DOMAIN_NAME,
            owner: env.VITE_OWNER_NAME,
          }
        }
      }),
    ],
  }
}
import { useTheme } from '@mui/system'

import BlogInner from './BlogInner'
import GetInTouch from '../GetInTouch'

function Blog () {
  const theme = useTheme()

  return (
    <div
      className={
        theme.palette.mode === 'light'
          ? 'blog_blog__O3kB_ false'
          : 'blog_blog__O3kB_ blog_dark__o_cHa'
      }
    >
      <meta charSet='utf-8' />
      <BlogInner />
      <GetInTouch />
    </div>
  )
}

export default Blog

import { BlogPosts } from 'app/components/posts'
import Image from 'next/image'

export default function Page() {
  return (
    <section>
      <h1 className="mb-8 text-2xl font-semibold tracking-tighter">Title</h1>
      <p className="mb-4">Hello</p>

      <Image
        src="/og"
        width={640}
        height={480}
        priority
        alt=""
      />
      <div className="my-8">
        <BlogPosts />
      </div>
    </section>
  )
}

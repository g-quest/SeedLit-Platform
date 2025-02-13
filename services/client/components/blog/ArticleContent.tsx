import React from 'react'
import Image from 'next/image'

import { BLOCKS, INLINES } from '@contentful/rich-text-types'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'

export default function BlogArticleContent({ article }) {
  const { content, author, publishingDate, title, shortDescription } =
    article.items[0].fields

  const date = new Date(publishingDate).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  })

  // console.log('CONTENT: ', content)

  const options = {
    renderText: (text) =>
      text
        .split('\n')
        .flatMap((textSegment, index) => [
          index > 0 && <br key={index} />,
          textSegment,
        ]),

    renderNode: {
      [INLINES.HYPERLINK]: (node, children) => {
        return (
          <a
            href={node.data.uri}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500"
          >
            {children}
          </a>
        )
      },
      [BLOCKS.PARAGRAPH]: (node, children) => {
        const firstChild = node.content[0]

        // Detect if the paragraph contains raw HTML embedded in a 'text' node
        if (
          firstChild &&
          firstChild.nodeType === 'text' &&
          firstChild.value.includes('<a')
        ) {
          // Render the raw HTML content safely
          return <div dangerouslySetInnerHTML={{ __html: firstChild.value }} />
        }

        // Default rendering for regular paragraphs
        return <p className="mb-4">{children}</p>
      },

      [BLOCKS.HEADING_1]: (node, children) => (
        <h1 className="mb-4">{children}</h1>
      ),
      [BLOCKS.HEADING_2]: (node, children) => (
        <h2 className="mb-4">{children}</h2>
      ),
      [BLOCKS.HEADING_3]: (node, children) => (
        <h3 className="mb-4">{children}</h3>
      ),
      [BLOCKS.HEADING_4]: (node, children) => (
        <h4 className="mb-4">{children}</h4>
      ),
      [BLOCKS.HEADING_5]: (node, children) => (
        <h5 className="mb-4">{children}</h5>
      ),
      [BLOCKS.HEADING_6]: (node, children) => (
        <h6 className="mb-4">{children}</h6>
      ),
      [BLOCKS.OL_LIST]: (node, children: any) => (
        <ol className="list-decimal pl-2">
          {React.Children.map(children, (child, index) => (
            <li key={index} className="flex gap-2">
              <span>{index + 1}.</span>
              {child}
            </li>
          ))}
        </ol>
      ),
      [BLOCKS.UL_LIST]: (node, children: any) => (
        <ul className="list-none pl-2">
          {React.Children.map(children, (child, index) => (
            <li key={index} className="flex gap-2">
              <p>&#8226;</p>
              {child}
            </li>
          ))}
        </ul>
      ),
      [BLOCKS.LIST_ITEM]: (node, children) => <>{children}</>,
      [BLOCKS.EMBEDDED_ASSET]: (node) => {
        const { url, title, contentType } = node.data.target.fields.file
        const shortDescription = node.data.target.fields.description

        if (contentType.includes('image')) {
          return (
            <Image
              src={`${url}?fm=avif&w=1040`}
              fill
              sizes="(max-width: 600px) 480px,
                   (max-width: 900px) 800px,
                   (max-width: 1200px) 1200px,
                   1600px"
              alt={shortDescription || title}
              className="w-full h-auto"
            />
          )
        } else if (contentType.includes('video')) {
          return (
            <video controls className="w-full h-auto">
              <source src={url} type={contentType} />
            </video>
          )
        }
        return <p>Unsupported format</p>
      },
    },
  }

  return (
    <div className="bg-white rounded-xl p-6 md:p-12 shadow-xl">
      <div className="text-gray-500 text-sm mb-4">
        <p className="mb-1">{date}</p>
        {author && <p>By {author}</p>}
      </div>
      <div className=" ">{documentToReactComponents(content, options)}</div>
    </div>
  )
}

import React from 'react'
import Image from 'next/image'

import { BLOCKS, INLINES, Document } from '@contentful/rich-text-types'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'
import { getLegalDocument } from '@/actions/contentful'

export default async function Terms() {
  const legalDocument = await getLegalDocument('terms-and-conditions')

  //   console.log('LEGAL DOCUMENT: ', legalDocument)

  const { name, effectiveDate, lastUpdated, content } =
    legalDocument.items[0].fields

  const effectiveDateFormatted = new Date(
    effectiveDate as string,
  ).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })

  const lastUpdatedFormatted = new Date(
    lastUpdated as string,
  ).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
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
      [BLOCKS.HR]: () => {
        return <hr className="my-4" />
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
        <h2 className="mb-4 text-[1.75rem] md:text-[2rem]">{children}</h2>
      ),
      [BLOCKS.HEADING_3]: (node, children) => (
        <h3 className="mb-4 text-[1.25rem] md:text-2xl">{children}</h3>
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
        <ol className="list-decimal pl-2 [&_p]:mb-2">
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
              src={url}
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
    <div className="px-0 md:px-6">
      <div className="max-w-[1200px] mx-auto px-6 py-12 md:my-12 bg-white md:rounded-xl md:shadow-xl">
        <div className="mb-8">
          <h1 className="md:text-5xl text-4xl text-center text-tertiary">
            SeedLit {name as string}
          </h1>
        </div>
        <div className="text-gray-500 text-sm mb-4">
          <p className="mb-1">Effective Date: {effectiveDateFormatted}</p>
          <p className="mb-1">Last Updated: {lastUpdatedFormatted}</p>
        </div>
        <div>{documentToReactComponents(content as Document, options)}</div>
      </div>
    </div>
  )
}

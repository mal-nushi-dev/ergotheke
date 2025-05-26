import { ImageResponse } from 'next/og'

/**
 * Handles GET requests to generate a dynamic Open Graph image.
 * The image displays a title, which can be customized via the 'title' query parameter.
 *
 * @param request - The incoming HTTP request object.
 * @returns {ImageResponse} A dynamically generated image for Open Graph/social sharing.
 */
export function GET(request: Request): ImageResponse {
  let url = new URL(request.url)
  let title = url.searchParams.get('title') || 'Mal Nushi'

  // Return a dynamically generated image with the specified title
  return new ImageResponse(
    (
      <div tw="flex flex-col w-full h-full items-center justify-center bg-white">
        <div tw="flex flex-col md:flex-row w-full py-12 px-4 md:items-center justify-between p-8">
          <h2 tw="flex flex-col text-4xl font-bold tracking-tight text-left">
            {title}
          </h2>
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 630,
    }
  )
}

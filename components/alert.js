import Container from './container'
import cn from 'classnames'
import { EXAMPLE_PATH } from '../lib/constants'

export default function Alert({ preview }) {
  return (
    <div
      className={cn('border-b', {
        'bg-accent-7 border-accent-7 text-white': preview,
        'bg-accent-1 border-accent-2': !preview,
      })}
    >
      <Container>
        <div className="py-2 text-center text-sm">
          {preview ? (
            <>
              This page is a preview.{' '}
              <a
                href="/api/exit-preview"
                className="underline hover:text-cyan duration-200 transition-colors"
              >
                Click here
              </a>{' '}
              to exit preview mode.
            </>
          ) : (
            <>
              We are now on Patreon! {' '}
              <a
                href={`https://patreon.com/dailydosenow/`}
                target="_blank"
                className="underline hover:text-success duration-200 transition-colors"
              >
                Become a patron
              </a>
              .
            </>
          )}
        </div>
      </Container>
    </div>
  )
}

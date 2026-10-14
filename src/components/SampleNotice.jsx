import { useEffect, useState } from 'react';
import { XMarkIcon } from '@heroicons/react/24/outline';
import { GITHUB_REPO_URL } from '../config.js';
import { usePresence } from '../utils/usePresence.js';

const SHOW_MS = 5000;

/**
 * The demo has no repository, so links to it don't go anywhere. Any click on
 * a link into GITHUB_REPO_URL (header icon, footer, Feedback, About, the
 * Report Issue flag) is caught here and shows this note instead, in the same
 * style as admin mode's undo snackbar. It stays while the mouse is over it,
 * and Escape or the X closes it.
 */
export default function SampleNotice() {
  const [open, setOpen] = useState(false);
  const [hovered, setHovered] = useState(false);
  const { mounted, visible } = usePresence(open, 200);

  useEffect(() => {
    function onClick(event) {
      const link = event.target instanceof Element ? event.target.closest('a[href]') : null;
      if (!link || !link.href.startsWith(GITHUB_REPO_URL)) return;
      event.preventDefault();
      setOpen(true);
    }
    document.addEventListener('click', onClick);
    return () => document.removeEventListener('click', onClick);
  }, []);

  useEffect(() => {
    if (!open || hovered) return undefined;
    const timer = setTimeout(() => setOpen(false), SHOW_MS);
    return () => clearTimeout(timer);
  }, [open, hovered]);

  const message = 'This is a sample link: the demo has no GitHub project, issues or contributing guide.';

  return (
    <>
      <div role="status" aria-live="polite" className="sr-only">
        {open ? message : ''}
      </div>
      {mounted && (
        <div
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
          onKeyDown={(event) => {
            if (event.key !== 'Escape') return;
            event.preventDefault();
            setOpen(false);
          }}
          className={`fixed bottom-4 left-1/2 z-40 flex w-max max-w-[calc(100vw-2rem)] -translate-x-1/2 items-center
            gap-3 rounded-lg bg-gray-900 py-2 pr-2 pl-4 text-sm text-white shadow-lg transition duration-200 ease-smooth
            [--focus-gap:var(--color-gray-900)] motion-reduce:transition-none dark:border dark:border-line-strong
            ${visible ? 'translate-y-0 opacity-100' : 'translate-y-2 opacity-0'}`}
        >
          <p>{message}</p>
          <button
            type="button"
            onClick={() => setOpen(false)}
            aria-label="Dismiss"
            className="rounded-md p-1 text-white/70 hover:bg-white/10 hover:text-white focus-visible:outline-white"
          >
            <XMarkIcon className="size-5" aria-hidden="true" />
          </button>
        </div>
      )}
    </>
  );
}

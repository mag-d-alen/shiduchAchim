import { twMerge } from 'tailwind-merge'
import { input } from '~/components/electrons/input'

export function TextArea(props: React.HTMLProps<HTMLTextAreaElement>) {
  return <textarea className={twMerge(input(), 'resize-none rounded-xl')} {...props} />
}

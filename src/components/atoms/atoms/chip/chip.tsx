import clsx from 'clsx'
import { isFunction } from 'lodash'
import { FormControl } from '../form-control/form-control'
import { Icon } from '../icon/icon'

export function Chip({ children, onDelete }: { children: React.ReactNode; onDelete?: () => void }) {
  const { disabled } = FormControl.useFieldsetContext()

  return (
    <span
      className={clsx(
        'inline-flex items-center overflow-hidden rounded-full text-sm',
        disabled ? 'bg-grey-50 text-grey-400' : 'bg-sky-100 text-slate-700'
      )}
    >
      <span className={clsx('py-1 font-medium', onDelete ? 'pl-1 pr-2' : 'px-2')}>{children}</span>
      {onDelete && isFunction(onDelete) && (
        <button
          className="h-full pl-2 pr-1 text-slate-600 hover:text-slate-900 disabled:cursor-not-allowed disabled:text-grey-400 disabled:hover:text-grey-400"
          disabled={disabled}
          onClick={onDelete}
        >
          <Icon className="h-3 w-3" name="xmark" />
        </button>
      )}
    </span>
  )
}

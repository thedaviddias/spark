import { cx } from 'class-variance-authority'
import { ReactNode } from 'react'

import { useDropdownContext } from './DropdownContext'

export interface ValueProps {
  children?: ReactNode
  className?: string
  placeholder: string
}

export const Value = ({ children, className, placeholder }: ValueProps) => {
  const { selectedItem, multiple, selectedItems } = useDropdownContext()

  const hasSelectedItems = !!(multiple ? selectedItems.length : selectedItem)
  const text = multiple ? selectedItems[0]?.text : selectedItem?.text
  const suffix = selectedItems.length > 1 ? `, +${selectedItems.length - 1}` : ''

  return (
    <span className={cx('flex shrink items-center text-left', className)}>
      <span className="line-clamp-1 flex-1 overflow-hidden text-ellipsis break-all">
        {!hasSelectedItems ? placeholder : children || text}
      </span>
      {suffix && <span>{suffix}</span>}
    </span>
  )
}

Value.id = 'Value'
Value.displayName = 'Dropdown.Value'

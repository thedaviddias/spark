import type { FC } from 'react'

import { Dropdown as Root, type DropdownProps } from './Dropdown'
import { DropdownProvider, useDropdownContext } from './DropdownContext'
import { Divider } from './DropdownDivider'
import { Group } from './DropdownGroup'
import { Item } from './DropdownItem'
import { ItemIndicator } from './DropdownItemIndicator'
import { Items } from './DropdownItems'
import { ItemText } from './DropdownItemText'
import { Label } from './DropdownLabel'
import { LeadingIcon } from './DropdownLeadingIcon'
import { Popover } from './DropdownPopover'
import { Trigger } from './DropdownTrigger'
import { Value } from './DropdownValue'

export { useDropdownContext, DropdownProvider }

export const Dropdown: FC<DropdownProps> & {
  Group: typeof Group
  Item: typeof Item
  Items: typeof Items
  ItemText: typeof ItemText
  ItemIndicator: typeof ItemIndicator
  Label: typeof Label
  Popover: typeof Popover
  Divider: typeof Divider
  Trigger: typeof Trigger
  Value: typeof Value
  LeadingIcon: typeof LeadingIcon
} = Object.assign(Root, {
  Group,
  Item,
  Items,
  ItemText,
  ItemIndicator,
  Label,
  Popover,
  Divider,
  Trigger,
  Value,
  LeadingIcon,
})

Dropdown.displayName = 'Dropdown'
Group.displayName = 'Dropdown.Group'
Items.displayName = 'Dropdown.Items'
Item.displayName = 'Dropdown.Item'
ItemText.displayName = 'Dropdown.ItemText'
ItemIndicator.displayName = 'Dropdown.ItemIndicator'
Label.displayName = 'Dropdown.Label'
Popover.displayName = 'Dropdown.Popover'
Divider.displayName = 'Dropdown.Divider'
Trigger.displayName = 'Dropdown.Trigger'
Value.displayName = 'Dropdown.Value'
LeadingIcon.displayName = 'Dropdown.LeadingIcon'

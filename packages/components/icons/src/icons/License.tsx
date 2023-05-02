import React, { type Ref } from 'react'

import { IconProps } from '../Types'

export const License = React.forwardRef(
  (
    { title, fill = 'currentColor', stroke = 'none', ...props }: IconProps,
    ref: Ref<SVGSVGElement>
  ) => (
    <svg
      ref={ref}
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      {...{ ...(title && { 'data-title': title }), fill, stroke, ...props }}
      dangerouslySetInnerHTML={{
        __html:
          (title === undefined ? '' : `<title>${title}</title>`) +
          '<path fill-rule="evenodd" clip-rule="evenodd" d="M18.9762 7.19995C20.0939 7.19995 21 8.06094 21 9.12303V15.2769C21 16.339 20.0939 17.2 18.9762 17.2H6.02381C4.90609 17.2 4 16.339 4 15.2769V9.12303C4 8.06094 4.90609 7.19995 6.02381 7.19995H18.9762ZM19.0072 7.96918H5.99282C5.31898 7.96918 4.77273 8.48578 4.77273 9.12303V15.2769C4.77273 15.9141 5.31898 16.4307 5.99282 16.4307H19.0072C19.681 16.4307 20.2273 15.9141 20.2273 15.2769V9.12303C20.2273 8.48578 19.681 7.96918 19.0072 7.96918ZM9.72591 10.2769C9.98858 10.2799 10.2248 10.4367 10.3286 10.6769L10.545 11.5L11.055 11.3923C11.2633 11.3541 11.4646 11.4866 11.5109 11.6923C11.5314 11.7922 11.5112 11.8962 11.4547 11.9813C11.3982 12.0664 11.31 12.1257 11.2095 12.1461L11.1207 12.1637C11.2335 12.3189 11.2976 12.5057 11.3023 12.7V13.7769C11.3033 13.9751 11.1527 14.1417 10.9545 14.1615L10.8305 14.1612L10.8309 14.5076C10.8268 14.7183 10.6562 14.8882 10.4445 14.8923C10.2312 14.8923 10.0582 14.7201 10.0582 14.5076L10.0578 14.1612H7.6237L7.62409 14.5076C7.62409 14.7201 7.45111 14.8923 7.23773 14.8923C7.02434 14.8923 6.85136 14.7201 6.85136 14.5076L6.85097 14.1605L6.78964 14.1553C6.6094 14.1227 6.47273 13.9657 6.47273 13.7769V12.7C6.47779 12.4919 6.54951 12.3007 6.66726 12.1464L6.635 12.1384C6.52948 12.1199 6.43607 12.0594 6.3763 11.9709C6.31653 11.8824 6.29555 11.7734 6.31818 11.6692C6.34364 11.5701 6.40767 11.4853 6.49611 11.4333C6.58456 11.3813 6.69014 11.3666 6.78955 11.3923L7.19136 11.4923L7.4 10.723C7.49177 10.4499 7.75221 10.2688 8.04136 10.2769H9.72591ZM17.5227 13.3538C17.7361 13.3538 17.9091 13.526 17.9091 13.7384C17.9091 13.9272 17.7724 14.0843 17.5922 14.1168L17.5227 14.123H12.8864C12.673 14.123 12.5 13.9508 12.5 13.7384C12.5 13.5496 12.6367 13.3926 12.8169 13.36L12.8864 13.3538H17.5227ZM10.3209 12.5307C10.2852 12.5382 10.2484 12.5382 10.2127 12.5307L7.53867 12.5317C7.50827 12.5371 7.47696 12.5368 7.44636 12.5307C7.44636 12.5307 7.24545 12.5307 7.24545 12.6923L7.28215 13.3574L7.30718 13.36C7.34126 13.3662 7.37379 13.3768 7.40412 13.3912H10.2781C10.3285 13.3672 10.385 13.3538 10.4445 13.3538C10.4739 13.3538 10.5025 13.3571 10.53 13.3632L10.5295 12.7C10.5295 12.5629 10.3462 12.5408 10.3042 12.5323L10.3209 12.5307ZM19.0682 11.8153C19.2816 11.8153 19.4545 11.9875 19.4545 12.2C19.4545 12.3888 19.3179 12.5458 19.1376 12.5784L19.0682 12.5846H12.8864C12.673 12.5846 12.5 12.4124 12.5 12.2C12.5 12.0111 12.6367 11.8541 12.8169 11.8215L12.8864 11.8153H19.0682ZM9.62545 11.0461H8.11091L7.96138 11.7689H9.81824L9.62545 11.0461ZM19.0682 10.2769C19.2816 10.2769 19.4545 10.4491 19.4545 10.6615C19.4545 10.8503 19.3179 11.0073 19.1376 11.0399L19.0682 11.0461H12.8864C12.673 11.0461 12.5 10.8739 12.5 10.6615C12.5 10.4727 12.6367 10.3156 12.8169 10.2831L12.8864 10.2769H19.0682Z"/>',
      }}
    />
  )
)

License.displayName = 'License'

export const tags = ['license', 'criteria', 'automobile']

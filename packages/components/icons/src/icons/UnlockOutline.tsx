import { IconProps } from '../Types'

export const UnlockOutline = ({
  title,
  fill = 'currentColor',
  stroke = 'none',
  ...props
}: IconProps) => (
  <svg
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    {...{ ...(title && { 'data-title': title }), fill, stroke, ...props }}
    dangerouslySetInnerHTML={{
      __html:
        (title === undefined ? '' : `<title>${title}</title>`) +
        '<path d="M15.5928 21.9998H4.40715C3.07733 21.9998 2 20.9332 2 19.6166V11.3088C2 10.1005 2.91741 9.09223 4.09574 8.94224V7.84231C4.09574 6.28407 4.71015 4.80917 5.82956 3.70924C6.94897 2.60097 8.42188 1.96768 10.0295 2.00101C10.7954 2.00101 11.5529 2.151 12.2683 2.44265C12.9921 2.74263 13.6318 3.17594 14.1789 3.7259C14.566 4.11754 14.566 4.75084 14.162 5.14248C13.7664 5.52579 13.1268 5.52579 12.7312 5.12581C12.3693 4.7675 11.9569 4.48419 11.4855 4.29253C11.0142 4.10088 10.526 4.01755 10.0042 4.00088C8.97738 4.00088 7.9758 4.40919 7.25197 5.12581C6.52814 5.84244 6.11573 6.81737 6.11573 7.84231V8.91724H15.5928C16.9227 8.91724 18 9.98384 18 11.3004V19.6082C18 20.9248 16.9227 21.9914 15.5928 21.9914V21.9998ZM4.40715 10.9255C4.19674 10.9255 4.01999 11.1004 4.01999 11.3088V19.6166C4.01999 19.8249 4.19674 19.9999 4.40715 19.9999H15.5928C15.8033 19.9999 15.98 19.8249 15.98 19.6166V11.3088C15.98 11.1004 15.8033 10.9255 15.5928 10.9255H4.40715ZM9.91163 17.775C8.80063 17.775 7.89164 16.8751 7.89164 15.7751C7.89164 14.6752 8.80063 13.7753 9.91163 13.7753C11.0226 13.7753 11.9316 14.6752 11.9316 15.7751C11.9316 16.8751 11.0226 17.775 9.91163 17.775Z"/>',
    }}
  />
)

export const tags = ['unlock-outline', 'security']

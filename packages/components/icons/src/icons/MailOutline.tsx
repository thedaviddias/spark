import { IconProps } from '../Types'

export const MailOutline = ({
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
        '<path d="M21.9917 13.5428V13.1523C21.9917 11.6584 21.9917 10.0202 21.9917 8.06795V8.05098C21.8917 6.24302 20.4173 4.80005 18.6181 4.80005H5.38192C3.51603 4.80005 2 6.34488 2 8.2462V17.3539C2 19.2552 3.51603 20.8 5.38192 20.8H18.6181C20.484 20.8 22 19.2552 22 17.3539C22 16.1146 22 14.8839 22 13.5428H21.9917ZM19.7676 7.66901C19.7093 7.8897 19.551 8.12737 19.3344 8.29713L16.3357 10.6483C15.7276 11.1321 14.4365 12.0319 13.3286 12.8043C12.5373 13.3475 11.5044 13.3306 10.7297 12.7619C8.97209 11.4717 6.34819 9.54488 4.67389 8.28015C4.45731 8.11039 4.29071 7.88122 4.2324 7.66053C4.17409 7.44832 4.21574 7.26159 4.37401 7.1088C4.64057 6.86265 4.99042 6.71835 5.38192 6.71835H18.6181C19.0096 6.71835 19.3594 6.87114 19.626 7.11729C19.7843 7.26159 19.8176 7.44832 19.7676 7.66901ZM3.88255 10.0711C5.57351 11.3443 7.98917 13.1184 9.63015 14.3152C11.0462 15.3507 12.9454 15.3847 14.3865 14.3831C15.486 13.6191 16.8188 12.6855 17.4852 12.1592L20.1091 10.0966V17.3539C20.1091 18.1942 19.4427 18.8817 18.6097 18.8817H5.38192C4.55727 18.8817 3.88255 18.2027 3.88255 17.3539V10.0711Z"/>',
    }}
  />
)

export const tags = ['mail-outline', 'contact']

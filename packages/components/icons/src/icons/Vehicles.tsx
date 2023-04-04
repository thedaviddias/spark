import { IconProps } from '../Types'

export const Vehicles = ({
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
        '<path d="M17.6 14.4256H20.1C20.74 14.4256 21.25 13.9012 21.25 13.2658 21.25 12.6304 20.73 12.1059 20.1 12.1059H17.6C16.96 12.1059 16.45 12.6304 16.45 13.2658 16.45 13.9012 16.97 14.4256 17.6 14.4256ZM6.48 12.0958H3.98C3.34 12.0958 2.83 12.6203 2.83 13.2557 2.83 13.8911 3.35 14.4155 3.98 14.4155H6.48C7.12 14.4155 7.63 13.8911 7.63 13.2557 7.63 12.6203 7.11 12.0958 6.48 12.0958Z"/><path d="M22.85 9.37267C23.49 9.37267 24 8.84821 24 8.21281C24 7.57741 23.48 7.05295 22.85 7.05295H20.74L19.73 4.72315C19.73 4.72315 19.71 4.6828 19.7 4.66263C18.95 3.14977 17.41 2 15.58 2H8.32C6.5 2 4.93 3.13969 4.26 4.72315L3.26 7.05295H1.15C0.51 7.05295 0 7.57741 0 8.21281C0 8.84821 0.52 9.37267 1.15 9.37267H1.18C0.45 10.1795 0 11.2486 0 12.4186V15.7872C0 16.5739 0.32 17.29 0.83 17.8043V19.1558C0.83 20.7191 2.1 22 3.65 22H5.32C6.87 22 8.14 20.7191 8.14 19.1558V18.6314H15.85V19.1558C15.85 20.7191 17.12 22 18.67 22H20.34C21.89 22 23.16 20.7191 23.16 19.1558V17.8043C23.68 17.29 23.99 16.5739 23.99 15.7872V12.4186C23.99 11.2486 23.54 10.1795 22.81 9.37267H22.85ZM5.84 19.1558C5.84 19.4382 5.6 19.6803 5.32 19.6803H3.65C3.37 19.6803 3.13 19.4382 3.13 19.1558V18.6314H5.84V19.1558ZM9.66 16.3116L10.03 15.535C10.03 15.535 10.04 15.5048 10.05 15.4846C10.09 15.3938 10.21 15.2627 10.49 15.2627H13.41C13.69 15.2627 13.81 15.3938 13.85 15.4846C13.86 15.5149 13.87 15.535 13.89 15.5653L14.27 16.3116H9.65H9.66ZM13.42 12.943H10.5C9.46 12.943 8.42 13.4776 7.95 14.5466L7.11 16.3116H2.82C2.54 16.3116 2.3 16.0696 2.3 15.7872V12.4186C2.3 11.2083 3.29 10.2098 4.49 10.2098H19.51C20.71 10.2098 21.7 11.2083 21.7 12.4186V15.7872C21.7 16.0696 21.46 16.3116 21.18 16.3116H16.87L15.96 14.5265C15.49 13.4675 14.45 12.943 13.42 12.943ZM6.38 5.64095C6.71 4.86435 7.48 4.31972 8.33 4.31972H15.59C16.42 4.31972 17.22 4.84418 17.64 5.67121L18.6 7.89007H5.41L6.38 5.64095ZM20.87 19.1558C20.87 19.4382 20.63 19.6803 20.35 19.6803H18.68C18.4 19.6803 18.16 19.4382 18.16 19.1558V18.6314H20.87V19.1558Z"/>',
    }}
  />
)

export const tags = ['vehicles', 'categories']

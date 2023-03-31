import { IconProps } from '../Types'

export const Bath = ({ title, fill = 'currentColor', stroke = 'none', ...props }: IconProps) => (
  <svg
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    {...{ ...(title && { 'data-title': title }), fill, stroke, ...props }}
    dangerouslySetInnerHTML={{
      __html:
        (title === undefined ? '' : `<title>${title}</title>`) +
        '<path fill-rule="evenodd" clip-rule="evenodd" d="M17.887 13.6301H5.11375C4.9135 13.6301 4.75 13.4696 4.75 13.2731C4.75 13.0757 4.9135 12.916 5.11375 12.916H17.887C18.0873 12.916 18.25 13.0757 18.25 13.2731C18.25 13.4696 18.0873 13.6301 17.887 13.6301ZM16.5265 16.8329C16.42 17.212 16.0653 17.4778 15.664 17.4778H7.56175C7.02775 17.4778 6.55675 17.1244 6.415 16.6194L5.78425 14.3664H17.2165L16.5265 16.8329ZM15.0212 8.52638H12.9535C12.9587 7.97418 13.4185 7.52433 13.9818 7.52138H13.993C14.5555 7.52433 15.0152 7.97418 15.0212 8.52638ZM19 13.2731C19 12.7201 18.5785 12.2666 18.0355 12.1944V7.36603C18.0355 6.17182 17.0455 5.19995 15.8282 5.19995C14.8082 5.19995 13.9547 5.88688 13.7035 6.81236C12.8635 6.9471 12.2117 7.65833 12.2035 8.51975C12.2012 8.7156 12.2793 8.90482 12.4203 9.04397C12.5613 9.18386 12.7532 9.26264 12.9535 9.26264H15.0212C15.2207 9.26264 15.4128 9.18386 15.5538 9.04397C15.6948 8.90482 15.7727 8.7156 15.7712 8.51975C15.763 7.72827 15.2118 7.06711 14.4708 6.85948C14.6808 6.32054 15.208 5.93621 15.8282 5.93621C16.6315 5.93621 17.2855 6.5775 17.2855 7.36603V12.1797H5.11375C4.4995 12.1797 4 12.6701 4 13.2731C4.00075 13.8385 4.4425 14.2994 5.0035 14.3554L5.692 16.8145C5.9185 17.6236 6.664 18.1883 7.51375 18.2097L7.2805 18.6669C7.1875 18.8488 7.26175 19.0704 7.44775 19.1617C7.501 19.1882 7.55875 19.2 7.615 19.2C7.75225 19.2 7.885 19.1263 7.95025 18.9975L8.3515 18.2141H14.9665L15.3678 18.9975C15.433 19.1263 15.5658 19.2 15.703 19.2C15.7593 19.2 15.817 19.1882 15.871 19.1617C16.0563 19.0704 16.1305 18.8488 16.0375 18.6669L15.8005 18.2023C16.4808 18.1464 17.0658 17.6825 17.2488 17.028L17.9973 14.3554C18.559 14.3001 19 13.8385 19 13.2731Z"/>',
    }}
  />
)

export const tags = ['bath', 'criteria', 'location']

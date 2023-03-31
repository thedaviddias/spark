import { IconProps } from '../Types'

export const Service = ({ title, fill = 'currentColor', stroke = 'none', ...props }: IconProps) => (
  <svg
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    {...{ ...(title && { 'data-title': title }), fill, stroke, ...props }}
    dangerouslySetInnerHTML={{
      __html:
        (title === undefined ? '' : `<title>${title}</title>`) +
        '<path fill-rule="evenodd" clip-rule="evenodd" d="M23.98 18.7585C23.8299 18.5123 23.6497 18.2558 23.4395 18.0609C23.2193 17.8557 22.9491 17.6915 22.6088 17.6915H21.568V9.30917H22.6088C23.2394 9.30917 23.7398 8.81669 23.7398 8.19083C23.7398 7.56498 23.2394 7.0725 22.6088 7.0725H18.9358C18.7656 7.0725 18.6555 7.03146 18.4654 6.9699C18.4153 6.94938 18.3653 6.93912 18.3053 6.9186L16.1835 5.54378C15.643 5.12312 15.0025 5.03078 14.3219 5.03078H12.6305C11.8198 5.03078 10.8891 5.32832 10.2686 5.95417L7.25605 9.03215C6.63553 9.64774 6.30525 10.684 6.62552 11.5458C6.8457 12.4795 7.58632 13.2079 8.52711 13.4131C9.44787 13.6183 10.3987 13.4131 11.0492 12.777L13.7915 10.0581V10.0376C14.1618 9.56566 14.1618 8.96033 13.8015 8.48837V8.46785L13.7715 8.45759C13.5413 8.23187 13.2611 8.0985 12.9608 8.0985C12.6605 8.0985 12.3803 8.23187 12.1501 8.45759L9.41785 11.156C9.31776 11.2483 9.22769 11.2791 9.14762 11.2791C9.06756 11.2791 8.96747 11.2483 8.8774 11.156C8.85738 11.1354 8.82736 11.1047 8.80734 11.0431C8.78732 10.9918 8.76731 10.9302 8.76731 10.8892C8.76731 10.8482 8.77731 10.7866 8.80734 10.7353C8.82736 10.684 8.85738 10.643 8.8774 10.6224L12.0801 7.55472C12.2002 7.4316 12.3103 7.37004 12.4203 7.329C12.5304 7.28796 12.6606 7.26744 12.8207 7.26744H14.5121C14.6822 7.26744 14.7923 7.30848 14.9825 7.37004C15.0325 7.39056 15.0826 7.40082 15.1426 7.42134L17.2644 8.79617C17.8048 9.21683 18.4454 9.30917 19.1259 9.30917H19.5063V15.6806C19.3761 15.1163 19.0959 14.5622 18.6656 14.1313L15.7431 11.6074C15.5129 11.3817 15.2327 11.2586 14.9425 11.2586C14.6522 11.2586 14.362 11.3919 14.1318 11.6176C13.9016 11.8434 13.7715 12.1204 13.7715 12.4179C13.7715 12.7155 13.9016 12.9925 14.1318 13.2182L16.9541 16.0089C17.0742 16.1218 17.1443 16.2346 17.1843 16.3372C17.2244 16.4501 17.2444 16.5732 17.2444 16.7373C17.2444 16.9015 17.2244 17.0246 17.1843 17.1375C17.1443 17.2503 17.0742 17.3529 16.9541 17.4658C16.834 17.5787 16.7239 17.6505 16.6138 17.6915C16.5038 17.7326 16.3736 17.7531 16.2135 17.7531H8.48707C8.32694 17.7531 8.19683 17.7326 8.08674 17.6915C7.97665 17.6505 7.86655 17.5787 7.74645 17.4658L6.90575 16.6347C6.27523 15.9166 5.34445 15.619 4.53378 15.619H4.4437V9.28865H4.53378C5.34445 9.28865 6.27523 8.99111 6.89575 8.36525L7.74645 7.52394C7.9166 7.35978 8.12677 7.23666 8.29691 7.23666H8.50709L10.769 5H8.48707C7.6764 5 6.74562 5.29754 6.1251 5.92339L5.2744 6.76471C5.1543 6.87757 5.0442 6.94938 4.93411 6.99042C4.82402 7.03146 4.69391 7.05198 4.53378 7.05198H1.13094C0.500417 7.05198 0 7.54446 0 8.17031C0 8.79617 0.500417 9.28865 1.13094 9.28865H2.17181V17.671H1.13094C0.500417 17.671 0 18.1635 0 18.7893C0 19.4152 0.500417 19.9077 1.13094 19.9077H3.29274C3.55296 19.9077 3.90325 19.7845 4.15346 19.5486C4.26355 19.4357 4.36364 19.3228 4.42369 19.1689C4.49374 19.0253 4.51376 18.8714 4.51376 18.697V17.671H4.60384C4.76397 17.671 4.89408 17.6915 5.00417 17.7326C5.11426 17.7736 5.22435 17.8454 5.34445 17.9583L6.19516 18.7996C6.81568 19.4152 7.64637 19.723 8.55713 19.723H16.2836C17.1943 19.723 18.025 19.4254 18.6455 18.7996C19.0659 18.3789 19.3461 17.8659 19.4862 17.3016V18.7893C19.4862 19.0458 19.6063 19.3947 19.8465 19.6409C19.9566 19.7538 20.0767 19.8461 20.2269 19.9077C20.377 19.9692 20.5371 20 20.7073 20H22.8691C23.4996 20 24 19.5075 24 18.8817V18.7996L23.96 18.738L23.98 18.7585Z"/>',
    }}
  />
)

export const tags = ['service', 'categories']

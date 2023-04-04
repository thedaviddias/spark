import { IconProps } from '../Types'

export const FurnitureType = ({
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
        '<path fill-rule="evenodd" clip-rule="evenodd" d="M10.4116 7.41367C10.585 7.41463 10.7364 7.53023 10.7815 7.69611L11.5521 10.3755C11.5793 10.4921 11.554 10.6147 11.4828 10.7113C11.402 10.8137 11.2743 10.8683 11.1437 10.8564L10.0875 10.856V12.8105L10.4116 12.8106C11.03 12.8148 11.529 13.3125 11.529 13.9251L11.5287 14.3295L11.6677 14.3296C12.1323 14.3461 12.5003 14.7241 12.5 15.1846V18.8181C12.5004 19.0203 12.3415 19.1877 12.1378 19.1998H4.38531C4.17251 19.1998 4 19.0289 4 18.8181V15.1846C4 14.9578 4.09093 14.7404 4.2528 14.58C4.41466 14.4197 4.63419 14.3296 4.8631 14.3296L5.08645 14.3295L5.08658 13.9251C5.09078 13.3113 5.59206 12.8147 6.2117 12.8106L9.31714 12.8105V10.856L8.26156 10.8564C8.14561 10.8577 8.03522 10.8072 7.96101 10.719C7.88784 10.629 7.85699 10.5123 7.87625 10.3984L8.42339 7.71901C8.46002 7.54128 8.61787 7.41363 8.801 7.41367H10.4116ZM20.2252 5.19995C20.6606 5.22815 20.9988 5.58571 20.9979 6.01674L20.9993 10.2253C20.9998 10.2329 21 10.2406 21 10.2483L20.9977 10.2703L20.9993 14.1142C20.9998 14.1218 21 14.1295 21 14.1372L20.9977 14.1592L20.9979 18.383C20.9988 18.8141 20.6606 19.1716 20.2252 19.1998H14.1129C13.8909 19.2039 13.6766 19.1197 13.5182 18.966C13.3598 18.8124 13.2706 18.6023 13.2706 18.383V6.01674C13.2706 5.56564 13.6408 5.19995 14.0974 5.19995H20.2252ZM11.6446 15.093L11.2724 15.094C11.2656 15.0964 11.2586 15.0986 11.2516 15.1006C11.2124 15.1106 11.1843 15.1446 11.1822 15.1846L11.1831 16.8272C11.1876 16.8719 11.1899 16.9173 11.1899 16.9632L11.1895 18.4362L11.7294 18.4365V15.1846C11.7295 15.1368 11.6926 15.097 11.6446 15.093ZM5.27924 15.1006H4.8631C4.83857 15.1006 4.81505 15.1103 4.79771 15.1274C4.78037 15.1446 4.77063 15.1679 4.77063 15.1922L4.79374 18.4365H5.33318V15.1846C5.33346 15.1485 5.31234 15.1156 5.27924 15.1006ZM10.4113 17.5962L6.10381 17.5968V18.4365H10.4116L10.4113 17.5962ZM20.225 14.5185H17.5088V18.4214L20.1788 18.4222C20.2041 18.4158 20.2227 18.4478 20.2252 18.4222L20.225 14.5185ZM16.7384 14.5185H14.0439L14.0434 18.4222L16.7384 18.4214V14.5185ZM9.83364 16.383H6.7049C6.425 16.3866 6.1912 16.5768 6.12355 16.8332L10.4046 16.8335C10.3451 16.5755 10.1121 16.383 9.83364 16.383ZM15.9773 15.5205C16.1901 15.5205 16.3626 15.6913 16.3626 15.9021V16.4365C16.3626 16.6473 16.1901 16.8182 15.9773 16.8182C15.7662 16.8141 15.5961 16.6456 15.592 16.4365V15.9021C15.5961 15.693 15.7662 15.5245 15.9773 15.5205ZM18.2944 15.5205C18.5072 15.5205 18.6797 15.6913 18.6797 15.9021V16.4365C18.6797 16.6473 18.5072 16.8182 18.2944 16.8182C18.0816 16.8182 17.9091 16.6473 17.9091 16.4365V15.9021C17.9091 15.6913 18.0816 15.5205 18.2944 15.5205ZM10.4116 13.5586L9.80661 13.5599C9.77353 13.569 9.73866 13.5739 9.70263 13.5739C9.66674 13.5739 9.63201 13.5691 9.59905 13.56L6.2117 13.5586C6.01764 13.5627 5.86129 13.7176 5.85721 13.9098V14.5739C6.01598 14.7321 6.1047 14.9463 6.10381 15.1693L6.10362 15.7597C6.28508 15.6711 6.48909 15.6209 6.7049 15.6197H9.83364C10.0405 15.6197 10.2366 15.6656 10.4121 15.7476L10.4116 15.1846L10.4121 15.1687L10.4153 15.0827C10.4385 14.8472 10.5624 14.6307 10.7584 14.4899V13.9098C10.7584 13.7188 10.6044 13.5628 10.4116 13.5586ZM20.225 10.6296H14.0447L14.0439 13.7547H20.225V10.6296ZM10.1111 8.17702H9.12466L8.73164 10.093H10.6428L10.1111 8.17702ZM20.225 8.28462H14.0447V9.86584H20.225V8.28462ZM20.2252 5.97773H14.0455V7.54417H20.225L20.2252 5.97773Z"/>',
    }}
  />
)

export const tags = ['furniture_type', 'criteria', 'house']

import { IconProps } from '../Types'

export const PrintOutline = ({
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
        '<path fill-rule="evenodd" clip-rule="evenodd" d="M21.3006 8.45313C20.8593 8.01184 20.2598 7.76204 19.627 7.76204H17.8285V3.87362C17.8285 3.43232 17.6536 3.00767 17.3372 2.69127C17.0208 2.37487 16.5962 2.20001 16.1549 2.20001H7.8368C7.3955 2.20001 6.97086 2.37487 6.65445 2.69127C6.33805 3.00767 6.1632 3.43232 6.1632 3.87362V7.75372H4.3647C3.74022 7.75372 3.14072 8.00351 2.69109 8.44481C2.24979 8.88611 2 9.48561 2 10.1184V16.3632C2 16.9877 2.24979 17.5872 2.69109 18.0368C3.13239 18.4864 3.73189 18.7279 4.3647 18.7279H6.1632V20.5264C6.1632 20.9677 6.33805 21.3924 6.65445 21.7088C6.97086 22.0252 7.3955 22.2 7.8368 22.2H16.1632C16.6045 22.2 17.0291 22.0252 17.3455 21.7088C17.6619 21.3924 17.8368 20.9677 17.8368 20.5264V18.7279H19.6353C20.2598 18.7279 20.8593 18.4781 21.3089 18.0368C21.7502 17.5955 22 16.996 22 16.3632V10.1184C22 9.49393 21.7502 8.89443 21.3089 8.44481L21.3006 8.45313ZM8.1199 4.15671H15.8801V7.75372H8.1199V4.15671ZM8.1199 20.2433V16.6463H15.8801V20.2433H8.1199ZM20.0433 16.3632C20.0433 16.4715 20.0017 16.5797 19.9184 16.6546C19.8351 16.7296 19.7352 16.7712 19.627 16.7712H17.8285V15.6638C17.8285 15.1226 17.3955 14.6896 16.8543 14.6896H7.14571C6.6045 14.6896 6.17152 15.1226 6.17152 15.6638V16.7712H4.37302C4.26478 16.7712 4.15654 16.7296 4.0816 16.6546C4.00666 16.5797 3.9567 16.4715 3.9567 16.3632V10.1184C3.9567 10.0102 3.99833 9.90193 4.0816 9.82699C4.15654 9.75205 4.26478 9.70209 4.37302 9.70209H19.6353C19.7435 9.70209 19.8518 9.74373 19.9267 9.82699C20.0017 9.91025 20.0516 10.0102 20.0516 10.1184V16.3632H20.0433Z"/><path fill-rule="evenodd" clip-rule="evenodd" d="M17.5454 11.2258H16.1549C15.6137 11.2258 15.1807 11.6588 15.1807 12.2C15.1807 12.7412 15.6137 13.1742 16.1549 13.1742H17.5454C18.0866 13.1742 18.5196 12.7412 18.5196 12.2C18.5196 11.6588 18.0866 11.2258 17.5454 11.2258Z"/>',
    }}
  />
)

export const tags = ['print-outline', 'actions']

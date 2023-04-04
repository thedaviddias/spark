import { IconProps } from '../Types'

export const Land = ({ title, fill = 'currentColor', stroke = 'none', ...props }: IconProps) => (
  <svg
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    {...{ ...(title && { 'data-title': title }), fill, stroke, ...props }}
    dangerouslySetInnerHTML={{
      __html:
        (title === undefined ? '' : `<title>${title}</title>`) +
        '<path fill-rule="evenodd" clip-rule="evenodd" d="M21.11 20.4585C21.53 20.4585 21.88 20.1184 21.88 19.7082C21.88 19.298 21.54 18.9579 21.11 18.9579H19.35V18.3076C19.35 17.8875 19.01 17.5573 18.58 17.5573C18.16 17.5573 17.81 17.8975 17.81 18.3076V18.9579H16.05V18.3076C16.05 17.8875 15.71 17.5573 15.28 17.5573C14.86 17.5573 14.51 17.8975 14.51 18.3076V18.9579H12.96C12.96 18.9179 12.98 18.8879 12.98 18.8479V16.9671C13.52 16.877 14.06 16.707 14.55 16.4669C15.1 16.1967 15.6 15.8366 16.03 15.4164C16.46 15.5165 16.9 15.5665 17.34 15.5665C18.84 15.5665 20.28 14.9762 21.34 13.9358C22.4 12.8954 23 11.4748 23 10.0042C23 8.53356 22.4 7.11296 21.34 6.07253C20.46 5.21217 19.32 4.66194 18.1 4.49187C17.75 3.34139 17.07 2.31096 16.13 1.52063C14.96 0.540225 13.48 0 11.94 0C10.4 0 8.92 0.540225 7.75 1.52063C6.81 2.31096 6.13 3.3514 5.78 4.51188C4.61 4.69196 3.51 5.23218 2.66 6.07253C1.6 7.11296 1 8.53356 1 10.0042C1 11.4748 1.6 12.8954 2.66 13.9358C3.72 14.9762 5.16 15.5665 6.66 15.5665C7.1 15.5665 7.54 15.5165 7.97 15.4164C8.4 15.8466 8.9 16.1967 9.45 16.4669C9.87 16.6769 10.32 16.827 10.78 16.9271V18.8479C10.78 18.8479 10.8 18.9179 10.8 18.9579H9.45V18.3076C9.45 17.8875 9.11 17.5573 8.68 17.5573C8.26 17.5573 7.91 17.8975 7.91 18.3076V18.9579H6.15V18.3076C6.15 17.8875 5.81 17.5573 5.38 17.5573C4.96 17.5573 4.61 17.8975 4.61 18.3076V18.9579H2.85C2.43 18.9579 2.08 19.298 2.08 19.7082C2.08 20.1184 2.42 20.4585 2.85 20.4585H4.61V22.1792H2.85C2.43 22.1792 2.08 22.5194 2.08 22.9296C2.08 23.3397 2.42 23.6799 2.85 23.6799H4.76C4.9 23.8699 5.12 24 5.37 24C5.62 24 5.84 23.8699 5.98 23.6799H8.05C8.19 23.8699 8.41 24 8.66 24C8.91 24 9.13 23.8699 9.27 23.6799H11.34C11.48 23.8699 11.7 24 11.95 24C12.2 24 12.42 23.8699 12.56 23.6799H14.63C14.77 23.8699 14.99 24 15.24 24C15.49 24 15.71 23.8699 15.85 23.6799H17.92C18.06 23.8699 18.28 24 18.53 24C18.78 24 19 23.8699 19.14 23.6799H21.05C21.47 23.6799 21.82 23.3397 21.82 22.9296C21.82 22.5194 21.48 22.1792 21.05 22.1792H19.29V20.4585H21.05H21.11ZM14.52 20.4585V22.1792H12.76V20.4585H14.52ZM10.45 14.5461C9.97 14.306 9.55 13.9558 9.22 13.5356C8.92 13.1355 8.38 12.9954 7.92 13.1855C7.53 13.3456 7.11 13.4256 6.69 13.4156H6.68C5.76 13.4156 4.88 13.0554 4.22 12.4152C3.57 11.7749 3.2 10.9145 3.2 10.0042C3.2 9.09379 3.57 8.23343 4.22 7.59316C4.87 6.9529 5.75 6.59275 6.68 6.59275C7.22 6.59275 7.68 6.20258 7.77 5.68237C7.92 4.70196 8.43 3.80158 9.2 3.16132C9.97 2.51105 10.95 2.1609 11.96 2.1609C12.97 2.1609 13.95 2.52105 14.72 3.16132C15.49 3.81159 15.99 4.70196 16.15 5.68237C16.23 6.21259 16.69 6.59275 17.24 6.59275H17.36C18.28 6.59275 19.16 6.9529 19.82 7.59316C20.47 8.23343 20.84 9.09379 20.84 10.0042C20.84 10.9145 20.47 11.7749 19.82 12.4152C19.17 13.0554 18.29 13.4156 17.36 13.4156H17.35C16.93 13.4156 16.51 13.3456 16.12 13.1855C15.66 12.9954 15.12 13.1455 14.82 13.5356C14.5 13.9658 14.08 14.306 13.59 14.5461C13.4 14.6361 13.2 14.6961 13 14.7561V12.6953L14.96 10.7745C15.39 10.3543 15.39 9.67403 14.96 9.25386C14.53 8.83368 13.84 8.83368 13.41 9.25386L11.9 10.7345L10.39 9.25386C9.96 8.83368 9.27 8.83368 8.84 9.25386C8.41 9.67403 8.41 10.3543 8.84 10.7745L10.8 12.6953V14.6761C10.69 14.6361 10.57 14.6061 10.46 14.5561L10.45 14.5461ZM11.22 20.4585V22.1792H9.46V20.4585H11.22ZM6.17 20.4585H7.93V22.1792H6.17V20.4585ZM17.81 22.1792H16.05V20.4585H17.81V22.1792Z"/>',
    }}
  />
)

export const tags = ['land', 'categories']

import { IconProps } from '../Types'

export const Surface = ({ title, fill = 'currentColor', stroke = 'none', ...props }: IconProps) => (
  <svg
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    {...{ ...(title && { 'data-title': title }), fill, stroke, ...props }}
    dangerouslySetInnerHTML={{
      __html:
        (title === undefined ? '' : `<title>${title}</title>`) +
        '<path fill-rule="evenodd" clip-rule="evenodd" d="M18.6316 5.19995C18.8351 5.19995 19 5.3649 19 5.56837V18.8315C19 19.035 18.8351 19.2 18.6316 19.2H5.36842C5.16495 19.2 5 19.035 5 18.8315V5.56837C5 5.3649 5.16495 5.19995 5.36842 5.19995H18.6316ZM18.2222 5.97773H5.77778V18.4222H18.2222V5.97773ZM8.188 16.7143L8.21912 16.7515C8.1957 16.7267 8.17616 16.6997 8.1605 16.6711L8.14932 16.6491C8.14263 16.6348 8.13688 16.6202 8.13204 16.6054C8.13018 16.5997 8.12844 16.5939 8.12684 16.5881C8.12254 16.5726 8.11922 16.5568 8.11689 16.5408C8.11596 16.5343 8.11517 16.5278 8.11455 16.5213L8.11322 16.5027L8.11343 16.462L8.11455 16.4473C8.11517 16.4408 8.11596 16.4343 8.1169 16.4278C8.11922 16.4118 8.12254 16.396 8.12685 16.3804L8.13205 16.3632C8.13688 16.3484 8.14263 16.3338 8.14929 16.3196L8.16052 16.2974C8.16705 16.2855 8.17428 16.2739 8.18219 16.2625C8.18404 16.2598 8.186 16.257 8.188 16.2543L8.20251 16.2358C8.20781 16.2295 8.21335 16.2232 8.21912 16.2171L8.22713 16.2106L8.23449 16.2017L9.36474 15.133C9.5208 14.9854 9.76693 14.9923 9.9145 15.1483C10.0457 15.2871 10.0548 15.4969 9.94562 15.6455L9.89913 15.6981L9.48467 16.0888H15.8889V9.67606L15.4916 10.0974C15.344 10.2535 15.0979 10.2603 14.9418 10.1128C14.8031 9.9816 14.7822 9.77255 14.883 9.61811L14.9264 9.56301L15.9952 8.43276L16.0106 8.41739L16.0304 8.40051L16.0203 8.40828L16.0296 8.40128L16.0478 8.38627C16.0505 8.38427 16.0533 8.38231 16.056 8.38039L16.0514 8.3834L16.0909 8.35877C16.0982 8.35481 16.1055 8.35108 16.113 8.34759C16.1273 8.3409 16.1419 8.33514 16.1567 8.33031L16.174 8.32511C16.1895 8.3208 16.2053 8.31748 16.2213 8.31516C16.2278 8.31422 16.2343 8.31344 16.2408 8.31282C16.2531 8.31163 16.2656 8.31105 16.2781 8.31106L16.3001 8.31169L16.3147 8.31282C16.3213 8.31344 16.3278 8.31422 16.3343 8.31517C16.3502 8.31749 16.3661 8.3208 16.3817 8.32512L16.3989 8.33032C16.4137 8.33514 16.4283 8.3409 16.4425 8.34756C16.45 8.35108 16.4574 8.35481 16.4647 8.35879C16.4766 8.36532 16.4882 8.37255 16.4996 8.38046C16.5023 8.38231 16.505 8.38427 16.5078 8.38627L16.5263 8.40078C16.5326 8.40608 16.5389 8.41161 16.545 8.41739L16.5514 8.42539L16.5603 8.43276L17.6291 9.56301C17.7767 9.71907 17.7698 9.9652 17.6137 10.1128C17.475 10.2439 17.2651 10.2531 17.1166 10.1439L17.064 10.0974L16.6667 9.67684V16.4777C16.6667 16.6686 16.5291 16.8274 16.3477 16.8604L16.2778 16.8666H9.47144L9.89913 17.2705C10.0552 17.4181 10.0621 17.6642 9.9145 17.8203C9.78333 17.959 9.57428 17.9798 9.41984 17.8791L9.36474 17.8356L8.23449 16.7669L8.21912 16.7515L8.185 16.7095L8.1869 16.7127L8.20289 16.7321L8.188 16.7143Z"/>',
    }}
  />
)

export const tags = ['surface', 'criteria', 'immobilier']

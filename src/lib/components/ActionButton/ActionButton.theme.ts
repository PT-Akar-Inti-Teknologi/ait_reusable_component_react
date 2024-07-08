
export const Theme = {
  button: [
    'relative overflow-hidden bg-inherit flex justify-center items-center rounded-md cursor-pointer transition-[background] p-0',
    'focus:outline-none',
    'disabled:cursor-not-allowed disabled:opacity-50'
  ],
  bgButton: 'absolute bg-primary t-0 l-0 w-full h-full transition-all duration-200',

  loadingIcon: [
    'inline w-5 h-5 text-inherit fill-transparent animate-spin'
  ]
};

export const ButtonSize = {
  md: 'w-[32px] h-[32px]'
};

export const IconSize = {
  md: 'w-[20px] h-[20px]'
};

export const ButtonVariants = {
  detail: [
    'bg-primary-100 text-primary',
    'hover:bg-primary-200',
    'dark:bg-primary-800',
    'dark:hover:bg-primary-700'
  ],
  edit: [
    'bg-warning-100 text-warning',
    'hover:bg-warning-200',
    'dark:bg-warning-800',
    'dark:hover:bg-warning-700'
  ],
  delete: [
    'bg-danger-100 text-danger',
    'hover:bg-danger-200',
    'dark:bg-danger-800',
    'dark:hover:bg-danger-700'
  ]
};

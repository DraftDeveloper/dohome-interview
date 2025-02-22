/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  safelist: [
    'from-red-300','border-red-300','hover:border-red-200', 'bg-red-100','text-red-500','checked:border-red-600','checked:bg-red-600','indeterminate:border-red-600','indeterminate:bg-red-600','focus-visible:outline-red-600','disabled:border-red-300','disabled:bg-red-100','disabled:checked:bg-red-100','text-red-900','bg-red-200','bg-red-600',
    'from-yellow-300','border-yellow-300','hover:border-yellow-200', 'bg-yellow-100','text-yellow-500','checked:border-yellow-600','checked:bg-yellow-600','indeterminate:border-yellow-600','indeterminate:bg-yellow-600','focus-visible:outline-yellow-600','disabled:border-yellow-300','disabled:bg-yellow-100','disabled:checked:bg-yellow-100','text-yellow-900','bg-yellow-200','bg-yellow-600',
    'from-green-300','border-green-300','hover:border-green-200', 'bg-green-100','text-green-500','checked:border-green-600','checked:bg-green-600','indeterminate:border-green-600','indeterminate:bg-green-600','focus-visible:outline-green-600','disabled:border-green-300','disabled:bg-green-100','disabled:checked:bg-green-100','text-green-900','bg-green-200','bg-green-600',
    'from-sky-300','border-sky-300','hover:border-sky-200', 'bg-sky-100','text-sky-500','checked:border-sky-600','checked:bg-sky-600','indeterminate:border-sky-600','indeterminate:bg-sky-600','focus-visible:outline-sky-600','disabled:border-sky-300','disabled:bg-sky-100','disabled:checked:bg-sky-100','text-sky-900','bg-sky-200','bg-sky-600',
    'from-purple-300','border-purple-300','hover:border-purple-200', 'bg-purple-100','text-purple-500','checked:border-purple-600','checked:bg-purple-600','indeterminate:border-purple-600','indeterminate:bg-purple-600','focus-visible:outline-purple-600','disabled:border-purple-300','disabled:bg-purple-100','disabled:checked:bg-purple-100','text-purple-900','bg-purple-200','bg-purple-600'
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
}

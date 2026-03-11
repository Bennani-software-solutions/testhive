export function Button({ children, onClick, size = 'md', className =
'', ...rest }) {
const sizes = {
sm: 'px-3 py-2 text-sm',
md: 'px-5 py-3 text-base',
lg: 'px-6 py-4 text-lg'
}
return (
<button
onClick={onClick}
className={`inline-flex items-center justify-center rounded-2xl bg-cyan-500 hover:bg-cyan-600 active:bg-cyan-700 text-white font-semibold
shadow-soft focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300/
70 ${sizes[size]} ${className}`}
{...rest}
>
{children}
</button>
)
}
export function ALink({ href, children, newTab = false }) {
return (
<a
href={href}
target={newTab ? '_blank' : undefined}
rel={newTab ? 'noreferrer' : undefined}
className="text-thAccent hover:underline"
>
{children}
</a>
)
}
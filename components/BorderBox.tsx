export default function BorderBox({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className='p-[1px] my_border_gradient_white_dark before:rounded-[20px]'>
      {children}
    </div>
  )
};

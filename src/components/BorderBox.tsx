export default function BorderBox({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className='border border-[rgba(255,255,255,0.4)] rounded-[16px] md:rounded-[20px]'>
      {children}
    </div>
  )
};

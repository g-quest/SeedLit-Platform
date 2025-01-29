export default function Section({ children }: { children: React.ReactNode }) {
  return (
    <div className={`flex flex-col items-center justify-center py-12 px-4`}>
      <div className="max-w-7xl">{children}</div>
    </div>
  )
}

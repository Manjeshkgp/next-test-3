import './globals.css';

export const metadata = {
  title: 'Task 3',
  description: 'Created Manually',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}

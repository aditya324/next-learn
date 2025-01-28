export default function DashBoardLayout ({children}: Readonly<{children: React.ReactNode}>) {
    return (

        <div>
            <h1>dashboard header</h1>

            <div>
                {children}
            </div>
        </div>
    )
}
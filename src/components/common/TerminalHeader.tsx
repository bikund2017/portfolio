interface TerminalHeaderProps {
    title?: React.ReactNode;
    className?: string;
    children?: React.ReactNode;
}

export default function TerminalHeader({ title, className = '', children }: TerminalHeaderProps): React.ReactElement {
    return (
        <div className={`flex items-center ${children ? 'justify-between' : 'gap-2'} px-4 py-3 bg-[#161b22] border-b border-[#30363d] ${className}`}>
            <div className="flex items-center gap-2">
                <div className="flex gap-1.5">
                    <div className="w-3 h-3 rounded-full bg-[#ff5f56]" />
                    <div className="w-3 h-3 rounded-full bg-[#ffbd2e]" />
                    <div className="w-3 h-3 rounded-full bg-[#27c93f]" />
                </div>
                {title && (
                    <span className="font-mono text-sm text-[#7d8590] ml-4">{title}</span>
                )}
            </div>
            {children}
        </div>
    );
}

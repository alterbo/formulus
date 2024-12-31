interface Props {
    children?: React.ReactNode;
    validating: boolean;
}

export const FormulusColumn = ({ children, validating }: Props) => {
    return (
        <>
            <div className="grid grid-cols-6">
                <div className="border-r border-t border-slate-200 ml-1 min-h-[10vh] rounded-arc-left-1 dark:border-slate-600"></div>
                <div className="border-r border-t border-slate-200 ml-1 min-h-[10vh] rounded-arc-left-2 dark:border-slate-600"></div>
                <div className="border-r border-t border-slate-200 ml-1 min-h-[10vh] rounded-arc-left-3 dark:border-slate-600"></div>
                <div className="border-l border-t border-slate-200 mr-1 min-h-[10vh] rounded-arc-right-1 dark:border-slate-600"></div>
                <div className="border-l border-t border-slate-200 mr-1 min-h-[10vh] rounded-arc-right-2 dark:border-slate-600"></div>
                <div className="border-l border-t border-slate-200 mr-1 min-h-[10vh] rounded-arc-right-3 dark:border-slate-600"></div>
            </div>
            <div className="column border-x border-t border-slate-200 grow min-h-[5vh] max-h-[672px] mx-[8%] relative dark:border-slate-600">
                {children}
                <div className={`absolute bg-vertical-stripes left-0 h-full top-0 w-full -z-10 ${validating ? 'bg-vertical-stripes' : ''}`}>
                </div>
            </div>
            <div className="border border-slate-400 h-6 mx-[5%] rounded"></div>
            <div className="border border-slate-200 h-6 dark:border-slate-600"></div>
        </>
    );
};

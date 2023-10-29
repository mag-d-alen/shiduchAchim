import { ResultRow } from './ResultRow'
import { ShiuchRequestType } from '../types'


export const ResultsTable = ({ results, headerTitles }: { results: [ShiuchRequestType] , headerTitles:string[]}) => {
    return (
        <>
            <div className={`grid grid-cols-${headerTitles.length} mt-10 text-sm text-right border-b border-slate-400`}>
                {headerTitles.map((header: string) => (
                    <div key={header} className="px-6 py-3 textBlue">
                        {header}
                    </div>
                ))}
            </div>
            {results.map(result => <ResultRow key={result.id} result={result} />)}
        </>

    )
}


import { ResultRow } from './ResultRow'
import { ShiuchInstanceType } from '../types'


export const ResultsTable = ({ results, headerTitles }: { results: [ShiuchInstanceType] , headerTitles:string[]}) => {
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


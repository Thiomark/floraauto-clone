import { FC, useContext, useState } from 'react';
import { PartsContext } from '../providers/PartsProvider';

const PaginationComponent: FC = () => {
    const {carParts, fetchCarParts, partsCount} = useContext(PartsContext);
    const [page, setPage] = useState(1);
    const limit = 12;

    const start = (direction: any) => +direction === 1 ? 0 : (+direction - 1) * limit;
    
    const getMoreProjects = (direction : any) => {
        const whereToStart = start(direction);
        if(!carParts) return;
        fetchCarParts?.(whereToStart);
        setPage(direction);
    };

    if (partsCount <= 12) return null;

    return (   
        <div className={`flex justify-center items-center`}>
            <Button
                emitEvent={() => getMoreProjects(page - 1)}
                title='previous'
                disabled={page <= 1}
            >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 16l-4-4m0 0l4-4m-4 4h18" />
            </Button>
            <Button
                emitEvent={() => getMoreProjects(page + 1)}
                title='Next'
                disabled={start(page + 1) > partsCount || carParts?.length < limit}
            >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </Button>
        </div>
    )
}

const Button = ({title, children, disabled, emitEvent} : any) => {
    const disableButton = disabled ? 'cursor-not-allowed text-gray-200' : 'text-gray-500';

    return (
        <button onClick={emitEvent} disabled={disabled} className={`px-4 py-2 mx-1 rounded-md border-2 border-gray-950 bg-gray-930 ${disableButton} capitalize bg-white `}>
            <div className="flex items-center -mx-1">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 mx-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    {children}
                </svg>
                <span className="mx-1 hidden md:block">
                    {title}
                </span>
            </div>
        </button>
    )
}

export default PaginationComponent
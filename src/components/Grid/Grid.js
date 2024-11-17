import React, { useCallback, useMemo } from 'react';
import './grid.css';
import Column from '../Column/Column';

function Grid({ gridData, grouping, userIdToData }) {
    // Use useMemo to optimize the computation of keys
    const keys = useMemo(() => Object.keys(gridData), [gridData]);

    return (
        <div className='grid'>
            {keys.map((k) => (
                <Column
                    key={k}
                    tickets={gridData[k]}
                    grouping={grouping}
                    groupBy={k}
                    userIdToData={userIdToData}
                />
            ))}
        </div>
    );
}

export default Grid;

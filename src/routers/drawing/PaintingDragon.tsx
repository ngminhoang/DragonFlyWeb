
import React from 'react';
import Stack from '@mui/material/Stack';
import Canvas from '../../components/Canvas';
import Toolbox from '../../components/Toolbox';
import CanvasProvider from '../../providers/CanvasProvider';
import { Link } from 'react-router-dom';

const DrawingDragon = ({ dragonType, name, data }: { dragonType: string; name: string; data: string }) => {
    
    return (
        <CanvasProvider>
            <Stack
                direction="row"
                sx={{ width: '100%', height: '90vh', mx: 1, overflow: 'hidden' }}
            >
                <div><Toolbox name={name} data={data}/>
                </div>
                
                <div style={{ height: 900, width: 190}}>
                <Canvas width={165} height={870} dragonType={dragonType} />
                </div>
            </Stack>
        </CanvasProvider>
    );
}
export default DrawingDragon;

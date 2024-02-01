import { Box } from '@mui/material';
import { useEffect, useRef, useState } from 'react';
import { CanvasSize } from '../../types/common';
import Fabric from './Fabric';

const Canvas: React.VFC<{width:number,height:number, dragonType: string }> = ({width,height, dragonType })=> {
    
    const containerRef = useRef<HTMLDivElement>(null);
    const canvasRef = useRef<any>(null);
    const [view, setView] = useState<CanvasSize>({ width: width, height: height });
    useEffect(() => {
        const observer = new ResizeObserver((entries) => {
            const { width, height } = entries[0].contentRect;
            setView({
                width,
                height,
            });
        });

        if (containerRef.current) {
            observer.observe(containerRef.current);
        }

        return () => {
            observer.disconnect();
        };
    }, []);

    return (
        <Box
            ref={containerRef}
            sx={{
                flex: 1,
                m: 1,
                width: 'auto',
                height: '98%',
                overscrollBehavior: 'contain',
                overflow: 'hidden',
                border: '1px solid #ccc',
                borderRadius: 1,
            }}
        >
            
            <Fabric {...view } dragonType={dragonType} />
            
            
            
            
        </Box>
    );
};

export default Canvas;

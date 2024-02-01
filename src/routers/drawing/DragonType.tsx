import React from 'react';
import Button from '@mui/material/Button';

interface DragonTypeProps {
    onChangeDragonType: (newDragonType: string) => void;
}

const DragonType: React.FC<DragonTypeProps> = ({ onChangeDragonType }) => {
    const handleDragonTypeChange = (newDragonType: string) => {
        onChangeDragonType(newDragonType);
    };

    return (
        <div>
            <Button onClick={() => handleDragonTypeChange('Sample_01')}>Dragon Type 1</Button>
            <Button onClick={() => handleDragonTypeChange('Sample_02')}>Dragon Type 2</Button>
            <Button onClick={() => handleDragonTypeChange('Sample_03')}>Dragon Type 3</Button>
            <Button onClick={() => handleDragonTypeChange('Sample_04')}>Dragon Type 4</Button>
        </div>
    );
};

export default DragonType;
import {
    Box,
    FormControl,
    FormControlLabel,
    FormLabel,
    Radio,
    RadioGroup,
    Slider,
    Stack,
    TextField,
    Typography,
} from '@mui/material';
import { ChangeEvent, Dispatch, SetStateAction, useCallback, useContext } from 'react';
import { CanvasContext } from '../providers/CanvasProvider';
import { CanvasMode, CanvasModes, isCanvasMode } from '../types/common';
import { BorderAll } from '@mui/icons-material';

interface Props {
    mode: CanvasMode;
    setMode: Dispatch<SetStateAction<CanvasMode>>;
    strokeWidth: number;
    setStrokeWidth: Dispatch<SetStateAction<number>>;
    strokeColor: string;
    setStrokeColor: Dispatch<SetStateAction<string>>;
}

const Toolbox: React.VFC<Props & {name: string, data: string}> = ({
    mode,
    strokeWidth,
    strokeColor,
    setMode,
    setStrokeColor,
    setStrokeWidth,name,data
}) => {
    const handleChangeMode = useCallback(
        (event: ChangeEvent<HTMLInputElement>) => {
            const { value } = event.target;
            if (isCanvasMode(value)) {
                setMode(value);
            }
        },
        [setMode]
    );

    const handleChangeWidth = useCallback(
        (_: Event, value: number | number[]) => {
            if (typeof value === 'number') {
                setStrokeWidth(value);
            }
        },
        [setStrokeWidth]
    );

    const handleChangeColor = useCallback(
        (event: ChangeEvent<HTMLInputElement>) => {
            const { value } = event.target;
            setStrokeColor(value);
        },
        [setStrokeColor]
    );
    


    return (
        <Stack sx={{ width: 160 }} direction="column" spacing={2}>
            {/* canvasMode */}
            <FormControl component="fieldset">
                <FormLabel component="legend">
                    <RadioGroup name="canvas-mode" value={mode} onChange={handleChangeMode}>
                        {CanvasModes.map((item) => (
                            <FormControlLabel
                                key={`radio_mode_${item}`}
                                value={item}
                                label={item}
                                control={<Radio />}
                            />
                        ))}
                    </RadioGroup>
                </FormLabel>
            </FormControl>
            {/* strokeWidth */}
            <Typography variant="caption">Cỡ bút</Typography>
            <Box sx={{ width: 160, px: 1 }}>
                <Slider value={strokeWidth} onChange={handleChangeWidth} min={1} max={60} />
            </Box>
            {/* strokeColor */}
            <TextField
                type="color"
                label="Color"
                fullWidth
                value={strokeColor}
                onChange={handleChangeColor}
            />
            {/* <button>
                Undo
            </button> */}
            <div style={{border:'10px solid RGB(145,240,250)'}}>
            <h2 style={{ fontFamily: 'Arial, sans-serif', paddingLeft:5 }}>{name}</h2>
            <p style={{ fontFamily: 'Arial, sans-serif', paddingLeft:5  }}>{data}</p>
            </div>
            
        </Stack>
    );
};

const ConnectedToolbox: React.VFC<{name: string, data: string}> = (props) => {
    const context = useContext(CanvasContext);
    return <Toolbox {...context} {...props}/>;
};

export default ConnectedToolbox;

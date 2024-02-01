import Stack from "@mui/material/Stack";
import Canvas from "../../components/Canvas";
import Toolbox from "../../components/Toolbox";
import CanvasProvider from "../../providers/CanvasProvider";

const DrawingLantern = ({ dragonType }: { dragonType: string }) => {
    
    return (
        <CanvasProvider>
            
                
                <Toolbox name="lồng đèn" data="" />
                
                <div style={{ height: 350, width: 350}}>
                <Canvas width={350}height={350} dragonType={dragonType} />
                </div>
        </CanvasProvider>
    );
}

export default DrawingLantern;


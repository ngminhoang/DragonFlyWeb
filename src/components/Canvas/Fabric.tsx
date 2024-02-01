import axios from 'axios';
import { fabric } from 'fabric';
import { child, get, getDatabase, ref, set } from "firebase/database";
import React, { useCallback, useContext, useEffect, useRef } from 'react';
import { CanvasContext, ICanvasContext } from '../../providers/CanvasProvider';
import { CanvasSize } from '../../types/common';
import { database } from "./firebase";


type Props = CanvasSize & ICanvasContext;

interface Position {
    x: number;
    y: number;
}

const MaxPageWidth = 2970;
const MaxPageHeight = 2100;
const LongPressInterval = 1000;

const Fabric: React.VFC<Props & {dragonType:string}> = ({ width, height, mode, strokeWidth, strokeColor, dragonType}) => {

    
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const fabricRef = useRef<fabric.Canvas>();

    const enablePan = useRef(false);
    const isDragging = useRef(false);
    const lastPos = useRef<Position>({ x: 0, y: 0 });
    const longpressTimer = useRef<NodeJS.Timer>();
    const paths = useRef<fabric.Object[]>([]);
    
    const drawnPaths: any[] = [];
    

    const clearCanvas = () => {
        if (fabricRef.current) {
            fabricRef.current.clear();
            paths.current = [];
        }
    };


    useEffect(() => {

        
        if (canvasRef.current) {
            const canvas = new fabric.Canvas(canvasRef.current, {
                selection: true,
                isDrawingMode: false,
                enableRetinaScaling: true,
            });
            canvas.setBackgroundColor('rgb(88, 88, 88)', canvas.renderAll.bind(canvas));

            

            canvas.on('mouse:down', (event: fabric.IEvent<MouseEvent | TouchEvent>) => {
                if (enablePan.current) {
                    let x = 0;
                    let y = 0;
                    if (event.e.type === 'touchstart') {
                        const { touches } = event.e as TouchEvent;
                        const { clientX, clientY } = touches[0];
                        x = clientX;
                        y = clientY;
                    } else {
                        const { clientX, clientY } = event.e as MouseEvent;
                        x = clientX;
                        y = clientY;
                    }

                    canvas.selection = false; 
                    isDragging.current = true;
                    lastPos.current = {
                        x,
                        y,
                    };
                }
            });
            canvas.on('mouse:move', (event: fabric.IEvent<MouseEvent | TouchEvent>) => {
                if (isDragging.current) {
                    let x = 0;
                    let y = 0;
                    if (event.e.type === 'touchmove') {
                        const { touches } = event.e as TouchEvent;
                        const { clientX, clientY } = touches[0];
                        x = clientX;
                        y = clientY;
                    } else {
                        const { clientX, clientY } = event.e as MouseEvent;
                        x = clientX;
                        y = clientY;
                    }
                    const viewPort = canvas.viewportTransform;
                    const zoom = canvas.getZoom();
                    const canvasWidth = canvas.getWidth();
                    const canvasHeight = canvas.getHeight();
                    if (viewPort) {
                        let px = viewPort[4];
                        let py = viewPort[5];


                        if (canvasWidth >= MaxPageWidth * zoom) {
                            px = canvasWidth / 2 - (MaxPageWidth * zoom) / 2;
                        } else {
                            px += x - lastPos.current.x;
                            if (px >= 0) {
                                px = 0;
                            } else if (px < canvasWidth - MaxPageWidth * zoom) {
                                px = canvasWidth - MaxPageWidth * zoom;
                            }
                        }

                        if (canvasHeight >= MaxPageHeight * zoom) {
                            py = canvasHeight / 2 - (MaxPageHeight * zoom) / 2;
                        } else {
                            py += y - lastPos.current.y;
                            if (py >= 0) {
                                py = 0;
                            } else if (py < canvasHeight - MaxPageHeight * zoom) {
                                py = canvasHeight - MaxPageHeight * zoom;
                            }
                        }

                        viewPort[4] = px;
                        viewPort[5] = py;

                        canvas.requestRenderAll();
                    }

                    lastPos.current = {
                        x,
                        y,
                    };
                }
            });
            canvas.on('mouse:up', () => {
                const viewPort = canvas.viewportTransform;
                if (viewPort) {
                    canvas.setViewportTransform(viewPort);
                }
                //const imageData = fabricRef.current?.getContext().getImageData(0,0,canvas.getWidth(),canvas.getHeight());
                //drawnPaths.current.push()
                isDragging.current = false;
            });

            canvas.on('selection:created', (event: fabric.IEvent<Event>) => {
                console.log('selection:created: ', event);
            });
            canvas.on('selection:updated', (event: fabric.IEvent<Event>) => {
                console.log('selection:updated: ', event);
            });
            canvas.on('mouse:dblclick', (event: fabric.IEvent<Event>) => {
                console.log('mouse:dblclick: ', event);
            });
            canvas.on('touch:longpress', (event: fabric.IEvent<Event>) => {
                console.log('touch:longpress: ', event);
            });
            canvas.on('path:created', (event: fabric.IEvent) => {
                
            const path = event.target as fabric.Path;
            drawnPaths.push(path);

            });

            fabricRef.current = canvas;
        }
    }, []);


    
    const undo = () => {
        if (fabricRef.current && drawnPaths.length > 0) {
            const lastPath = drawnPaths.pop();
            const canvas = fabricRef.current;
            if (lastPath) {
                canvas.remove(lastPath); // Remove the last drawn path from canvas
                //canvas.requestRenderAll();
                alert(lastPath)
            }
        }
    };

    useEffect(() => {
        if (fabricRef.current) {
            fabricRef.current.setDimensions({
                width,
                height,
            });
        }
    }, [width, height]);
    
    const setBrush = useCallback((color: string, width: number) => {
        if (fabricRef.current) {
            let brush = fabricRef.current.freeDrawingBrush;
            if (!Boolean(brush)) {
                brush = new fabric.PencilBrush(fabricRef.current);
                fabricRef.current.freeDrawingBrush = brush;
            }

            brush.color = color;
            brush.width = width;
        }
    }, []);


    useEffect(() => {
        if (fabricRef.current) {
            let isDrawingMode = false;
            if (mode === 'Vẽ') {
                isDrawingMode = true;
                setBrush(strokeColor, strokeWidth);
            } else if (mode === 'Xóa') {
                isDrawingMode = true;
                setBrush("rgb(88, 88, 88)", strokeWidth);
            }
            fabricRef.current.isDrawingMode = isDrawingMode;
        }
    }, [mode, setBrush, strokeColor, strokeWidth]);



    





    return (
        <div>
          <div style={{ width: width, height: 50 }}>
            <input style={{width:'173px', height:'50px',fontSize:30 , color:'white', backgroundColor:'RGB(50,150,215)'}} type="button" onClick={() => uploadImage(fabricRef.current,dragonType)} value="Lưu ảnh" />
            {/*<input type="button" onClick={() => merge(fabricRef.current)} value="Merge" />
             <input type="button" onClick={() => undo} value="Undo" />
                <input type="button" onClick={() => clearCanvas} value="Clear Canvas" /> */}
          </div>


          <div>
            <div style={{ position: "absolute" }}>
            <canvas ref={canvasRef} width={width} height={height} />
            </div>
            <div id="img-container" style={{ position: "absolute",pointerEvents: 'none' }} >
                <img src={process.env.PUBLIC_URL + "/"+ dragonType +".png"} width="165px" height="870px" alt="Transparent Image" />
            </div>
          </div>
        </div>
      );
};


function merge(canvas: any, dragonType: string) {
    const ctx = canvas.getContext("2d");

    // Load the image into a fabric.js Image object
    const imageObj1 = new Image();
    imageObj1.src = process.env.PUBLIC_URL + "/"+ dragonType +".png";

    // Add the Image object to the canvas
    const fabricImage = new fabric.Image(imageObj1, {
        left: 0,     // Adjust the left position as needed
        top: 0,      // Adjust the top position as needed
        width: 165,  // Set the width of the image
        height: 870, // Set the height of the image
    });

    canvas.add(fabricImage);

    // If you want to make the image a permanent part of the canvas, you can consider removing it
    // from the DOM after adding it to the canvas.
    // canvas.remove(canvas.getElement());  // Uncomment this line if you want to remove the canvas element
}


const uploadImage = async (canvas: any, dragonType: string) => {
    if (!canvas) {
      console.error('Canvas reference not found.');
      return;
    }
    merge(canvas, dragonType)
    const ext = 'png';
    const base64 = canvas.toDataURL({
      format: ext,
      enableRetinaScaling: true,
    });
  
    const cloudName = 'dooyfe3ar';
    const presetName = 'DragonFly';
    const folderName = 'DragonFly_Image_Data';
    const postAPI = `https://api.cloudinary.com/v1_1/${cloudName}/image/upload`;
  
    const formData = new FormData();
    formData.append('upload_preset', presetName);
    formData.append('folder', folderName);
    formData.append('file', base64);
    
    try {
        alert("Ảnh đang lưu, hãy chờ một chút nha");
        const response = await axios.post(postAPI, formData, {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        });
        const imageUrl = response.data.secure_url;
        console.log('Image URL:', imageUrl);
        
        create(imageUrl)
        window.location.href = '/poster'

    } catch (error) {
      console.error('Error uploading image to Cloudinary:', error);
    }
  };


const dbRef = ref(database);
get(child(dbRef, `users`)).then((snapshot) => {
  if (snapshot.exists()) {
    console.log(snapshot.val());
  } else {
    console.log("No data available");
  }
}).catch((error) => {
  console.error(error);
});


function create(url:string) {
    const db = getDatabase();
    const date = new Date().toLocaleTimeString('en-US', { hour12: false }).toString();
    set(ref(db, 'users/' + date),
    {
        "url": url,
        "date": date
    }
    );
  }

async function getUserCount() {
    const db = getDatabase();
    const usersRef = ref(db, 'users');
  
    try {
      const snapshot = await get(usersRef);
  
      if (snapshot.exists()) {
        // Lấy số lượng phần tử trong root 'users'
        const userCount = snapshot.size;
        console.log('Number of users:', userCount);
      } else {
        console.log('No users found.');
      }
    } catch (error) {
      console.error('Error getting user count:', error);
    }
  }








const ConnectedFabric: React.VFC<CanvasSize & { dragonType: string }> = (props) => {
    const context = useContext(CanvasContext);
    return <Fabric {...context} {...props}  />
};



export default ConnectedFabric;

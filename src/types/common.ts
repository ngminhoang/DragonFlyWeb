export type CanvasSize = { width: number; height: number };

export const CanvasModes = ['Xóa', 'Vẽ'] as const;
export type CanvasMode = typeof CanvasModes[number];
export const isCanvasMode = (item: unknown): item is CanvasMode => {
    if (typeof item === 'string') {
        return CanvasModes.some((mode) => mode === item);
    }
    return false;
};

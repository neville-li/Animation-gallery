class Drawing {
    static createCanvas(parentElement){
        const canvas = document.createElement("canvas");
        canvas.id = "canvasCreatedByDrawingClass";
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        parentElement.appendChild(canvas);
        return canvas;
    }
    static removeCanvas(){
        document.querySelector("#canvasCreatedByDrawingClass").remove();
    }
}

export default Drawing;
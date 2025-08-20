import { useEffect, useRef } from "react";

export default function BackgroundCanvas({}) {
    const canvasRef = useRef();
    const requestRef = useRef();

    useEffect(_ => {

        // Init
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');
        
        // Size
        const setCanvasSize = _ => {
            canvas.width = window.innerWidth-20;
            canvas.height = window.innerHeight-20;
        };
        setCanvasSize();
        window.addEventListener('resize', setCanvasSize);
        window.addEventListener('click', setCanvasSize);
        window.addEventListener('scroll', setCanvasSize);
        
        const randomizeSquare = _ => {
            return {
                x: Math.random() * canvas.width,
                y: Math.random() * canvas.height,
                dy: (Math.random()) * 2 + 0.5,
                size: (Math.random() + 0.1) * (canvas.width < 500 ? 75 : 100),
            }
        }
        const squaresCount = canvas.width < 500 ? 15 : 25;
        let squares = Array.from({ length: squaresCount }, () => randomizeSquare());
        const animate = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            // Draw squares
            for (let i = 0; i < squares.length; i++) {
                const square = squares[i];
                
                ctx.save();
                ctx.translate(square.x + square.size / 2, square.y + square.size / 2);
                ctx.rotate(0.785398);
                ctx.fillStyle = 'rgba(227, 23, 10, 0.2)';
                ctx.fillRect(-square.size / 2, -square.size / 2, square.size, square.size);
                ctx.restore();

                squares[i].y -= square.dy;
                if (squares[i].y < -square.size-10 || squares[i].x > window.innerWidth || squares[i].x < 0) {
                    squares[i] = randomizeSquare();
                    squares[i].y = window.innerHeight
                }
            }
            requestRef.current = requestAnimationFrame(animate);
        };

        requestRef.current = requestAnimationFrame(animate);

        return () => {
            cancelAnimationFrame(requestRef.current);
            window.removeEventListener('resize', setCanvasSize);
        }
    }, []);

    return (<canvas ref={canvasRef} className="background" />);
}
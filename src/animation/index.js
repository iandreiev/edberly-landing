import { value, styler, spring, physics } from "popmotion"
import {lerp,clamp,interpolate} from "./interpolate"

const container = document.querySelector('#jelly')

const containerStyler = styler(container)

const valueY = value(0, (v) => {
    containerStyler.set({ transform: `skewY(${v}rad)` });
});

lerp = interpolate([-5, 0, 5], [-Math.PI / 7, 0, Math.PI / 7]);

export const scroll = useScroll({
    onScroll: ({ v }) => {
        physics({
            to: lerp(v),
            friction: 0.6,
            restSpeed: false,
            from: valueY.get(),
            springStrength: 100,
            velocity: valueY.getVelocity(),
        }).start(valueY);
    },
});


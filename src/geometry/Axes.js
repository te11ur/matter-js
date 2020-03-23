import {Common} from "../core/Common";
import {Vector} from "./Vector";

/**
* The `Matter.Axes` module contains methods for creating and manipulating sets of axes.
*
* @class Axes
*/
export class Axes {
    /**
     * Creates a new set of axes from the given vertices.
     * @method fromVertices
     * @param vertices {number[][]} vertices
     * @return {axes} A new axes from the given vertices
     */
    static fromVertices(vertices) {
        var axes = {};

        // find the unique axes, using edge normal gradients
        for (var i = 0; i < vertices.length; i++) {
            var j = (i + 1) % vertices.length,
                normal = Vector.normalise({
                    x: vertices[j].y - vertices[i].y,
                    y: vertices[i].x - vertices[j].x
                }),
                gradient = (normal.y === 0) ? Infinity : (normal.x / normal.y);

            // limit precision
            gradient = gradient.toFixed(3).toString();
            axes[gradient] = normal;
        }

        return Common.values(axes);
    };

    /**
     * Rotates a set of axes by the given angle.
     * @method rotate
     * @param axes {} axes
     * @param {number} angle
     */
    static rotate(axes, angle) {
        if (angle === 0)
            return;

        var cos = Math.cos(angle),
            sin = Math.sin(angle);

        for (var i = 0; i < axes.length; i++) {
            var axis = axes[i],
                xx;
            xx = axis.x * cos - axis.y * sin;
            axis.y = axis.x * sin + axis.y * cos;
            axis.x = xx;
        }
    };
}


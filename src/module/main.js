import {Matter as MatterCore} from '../core/Matter';
import {Body} from "../body/Body";
import {Composite} from "../body/Composite";
import {World} from "../body/World";
import {Contact} from "../collision/Contact";
import {Detector} from "../collision/Detector";
import {Grid} from "../collision/Grid";
import {Pairs} from "../collision/Pairs";
import {Pair} from "../collision/Pair";
import {Query} from "../collision/Query";
import {Resolver} from "../collision/Resolver";
import {SAT} from "../collision/SAT";
import {Constraint} from "../constraint/Constraint";
import {MouseConstraint} from "../constraint/MouseConstraint";
import {Common} from "../core/Common";
import {Engine} from "../core/Engine";
import {Events} from "../core/Events";
import {Mouse} from "../core/Mouse";
import {Runner} from "../core/Runner";
import {Sleeping} from "../core/Sleeping";
import {Plugin} from "../core/Plugin";
import {Metrics} from "../core/Metrics";
import {Bodies} from "../factory/Bodies";
import {Composites} from "../factory/Composites";
import {Axes} from "../geometry/Axes";
import {Bounds} from "../geometry/Bounds";
import {Svg} from "../geometry/Svg";
import {Vector} from "../geometry/Vector";
import {Vertices} from "../geometry/Vertices";
import {Render} from "../render/Render";

export class Matter extends MatterCore {
    static Body = Body;
    static Composite = Composite;
    static World = World;

    static Contact = Contact;
    static Detector = Detector;
    static Grid = Grid;
    static Pairs = Pairs;
    static Pair = Pair;
    static Query = Query;
    static Resolver = Resolver;
    static SAT = SAT;

    static Constraint = Constraint;
    static MouseConstraint = MouseConstraint;

    static Common = Common;
    static Engine = Engine;
    static Events = Events;
    static Mouse = Mouse;
    static Runner = Runner;
    static Sleeping = Sleeping;
    static Plugin = Plugin;

// @if DEBUG
    static Metrics = Metrics;
// @endif

    static Bodies =Bodies;
    static Composites = Composites;

    static Axes = Axes;
    static Bounds = Bounds;
    static Svg = Svg;
    static Vector = Vector;
    static Vertices = Vertices;

    static Render = Render;
}

// aliases
Matter.World.add = Matter.Composite.add;
Matter.World.remove = Matter.Composite.remove;
Matter.World.addComposite = Matter.Composite.addComposite;
Matter.World.addBody = Matter.Composite.addBody;
Matter.World.addConstraint = Matter.Composite.addConstraint;
Matter.World.clear = Matter.Composite.clear;
Matter.Engine.run = Matter.Runner.run;
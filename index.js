import Segment from "./quarters/Segment.js";
import Quarter from "./quarters/Quarter.js";

let edges = []

edges.push(new Segment(0.0, 2.5, 2.5, 0))
edges.push(new Segment(2.5, 0, 5.0, 1.0))
edges.push(new Segment(5.0, 1.0, 4.5, 3.5))
edges.push(new Segment(4.5, 3.5, 2.5, 5.5))
edges.push(new Segment(2.5, 5.5, 0.0, 2.5))

let quarter = new Quarter(edges)
quarter.generateBuildings()
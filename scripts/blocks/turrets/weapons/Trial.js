calculateCirclePoints(cx, cy, r) {
    let points = [];
    

    // Loop over the angles t from 0 to 360 degrees
    for (let t = 0; t <= 360; t++) {
        let radians = (Math.PI / 180) * t;  // Convert degrees to radians
        let x = r * Math.cos(radians) + cx;
        let y = r * Math.sin(radians) + cy;
        
        // Store the calculated points
        points.push({ x: x, y: y });
    }

    return points;
}
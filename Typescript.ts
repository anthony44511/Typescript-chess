// Function to create a box with an outline
function createBox(id: string, content: string, style: string): void {
    // Create a new div element
    const box = document.createElement("div");

    // Set the id, content, and style of the box
    box.id = id;
    box.textContent = content;
    // Add an outline to the style
    box.style.cssText = style + " border: 2px solid black;";

    // Append the box to the body of the document
    document.body.appendChild(box);
}

// Create multiple boxes with outlines
createBox("box1", "This is Box 1", "width: 100px; height: 100px; background-color: #f00;");
createBox("box2", "This is Box 2", "width: 150px; height: 150px; background-color: #0f0;");
createBox("box3", "This is Box 3", "width: 200px; height: 200px; background-color: #00f;");

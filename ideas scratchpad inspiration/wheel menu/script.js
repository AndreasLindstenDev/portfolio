

var itemNames = ["Home", "About", "Projects", "Contact"];

function addMenuItems(numItems) {
    
    if(numItems <= 2) {
        numItems = 3;
    }

    if(numItems > itemNames.length) {
        while(numItems > itemNames.length) {
            itemNames.push("Item " + (itemNames.length + 1));
        }
    }
    

    const menu = document.querySelector('.menu');

    if (menu) {
        for (let i = 0; i < numItems; i++) {
            const newItem_a = document.createElement('a');
            newItem_a.href = "#";
            const newItem_borders = document.createElement('div');
            var diviation = 0;
            if((numItems / 2) % 2 != 0) {
                diviation = (360 / numItems) / 2;
            }
            rotationAngle = (i+1) * 360 / numItems;
            skewAngle = ((360 / numItems) - 90);
            optionAngle = rotationAngle + skewAngle + (90 - skewAngle) / 2;
            newItem_borders.style.transform = `rotate(-${rotationAngle - diviation}deg) 
                                               skew(${skewAngle}deg)`;
            newItem_borders.style.transformOrigin = "0% 100%";
            newItem_borders.className = "item";
            const newItem_text = document.createElement('div');
            newItem_text.textContent = itemNames[i];
            newItem_text.className = "option";
            
            newItem_text.style.transform = `rotateZ(${optionAngle}deg)
                                            translateY(-6.5em)
                                            rotateZ(-${optionAngle}deg)`;
            newItem_a.appendChild(newItem_text);
            newItem_a.appendChild(newItem_borders);
            menu.appendChild(newItem_a);
        }
    }
}

// Ensure DOM is loaded before running
document.addEventListener('DOMContentLoaded', function() {
    addMenuItems(6);
});

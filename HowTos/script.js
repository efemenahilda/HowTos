import data from './data.js';

const container = document.getElementById("container");

data.forEach((item, index) => { 

    
        const newDiv = document.createElement('div');
        

        // Set the class for styling
        newDiv.className = 'custom';

        // Create a heading element for content
        const heading = document.createElement('a');
        


        heading.textContent = ` ${item.name}`;
        heading.href = `#target-${index}`;

       
        // Append the heading and paragraph to the new div
        newDiv.appendChild(heading);
        

        // Append the new div to the container
        container.appendChild(newDiv);
})

const container_one = document.getElementById("container-one");
data.forEach((item, index) => { 

    
        const newDiv = document.createElement('div');
        

        // Set the class for styling
        newDiv.className = 'custom-div';
        newDiv.id = `target-${index}`;

        // Create a heading element for content
        const heading = document.createElement('h2');
        heading.textContent = ` ${item.name}`;

        // Create a paragraph element for additional info
        const paragraph = document.createElement('p');
        paragraph.textContent = ` ${item.id}`;


////////////////////////////////////////////////
        const topicsList = document.createElement('ul');
    
        item.topics.forEach(topic => {
            const topicItem = document.createElement('li');
    
            const topicHeading = document.createElement('h3');
            topicHeading.textContent = ` ${topic.topic}`;
    
            const topicExplanation = document.createElement('p');
            topicExplanation.textContent = ` ${topic.explantion}`;
    
            const topicImg = document.createElement('img');
            topicImg.src = topic.img;
            topicImg.alt = `${topic.img} `;

            topicItem.appendChild(topicHeading);
            topicItem.appendChild(topicExplanation);
            
            topicsList.appendChild(topicItem);
            topicItem.appendChild(topicImg);
        });
///////////////////////////////////////////////


        // Append the heading and paragraph to the new div
        newDiv.appendChild(heading);
        newDiv.appendChild(paragraph);
        newDiv.appendChild(topicsList);

        // Append the new div to the container
        container_one.appendChild(newDiv);
})






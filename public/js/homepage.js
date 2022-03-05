const ctx = document.getElementById('myChart').getContext('2d');
const generateChart = async () => {
    //finds all messages by user from most to least
    const getAllMessages = await fetch('/api/message/', {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
    });
    const allMessages = await getAllMessages.json();
    //sorts by user id
    allMessages.sort((a, b) => {
        return a.user_id - b.user_id;
    });
    //counts the number of messages per user
    let userTally = [{ userId: allMessages[0].user_id, count: 1 }];
    allMessages.forEach((message, index) => {
        if (index === 0) {
            return;
        }
        if (message.user_id === allMessages[index - 1].user_id) {
            userTally[userTally.length - 1].count++;
        } else {
            userTally.push({ userId: message.user_id, count: 1 });
        }
    });
    //converts usertally to array of usernames using user id
    const userNames = await fetch('/api/users/', {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
    });
    const allUsers = await userNames.json();
    const myLabels = [];
    userTally.forEach(user => {
        myLabels.push(allUsers.find(userObj => userObj.id === user.userId).username);
    });
    const myData = [];
    userTally.forEach(user => {
        myData.push(user.count);
    });

    //populates chart
    const myChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: myLabels,
            datasets: [{
                label: 'message highscores',
                data: myData,
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                    'rgba(75, 192, 192, 0.2)',
                    'rgba(153, 102, 255, 0.2)',
                    'rgba(255, 159, 64, 0.2)',
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                    'rgba(75, 192, 192, 0.2)'
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(255, 159, 64, 1)',
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)'
                ],
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });
}

generateChart();
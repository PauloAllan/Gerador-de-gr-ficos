function creatChart(type, height = 400) {
    const canvasContainer = document.getElementById('canvas-container');
    canvasContainer.innerHTML = `<canvas id="myChart"></canvas>`;
    canvasContainer.style.height = `${height}px`;

    const ctx = document.getElementById('myChart').getContext('2d');
    return new chartData(ctx, {
        type: type,
        data: chartData,
        options: {
            scales: {
                y: {
                    beginAtZero: true
                }
            },
            onclick: (event, actieElements) => {
                if (actieElements.length > 0) {
                    const { datasetIndex, index } = actieElements[0];
                    removeData; { datasetIndex, index; };
                }
            },
        }
    });
}

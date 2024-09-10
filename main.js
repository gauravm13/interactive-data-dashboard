document.addEventListener('DOMContentLoaded', function () {
    // Sample data
    const data = {
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
        datasets: [
            {
                label: 'Category 1',
                data: [12, 19, 3, 5, 2, 3, 7],
                backgroundColor: 'rgba(255, 99, 132, 0.2)',
                borderColor: 'rgba(255, 99, 132, 1)',
                borderWidth: 1
            },
            {
                label: 'Category 2',
                data: [8, 15, 4, 7, 5, 6, 9],
                backgroundColor: 'rgba(54, 162, 235, 0.2)',
                borderColor: 'rgba(54, 162, 235, 1)',
                borderWidth: 1
            }
        ]
    };

    // Create a chart
    const ctx = document.getElementById('dataChart').getContext('2d');
    const chart = new Chart(ctx, {
        type: 'bar',
        data: data,
        options: {
            responsive: true,
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });

    // Filter data
    document.getElementById('dataFilter').addEventListener('change', function () {
        const selectedValue = this.value;
        if (selectedValue === 'all') {
            chart.data.datasets[0].data = [12, 19, 3, 5, 2, 3, 7];
            chart.data.datasets[1].data = [8, 15, 4, 7, 5, 6, 9];
        } else if (selectedValue === 'category1') {
            chart.data.datasets[0].data = [12, 19, 3, 5, 2, 3, 7];
            chart.data.datasets[1].data = Array(7).fill(null);
        } else if (selectedValue === 'category2') {
            chart.data.datasets[0].data = Array(7).fill(null);
            chart.data.datasets[1].data = [8, 15, 4, 7, 5, 6, 9];
        }
        chart.update();
    });
});

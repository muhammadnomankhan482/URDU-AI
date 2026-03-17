// For the income chart
const ctx = document.getElementById('incomeChart').getContext('2d');
const incomeChart = new Chart(ctx, {
    type: 'bar', // or 'line', 'pie', etc.
    data: {
        labels: ['جنوری', 'فروری', 'مارچ', 'اپریل', 'مئی', 'جون'],
        datasets: [{
            label: 'ماہانہ آمدنی',
            data: [450000, 480000, 520000, 510000, 550000, 580000],
            backgroundColor: 'rgba(52, 152, 219, 0.8)',
            borderColor: 'rgba(41, 128, 185, 1)',
            borderWidth: 1
        }]
    },
    options: {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
            y: {
                beginAtZero: true,
                ticks: {
                    callback: function(value, index, values) {
                        return 'PKR ' + value / 1000 + 'k';
                    }
                }
            }
        },
        plugins: {
            legend: {
                display: false
            }
        }
    }
});

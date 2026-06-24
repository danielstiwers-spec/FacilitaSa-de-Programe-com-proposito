/**
 * FacilitaSaúde - Charts Initialization
 * Configura todos os gráficos da aplicação com Chart.js
 */

document.addEventListener('DOMContentLoaded', function () {
    // Função auxiliar para inicializar gráficos
    function initChart(id, config) {
        var el = document.getElementById(id);
        if (!el) {
            el = document.createElement('canvas');
            el.id = id;
            var container = document.querySelector('[data-chart="' + id + '"]') || document.body;
            container.appendChild(el);
        }
        return new Chart(el, config);
    }

    // Paleta de cores consistente
    const colors = {
        primary: 'rgba(43, 108, 176, 1)',
        secondary: 'rgba(0, 135, 90, 1)',
        warning: 'rgba(255, 193, 7, 1)',
        danger: 'rgba(220, 53, 69, 1)',
        info: 'rgba(54, 162, 235, 1)',
        success: 'rgba(75, 192, 75, 1)'
    };

    // Configuração comum para todos os gráficos
    const commonOptions = {
        responsive: true,
        maintainAspectRatio: true,
        plugins: {
            legend: {
                display: true,
                position: 'bottom',
                labels: {
                    font: { size: 12, family: '"Rawline", sans-serif' },
                    padding: 15,
                    usePointStyle: true
                }
            }
        }
    };

    // ===== GRÁFICO 1: REFEIÇÃO (Doughnut) =====
    initChart('mealChart', {
        type: 'doughnut',
        data: {
            labels: ['Proteínas', 'Carboidratos', 'Gorduras'],
            datasets: [{
                data: [40, 45, 15],
                backgroundColor: [
                    'rgba(220, 53, 69, 0.8)',
                    'rgba(255, 193, 7, 0.8)',
                    'rgba(255, 99, 132, 0.8)'
                ],
                borderColor: [
                    'rgba(220, 53, 69, 1)',
                    'rgba(255, 193, 7, 1)',
                    'rgba(255, 99, 132, 1)'
                ],
                borderWidth: 2
            }]
        },
        options: {
            ...commonOptions,
            plugins: {
                ...commonOptions.plugins,
                tooltip: {
                    callbacks: {
                        label: function(context) {
                            return context.label + ': ' + context.parsed + 'g';
                        }
                    }
                }
            }
        }
    });

    // ===== GRÁFICO 2: ÁGUA (Bar) =====
    initChart('waterChart', {
        type: 'bar',
        data: {
            labels: ['08h', '10h', '12h', '14h', '16h', '18h'],
            datasets: [{
                label: 'Copos de Água',
                data: [1, 2, 2, 1, 2, 1],
                backgroundColor: 'rgba(54, 162, 235, 0.8)',
                borderColor: 'rgba(54, 162, 235, 1)',
                borderWidth: 1,
                borderRadius: 4
            }]
        },
        options: {
            ...commonOptions,
            indexAxis: 'x',
            scales: {
                y: {
                    beginAtZero: true,
                    max: 3,
                    ticks: { stepSize: 1 }
                }
            }
        }
    });

    // ===== GRÁFICO 3: ATIVIDADES (Pie) =====
    initChart('activityChart', {
        type: 'pie',
        data: {
            labels: ['Caminhada', 'Academia', 'Corrida', 'Futebol'],
            datasets: [{
                data: [30, 60, 20, 90],
                backgroundColor: [
                    'rgba(75, 192, 75, 0.8)',
                    'rgba(54, 162, 235, 0.8)',
                    'rgba(255, 99, 132, 0.8)',
                    'rgba(255, 159, 64, 0.8)'
                ],
                borderColor: [
                    'rgba(75, 192, 75, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 99, 132, 1)',
                    'rgba(255, 159, 64, 1)'
                ],
                borderWidth: 2
            }]
        },
        options: {
            ...commonOptions,
            plugins: {
                ...commonOptions.plugins,
                tooltip: {
                    callbacks: {
                        label: function(context) {
                            return context.label + ': ' + context.parsed + ' min';
                        }
                    }
                }
            }
        }
    });

    // ===== GRÁFICO 4: FREQUÊNCIA CARDÍACA (Line) =====
    initChart('heartChart', {
        type: 'line',
        data: {
            labels: ['08h', '10h', '12h', '14h', '16h', '18h'],
            datasets: [{
                label: 'BPM (Batidas por Minuto)',
                data: [72, 75, 78, 120, 88, 74],
                borderColor: 'rgba(220, 53, 69, 1)',
                backgroundColor: 'rgba(220, 53, 69, 0.1)',
                borderWidth: 3,
                fill: true,
                tension: 0.4,
                pointRadius: 5,
                pointBackgroundColor: 'rgba(220, 53, 69, 1)',
                pointBorderColor: '#fff',
                pointBorderWidth: 2
            }]
        },
        options: {
            ...commonOptions,
            scales: {
                y: {
                    beginAtZero: false,
                    min: 60,
                    max: 140
                }
            },
            plugins: {
                ...commonOptions.plugins,
                tooltip: {
                    backgroundColor: 'rgba(0, 0, 0, 0.8)',
                    padding: 12,
                    callbacks: {
                        label: function(context) {
                            return 'BPM: ' + context.parsed.y;
                        }
                    }
                }
            }
        }
    });

    // ===== GRÁFICO 5: QUALIDADE DO SONO (Line) =====
    initChart('sleepChart', {
        type: 'line',
        data: {
            labels: ['22h', '23h', '00h', '01h', '02h', '03h', '04h'],
            datasets: [{
                label: 'Qualidade do Sono (%)',
                data: [70, 78, 75, 82, 88, 85, 90],
                borderColor: 'rgba(54, 162, 235, 1)',
                backgroundColor: 'rgba(54, 162, 235, 0.2)',
                borderWidth: 3,
                fill: true,
                tension: 0.3,
                pointRadius: 5,
                pointBackgroundColor: 'rgba(54, 162, 235, 1)',
                pointBorderColor: '#fff',
                pointBorderWidth: 2
            }]
        },
        options: {
            ...commonOptions,
            scales: {
                y: {
                    beginAtZero: true,
                    min: 0,
                    max: 100
                }
            },
            plugins: {
                ...commonOptions.plugins,
                tooltip: {
                    backgroundColor: 'rgba(0, 0, 0, 0.8)',
                    padding: 12,
                    callbacks: {
                        label: function(context) {
                            return 'Qualidade: ' + context.parsed.y + '%';
                        }
                    }
                }
            }
        }
    });

    // ===== SERVICE WORKER REGISTRATION =====
    if ('serviceWorker' in navigator) {
        navigator.serviceWorker.register('/sw.js').catch(() => {
            // Service Worker registration failed - app still works without it
        });
    }
});

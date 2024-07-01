let menuVisible = false;

// Función que oculta o muestra el menú
function mostrarOcultarMenu() {
  if (menuVisible) {
    document.getElementById("nav").classList = "";
    menuVisible = false;
  } else {
    document.getElementById("nav").classList = "responsive";
    menuVisible = true;
  }
}

function seleccionar() {
  // Oculto el menú una vez que selecciono una opción
  document.getElementById("nav").classList = "";
  menuVisible = false;
}

function showView(viewId) {
  // Ocultar todas las vistas
  const views = document.querySelectorAll('.view');
  views.forEach(view => view.style.display = 'none');

  // Mostrar la vista seleccionada
  const view = document.getElementById(viewId);
  view.style.display = 'block';
}

// Mostrar la vista de Ventas al cargar la página
document.addEventListener('DOMContentLoaded', () => {
  showView('ventas');

  // Si la sección de estadísticas está presente, inicializa el gráfico
  if (document.getElementById('ventasChart')) {
    const ctx = document.getElementById('ventasChart').getContext('2d');
    new Chart(ctx, {
      type: 'line',
      data: {
        labels: ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio'],
        datasets: [{
          label: 'Ventas Mensuales',
          data: [10, 20, 15, 10, 15, 25], // Datos ajustados
          borderColor: 'rgba(75, 192, 192, 1)',
          backgroundColor: 'rgba(75, 192, 192, 0.2)',
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
});

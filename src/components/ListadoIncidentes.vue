<template>
    <div>
        <h1>Listado de Incidentes</h1>
        <ul>
            <li v-for="reporte in reportes" :key="reporte.id">
                <p><strong>Reporte:</strong> {{ reporte.nombre }}</p>
                <p><strong>Estado:</strong> {{ reporte.estado }}</p>
                <p><strong>Fecha:</strong> {{ reporte.fecha }}</p>
                <p><strong>Usuario:</strong> {{ reporte.usuario }}</p>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    name: 'ListadoIncidentes',
    data() {
        return {
            reportes: [
                { id: 1, nombre: 'Incidente 1', estado: 'Abierto', fecha: '2023-10-01', usuario: 'Juan Perez' },
                { id: 2, nombre: 'Incidente 2', estado: 'En Progreso', fecha: '2023-10-02', usuario: 'Maria Lopez' },
                { id: 3, nombre: 'Incidente 3', estado: 'Cerrado', fecha: '2023-10-03', usuario: 'Carlos Sanchez' }
            ]
        };
    }
};
</script>

<style scoped>
h1 {
    font-size: 24px;
    margin-bottom: 20px;
}

ul {
    list-style-type: none;
    padding: 0;
}

li {
    border: 1px solid #ccc;
    padding: 10px;
    margin-bottom: 10px;
}

p {
    margin: 5px 0;
}
</style>